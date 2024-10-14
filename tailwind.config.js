// tailwind.config.js
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
		"./index.html",
	],
	theme: {
    extend: {
      fontFamily: {
        Kiwi: ['"Kiwi Maru"', 'sans-serif'],
        Kod: ['"Kodchasan"', 'sans-serif'],
        Itim: ['"Itim"', 'sans-serif'],
        Koho: ['"KoHo"', 'sans-serif'],
      },
      textGradient: {
        'gradient': 'linear-gradient(90deg, #089EEE 6%, #00FFD4 32%, #737BD1 96%)',
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(to right, #9333ea, #ec4899, #ef4444)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(90deg, #089EEE 6%, #00FFD4 32%, #737BD1 96%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
        },
        '.neon-shadow': {
          filter: 'drop-shadow(1px 1px 8px #00FFFF)',
        }
      });
    },
  ],
};
