/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["content/**/*.md", "layouts/**/*.html"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};
