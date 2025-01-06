/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        error: "var(--error)",
        accent: "var(--accent-color)",
        warning: "var(--warning-color)",
        background: "var(--background-color)",
        border: "var(--border)",
        accentOrange: "var(--accent-orange)",
        textColor: "var(--text-color)",
        accentLink: "var(--accent-link)",
        accentHover: "var(--accent-hover)",

        accentGray: "var(--accent-gray)",
      },
    },
  },

  plugins: [],
};
