import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/', // Replace 'teamrenew' with your repository name if different
  plugins: [svelte()],
  // build: {
  //   outDir: 'dist'
  // }
});