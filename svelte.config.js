import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({ pages: "build", assets: "build", fallback: "index.html", precompress: false, strict: true }),
		prerender: {
			crawl: true, // optional: ensures all links are discovered during prerendering
			entries: ["*"], // prerender all routes
		},
		paths: {
			base: process.env.NODE_ENV === "production" ? "/thisisthejay.github.io" : "",
		},
	},
	preprocess: vitePreprocess(),
};

export default config;
