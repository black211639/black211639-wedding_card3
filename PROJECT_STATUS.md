# wedding_card 專案目前狀態

註記：此版本為 `wedding_card2` H5 改版測試版。

這份文件是這個專案的工作紀錄。

之後如果要繼續修改 `wedding_card`，請先看這份，再從這裡接著做。

## 目前專案位置

本機路徑：

`C:\Users\ROU\Desktop\my_code\wedding_card2`

GitHub repository：

`https://github.com/black211639/wedding_card`

GitHub Pages 設定頁：

`https://github.com/black211639/wedding_card/settings/pages`

## 目前已知狀態

- 專案已建立初版婚禮電子喜帖網站
- 專案為純靜態網站，可部署到 GitHub Pages
- GitHub 上已經有初版內容
- GitHub Pages 已開始作為目前主要部署方向
- 專案目前只保留 GitHub Pages 版本
- 已完成「正式版視覺與體驗優化 v1」
- 已新增 `AGENTS.md`，作為後續 AI 或工程接手規範
- 已新增 `TASK_SPEC.md`，記錄本次正式版優化需求與驗收標準
- 已優化 `wedding_info.json` 正式版婚禮文案
- 已優化手機版首屏、開場視覺、照片展示、婚禮資訊、地圖與倒數區
- GitHub Pages 部署方式維持不變，仍以根目錄靜態檔案部署

## 目前主要檔案

- `index.html`
  網站主頁，GitHub Pages 主要入口

- `style.css`
  網站版面與視覺樣式

- `script.js`
  網頁互動功能，包含：
  - 婚禮資訊載入
  - 照片輪播
  - 地圖按鈕
  - 淡入動畫

- `wedding_info.json`
  婚禮資訊主資料

- `assets/photos/`
  封面圖與輪播照片

- `DEPLOY_GITHUB_PAGES.md`
  GitHub Pages 部署教學

- `AGENTS.md`
  後續維護與 AI 接手規範

- `TASK_SPEC.md`
  本次正式版視覺與體驗優化 v1 任務規格

- `publish.ps1`
  一鍵提交並上傳到 GitHub 的腳本

- `publish.bat`
  可直接雙擊執行的上傳入口

## GitHub Pages 目前使用原則

目前 GitHub Pages 版本應以這些檔案為主：

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`

如果只要更新正式網站，優先改這幾個檔案即可。

## 最小必要檔案

目前正式網站最小必要檔案如下：

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`

本機管理用但非網站必要檔案：

- `README.md`
- `PROJECT_STATUS.md`
- `DEPLOY_GITHUB_PAGES.md`
- `publish.ps1`
- `publish.bat`

## 下次修改時建議從哪裡開始

如果要繼續改版，請照這個順序：

1. 先確認 GitHub Pages 上線網址是否正常
2. 先看 `wedding_info.json` 是否要更新新人資料、地址、交通方式、地圖連結
3. 再看 `assets/photos/` 是否要換成正式婚紗照
4. 如果只是改內容，通常只需要改：
   - `wedding_info.json`
   - `assets/photos/`
5. 如果是改版面或效果，再改：
   - `index.html`
   - `style.css`
   - `script.js`

## 2026-04-27 正式版視覺與體驗優化 v1

本次完成項目：

- 新增 `AGENTS.md`
- 新增 `TASK_SPEC.md`
- 優化 `wedding_info.json`，將測試感文案調整為正式婚禮邀請文案
- 同步更新 `index.html` 內嵌備援資料，避免 JSON 載入失敗時顯示舊文案
- 同步更新 `script.js` 預設資料，保留既有載入、倒數、地圖、音樂與輪播邏輯
- 優化手機版首屏與開場畫面，讓 hero 更接近正式 H5 喜帖
- 優化照片容器、婚禮資訊區、地圖區、倒數區的正式感
- 手機版加入 scroll snap 體驗，並強化新人姓名不換行設定
- 保留 GitHub Pages 既有部署方式與必要檔案

本次未變更：

- 未新增 Node.js、React、Vue 或大型框架
- 未修改 `preview.bat`、`preview.ps1`、`publish.bat`、`publish.ps1`
- 未刪除 `assets/`、`.nojekyll` 或 GitHub Pages 必要檔案

## 第四優先資訊修正版 v1

- 已將婚宴地點修正為彭員婚宴八德館
- 已將地址修正為桃園市八德區介壽路一段728號3樓
- 已同步更新 `wedding_info.json` 與 `embedded-wedding-data`
- 已確認不再使用前一版舊地點與舊地址資料

## 第五優先：手機版與 H5 滑動體驗優化 v1

- 已優化手機版 scroll snap
- 已優化 hero 首屏高度與文字層級
- 已優化 section 間距與手機閱讀節奏
- 已優化照片容器與資訊區可讀性
- 已保留原有互動功能
- 下一階段建議進入第六優先：照片展示與婚紗素材質感優化

## 下次修改時要先確認的事情

- GitHub repository 是否仍是：
  `black211639/wedding_card`

- GitHub Pages 是否仍使用：
  `main` branch
  `/ (root)`

- `index.html` 是否仍為首頁入口

- `assets/` 資料夾結構是否沒有被改壞

## 目前可以優先改的內容

目前最值得優先補完的通常會是：

- `wedding_info.json` 裡的完整地址
- `transport.mrt`
- `transport.bus`
- `map_link`
- 正式婚紗照替換

## 如果下次要請 AI 接手，建議直接貼這段

請從這個專案繼續修改：

- 本機路徑：`C:\Users\ROU\Desktop\my_code\wedding_card2`
- GitHub repository：`https://github.com/black211639/wedding_card`
- GitHub Pages 已經有初版
- 請先看 `PROJECT_STATUS.md`
- 以 GitHub Pages 版本為主繼續修改

## 備註

- `README.md` 已整理為 GitHub Pages 版本
- `DEPLOY_GITHUB_PAGES.md` 已建立，可作為後續部署流程文件
