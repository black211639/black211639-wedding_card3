# FILE_MAP.md

## 根目錄核心檔案

- `index.html`：頁面結構、SEO meta、主要 DOM、內嵌備援資料 `embedded-wedding-data`。
- `style.css`：所有視覺樣式、手機版排版、動畫、照片框、資訊卡、倒數與地圖區。
- `script.js`：資料讀取、JSON merge、Hero 輪播、音樂控制、地圖按鈕、倒數、reveal 動畫、圖片失敗 placeholder。
- `wedding_info.json`：婚禮資料主來源，應優先透過此檔調整內容。
- `.nojekyll`：GitHub Pages 必要保護檔，不可刪除。
- `README.md`：給一般使用者看的專案說明。
- `AGENTS.md`：給 AI / CLI 看的接手總規範。
- `TASK_SPEC.md`：目前任務規格與驗收標準。
- `PROJECT_STATUS.md`：專案狀態與歷史紀錄。
- `DEPLOY_GITHUB_PAGES.md`：既有 GitHub Pages 發布說明。

## 工具腳本

- `preview.ps1`：用 Python http.server 啟動本機預覽。
- `preview.bat`：Windows 雙擊啟動本機預覽。
- `publish.ps1`：Git add / commit / push 的發布輔助流程。
- `publish.bat`：Windows 雙擊啟動發布流程。

## 素材資料夾

- `assets/photos/`：照片素材。正式照片建議維持同名替換。
- `assets/music/`：背景音樂建議放置位置。若目前不存在，不代表必須新增。
- `assets/icons/`：圖示或輔助素材資料夾。若使用，需確認 GitHub Pages 路徑正確。

## 可以改的檔案

- `README.md`
- `PROJECT_STATUS.md`
- `TASK_SPEC.md`
- `AGENTS.md`
- `docs/`
- `skills/`
- `tasks/`
- `wedding_info.json`，限內容資料調整
- `assets/photos/`，限替換或新增素材

## 要小心改的檔案

- `index.html`：會影響 DOM 與備援資料。
- `style.css`：會影響手機版與整體視覺。
- `script.js`：會影響資料讀取、輪播、音樂、地圖、倒數。
- `publish.ps1` / `publish.bat`：會影響部署流程。
- `preview.ps1` / `preview.bat`：會影響本機預覽。

## 不能刪的檔案與資料夾

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`

## 不應破壞的 id / class / attribute

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

這些名稱被 `script.js` 使用。若修改，必須同步調整 JS 並完整驗收。
