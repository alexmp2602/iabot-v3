/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  safelist: [
    "dark:text-neutral-100",
    "dark:text-neutral-200",
    "dark:text-neutral-300",
    "text-neutral-800",
    "text-neutral-900",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          '"Bruno Ace"',
          '"Bruno Ace Fallback"',
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
