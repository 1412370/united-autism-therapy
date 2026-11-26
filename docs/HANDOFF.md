# Bàn giao phiên làm việc (cập nhật 2026-11-23)

File này giúp một phiên Claude Code mới tiếp tục dự án mà không cần lịch sử chat cũ, kể cả khi dùng tài khoản hoặc máy khác. Phiên mới đọc theo thứ tự: `CLAUDE.md` → file này → `docs/decision-log.md`.

Không có mật khẩu, token hay key nào trong file này, và không được thêm vào.

## 1. Người dùng và cách làm việc
- Người dùng viết tiếng Việt; trả lời bằng tiếng Việt.
- Người dùng tự stage, commit, push và merge PR. Agent không commit hay push, và không bao giờ đụng `main` hoặc `deploy`.
- Kiến trúc agent: Main Agent cộng 6 subagent trong `.claude/agents/`. Vì subagent không gọi được subagent khác, Main Agent chạy general-purpose agent và bảo nó làm theo file `.claude/agents/<tên>.md`. Mỗi việc có task file trong `tasks/active/`, xong thì chuyển sang `tasks/completed/`. Báo cáo theo 7 mục.
- Máy không có `gh` CLI. PR mở bằng trình duyệt.

## 2. Quy trình deploy
1. Làm trên nhánh `content/home-and-category-seo-2026-11-05`, rồi push nhánh đó.
2. Mở PR trên GitHub (`1412370/united-autism-therapy`) và merge vào `main`.
3. GitHub Actions build, chạy audit, rồi publish `dist/` sang nhánh `deploy`.
4. Vào GoDaddy cPanel → Git Version Control → Manage → Pull or Deploy. Bấm "Update from Remote", rồi "Deploy HEAD Commit". Code được deploy vào `public_html` (IP 132.148.177.135).

Lệnh kiểm tra:
- `npm run build`: phải ra 0 errors. Có 1 hint ServiceCard đã biết từ trước.
- `npm run audit`: phải ra "no issues". Gần nhất là 69 trang.

Xem thử trên máy: `E:\project autims therapy\.claude\launch.json`, cấu hình "uat-preview", chạy astro preview ở cổng 4321.

## 3. Form tư vấn và Google Sheet
- Form có ở trang chủ (`#consultation`) và `/contact/`. Component: `src/components/ContactForm.astro`. Các trường giống form của Spectrum.
- Form gửi tới một Google Apps Script web app. Script ghi vào tab "Intake Requests" và gửi email. Bản lưu của script là `docs/google-apps-script/Code.gs`, hướng dẫn trong `SETUP.md`.
- Email nhận thông báo (`NOTIFY_EMAIL`): 3 địa chỉ. Bản trong repo đã cập nhật, nhưng **cần xác nhận người dùng đã dán vào Apps Script và deploy New version chưa**.
- Khi cập nhật script: Deploy → Manage deployments → Edit → New version. Không bấm "New deployment", vì như vậy URL đổi.
- Rủi ro: form thu thông tin y tế trên Google thường, không có BAA. Khuyến nghị chuyển sang Workspace có BAA. Google Ads enhanced conversions tự động phải tắt.

## 4. Trạng thái hiện tại
- Bản ngày 18/11 có:
  - form trên trang chủ và map hiện thẳng
  - từ khóa ABA/autism
  - bài autism-treatment-options
  - mở rộng 2 bài bcba-vs-rbt và what-age
  - các sửa lỗi từ audit SEO

  Bản này đã commit ("New update") và push lên nhánh content. **Lần kiểm tra cuối (20/11), nó chưa được merge vào main nên chưa lên trang live.** Cần kiểm tra lại bằng `git log origin/main` và xem trang live có `id="consultation"` chưa.
- `Code.gs` (thêm 2 email) có thể vẫn chưa commit.
- Audit SEO ngày 17/11 đạt 77/100. Báo cáo ở `E:\project autims therapy\unitedautismtherapy.org-audit\` (ACTION-PLAN.md, FULL-AUDIT-REPORT.md).
- Kế hoạch SEO 12 tháng (23/11) ở `E:\project autims therapy\unitedautismtherapy.org-seo-plan\`, gồm 5 file: SEO-STRATEGY, COMPETITOR-ANALYSIS, SITE-STRUCTURE, CONTENT-CALENDAR, IMPLEMENTATION-ROADMAP. Các file này nằm ngoài repo; muốn giữ khi đổi máy thì phải sao chép.

## 5. Việc còn mở
**Người dùng làm trong các tài khoản:**
- Merge PR, deploy, rồi kiểm tra form và map trên trang live.
- Dán `Code.gs` mới vào Apps Script và deploy New version.
- 301 `unitedautismthereapy.com`: thêm alias trong cPanel (share document root), đổi DNS A về 132.148.177.135, chạy AutoSSL. Hiện domain này vẫn phục vụ site GoHighLevel. `unitedautismcenter.com` đã 301 xong.
- Search Console: Change of Address cho các domain cũ.
- Tắt enhanced conversions tự động trong Google Ads.
- Đo lại PageSpeed sau khi deploy, để xem LCP có xuống dưới 2,5 s không.

**Cần khách hàng cung cấp** (7 câu hỏi ở cuối IMPLEMENTATION-ROADMAP.md):
- thành phố đang phục vụ
- danh sách bảo hiểm thật (form đang liệt kê 8 hãng chưa xác minh)
- BCBA có tên
- ảnh thật
- độ tuổi nhận trẻ
- ngôn ngữ của nhân viên
- vị trí đang tuyển

Thêm: URL GBP (trong `site.ts` đang là placeholder), và vùng "Orange" có phải là một cơ sở thật không.

**Nội dung:**
- Ảnh đại diện riêng cho bài autism-treatment-options.
- Nguồn AAP, DDS, DHCS trong bài what-age chưa kiểm tra lại được.
- Cập nhật mục 3 của `ARTICLE_BRIEF.md` theo `docs/research/2026-11-18-keyword-content-sources.md`.

## 6. Dự án liên quan
- Site Avalon (`avalonnailsheadspa.com`) được tạo trong một phiên riêng, làm addon domain trên cùng gói GoDaddy Deluxe. Không thuộc repo này.
