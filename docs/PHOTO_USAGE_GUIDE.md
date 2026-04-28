# PHOTO_USAGE_GUIDE.md

本專案以照片建立婚禮感。替換照片時，優先維持同名檔案，避免修改 HTML / JS。

## 目前照片分類

### 1. 首頁 Hero 類

- `assets/photos/cover.jpg`
- `assets/photos/photo1.jpg`
- `assets/photos/photo2.jpg`

適合放首頁輪播。需確認手機直向裁切後，新人臉部、戒指或主要姿態不被切掉。

### 2. 求婚戒指類

- `assets/photos/photo1.jpg`
- `assets/photos/IMG_9563.JPG`

適合放故事段落、倒數區或細節段落。戒指不可被裁掉，畫面可搭配留白與短文案。

### 3. 回憶故事類

- `assets/photos/photo2.jpg`
- `assets/photos/photo3.jpg`
- `assets/photos/IMG_0551.JPG`

適合放 Memory / Photo Story 段落，呈現相處回憶與共同旅程。

### 4. 夕陽旅行類

- `assets/photos/photo3.jpg`
- `assets/photos/IMG_9563.JPG`

適合放情緒段落、結尾 Thank You，或作為柔和轉場照片。

### 5. 水族館牽手類

- `assets/photos/IMG_0551.JPG`

適合放回憶故事段落。若主體偏暗，需用版面與文案補足正式感。

### 6. placeholder 類

- `assets/photos/cover_1.jpg`
- `assets/photos/photo_1.jpg`
- `assets/photos/photo_2.jpg`
- `assets/photos/photo_3.jpg`

這些檔案較像佔位或壓縮示意圖，不建議正式上線作為主要照片。

## 使用建議

- 首頁 Hero：優先使用 `cover.jpg`，搭配暗色柔霧遮罩避免文字看不清楚。
- Memory：使用 `photo1.jpg`、`photo2.jpg`、`photo3.jpg` 或回憶類照片。
- Thank You：使用情緒柔和、留白足夠的照片，例如夕陽旅行類。
- 正式版：優先替換正式婚紗照，並保留同名檔案。

## 裁切原則

- 不拉伸照片。
- 使用 `object-fit: cover`。
- 重要人物、臉部、戒指、手部主體不可被裁掉。
- 手機版優先。
- 首頁可加暗色柔霧遮罩，避免文字看不清楚。
- 若照片不是正式婚紗照，需用留白、遮罩、文案與版面補足正式感。

## 命名建議

- `cover.jpg`
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`

未來替換正式婚紗照時，應優先替換 `assets/photos/` 內同名檔案，避免修改程式。
