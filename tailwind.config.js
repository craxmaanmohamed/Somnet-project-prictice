/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin:{
        'mens-mt':" -300;"

      },
      fontSize:{
        '150':'60px'

      },
      borderRadius:{

        '200r':'200px'
      },
      height: {
        "10v": "10vh",
        "15v": "15vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "88v": "88vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      colors: {
        'pr-color': 'rgb(43, 171, 218)',
        'spr-color':'rgb(22, 71, 86)', 
        'gold-color':'#ffd700',
        'another-color': 'rgb(12, 159, 100)', // Another example
      },
      backgroundImage: {
        "contactbgimg":" linear-gradient(  #000000ac,#2babda75),url(/images/img3.jpg)",
        "backroundimg":" linear-gradient(  #000000ac,#2babda75),url(/images/HomeB.jpg)",
      },
    },
  },
  plugins: [],
};
