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
        lightest: '#F5F5F5',
        lighter: '#D3D3D3',
        light: '#A9A9A9',
        dark: '#555555',
        darker: '#333333',
        darkest: '#1E1E1E',
      },
    },
  },
  plugins: [],
};
export default config;
