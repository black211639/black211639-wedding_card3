# wedding-card-frontend.md

## 適用範圍

用於修改 `wedding_card2` 的 HTML / CSS / JavaScript 前端結構與互動。

## 核心規則

- 本專案只能用原生 HTML / CSS / JavaScript。
- 保留 DOM 結構優先。
- 優先小步修改，不要整頁推翻。
- 不破壞既有 id / class / data attribute。
- 不破壞 `script.js` 對 DOM 的查找。
- 不新增外部框架。
- 不引入不必要 CDN。
- 手機優先。
- 390px 寬度必測。
- 改動前後都要檢查功能。

## 特別保護

不得破壞：

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

## 建議工作方式

1. 先讀 `AGENTS.md`、`docs/FILE_MAP.md`、`TASK_SPEC.md`。
2. 若只改文案或資料，優先改 `wedding_info.json`。
3. 若只改視覺，優先改 `style.css`，避免改 HTML。
4. 若必須改 DOM，先搜尋 `script.js` 是否依賴該 id / class。
5. 修改後跑本機預覽並檢查 Console。
