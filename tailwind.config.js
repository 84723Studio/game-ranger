/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {backgroundImage: {
      'card-sec-pattern': "url('/img/bridge.jpg')",
    }
},
  },
  plugins: [require("daisyui")],
}
