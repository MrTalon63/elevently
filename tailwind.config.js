/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,md,njk}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			backgroundImage: {
				top: "url('https://placehold.co/1920x400')",
			},
		},
	},
	daisyui: {
		themes: ["light"],
	},
	plugins: [require("daisyui"), require("flowbite/plugin")],
};
