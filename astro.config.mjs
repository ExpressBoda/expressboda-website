import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://expressboda-website-six.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'ru', 'uk']
  }
});
