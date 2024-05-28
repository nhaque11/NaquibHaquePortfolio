import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://nhaque11.github.io/NaquibHaquePortfolio/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
