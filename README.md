# Iván Mayoral Capel - Portfolio

Portfolio profesional de **Iván Mayoral Capel**, desarrollador Full Stack, UI/UX Designer y creador de VFX & GFX. Especializado en tecnologías modernas como React, TypeScript, Astro y efectos visuales.

## 🚀 Tecnologías Utilizadas

### Frontend & Backend
- **React 19** - Framework de JavaScript moderno
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Build tool ultra-rápido y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Astro** - Framework para sitios web estáticos

### Herramientas de Desarrollo
- **Lucide React** - Iconos modernos y consistentes
- **React Awesome Reveal** - Animaciones suaves y profesionales
- **ESLint & Prettier** - Linting y formateo de código
- **PostCSS** - Procesamiento de CSS

### Diseño & UX
- **Figma** - Diseño de interfaces
- **Adobe Creative Suite** - Edición de video y VFX
- **DaVinci Resolve** - Post-producción profesional

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/ivanmayoraldev/porfolio-ivanmayoraldev.git
cd porfolio-ivanmayoraldev
```

2. **Instala las dependencias:**
```bash
pnpm install
# o
npm install
```

3. **Ejecuta el servidor de desarrollo:**
```bash
pnpm dev
# o
npm run dev
```

4. **Abre [http://localhost:5173](http://localhost:5173) en tu navegador**

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Construye la aplicación para producción |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm lint` | Ejecuta el linter para verificar código |
| `pnpm lint:fix` | Corrige errores del linter automáticamente |
| `pnpm typecheck` | Verifica tipos de TypeScript |
| `pnpm format:write` | Formatea el código con Prettier |
| `pnpm format:check` | Verifica el formato del código |

## 📁 Estructura del Proyecto

```
porfolio-ivanmayoraldev/
├── src/
│   ├── components/
│   │   ├── mini-components/     # Componentes modulares
│   │   │   ├── header/         # Componentes del header
│   │   │   ├── main/           # Componentes principales
│   │   │   ├── projects/       # Componentes de proyectos
│   │   │   ├── education/      # Componentes de educación
│   │   │   ├── workExperience/ # Componentes de experiencia
│   │   │   ├── footer/         # Componentes del footer
│   │   │   ├── fondo/          # Componentes de fondo
│   │   │   ├── lang/           # Contexto de idioma
│   │   │   └── ui/             # Componentes de UI
│   │   ├── pages/              # Páginas de la aplicación
│   │   ├── styles/             # Estilos globales
│   │   ├── App.tsx             # Componente principal
│   │   └── main.tsx            # Punto de entrada
│   ├── public/                 # Archivos estáticos
│   ├── index.html              # HTML principal
│   └── package.json            # Dependencias y scripts
```

## 🎨 Características del Portfolio

### ✨ Diseño y UX
- **Diseño moderno y responsive** - Optimizado para todos los dispositivos
- **Modo oscuro/claro** - Tema adaptable con transiciones suaves
- **Animaciones fluidas** - Transiciones y efectos visuales profesionales
- **Accesibilidad** - Cumple estándares WCAG para inclusividad

### 🚀 Rendimiento
- **Optimizado con Vite** - Build ultra-rápido y HMR
- **Lazy loading** - Carga eficiente de imágenes y componentes
- **SEO optimizado** - Metadatos, sitemap y structured data
- **PWA ready** - Progressive Web App con manifest

### 🌍 Internacionalización
- **Multiidioma** - Soporte para español e inglés
- **Context API** - Gestión de estado de idioma
- **Traducciones dinámicas** - Contenido adaptado por idioma

## 📱 Secciones del Portfolio

### 🏠 **Inicio**
- Presentación personal con animaciones
- Slider de tecnologías infinito
- Enlaces a redes sociales

### 👨‍💻 **Sobre Mí**
- Descripción profesional detallada
- Experiencia y habilidades técnicas
- Enfoque en desarrollo y VFX

### 🎯 **Proyectos**
- **Proyectos Web**: React, TypeScript, Astro
- **Proyectos VFX**: Edición de video, motion graphics
- Filtros por categoría y tecnologías

### 💼 **Experiencia Laboral**
- Experiencia en Peereira7 (VFX & GFX Creator)
- Logros y tecnologías utilizadas
- Video showcase integrado

### 🎓 **Educación**
- Ingeniería Informática (UNIR)
- Desarrollo de Aplicaciones Web (CFP JuanXXIII)
- Timeline interactivo

## 🔧 Configuración de Desarrollo

### Variables de Entorno
Crea un archivo `.env.local` para configuraciones locales:
```env
VITE_APP_TITLE=Iván Mayoral Capel Portfolio
VITE_APP_URL=https://ivanmayoral.com
```

### Configuración de TypeScript
El proyecto incluye configuración estricta de TypeScript para mayor robustez:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`

## 📊 SEO y Analytics

### Optimizaciones Implementadas
- **Meta tags completos** - Title, description, keywords
- **Open Graph** - Previsualización en redes sociales
- **Twitter Cards** - Optimización para Twitter
- **Structured Data** - JSON-LD para rich snippets
- **Sitemap.xml** - Mapa del sitio para buscadores
- **robots.txt** - Directrices para crawlers

### Analytics
- **Vercel Analytics** - Métricas de rendimiento
- **Speed Insights** - Análisis de velocidad

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify
```bash
# Build del proyecto
pnpm build

# Subir carpeta dist a Netlify
```

## 📞 Contacto

- **Portfolio**: [ivanmayoral.com](https://ivanmayoral.com)
- **GitHub**: [@ivanmayoraldev](https://github.com/ivanmayoraldev)
- **LinkedIn**: [Iván Mayoral](https://www.linkedin.com/in/iván-mayoral-8288a1331/)
- **Twitter**: [@ivanmayoraldev](https://twitter.com/ivanmayoraldev)
- **Instagram**: [@ivanmayoraldev](https://www.instagram.com/ivanmayoraldev)

## 📄 Licencia

Este proyecto es de uso personal y educativo. Todos los derechos reservados © 2025 Iván Mayoral Capel.

---

**Desarrollado con ❤️ por Iván Mayoral Capel**
