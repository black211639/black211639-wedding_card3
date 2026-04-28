# wedding-card-debug.md

## 直接打開 index.html 導致 JSON fetch 失敗

- 可能原因：瀏覽器檔案模式阻擋 fetch。
- 檢查方式：Console 是否有 CORS 或 fetch error。
- 修正方式：用 `preview.bat` 或 `.\preview.ps1` 開啟本機 server。

## 圖片路徑錯誤

- 可能原因：檔名不一致、大小寫不同、路徑改壞。
- 檢查方式：Network 是否有 404，確認 `assets/photos/` 檔案存在。
- 修正方式：修正相對路徑，或替換同名檔案。

## GitHub Pages 沒更新

- 可能原因：部署延遲、瀏覽器快取、未 push 到正確 branch。
- 檢查方式：看 GitHub Pages 狀態與 commit 是否在線上。
- 修正方式：等待幾分鐘、清快取、確認 Pages 設定為 `main` / `/ (root)`。

## map-button 沒反應

- 可能原因：`map-button` id 被改掉、`map_link` 空值、JS 中斷。
- 檢查方式：搜尋 `map-button`，檢查 Console，確認 `wedding_info.json` 的 `map_link`。
- 修正方式：恢復 id、修正 `map_link`、排除前面的 JS 錯誤。

## countdown 不更新

- 可能原因：`countdown-grid` 被改掉、`countdown_target` 格式錯誤、JS 中斷。
- 檢查方式：確認 `countdown_target` 為 ISO 格式，例如 `2026-12-12T12:00:00`。
- 修正方式：恢復 DOM id，修正日期字串。

## 音樂不能自動播放

- 可能原因：手機瀏覽器限制自動播放。
- 檢查方式：點擊開場或音樂按鈕後再測。
- 修正方式：保留使用者互動後播放的設計，不要強制自動播放。

## 手機版姓名換行

- 可能原因：字級過大、容器過窄、字距或 padding 過多。
- 檢查方式：390px 寬度查看 `hero-names`。
- 修正方式：調整字級、容器寬度或 `white-space` 策略。

## 390px 爆版

- 可能原因：固定寬度、過大 padding、倒數欄位太擠、長文字未換行。
- 檢查方式：DevTools 設定 390px 寬。
- 修正方式：移除固定寬度，加入 `max-width: 100%`、調整 grid 與字級。

## assets 資料夾路徑錯誤

- 可能原因：改成絕對路徑或搬動資料夾。
- 檢查方式：確認 HTML / JSON / CSS 都使用正確相對路徑。
- 修正方式：恢復 `assets/photos/...` 路徑。

## 大小寫檔名在 GitHub Pages 出錯

- 可能原因：Windows 本機不區分大小寫，但 GitHub Pages 區分。
- 檢查方式：比對實際檔名與程式引用。
- 修正方式：統一檔名大小寫並重新 commit / push。
