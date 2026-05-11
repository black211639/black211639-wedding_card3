# 001-ai-readable-refactor.md

## 任務名稱

AI 可讀取維護結構重整

## 任務目的

建立清楚的 Markdown 與 Skill 文件結構，讓之後 Codex CLI 或其他 AI Agent 接手時，可以先讀規範，再修改程式。

## 新增檔案清單

- `docs/PROJECT_BRIEF.md`
- `docs/FILE_MAP.md`
- `docs/CHANGELOG.md`
- `docs/CHECKLIST_BEFORE_EDIT.md`
- `docs/CHECKLIST_AFTER_EDIT.md`
- `docs/PHOTO_USAGE_GUIDE.md`
- `docs/DEPLOYMENT_FLOW.md`
- `docs/QA_TEST_PLAN.md`
- `skills/wedding-card-frontend.md`
- `skills/wedding-card-visual-design.md`
- `skills/wedding-card-content.md`
- `skills/wedding-card-github-pages.md`
- `skills/wedding-card-photo-curation.md`
- `skills/wedding-card-debug.md`
- `tasks/000-current-state.md`
- `tasks/001-ai-readable-refactor.md`
- `tasks/002-next-visual-upgrade.md`
- `tasks/003-photo-replacement-plan.md`

## 更新檔案清單

- `AGENTS.md`
- `README.md`
- `PROJECT_STATUS.md`
- `TASK_SPEC.md`

## 驗收標準

- 所有新增文件存在。
- `AGENTS.md` 可作為 AI 接手總規範。
- `README.md` 一般使用者可讀。
- `docs/` 有完整維護流程。
- `skills/` 有明確技能規範。
- `tasks/` 有任務拆解與下一步。
- 原網站核心檔案不被破壞。
- GitHub Pages 必要檔案仍存在。

## 本次不做的事

- 不重寫首頁。
- 不重寫 CSS。
- 不重寫 JS。
- 不更換照片。
- 不改 GitHub Pages 部署方式。
- 不新增 Node.js / React / Vue。
