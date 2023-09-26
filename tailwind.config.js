/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGrey: '#1e1e2d',
        mainBlue: '#009ef7'
      }
    },
  },
  plugins: [],
  corePlugins: {
    scrollbar: false,
  },
}

