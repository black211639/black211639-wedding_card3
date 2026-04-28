# TASK_SPEC.md

## 任務名稱

AI 可讀取維護結構重整 v1

## 任務目標

讓 `wedding_card2` 專案具備清楚的 AI / CLI 接手文件、任務文件、技能規範與驗收流程，方便未來持續優化電子喜帖。

## 任務範圍

- 新增 `docs/`
- 新增 `skills/`
- 新增 `tasks/`
- 補強 `AGENTS.md`
- 補強 `README.md`
- 補強 `PROJECT_STATUS.md`

## 本次不做

- 不重寫首頁
- 不重寫 CSS
- 不重寫 JS
- 不更換照片
- 不改 GitHub Pages 部署方式
- 不新增 Node.js / React / Vue
- 不新增 build 流程

## 驗收標準

- 所有新增文件存在
- `AGENTS.md` 可作為 AI 接手總規範
- `README.md` 一般人可讀
- `docs/` 有完整維護流程
- `skills/` 有明確技能規範
- `tasks/` 有任務拆解與下一步
- 原網站核心檔案不被破壞
- GitHub Pages 必要檔案仍存在

## 核心保護清單

本任務不得改壞以下檔案與機制：

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`
- `wedding_info.json` fetch
- `embedded-wedding-data` 備援資料
- `intro-overlay`
- `music-toggle`
- `map-button`
- `countdown-grid`
- `data-hero-slide`
