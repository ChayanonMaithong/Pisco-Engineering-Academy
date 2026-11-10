# Pisco Engineering Academy

เว็บไซต์สื่อการเรียนการสอนวิศวกรรม สร้างด้วย [Astro Starlight](https://starlight.astro.build)

## เริ่มใช้งาน

```bash
npm install
npm run dev      # เปิด http://localhost:4321
npm run build    # สร้างเว็บไว้ที่ dist/
```

## โครงสร้างเนื้อหา

```
src/content/docs/
├── guides/        เริ่มต้นที่นี่ + แม่แบบบทเรียน
├── foundations/
│   ├── high-school/   ชั้น 1 · ม.4–ม.6 (คณิต ฟิสิกส์ เคมี ชีวะ)
│   └── university/    ชั้น 1 · ภาควิชา (electrical, civil, mechanical, petroleum, chemical, industrial)
├── industry/      ชั้น 2 · งานจริง (wind/, solar/, thermal/, drilling/)
└── en/            ฉบับภาษาอังกฤษ (หน้าที่ยังไม่แปลจะแสดงภาษาไทย)
src/components/    เครื่องคำนวณแบบโต้ตอบ
```

- เพิ่มบทเรียน: คัดลอก `guides/lesson-template.md` ไปไว้ในโฟลเดอร์ที่ต้องการ เมนูด้านข้างจะอัปเดตเอง
- สมการ: เขียนด้วย LaTeX `$...$` / `$$...$$`
- ใช้ component: ตั้งชื่อไฟล์เป็น `.mdx`

## Deploy ขึ้น GitHub Pages

เว็บตั้งค่าไว้สำหรับ https://chayanonmaithong.github.io/Pisco-Engineering-Academy/ แล้ว

1. Push ขึ้น branch `main`
2. ไปที่ **Settings → Pages → Build and deployment → Source** แล้วเลือก **GitHub Actions**
3. ทุกครั้งที่ push เข้า `main` เว็บจะ build และ deploy ให้อัตโนมัติ (`.github/workflows/deploy.yml`)

**ลิงก์ภายใน:** ในเนื้อหา Markdown ให้เขียนแบบ `/industry/wind/...` ได้ตามปกติ ปลั๊กอิน `src/plugins/rehype-base-links.mjs` จะเติม `/Pisco-Engineering-Academy` ให้เอง ยกเว้นลิงก์ใน frontmatter (เช่น ปุ่ม hero) ที่ต้องเขียน prefix เอง

ถ้าย้ายไปใช้โดเมนของตัวเองหรือ Cloudflare Pages ให้แก้ `site` และลบ `base` ใน `astro.config.mjs` แล้วลบ prefix ออกจากลิงก์ hero
