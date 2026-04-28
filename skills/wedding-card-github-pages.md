# wedding-card-github-pages.md

## 部署規則

- 使用 GitHub Pages 根目錄部署。
- `index.html` 必須在根目錄。
- `.nojekyll` 不可刪。
- `assets/` 路徑不可亂改。
- 檔名大小寫要小心。
- 相對路徑要符合 GitHub Pages。
- 不要使用需要伺服器端的功能。
- 不要使用需要 build 的流程。

## 發布前確認

必要檔案：

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`

## 常見風險

- 本機 Windows 不區分大小寫，但 GitHub Pages 會區分。
- 改路徑後本機可能正常，線上可能 404。
- Pages 更新可能延遲幾分鐘。
- 瀏覽器快取可能造成舊畫面還在。

## 建議流程

1. 本機執行 `.\preview.ps1`。
2. 開啟 `http://127.0.0.1:8000`。
3. 確認手機版與主要功能。
4. 執行 `.\publish.ps1` 或 `publish.bat`。
5. 等待 GitHub Pages 更新。
6. 用正式網址檢查線上頁面。
