import { defineConfig } from "@farmfe/core";
import farmJsPluginPostcss from "@farmfe/js-plugin-postcss";
import farmJsPluginPostcssTw from "@farmfe/js-plugin-tailwindcss";
import path from "node:path";

export default defineConfig({
	compilation: {
		resolve: {
			alias: {
				"@/": path.join(process.cwd(), "src"),
			},
		},
	},
	plugins: [
		"@farmfe/plugin-react",
		farmJsPluginPostcssTw(),
		farmJsPluginPostcss(),
	],
});
