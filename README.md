# 🌟 Psicoweb - Sitio Web Profesional de Psicología

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Descripción

**Psicoweb** es un sitio web profesional y moderno diseñado para psicólogos que desean establecer una presencia digital atractiva y funcional. El proyecto ofrece una experiencia de usuario optimizada tanto para dispositivos móviles como de escritorio, con un diseño elegante y contenido especializado en servicios psicológicos.

## ✨ Características Principales

### 🎨 Diseño Responsivo

- **Diseño adaptativo** que se ajusta perfectamente a móviles, tablets y desktop
- **Componentes específicos** para móvil y desktop para optimizar la experiencia
- **Navegación intuitiva** con menús adaptados a cada dispositivo

### 🧠 Servicios Psicológicos

- **Psicoterapia Individual**: Espacio seguro para trabajo emocional
- **Capacitación Empresarial**: Talleres para equipos y organizaciones
- **Escuela para Padres**: Herramientas para crianza efectiva
- **Orientación Vocacional**: Guía para decisiones profesionales

### 💼 Paquetes de Servicios

- **Sesión Personalizada**: $60.000 COP (45-50 minutos)
- **Paquete Mensual**: $220.000 COP (4 sesiones)
- **Paquete Trimestral**: $550.000 COP (10 sesiones con 10% descuento)

### 🛠️ Tecnologías Utilizadas

| Tecnología      | Versión | Propósito               |
| --------------- | ------- | ----------------------- |
| React           | 19.1.0  | Framework principal     |
| Vite            | 7.0.0   | Build tool y dev server |
| Tailwind CSS    | 4.1.11  | Framework de estilos    |
| Material-UI     | 7.2.0   | Componentes de UI       |
| React Router    | 7.6.3   | Navegación              |
| EmailJS         | 4.4.1   | Formularios de contacto |
| React Hook Form | 7.60.0  | Manejo de formularios   |

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/SmallCakekoo/psicoweb
cd psicoweb
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
psicoweb/
├── public/
│   ├── data/                 # Datos JSON de servicios y paquetes
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/          # Imágenes y recursos visuales
│   ├── components/
│   │   ├── mobile/          # Componentes específicos para móvil
│   │   └── *.jsx           # Componentes principales
│   ├── utils/               # Utilidades y helpers
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Punto de entrada
├── package.json
└── README.md
```

## 🎯 Componentes Principales

### Desktop Components

- `Navbar.jsx` - Navegación principal
- `Hero.jsx` - Sección de bienvenida
- `SobreMi.jsx` - Información profesional
- `Trayectoria.jsx` - Experiencia y formación
- `Servicios.jsx` - Catálogo de servicios
- `Paquetes.jsx` - Opciones de paquetes
- `Contacto.jsx` - Formulario de contacto
- `Footer.jsx` - Pie de página

### Mobile Components

- `NavbarMobile.jsx` - Navegación móvil
- `HeroMobile.jsx` - Hero adaptado para móvil
- `TrayectoriaMobile.jsx` - Timeline móvil
- `ServiciosMobile.jsx` - Servicios en móvil
- `PaquetesMobile.jsx` - Paquetes en móvil
- `ContactoMobile.jsx` - Contacto móvil

## 🎨 Personalización

### Datos Dinámicos

Los servicios y paquetes se cargan dinámicamente desde archivos JSON:

- `public/data/servicios.json` - Configuración de servicios
- `public/data/paquetes.json` - Configuración de paquetes
- `public/data/timeline.json` - Información de trayectoria

### Estilos

El proyecto utiliza Tailwind CSS para estilos. Puedes personalizar:

- Colores en `tailwind.config.js`
- Estilos globales en `src/index.css`
- Componentes específicos en sus respectivos archivos

## 📱 Características Responsivas

### Breakpoints

- **Móvil**: < 768px (md:hidden)
- **Desktop**: ≥ 768px (hidden md:block)

### Optimizaciones

- **Imágenes adaptativas** para diferentes dispositivos
- **Navegación específica** para cada tamaño de pantalla
- **Contenido optimizado** para mejor legibilidad

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de producción
npm run preview

# Análisis del bundle
npm run build:analyze

# Linting
npm run lint
```

## 📧 Funcionalidades de Contacto

- **Formulario integrado** con EmailJS
- **Validación en tiempo real** con React Hook Form
- **Envío automático** de mensajes
- **Confirmación visual** para el usuario

## 🎯 SEO y Rendimiento

- **Meta tags** optimizados
- **Imágenes optimizadas** con formatos modernos
- **Lazy loading** para mejor rendimiento
- **Estructura semántica** HTML5

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **LinkedIn**: [https://www.linkedin.com/in/sary-fernanda-payan-bastidas-1a6242283/]

## 🙏 Agradecimientos

- **React Team** por el framework increíble
- **Vite** por la herramienta de build rápida
- **Tailwind CSS** por el framework de utilidades
- **Daisy-UI** por los componentes hermosos

---

<div align="center">
  <p>Hecho con cariño para la psicología</p>
  <p>⭐ Si te gusta este proyecto, dale una estrella!</p>
</div>
