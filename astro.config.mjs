// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
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
      customCss: ['katex/dist/katex.min.css', './src/styles/custom.css'],
      sidebar: [
        { label: 'เริ่มต้นที่นี่', translations: { en: 'Start here' }, items: [{ autogenerate: { directory: 'guides' } }] },
        {
          label: 'ชั้น 1 · Foundations',
          translations: { en: 'Tier 1 · Foundations' },
          items: [{ autogenerate: { directory: 'foundations' } }],
        },
        {
          label: 'ชั้น 2 · Disciplines',
          translations: { en: 'Tier 2 · Disciplines' },
          items: [{ autogenerate: { directory: 'disciplines' } }],
        },
        {
          label: 'ชั้น 3 · Industry Practice',
          translations: { en: 'Tier 3 · Industry Practice' },
          items: [
            { label: 'Wind Energy', items: [{ autogenerate: { directory: 'industry/wind' } }] },
            { label: 'Solar Energy', items: [{ autogenerate: { directory: 'industry/solar' } }] },
            { label: 'Thermal Power (Gas / Steam)', items: [{ autogenerate: { directory: 'industry/thermal' } }] },
            { label: 'Drilling', items: [{ autogenerate: { directory: 'industry/drilling' } }] },
          ],
        },
      ],
    }),
  ],
});
