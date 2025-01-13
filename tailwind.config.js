import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'dela-gothic': ['Dela Gothic One', 'sans-serif']
			},
			colors: {
				orange: '#ff5003'
			},
			fontWeight: {
				'lighter-bold': '500',
			}
		}
	},
	plugins: [typography, forms, containerQueries]
};
