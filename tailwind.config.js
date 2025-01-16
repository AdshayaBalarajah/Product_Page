import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'dela-gothic': ['Dela Gothic One', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'] 
			},
			colors: {
				orange: '#ff5003'
			},
			fontWeight: {
				'lighter-bold': '500'
			},
			
			screens: {
				sm: '480px', // Small screens
				md: '768px', // Medium screens
				lg: '1024px', // Large screens
				xl: '1280px', // Extra large screens
				
			}
		}
	},
	plugins: [typography, forms, containerQueries]
};
