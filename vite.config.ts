import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig ({
	plugins: [
	  sveltekit(),
	  viteCompression({
		algorithm: 'brotliCompress', // Usa Brotli para compressão
		ext: '.br',                 // Extensão para arquivos Brotli
		threshold: 512,            // Tamanho mínimo do arquivo para compressão
	  }),
	  viteCompression({
		algorithm: 'gzip',          // Habilita Gzip
		ext: '.gz',                 // Extensão para arquivos Gzip
		threshold: 512,
	  })
	]
  });