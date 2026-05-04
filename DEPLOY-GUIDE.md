# Product Academy Landing Page

## Files cần upload lên Vercel

Upload tất cả các file sau vào thư mục gốc của project:

1. `index.html` - Landing page chính
2. `logo-am-ban.png` - Logo banner (header/footer)
3. `Product academy-favicon.png` - Favicon (tab browser)
4. `trainer-1.png` - Ảnh giảng viên Hoàng Đức Minh
5. `trainer-2.png` - Ảnh giảng viên Đặng Hải Lộc
6. `trainer-3.png` - Ảnh giảng viên Nguyễn Đình Phong

## Hướng dẫn deploy lên Vercel

### Cách 1: Upload trực tiếp (nhanh nhất)
1. Truy cập [vercel.com/new](https://vercel.com/new)
2. Chọn "Deploy" (không cần import từ Git)
3. Kéo thả toàn bộ file vào
4. Đợi deploy → Xong!

### Cách 2: Qua GitHub
1. Tạo repository mới trên GitHub (ví dụ: `product-academy-landing`)
2. Push code lên repo:
   ```bash
   git init
   git add index.html logo-am-ban.png "Product academy-favicon.png" trainer-1.png trainer-2.png trainer-3.png
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/product-academy-landing.git
   git push -u origin main
   ```
3. Vào Vercel → Import GitHub repo → Deploy tự động

## Lưu ý quan trọng

- **Không cần build** - Đây là static HTML, Vercel sẽ serve trực tiếp
- **File paths** - Tất cả ảnh phải đặt cùng cấp với `index.html`
- **Custom domain** - Có thể thêm domain riêng trong Vercel Settings
