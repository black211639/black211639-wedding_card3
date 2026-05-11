# wedding_card2 婚禮電子喜帖

這是一個手機優先的婚禮電子喜帖 H5 網站，用來發給已確定會參加婚禮的賓客觀看。專案使用純 HTML、CSS、JavaScript，不需要 Node.js，也不需要安裝套件。

## 婚禮資訊

- 新郎：景翔
- 新娘：佳柔
- 日期：2026-12-12
- 形式：午宴
- 地點：彭園婚宴八德館
- 地址：桃園市八德區介壽路一段728號3樓

## 如何本機預覽

不要直接雙擊 `index.html`。網站會讀取 `wedding_info.json`，直接打開 HTML 可能造成瀏覽器阻擋 JSON 讀取。

建議方式：

1. 雙擊 `preview.bat`
2. 或在 PowerShell 執行：

```powershell
.\preview.ps1
```

3. 開啟：

```text
http://127.0.0.1:8000
```

## 如何修改婚禮資料

主要資料在 `wedding_info.json`：

- 新郎、新娘姓名
- 日期與倒數時間
- 婚禮地點、地址、宴會廳
- Google Maps 連結
- 邀請文案與提醒事項
- 照片路徑

修改後請用本機預覽確認畫面正常。

## 如何替換照片

照片放在：

```text
assets/photos/
```

建議優先替換同名檔案，避免改程式：

- `cover.jpg`：首頁 Hero 主視覺
- `photo1.jpg`：故事或介紹段落
- `photo2.jpg`：故事或回憶段落
- `photo3.jpg`：結尾、倒數或輔助照片

更多照片使用規範請看 `docs/PHOTO_USAGE_GUIDE.md`。

## 如何發布到 GitHub Pages

發布前先本機預覽確認沒問題。

執行：

```powershell
.\publish.ps1
```

或雙擊：

```text
publish.bat
```

GitHub Pages 使用根目錄部署，必要檔案包含：

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`

發布後 GitHub Pages 可能需要等待幾分鐘才會更新。

## 常見問題

- 頁面資料沒出現：請用 `preview.bat` 或 `preview.ps1`，不要直接打開 `index.html`。
- 圖片沒出現：確認照片是否在 `assets/photos/`，檔名大小寫是否一致。
- GitHub Pages 沒更新：等待幾分鐘，清除瀏覽器快取，並檢查 GitHub Pages 狀態。
- 音樂沒有自動播放：手機瀏覽器通常需要使用者點擊後才允許播放，這是正常限制。
- 手機畫面爆版：請用 390px 寬度檢查，尤其是新人姓名、資訊卡與倒數區。

## AI / CLI 維護文件

給 AI Agent 或 Codex CLI 接手時，請先讀：

- `AGENTS.md`
- `PROJECT_STATUS.md`
- `TASK_SPEC.md`
- `docs/CHECKLIST_BEFORE_EDIT.md`
- `docs/CHECKLIST_AFTER_EDIT.md`

文件結構：

- `docs/`：專案說明、檔案地圖、驗收、部署、照片規範
- `skills/`：AI 修改前端、視覺、文案、部署、照片、除錯的技能規範
- `tasks/`：目前狀態、本次任務、下一步任務草案

## 下一步可以怎麼改

- 替換正式婚紗照
- 強化首頁 Hero 首屏
- 優化照片故事段落
- 讓倒數區與婚禮資訊更有儀式感
- 檢查 GitHub Pages 手機版實際觀看效果
