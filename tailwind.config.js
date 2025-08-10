/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        // Colores principales con escala más lógica
        primary: {
          light: "#F9F4FE", // 50 -> light (fondo claro)
          DEFAULT: "#A569E5", // 100 -> DEFAULT (morado principal)
          dark: "#55408B", // 200 -> dark (morado oscuro)
          darkest: "#11051d", // 900 -> darkest (fondo oscuro)
        },
        // Colores secundarios con nombres descriptivos
        secondary: {
          purple: "#D88ADE", // Lila
          yellow: "#FFC446", // Amarillo
          pink: "#E56990", // Rosa
          teal: "#05C5C8", // Turquesa
        },
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        large:
          "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [import("daisyui")],
  // Optimización para producción
  future: {
    hoverOnlyWhenSupported: true,
  },
  daisyui: {
    themes: [
      {
        psicoweb: {
          // PRIMARIOS (90% de la interfaz)
          primary: "#A569E5", // Color principal
          "primary-content": "#F9F4FE", // Texto sobre primary

          secondary: "#55408B", // Secundario (variante oscura del primary)
          "secondary-content": "#F9F4FE", // Texto sobre secondary

          accent: "#05C5C8", // Turquesa (para acciones importantes)
          "accent-content": "#11051d", // Texto sobre accent

          neutral: "#11051d", // Fondo oscuro
          "neutral-content": "#F9F4FE", // Texto sobre neutral

          "base-100": "#F9F4FE", // Fondo principal claro
          "base-200": "#E6D6FA", // Fondo variante (hover states)
          "base-300": "#D3B8F5", // Fondo más oscuro
          "base-content": "#11051d", // Texto principal

          // SECUNDARIOS (10% - para elementos puntuales)
          info: "#05C5C8", // Turquesa (igual que accent)
          "info-content": "#11051d",

          success: "#A569E5", // Usamos primary para success
          "success-content": "#F9F4FE",

          warning: "#FFC446", // Amarillo
          "warning-content": "#11051d",

          error: "#E56990", // Rosa (para errores)
          "error-content": "#F9F4FE",

          // Estados interactivos
          hover: "#D88ADE", // Lila para hovers
          focus: "#55408B", // Morado oscuro para focus

          // Personalización extra
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--animation-btn": "0.25s",
        },
      },
    ],
    darkTheme: "psicoweb",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
