import { abortOnSynchronousPlatformIOAccess } from 'next/dist/server/app-render/dynamic-rendering';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			lightHover: '#fcf4ff',
  		},
  		fontFamily: {
  			Outfit: [
  				'Outfit',
  				'sans-serif'
  			],
  			Ovo: [
  				'Ovo',
  				'serif'
  			]
  		},
  		boxShadow: {
  			black: '4px 4px 0 #000',
  			white: '4px 4px 0 #fff'
  		},
  		gridTemplateColumns: {
  			auto: 'repeat(auto-fit, minmax(200px, 1fr))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
