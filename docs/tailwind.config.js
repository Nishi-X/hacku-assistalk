/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./shadowing.html","./test.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'back-pattern': "url('./img/NOX_Textures_402_2.jpg')",
      }),
      backgroundColor: theme => ({
      }),
    },
      
    },
  plugins: [
    
  ],
    variants: {
    transitionProperty: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  }
  
}
