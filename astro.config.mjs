import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
    }),
  ],
  output: 'static', // Static Site Generation (SSG) de alta performance
});
