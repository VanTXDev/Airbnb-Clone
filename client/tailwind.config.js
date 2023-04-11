/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ff385c",
				secondary: "#717171",
				tertiary: "#000000",
				quaternary: "#000000",
				quinary: "#000000"
			}
		}
	},
	plugins: []
};
