/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
    darkMode: false,
    "content": {
        "files": [
            // all directories and extensions will correspond to your Nuxt config
            "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "{srcDir}/app/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "{srcDir}/plugins/**/*.{js,ts,mjs}",
            "{srcDir}/composables/**/*.{js,ts,mjs}",
            "{srcDir}/utils/**/*.{js,ts,mjs}",
            "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
            "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
            "{srcDir}/app.config.{js,ts,mjs}",
            "{srcDir}/app/spa-loading-template.html"
        ]
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', 'sans-serif'], // default text
                inter: ['Inter', 'sans-serif'],  // for titles
            },
            colors: {
                'primary': '#54B16B',
                'secondary': '#001011',
                'theme-third': '#97C8EB',
                'theme-fourth': '#093A3E',
                'theme-light': '#dde6f1',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

