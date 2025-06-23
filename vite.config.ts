// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const scriptId =
  "AKfycbwZ3lUzOAtsBEC_xhaCEvkDIUrbnOh9iv7ILMxCDXMH3RCd0TcsFYTk7jD8dwiJkfyqcg";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://script.google.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, `/macros/s/${scriptId}/exec`),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
