import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    AutoImport({
      dts: true,
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./"),
    },
  },
  define: {
    "process.env": {},
  },
});
