import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Fallback HTML file for unknown routes (optional)
			fallback: null, // or 'index.html' if using SPA fallback

			// Optional Cloudflare Pages platform config
			platformProxy: {
				configPath: undefined,
				environment: undefined,
				persist: undefined
			},

			routes: {
				include: ['/*'],
				exclude: []
			}
		}),
		alias: {
			$src: path.resolve('./src'),
			$utils: path.resolve('./src/utils'),
			$views: path.resolve('./src/views'),
			$data: path.resolve('./src/data'),
			$lib: path.resolve('./src/lib'),
			$ui: path.resolve('./src/components/ui'),
			$svgs: path.resolve('./src/components/svgs'),
			$display: path.resolve('./src/components/display'),
			$misc: path.resolve('./src/components/misc')
		}
	},
	preprocess: vitePreprocess()
};

export default config;
