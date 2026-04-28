# AGENTS.md

本文件是 `wedding_card2` 專案給 AI Agent / Codex CLI / 自動化工具的接手總規範。每次修改前請先讀本文件，再依任務類型讀取 `docs/`、`skills/`、`tasks/` 內的對應文件。

## 1. 專案身份

- 專案名稱：`wedding_card2`
- 專案性質：婚禮電子喜帖 H5 靜態網站
- 使用情境：正式發給已確定會參加婚禮的賓客觀看
- 部署方式：GitHub Pages 根目錄部署
- 核心風格：手機優先、正式、高級、溫柔、有婚禮感、留白、克制、不廉價

## 2. 技術限制

本專案只能使用：

- 原生 HTML
- 原生 CSS
- 原生 JavaScript
- JSON 靜態資料

禁止：

- 不要重寫成 React
- 不要新增 Node.js
- 不要新增 Vue
- 不要新增 Vite / Webpack / Parcel 等 build 流程
- 不要新增 `package.json` 或 `node_modules`
- 不要導入不必要 CDN
- 不要改成需要伺服器端功能才能運作

## 3. 不可破壞項目

以下項目是 GitHub Pages 與網站功能的底線：

- `index.html` 必須在根目錄
- `.nojekyll` 不可刪除
- `assets/` 不可刪除
- `wedding_info.json` 必須可被 `script.js` fetch
- `embedded-wedding-data` 內嵌備援資料機制不可破壞
- 相對路徑必須符合 GitHub Pages 根目錄部署
- 不要任意更改檔名大小寫，GitHub Pages 對大小寫敏感

## 4. 功能保護清單

修改 `index.html`、`style.css`、`script.js` 前，必須確認不破壞下列 id / class / data attribute：

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

`script.js` 會透過這些選擇器查找 DOM。若必須調整，需同步修改 JS 並在回報中說明原因與驗收結果。

## 5. 設計原則

- 手機優先，390px 寬度必測
- 正式、高級、溫柔、有婚禮感
- 照片優先，文字不得壓過照片主體
- 留白要足夠，視覺要克制
- 避免廉價模板感
- 避免過多粉紅、過重陰影、過多動畫
- 避免做成工具網站、後台介面或簡報模板

## 6. 修改前必讀文件

每次修改前至少讀：

- `AGENTS.md`
- `PROJECT_STATUS.md`
- `TASK_SPEC.md`
- `docs/CHECKLIST_BEFORE_EDIT.md`

依任務類型加讀：

- 改照片：`docs/PHOTO_USAGE_GUIDE.md`、`skills/wedding-card-photo-curation.md`
- 改視覺：`skills/wedding-card-visual-design.md`
- 改文案：`skills/wedding-card-content.md`
- 改部署：`docs/DEPLOYMENT_FLOW.md`、`skills/wedding-card-github-pages.md`
- 除錯：`skills/wedding-card-debug.md`

## 7. 修改後必做驗收

至少依 `docs/CHECKLIST_AFTER_EDIT.md` 檢查：

- `preview.bat` 或 `.\preview.ps1` 可啟動
- `http://127.0.0.1:8000` 可開啟
- 手機 390px 不爆版
- 新人姓名不換行
- 開場 overlay 可點擊關閉
- 音樂按鈕存在且不報錯
- Hero 輪播正常
- `wedding_info.json` fetch 正常
- fetch 失敗時 `embedded-wedding-data` 備援資料仍可顯示
- Google Maps 按鈕可開啟
- 倒數正常更新
- 圖片失敗時 placeholder 正常
- GitHub Pages 必要檔案仍在根目錄

## 8. 回報格式

完成後回報需包含：

- 修改了哪些檔案
- 每個檔案改了什麼
- 是否有改動核心網站檔案：`index.html`、`style.css`、`script.js`、`wedding_info.json`
- 如何本機預覽
- 如何部署
- 是否有需要人工確認的地方

## 9. 什麼情況要拒絕大改

遇到以下要求時，應先提醒風險並拒絕直接大改，除非使用者明確要求：

- 要把專案改成 React / Vue / Node.js
- 要新增 build 流程
- 要刪除 `.nojekyll`
- 要搬動 `index.html` 到子資料夾
- 要大幅重寫 `script.js` 但沒有明確驗收標準
- 要大量替換 DOM id / class 但沒有同步測試方案
- 要改成需要後端、資料庫或 API server

## 10. 什麼情況可以小步優化

以下情況可以小步修改：

- 修正文案、婚禮資訊、提醒文字
- 替換同名照片檔案
- 調整 CSS 間距、字級、遮罩、照片裁切
- 改善手機版不爆版
- 補強文件、任務拆解、測試清單
- 修正圖片路徑、地圖連結、倒數資料

原則：保留既有結構，先做最小可驗收改動，再回報結果。
