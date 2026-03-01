# ConquerBlocks Website

[![Preview del proyecto](preview.png)](https://mariafernandamamone.github.io/ConquerBlocks-Website/index.html)

Sitio web institucional multipage desarrollado como proyecto de práctica en el Máster Fullstack.  
El objetivo fue trabajar estructura semántica, navegación compleja (dropdown), organización de assets y despliegue en producción utilizando GitHub Pages.

🔗 **Proyecto en vivo:**  
https://mariafernandamamone.github.io/ConquerBlocks-Website/index.html

---

## 📌 Descripción técnica

El proyecto implementa:

- Arquitectura multipage
- Navegación con menú desplegable
- Estructura semántica HTML5
- Organización de recursos estáticos
- Estructura SASS 
- Configuración de Vite para build y producción
- Deploy en GitHub Pages

Se priorizó claridad estructural, buenas prácticas de maquetación y consistencia visual.

---

## 🛠 Stack tecnológico

- HTML5
- CSS3
- JavaScript
- Vite
- GitHub Pages

---

## 📂 Estructura del proyecto

```bash
ConquerBlocks-Website/
│── index.html
│── Fullstack.html
│── blockchain.html
│── IA.html
│── Ciberseguridad.html
│── opiniones.html
│── nosotros.html
│── package.json
│── vite.config.js
│── preview.png
│
└── public/
    └── images/
        ├── logo.png
        ├── hero.jpg
        └── ...
```

---

## 🚀 Instalación y ejecución local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/mariafernandamamone/ConquerBlocks-Website.git
cd ConquerBlocks-Website
```

### 2️⃣ Instalar dependencias

Con npm:

```bash
npm install
```

Con yarn:

```bash
yarn install
```

### 3️⃣ Ejecutar entorno de desarrollo

```bash
npm run dev
```

o

```bash
yarn dev
```

Vite levantará un servidor local en:

```
http://localhost:5173
```

---

## 🏗 Build para producción

Generar versión optimizada:

```bash
npm run build
```

Esto crea la carpeta:

```bash
dist/
```

Previsualizar el build:

```bash
npm run preview
```

---

## 🌐 Deploy en GitHub Pages

El proyecto está desplegado mediante GitHub Pages utilizando el build de producción generado por Vite.

Si se vuelve a desplegar manualmente:

```bash
npm run build
git add .
git commit -m "update build"
git push origin main
```

---

## 📚 Aprendizajes del proyecto

- Configuración de Vite para entorno multipage
- Manejo correcto de rutas relativas para GitHub Pages
- Resolución de errores 404 en producción
- Organización de estructura estática sin framework

---
