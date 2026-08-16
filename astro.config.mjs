import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://expressboda.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'ru', 'uk'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [sitemap()]
});
