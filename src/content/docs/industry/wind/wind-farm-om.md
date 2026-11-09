---
title: Wind Farm Operation & Maintenance
description: การเดินเครื่องและบำรุงรักษาฟาร์มกังหันลม
sidebar:
  order: 2
---

**ระดับ:** Intermediate
**ความรู้ที่ต้องมีก่อน:** [Wind Farm Development](/industry/wind/wind-farm-development/) · [Mechanical Engineering](/disciplines/mechanical-engineering/) (Vibration) · [Electrical Engineering](/disciplines/electrical-engineering/)

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

## แบบฝึกหัด
1. กังหันหยุด 146 ชั่วโมงในหนึ่งปี มี time-based availability เท่าใด (เฉลย: ≈ 98.3%)
2. ทำไมการหยุดซ่อมในฤดูมรสุมจึงแพงกว่าฤดูอื่น

## อ่านต่อ / มาตรฐาน
- IEC 61400-25 — Communications for monitoring and control
- IEC 61400-26 — Availability for wind energy generation systems
