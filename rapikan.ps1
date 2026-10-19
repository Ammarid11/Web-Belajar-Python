# Rapikan folder Python Odyssey. Jalankan dari folder proyek:  .\rapikan.ps1
# Tidak ada yang dihapus permanen: berkas yang tak terpakai dipindah ke _arsip\ (bisa dikembalikan).
$ErrorActionPreference = "Stop"

function Pindah($berkas, $tujuan) {
    if (Test-Path $berkas) {
        New-Item -ItemType Directory -Force -Path $tujuan | Out-Null
        Move-Item -LiteralPath $berkas -Destination $tujuan
        Write-Host "dipindah: $berkas -> $tujuan\"
    } else {
        Write-Host "dilewati (tidak ada): $berkas"
    }
}

# 1. Tidak dipakai oleh apa pun
Pindah "curriculum-perapian-blok.js" "_arsip"
Pindah "beginner-run.js"             "_arsip"

# 2. Catatan -> docs\
Pindah "LANJUTAN-PERAPIAN-MATERI.md" "docs"
Pindah "PERBAIKAN-DITERAPKAN.md"     "docs"
Pindah "PERBAIKAN-WEBSITE.md"        "docs"

Write-Host ""
Write-Host "Selesai. Cek dengan: npm test   (butuh package.json baru)"
