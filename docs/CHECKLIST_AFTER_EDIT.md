# CHECKLIST_AFTER_EDIT.md

每次修改後，依序完成以下驗收。

## 本機預覽

- `preview.bat` 可正常啟動。
- 或 PowerShell 執行 `.\preview.ps1` 可正常啟動。
- `http://127.0.0.1:8000` 可正常開啟。

## 手機版

- 手機寬度 390px 不爆版。
- 新人姓名不換行。
- 按鈕、卡片、倒數區不互相重疊。
- 文字不被照片或遮罩吃掉。

## 功能

- 開場 overlay 可點擊關閉。
- 音樂按鈕存在且不報錯。
- Hero 輪播正常。
- `wedding_info.json` 可正常 fetch。
- fetch 失敗時內嵌備援資料仍可顯示。
- 地圖按鈕可開啟 Google Maps。
- 倒數正常更新。
- 圖片載入失敗時 placeholder 正常。

## GitHub Pages

- `index.html` 仍在根目錄。
- `.nojekyll` 仍在根目錄。
- `assets/` 仍在根目錄。
- `wedding_info.json` 仍在根目錄。
- 相對路徑沒有改壞。

## 修改後回報

回報需包含：

1. 修改了哪些檔案
2. 每個檔案改了什麼
3. 如何本機預覽
4. 如何部署
5. 有沒有需要人工確認的地方
