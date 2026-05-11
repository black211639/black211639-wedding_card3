# DEPLOYMENT_FLOW.md

## 本機預覽方式

建議使用：

```powershell
.\preview.ps1
```

或雙擊：

```text
preview.bat
```

啟動後開啟：

```text
http://127.0.0.1:8000
```

## 為什麼不能直接雙擊 index.html

`script.js` 會讀取 `wedding_info.json`。直接用檔案模式打開 `index.html` 時，瀏覽器可能因安全限制阻擋 fetch，導致資料讀取失敗。用本機 server 預覽才能接近 GitHub Pages 的實際環境。

## 腳本用途

- `preview.bat`：Windows 雙擊啟動本機預覽。
- `preview.ps1`：PowerShell 預覽腳本，通常使用 Python http.server。
- `publish.bat`：Windows 雙擊啟動發布流程。
- `publish.ps1`：PowerShell 發布腳本，協助 Git commit / push。

## GitHub Pages 必要檔案

- `index.html`
- `style.css`
- `script.js`
- `wedding_info.json`
- `assets/`
- `.nojekyll`

## 根目錄部署原則

- `index.html` 必須在 repository 根目錄。
- GitHub Pages 設定應為 `main` branch 與 `/ (root)`。
- 不需要 build。
- 不需要 Node.js。
- 所有素材應使用相對路徑。

## 發布後檢查

- GitHub Pages 可能需要等待幾分鐘才更新。
- 若頁面沒更新，先檢查瀏覽器快取。
- 再檢查 GitHub repository 的 Pages 狀態。
- 再確認是否 push 到正確 branch。
- 再確認檔名大小寫與路徑是否正確。
