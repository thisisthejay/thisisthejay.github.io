import { defineMDSveXConfig as defineConfig } from "mdsvex";
import path from "node:path";
import { fileURLToPath } from "node:url";

// const dirname = path.dirname(fileURLToPath(import.meta.url), "../");

const config = defineConfig({
	extensions: [".md", ".svx"],
	layout: {
		// legal: path.join(dirname, "src/lib/legalLayout.svelte"),
	},
});

export default config;
