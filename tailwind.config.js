/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                darkgray: '#70757a',
                gray95: '#f2f2f2;',
                lightgray: '#dadce0;',
                cyanblue: '#f8f9fa;',
                arsenic: '#3c4043',
                darkblue: '#1a0dab;',
                lightblue: '#4285f4'


            },
            fontFamily: {
                arial: ['Arial', 'sans-serif']
            },
            boxShadow: {
                searchshadow: "0 1px 6px rgb(32 33 36 / 28%)"
            },
            fontSize: {
                small: '13px',
                medium: '15px',
                default: '14px',
                extrasmall: '12px'

            }



        },
    },
    plugins: [],
}