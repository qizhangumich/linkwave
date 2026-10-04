import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Locale-ready: English ships at the root; add locales here when translated copy exists.
export default defineConfig({
  site: 'https://www.linkwave.sg',
  trailingSlash: 'always',
  integrations: [sitemap()],
  i18n: { defaultLocale: 'en', locales: ['en'] },
});
