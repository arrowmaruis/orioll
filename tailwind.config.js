/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    'node_modules/preline/dist/*.js',
  ],

  theme: {
    extend: {
      fontFamily: {
        custom: ['roboto', 'roboto'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),

  ],
}

