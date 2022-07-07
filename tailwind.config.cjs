const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const opentype = require('tailwindcss-opentype');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans]
            }
        }
	},

	plugins: [typography, daisyui, opentype],

	daisyui: {
		themes: [
			{
				corporate: {
					...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
					"primary-content": "rgb(242, 245, 255)",
					"secondary-content": "rgb(0, 16, 38)",
                },
            },
        ],
    }
};

module.exports = config;
