/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "color-primary": "#000048",
        "color-blob": "#A427DF",
        "color-secondary": "#01013d",
        "color-features": "#070952",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      }
    }
  },
  plugins: []
};