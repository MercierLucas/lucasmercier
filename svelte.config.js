import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import toc from '@jsdevtools/rehype-toc';

import path from 'path';


/** @type {import('@sveltejs/kit').Config} */

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: path.resolve('src/lib/mdsvex.svelte')
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug, toc]
}


const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mdsvex(mdsvexOptions)
	],

	extensions: ['.svelte', '.md'],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
