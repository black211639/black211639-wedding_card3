# CHANGELOG.md

本檔記錄重要變更。詳細狀態可搭配 `PROJECT_STATUS.md` 查看。

## 2026-04-28 第一優先視覺升級

- 修改人 / 工具：Codex CLI
- 修改目的：升級開場封面、Hero 首屏、照片故事段落與 Thank You 結尾，讓網站更像正式高級 H5 婚禮電子喜帖。
- 修改檔案：
  - `index.html`
  - `style.css`
  - `script.js`
  - `docs/CHANGELOG.md`
- 修改摘要：
  - 開場 overlay 改為紙質封套卡片風格，保留 `intro-overlay` 與 `intro-enter-button`。
  - Hero 改為海報式主視覺，調整照片遮罩、文字層級、留白與 scroll hint。
  - 照片故事段落改為 Chapter 章節式排版，降低普通圖庫感。
  - Thank You 區改為完整 ending page，使用既有照片作背景與正式收束文案。
  - 更新 `script.js` 的照片 selector，確保 `wedding_info.json` 的照片路徑仍能套用到新章節結構。
- 素材：
  - 未新增網路素材。
  - 僅使用既有 `assets/photos/` 照片。
- 驗收結果：
  - 待本機預覽與功能驗收。
- 待處理項目：
  - 建議人工確認正式照片在手機 390px 下的裁切位置。

## 2026-04-28

- 修改人 / 工具：Codex CLI
- 修改目的：AI 可讀取維護結構重整 v1
- 修改檔案：
  - 新增 `docs/`
  - 新增 `skills/`
  - 新增 `tasks/`
  - 更新 `AGENTS.md`
  - 更新 `README.md`
  - 更新 `PROJECT_STATUS.md`
  - 更新 `TASK_SPEC.md`
- 修改摘要：
  - 建立 AI 接手總規範、文件地圖、修改前後檢查清單。
  - 建立照片使用、部署流程、QA 測試計畫。
  - 建立前端、視覺、文案、GitHub Pages、照片挑選與除錯技能文件。
  - 建立目前狀態、本次文件任務、下一階段視覺升級與照片替換計畫。
- 驗收結果：
  - 文件結構建立完成。
  - 未重寫網站主功能。
  - GitHub Pages 根目錄部署方式不變。
- 待處理項目：
  - 下一階段可進行正式視覺升級。
  - 正式婚紗照到位後，依 `tasks/003-photo-replacement-plan.md` 替換。

## 2026-04-27 摘要

- 既有紀錄顯示專案已完成 GitHub Pages 根目錄部署基礎。
- 已建立 `AGENTS.md` 與 `TASK_SPEC.md` 的早期版本。
- 已整理 `wedding_info.json` 作為婚禮資料主來源。
- 已建立 `embedded-wedding-data` 作為 JSON fetch 失敗時的備援資料。
- 已完成 H5 婚禮電子喜帖的主要段落：開場、Hero、照片、婚禮資訊、地圖、提醒、倒數、結尾。
