# 004-intro-envelope-animation.md

## 任務名稱

新增「拆開喜帖紅包袋 / 信封」高質感開場動畫

## 完成日期

2026-04-30

## 修改檔案

- `index.html`
- `style.css`
- `script.js`
- `PROJECT_STATUS.md`
- `tasks/004-intro-envelope-animation.md`

## 完成內容

- 將原本簡單開場卡片升級為全螢幕紅酒色喜帖信封 / 紅包袋。
- 新增信封本體、上蓋 flap、左右折線、內層喜帖卡片、燙金細線、囍字與正式開場文案。
- 點擊 overlay 或「輕觸開啟喜帖」後，依序執行觸碰下壓、信封翻開、卡片滑出、overlay 淡出、主頁進場。
- 支援 Enter / Space 鍵觸發開場。
- 保留 `music-toggle` 與 `bgm-audio`，改為第一次開啟喜帖時嘗試播放；目前未放置音樂檔時會安靜停用。
- 加入 `prefers-reduced-motion` 降級處理。

## 待確認

- 手機 390px 實機確認信封與文字裁切。
- 若要補背景音樂，建議新增 `assets/audio/wedding-music.mp3` 並在 `index.html` 的 `bgm-audio` 補上 source。
