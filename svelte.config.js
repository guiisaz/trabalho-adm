import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/trabalho-adm',
    },
  },
  preprocess: vitePreprocess()
};