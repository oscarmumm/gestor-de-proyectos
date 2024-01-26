import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "Gestor de Proyectos",
                short_name: "Gestor de Proyectos",
                start_url: ".",
                display: "standalone",
                background_color: "#24293e",
                description: "Una app para gestionar proyectos",
                icons: [
                  {
                    src: "projects-app-icon-64x64.png",
                    sizes: "64x64",
                    type: "image/png"
                  },
                  {
                    src: "projects-app-icon-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                    purpose: "any"
                  },
                  {
                    src: "projects-app-icon-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "maskable"
                  },
                ]
            },
        }),
    ],
});
