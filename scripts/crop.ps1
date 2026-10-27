Add-Type -AssemblyName System.Drawing

$src = "C:\Users\dipak\.gemini\antigravity-ide\brain\b137159f-24ba-44a3-9759-3e5d237519e2\.user_uploaded\media_1793099693676.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)
$width = $bmp.Width
$height = $bmp.Height

Write-Host "Width: $width, Height: $height"
$bmp.Dispose()
