/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	redirects() {
		return [
			{
				source: '/blog',
				destination: '/',
				permanent: true,
			},
			{
				source: '/blog/',
				destination: '/',
				permanent: true,
			},
		];
	},
};
