/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    colors: {
      /* Text: Heading, Body */
      'dark-navy': 'hsl(218, 44%, 22%)',
      'grey': 'hsl(220, 15%, 55%)',

      /* Background: Web, Card */
      'light-grey': 'hsl(212, 45%, 89%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    fontSize: {
      heading: '1.375rem',
      body: '0.938rem',
    },
    fontWeight: {
      heading: '700',
      body: '400',
    },
    letterSpacing: {
      body: '0.012rem', 
    },
    extend: {
      height: {
        body: '3.563rem',
        qr__component: '31.063rem',
        qr__component__info: '8.063rem',
      },
      borderRadius: {
        qr__component: '1.25rem',
        qr__component__img: '0.625rem',
      },
      padding: {
        qr__component: '1rem 1rem 2.5rem',
      },
      boxShadow: {
        qr__component: '0rem 1.563rem 1.563rem 0rem #0000000c',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

