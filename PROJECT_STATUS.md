# PROJECT_STATUS.md

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
- 目前婚禮資料：景翔與佳柔，2026-12-12 午宴，彭員婚宴八德館

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
