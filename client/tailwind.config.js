/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ff385c",
				secondary: "#717171",
				tertiary: "#bd1e59",
				quaternary: "#000000",
				quinary: "#000000"
			}
		}
	},
	plugins: []
};
