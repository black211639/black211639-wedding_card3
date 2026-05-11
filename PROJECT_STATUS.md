# PROJECT_STATUS.md

## 2026-05-08 wedding_card3 信封開場動畫 V1 結構版

- 任務目標：建立信封正面、點擊翻面、背面金色壓印、開封、白色帖子升起、淡出進入喜帖本體的 V1 結構動畫。
- 專案路徑：C:\Users\TEST\Desktop\Python_code\Merry\wedding_card3
- 設計方向：手機優先、正式、溫柔、有驚喜感，但 V1 不追求最終精品質感。
- 動畫流程：正面顯示「景翔 & 佳柔」→ 點擊翻到背面 → 顯示金色囍字壓印 → 封口打開 → 白色帖子升起並顯示「誠摯邀請您蒞臨」→ 淡出進入 Hero。
- 技術限制：維持純 HTML / CSS / JavaScript，不新增框架、不新增 build 流程、不新增 Lottie。
- 驗收重點：390px 手機不爆版、流程可看懂、按鈕可點擊、動畫完成後 Hero 正常出現、核心功能不壞。

## 2026-05-08 專案實際狀態重新盤點

- 盤點結論：目前正式網站核心仍是純 HTML / CSS / JavaScript / JSON，沒有新增 React、Vue、Node.js、Vite、Webpack、package.json 或 node_modules。
- 目前正式開場：已以穩定邀請卡片開場為準，不再恢復紅包袋、信封 flap、卡片抽出、金粉光暈、Lottie 或複雜 3D 開場動畫。
- `wedding_card2.zip` 狀態：目前專案資料夾內沒有 `wedding_card2.zip` 實體檔案；Git 狀態顯示為已刪除的追蹤檔案，後續只需決定是否提交此刪除。
- 目前最明確可清理項目：根目錄的 `index.backup.before-intro-fix.html`、`script.backup.before-intro-fix.js`、`style.backup.before-intro-fix.css`，以及 `backups/` 內的 intro 修復備份。
- 目前空資料夾：`assets/icons/` 與 `assets/lottie/` 存在但目前沒有內容；其中 `assets/lottie/` 與目前「不使用 Lottie」方向不一致，可列為清理候選。
- 目前未被正式網站直接引用的照片：`assets/photos/IMG_0551.JPG`、`assets/photos/IMG_9563.JPG`、`assets/photos/cover_1.jpg`、`assets/photos/photo_1.jpg`、`assets/photos/photo_2.jpg`、`assets/photos/photo_3.jpg`。
- 照片處理建議：`cover_1.jpg`、`photo_1.jpg`、`photo_2.jpg`、`photo_3.jpg` 屬低解析暫用素材，可考慮刪除；`IMG_0551.JPG`、`IMG_9563.JPG` 目前文件列為候選照片，正式婚紗照到位前可先保留。
- 歷史任務注意：`tasks/004-intro-envelope-animation.md` 是舊信封 / 紅包袋動畫任務紀錄，與目前穩定卡片開場方向相反；後續若保留，應視為歷史紀錄，不應照此恢復舊開場。
- 核心部署必要檔案仍為：`index.html`、`style.css`、`script.js`、`wedding_info.json`、`assets/photos/`、`.nojekyll`。

## 2026-05-08 開場 Intro 穩定版清理

- 完成項目：將原先複雜紅包袋 / 信封開場動畫退回穩定邀請卡片開場。
- 修改原因：複雜信封動畫在實際視覺上不夠自然，且 CSS / DOM 狀態容易混亂；目前改以穩定、正式、乾淨的婚禮邀請卡作為開場。
- 目前開場形式：全螢幕暖白背景 + 中央邀請卡片 + Wedding Invitation + 新人姓名 + 日期 +「輕觸開啟喜帖」按鈕。
- 動畫策略：只保留淡入、按鈕觸發、淡出，不再使用 flap 翻開、卡片抽出、金粉光暈、Lottie 或複雜 3D 動畫。
- 保留功能：intro-overlay、intro-enter-button、music-toggle、bgm-audio、Hero 輪播、wedding_info.json fetch、embedded-wedding-data 備援、地圖、倒數、圖片 placeholder。
- 驗收重點：390px 手機寬度不爆版，新人姓名不換行，按鈕可點擊，點擊後可正常進入 Hero。

## 2026-04-30 拆開喜帖紅包袋 / 信封開場動畫

- 完成項目：新增全螢幕 intro overlay，使用紅酒色喜帖信封 / 紅包袋作為第一眼開場。
- 修改檔案：`index.html`、`style.css`、`script.js`、`PROJECT_STATUS.md`、`tasks/004-intro-envelope-animation.md`。
- 動畫內容：點擊後信封有觸碰下壓與發光感，上蓋 flap 以 3D 旋轉翻開，內層暖白喜帖卡片滑出並微放大，金粉與暖金光暈擴散後 overlay 淡出，主頁 fade-in / slide-up。
- 字體系統：新增 `--font-serif`、`--font-sans`、`--font-display`，中文標題使用 Noto Serif TC，內文使用 Noto Sans TC，英文與姓名使用 Cormorant Garamond / Playfair Display fallback。
- 音樂狀態：保留 `bgm-audio` 與 `music-toggle`，目前未放置音樂檔；預留建議位置為 `assets/audio/wedding-music.mp3`，不會因檔案不存在造成 console error。
- 驗收重點：手機寬度下信封使用 `clamp()` 控制尺寸，並加入 `prefers-reduced-motion` 降級。

## 專案概況

- 專案名稱：`wedding_card2`
- 專案類型：婚禮電子喜帖 H5 靜態網站
- 技術：純 HTML / CSS / JavaScript
- 部署：GitHub Pages 根目錄部署
- 目前婚禮資料：景翔與佳柔，2026-12-12 午宴，彭園婚宴八德館

## 目前核心功能

- 開場 overlay
- 背景音樂控制按鈕
- Hero 首屏與照片輪播
- 照片故事段落
- 中式婚禮意象段落
- 婚禮資訊卡
- Google Maps 導航按鈕
- 當日提醒
- 婚禮倒數
- 感謝結尾
- `wedding_info.json` 資料讀取
- `embedded-wedding-data` 內嵌備援資料
- 圖片失敗 placeholder

## GitHub Pages 狀態

根目錄部署必要檔案仍維持：

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`

發布流程仍使用：

- `publish.bat`
- `publish.ps1`

本機預覽仍使用：

- `preview.bat`
- `preview.ps1`

## 2026-04-28 AI 可讀取維護結構重整 v1

本次完成：

- 新增 `docs/` 文件群
- 新增 `skills/` 技能群
- 新增 `tasks/` 任務群
- 補強 `AGENTS.md`
- 補強 `README.md`
- 更新 `TASK_SPEC.md`
- 建立之後 Codex CLI / AI Agent 接手流程
- 建立修改前後檢查清單
- 建立照片素材使用規範
- 建立 GitHub Pages 發布流程文件
- 建立 QA 測試計畫

本次沒有做：

- 沒有重寫網站主功能
- 沒有大改 `index.html`
- 沒有大改 `style.css`
- 沒有大改 `script.js`
- 沒有更換照片
- 沒有改 GitHub Pages 部署方式
- 沒有新增 Node.js / React / Vue / build 流程

## 2026-04-27 既有進度摘要

早期紀錄顯示：

- 專案已整理為 GitHub Pages 可部署的根目錄結構。
- 已建立 `wedding_info.json` 作為婚禮資料主來源。
- 已在 `index.html` 建立 `embedded-wedding-data` 作為資料備援。
- 已在 `script.js` 建立資料讀取、輪播、音樂、地圖、倒數等功能。
- 已完成主要 H5 婚禮喜帖段落與手機版視覺基礎。
- 已建立預覽與發布腳本。

## 目前已知限制

- 正式婚紗照若尚未完全替換，需依 `docs/PHOTO_USAGE_GUIDE.md` 與 `tasks/003-photo-replacement-plan.md` 處理。
- 手機 390px 寬度仍是後續視覺升級時的首要驗收尺寸。
- 音樂自動播放受瀏覽器限制，需使用者互動後才可能播放。
- GitHub Pages 更新可能有快取與部署延遲。

## 下一步建議

1. 依 `tasks/002-next-visual-upgrade.md` 做下一階段視覺升級。
2. 依 `tasks/003-photo-replacement-plan.md` 替換正式婚紗照。
3. 每次修改前後依 `docs/CHECKLIST_BEFORE_EDIT.md` 與 `docs/CHECKLIST_AFTER_EDIT.md` 驗收。
