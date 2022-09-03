import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000/',
  integrations: [mdx(), sitemap(), vue()],
  output: 'server',
  adapter: vercel(),
  syntaxHighlight: 'prism',
  trailingSlash: "ignore"
});