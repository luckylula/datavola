# Setup de Imágenes

Para que el proyecto funcione correctamente, necesitas copiar las imágenes y archivos desde la carpeta raíz:

## Pasos:

1. **Copiar imágenes:**
   - Copia toda la carpeta `images/` desde `C:\Users\lulam\OneDrive\datavola\images\` 
   - Pégala en `datavola-nextjs\public\images\`

2. **Copiar archivo JSON:**
   - Copia `images-list.json` desde la raíz
   - Pégalo en `datavola-nextjs\public\images-list.json`

3. **Verificar que existan:**
   - `/public/images/videoanim.mp4`
   - `/public/images/dashboard avec portable.png`
   - `/public/images/DataVola logo.png`
   - `/public/images-list.json`

## Comandos (PowerShell):

```powershell
# Desde la raíz del proyecto datavola
Copy-Item -Path "images" -Destination "datavola-nextjs\public\images" -Recurse
Copy-Item -Path "images-list.json" -Destination "datavola-nextjs\public\images-list.json"
```
