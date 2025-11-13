# download-logos.ps1
# Usage: .\download-logos.ps1 -mapping .\logos.json
# This script reads a JSON mapping { "filename.png": "https://..." } and downloads each file into src/assets/logos
param(
  [string]$mapping = "./logos.json",
  [string]$outDir = "./src/assets/logos"
)

if (-not (Test-Path $mapping)) {
  Write-Host "Mapping file not found: $mapping"
  Write-Host "Create a JSON file mapping like: { \"fifa.png\": \"https://example.com/fifa.png\", ... }"
  exit 1
}

if (-not (Test-Path $outDir)) {
  New-Item -ItemType Directory -Path $outDir | Out-Null
}

$map = Get-Content $mapping -Raw | ConvertFrom-Json

foreach ($key in $map.PSObject.Properties.Name) {
  $url = $map.$key
  $outPath = Join-Path $outDir $key
  try {
    Write-Host "Downloading $url -> $outPath"
    Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing
  }
  catch {
    Write-Host "Failed to download $url : $_" -ForegroundColor Red
  }
}

Write-Host "Done. Verify files in $outDir"