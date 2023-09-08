/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'primary': '#DBF7FA',
				'primaryDark': '#AEECF4',
				'secondary': '#FADFDB'
			},
		},
	},
	plugins: [],
};

