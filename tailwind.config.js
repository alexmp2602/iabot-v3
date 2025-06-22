/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}", // Asegura que escanee todo lo necesario
  ],
  darkMode: "class", // ⚠️ Usa 'class' para tener control (html.classList.add('dark'))
  theme: {
    extend: {
      fontFamily: {
        title: ['"Bruno Ace"', "cursive"],
        body: ['"Inter"', "sans-serif"], // reemplazo de Avenir
      },
      colors: {
        primary: "#32CDDB",
        secondary: "#78EB2C",
      },
    },
  },
  plugins: [],
};
