import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lighter: '#554D56',
        light: '#F7F7F7',
        dark: '#C1BEC1',
        darker: '#979197',
        darkest: '#554D56',
      },
    },
  },
  plugins: [],
};
export default config;
