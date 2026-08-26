# Razones

Página estática (HTML + CSS + JS) para publicar en GitHub Pages.

## Estructura

```
pagina-razones/
├── index.html          → estructura: header, razones, cierre
├── css/
│   └── styles.css      → paleta 60/30/10 y todo el diseño
├── js/
│   └── script.js       → ACÁ van las razones
└── assets/
    └── escudo.png      → poné vos el escudo acá
```

## Qué completar

1. **`js/script.js`** — el array `razones`. Cada `{ titulo, texto }` es una tarjeta.
2. **`index.html`** — los guiones bajos: su nombre, la frase del header, el mensaje final y tu firma.
3. **`assets/escudo.png`** — guardá ahí la imagen del escudo con ese nombre exacto. Si preferís otro formato, cambiá la ruta en la línea del `<img>` del header.

## Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub.
2. Subí los archivos **desde la raíz** (que `index.html` quede en el primer nivel, no dentro de una carpeta).
3. Andá a *Settings → Pages*.
4. En *Source* elegí **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
5. Guardá. En un par de minutos queda en `https://tu-usuario.github.io/nombre-del-repo/`.

Para probarla antes, abrí `index.html` con doble clic: funciona igual sin servidor.
