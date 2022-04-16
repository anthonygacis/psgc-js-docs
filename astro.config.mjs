import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [tailwind()],
	site: 'https://anthonygacis.github.io/',
	base: "/psgc-js-docs"
});
