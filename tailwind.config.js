/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'def-button': '0 5px 0px #ba4302',
        'clicked-button': '0 0px 0 #ba4302',
        'hamburger': '0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
      },
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
        "section-grey": "rgba(242, 244, 247, 1);",
        "hamburger-list": "rgba(29, 41, 57, 1)",
        "border-grey": "rgba(208, 213, 221, 1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};