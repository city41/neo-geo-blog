module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			cursor: {
				crosshair: 'crosshair',
			},
			colors: {
				franic: {
					fade: 'var(--color-franic-fade)',
					DEFAULT: 'var(--color-franic)',
					deep: 'var(--color-franic-deep)',
				},
				neobook: {
					fade: 'var(--color-neobook-fade)',
					DEFAULT: 'var(--color-neobook)',
					deep: 'var(--color-neobook-deep)',
				},
				neotools: {
					fade: 'var(--color-neotools-fade)',
					DEFAULT: 'var(--color-neotools)',
					deep: 'var(--color-neotools-deep)',
				},
			},
		},
	},
	variants: {
		extend: {
			display: ['group-hover'],
			scale: ['group-hover'],
			borderWidth: ['last'],
		},
	},
	plugins: [],
};
