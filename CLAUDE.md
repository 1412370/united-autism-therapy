# CLAUDE.md: United Autism Therapy website

Chỉ dẫn toàn dự án cho Claude Code. Đọc file này trước khi làm bất kỳ việc gì trong repo.

## 1. Dự án

- Website Astro (static) cho United Autism Therapy, Westminster, CA. Domain chính: `https://unitedautismtherapy.org`.
- Nội dung blog nằm trong `src/content/blog/`, trang dịch vụ trong `src/content/services/`, dữ liệu doanh nghiệp trong `src/data/site.ts`.
- Dữ liệu doanh nghiệp đã xác minh và quy tắc viết bài: xem `docs/ARTICLE_BRIEF.md`. Đây là nguồn sự thật duy nhất cho nội dung. Không lặp lại các quy tắc đó ở nơi khác.
- Chiến lược và checklist SEO: `CONTENT_STRATEGY.md`, `SEO_CHECKLIST.md`, `SEO_KEYWORD_MAP.md`.

## 2. Lệnh kiểm tra

```bash
npm ci           # cài dependency (chỉ khi cần)
npm run build    # astro check + astro build, phải báo 0 errors
npm run audit    # kiểm tra link và on-page sau build, phải báo no issues
```

Chưa có test tự động. Một thay đổi chỉ được coi là xong khi build và audit đều đạt.

## 3. Quy tắc an toàn (bắt buộc)

- **Không commit, không push khi chưa được yêu cầu.** Người dùng tự stage, commit và push.
- **Không push lên `main` hoặc `deploy`.** Push lên `main` kích hoạt CI build và publish sang nhánh `deploy`.
- **Không xóa hoặc ghi đè file đang có** trừ khi người dùng duyệt rõ ràng. Hỏi trước khi làm việc này.
- **Không đưa thông tin đăng nhập vào repo hoặc chat.** Mật khẩu FTP, API key, token không bao giờ được commit. Chúng chỉ nằm trong GitHub Secrets hoặc cấu hình cục bộ.
- **Không bịa dữ liệu.** Không tạo tên chuyên viên, bằng cấp, đánh giá, số liệu, gói bảo hiểm hay thành phố phục vụ chưa được xác minh. Xem `docs/ARTICLE_BRIEF.md` mục 1.
- **Không tự vượt bot check.** Nếu một trang trả về thử thách bot, báo lại người dùng, không thử cách khác để lách.

## 4. Vai trò của Main Agent

Main Agent là phiên Claude Code chính, đọc file này. Nó chịu trách nhiệm:

1. Hiểu yêu cầu và xác định kết quả mong đợi.
2. Đánh giá độ phức tạp. Việc đơn giản làm trực tiếp, không tạo subagent không cần thiết.
3. Phân rã việc lớn thành việc nhỏ, và xác định việc nào độc lập, việc nào phụ thuộc.
4. Chọn subagent phù hợp khi đã có (xem mục 5). Subagent chỉ được tạo ở giai đoạn sau, sau khi người dùng duyệt.
5. Giao việc kèm đủ ngữ cảnh: file cần đọc, file được phép sửa, tiêu chí hoàn thành.
6. Kiểm tra kết quả của subagent trước khi báo cáo. Không coi là xong khi chưa xác minh.
7. Tổng hợp, báo cáo người dùng: việc đã làm, file đã đổi, kiểm tra đã chạy, việc còn lại.

Main Agent không tự làm các việc chuyên môn mà subagent đã có, và không lặp lại chỉ dẫn từ tài liệu khác.

## 5. Nguyên tắc điều phối

Chi tiết quy trình (định tuyến, phân rã, sở hữu file, review, tích hợp) nằm trong `docs/agent-workflows.md`. Các nguyên tắc dưới đây là bản tóm tắt.

- **Subagent không gọi subagent khác.** Mọi điều phối đi qua Main Agent.
- **Song song chỉ khi độc lập.** Hai việc không chạm vào cùng file thì mới chạy song song. Việc có phụ thuộc phải chạy tuần tự.
- **Sở hữu file rõ ràng.** Mỗi file có một agent sở hữu tại một thời điểm. Hai agent không sửa cùng một file cùng lúc.
- **Báo cáo chuẩn.** Mỗi subagent trả về: mục tiêu, việc đã làm, phát hiện, file đã đổi, rủi ro, kết quả kiểm tra, việc còn lại.
- **Ưu tiên agent có sẵn.** Việc SEO kỹ thuật, nội dung, schema, local, GEO đã có agent `seo-*` cấp người dùng. Dùng chúng, không viết lại.

## 6. Tài liệu tham chiếu

| Việc | Tài liệu |
|---|---|
| Viết bài blog | `docs/ARTICLE_BRIEF.md` |
| Lịch nội dung | `docs/CONTENT_CALENDAR.md` |
| SEO kỹ thuật | `SEO_CHECKLIST.md` |
| Từ khóa | `SEO_KEYWORD_MAP.md` |
| Chiến lược tổng thể | `CONTENT_STRATEGY.md` |
| Triển khai và cấu hình host | `README.md` |

## 7. Trạng thái

Phase 1 của kiến trúc multi-agent: xong (khảo sát, chốt kiến trúc, tạo file này).

Phase 2: đã tạo, đang chờ người dùng review và commit.
- `.claude/agents/`: 6 subagent (content-strategist, web-developer, qa-specialist, seo-specialist, marketing-specialist, research-analyst).
- `.claude/rules/`: coding-standards, content-guidelines, security-guidelines, seo-guidelines.
- `.claude/skills/`: article-production, site-verification.
- `docs/agent-workflows.md`, `docs/architecture.md`, `docs/decision-log.md`, `tasks/`.
- Kiểm tra ngày 2026-11-12: `npm run build` 0 errors, `npm run audit` không có lỗi (68 trang).
