/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
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
