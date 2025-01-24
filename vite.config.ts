import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import VitePluginWebpAndPath from "vite-plugin-webp-and-path";

export default defineConfig(() => {
  return {
    plugins: [
      VitePluginWebpAndPath({
        textExtensions: "html,css,js,jsx,ts,tsx,json",
      }),
      react(),
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
    },
  };
});
