# Contact form → Google Sheets + email (setup, ~10 minutes)

Every consultation request is added as a row in a Google Sheet, and an email alert goes to `nntnhan96@gmail.com`. You can change the address in `NOTIFY_EMAIL` in Code.gs.

## 1. Create the Sheet and paste the script

1. Sign in to Google with the account that should own the data. Ideally use the business account.
2. Create a new spreadsheet at sheets.new and name it "UAT – Consultation Requests".
3. Open **Extensions → Apps Script**. Delete the sample code and paste the whole of `Code.gs`. Save (Ctrl+S).
4. In the function dropdown at the top, choose **setup** and click **Run**. When Google asks for permission:
   1. Click **Review permissions** and choose your account.
   2. Click **Advanced → Go to … (unsafe)**. The warning appears because the script is your own and unpublished.
   3. Click **Allow**.

   A tab named **Consultation Requests** with headers now appears in the Sheet.

## 2. Deploy as a web app

1. Click **Deploy → New deployment**. Click the gear icon and choose **Web app**.
2. Set:
   - **Description:** Website form
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**. This is required so the website can send data. It only lets visitors submit the form; they can't read the Sheet.
3. Click **Deploy** and copy the **Web app URL**. It ends in `/exec`.

## 3. Connect it to the website

1. In `src/data/site.ts`, set `formEndpoint: 'https://script.google.com/macros/s/…/exec'`.
2. Commit, then push to GitHub (or rebuild and upload).
3. Test: submit the form on /contact/. You should land on the thank-you page, a new row should appear in the Sheet, and an email alert should arrive.

## Changing the script later

If you edit `Code.gs`, click **Deploy → Manage deployments → ✏️ Edit**, set **Version: New version**, and click **Deploy**. The URL stays the same. If you create a *new* deployment instead, the URL changes and you must update `site.ts`.

## Notes

- Use the **Status** and **Notes** columns to track follow-ups, e.g. New → Called → Scheduled.
- Gmail-sent alerts are limited to about 100 per day on a free Google account. That's plenty for a contact form.
- Don't add fields for diagnoses, medical records or insurance IDs. A regular Google account is not a HIPAA-covered system.
