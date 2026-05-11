param(
  [int]$Port = 8000
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

function Fail($message) {
  Write-Host ""
  Write-Host $message -ForegroundColor Red
  exit 1
}

function Get-PythonCommand {
  $candidates = @("py", "python")

  foreach ($candidate in $candidates) {
    try {
      & $candidate --version *> $null

      if ($LASTEXITCODE -eq 0) {
        return $candidate
      }
    } catch {
    }
  }

  return $null
}

function Test-PortAvailable($port) {
  $listener = $null
  $client = $null

  try {
    $client = [System.Net.Sockets.TcpClient]::new()
    $connectTask = $client.ConnectAsync("127.0.0.1", $port)

    if ($connectTask.Wait(250) -and $client.Connected) {
      return $false
    }

    $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
    $listener.Start()
    return $true
  } catch {
    return $false
  } finally {
    if ($client) {
      $client.Close()
    }

    if ($listener) {
      $listener.Stop()
    }
  }
}

function Get-PreviewPort($preferredPort) {
  if (Test-PortAvailable $preferredPort) {
    return $preferredPort
  }

  Write-Host "Port $preferredPort is already in use. Looking for another available port..." -ForegroundColor Yellow

  for ($candidate = $preferredPort + 1; $candidate -le $preferredPort + 20; $candidate++) {
    if (Test-PortAvailable $candidate) {
      return $candidate
    }
  }

  Fail "No available preview port found from $preferredPort to $($preferredPort + 20)."
}

$pythonCommand = Get-PythonCommand

if (-not $pythonCommand) {
  Fail "Python was not found. Install Python 3 and make sure py or python works in PowerShell, then run this script again."
}

$previewPort = Get-PreviewPort $Port
$url = "http://127.0.0.1:$previewPort"

Write-Host ""
Write-Host "Starting local preview server..." -ForegroundColor Cyan
Write-Host "Project folder: $repoRoot" -ForegroundColor DarkGray
Write-Host "Preview URL: $url" -ForegroundColor Green
if ($previewPort -ne $Port) {
  Write-Host "Requested port $Port is occupied. Use this preview URL instead: $url" -ForegroundColor Yellow
}
Write-Host "Press Ctrl+C to stop the server." -ForegroundColor Yellow
Write-Host ""

$encodedUrl = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($url))
$browserOpener = @"
`$url = [Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('$encodedUrl'))
for (`$i = 0; `$i -lt 30; `$i++) {
  try {
    `$response = Invoke-WebRequest -Uri `$url -UseBasicParsing -TimeoutSec 1
    if (`$response.StatusCode -eq 200) {
      Start-Process `$url
      exit 0
    }
  } catch {
    Start-Sleep -Milliseconds 250
  }
}
Start-Process `$url
"@

Start-Process powershell.exe -ArgumentList "-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", $browserOpener -WindowStyle Hidden

if ($pythonCommand -eq "py") {
  & py -m http.server $previewPort --bind 127.0.0.1
} elseif ($pythonCommand -eq "python") {
  & python -m http.server $previewPort --bind 127.0.0.1
} else {
  & $pythonCommand -m http.server $previewPort --bind 127.0.0.1
}
