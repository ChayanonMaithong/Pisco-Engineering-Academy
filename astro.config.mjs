// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeBaseLinks from './src/plugins/rehype-base-links.mjs';
import rehypeLesson from './src/plugins/rehype-lesson.mjs';

// GitHub Pages project site: https://chayanonmaithong.github.io/Pisco-Engineering-Academy/
const site = 'https://chayanonmaithong.github.io';
const base = '/Pisco-Engineering-Academy';

export default defineConfig({
  site,
  base,
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeLesson, [rehypeBaseLinks, { base }]],
  },
  integrations: [
    starlight({
      title: 'Pisco Engineering Academy',
      description: 'สื่อการเรียนการสอนวิศวกรรม ตั้งแต่พื้นฐาน ภาควิชา จนถึงงานจริงในอุตสาหกรรม',
      defaultLocale: 'root',
      locales: {
        root: { label: 'ไทย', lang: 'th' },
        en: { label: 'English', lang: 'en' },
      },
      logo: { src: './src/assets/logo.svg' },
      editLink: { baseUrl: 'https://github.com/ChayanonMaithong/Pisco-Engineering-Academy/edit/main/' },
      customCss: [
        '@fontsource/ibm-plex-sans-thai-looped/400.css',
        '@fontsource/ibm-plex-sans-thai-looped/500.css',
        '@fontsource/ibm-plex-sans-thai-looped/600.css',
        '@fontsource/ibm-plex-sans-thai/600.css',
        '@fontsource/ibm-plex-sans-thai/700.css',
        '@fontsource/ibm-plex-mono/400.css',
        'katex/dist/katex.min.css',
        './src/styles/custom.css',
      ],
      // The real sidebar is built per page in src/routeData.ts from src/data/courses.mjs.
      routeMiddleware: './src/routeData.ts',
      components: {
        PageTitle: './src/components/overrides/PageTitle.astro',
        Pagination: './src/components/overrides/Pagination.astro',
      },
      sidebar: [{ label: 'เริ่มต้นที่นี่', items: [{ autogenerate: { directory: 'guides' } }] }],
    }),
  ],
});
