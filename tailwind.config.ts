/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    theme: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
    extend: {
      colors: {
        'light-grey': '#CBD5E1',
        'light-green': '#2AF1B5',
        'light-black': '#04171F',
        'modified-grey': '#B3B9BB'
      }
    },
  },
  plugins: [ ],
}
