/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'heading': ['40px', { lineHeight: '44px', letterSpacing: '0.023em' }],
        'body': ['20px', { lineHeight: '20px', letterSpacing: '-0.012em' }],
        'button': ['20px', { lineHeight: 'normal', letterSpacing: '0em' }],
      },
      colors: {
        brandGreen: '#106A64',
        brandBg: '#F1F6F6',
      },
      borderRadius: {
        sm5: '5px',
      },
      spacing: {
        35: '35px',
        12: '12px',
      },
    },
  },
};
