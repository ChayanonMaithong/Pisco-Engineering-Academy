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
      sidebar: [
        { label: 'เริ่มต้นที่นี่', translations: { en: 'Start here' }, items: [{ autogenerate: { directory: 'guides' } }] },
        {
          label: 'ชั้น 1 · Foundations',
          translations: { en: 'Tier 1 · Foundations' },
          items: [
            {
              label: 'มัธยมปลาย (ม.4–ม.6)',
              translations: { en: 'High School (Grades 10–12)' },
              items: [{ autogenerate: { directory: 'foundations/high-school' } }],
            },
            {
              label: 'มหาวิทยาลัย (ภาควิชา)',
              translations: { en: 'University (Departments)' },
              items: [
                {
                  label: 'วิศวกรรมไฟฟ้า',
                  translations: { en: 'Electrical Engineering' },
                  collapsed: true,
                  items: [{ autogenerate: { directory: 'foundations/university/electrical' } }],
                },
                {
                  label: 'วิศวกรรมโยธา',
                  translations: { en: 'Civil Engineering' },
                  collapsed: true,
                  items: [{ autogenerate: { directory: 'foundations/university/civil' } }],
                },
                {
                  label: 'วิศวกรรมเครื่องกล',
                  translations: { en: 'Mechanical Engineering' },
                  collapsed: true,
                  items: [{ autogenerate: { directory: 'foundations/university/mechanical' } }],
                },
                {
                  label: 'วิศวกรรมปิโตรเลียม',
                  translations: { en: 'Petroleum Engineering' },
                  collapsed: true,
                  items: [{ autogenerate: { directory: 'foundations/university/petroleum' } }],
                },
                {
                  label: 'วิศวกรรมเคมี',
                  translations: { en: 'Chemical Engineering' },
                  collapsed: true,
                  items: [{ autogenerate: { directory: 'foundations/university/chemical' } }],
                },
                {
                  label: 'วิศวกรรมอุตสาหการ',
                  translations: { en: 'Industrial Engineering' },
                  collapsed: true,
                  items: [{ autogenerate: { directory: 'foundations/university/industrial' } }],
                },
              ],
            },
          ],
        },
        {
          label: 'ชั้น 2 · Industry Practice',
          translations: { en: 'Tier 2 · Industry Practice' },
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
