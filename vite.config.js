import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    headers: {
      // Remover cabeceras problemáticas si existen
      "Permissions-Policy": "",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          mui: ["@mui/material", "@mui/icons-material"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Análisis de bundle
    ...(mode === "analyze" && {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    }),
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
}));
