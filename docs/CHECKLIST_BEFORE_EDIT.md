# CHECKLIST_BEFORE_EDIT.md

每次修改前，先完成以下檢查。

## 任務分類

- 確認本次目標是內容修改、視覺修改、功能修改、部署修改，或文件修改。
- 確認是否會碰到 `index.html`、`style.css`、`script.js`、`wedding_info.json`。
- 若只是文件整理，不要順手改網站功能。

## 必讀文件

- 先讀 `AGENTS.md`
- 先讀 `PROJECT_STATUS.md`
- 先讀 `TASK_SPEC.md`
- 先讀 `docs/FILE_MAP.md`
- 若改照片，先讀 `docs/PHOTO_USAGE_GUIDE.md`
- 若改部署，先讀 `docs/DEPLOYMENT_FLOW.md`
- 若改視覺，先讀 `skills/wedding-card-visual-design.md`

## 技術限制

- 確認不新增 Node.js
- 確認不新增 React
- 確認不新增 Vue
- 確認不新增 build 流程
- 確認不破壞 GitHub Pages 根目錄部署
- 確認不刪除 `.nojekyll`

## DOM 保護清單

確認不破壞以下 id / class / attribute：

- `intro-overlay`
- `intro-enter-button`
- `music-toggle`
- `bgm-audio`
- `hero-names`
- `hero-date`
- `hero-message`
- `map-button`
- `countdown-grid`
- `embedded-wedding-data`
- `data-hero-slide`

## 素材與路徑

- 確認圖片路徑使用相對路徑。
- 確認檔名大小寫一致。
- 優先替換 `assets/photos/` 內同名檔案，避免改程式。
