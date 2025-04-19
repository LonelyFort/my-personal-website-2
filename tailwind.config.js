/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
      ],
    theme: {
        extend: {
            fontFamily: {
                ibm: ['var(--font-ibm-plex-mono)'],
                crimson: ['var(--font-crimson-text)'],
            },
        },
    },
};