import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-06-18",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
