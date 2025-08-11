// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import critters from "astro-critters";
import compress from "astro-compress";

export default defineConfig({
  vite: { plugins: [tailwind()] },
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    critters(),
    compress({ HTML: true, CSS: true, JavaScript: true, SVG: true }),
  ],
});
