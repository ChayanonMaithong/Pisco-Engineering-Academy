---
title: Wind Farm Operation & Maintenance
description: การเดินเครื่องและบำรุงรักษาฟาร์มกังหันลม
sidebar:
  order: 6
---

**ระดับ:** Intermediate
**ความรู้ที่ต้องมีก่อน:** [Wind Turbine Technology](/industry/wind/wind-turbine-technology/) · [Wind Farm Development](/industry/wind/wind-farm-development/) · [Mechanical Engineering](/foundations/university/mechanical/) (Vibration) · [Electrical Engineering](/foundations/university/electrical/)

## วัตถุประสงค์การเรียนรู้
- แยกความต่างของ Corrective, Preventive และ Predictive maintenance
- คำนวณ Availability, MTBF และ MTTR
- อธิบายบทบาทของ SCADA และ Condition Monitoring System (CMS)

## ประเภทการบำรุงรักษา

| ประเภท | หลักการ | ตัวอย่าง |
|---|---|---|
| Corrective | ซ่อมเมื่อเสีย | เปลี่ยน converter ที่เสีย |
| Preventive | ทำตามรอบเวลา | ตรวจขันน็อต เปลี่ยนน้ำมันเกียร์ทุก 6–12 เดือน |
| Predictive / Condition-based | ทำเมื่อข้อมูลบอกว่าใกล้เสีย | วิเคราะห์การสั่นสะเทือนของ bearing, oil particle count |

## ระบบหลักที่ต้องดูแล
- **Rotor & Blades** — การกัดกร่อนขอบนำ (leading edge erosion), ฟ้าผ่า; ตรวจด้วยโดรนหรือ rope access
- **Drivetrain** — main bearing, gearbox, generator; เป็นจุดที่ซ่อมแพงที่สุดเพราะมักต้องใช้เครนใหญ่
- **Pitch & Yaw systems**
- **Electrical** — converter, transformer, สายเคเบิล
- **Tower & Foundation** — ความล้า (fatigue), แรงบิดของน็อต

## SCADA และ CMS
- **SCADA** เก็บข้อมูลทุก 10 นาที เช่น ความเร็วลม กำลัง อุณหภูมิ และ alarm ใช้ดูประสิทธิภาพและหาความผิดปกติ
- **CMS** วัดการสั่นสะเทือนความถี่สูงที่ drivetrain เพื่อตรวจจับความเสียหายของ bearing หรือเฟืองตั้งแต่ระยะแรก

## ตัวชี้วัด (KPIs)

$$
\text{Time-based Availability} = \frac{T_{\text{available}}}{T_{\text{total}}} \times 100\%
$$

$$
\text{MTBF} = \frac{\text{เวลาทำงานรวม}}{\text{จำนวนครั้งที่เสีย}}, \qquad
\text{MTTR} = \frac{\text{เวลาซ่อมรวม}}{\text{จำนวนครั้งที่ซ่อม}}
$$

นอกจากนี้ยังมี **Energy-based Availability** ซึ่งคิดจากพลังงานที่เสียไปจริง ไม่ใช่แค่เวลาที่หยุด เพราะการหยุดตอนลมแรงเสียพลังงานมากกว่าตอนลมเบา

## รูปแบบสัญญา O&M

| รูปแบบ | ลักษณะ | เหมาะกับ |
|---|---|---|
| **Full Service Agreement (FSA)** กับผู้ผลิต | ผู้ผลิตดูแลทั้งหมด รวมอะไหล่หลัก และรับประกัน availability | ช่วงแรกของโครงการ (มักเป็น 5–15 ปี) |
| **Basic / Partial service** | ผู้ผลิตดูแลบางส่วน เจ้าของรับความเสี่ยงอะไหล่หลักเอง | เจ้าของที่มีประสบการณ์ |
| **ISP (Independent Service Provider)** | ผู้ให้บริการอิสระ ราคามักต่ำกว่า | หลังหมดสัญญากับผู้ผลิต |
| **Self-perform** | เจ้าของทำเอง | ผู้ประกอบการรายใหญ่ที่มีหลายฟาร์ม |

ประเด็นที่ต้องอ่านในสัญญา: นิยามของ availability (อะไรนับเป็นเหตุยกเว้น), ค่าปรับหรือโบนัส, ความรับผิดชอบต่อ major component, การเข้าถึงข้อมูล SCADA

## Major Component Exchange
การเปลี่ยน gearbox, main bearing, generator หรือใบพัด มักต้องใช้**เครนหลัก**เหมือนตอนติดตั้ง จึงมีต้นทุนสูงและใช้เวลานาน
- เตรียมอะไหล่สำรอง (strategic spares) หรือทำสัญญาจองอะไหล่ร่วมกับเจ้าของฟาร์มอื่น
- วางแผนเครนให้เปลี่ยนชิ้นส่วนได้หลายต้นในการระดมเครนครั้งเดียว
- ปัจจุบันมีวิธีที่ไม่ต้องใช้เครนใหญ่ (up-tower repair) สำหรับบางชิ้นส่วน

**ตัวอย่างการตัดสินใจ:** CMS พบความเสียหายระยะแรกที่ bearing ใน gearbox ทางเลือกคือ
1. เดินเครื่องต่อและเฝ้าระวังถี่ขึ้น
2. ลดกำลัง (derate) เพื่อลดภาระ
3. ซ่อมบนเสา (up-tower) ถ้าทำได้
4. วางแผนเปลี่ยนทั้งชุดในช่วงลมอ่อน ซึ่งเสียพลังงานน้อยที่สุด

## การตรวจและซ่อมใบพัด
- **ตรวจ:** โดรนถ่ายภาพความละเอียดสูงร่วมกับ AI จัดระดับความเสียหาย (เช่น ระดับ 1–5), rope access สำหรับตรวจละเอียด, ตรวจภายในใบพัด
- **ความเสียหายที่พบบ่อย:** leading edge erosion (ลดประสิทธิภาพอากาศพลศาสตร์และ AEP), ฟ้าผ่า (ต้องตรวจระบบ LPS: Lightning Protection System), รอยแตกที่ trailing edge และรอยต่อกาว
- **ซ่อม:** เคลือบป้องกันขอบนำ (LEP: Leading Edge Protection), ซ่อมเนื้อคอมโพสิต งานซ่อมทำได้เฉพาะเมื่ออุณหภูมิและความชื้นเหมาะสม

## วิเคราะห์ข้อมูล SCADA เชิงลึก
- **Power curve monitoring:** เปรียบเทียบกำลังจริงกับ power curve อ้างอิง ถ้าลดลงอาจเกิดจาก pitch offset, yaw misalignment, ใบสกปรกหรือกัดกร่อน หรือเซนเซอร์ลมผิดพลาด
- **Temperature trending:** อุณหภูมิ bearing หรือน้ำมันเกียร์ที่สูงขึ้นเมื่อเทียบกับต้นข้างเคียงที่ภาระเท่ากัน เป็นสัญญาณเตือนล่วงหน้า
- **Lost production analysis:** แยกพลังงานที่เสียไปตามสาเหตุ (กังหันเสีย, grid, curtailment, สภาพอากาศ) เพื่อจัดลำดับการแก้ไข

## ความปลอดภัยในงาน O&M
- การปีนและงานที่สูง: อุปกรณ์ป้องกันการตก, แผนกู้ภัย, ใบรับรองการฝึกอบรม (เช่น GWO Basic Safety Training)
- งานไฟฟ้า: Lock-Out/Tag-Out, การทำงานใกล้ไฟฟ้าแรงสูง
- ล็อกโรเตอร์ก่อนเข้า hub ทุกครั้ง
- ห้ามขึ้นกังหันเมื่อมีพายุฝนฟ้าคะนอง

## แบบฝึกหัด
1. กังหันหยุด 146 ชั่วโมงในหนึ่งปี มี time-based availability เท่าใด (เฉลย: ≈ 98.3%)
2. ทำไมการหยุดซ่อมในฤดูมรสุมจึงแพงกว่าฤดูอื่น
3. กังหันต้นหนึ่งผลิตไฟได้ต่ำกว่าต้นข้างเคียง 4% ที่ความเร็วลมเท่ากัน ให้ระบุสาเหตุที่เป็นไปได้ 4 ข้อ และวิธีตรวจสอบแต่ละข้อ

## อ่านต่อ / มาตรฐาน
- IEC 61400-25 — Communications for monitoring and control
- IEC 61400-26 — Availability for wind energy generation systems
- [Offshore Wind](/industry/wind/offshore-wind/)
