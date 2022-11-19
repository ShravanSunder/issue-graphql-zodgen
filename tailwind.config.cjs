// @ts-check

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{ts,tsx,css}'],
  plugins: [
    require('daisyui'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
  ],
  daisyui: {
    // darkTheme: 'business',
    themes: ['light', 'dark', 'business', 'light', 'haloween'],
  },
};

module.exports = config;
