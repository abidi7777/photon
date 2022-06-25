/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    svelte(),
  ],
});
