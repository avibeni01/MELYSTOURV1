# Script de compression des videos
$videosPath = "c:\Users\Benisty\Documents\elynor tours\elynor-tours-v2\elynor-tours-v2\public\videos"
$tempPath = "$videosPath\temp"

# Creer dossier temporaire
New-Item -ItemType Directory -Force -Path $tempPath | Out-Null

# Compter les fichiers
$files = Get-ChildItem -Path $videosPath -Filter "*.mp4"
$total = $files.Count
$current = 0

Write-Host "Compression de $total videos"
Write-Host ""

foreach ($file in $files) {
    $current++
    $inputFile = $file.FullName
    $outputFile = Join-Path $tempPath $file.Name

    Write-Host "[$current/$total] Compression de $($file.Name)..."

    # Commande ffmpeg
    & ffmpeg -i "$inputFile" -vf "scale=1280:720" -c:v libx264 -crf 28 -preset slow -an "$outputFile" -y 2>&1 | Out-Null

    if ($LASTEXITCODE -eq 0) {
        Write-Host "  OK - Compresse avec succes"
        $oldSize = (Get-Item $inputFile).Length / 1MB
        $newSize = (Get-Item $outputFile).Length / 1MB
        $reduction = [math]::Round((1 - ($newSize / $oldSize)) * 100, 1)
        Write-Host "  Taille originale: $([math]::Round($oldSize, 2)) MB"
        Write-Host "  Nouvelle taille: $([math]::Round($newSize, 2)) MB"
        Write-Host "  Reduction: $reduction%"
    } else {
        Write-Host "  ERREUR lors de la compression"
    }
    Write-Host ""
}

Write-Host "Remplacement des fichiers originaux"
Write-Host ""

# Remplacer les fichiers originaux
foreach ($file in Get-ChildItem -Path $tempPath -Filter "*.mp4") {
    $destination = Join-Path $videosPath $file.Name
    Write-Host "Remplacement de $($file.Name)..."
    Move-Item -Path $file.FullName -Destination $destination -Force
    Write-Host "  OK - Remplace"
}

# Supprimer le dossier temporaire
Remove-Item -Path $tempPath -Force

Write-Host ""
Write-Host "Compression terminee"
