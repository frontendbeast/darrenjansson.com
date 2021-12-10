/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-netlify';
import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer]
		}
	}),
	kit: {
		adapter: adapter(),
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*'],
		},
	},
};

export default config;
