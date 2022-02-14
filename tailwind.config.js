module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

	theme: {
		extend: {
			colors: {
				'main-500': '#706CF6'
			}
		},
		screens: {
			'ms': { 'min': '0px', 'max': '470px' },
			'sm': { 'min': '470px', 'max': '3000px' },

			'ms-md' : { 'min': '470px', 'max': '640px' },

			'dm': { 'min': '0px', 'max': '640px' },
			'md': { 'min': '640px', 'max': '3000px' },

			'gl': { 'min': '0px', 'max': '1138px  ' },
			'lg': { 'min': '1138px  ', 'max': '3000px' },
		},
	},

	variants: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/img/hero-pattern.svg')",
				'footer-texture': "url('/img/gradient.png')",
			}
		},
	},

	plugins: [],

};