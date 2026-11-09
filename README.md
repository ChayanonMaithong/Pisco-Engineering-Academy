# Engineering Academy

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
├── foundations/   ชั้น 1 · พื้นฐานร่วม
├── disciplines/   ชั้น 2 · หลักสูตรภาควิชา
├── industry/      ชั้น 3 · งานจริง (wind/, drilling/)
└── en/            ฉบับภาษาอังกฤษ (หน้าที่ยังไม่แปลจะแสดงภาษาไทย)
src/components/    เครื่องคำนวณแบบโต้ตอบ
```

- เพิ่มบทเรียน: คัดลอก `guides/lesson-template.md` ไปไว้ในโฟลเดอร์ที่ต้องการ เมนูด้านข้างจะอัปเดตเอง
- สมการ: เขียนด้วย LaTeX `$...$` / `$$...$$`
- ใช้ component: ตั้งชื่อไฟล์เป็น `.mdx`

## Deploy ขึ้น GitHub Pages

1. สร้าง repo แล้ว push ขึ้น branch `main`
2. ไปที่ Settings → Pages → Source: **GitHub Actions**
3. ใน `astro.config.mjs` เพิ่ม `site: 'https://<user>.github.io'` และ `base: '/<repo-name>'`
   (หากใช้ `base` ต้องปรับลิงก์ภายในให้มี prefix ด้วย หรือใช้ custom domain / Cloudflare Pages แทน)
