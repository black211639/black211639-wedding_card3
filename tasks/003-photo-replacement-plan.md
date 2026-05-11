# 003-photo-replacement-plan.md

## 目前照片分類

- Hero 類：`cover.jpg`、`photo1.jpg`、`photo2.jpg`
- 求婚戒指類：`photo1.jpg`、`IMG_9563.JPG`
- 回憶故事類：`photo2.jpg`、`photo3.jpg`、`IMG_0551.JPG`
- 夕陽旅行類：`photo3.jpg`、`IMG_9563.JPG`
- 水族館牽手類：`IMG_0551.JPG`
- placeholder 類：`cover_1.jpg`、`photo_1.jpg`、`photo_2.jpg`、`photo_3.jpg`

## 目前架構原則

婚紗照尚未拍攝前，先建立固定照片 slot 架構，不因臨時照片反覆修改 HTML / JS。正式照片完成後，以同名檔案替換 `assets/photos/` 內素材。

## 建議檔名對應

- `cover.jpg`：正式婚紗主視覺，首頁 Hero 第一張。
- `photo1.jpg`：新人合照或求婚戒指細節。
- `photo2.jpg`：回憶故事照片。
- `photo3.jpg`：結尾或情緒段落照片。

## 可暫時使用

- `cover.jpg`
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `IMG_0551.JPG`
- `IMG_9563.JPG`

## 不建議正式上線

- `cover_1.jpg`
- `photo_1.jpg`
- `photo_2.jpg`
- `photo_3.jpg`

這些較像 placeholder 或壓縮示意圖，正式版建議替換。

## 正式婚紗照進來後如何替換

1. 將正式照片整理為 `cover.jpg`、`photo1.jpg`、`photo2.jpg`、`photo3.jpg`。
2. 直接替換 `assets/photos/` 內同名檔案。
3. 優先不改 `index.html`、`script.js`、`wedding_info.json`。
4. 若新增更多照片，再更新 `wedding_info.json` 與對應 DOM。

## 替換後要測哪些頁面

- Hero 首屏
- 照片故事段落
- 中式婚禮意象段落
- 倒數區
- Thank You 結尾
- 手機 390px 裁切
- GitHub Pages 線上路徑大小寫
