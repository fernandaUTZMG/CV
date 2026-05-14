# Portafolio — Fernanda Hernández Alatorre

Portafolio profesional (diseño inspirado en un portafolio de ejemplo tipo “hero + proyectos + carrusel”), construido con **React + Vite + TypeScript + Tailwind CSS v4**. La **paleta de color** es propia: fondo cálido tipo piedra oscura con acentos **ámbar y coral**, distinta de esquemas cyan/violeta típicos.

Incluye:

- Secciones **Inicio**, **Perfil**, **Proyectos** y **Contacto**
- Cambio de idioma **ES / EN**
- **Foto de perfil** desde `public/foto-perfil.jpg` (ver `public/LEEME-FOTO.txt`)
- Carruseles con capturas servidas desde **`public/media/`** (tú añades los PNG; ver `public/media/README.md`)
- **CV imprimible** en `public/cv.html` (Imprimir → Guardar como PDF; incluye la misma foto si está en `public/`)
- Versión en Markdown del CV en `docs/CV_Fernanda_Hernandez_Alatorre.md`

## Requisitos

- Node.js 20+ (recomendado)

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Publicar en GitHub

1. Crea un repositorio vacío en tu cuenta (por ejemplo `portfolio-fernanda`).
2. Desde la carpeta `portfolio-fernanda`:

```bash
git init
git add .
git commit -m "Initial portfolio and CV content"
git branch -M main
git remote add origin https://github.com/fernandaUTZMG/<TU_REPO>.git
git push -u origin main
```

## Publicar en Render (URL pública)

Tu sitio es **estático** (HTML/JS/CSS generados en `dist/`). Render lo sirve por HTTPS y te da un dominio `https://<nombre>.onrender.com`.

### Antes: sube el código a GitHub

1. Asegúrate de tener **commit** con todo: `src/`, `public/` (foto, `cv.html`, imágenes en `public/media/`, etc.).
2. Crea el repo en GitHub (por ejemplo `portfolio-fernanda`) y sube la rama `main`:

```bash
git add .
git commit -m "Portfolio listo para producción"
git remote add origin https://github.com/fernandaUTZMG/<TU_REPO>.git
git push -u origin main
```

(Si el remoto ya existe, solo `git push`.)

### En Render

1. Entra a [https://dashboard.render.com/](https://dashboard.render.com/) e inicia sesión (idealmente con **GitHub**).
2. **New +** → **Static Site**.
3. Conecta el repositorio y elige la rama **`main`** (o la que uses).
4. Render puede leer el archivo **`render.yaml`** de la raíz del repo. Si configuras a mano:
   - **Build Command:** `npm install && npm run build`
   - **Publish directory:** `dist`
5. Elige un **nombre** del servicio (eso define parte de la URL, p. ej. `fernanda-portfolio` → `https://fernanda-portfolio.onrender.com`).
6. Crea el servicio y espera el primer **deploy** (varios minutos la primera vez).
7. Abre la URL que te muestra Render; el portafolio está en **`/`** y el CV en **`/cv.html`**.

### Después de cada cambio

Cada `git push` a la rama conectada dispara un **nuevo deploy** automático.

### Dominio propio (opcional)

En el servicio → **Settings** → **Custom Domains** puedes enlazar un dominio que compres aparte (Render indica los registros DNS).

### Plan gratuito

En el plan gratuito el sitio puede “dormir” si no recibe tráfico; la **primera visita** tras un rato puede tardar unos segundos en despertar. Para uso personal de portafolio suele ser suficiente.

## Foto de perfil

1. Exporta o copia tu imagen a la carpeta `public/`.
2. Nómbrala **`foto-perfil.jpg`** (o `.jpeg`, `.png`, `.webp` — se prueban en ese orden).
3. Vuelve a ejecutar `npm run dev` o redespliega.

Si no hay archivo, el sitio muestra un avatar con iniciales **FH** como respaldo.

## Capturas de proyectos (carrusel)

Añade los PNG en `public/media/alch/` (`1.png` … `12.png`), `public/media/cruz-verde/` (`1.png` … `4.png`) y **`public/media/solaino/`** (`1.png` … `7.png`); detalle en `public/media/README.md`.

## PDF del CV

No se versiona un binario `.pdf` para evitar duplicación; el flujo recomendado es abrir `/cv.html` en producción y exportar a PDF desde el navegador.

## Aviso sobre imágenes de proyectos

Las rutas apuntan a archivos **dentro de tu repositorio** (`public/media/...`). Solo publica material que tengas derecho a usar. Las leyendas del sitio indican que los datos mostrados deben ser ficticios o anonimizados cuando corresponda.
