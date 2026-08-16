import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://expressboda.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'ru', 'uk']
  }
});
