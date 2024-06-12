/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        shimmer: {
          '100%' : {transform: 'translateX(100%)'}
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        "header-grey": "#475467",
        "service-card-orange": "#F54700",
        "service-card-cont": "rgba(249, 250, 251, 1)",
        "service-card-hover-orange": "#bf3b06",
        "profile-icon": "12px",
        "page-subtitle": "rgba(71, 84, 103, 1)",
        "section-grey": "rgba(242, 244, 247, 1);"
      },
    },
  },
  plugins: [],
  darkMode: "class",
};