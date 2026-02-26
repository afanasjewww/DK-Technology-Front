Add-Type -AssemblyName System.IO.Compression.FileSystem

$srcDir = Join-Path $PSScriptRoot "out"
$zipPath = Join-Path $PSScriptRoot "out-site.zip"

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

[System.IO.Compression.ZipFile]::CreateFromDirectory($srcDir, $zipPath)

Write-Host "Created: $zipPath"
Write-Host "Size: $([math]::Round((Get-Item $zipPath).Length / 1MB, 2)) MB"
