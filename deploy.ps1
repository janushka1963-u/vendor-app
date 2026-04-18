$authFile = "$env:APPDATA\vercel\auth.json"

Write-Host "Checking Vercel Authentication..."
if (!(Test-Path $authFile)) {
    Write-Host "Waiting for authentication. Please run 'npx vercel login' in your local terminal."
    while (!(Test-Path $authFile)) {
        Start-Sleep -Seconds 3
    }
    Write-Host "Authentication detected!"
} else {
    Write-Host "Already authenticated."
}

Write-Host "Building and deploying 'farmtohome' automatically..."
# Using the prebuilt output folder and forcing yes to all prompts
npx vercel --prod --yes
$outUrl = npx vercel ls --yes 2>$null | Select-String "https://farmtohome.*\.vercel\.app" | Select-Object -First 1
if ($outUrl) {
    Write-Host "------------------------------------------------------"
    Write-Host "DEPLOYMENT SUCCESSFUL!"
    Write-Host "Live URL: $outUrl"
    Write-Host "------------------------------------------------------"
} else {
    Write-Host "Check the output above for your Vercel Production URL."
}
