import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://expressboda-website-six.vercel.app',
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'ru', 'uk']
  }
});
