/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'footer-bg': '#DAECF2',
        'menu-color': '#5796A4',
      }
		},
	},
	plugins: [],
}
