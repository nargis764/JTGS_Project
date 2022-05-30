module.exports = {
purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 darkMode: false, // or 'media' or 'class'
theme: {
  extend: {
    fontFamily: {
                sans: ['Alice', 'sans-serif'],
            },
  },
},
variants: {

  extend: {
    display: ['group-hover', 'hover', 'group-focus'],
    backgroundColor: [ 'hover','group-hover', 'group-focus', 'responsive', 'active', 'focus', 'focus-within'],
  },
},

plugins: [
    require('@tailwindcss/aspect-ratio')
    
  ],
};
