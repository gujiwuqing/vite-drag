import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
      "@/components": resolve(__dirname, "./src/components"),
    },
  },
  server: {
    port: 9999,
    open: true,
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    reportCompressedSize: false,
    sourcemap: false,
  },
});
