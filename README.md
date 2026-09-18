# 🎵 F8 Zoom - Day 28: Music Player

Dự án xây dựng **Music Player** bằng HTML, CSS và JavaScript thuần, mô phỏng giao diện trình phát nhạc với các chức năng Play/Pause, Next, Previous, Random, Repeat, tua nhạc và Playlist.

## 🚀 Demo

- **GitHub:** https://github.com/hungomega/f8-zoom-day-28

## 🛠️ Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- HTML5 Audio API
- Font Awesome
- Google Fonts (Poppins)

## 📁 Cấu trúc thư mục

```text
f8-zoom-day-28/
├── img/                         # Hình ảnh sử dụng trong Music Player
│   └── img1.jpg
├── js/                          # JavaScript
│   └── script.js
├── song/                        # Danh sách file nhạc
│   ├── Âm Thầm Bên Em.mp3
│   ├── Ấn Nút Nhớ... Thả Giấc Mơ.mp3
│   ├── Buông Đôi Tay Nhau Ra.mp3
│   ├── Muộn Rồi Mà Sao Còn.mp3
│   └── Nơi Này Có Anh.mp3
├── index.html                   # Giao diện Music Player
├── style.css                    # CSS giao diện
└── README.md                    # Tài liệu dự án
```

## 🎵 Chức năng

- **Play / Pause:** Phát hoặc tạm dừng bài hát
- **Next:** Chuyển sang bài hát tiếp theo
- **Previous:** Quay lại bài hát trước
- **Random:** Phát bài hát ngẫu nhiên
- **Repeat:** Lặp lại bài hát hiện tại
- **Progress:** Hiển thị tiến trình phát nhạc
- **Seek:** Kéo thanh progress để tua nhạc
- **Playlist:** Click vào bài hát để phát
- **Auto Next:** Tự động chuyển sang bài tiếp theo khi bài hát kết thúc
- **Active Song:** Highlight bài hát đang được phát
- **Playing Title:** Hiển thị tên bài hát hiện tại

## 📌 Kiến thức JavaScript áp dụng

- DOM Manipulation
- Event Handling
- Event Delegation
- `querySelector()` / `querySelectorAll()`
- `classList`
- `dataset`
- Array `map()` / `join()`
- Object
- Arrow Function
- `this`
- `bind()`
- HTML5 Audio API
- `currentTime` / `duration`
- `play()` / `pause()`
- `loop`
- `Math.random()`

## ⚙️ Cách chạy dự án

1. Clone repository:

```bash
git clone https://github.com/hungomega/f8-zoom-day-28.git
```

2. Di chuyển vào thư mục dự án:

```bash
cd f8-zoom-day-28
```

3. Mở file `index.html` bằng trình duyệt (hoặc dùng extension **Live Server** trên VS Code) để chạy dự án.

## 📝 Ghi chú

- Nhạc mẫu được để trong thư mục `song/`, bạn có thể thay thế bằng file `.mp3` khác, nhớ cập nhật lại đường dẫn `path` trong mảng `_songs` ở file `js/script.js`.
- Ảnh đại diện bài hát hiện đang dùng chung 1 ảnh `img1.jpg`, có thể mở rộng để mỗi bài hát có ảnh riêng.

## 👤 Tác giả

- **GitHub: Nguyễn Hữu Hùng - học viên F8
- 
