/**
 * United Autism Therapy — consultation form → Google Sheets + email alert.
 *
 * Setup (once): see docs/google-apps-script/SETUP.md
 *   1. Create a Google Sheet, open Extensions → Apps Script, paste this file.
 *   2. Run `setup` once (authorize when asked).
 *   3. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 *   4. Copy the Web app URL into INTEGRATIONS.formEndpoint in src/data/site.ts.
 *
 * Privacy: since 2026-11-15 the form collects the child's name, date of birth,
 * insurance and autism-diagnosis status. That is protected health information.
 * Run this Sheet and script on a Google Workspace account covered by a signed
 * BAA; a regular Google account is not HIPAA-covered. The alert email
 * deliberately leaves out the child's details (they are in the Sheet).
 */

// ---- Settings -------------------------------------------------------------
const NOTIFY_EMAIL = 'nntnhan96@gmail.com,kellyavalon8@gmail.com,support@unitedautismtherapy.org'; // who gets an email for each request (comma-separate for more)
const SHEET_NAME = 'Intake Requests'; // new tab (2026-11-15); the old 'Consultation Requests' tab keeps earlier rows
const SITE_NAME = 'United Autism Therapy';
const THANK_YOU_URL = 'https://unitedautismtherapy.org/thank-you/';

// Column order in the sheet. Keys must match the form field `name`s.
// Same order as the website form. 'child_dob' is built from the three
// date-of-birth boxes (child_dob_month / _day / _year).
const FIELDS = [
  ['child_name', "Child's full name"],
  ['child_dob', "Child's date of birth"],
  ['name', 'Parent / legal guardian'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['zip', 'Zip code'],
  ['insurance', 'Primary insurance'],
  ['region', 'Region location'],
  ['diagnosed', 'Autism diagnosis by licensed professional'],
  ['availability', 'Availability'],
  ['consent', 'SMS consent'],
  ['page', 'Page'],
];
// Fields included in the alert email (no child details).
const EMAIL_FIELDS = ['name', 'phone', 'email', 'zip', 'region', 'availability'];
const EXTRA_COLUMNS = ['Status', 'Notes'];

// ---- One-time setup -------------------------------------------------------
/** Run once from the editor: creates the sheet tab with headers. */
function setup() {
  const sheet = getSheet_();
  sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold').setBackground('#d6e8fa');
  sheet.setFrozenRows(1);
  // Trigger the Gmail permission prompt now rather than on the first lead.
  MailApp.getRemainingDailyQuota();
}

// ---- Web app endpoint -----------------------------------------------------
function doPost(e) {
  const p = Object.assign({}, (e && e.parameter) || {});
  p.child_dob = dob_(p);

  // Spam honeypot: real people never fill this hidden field.
  if (p._gotcha) return respond_(p, { result: 'success' });

  // Minimal validation.
  const required = ['child_name', 'name', 'email', 'phone', 'zip', 'insurance', 'region', 'diagnosed', 'availability', 'consent'];
  const missing = required.filter((k) => !clean_(p[k]));
  if (missing.length) {
    return respond_(p, { result: 'error', error: 'Missing required fields: ' + missing.join(', ') });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet_();
    const row = [new Date()].concat(FIELDS.map(([key]) => clean_(p[key]))).concat(['New', '']);
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }

  try {
    sendEmail_(p);
  } catch (err) {
    console.error('Email failed: ' + err); // the row is already saved
  }

  return respond_(p, { result: 'success' });
}

/** Lets you open the Web app URL in a browser to check it is live. */
function doGet() {
  return ContentService.createTextOutput('United Autism Therapy form endpoint is running.');
}

// ---- Helpers --------------------------------------------------------------
function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = ['Submitted at'].concat(FIELDS.map(([, label]) => label)).concat(EXTRA_COLUMNS);
    sheet.appendRow(headers);
  }
  return sheet;
}

/** MM/DD/YYYY from the three date-of-birth boxes, or '' if all are empty. */
function dob_(p) {
  const m = clean_(p.child_dob_month), d = clean_(p.child_dob_day), y = clean_(p.child_dob_year);
  if (!m && !d && !y) return '';
  const pad = (v) => (v.length === 1 ? '0' + v : v);
  return pad(m) + '/' + pad(d) + '/' + y;
}

/** Trim, cap length and neutralize spreadsheet formulas (=, +, -, @). */
function clean_(value) {
  let v = String(value == null ? '' : value).trim().slice(0, 2000);
  if (/^[=+\-@]/.test(v)) v = "'" + v;
  return v;
}

function sendEmail_(p) {
  const lines = FIELDS.filter(([key]) => EMAIL_FIELDS.indexOf(key) !== -1)
    .map(([key, label]) => label + ': ' + (clean_(p[key]) || '—'));
  const subject = 'New consultation request — ' + clean_(p.name) + (p.region ? ' (' + clean_(p.region) + ')' : '');
  const body =
    'A new consultation request was submitted on the ' + SITE_NAME + ' website.\n\n' +
    lines.join('\n') +
    "\n\nThe child's details, insurance and diagnosis answer are in the Sheet only." +
    '\n\nAll requests: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const options = { name: SITE_NAME + ' Website' };
  if (p.email && /@/.test(p.email)) options.replyTo = clean_(p.email);
  MailApp.sendEmail(NOTIFY_EMAIL, subject, body, options);
}

/**
 * JavaScript submissions (fetch) get JSON. A plain HTML form post (browser
 * with JavaScript off) gets a small page that links to the thank-you page.
 */
function respond_(p, payload) {
  if (p._ajax === '1') {
    return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
  }
  const ok = payload.result === 'success';
  const html =
    '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<div style="font-family:system-ui,sans-serif;max-width:32rem;margin:3rem auto;padding:0 1rem;text-align:center">' +
    (ok
      ? '<h1>Thank you!</h1><p>We received your request and will contact you soon.</p>'
      : '<h1>Sorry, something went wrong</h1><p>Please call (714) 709-7819.</p>') +
    '<p><a href="' + THANK_YOU_URL + '" target="_top">Return to the website</a></p></div>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
