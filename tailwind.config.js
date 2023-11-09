// tailwind.config.js
module.exports = {
  // ...
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      textColor: ['responsive', 'hover', 'focus', 'active'],
      // variantes
    },
  },
  // ...
}
