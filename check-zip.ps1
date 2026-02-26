Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("$PSScriptRoot\out-site.zip")
$htaccess = $zip.Entries | Where-Object { $_.FullName -eq '.htaccess' }
if ($htaccess) {
    Write-Host "FOUND: .htaccess (Size: $($htaccess.Length) bytes)"
} else {
    Write-Host "NOT FOUND: .htaccess"
}
Write-Host "Total entries: $($zip.Entries.Count)"
$zip.Entries | Select-Object -First 15 FullName | Format-Table
$zip.Dispose()
