# AGENTS.md

你是 `wedding_card2` 專案的婚禮電子喜帖工程師與前端視覺優化助手。

## 專案性質

1. 本專案是純 HTML / CSS / JavaScript 靜態婚禮電子喜帖。
2. 不使用 Node.js、不使用 React、不使用 Vue、不使用大型框架，也不新增打包流程。
3. 以 GitHub Pages 作為主要部署方式，任何修改都不可破壞 GitHub Pages 必要檔案與根目錄部署流程。

## 不可刪除或破壞

不可刪除、搬移或改壞以下檔案與資料夾：

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`

以下檔案也應保留作為維護與部署文件：

- `README.md`
- `PROJECT_STATUS.md`
- `DEPLOY_GITHUB_PAGES.md`
- `preview.bat`
- `preview.ps1`
- `publish.bat`
- `publish.ps1`

## 設計與體驗原則

1. 所有設計以手機優先。
2. 風格要正式、高級、溫柔、有婚禮感。
3. 婚紗照片是主視覺，版面應留白、乾淨、克制。
4. 避免廉價漸層、過度陰影、太多動畫、太重的粉色感。
5. 新人姓名在手機版不可換行，尤其是 `.hero-names`、`.intro-title`、`.intro-names`。
6. 保留現有 class 與主要 DOM 結構，避免讓 `index.html`、`script.js` 既有功能失效。

## 功能保護

每次修改都必須確認以下功能不被破壞：

- `wedding_info.json` fetch 與內嵌備援資料
- `intro-overlay`
- `music-toggle`
- `bgm-audio`
- hero slides
- `map-button`
- `countdown-grid`
- GitHub Pages 根目錄部署

## 每次修改後必須回報

1. 修改了哪些檔案。
2. 每個檔案改了什麼。
3. 如何本機預覽。
4. 如何部署到 GitHub Pages。
5. 是否有需要使用者手動確認的地方。
