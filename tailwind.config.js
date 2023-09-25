/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-outfit)'],
    },
    extend: {
      minHeight: {
        screen: ['100vh', '100svh'],
      },
    },
  },
}
