/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
	kit: {
		apadter: adapter(),
		target: '#svelte'
	}
};

export default config;
