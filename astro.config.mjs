// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://skyvisioncompany.com.br/',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => new URL(page).pathname !== '/busca/',
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
