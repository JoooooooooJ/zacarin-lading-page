/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'zacarin-beige': '#F1E2E0',      // fundo claro
                'zacarin-lavender': '#6D6173',   // texto, icons (tema escuro)
                'zacarin-plum': '#6D6173',       // fundo escuro
                'zacarin-mauve': '#F1E2E0',      // texto claro no fundo escuro
            },
            fontFamily: {
                'display': ['"Merriweather"', 'serif'],
                'heading': ['"Montserrat"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}