====================================================================
        WEBSITE QUẢN LÝ LỚP HỌC - HƯỚNG DẪN SỬ DỤNG
====================================================================

📌 MỤC ĐÍCH DỰ ÁN:
Website được xây dựng nhằm giúp quản lý thông tin lớp học, bao gồm
danh sách học sinh, thông tin giáo viên, lưu trữ kỷ niệm và các tài
liệu liên quan.

====================================================================
📁 CẤU TRÚC THƯ MỤC DỰ ÁN:
====================================================================

project-web/
│
├── index.html              ← Trang chủ (trang mặc định)
├── about.html              ← Trang giới thiệu
├── contact.html            ← Trang liên hệ
│
├── css/
│   └── style.css           ← File CSS chính (giao diện & styling)
│
├── js/
│   └── main.js             ← File JavaScript (chức năng & tương tác)
│
├── images/                 ← Thư mục chứa hình ảnh (tuỳ chọn)
│   └── (hình ảnh bổ sung ở đây)
│
├── fonts/                  ← Thư mục chứa custom fonts (nếu có)
│
└── README.txt              ← File hướng dẫn này

====================================================================
🚀 CÁCH CHẠY WEBSITE:
====================================================================

1. Mở thư mục dự án trong VS Code
2. Chuột phải vào index.html → "Open with Live Server"
   (Hoặc sử dụng PHP: php -S localhost:8000)
3. Trình duyệt sẽ tự động mở http://localhost:5500/index.html

====================================================================
✨ CÁC TÍNH NĂNG CHÍNH:
====================================================================

✓ Quản lý danh sách học sinh với hình ảnh đại diện
✓ Lưu trữ thông tin giáo viên chủ nhiệm và bộ môn
✓ Quản lý hình ảnh kỷ niệm lớp học
✓ Quản lý video kỷ niệm
✓ Tìm kiếm với autocomplete (tương tự Google)
✓ Dark Mode / Light Mode (thoải mái mắt)
✓ Hướng dẫn tương tác cho người dùng lần đầu
✓ Responsive design (hoạt động tốt trên mọi thiết bị)

====================================================================
🎮 HƯỚNG DẪN SỬ DỤNG:
====================================================================

LẦN ĐẦU VÀO WEBSITE:
- Website tự động hiển thị hướng dẫn sử dụng
- Nhấn "Hướng dẫn" để xem chi tiết hoặc "Bỏ qua" để bỏ qua

ĐIỀU HƯỚNG:
- Click vào tên lớp (12A1) để xem nội dung
- Dùng sidebar bên trái để chuyển giữa các phần

TÌMKIẾM:
- Nhấn icon 🔍 ở thanh trợ năng
- Gõ từ khóa để tìm học sinh, giáo viên, hoặc kỷ niệm
- Gợi ý sẽ xuất hiện tự động (autocomplete)
- Dùng ↑↓ để chọn, Enter để xác nhận

DARK MODE:
- Nhấn icon 🌗 để bật/tắt chế độ tối
- Giao diện sẽ tự động chuyển đổi
- Cài đặt được lưu tự động (localStorage)

XEM THÊM:
- Nhấn vào hình ảnh/video để xem chi tiết modal
- Nhấn × để đóng modal

====================================================================
🛠️ CÔNG NGHỆ SỬ DỤNG:
====================================================================

Frontend:
- HTML5: Cấu trúc ngữ nghĩa
- CSS3: Styling với CSS Variables, Flexbox, Grid
- JavaScript ES6+: Xử lý tương tác & logic

Libraries:
- Font: Quicksand (Google Fonts) - phông chữ tròn, dễ đọc
- Icons: Emojis (Unicode)
- Storage: LocalStorage API (lưu trạng thái)

Design:
- Responsive Design (Mobile-first approach)
- Color Palette: Pastel Light Mode & Dark Mode
- Animations: CSS Keyframes & JavaScript

====================================================================
📝 CẬU TRÚC DỮ LIỆU:
====================================================================

Dữ liệu được lưu trong object `data` trong file js/main.js:

const data = {
  hs1: {
    name: "Tên học sinh",
    img: "URL hình ảnh",
    desc: "Mô tả"
  },
  // ... thêm học sinh khác
};

Có thể dễ dàng thêm/sửa/xóa dữ liệu bằng cách chỉnh sửa object này.

====================================================================
🔧 HƯỚNG DẪN CẤU HÌNH:
====================================================================

THÊMHỌC SINH MỚI:
1. Mở file js/main.js
2. Tìm đến object `data`
3. Thêm entry mới:
   hs_new: {
     name: "Tên học sinh",
     img: "https://i.pravatar.cc/150?img=X",
     desc: "Mô tả"
   }
4. Trong section #students trong index.html, thêm card:
   <div class="card" onclick="openModal('hs_new')">
     <img src="https://i.pravatar.cc/150?img=X">
     <span>Tên học sinh</span>
   </div>

THAY ĐỔI TIÊU ĐỀ:
- Sửa <title> trong thẻ <head> của các file HTML
- Sửa nội dung <h1> trong index.html

THAY ĐỔI MÀU SẮC:
- Mở css/style.css
- Tìm phần `:root` hoặc `body.dark`
- Thay đổi giá trị CSS Variables:
  --bg-color: #fee7be;        (màu nền)
  --accent-color: #f6a09f;    (màu chính)
  --text-main: #3d3a38;       (màu chữ)

====================================================================
💾 LƯU TRỮ DỮ LIỆU:
====================================================================

Một số dữ liệu được lưu tự động:
- skipGuide: Trạng thái hướng dẫn lần đầu
- currentClass: Lớp đang xem
- Dark mode: Cài đặt theme

Lưu trữ sử dụng localStorage (không yêu cầu server backend).

Để xóa tất cả dữ liệu:
- Mở Console (F12) → gõ: resetGuide()

====================================================================
🐛 KHẮC PHỤC SỰ CỐ PHỔ BIẾN:
====================================================================

1. WEBSITE KHÔNG HiỀN THỊ:
   → Kiểm tra lại đường dẫn file (css/style.css, js/main.js)
   → Mở Chrome DevTools (F12) để xem console errors

2. HÌNH ẢNH KHÔNG HIỂN THỊ:
   → Kiểm tra URL hình ảnh có đúng không
   → Nếu dùng ảnh local, thêm vào thư mục /images

3. TÌMKIẾM KHÔNG HOẠT ĐỘNG:
   → Kiểm tra browser console (F12) → Console
   → Nếu có lỗi JavaScript, sửa trong js/main.js

4. DARK MODE KHÔNG LƯUTRẠNG THÁI:
   → Kiểm tra localStorage bị vô hiệu hóa không
   → Mở DevTools → Application → LocalStorage

====================================================================
📚 TÀI LIỆU THAM KHẢO:
====================================================================

- MDN Web Docs: https://developer.mozilla.org/
- CSS Tricks: https://css-tricks.com/
- JavaScript.info: https://javascript.info/
- Google Fonts: https://fonts.google.com/

====================================================================
✍️ GNOTE CHO NHÓM:
====================================================================

- Đảm bảo tất cả file đều cùng encoding UTF-8
- Thử nghiệm trên nhiều trình duyệt (Chrome, Firefox, Edge)
- Test responsive trên điện thoại
- Giữ code sạch và có comment
- Cập nhật README nếu thêm tính năng mới

====================================================================
📞 LIÊN HỆ & HỖ TRỢ:
====================================================================

Nếu có câu hỏi hoặc cần hỗ trợ:
- Vào trang contact.html để gửi tin nhắn
- Hoặc liên hệ: contact@example.com
- Điện thoại: 0123 456 789

====================================================================
🎉 VẬY, WEBSITE CỦA BẠN ĐÃ SẴN SÀNG! CHÚC VUI!

Được tạo bởi: Học sinh lớp [Your Class]
Năm: 2024
Cảm ơn các bạn đã sử dụng! ❤️

====================================================================
