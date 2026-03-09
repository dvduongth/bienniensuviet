# Nghi vấn tiếng Việt — Cần Daniel review

Các chỗ em không chắc 100% về ngữ nghĩa/cách dùng từ. Anh chọn phương án phù hợp nhé.

---

## 1. "Người dẫn chuyện" hay "Người kể chuyện"?

- **Hiện tại**: `"Người dẫn chuyện"` (dịch từ "Nguoi dan chuyen")
- **Phương án B**: `"Người kể chuyện"` — tự nhiên hơn trong ngữ cảnh Visual Novel
- **Phương án C**: `"Cô giáo"` / `"Thầy giáo"` — vì đây là game giáo dục cho học sinh lớp 5

**Ghi chú**: Xuất hiện ở mọi scene trong ch1.json và ch2.json (speaker field).

---

## 2. "Phao 50/50" hay "Phao cứu sinh 50/50"?

- **File**: `BattleClient.tsx` dòng 207
- **Hiện tại**: `"Phao 50/50"` (giữ nguyên từ gốc)
- **Phương án B**: `"Phao cứu sinh 50/50"`
- **Phương án C**: `"Trợ giúp 50/50"`

---

## 3. Glossary ch1 — "đồng Đông Sơn" definition

- **Hiện tại**: `"Trống đồng bằng đồng nổi tiếng, biểu tượng văn minh Việt cổ"`
- **"Trống đồng bằng đồng"** nghe hơi thừa. Cân nhắc:
  - **A**: `"Trống đồng nổi tiếng, biểu tượng văn minh Việt cổ (khoảng 2000 năm trước)."` (bỏ "bằng đồng")
  - **B**: Giữ nguyên (vì giải thích cho trẻ em, cần rõ ràng chất liệu)

---

## 4. ch1 s5 — "nhi" hay "nhỉ"?

- **Hiện tại**: `"Nước Văn Lang ở đâu nhỉ?"` (choice text)
- Gốc là "nhi" — có thể là "nhỉ" (hỏi tu từ) hoặc "nhỉ" (ngữ khí)
- Em đã chọn **"nhỉ"** — anh confirm giúp

---

## 5. ch2 s9 — "hằng năm" hay "hàng năm"?

- **Hiện tại**: `"hằng năm"` (chuẩn ngữ pháp)
- **Phương án B**: `"hàng năm"` (phổ biến trong giao tiếp)
- **Ghi chú**: Cũng xuất hiện trong questions.json q23

---

## 6. "Mân Việt" hay "Mân Việt" (q14)?

- **Hiện tại**: `"Mân Việt"` — option sai trong câu hỏi về Thục Phán
- Tên lịch sử chính xác: **Mân Việt** (閩越) — vương quốc ở Phúc Kiến
- Em giữ nguyên, anh confirm

---

## 7. ch1 s6b — "cai trị trong hơn 2000 năm"

- Con số 2000 năm cho 18 đời Hùng Vương — một số tài liệu nói khác nhau
- Em giữ nguyên theo nội dung gốc. Anh muốn sửa thành con số nào?

---

## 8. Title game: "Biên Niên Sử Việt" — viết hoa?

- **Hiện tại**: `"Biên Niên Sử Việt"` (Title Case)
- **Phương án B**: `"Biên niên sử Việt"` (chỉ viết hoa chữ đầu + danh từ riêng)
- Xuất hiện ở: `page.tsx` (home) và `NavBar.tsx`

---

*Tổng: 8 nghi vấn. Anh reply số + phương án chọn là em sửa ngay!*
