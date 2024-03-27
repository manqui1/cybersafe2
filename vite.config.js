// vite.config.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/components/Pages"),
      "@default": path.resolve(__dirname, "./src/components/Default"),
    },
  },
  assetsInclude: ["**/*.PNG"],
});
