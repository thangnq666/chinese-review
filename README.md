# 🀄 Ôn Tập Tiếng Trung

Ứng dụng web học tiếng Trung với đầy đủ tính năng: từ vựng, ngữ pháp, ngữ âm, hội thoại, luyện nói và bài tập.

## Tính năng

- 📚 **Từ vựng** — 200+ từ theo từng bài, phát âm TTS, xem nét viết
- ✏️ **Ngữ pháp** — 30 điểm ngữ pháp cơ bản, có ví dụ
- 🎵 **Ngữ âm** — Thanh điệu, thanh mẫu, vận mẫu với ví dụ tương tác
- 💬 **Hội thoại** — Hội thoại theo bài, luyện nói từng câu
- 📝 **Câu mẫu** — Câu mẫu theo bài có thể phát âm
- 🎤 **Tập nói** — Ghi âm và chấm điểm phát âm
- ✍️ **Nét viết** — Xem hoạt hình nét viết qua HanziWriter
- 🧠 **Bài tập** — Trắc nghiệm, ghép cặp, điền từ

## Chạy local

```bash
# Cách 1: dùng live-server (cần Node.js)
npm run dev

# Cách 2: dùng serve
npm start

# Cách 3: dùng Python
python -m http.server 3000
```

Sau đó mở trình duyệt tại `http://localhost:3000`

> ⚠️ **Lưu ý:** Mở trực tiếp file `index.html` bằng trình duyệt sẽ không hoạt động do trình duyệt chặn `fetch` qua `file://`. Cần chạy qua server.

## Deploy lên GitHub Pages

### Lần đầu

1. Tạo repository mới trên GitHub (ví dụ: `ontap-tiengtrung`)
2. Clone hoặc khởi tạo git trong thư mục này:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ontap-tiengtrung.git
   git push -u origin main
   ```
3. Vào **Settings → Pages** của repository
4. Chọn **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**
5. Nhấn **Save** — sau 1–2 phút site sẽ live tại:
   `https://YOUR_USERNAME.github.io/ontap-tiengtrung/`

### Cập nhật sau khi chỉnh sửa

```bash
git add .
git commit -m "Update content"
git push
```

## Cấu trúc project

```
├── index.html          # Giao diện chính
├── css/
│   └── styles.css      # Toàn bộ CSS
├── js/
│   ├── data/
│   │   └── vocab-data.js       # Dữ liệu từ vựng, hội thoại, câu mẫu
│   ├── phonetics.js            # Dữ liệu & render ngữ âm
│   ├── grammar.js              # Dữ liệu & render ngữ pháp
│   ├── tts.js                  # Text-to-speech & tốc độ đọc
│   ├── navigation.js           # Điều hướng tab
│   ├── render-vocab.js         # Render bảng từ vựng
│   ├── render-phrases.js       # Render câu mẫu
│   ├── render-dialogues.js     # Render hội thoại & bài tập cơ bản
│   ├── render-speak.js         # Render thẻ tập nói
│   ├── flashcard.js            # Flashcard
│   ├── stroke.js               # Modal xem nét viết (HanziWriter)
│   ├── speech.js               # Web Speech API (nhận dạng giọng nói)
│   ├── speak-modal.js          # Modal luyện nói & chấm điểm
│   ├── exercises.js            # Bài tập: MC, ghép cặp, điền từ
│   └── main.js                 # Khởi tạo app
├── .nojekyll           # Bắt buộc cho GitHub Pages
├── package.json
└── README.md
```
