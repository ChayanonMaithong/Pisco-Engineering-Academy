---
title: Industrial Engineering (วิศวกรรมอุตสาหการ)
description: ภาพรวมหลักสูตรและเส้นทางสู่งานบริหารการผลิต คุณภาพ ความน่าเชื่อถือ และการบำรุงรักษา
sidebar:
  label: ภาพรวมหลักสูตร
  order: 0
---

## ภาพรวมหลักสูตร (ตัวอย่างโครงสร้างทั่วไป)

| ปี | กลุ่มวิชาหลัก |
|---|---|
| 1 | Calculus, Physics, Chemistry, Engineering Drawing, Workshop, Programming |
| 2 | **Probability & Statistics**, Engineering Materials, Manufacturing Processes, Strength of Materials, Engineering Economy |
| 3 | **Operations Research**, **Production Planning & Control**, **Quality Control**, Work Study & **Ergonomics**, Plant Layout |
| 4 | **Maintenance Engineering / Reliability**, Safety Engineering, Supply Chain & Logistics, Simulation, Project |

:::caution
โครงสร้างข้างต้นเป็นตัวอย่างทั่วไป รายวิชาจริงต่างกันไปในแต่ละมหาวิทยาลัย ควรเทียบกับ มคอ. ของหลักสูตรที่ต้องการ
:::

## ความรู้ ม.ปลาย ที่ใช้มากที่สุด
- [คณิตศาสตร์](/foundations/high-school/math/): **สถิติ, ความน่าจะเป็น, การแจกแจงปกติ**, เมทริกซ์, ลำดับและอนุกรม (ดอกเบี้ย)
- [ชีววิทยา](/foundations/high-school/biology/): ระบบประสาทและกล้ามเนื้อสำหรับการยศาสตร์

## แนวคิดสำคัญ

**Reliability:** ถ้าอุปกรณ์เสียแบบสุ่มด้วยอัตราคงที่ $\lambda$ (ช่วงอายุกลางของ bathtub curve)

$$
R(t) = e^{-\lambda t}, \qquad MTBF = \frac{1}{\lambda}
$$

ถ้าระบบมีอุปกรณ์ต่ออนุกรมกัน ทุกตัวต้องทำงาน ระบบจึงทำงานได้: $R_{sys} = R_1 R_2 \cdots R_n$ ส่วนการต่อขนาน (มีตัวสำรอง) ช่วยเพิ่มความน่าเชื่อถือ: $R_{sys} = 1 - (1 - R_1)(1 - R_2)$

**Engineering Economy:** มูลค่าปัจจุบันสุทธิของโครงการ

$$
NPV = \sum_{t=0}^{n} \frac{CF_t}{(1 + i)^t}
$$

ใช้ตัดสินใจลงทุนในโครงการพลังงาน และเปรียบเทียบต้นทุนผลิตไฟฟ้าเฉลี่ยตลอดอายุ (LCOE)

## เส้นทางสู่งานจริง

```
Statistics / QC ─────────┬─► Performance monitoring, P50/P90, วิเคราะห์ข้อมูล SCADA
Reliability Engineering ─┼─► วางแผนบำรุงรักษา (Wind / Solar / Thermal O&M)
Maintenance Management ──┘   อะไหล่สำรอง, MTBF/MTTR, Availability
Operations Research ─────┬─► จัดตารางเครนและเรือติดตั้ง, เส้นทางขนส่ง, ตารางเดินเครื่องโรงไฟฟ้า
Engineering Economy ─────┴─► วิเคราะห์ความคุ้มค่าโครงการ, NPV, LCOE
Safety & Ergonomics ───────► ระบบความปลอดภัยในงานก่อสร้าง งานบนที่สูง งานเจาะ
```

## ตัวอย่างงานของวิศวกรอุตสาหการในอุตสาหกรรมพลังงาน
- **Asset management / Reliability engineer:** วิเคราะห์ข้อมูลความเสียหาย (FMEA, RCA, Weibull analysis ของอายุชิ้นส่วน) กำหนดกลยุทธ์บำรุงรักษา
- **Planning & Scheduling:** วางแผนงานหยุดซ่อมใหญ่ของ[โรงไฟฟ้า](/industry/thermal/thermal-plant-om/) และ[การเปลี่ยนชิ้นส่วนหลักของกังหันลม](/industry/wind/wind-farm-om/)
- **Supply chain:** จัดการอะไหล่และการขนส่งชิ้นส่วนขนาดใหญ่
- **Safety:** ระบบ Permit-to-Work, การวิเคราะห์ความเสี่ยง, ISO 45001

ลิงก์: [Wind Farm O&M](/industry/wind/wind-farm-om/) · [Solar PV O&M](/industry/solar/solar-pv-om/) · [Thermal Plant O&M](/industry/thermal/thermal-plant-om/)
