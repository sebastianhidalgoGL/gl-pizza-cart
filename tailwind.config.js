module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rowdies: ["Rowdies"],
        RedHat: ["Red Hat Display"],
      },
      boxShadow: {
        'lg': '0 4px 8px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
