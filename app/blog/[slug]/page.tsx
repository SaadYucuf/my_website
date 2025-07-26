"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Moon, Sun, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { notFound } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import { Metadata } from "next"
import type React from "react"
import type { JSX } from "react"
import { useState } from "react"

const blogPosts = {
  "odoo-erp-nima-va-biznes-uchun-foydali": {
    title: "Odoo ERP nima va biznes uchun qanday foydali?",
    date: "2025-01-15",
    image: "/images/odoo-dashboard.png",
    author: "Akbarshohdev",
    readTime: "8 daqiqa",
    description: "Odoo ERP tizimi haqida to'liq ma'lumot, uning imkoniyatlari va biznes jarayonlarini qanday yaxshilashi haqida.",
    keywords: ["Odoo ERP", "ERP tizimi", "biznes boshqaruvi", "Odoo modullari", "biznes optimizatsiya"],
    content: `
# Odoo ERP nima va biznes uchun qanday foydali?

Zamonaviy biznes dunyosida muvaffaqiyat qozonish uchun samarali boshqaruv tizimlariga ega bo'lish zarur. Odoo ERP aynan shunday kuchli vosita bo'lib, biznesning barcha sohalarini bir joyda boshqarish imkonini beradi.

## Odoo ERP nima?

**Odoo** - bu ochiq kodli va tijorat versiyalari mavjud bo'lgan Enterprise Resource Planning (ERP) tizimi. U 2005-yilda Belgiyada yaratilgan va hozirda dunyoning eng mashhur ERP tizimlaridan biri hisoblanadi.

### Odoo ning asosiy xususiyatlari:

**1. Modulli tuzilma**
- 30+ dan ortiq modul
- Faqat kerakli modullarni o'rnatish imkoniyati
- Bosqichma-bosqich kengaytirish
- Modullar o'rtasida mukammal integratsiya

**2. Ochiq kodli va tijorat versiyalari**
- Community Edition - mutlaqo bepul
- Enterprise Edition - professional qo'llab-quvvatlash bilan
- Manba kodiga to'liq kirish
- Vendor lock-in yo'q

**3. Zamonaviy texnologiyalar**
- Python dasturlash tili
- PostgreSQL ma'lumotlar bazasi
- Responsive web interfeys
- Mobil ilovalar qo'llab-quvvatlashi

## Odoo ERP ning asosiy modullari

### 1. Sales Management (Savdo boshqaruvi)
- Mijozlar ma'lumotlari
- Lead va opportunity boshqaruvi
- Takliflar va shartnomalar
- Savdo buyurtmalari
- Savdo hisobotlari

### 2. Purchase Management (Xaridlar boshqaruvi)
- Yetkazib beruvchilar katalogi
- Xarid so'rovlari (RFQ)
- Xarid buyurtmalari
- Qabul qilish va nazorat
- Xarid tahlillari

### 3. Inventory Management (Ombor boshqaruvi)
- Mahsulotlar katalogi
- Zaxiralar nazorati
- Ombor operatsiyalari
- Shtrix-kod qo'llab-quvvatlash
- Ko'p omborli boshqaruv

### 4. Accounting (Buxgalteriya)
- Buxgalteriya hisobi
- Hisob-fakturalar
- To'lovlar boshqaruvi
- Moliyaviy hisobotlar
- Soliq hisoblash

### 5. Manufacturing (Ishlab chiqarish)
- Ishlab chiqarish buyurtmalari
- Bill of Materials (BOM)
- Work Centers boshqaruvi
- Sifat nazorati
- MRP (Material Requirements Planning)

## Biznes uchun Odoo ERP ning afzalliklari

### 1. Xarajatlarni kamaytirish

**IT xarajatlari:**
- Bir nechta dastur o'rniga bitta tizim
- Litsenziya to'lovlarini 50-80% gacha kamaytirish
- IT qo'llab-quvvatlash xarajatlarini kamaytirish
- Server va infratuzilma xarajatlarini optimallashtirish

**Operatsion xarajatlar:**
- Qog'oz ishlarini 70-90% gacha kamaytirish
- Manual jarayonlarni avtomatlashtirish
- Xatolar tufayli yo'qotishlarni kamaytirish
- Xodimlar vaqtini 20-40% gacha tejash

### 2. Samaradorlikni oshirish

**Jarayonlar optimizatsiyasi:**
- Avtomatlashtirilgan ish jarayonlari
- Real vaqtda ma'lumotlar
- Tezkor qaror qabul qilish
- Xodimlar samaradorligini oshirish

**Mijozlar bilan ishlash:**
- Yagona mijoz ma'lumotlari bazasi
- Avtomatik mijoz xizmati
- Shaxsiylashtirilgan xizmatlar
- Mijoz sodiqligini oshirish

### 3. Raqamli transformatsiya

**Zamonaviy texnologiyalar:**
- Bulutli xizmatlar
- Mobil qo'llab-quvvatlash
- API integratsiyalari
- IoT qurilmalar bilan bog'lanish

**Ma'lumotlar tahlili:**
- Real vaqtda hisobotlar
- Katta ma'lumotlar tahlili
- Sun'iy intellekt integratsiyasi
- Bashoratli tahlil

## Odoo ERP joriy qilish bosqichlari

### 1. Tayyorgarlik bosqichi
- Biznes jarayonlarini tahlil qilish
- Talablarni aniqlash
- Loyiha jamoasini tuzish
- Vaqt va byudjetni rejalashtirish

### 2. Dizayn bosqichi
- Tizim arxitekturasini loyihalash
- Modullarni tanlash
- Moslashtirish talablarini aniqlash
- Interfeys dizaynini yaratish

### 3. Joriy qilish bosqichi
- Tizimni o'rnatish
- Ma'lumotlarni migratsiya qilish
- Moslashtirish va sozlash
- Testlash va sinovdan o'tkazish

### 4. Ishga tushirish
- Xodimlarni o'qitish
- Tizimni ishga tushirish
- Qo'llab-quvvatlash
- Monitoring va optimizatsiya

## Xulosa

Odoo ERP - bu zamonaviy biznes uchun kuchli va samarali yechim. Uning modulli tuzilmasi, ochiq kodli xususiyati va keng imkoniyatlari tufayli har qanday o'lchamdagi biznes uchun mos keladi.

**Asosiy afzalliklar:**
- Xarajatlarni kamaytirish
- Samaradorlikni oshirish
- Jarayonlarni avtomatlashtirish
- Raqamli transformatsiya
- Moslashuvchanlik va kengaytirish imkoniyati

Agar siz ham biznesingizni raqamlashtirish va optimallashtirishni xohlasangiz, Odoo ERP aynan siz uchun yaratilgan yechim bo'lishi mumkin.
    `,
  },
  "odoo-erp-joriy-qilish-qollanma": {
    title: "Odoo ERP joriy qilish: Bosqichma-bosqich qo'llanma",
    date: "2025-01-10",
    image: "/images/odoo-implementation.png",
    author: "Akbarshohdev",
    readTime: "10 daqiqa",
    description: "Odoo ERP tizimini muvaffaqiyatli joriy qilish uchun to'liq qo'llanma.",
    keywords: ["Odoo ERP", "joriy qilish", "ERP implementation"],
    content: `
# Odoo ERP joriy qilish: Bosqichma-bosqich qo'llanma

Odoo ERP tizimini muvaffaqiyatli joriy qilish - bu puxta rejalashtirish, to'g'ri bajarish va doimiy qo'llab-quvvatlashni talab qiladigan murakkab jarayon. Ushbu qo'llanma sizga Odoo ERP ni bosqichma-bosqich joriy qilishda yordam beradi.

[IMAGE:odoo-implementation]

## Joriy qilish jarayonining umumiy ko'rinishi

### Joriy qilish bosqichlari:
1. **Tayyorgarlik va tahlil** (2-4 hafta)
2. **Tizimni o'rnatish va sozlash** (2-6 hafta)
3. **Ma'lumotlarni ko'chirish** (1-3 hafta)
4. **Test va o'qitish** (2-4 hafta)
5. **Ishga tushirish** (1-2 hafta)
6. **Qo'llab-quvvatlash va optimizatsiya** (doimiy)

### Umumiy vaqt: 8-19 hafta (biznes murakkabligiga qarab)

## 1-bosqich: Tayyorgarlik va tahlil (2-4 hafta)

### Biznes jarayonlarini tahlil qilish

**Joriy holatni baholash:**
- Mavjud tizimlar va jarayonlar
- Muammoli sohalar va bottleneck lar
- Xodimlar fikr-mulohazalari
- Texnik infratuzilma holati

**Maqsadlarni belgilash:**
- Qisqa muddatli maqsadlar (3-6 oy)
- O'rta muddatli maqsadlar (6-12 oy)
- Uzoq muddatli maqsadlar (1-3 yil)
- Success metrics va KPI lar

### Loyiha jamoasini tuzish

**Asosiy rollar:**
- **Loyiha rahbari** - umumiy koordinatsiya
- **Biznes tahlilchi** - jarayonlar tahlili
- **Texnik mutaxassis** - tizim sozlash
- **O'qituvchi** - xodimlarni tayyorlash
- **End user vakillari** - har bir bo'limdan

### Modullar va funksiyalarni tanlash

**Asosiy modullar (1-bosqich):**
- Sales Management
- Purchase Management  
- Inventory Management
- Accounting

**Qo'shimcha modullar (2-bosqich):**
- Manufacturing
- Project Management
- Human Resources
- Website/E-commerce

### Budjet va vaqt rejasini tuzish

**Xarajatlar taqsimoti:**
- Litsenziya: 30-40%
- Joriy qilish xizmatlari: 40-50%
- O'qitish: 10-15%
- Qo'llab-quvvatlash: 5-10%

## 2-bosqich: Tizimni o'rnatish va sozlash (2-6 hafta)

### Texnik infratuzilmani tayyorlash

**Server talablari:**
\`\`\`bash
# Minimal server konfiguratsiyasi
CPU: 2 cores
RAM: 4 GB
Storage: 40 GB SSD
OS: Ubuntu 20.04 LTS

# Tavsiya etilgan konfiguratsiya
CPU: 4+ cores
RAM: 8+ GB
Storage: 100+ GB SSD
Backup: Avtomatik daily backup
\`\`\`

**Odoo o'rnatish:**
\`\`\`bash
# PostgreSQL o'rnatish
sudo apt update
sudo apt install postgresql postgresql-contrib

# Odoo repository qo'shish
wget -O - https://nightly.odoo.com/odoo.key | apt-key add -
echo "deb http://nightly.odoo.com/17.0/nightly/deb/ ./" >> /etc/apt/sources.list.d/odoo.list

# Odoo o'rnatish
sudo apt update
sudo apt install odoo

# Odoo xizmatini ishga tushirish
sudo systemctl start odoo
sudo systemctl enable odoo
\`\`\`

### Asosiy sozlamalar

**Kompaniya ma'lumotlari:**
- Kompaniya nomi va manzili
- Logo va brendbook elementlari
- Soliq raqami va bank rekvizitlari
- Valyuta va til sozlamalari
- Vaqt zonasi va sana formati

**Foydalanuvchilar va ruxsatlar:**
\`\`\`python
# Foydalanuvchi guruhlari yaratish
# Sales Manager
sales_manager = self.env.ref('sales_team.group_sale_manager')

# Inventory Manager  
inventory_manager = self.env.ref('stock.group_stock_manager')

# Accounting Manager
accounting_manager = self.env.ref('account.group_account_manager')
\`\`\`

### Mahsulotlar katalogini yaratish

**Mahsulot turlari:**
- **Storable Product** - zaxirada saqlanadigan
- **Consumable** - iste'mol materiallari
- **Service** - xizmatlar

**Mahsulot ma'lumotlari:**
- Nomi va tavsifi
- Kategoriya
- Sotish va xarid narxlari
- Yetkazib beruvchilar
- Shtrix-kod

### Moliyaviy sozlamalar

**Hisoblar rejasi:**
- Asosiy hisoblar
- Analitik hisoblar
- Soliq sozlamalari
- To'lov usullari

**Valyuta sozlamalari:**
- Asosiy valyuta
- Qo'shimcha valyutalar
- Kurs yangilanish sozlamalari

## 3-bosqich: Ma'lumotlarni ko'chirish (1-3 hafta)

### Ma'lumotlarni tayyorlash

**Ko'chiriladigan ma'lumotlar:**
- Mijozlar va yetkazib beruvchilar
- Mahsulotlar katalogi
- Zaxiralar holati
- Moliyaviy ma'lumotlar
- Tarixiy operatsiyalar

**Ma'lumotlarni tozalash:**
\`\`\`python
# Dublikatlarni topish va o'chirish
duplicates = self.env['res.partner'].search([
    ('email', '!=', False)
]).read(['email'])

emails = {}
for partner in duplicates:
    email = partner['email'].lower()
    if email in emails:
        # Dublikat topildi
        self.env['res.partner'].browse(partner['id']).unlink()
    else:
        emails[email] = partner['id']
\`\`\`

### Import jarayoni

**CSV fayl orqali import:**
\`\`\`python
import csv
from odoo import api, fields, models

class DataImport(models.TransientModel):
    _name = 'data.import'
    
    def import_customers(self):
        with open('customers.csv', 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                # Ma'lumotlarni tekshirish
                if not row.get('name'):
                    continue
                    
                # Mijoz yaratish
                self.env['res.partner'].create({
                    'name': row['name'],
                    'email': row.get('email', ''),
                    'phone': row.get('phone', ''),
                    'street': row.get('address', ''),
                    'is_company': True,
                    'customer_rank': 1
                })
\`\`\`

**Zaxiralar import qilish:**
\`\`\`python
def import_inventory(self):
    with open('inventory.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            product = self.env['product.product'].search([
                ('default_code', '=', row['sku'])
            ], limit=1)
            
            if product:
                # Zaxira harakatini yaratish
                self.env['stock.quant'].create({
                    'product_id': product.id,
                    'location_id': self.env.ref('stock.stock_location_stock').id,
                    'quantity': float(row['quantity']),
                })
\`\`\`

### Ma'lumotlarni tekshirish

**Tekshirish ro'yxati:**
- ✅ Barcha mijozlar import qilindi
- ✅ Mahsulotlar to'g'ri kategoriyalarga joylashtirildi
- ✅ Zaxiralar holati to'g'ri
- ✅ Moliyaviy ma'lumotlar mos keladi
- ✅ Bog'lanishlar to'g'ri o'rnatildi

## 4-bosqich: Test va o'qitish (2-4 hafta)

### Tizimni testlash

**Test stsenariylari:**

**Savdo jarayoni testi:**
1. Yangi mijoz qo'shish
2. Taklif yaratish
3. Taklifni tasdiqlash
4. Hisob-faktura yaratish
5. To'lov qabul qilish

**Xarid jarayoni testi:**
1. Yetkazib beruvchi qo'shish
2. RFQ yuborish
3. Xarid buyurtmasi yaratish
4. Mahsulot qabul qilish
5. Hisob-fakturani to'lash

**Ombor operatsiyalari testi:**
1. Mahsulot qabul qilish
2. Ichki ko'chirish
3. Yetkazib berish
4. Inventarizatsiya

### Xodimlarni o'qitish

**O'qitish dasturi:**

**1-hafta: Asoslar**
- Tizimga kirish va navigatsiya
- Asosiy tushunchalar
- Foydalanuvchi interfeysi
- Yordamchi materiallar

**2-hafta: Maxsus funksiyalar**
- Har bir bo'lim uchun maxsus o'qitish
- Amaliy mashqlar
- Real stsenariolar bilan ishlash
- Muammolarni hal qilish

**O'qitish usullari:**
- Prezentatsiyalar
- Hands-on training
- Video darslar
- Qo'llanmalar va checklists

### Qo'llanmalar tayyorlash

**Har bir jarayon uchun:**
- Bosqichma-bosqich ko'rsatmalar
- Ekran tasvirlari
- Tez-tez so'raladigan savollar
- Troubleshooting guide

## 5-bosqich: Ishga tushirish (1-2 hafta)

### Go-live tayyorligi

**Tekshirish ro'yxati:**
- ✅ Barcha ma'lumotlar to'g'ri import qilingan
- ✅ Xodimlar o'qitilgan va tayyor
- ✅ Testlash muvaffaqiyatli o'tdi
- ✅ Backup va recovery rejasi tayyor
- ✅ Qo'llab-quvvatlash jamoasi tayyor
- ✅ Rollback rejasi tayyorlangan

### Ishga tushirish strategiyasi

**Big Bang yondashuv:**
- Bir vaqtda barcha modullar
- Qisqa o'tish davri
- Yuqori risk, yuqori reward

**Phased rollout:**
- Bosqichma-bosqich modullar
- Kam risk
- Uzoqroq o'tish davri

**Pilot approach:**
- Bitta bo'lim bilan boshlash
- Tajriba orttirish
- Asta-sekin kengaytirish

### Go-live kuni

**Tayyorgarlik:**
- Barcha tizimlar backup qilingan
- Qo'llab-quvvatlash jamoasi standby
- Muloqot kanallari ochiq
- Monitoring tizimi faol

**Birinchi kun:**
- Intensiv qo'llab-quvvatlash
- Tezkor muammo hal qilish
- Foydalanuvchilar feedback i
- Performance monitoring

## 6-bosqich: Qo'llab-quvvatlash va optimizatsiya

### Dastlabki qo'llab-quvvatlash (1 oy)

**Kundalik faoliyat:**
- Tizim ishlashini monitoring
- Foydalanuvchilar savollariga javob
- Kichik xatolarni tuzatish
- Performance tuning

**Haftalik faoliyat:**
- Foydalanuvchilar feedback i yig'ish
- Jarayonlarni tahlil qilish
- Qo'shimcha o'qitish
- Hisobotlar tahlili

### Doimiy yaxshilash

**Optimizatsiya sohalari:**
- Tizim performance
- Foydalanuvchi tajribasi
- Biznes jarayonlari
- Hisobotlar va analytics

**Yangi funksiyalar:**
- Foydalanuvchilar talablari asosida
- Biznes o'sishi bilan
- Yangi modullar qo'shish
- Integratsiyalar

## Muvaffaqiyat omillari

### Kritik muvaffaqiyat omillari:

1. **Kuchli rahbariyat qo'llab-quvvatlashi**
2. **Aniq maqsadlar va kutilgan natijalar**
3. **Yetarli resurslar va vaqt**
4. **Foydalanuvchilarni jalb qilish**
5. **Professional joriy qilish jamoasi**
6. **To'liq o'qitish dasturi**
7. **Yaxshi change management**

### Keng tarqalgan xatolar:

1. **Yetarli rejalashtirish qilmaslik**
2. **Foydalanuvchilarni jalb qilmaslik**
3. **Ma'lumotlar sifatiga e'tibor bermaslik**
4. **O'qitishga kam vaqt ajratish**
5. **Unrealistic expectations**
6. **Scope creep**
7. **Yetarli testing qilmaslik**

## ROI va natijalarni o'lchash

### Asosiy ko'rsatkichlar:

**Samaradorlik:**
- Jarayonlar tezligi
- Xatolar soni
- Avtomatlashtirish darajasi
- Foydalanuvchilar qoniqishi

**Moliyaviy:**
- Xarajatlar kamaytirish
- Daromad o'sishi
- ROI hisoblash
- Payback period

**Operatsion:**
- Tizim uptime
- Performance metrics
- User adoption rate
- Support tickets soni

## Xulosa

Odoo ERP ni muvaffaqiyatli joriy qilish uchun:

1. **Puxta rejalashtirish** - har bir bosqichni batafsil
2. **Professional yondashuv** - tajribali jamoa bilan
3. **Foydalanuvchilarni jalb qilish** - boshidanoq
4. **Yetarli o'qitish** - barcha darajalar uchun
5. **Doimiy qo'llab-quvvatlash** - uzoq muddatli

**Odoo ERP - bu sizning biznesingizni yangi bosqichga olib chiqadigan kuchli vosita. To'g'ri joriy qilish bilan siz 6-12 oy ichida sezilarli natijalarni ko'rishingiz mumkin.**

Bizning jamoamiz sizga Odoo ERP ni professional darajada joriy qilishda yordam berishga tayyor.

**Bugun biz bilan bog'laning va o'z biznesingizni muvaffaqiyatli raqamlashtiring!**
    `,
  },
  "odoo-sap-oracle-solishtiruv": {
    title: "Odoo vs SAP vs Oracle: ERP tizimlarni solishtiruv",
    date: "2025-01-05",
    image: "/images/erp-comparison.png",
    author: "Akbarshohdev",
    readTime: "7 daqiqa",
    description: "Odoo, SAP va Oracle ERP tizimlarining to'liq solishtiruvi.",
    keywords: ["Odoo", "SAP", "Oracle", "ERP solishtiruv"],
    content: `
# Odoo vs SAP vs Oracle: ERP tizimlarni solishtiruv

ERP tizimini tanlash har qanday biznes uchun strategik qaror hisoblanadi. Bugungi kunda bozorda ko'plab ERP yechimlari mavjud, lekin eng mashhur va kuchlilaridan uchtasi - Odoo, SAP va Oracle. Keling, ularni har tomonlama solishtirib ko'ramiz.

[IMAGE:erp-comparison]

## Umumiy ma'lumotlar

### Odoo ERP
- **Yaratilgan yili:** 2005
- **Kompaniya:** Odoo S.A. (Belgiya)
- **Turi:** Ochiq kodli va Enterprise versiyalari
- **Maqsadli auditoriya:** Kichik va o'rta biznes
- **Foydalanuvchilar:** 7+ million dunyo bo'ylab

### SAP ERP
- **Yaratilgan yili:** 1972
- **Kompaniya:** SAP SE (Germaniya)
- **Turi:** Tijorat dasturi
- **Maqsadli auditoriya:** Yirik korxonalar
- **Foydalanuvchilar:** 440,000+ kompaniya

### Oracle ERP Cloud
- **Yaratilgan yili:** 1977
- **Kompaniya:** Oracle Corporation (AQSh)
- **Turi:** Bulutli tijorat dasturi
- **Maqsadli auditoriya:** O'rta va yirik korxonalar
- **Foydalanuvchilar:** 430,000+ kompaniya

## Batafsil narx solishtiruvi

### Odoo ERP narxlari

**Community Edition (Bepul):**
- Cheksiz foydalanuvchilar
- Asosiy modullar (Sales, Purchase, Inventory, Accounting)
- Jamoat qo'llab-quvvatlashi
- Self-hosting zarur

**Enterprise Edition:**
- **Narxi:** $31.10/oy har bir foydalanuvchi uchun
- Barcha modullar (30+)
- Rasmiy qo'llab-quvvatlash
- Bulutli hosting (Odoo.sh)
- Studio (no-code customization)

**Qo'shimcha xarajatlar:**
- Joriy qilish: $5,000 - $50,000
- O'qitish: $2,000 - $10,000
- Moslashtirish: $5,000 - $100,000

### SAP ERP narxlari

**SAP S/4HANA Cloud:**
- **Narxi:** $150 - $300/oy har bir foydalanuvchi uchun
- Minimal 10 foydalanuvchi
- Asosiy modullar kiritilgan

**SAP S/4HANA On-Premise:**
- **Litsenziya:** $4,000 - $8,000 har bir foydalanuvchi uchun (bir martalik)
- Maintenance: 22% yillik litsenziya qiymatidan

**Qo'shimcha xarajatlar:**
- Joriy qilish: $100,000 - $2,000,000+
- O'qitish: $50,000 - $200,000
- Hardware va infratuzilma: $50,000 - $500,000

### Oracle ERP Cloud narxlari

**Oracle Fusion Cloud ERP:**
- **Narxi:** $175 - $300/oy har bir foydalanuvchi uchun
- Minimal 20 foydalanuvchi
- Modullar to'plami

**Oracle ERP Cloud HCM:**
- **Narxi:** $15 - $25/oy har bir xodim uchun
- HR va Payroll funksiyalari

**Qo'shimcha xarajatlar:**
- Joriy qilish: $200,000 - $3,000,000+
- O'qitish: $30,000 - $150,000
- Integratsiya: $100,000 - $500,000

## Funksionallik solishtiruvi

### Odoo ERP modullari

**Asosiy biznes modullar:**
- Sales Management (CRM, Quotes, Orders)
- Purchase Management (Vendors, RFQ, PO)
- Inventory Management (Stock, Warehouses)
- Accounting (Invoicing, Payments, Reports)
- Manufacturing (MRP, BOM, Work Centers)
- Project Management (Tasks, Timesheets)
- Human Resources (Employees, Payroll)
- Website Builder (CMS, E-commerce)

**Maxsus modullar:**
- Point of Sale (POS)
- Field Service
- Helpdesk
- Marketing Automation
- Social Marketing
- Live Chat

**Afzalliklari:**
- Oson integratsiya
- Modulli yondashuv
- Tez joriy qilish
- User-friendly interfeys

### SAP ERP modullari

**SAP S/4HANA Core modullari:**
- Finance (FI) - Moliyaviy boshqaruv
- Controlling (CO) - Xarajatlar nazorati
- Sales & Distribution (SD) - Savdo
- Materials Management (MM) - Materiallar
- Production Planning (PP) - Ishlab chiqarish
- Plant Maintenance (PM) - Texnik xizmat
- Human Resources (HR) - Kadrlar
- Quality Management (QM) - Sifat

**Industry-specific solutions:**
- Automotive
- Banking
- Healthcare
- Retail
- Oil & Gas
- Utilities

**Afzalliklari:**
- Chuqur funksionallik
- Industry best practices
- Kuchli hisobotlar
- Enterprise-grade security

### Oracle ERP Cloud modullari

**Oracle Fusion Cloud Applications:**
- Financials (GL, AP, AR, FA)
- Procurement (Sourcing, Purchasing)
- Project Portfolio Management
- Supply Chain Management
- Manufacturing
- Human Capital Management
- Customer Experience (CX)

**Oracle Cloud Infrastructure:**
- Database services
- Analytics va BI
- AI va Machine Learning
- Integration Platform

**Afzalliklari:**
- AI va ML integratsiyasi
- Bulutli arxitektura
- Kuchli ma'lumotlar tahlili
- Scalability

## Foydalanish qulayligi

### Odoo ERP
**Interfeys:**
- Zamonaviy va intuitiv
- Responsive design
- Drag-and-drop funksiyalar
- Mobil ilovalar

**O'rganish egri chizig'i:**
- **Past** - 1-2 hafta asoslar
- Minimal o'qitish vaqti
- Online documentation
- Video tutorials

**Customization:**
- Studio (no-code)
- Python development
- Easy module creation
- App Store

### SAP ERP
**Interfeys:**
- SAP Fiori (zamonaviy)
- SAP GUI (klassik)
- Complex navigation
- Desktop-oriented

**O'rganish egri chizig'i:**
- **Yuqori** - 3-6 oy
- Intensiv o'qitish zarur
- Sertifikatsiya dasturlari
- Professional training

**Customization:**
- ABAP dasturlash
- Complex development
- Expensive customizations
- SAP Store

### Oracle ERP Cloud
**Interfeys:**
- Modern cloud interface
- Responsive design
- Configurable dashboards
- Mobile apps

**O'rganish egri chizig'i:**
- **O'rta-yuqori** - 2-4 oy
- Professional o'qitish
- Oracle University
- Certification programs

**Customization:**
- Visual Builder
- REST APIs
- Oracle APEX
- Marketplace

## Texnik talablar va deployment

### Odoo ERP
**Deployment variantlari:**
- Cloud (Odoo.sh)
- On-premise
- Hybrid
- Third-party hosting

**Texnik stack:**
- Python (backend)
- PostgreSQL (database)
- JavaScript (frontend)
- XML (views)

**System requirements:**
- Minimal: 2 CPU, 4GB RAM
- Tavsiya: 4+ CPU, 8+ GB RAM
- Linux/Windows server
- PostgreSQL 12+

### SAP ERP
**Deployment variantlari:**
- SAP Cloud Platform
- On-premise
- Hybrid
- Private cloud

**Texnik stack:**
- ABAP (backend)
- SAP HANA (database)
- SAP Fiori (frontend)
- SAP NetWeaver (platform)

**System requirements:**
- Minimal: 8 CPU, 32GB RAM
- Tavsiya: 16+ CPU, 128+ GB RAM
- Certified hardware
- SAP HANA database

### Oracle ERP Cloud
**Deployment variantlari:**
- Oracle Cloud Infrastructure
- Hybrid cloud
- Multi-cloud
- On-premise (limited)

**Texnik stack:**
- Java (backend)
- Oracle Database
- Oracle JET (frontend)
- Oracle Fusion Middleware

**System requirements:**
- Cloud-based (managed)
- Automatic scaling
- Global data centers
- 99.95% uptime SLA

## Biznes hajmi bo'yicha tavsiyalar

### Kichik biznes (1-50 xodim)

**Odoo ERP - Eng yaxshi tanlov**
- **Narxi:** $1,500 - $15,000/yil
- **Joriy qilish:** 1-3 oy
- **ROI:** 6-12 oy
- **Afzalliklari:** Arzon, oson, moslashuvchan

**SAP - Tavsiya etilmaydi**
- Juda qimmat va murakkab
- Kichik biznes uchun ortiqcha

**Oracle - Tavsiya etilmaydi**
- Yuqori xarajatlar
- Murakkab joriy qilish

### O'rta biznes (50-500 xodim)

**Odoo ERP - Yaxshi tanlov**
- **Narxi:** $15,000 - $150,000/yil
- **Joriy qilish:** 2-6 oy
- **ROI:** 8-18 oy
- **Afzalliklari:** Tejamkor, to'liq funksional

**SAP - Shartli tavsiya**
- **Narxi:** $100,000 - $500,000/yil
- Murakkab sanoat uchun mos
- Yuqori xarajatlar

**Oracle - O'rta tanlov**
- **Narxi:** $80,000 - $400,000/yil
- Bulutli yechim afzal
- AI/ML funksiyalar

### Yirik biznes (500+ xodim)

**Odoo ERP - Yaxshi tanlov**
- **Narxi:** $150,000 - $1,000,000/yil
- Multi-company qo'llab-quvvatlash
- Custom development imkoniyatlari

**SAP - An'anaviy tanlov**
- **Narxi:** $500,000 - $5,000,000+/yil
- Enterprise-grade funksiyalar
- Industry-specific solutions

**Oracle - Kuchli tanlov**
- **Narxi:** $400,000 - $3,000,000+/yil
- Advanced analytics
- Cloud-first approach

## Real biznes case studies

### Case Study 1: Savdo kompaniyasi (100 xodim)

**Odoo ERP:**
- **Xarajat:** $50,000 (birinchi yil)
- **Joriy qilish:** 4 oy
- **Natija:** 30% samaradorlik oshishi
- **ROI:** 12 oyda 200%

**SAP alternative:**
- **Xarajat:** $300,000 (birinchi yil)
- **Joriy qilish:** 12 oy
- **Natija:** 25% samaradorlik oshishi
- **ROI:** 24 oyda 150%

### Case Study 2: Ishlab chiqarish (200 xodim)

**Odoo ERP:**
- **Xarajat:** $80,000 (birinchi yil)
- **Joriy qilish:** 6 oy
- **Natija:** 25% ishlab chiqarish oshishi
- **ROI:** 15 oyda 180%

**Oracle alternative:**
- **Xarajat:** $400,000 (birinchi yil)
- **Joriy qilish:** 18 oy
- **Natija:** 30% ishlab chiqarish oshishi
- **ROI:** 30 oyda 160%

## Xulosa va tavsiyalar

### Odoo ERP ni tanlang, agar:
- ✅ Kichik yoki o'rta biznes egasisiz
- ✅ Cheklangan budjet bor
- ✅ Tez joriy qilish kerak
- ✅ Oson foydalanish muhim
- ✅ Moslashuvchanlik zarur
- ✅ Ochiq kodli yechim afzal ko'rasiz

### SAP ni tanlang, agar:
- ✅ Yirik korxona egasisiz
- ✅ Murakkab biznes jarayonlar bor
- ✅ Yuqori budjet mavjud
- ✅ Industry-specific funksiyalar kerak
- ✅ Compliance talablari yuqori
- ✅ Uzoq muddatli investitsiya qilmoqchisiz

### Oracle ni tanlang, agar:
- ✅ O'rta yoki yirik biznes egasisiz
- ✅ Bulutli yechim afzal ko'rasiz
- ✅ AI/ML funksiyalar kerak
- ✅ Advanced analytics muhim
- ✅ Oracle ekotizimi ishlatayotgan bo'lsangiz
- ✅ Global presence bor

## Bizning professional tavsiyamiz

**90% kichik va o'rta biznes uchun Odoo ERP eng yaxshi tanlov:**

1. **Tejamkorlik** - 3-10 marta arzonroq
2. **Tezlik** - 2-3 marta tezroq joriy qilish
3. **Soddalik** - minimal o'qitish vaqti
4. **Moslashuvchanlik** - har qanday biznes uchun
5. **Kelajak** - doimiy rivojlanish

**Faqat juda yirik va murakkab korxonalar uchun SAP yoki Oracle zarur bo'lishi mumkin.**

Bizning jamoamiz Odoo ERP bo'yicha keng tajribaga ega va sizga eng yaxshi yechimni tanlash va joriy qilishda yordam berishga tayyor.

**Bugun biz bilan bog'laning va o'z biznesingiz uchun eng mos ERP tizimini tanlashda professional maslahat oling!**
    `,
  },
  "odoo-erp-narxlari-2025": {
    title: "Odoo ERP narxlari va to'lov rejalari 2025",
    date: "2024-12-28",
    image: "/images/odoo-pricing.png",
    author: "Akbarshohdev",
    readTime: "6 daqiqa",
    description: "Odoo ERP narxlari va to'lov rejalari haqida batafsil.",
    keywords: ["Odoo ERP", "narxlar", "pricing"],
    content: `
# Odoo ERP narxlari va to'lov rejalari 2025

Odoo ERP tizimini tanlashda eng muhim savollardan biri - bu narx masalasi. 2025-yilda Odoo turli xil to'lov rejalarini taklif qiladi va har bir biznes o'z ehtiyojiga mos variantni topishi mumkin. Keling, batafsil ko'rib chiqamiz.

[IMAGE:odoo-pricing]

## Odoo versiyalari va narxlari

### 1. Odoo Community Edition (Bepul)

**Narxi: $0 - Mutlaqo bepul**

**Nima kiritilgan:**
- Asosiy modullar:
  - Sales Management
  - Purchase Management
  - Inventory Management
  - Accounting
  - Manufacturing
  - Project Management
  - Website Builder
- Cheksiz foydalanuvchilar
- Jamoat qo'llab-quvvatlashi (forum)
- Ochiq kodli litsenziya (LGPL)

**Cheklovlar:**
- Rasmiy qo'llab-quvvatlash yo'q
- Bulutli hosting yo'q
- Ba'zi ilg'or funksiyalar yo'q
- Studio (drag-and-drop customization) yo'q
- Enterprise modullar yo'q

**Kimlar uchun mos:**
- Startaplar va juda kichik biznes
- Texnik bilimga ega jamoalar
- Test va o'rganish uchun
- Budget cheklangan kompaniyalar

### 2. Odoo Enterprise Edition

**Narxi: $31.10/oy har bir foydalanuvchi uchun**

**Nima kiritilgan:**
- Barcha Community modullar
- Enterprise modullar (30+):
  - Advanced Inventory
  - Advanced Accounting
  - Marketing Automation
  - Helpdesk
  - Field Service
  - Quality Management
  - PLM (Product Lifecycle Management)
  - Documents Management
- Rasmiy qo'llab-quvvatlash
- Bulutli hosting (Odoo.sh)
- Studio (no-code customization)
- Advanced reporting
- IoT Box qo'llab-quvvatlashi
- Mobil ilovalar
- SSL sertifikat
- CDN (Content Delivery Network)

**Qo'shimcha xususiyatlar:**
- Avtomatik backup
- Multi-company qo'llab-quvvatlashi
- Advanced permissions
- Custom dashboards
- API access
- Third-party integrations

**Kimlar uchun mos:**
- Professional biznes
- O'rta va yirik kompaniyalar
- Rasmiy qo'llab-quvvatlash kerak bo'lgan biznes
- Tez joriy qilish istagan kompaniyalar

### 3. Odoo.sh (Bulutli platform)

**Narxi: Enterprise narxi + hosting xarajatlari**

**Hosting narxlari:**
- **Development branch**: $20/oy
- **Staging branch**: $25/oy  
- **Production branch**: $30/oy

**Nima kiritilgan:**
- Avtomatik deployment
- Git integratsiyasi
- Multiple environments (dev, staging, prod)
- Automatic backups
- SSL sertifikat
- CDN
- Monitoring va logging
- Performance optimization
- 99.9% uptime guarantee

## Modullar bo'yicha batafsil narxlar

### Enterprise modullar (kiritilgan)

**Sales va Marketing:**
- Advanced CRM
- Marketing Automation
- Email Marketing
- Social Marketing
- Events Management
- Surveys

**Operations:**
- Advanced Manufacturing
- Quality Management
- Maintenance
- PLM (Product Lifecycle Management)
- Barcode scanning
- IoT integration

**Services:**
- Project Management
- Timesheet
- Field Service
- Helpdesk
- Knowledge Base
- Appointments

**HR va Finance:**
- Advanced HR
- Payroll
- Recruitment
- Performance Management
- Advanced Accounting
- Consolidation

### Qo'shimcha xizmatlar narxlari

**SMS Gateway:**
- $0.05 har bir SMS uchun
- Bulk SMS uchun chegirmalar
- International SMS qo'llab-quvvatlash

**VoIP Integration:**
- $10/oy har bir foydalanuvchi uchun
- Asterisk integratsiyasi
- Call recording
- Click-to-call funksiyasi

**IoT Box:**
- $200 (bir martalik to'lov)
- Hardware device
- Barcode scanners, printers, scales uchun
- Plug-and-play setup

**Custom Development:**
- $150-200/soat
- Maxsus modullar yaratish
- Integratsiyalar
- Custom reports

## Joriy qilish xarajatlari

### 1. DIY (Do It Yourself) yondashuv
**Xarajat: $0 - $5,000**

**Nima kiritilgan:**
- O'z kuchingiz bilan o'rnatish
- Online documentation
- Community forum support
- Video tutorials
- Basic configuration

**Vaqt:** 3-8 oy
**Risk:** Yuqori
**Mos:** Texnik bilimga ega jamoalar

### 2. Standart joriy qilish
**Xarajat: $10,000 - $50,000**

**Nima kiritilgan:**
- Professional konsultatsiya (40-80 soat)
- Tizimni o'rnatish va sozlash
- Ma'lumotlarni ko'chirish
- Asosiy customization
- Foydalanuvchilarni o'qitish (16-32 soat)
- 3 oylik qo'llab-quvvatlash
- Go-live support

**Vaqt:** 2-4 oy
**Risk:** O'rta
**Mos:** Ko'pchilik biznes uchun

### 3. Premium joriy qilish
**Xarajat: $50,000 - $200,000**

**Nima kiritilgan:**
- To'liq biznes tahlili (80-120 soat)
- Complex customization va development
- Multiple integrations
- Advanced reporting setup
- Keng qamrovli o'qitish (40-80 soat)
- Change management support
- 12 oylik qo'llab-quvvatlash
- Dedicated project manager
- Performance optimization

**Vaqt:** 4-8 oy
**Risk:** Past
**Mos:** Yirik va murakkab biznes

## Yillik xarajatlar hisobi

### Kichik biznes (5 foydalanuvchi)

**Community Edition:**
- Litsenziya: $0/yil
- Self-hosting: $2,400/yil
- Technical support: $3,000/yil
- **Jami: $5,400/yil**

**Enterprise Edition:**
- Litsenziya: $1,866/yil (5 × $31.10 × 12)
- Hosting: Kiritilgan
- Support: Kiritilgan
- **Jami: $1,866/yil**

### O'rta biznes (25 foydalanuvchi)

**Enterprise Edition:**
- Litsenziya: $9,330/yil (25 × $31.10 × 12)
- Qo'shimcha modullar: $1,500/yil
- Custom development: $10,000/yil
- **Yillik: $20,830/yil**

### Yirik biznes (100 foydalanuvchi)

**Enterprise Edition:**
- Litsenziya: $37,320/yil (100 × $31.10 × 12)
- Advanced features: $15,000/yil
- Custom development: $50,000/yil
- **Yillik: $102,320/yil**

## Boshqa ERP lar bilan narx solishtiruvi

### SAP Business One
- **Narxi**: $150-300/oy har bir foydalanuvchi uchun
- **25 foydalanuvchi uchun**: $45,000-90,000/yil
- **Odoo dan 4-9 marta qimmat**

### Microsoft Dynamics 365
- **Narxi**: $95-210/oy har bir foydalanuvchi uchun  
- **25 foydalanuvchi uchun**: $28,500-63,000/yil
- **Odoo dan 3-6 marta qimmat**

### NetSuite
- **Narxi**: $99-499/oy har bir foydalanuvchi uchun
- **25 foydalanuvchi uchun**: $29,700-149,700/yil
- **Odoo dan 3-15 marta qimmat**

### Sage X3
- **Narxi**: $200-400/oy har bir foydalanuvchi uchun
- **25 foydalanuvchi uchun**: $60,000-120,000/yil
- **Odoo dan 6-12 marta qimmat**

## Xarajatlarni kamaytirish yo'llari

### 1. Bosqichma-bosqich joriy qilish
- Avval asosiy modullar bilan boshlang
- Asta-sekin yangi modullar qo'shing
- Foydalanuvchilar sonini bosqichma-bosqich oshiring
- **Tejamkorlik: 30-50%**

### 2. Community Edition dan boshlash
- Birinchi Community Edition bilan tanishing
- Tajriba orttirgach Enterprise ga o'ting
- **Tejamkorlik: 6-12 oy bepul foydalanish**

### 3. Mahalliy hamkorlar bilan ishlash
- O'zbekistondagi Odoo hamkorlari
- Arzonroq joriy qilish xizmatlari
- Mahalliy qo'llab-quvvatlash
- **Tejamkorlik: 40-60%**

### 4. Guruh chegirmalari
- Ko'p yillik shartnomalar (10-15% chegirma)
- Ko'p foydalanuvchi uchun chegirmalar
- Non-profit tashkilotlar uchun 50% chegirma
- Educational institutions uchun 80% chegirma

## ROI (Return on Investment) hisoblash

### Odoo ERP dan kutilgan foyda:

**Xarajatlarni kamaytirish:**
- Qog'oz ishlarini kamaytirish: 30-50%
- Vaqtni tejash: 20-40%
- Xatolarni kamaytirish: 60-80%
- IT xarajatlarini kamaytirish: 25-40%
- Manual jarayonlarni avtomatlashtirish: 50-70%

**Daromadni oshirish:**
- Savdo samaradorligini oshirish: 15-25%
- Mijozlar xizmatini yaxshilash: 20-30%
- Yangi bozorlar: 10-20%
- Inventory turnover: 20-30%

### ROI misoli (25 foydalanuvchi):

**Yillik xarajatlar:**
- Odoo Enterprise: $9,330
- Joriy qilish: $30,000 (birinchi yil)
- O'qitish: $5,000 (birinchi yil)
- **Jami birinchi yil: $44,330**

**Yillik tejamkorlik va foyda:**
- Jarayonlarni optimallashtirish: $60,000
- Vaqtni tejash: $40,000
- Xatolarni kamaytirish: $25,000
- IT xarajatlarini kamaytirish: $15,000
- **Jami foyda: $140,000**

**ROI = ($140,000 - $44,330) / $44,330 × 100% = 216%**

### Ikkinchi yildan boshlab:
**Yillik xarajatlar:** $9,330
**Yillik foyda:** $140,000
**ROI:** 1,400%

## O'zbekiston bozori uchun maxsus narxlar

### Mahalliy valyutada to'lov
- **So'm kursi bo'yicha**: 1 USD = 12,300 so'm (2025)
- **Enterprise Edition**: 382,000 so'm/oy har bir foydalanuvchi uchun

### Mahalliy hamkorlar orqali chegirmalar
- **Joriy qilish xizmatlari**: 30-50% arzonroq
- **O'qitish**: O'zbek tilida
- **Qo'llab-quvvatlash**: Mahalliy vaqt zonasida

### Davlat dasturlari
- **Raqamlashtirish dasturi**: 50% subsidiya
- **Kichik biznes qo'llab-quvvatlash**: 30% chegirma
- **IT park rezidentlari**: Qo'shimcha imtiyozlar

## Xulosa va tavsiyalar

### Qaysi rejani tanlash:

**Community Edition** - agar:
- Juda kichik biznes (1-5 kishi)
- Cheklangan budjet
- Texnik bilim bor
- Asosiy funksiyalar yetarli

**Enterprise Edition** - agar:
- Professional biznes
- Tez joriy qilish kerak
- Rasmiy qo'llab-quvvatlash muhim
- Barcha funksiyalar kerak

### Bizning tavsiyamiz:

1. **Community Edition bilan boshlang** - tizimni o'rganing
2. **Pilot loyiha o'tkazing** - kichik bo'lim bilan sinab ko'ring  
3. **Enterprise ga o'ting** - biznes o'sgach
4. **Professional yordam oling** - tajribali konsultantlar bilan ishlang

**Odoo ERP - bu eng tejamkor va samarali ERP yechimi. Uning narxi boshqa ERP tizimlardan 3-10 marta arzon, lekin funksionalligi kam emas.**

### Biznes hajmi bo'yicha tavsiyalar:

**1-10 xodim:** Community Edition → Enterprise (6 oy ichida)
**10-50 xodim:** Enterprise Edition darhol
**50+ xodim:** Enterprise + Custom development

Bizning jamoamiz sizga eng mos to'lov rejasini tanlash va Odoo ERP ni muvaffaqiyatli joriy qilishda yordam berishga tayyor.

**Bugun biz bilan bog'laning va o'z biznesingiz uchun individual taklif oling!**
    `,
  },
  "odoo-erp-afzalliklari-imkoniyatlari": {
    title: "Odoo ERP afzalliklari va imkoniyatlari",
    date: "2024-12-10",
    image: "/images/odoo-features.png",
    author: "Akbarshohdev",
    readTime: "7 daqiqa",
    description: "Odoo ERP afzalliklari va imkoniyatlari haqida batafsil.",
    keywords: ["Odoo ERP", "afzalliklar", "imkoniyatlar"],
    content: `
# Odoo ERP afzalliklari va imkoniyatlari

Odoo ERP tizimining afzalliklari va imkoniyatlari uning yuqori funksionalligini va keng qo'llash imkoniyatlarini ko'rsatadi. Ushbu qo'llanmada barcha asosiy modullar va ularning afzalliklari va imkoniyatlari batafsil ko'rib chiqiladi.

[IMAGE:odoo-features]

## Odoo modullar tizimi

### Modulli arxitektura afzalliklari:

**1. Moslashuvchanlik:**
- Faqat kerakli modullarni o'rnatish
- Bosqichma-bosqich kengaytirish
- Custom modullar yaratish
- Third-party modullar qo'shish

**2. Tejamkorlik:**
- Faqat ishlatilgan modullar uchun to'lov
- Minimal system resources
- Optimized performance
- Reduced complexity

**3. Oson boshqaruv:**
- Har bir modul alohida sozlanadi
- Independent updates
- Modular permissions
- Simplified maintenance

## Core Business Modules (Asosiy biznes modullari)

### 1. Sales Management (Savdo boshqaruvi)

**Asosiy funksiyalar:**
- Lead va opportunity management
- Customer database (CRM)
- Quotations va proposals
- Sales orders
- Delivery management
- Invoicing
- Sales analytics

**Key features:**
\`\`\`python
# Sales order yaratish
sale_order = self.env['sale.order'].create({
    'partner_id': customer_id,
    'order_line': [(0, 0, {
        'product_id': product_id,
        'product_uom_qty': 5,
        'price_unit': 100.0
    })]
})
\`\`\`

**Kimlar uchun kerak:**
- Savdo jamoasi
- Sales managerlar
- Customer service
- Marketing team

**Integratsiya:**
- Inventory (zaxiralar)
- Accounting (hisob-fakturalar)
- CRM (mijozlar)
- Website (online orders)

### 2. Purchase Management (Xarid boshqaruvi)

**Asosiy funksiyalar:**
- Vendor management
- Request for Quotation (RFQ)
- Purchase orders
- Goods receipt
- Vendor bills
- Purchase analytics

**Workflow:**
1. Purchase request yaratish
2. RFQ yuborish
3. Vendor quotations taqqoslash
4. Purchase order tasdiqlash
5. Goods receipt
6. Invoice processing
7. Payment

**Kimlar uchun kerak:**
- Procurement team
- Warehouse staff
- Finance department
- Management

### 3. Inventory Management (Ombor boshqaruvi)

**Asosiy funksiyalar:**
- Stock tracking
- Multi-location management
- Barcode scanning
- Serial numbers va lots
- Inventory valuation
- Reordering rules
- Cycle counting

**Advanced features:**
- Multi-warehouse
- Drop shipping
- Cross-docking
- Batch picking
- Wave planning

**Kimlar uchun kerak:**
- Warehouse managers
- Inventory controllers
- Operations team
- Logistics coordinators

### 4. Accounting (Buxgalteriya)

**Asosiy funksiyalar:**
- Chart of accounts
- Journal entries
- Customer invoices
- Vendor bills
- Bank reconciliation
- Financial reports
- Tax management

**Financial reports:**
- Profit & Loss
- Balance Sheet
- Cash Flow
- Trial Balance
- Aged Receivables/Payables

**Kimlar uchun kerak:**
- Accountants
- Finance managers
- CFO
- Auditors

## Manufacturing Modules (Ishlab chiqarish modullari)

### 1. Manufacturing (Asosiy ishlab chiqarish)

**Asosiy funksiyalar:**
- Bill of Materials (BOM)
- Manufacturing orders
- Work centers
- Routing operations
- Quality control
- Capacity planning

**Production workflow:**
\`\`\`python
# Manufacturing order yaratish
mo = self.env['mrp.production'].create({
    'product_id': product_id,
    'product_qty': 100,
    'bom_id': bom_id,
    'location_src_id': raw_location_id,
    'location_dest_id': finished_location_id
})
\`\`\`

### 2. Quality Management (Sifat boshqaruvi)

**Asosiy funksiyalar:**
- Quality control points
- Quality checks
- Quality alerts
- Non-conformance tracking
- Corrective actions
- Quality certificates

**Quality workflow:**
1. Quality plan yaratish
2. Control points belgilash
3. Quality checks bajarish
4. Non-conformance tracking
5. Corrective actions
6. Quality reports

### 3. Maintenance (Texnik xizmat)

**Asosiy funksiyalar:**
- Equipment management
- Preventive maintenance
- Maintenance requests
- Work orders
- Spare parts management
- Maintenance analytics

**Maintenance types:**
- Preventive maintenance
- Corrective maintenance
- Predictive maintenance
- Emergency maintenance

## Service Modules (Xizmat modullari)

### 1. Project Management (Loyihalar boshqaruvi)

**Asosiy funksiyalar:**
- Project planning
- Task management
- Gantt charts
- Resource allocation
- Time tracking
- Project profitability

**Project workflow:**
1. Project yaratish
2. Tasks belgilash
3. Resources assign qilish
4. Progress tracking
5. Time logging
6. Invoicing
7. Project closure

### 2. Timesheet (Vaqt hisobi)

**Asosiy funksiyalar:**
- Time tracking
- Activity logging
- Project time allocation
- Employee productivity
- Billable hours
- Timesheet validation

**Integration benefits:**
- Project profitability
- Employee performance
- Client billing
- Resource planning

### 3. Field Service (Maydon xizmati)

**Asosiy funksiyalar:**
- Service requests
- Technician scheduling
- Mobile app
- Parts management
- Customer communication
- Service analytics

**Mobile capabilities:**
- Offline work
- GPS tracking
- Photo capture
- Digital signatures
- Real-time updates

## HR Modules (Kadrlar modullari)

### 1. Human Resources (Kadrlar boshqaruvi)

**Asosiy funksiyalar:**
- Employee database
- Organization chart
- Employee contracts
- Leave management
- Performance evaluation
- HR analytics

**Employee lifecycle:**
1. Recruitment
2. Onboarding
3. Performance management
4. Career development
5. Offboarding

### 2. Payroll (Ish haqi)

**Asosiy funksiyalar:**
- Salary calculation
- Tax computation
- Social security
- Payslips generation
- Bank transfers
- Payroll reports

**Localization:**
- O'zbekiston soliq qonunlari
- Social fund calculations
- Local reporting requirements

### 3. Recruitment (Ishga qabul)

**Asosiy funksiyalar:**
- Job positions
- Applications management
- Interview scheduling
- Candidate evaluation
- Hiring process
- Recruitment analytics

## Website va E-commerce Modules

### 1. Website Builder (Veb-sayt yaratuvchi)

**Asosiy funksiyalar:**
- Drag-and-drop editor
- Responsive themes
- SEO optimization
- Content management
- Blog functionality
- Contact forms

**Features:**
- Multi-language support
- Custom domains
- SSL certificates
- CDN integration
- Analytics integration

### 2. E-commerce (Elektron tijorat)

**Asosiy funksiyalar:**
- Online catalog
- Shopping cart
- Payment gateways
- Order management
- Customer accounts
- E-commerce analytics

**Payment integrations:**
- PayPal
- Stripe
- Local payment gateways
- Bank transfers
- Cash on delivery

### 3. Point of Sale (POS)

**Asosiy funksiyalar:**
- Touch interface
- Barcode scanning
- Payment processing
- Receipt printing
- Inventory integration
- Offline mode

**Hardware support:**
- Barcode scanners
- Receipt printers
- Cash drawers
- Customer displays
- Scales

## Marketing Modules (Marketing modullari)

### 1. CRM (Mijozlar bilan aloqalar)

**Asosiy funksiyalar:**
- Lead management
- Opportunity tracking
- Customer database
- Communication history
- Sales pipeline
- CRM analytics

**Lead lifecycle:**
1. Lead generation
2. Qualification
3. Opportunity creation
4. Proposal
5. Negotiation
6. Closing
7. Post-sale support

### 2. Email Marketing (Email marketing)

**Asosiy funksiyalar:**
- Email campaigns
- Mailing lists
- Email templates
- A/B testing
- Campaign analytics
- Automation workflows

**Campaign types:**
- Newsletter
- Promotional emails
- Event invitations
- Follow-up sequences
- Drip campaigns

### 3. Marketing Automation (Marketing avtomatizatsiyasi)

**Asosiy funksiyalar:**
- Lead scoring
- Automated workflows
- Behavioral triggers
- Customer segmentation
- Campaign automation
- ROI tracking

## Specialized Modules (Maxsus modullar)

### 1. Helpdesk (Yordam markazi)

**Asosiy funksiyalar:**
- Ticket management
- SLA tracking
- Knowledge base
- Customer portal
- Team collaboration
- Helpdesk analytics

**Ticket workflow:**
1. Ticket creation
2. Assignment
3. Investigation
4. Resolution
5. Customer feedback
6. Closure

### 2. Events (Tadbirlar)

**Asosiy funksiyalar:**
- Event planning
- Registration management
- Ticket sales
- Attendee tracking
- Event website
- Event analytics

### 3. Surveys (So'rovnomalar)

**Asosiy funksiyalar:**
- Survey creation
- Question types
- Response collection
- Data analysis
- Report generation
- Survey sharing

## Integration va API Modules

### 1. Studio (No-code customization)

**Asosiy funksiyalar:**
- Drag-and-drop customization
- Custom fields
- Custom views
- Automated actions
- Custom reports
- Workflow automation

### 2. IoT Box (IoT integratsiyasi)

**Asosiy funksiyalar:**
- Hardware integration
- Sensor data collection
- Real-time monitoring
- Automated triggers
- Device management
- IoT analytics

### 3. API va Webhooks

**Asosiy funksiyalar:**
- REST API
- XML-RPC
- Webhooks
- Third-party integrations
- Custom connectors
- Data synchronization

## Modullarni tanlash strategiyasi

### Boshlang'ich to'plam (Starter pack):
1. **Sales** - savdo boshqaruvi
2. **Inventory** - zaxiralar
3. **Accounting** - buxgalteriya
4. **CRM** - mijozlar

### O'rta biznes to'plami:
5. **Purchase** - xaridlar
6. **Project** - loyihalar
7. **HR** - kadrlar
8. **Website** - veb-sayt

### Kengaytirilgan to'plam:
9. **Manufacturing** - ishlab chiqarish
10. **Quality** - sifat nazorati
11. **Maintenance** - texnik xizmat
12. **Field Service** - maydon xizmati

### Enterprise to'plam:
13. **Marketing Automation**
14. **Helpdesk**
15. **IoT Box**
16. **Studio**

## Modullar o'rtasida integratsiya

### Automatic data flow:
- Sales → Inventory → Accounting
- Purchase → Inventory → Accounting
- Manufacturing → Inventory → Accounting
- Project → Timesheet → Sales → Accounting

### Real-time updates:
- Inventory levels
- Financial data
- Customer information
- Production status

## Custom modullar yaratish

### Development process:
\`\`\`python
# Custom module structure
{
    'name': 'Custom Sales Enhancement',
    'version': '17.0.1.0.0',
    'depends': ['sale', 'stock'],
    'data': [
        'views/sale_order_views.xml',
        'security/ir.model.access.csv',
    ],
    'installable': True,
}
\`\`\`

### Best practices:
- Inherit existing models
- Follow Odoo conventions
- Proper security rules
- Comprehensive testing
- Documentation

## Xulosa

Odoo ERP modullar tizimi:

1. **30+ modullar** - barcha biznes ehtiyojlari uchun
2. **Seamless integration** - modullar o'rtasida
3. **Scalable architecture** - o'sish bilan kengayadi
4. **Customizable** - maxsus ehtiyojlar uchun
5. **Cost-effective** - faqat kerakli modullar uchun to'lov

### Bizning tavsiyamiz:

1. **Asosiy modullar bilan boshlang** - Sales, Inventory, Accounting
2. **Bosqichma-bosqich qo'shing** - biznes o'sishi bilan
3. **Integration ni hisobga oling** - modullar o'rtasida
4. **Custom development** - maxsus ehtiyojlar uchun
5. **Professional yordam** - to'g'ri tanlash uchun

Bizning jamoamiz sizga eng mos modullarni tanlash va muvaffaqiyatli joriy qilishda yordam berishga tayyor.

**Bugun biz bilan bog'laning va o'z biznesingiz uchun ideal modullar to'plamini yarating!**
  `,
  },
  "kichik-biznes-uchun-odoo-erp": {
    title: "Kichik biznes uchun Odoo ERP: To'liq qo'llanma",
    date: "2024-12-15",
    image: "/images/odoo-modules.png",
    author: "Akbarshohdev",
    readTime: "8 daqiqa",
    description: "Kichik biznes uchun Odoo ERP joriy qilish bo'yicha to'liq qo'llanma.",
    keywords: ["Odoo ERP", "kichik biznes", "ERP guide"],
    content: `
# Kichik biznes uchun Odoo ERP: To'liq qo'llanma

Kichik biznes uchun to'g'ri ERP tizimini tanlash - bu muvaffaqiyat kaliti. Odoo ERP kichik biznes ehtiyojlariga mukammal mos keladi va minimal xarajat bilan maksimal natija beradi. Ushbu qo'llanma sizga Odoo ERP ni kichik biznes uchun qanday tanlash va joriy qilishni ko'rsatadi.

[IMAGE:odoo-modules]

## Kichik biznes uchun ERP zaruriyati

### Kichik biznesning asosiy muammolari:

**1. Manual jarayonlar:**
- Qog'ozli hujjatlar
- Excel jadvallar
- Email orqali kommunikatsiya
- Manual hisobotlar
- Vaqt yo'qotish

**2. Ma'lumotlar tarqoqligi:**
- Turli dasturlarda ma'lumotlar
- Dublikatlar va xatolar
- Real-time ma'lumotlar yo'qligi
- Hisobotlar tayyorlashda qiyinchilik

**3. Cheklangan resurslar:**
- Kam IT budjet
- Texnik xodimlar yo'qligi
- Vaqt cheklovi
- O'qitish xarajatlari

**4. O'sish qiyinchiliklari:**
- Jarayonlarni kengaytirish muammosi
- Yangi xodimlarni integratsiya qilish
- Sifat nazorati
- Mijozlar xizmatini yaxshilash

### Odoo ERP bu muammolarni qanday hal qiladi:

**Avtomatlashtirish:**
- Barcha jarayonlar avtomatik
- Hujjatlar avtomatik yaratiladi
- Email va SMS avtomatik yuboriladi
- Hisobotlar avtomatik tayyorlanadi

**Markazlashtirish:**
- Barcha ma'lumotlar bir joyda
- Real-time yangilanishlar
- Bir marta kiritish, hamma joyda foydalanish
- Consistent ma'lumotlar

**Tejamkorlik:**
- Arzon litsenziya
- Minimal IT xarajatlari
- Tez joriy qilish
- Yuqori ROI

## Kichik biznes turlari va Odoo yechimlari

### 1. Chakana savdo (1-20 xodim)

**Biznes ehtiyojlari:**
- Mahsulotlar katalogi
- Savdo operatsiyalari
- Zaxiralar nazorati
- Kassir operatsiyalari
- Mijozlar bazasi

**Tavsiya etilgan modullar:**
- **Point of Sale (POS)** - kassir operatsiyalari
- **Sales** - savdo boshqaruvi
- **Inventory** - zaxiralar nazorati
- **Accounting** - buxgalteriya
- **Website** - online do'kon

**Narx:** $150-500/oy (5-15 foydalanuvchi)
**Joriy qilish vaqti:** 2-4 hafta
**ROI:** 4-8 oy

### 2. Xizmat ko'rsatish (5-30 xodim)

**Biznes ehtiyojlari:**
- Mijozlar bilan ishlash
- Loyihalar boshqaruvi
- Vaqt hisobi
- Hisob-fakturalar
- Xodimlar boshqaruvi

**Tavsiya etilgan modullar:**
- **CRM** - mijozlar boshqaruvi
- **Project** - loyihalar
- **Timesheet** - vaqt hisobi
- **Sales** - takliflar va shartnomalar
- **Accounting** - moliyaviy hisobot
- **HR** - xodimlar

**Narx:** $200-800/oy (5-25 foydalanuvchi)
**Joriy qilish vaqti:** 3-6 hafta
**ROI:** 6-12 oy

### 3. Kichik ishlab chiqarish (10-50 xodim)

**Biznes ehtiyojlari:**
- Ishlab chiqarish rejalashtirish
- Materiallar boshqaruvi
- Sifat nazorati
- Xaridlar boshqaruvi
- Moliyaviy hisobot

**Tavsiya etilgan modullar:**
- **Manufacturing** - ishlab chiqarish
- **Inventory** - zaxiralar va materiallar
- **Purchase** - xaridlar
- **Quality** - sifat nazorati
- **Sales** - savdo
- **Accounting** - buxgalteriya

**Narx:** $400-1,500/oy (10-50 foydalanuvchi)
**Joriy qilish vaqti:** 6-12 hafta
**ROI:** 8-15 oy

### 4. E-commerce biznes (3-25 xodim)

**Biznes ehtiyojlari:**
- Online do'kon
- Buyurtmalar boshqaruvi
- Yetkazib berish
- Mijozlar xizmati
- Marketing

**Tavsiya etilgan modullar:**
- **Website** - online do'kon
- **E-commerce** - savdo platformasi
- **Inventory** - zaxiralar
- **Sales** - buyurtmalar
- **CRM** - mijozlar
- **Email Marketing** - marketing

**Narx:** $250-750/oy (5-25 foydalanuvchi)
**Joriy qilish vaqti:** 4-8 hafta
**ROI:** 6-10 oy

## Bosqichma-bosqich joriy qilish rejasi

### 1-bosqich: Tahlil va rejalashtirish (1-2 hafta)

**Biznes jarayonlarini tahlil qilish:**
- Joriy jarayonlarni xaritalash
- Muammoli sohalarni aniqlash
- Maqsadlarni belgilash
- Success metrics tanlash

**Modullarni tanlash:**
- Asosiy ehtiyojlar ro'yxati
- Prioritetlar belgilash
- Budget rejalashtirish
- Timeline yaratish

**Jamoa tayyorlash:**
- Loyiha rahbarini tanlash
- Key users aniqlash
- O'qitish rejasini tuzish
- Change management strategiyasi

### 2-bosqich: Tizimni sozlash (2-4 hafta)

**Asosiy konfiguratsiya:**
\`\`\`python
# Kompaniya sozlamalari
company_data = {
    'name': 'Mening Biznesim',
    'street': 'Toshkent sh., Amir Temur ko\'chasi 1',
    'phone': '+998 90 123 45 67',
    'email': 'info@mybusiness.uz',
    'website': 'www.mybusiness.uz',
    'currency_id': 'UZS',  # O'zbek so'mi
    'country_id': 'UZ',    # O'zbekiston
}
\`\`\`

**Foydalanuvchilarni yaratish:**
- Admin foydalanuvchi
- Menejer foydalanuvchilari
- Oddiy foydalanuvchilar
- Ruxsatlarni sozlash

**Mahsulotlar katalogi:**
- Mahsulot kategoriyalari
- Mahsulotlar ma'lumotlari
- Narxlar va chegirmalar
- Yetkazib beruvchilar

### 3-bosqich: Ma'lumotlarni ko'chirish (1-2 hafta)

**Mijozlar ma'lumotlari:**
\`\`\`csv
name,email,phone,street,city
"Alisher Karimov","alisher@email.com","+998901234567","Yunusobod 1","Toshkent"
"Nodira Tosheva","nodira@email.com","+998901234568","Chilonzor 5","Toshkent"
\`\`\`

**Mahsulotlar ma'lumotlari:**
\`\`\`csv
name,default_code,list_price,standard_price,categ_id
"Laptop Dell","DELL001",5000000,4000000,"Elektronika"
"Telefon Samsung","SAM001",3000000,2500000,"Elektronika"
\`\`\`

**Zaxiralar holati:**
\`\`\`csv
product_code,quantity,location
"DELL001",10,"Asosiy ombor"
"SAM001",25,"Asosiy ombor"
\`\`\`

### 4-bosqich: Test va o'qitish (1-3 hafta)

**Test stsenariylari:**

**Savdo jarayoni:**
1. Yangi mijoz qo'shish
2. Taklif yaratish va yuborish
3. Taklifni tasdiqlash
4. Hisob-faktura yaratish
5. To'lov qabul qilish

**Ombor operatsiyalari:**
1. Mahsulot qabul qilish
2. Zaxiralar tekshirish
3. Mahsulot yetkazib berish
4. Inventarizatsiya

**Xodimlarni o'qitish:**
- Asosiy funksiyalar (4 soat)
- Maxsus vazifalar (8 soat)
- Amaliy mashqlar (4 soat)
- Savollar va javoblar (2 soat)

### 5-bosqich: Ishga tushirish (1 hafta)

**Go-live tayyorligi:**
- Barcha ma'lumotlar import qilingan
- Xodimlar o'qitilgan
- Test muvaffaqiyatli o'tdi
- Backup yaratilgan
- Support rejasi tayyor

**Birinchi kun:**
- Intensiv qo'llab-quvvatlash
- Tezkor muammo hal qilish
- Foydalanuvchilar feedback i
- Performance monitoring

## Xarajatlar va ROI hisoblash

### Kichik biznes uchun xarajatlar (10 foydalanuvchi):

**Yillik xarajatlar:**
- Odoo Enterprise: $3,732/yil (10 × $31.10 × 12)
- Joriy qilish: $15,000 (bir martalik)
- O'qitish: $3,000 (bir martalik)
- Qo'llab-quvvatlash: $2,000/yil
- **Birinchi yil jami: $23,732**
- **Keyingi yillar: $5,732/yil**

### Kutilgan foyda va tejamkorlik:

**Vaqtni tejash:**
- Manual jarayonlar: 20 soat/hafta → 5 soat/hafta
- Tejamkorlik: 15 soat/hafta × 50 hafta × $10/soat = $7,500/yil

**Xatolarni kamaytirish:**
- Hisob-faktura xatolari: 5% → 0.5%
- Inventory xatolari: 10% → 2%
- Tejamkorlik: $15,000/yil

**Samaradorlikni oshirish:**
- Savdo jarayonlari 30% tezroq
- Mijozlar xizmati 40% yaxshi
- Qo'shimcha daromad: $25,000/yil

**Jami yillik foyda: $47,500**
**ROI birinchi yil: ($47,500 - $23,732) / $23,732 = 100%**

## Muvaffaqiyat omillari

### 1. To'g'ri rejalashtirish

**Realistic timeline:**
- Shoshilmaslik
- Yetarli vaqt ajratish
- Bosqichma-bosqich yondashuv
- Buffer vaqt qoldirish

**Aniq maqsadlar:**
- Measurable goals
- Success criteria
- KPI lar belgilash
- Regular review

### 2. Xodimlarni jalb qilish

**Change management:**
- Xodimlarni jalb qilish
- Foydalanuvchilar feedback i
- Resistance management
- Success stories sharing

**Yetarli o'qitish:**
- Hands-on training
- Real scenarios
- Continuous support
- Documentation

### 3. Professional yordam

**Tajribali konsultant:**
- Odoo expertise
- Industry knowledge
- Best practices
- Technical support

**Local support:**
- O'zbek tilida qo'llab-quvvatlash
- Mahalliy biznes tushunchasi
- Tez javob berish
- On-site support

## Keng tarqalgan xatolar va ulardan qochish

### 1. Scope creep
**Xato:** Loyiha davomida yangi talablar qo'shish
**Yechim:** Aniq scope belgilash va o'zgarishlarni nazorat qilish

### 2. Yetarli o'qitish qilmaslik
**Xato:** Xodimlarni kam o'qitish
**Yechim:** Comprehensive training program

### 3. Ma'lumotlar sifatiga e'tibor bermaslik
**Xato:** Noto'g'ri ma'lumotlarni import qilish
**Yechim:** Ma'lumotlarni tozalash va tekshirish

### 4. Realistic bo'lmagan kutishlar
**Xato:** Juda tez natija kutish
**Yechim:** Realistic timeline va expectations

## Success stories - O'zbek kichik biznes

### Case 1: "Zamonaviy Mebel" (15 xodim)
**Biznes:** Mebel ishlab chiqarish va savdo
**Muammo:** Manual buyurtmalar, inventory tracking
**Yechim:** Odoo Manufacturing + Sales + Inventory
**Natijalar (6 oy ichida):**
- Buyurtmalar hajmi 40% oshdi
- Production time 25% qisqardi
- Customer satisfaction 50% yaxshilandi
- Profit margin 20% oshdi

### Case 2: "IT Solutions" (8 xodim)
**Biznes:** IT xizmatlari va konsalting
**Muammo:** Project tracking, time management
**Yechim:** Odoo Project + CRM + Timesheet
**Natijalar (4 oy ichida):**
- Project profitability 35% oshdi
- Client retention 60% yaxshilandi
- Time tracking accuracy 95%
- Revenue growth 30%

### Case 3: "Fresh Market" (12 xodim)
**Biznes:** Oziq-ovqat savdo
**Muammo:** Inventory management, POS
**Yechim:** Odoo POS + Inventory + Accounting
**Natijalar (3 oy ichida):**
- Inventory accuracy 98%
- Checkout time 50% qisqardi
- Daily sales 25% oshdi
- Waste reduction 40%

## Kelajak o'sish strategiyasi

### Bosqichma-bosqich kengaytirish:

**1-yil:** Asosiy modullar
- Sales, Inventory, Accounting
- 5-10 foydalanuvchi
- Basic functionality

**2-yil:** Qo'shimcha modullar
- CRM, Project, HR
- 10-20 foydalanuvchi
- Advanced features

**3-yil:** Advanced funksiyalar
- Manufacturing, E-commerce
- 20-50 foydalanuvchi
- Custom development

### Yangi imkoniyatlar:

**E-commerce expansion:**
- Online do'kon qo'shish
- Digital marketing
- Customer portal
- Mobile app

**Automation:**
- Workflow automation
- Email marketing
- Inventory automation
- Reporting automation

## Xulosa va tavsiyalar

### Kichik biznes uchun Odoo ERP afzalliklari:

1. **Tejamkorlik** - minimal investitsiya, maksimal natija
2. **Soddalik** - oson o'rganish va foydalanish
3. **Moslashuvchanlik** - biznes o'sishi bilan kengayadi
4. **To'liq funksionallik** - barcha kerakli modullar
5. **Professional ko'rinish** - katta kompaniya kabi
6. **Tez joriy qilish** - 4-12 hafta ichida
7. **Yuqori ROI** - 6-12 oy ichida qaytadi

### Bizning tavsiyamiz:

**Kichik biznes uchun Odoo ERP - eng yaxshi tanlov!**

1. **Community Edition bilan boshlang** - bepul sinab ko'ring
2. **Asosiy modullar bilan start qiling** - Sales, Inventory, Accounting
3. **Professional yordam oling** - tajribali konsultant bilan ishlang
4. **Bosqichma-bosqich kengaytiring** - biznes o'sishi bilan
5. **Xodimlarni yaxshi o'qiting** - success kafolati

Bizning jamoamiz kichik biznes uchun Odoo ERP ni muvaffaqiyatli joriy qilishda keng tajribaga ega.

**Bugun biz bilan bog'laning va o'z kichik biznesingizni yangi bosqichga olib chiqing!**

**Bepul konsultatsiya va demo uchun: +998 90 123 45 67**
  `,
  },
  "odoo-erp-modullar-vazifalari": {
    title: "Odoo ERP modullar va ularning vazifalari",
    date: "2024-12-10",
    image: "/images/odoo-modules.png",
    author: "Akbarshohdev",
    readTime: "7 daqiqa",
    description: "Odoo ERP modullari va ularning vazifalari haqida batafsil.",
    keywords: ["Odoo ERP", "modullar", "vazifalar"],
    content: `
# Odoo ERP modullar va ularning vazifalari

Odoo ERP ning asosiy kuchi uning modulli tuzilmasida. Har bir modul ma'lum biznes jarayonini boshqaradi va boshqa modullar bilan mukammal integratsiya qiladi. Ushbu qo'llanmada barcha asosiy modullar va ularning vazifalari batafsil ko'rib chiqiladi.

[IMAGE:odoo-modules]

## Odoo modullar tizimi

### Modulli arxitektura afzalliklari:

**1. Moslashuvchanlik:**
- Faqat kerakli modullarni o'rnatish
- Bosqichma-bosqich kengaytirish
- Custom modullar yaratish
- Third-party modullar qo'shish

**2. Tejamkorlik:**
- Faqat ishlatilgan modullar uchun to'lov
- Minimal system resources
- Optimized performance
- Reduced complexity

**3. Oson boshqaruv:**
- Har bir modul alohida sozlanadi
- Independent updates
- Modular permissions
- Simplified maintenance

## Core Business Modules (Asosiy biznes modullari)

### 1. Sales Management (Savdo boshqaruvi)

**Asosiy funksiyalar:**
- Lead va opportunity management
- Customer database (CRM)
- Quotations va proposals
- Sales orders
- Delivery management
- Invoicing
- Sales analytics

**Key features:**
\`\`\`python
# Sales order yaratish
sale_order = self.env['sale.order'].create({
    'partner_id': customer_id,
    'order_line': [(0, 0, {
        'product_id': product_id,
        'product_uom_qty': 5,
        'price_unit': 100.0
    })]
})
\`\`\`

**Kimlar uchun kerak:**
- Savdo jamoasi
- Sales managerlar
- Customer service
- Marketing team

**Integratsiya:**
- Inventory (zaxiralar)
- Accounting (hisob-fakturalar)
- CRM (mijozlar)
- Website (online orders)

### 2. Purchase Management (Xarid boshqaruvi)

**Asosiy funksiyalar:**
- Vendor management
- Request for Quotation (RFQ)
- Purchase orders
- Goods receipt
- Vendor bills
- Purchase analytics

**Workflow:**
1. Purchase request yaratish
2. RFQ yuborish
3. Vendor quotations taqqoslash
4. Purchase order tasdiqlash
5. Goods receipt
6. Invoice processing
7. Payment

**Kimlar uchun kerak:**
- Procurement team
- Warehouse staff
- Finance department
- Management

### 3. Inventory Management (Ombor boshqaruvi)

**Asosiy funksiyalar:**
- Stock tracking
- Multi-location management
- Barcode scanning
- Serial numbers va lots
- Inventory valuation
- Reordering rules
- Cycle counting

**Advanced features:**
- Multi-warehouse
- Drop shipping
- Cross-docking
- Batch picking
- Wave planning

**Kimlar uchun kerak:**
- Warehouse managers
- Inventory controllers
- Operations team
- Logistics coordinators

### 4. Accounting (Buxgalteriya)

**Asosiy funksiyalar:**
- Chart of accounts
- Journal entries
- Customer invoices
- Vendor bills
- Bank reconciliation
- Financial reports
- Tax management

**Financial reports:**
- Profit & Loss
- Balance Sheet
- Cash Flow
- Trial Balance
- Aged Receivables/Payables

**Kimlar uchun kerak:**
- Accountants
- Finance managers
- CFO
- Auditors

## Manufacturing Modules (Ishlab chiqarish modullari)

### 1. Manufacturing (Asosiy ishlab chiqarish)

**Asosiy funksiyalar:**
- Bill of Materials (BOM)
- Manufacturing orders
- Work centers
- Routing operations
- Quality control
- Capacity planning

**Production workflow:**
\`\`\`python
# Manufacturing order yaratish
mo = self.env['mrp.production'].create({
    'product_id': product_id,
    'product_qty': 100,
    'bom_id': bom_id,
    'location_src_id': raw_location_id,
    'location_dest_id': finished_location_id
})
\`\`\`

### 2. Quality Management (Sifat boshqaruvi)

**Asosiy funksiyalar:**
- Quality control points
- Quality checks
- Quality alerts
- Non-conformance tracking
- Corrective actions
- Quality certificates

**Quality workflow:**
1. Quality plan yaratish
2. Control points belgilash
3. Quality checks bajarish
4. Non-conformance tracking
5. Corrective actions
6. Quality reports

### 3. Maintenance (Texnik xizmat)

**Asosiy funksiyalar:**
- Equipment management
- Preventive maintenance
- Maintenance requests
- Work orders
- Spare parts management
- Maintenance analytics

**Maintenance types:**
- Preventive maintenance
- Corrective maintenance
- Predictive maintenance
- Emergency maintenance

## Service Modules (Xizmat modullari)

### 1. Project Management (Loyihalar boshqaruvi)

**Asosiy funksiyalar:**
- Project planning
- Task management
- Gantt charts
- Resource allocation
- Time tracking
- Project profitability

**Project workflow:**
1. Project yaratish
2. Tasks belgilash
3. Resources assign qilish
4. Progress tracking
5. Time logging
6. Invoicing
7. Project closure

### 2. Timesheet (Vaqt hisobi)

**Asosiy funksiyalar:**
- Time tracking
- Activity logging
- Project time allocation
- Employee productivity
- Billable hours
- Timesheet validation

**Integration benefits:**
- Project profitability
- Employee performance
- Client billing
- Resource planning

### 3. Field Service (Maydon xizmati)

**Asosiy funksiyalar:**
- Service requests
- Technician scheduling
- Mobile app
- Parts management
- Customer communication
- Service analytics

**Mobile capabilities:**
- Offline work
- GPS tracking
- Photo capture
- Digital signatures
- Real-time updates

## HR Modules (Kadrlar modullari)

### 1. Human Resources (Kadrlar boshqaruvi)

**Asosiy funksiyalar:**
- Employee database
- Organization chart
- Employee contracts
- Leave management
- Performance evaluation
- HR analytics

**Employee lifecycle:**
1. Recruitment
2. Onboarding
3. Performance management
4. Career development
5. Offboarding

### 2. Payroll (Ish haqi)

**Asosiy funksiyalar:**
- Salary calculation
- Tax computation
- Social security
- Payslips generation
- Bank transfers
- Payroll reports

**Localization:**
- O'zbekiston soliq qonunlari
- Social fund calculations
- Local reporting requirements

### 3. Recruitment (Ishga qabul)

**Asosiy funksiyalar:**
- Job positions
- Applications management
- Interview scheduling
- Candidate evaluation
- Hiring process
- Recruitment analytics

## Website va E-commerce Modules

### 1. Website Builder (Veb-sayt yaratuvchi)

**Asosiy funksiyalar:**
- Drag-and-drop editor
- Responsive themes
- SEO optimization
- Content management
- Blog functionality
- Contact forms

**Features:**
- Multi-language support
- Custom domains
- SSL certificates
- CDN integration
- Analytics integration

### 2. E-commerce (Elektron tijorat)

**Asosiy funksiyalar:**
- Online catalog
- Shopping cart
- Payment gateways
- Order management
- Customer accounts
- E-commerce analytics

**Payment integrations:**
- PayPal
- Stripe
- Local payment gateways
- Bank transfers
- Cash on delivery

### 3. Point of Sale (POS)

**Asosiy funksiyalar:**
- Touch interface
- Barcode scanning
- Payment processing
- Receipt printing
- Inventory integration
- Offline mode

**Hardware support:**
- Barcode scanners
- Receipt printers
- Cash drawers
- Customer displays
- Scales

## Marketing Modules (Marketing modullari)

### 1. CRM (Mijozlar bilan aloqalar)

**Asosiy funksiyalar:**
- Lead management
- Opportunity tracking
- Customer database
- Communication history
- Sales pipeline
- CRM analytics

**Lead lifecycle:**
1. Lead generation
2. Qualification
3. Opportunity creation
4. Proposal
5. Negotiation
6. Closing
7. Post-sale support

### 2. Email Marketing (Email marketing)

**Asosiy funksiyalar:**
- Email campaigns
- Mailing lists
- Email templates
- A/B testing
- Campaign analytics
- Automation workflows

**Campaign types:**
- Newsletter
- Promotional emails
- Event invitations
- Follow-up sequences
- Drip campaigns

### 3. Marketing Automation (Marketing avtomatizatsiyasi)

**Asosiy funksiyalar:**
- Lead scoring
- Automated workflows
- Behavioral triggers
- Customer segmentation
- Campaign automation
- ROI tracking

## Specialized Modules (Maxsus modullar)

### 1. Helpdesk (Yordam markazi)

**Asosiy funksiyalar:**
- Ticket management
- SLA tracking
- Knowledge base
- Customer portal
- Team collaboration
- Helpdesk analytics

**Ticket workflow:**
1. Ticket creation
2. Assignment
3. Investigation
4. Resolution
5. Customer feedback
6. Closure

### 2. Events (Tadbirlar)

**Asosiy funksiyalar:**
- Event planning
- Registration management
- Ticket sales
- Attendee tracking
- Event website
- Event analytics

### 3. Surveys (So'rovnomalar)

**Asosiy funksiyalar:**
- Survey creation
- Question types
- Response collection
- Data analysis
- Report generation
- Survey sharing

## Integration va API Modules

### 1. Studio (No-code customization)

**Asosiy funksiyalar:**
- Drag-and-drop customization
- Custom fields
- Custom views
- Automated actions
- Custom reports
- Workflow automation

### 2. IoT Box (IoT integratsiyasi)

**Asosiy funksiyalar:**
- Hardware integration
- Sensor data collection
- Real-time monitoring
- Automated triggers
- Device management
- IoT analytics

### 3. API va Webhooks

**Asosiy funksiyalar:**
- REST API
- XML-RPC
- Webhooks
- Third-party integrations
- Custom connectors
- Data synchronization

## Modullarni tanlash strategiyasi

### Boshlang'ich to'plam (Starter pack):
1. **Sales** - savdo boshqaruvi
2. **Inventory** - zaxiralar
3. **Accounting** - buxgalteriya
4. **CRM** - mijozlar

### O'rta biznes to'plami:
5. **Purchase** - xaridlar
6. **Project** - loyihalar
7. **HR** - kadrlar
8. **Website** - veb-sayt

### Kengaytirilgan to'plam:
9. **Manufacturing** - ishlab chiqarish
10. **Quality** - sifat nazorati
11. **Maintenance** - texnik xizmat
12. **Field Service** - maydon xizmati

### Enterprise to'plam:
13. **Marketing Automation**
14. **Helpdesk**
15. **IoT Box**
16. **Studio**

## Modullar o'rtasida integratsiya

### Automatic data flow:
- Sales → Inventory → Accounting
- Purchase → Inventory → Accounting
- Manufacturing → Inventory → Accounting
- Project → Timesheet → Sales → Accounting

### Real-time updates:
- Inventory levels
- Financial data
- Customer information
- Production status

## Custom modullar yaratish

### Development process:
\`\`\`python
# Custom module structure
{
    'name': 'Custom Sales Enhancement',
    'version': '17.0.1.0.0',
    'depends': ['sale', 'stock'],
    'data': [
        'views/sale_order_views.xml',
        'security/ir.model.access.csv',
    ],
    'installable': True,
}
\`\`\`

### Best practices:
- Inherit existing models
- Follow Odoo conventions
- Proper security rules
- Comprehensive testing
- Documentation

## Xulosa

Odoo ERP modullar tizimi:

1. **30+ modullar** - barcha biznes ehtiyojlari uchun
2. **Seamless integration** - modullar o'rtasida
3. **Scalable architecture** - o'sish bilan kengayadi
4. **Customizable** - maxsus ehtiyojlar uchun
5. **Cost-effective** - faqat kerakli modullar uchun to'lov

### Bizning tavsiyamiz:

1. **Asosiy modullar bilan boshlang** - Sales, Inventory, Accounting
2. **Bosqichma-bosqich qo'shing** - biznes o'sishi bilan
3. **Integration ni hisobga oling** - modullar o'rtasida
4. **Custom development** - maxsus ehtiyojlar uchun
5. **Professional yordam** - to'g'ri tanlash uchun

Bizning jamoamiz sizga eng mos modullarni tanlash va muvaffaqiyatli joriy qilishda yordam berishga tayyor.

**Bugun biz bilan bog'laning va o'z biznesingiz uchun ideal modullar to'plamini yarating!**
  `,
  },
  "odoo-erp-xavfsizlik-himoya": {
    title: "Odoo ERP xavfsizligi va ma'lumotlar himoyasi",
    date: "2024-12-05",
    image: "/images/odoo-security.png",
    author: "Akbarshohdev",
    readTime: "6 daqiqa",
    description: "Odoo ERP tizimida ma'lumotlar xavfsizligi va himoyasi haqida.",
    keywords: ["Odoo ERP", "xavfsizlik", "ma'lumotlar himoyasi"],
    content: `
# Odoo ERP xavfsizligi va ma'lumotlar himoyasi

Zamonaviy biznes dunyosida ma'lumotlar xavfsizligi eng muhim masalalardan biri hisoblanadi. Odoo ERP tizimi yuqori darajadagi xavfsizlik choralarini taqdim etadi va biznes ma'lumotlarini ishonchli himoya qiladi. Ushbu qo'llanmada Odoo ERP ning xavfsizlik imkoniyatlari batafsil ko'rib chiqiladi.

[IMAGE:odoo-security]

## Odoo ERP xavfsizlik arxitekturasi

### Ko'p qatlamli xavfsizlik (Multi-layer Security)

**1. Infratuzilma darajasi:**
- Secure data centers
- Network firewalls
- DDoS protection
- Physical security
- Redundant systems

**2. Platform darajasi:**
- Operating system security
- Database encryption
- Application firewalls
- SSL/TLS encryption
- Regular security updates

**3. Ilova darajasi:**
- User authentication
- Role-based access control
- Data validation
- SQL injection protection
- XSS protection

**4. Ma'lumotlar darajasi:**
- Field-level encryption
- Data masking
- Backup encryption
- Audit trails
- Data retention policies

## Foydalanuvchilar xavfsizligi

### 1. Authentication (Autentifikatsiya)

**Password policies:**
- Minimal uzunlik talablari
- Murakkablik talablari
- Password expiration
- Password history
- Account lockout policies

\`\`\`python
# Password policy sozlamalari
password_policy = {
    'min_length': 8,
    'require_uppercase': True,
    'require_lowercase': True,
    'require_numbers': True,
    'require_symbols': True,
    'expiration_days': 90,
    'history_count': 5
}
\`\`\`

**Multi-factor Authentication (MFA):**
- SMS verification
- Email verification
- Google Authenticator
- Hardware tokens
- Biometric authentication

### 2. Authorization (Avtorizatsiya)

**Role-based Access Control (RBAC):**
- Predefined roles
- Custom roles
- Granular permissions
- Inheritance hierarchy
- Dynamic permissions

**User groups:**
\`\`\`python
# Foydalanuvchi guruhlarini yaratish
sales_group = self.env.ref('sales_team.group_sale_salesman')
manager_group = self.env.ref('sales_team.group_sale_manager')

# Foydalanuvchiga guruh berish
user.groups_id = [(4, sales_group.id)]
\`\`\`

**Access rights:**
- Read permissions
- Write permissions
- Create permissions
- Delete permissions
- Execute permissions

### 3. Session Management

**Session security:**
- Session timeout
- Concurrent session limits
- Session encryption
- Secure cookies
- Session invalidation

**Login monitoring:**
- Failed login attempts
- Suspicious activity detection
- IP address tracking
- Device fingerprinting
- Geographic restrictions

## Ma'lumotlar xavfsizligi

### 1. Data Encryption (Ma'lumotlar shifrlash)

**Encryption at rest:**
- Database encryption
- File system encryption
- Backup encryption
- Archive encryption
- Key management

**Encryption in transit:**
- SSL/TLS protocols
- HTTPS enforcement
- API encryption
- Email encryption
- VPN connections

\`\`\`python
# Ma'lumotlarni shifrlash
from cryptography.fernet import Fernet

def encrypt_sensitive_data(data):
    key = Fernet.generate_key()
    cipher_suite = Fernet(key)
    encrypted_data = cipher_suite.encrypt(data.encode())
    return encrypted_data, key
\`\`\`

### 2. Data Privacy (Ma'lumotlar maxfiyligi)

**GDPR Compliance:**
- Data subject rights
- Consent management
- Data portability
- Right to be forgotten
- Privacy by design

**Data classification:**
- Public data
- Internal data
- Confidential data
- Restricted data
- Personal data

### 3. Data Loss Prevention (DLP)

**DLP policies:**
- Data identification
- Content inspection
- Policy enforcement
- Incident response
- Reporting and analytics

**Data protection measures:**
- Copy protection
- Print restrictions
- Download limitations
- Email filtering
- USB blocking

## Network xavfsizligi

### 1. Network Architecture

**Secure network design:**
- DMZ implementation
- Network segmentation
- VLAN separation
- Firewall rules
- Intrusion detection

**VPN access:**
- Site-to-site VPN
- Remote access VPN
- SSL VPN
- IPSec tunnels
- Multi-factor authentication

### 2. API Security

**API protection:**
- Authentication tokens
- Rate limiting
- Input validation
- Output filtering
- API versioning

\`\`\`python
# API xavfsizlik sozlamalari
api_security = {
    'authentication': 'OAuth2',
    'rate_limit': '1000/hour',
    'ssl_required': True,
    'input_validation': True,
    'output_filtering': True
}
\`\`\`

**API monitoring:**
- Request logging
- Error tracking
- Performance monitoring
- Security alerts
- Usage analytics

## Compliance va standartlar

### 1. International Standards

**ISO 27001:**
- Information security management
- Risk assessment
- Security controls
- Continuous improvement
- Certification process

**SOC 2:**
- Security controls
- Availability controls
- Processing integrity
- Confidentiality controls
- Privacy controls

### 2. Industry Compliance

**Financial services:**
- PCI DSS compliance
- SOX compliance
- Basel III requirements
- Anti-money laundering
- Know your customer

**Healthcare:**
- HIPAA compliance
- FDA regulations
- Medical device security
- Patient data protection
- Audit requirements

### 3. Regional Compliance

**O'zbekiston qonunlari:**
- Ma'lumotlar himoyasi qonuni
- Elektron hujjat aylanishi
- Kriptografik himoya
- Shaxsiy ma'lumotlar himoyasi
- Audit talablari

## Backup va Disaster Recovery

### 1. Backup Strategy

**Backup types:**
- Full backups
- Incremental backups
- Differential backups
- Snapshot backups
- Cloud backups

**Backup schedule:**
\`\`\`python
# Backup rejasi
backup_schedule = {
    'full_backup': 'weekly',
    'incremental_backup': 'daily',
    'snapshot_backup': 'hourly',
    'retention_period': '90_days',
    'offsite_backup': True
}
\`\`\`

**Backup testing:**
- Regular restore tests
- Recovery time testing
- Data integrity checks
- Backup validation
- Documentation updates

### 2. Disaster Recovery

**Recovery planning:**
- Business impact analysis
- Recovery time objectives (RTO)
- Recovery point objectives (RPO)
- Recovery procedures
- Communication plans

**High availability:**
- Redundant systems
- Load balancing
- Failover mechanisms
- Geographic distribution
- Real-time replication

## Monitoring va Audit

### 1. Security Monitoring

**Real-time monitoring:**
- System performance
- Security events
- User activities
- Network traffic
- Application logs

**SIEM integration:**
- Log aggregation
- Event correlation
- Threat detection
- Incident response
- Forensic analysis

### 2. Audit Trails

**Comprehensive logging:**
- User actions
- Data changes
- System events
- Access attempts
- Configuration changes

\`\`\`python
# Audit log yaratish
audit_log = {
    'user_id': user.id,
    'action': 'record_update',
    'model': 'sale.order',
    'record_id': order.id,
    'timestamp': datetime.now(),
    'ip_address': request.httprequest.remote_addr,
    'changes': field_changes
}
\`\`\`

**Audit reporting:**
- Compliance reports
- Security reports
- User activity reports
- System health reports
- Trend analysis

## Incident Response

### 1. Incident Management

**Incident response plan:**
- Incident identification
- Initial response
- Investigation procedures
- Containment strategies
- Recovery procedures

**Response team:**
- Incident commander
- Technical specialists
- Communication coordinator
- Legal representative
- Management liaison

### 2. Forensic Analysis

**Digital forensics:**
- Evidence collection
- Data preservation
- Analysis procedures
- Chain of custody
- Expert testimony

**Incident documentation:**
- Timeline reconstruction
- Impact assessment
- Root cause analysis
- Lessons learned
- Process improvements

## Odoo Cloud xavfsizligi

### 1. Odoo.sh Security

**Infrastructure security:**
- AWS/Google Cloud security
- ISO 27001 certified data centers
- 24/7 monitoring
- Automatic updates
- DDoS protection

**Data protection:**
- Encryption at rest and in transit
- Regular backups
- Geographic redundancy
- Access controls
- Compliance certifications

### 2. SaaS Security Model

**Shared responsibility:**
- Odoo responsibilities
- Customer responsibilities
- Security configurations
- User management
- Data governance

**Service level agreements:**
- Uptime guarantees
- Security commitments
- Incident response times
- Support availability
- Compliance maintenance

## On-premise xavfsizlik

### 1. Self-hosted Security

**Infrastructure requirements:**
- Secure server configuration
- Network security
- Operating system hardening
- Database security
- Application security

**Security maintenance:**
- Regular updates
- Security patches
- Vulnerability assessments
- Penetration testing
- Security audits

### 2. Hybrid Deployment

**Hybrid security:**
- On-premise sensitive data
- Cloud-based applications
- Secure connectivity
- Data synchronization
- Unified security policies

## Best Practices

### 1. Security Configuration

**Initial setup:**
- Change default passwords
- Configure SSL certificates
- Set up firewalls
- Enable logging
- Configure backups

**Ongoing maintenance:**
- Regular updates
- Security reviews
- User access reviews
- Policy updates
- Training programs

### 2. User Training

**Security awareness:**
- Password security
- Phishing protection
- Social engineering
- Data handling
- Incident reporting

**Regular training:**
- Security policies
- Procedure updates
- Threat awareness
- Best practices
- Compliance requirements

## Risk Assessment

### 1. Security Risks

**Common threats:**
- Cyber attacks
- Data breaches
- Insider threats
- System failures
- Natural disasters

**Risk mitigation:**
- Preventive controls
- Detective controls
- Corrective controls
- Recovery procedures
- Insurance coverage

### 2. Business Continuity

**Continuity planning:**
- Business impact analysis
- Risk assessment
- Recovery strategies
- Testing procedures
- Plan maintenance

## Xulosa

Odoo ERP xavfsizlik xususiyatlari:

1. **Ko'p qatlamli himoya** - infratuzilmadan ilovagacha
2. **Compliance support** - xalqaro standartlar
3. **Advanced authentication** - MFA va SSO
4. **Data encryption** - rest va transit holatida
5. **Comprehensive monitoring** - real-time nazorat
6. **Disaster recovery** - business continuity
7. **Regular updates** - xavfsizlik patch lari

### Bizning tavsiyalarimiz:

1. **Security assessment** - joriy holat tahlili
2. **Policy development** - xavfsizlik siyosatlari
3. **User training** - xodimlarni o'qitish
4. **Regular audits** - muntazam tekshiruvlar
5. **Incident response** - hodisalarga javob rejasi
6. **Continuous improvement** - doimiy yaxshilash

**Odoo ERP - bu nafaqat kuchli biznes tizimi, balki yuqori darajada xavfsiz platforma.**

Bizning jamoamiz sizga Odoo ERP ni xavfsiz tarzda joriy qilish va boshqarishda yordam berishga tayyor.

**Bugun biz bilan bog'laning va o'z biznesingizni xavfsiz raqamlashtiring!**

**Xavfsizlik konsultatsiyasi uchun: +998 90 123 45 67**
  `,
  },
}

// Custom component to render content with images
function ContentRenderer({ content }: { content: string }) {
  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []

    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-8 first:mt-0">
            {line.substring(2)}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
            {line.substring(3)}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            {line.substring(4)}
          </h3>
        )
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={index} className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {line.substring(2, line.length - 2)}
          </p>
        )
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
            {line.substring(2)}
          </li>
        )
      } else if (line.trim() === '') {
        elements.push(<div key={index} className="h-4" />)
      } else {
        elements.push(
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-base">
            {line}
          </p>
        )
      }
    })

    return elements
  }

  return (
    <article className="prose prose-lg max-w-none">
      <div className="space-y-6">
        {renderContent(content)}
      </div>
    </article>
  )
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { theme, setTheme } = useTheme()
  const [copied, setCopied] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-gray-900 dark:text-white">
            Akbarshohdev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Biz haqimizda
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Aloqa
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Mavzuni o'zgartirish">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Blogga qaytish
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8 sm:mb-12">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-500 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("uz-UZ", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>O'qish vaqti</span>
            </div>
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.description,
                    url: window.location.href,
                  })
                } else {
                  await navigator.clipboard.writeText(window.location.href)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                }
              }}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Ulashish
            </Button>
            {copied && (
              <span className="text-green-600 dark:text-green-400 text-sm ml-2">Link nusxalandi!</span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-8 sm:mb-12">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg max-w-2xl mx-auto prose-gray dark:prose-invert bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 px-4 sm:px-8 py-6 sm:py-8 mb-8 !gap-y-3">
          <ContentRenderer content={post.content} />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Maqola foydali bo'ldimi?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Odoo ERP bo'yicha qo'shimcha savollaringiz bormi? Biz bilan bog'laning!
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100">
                Bog'lanish
              </Button>
            </Link>
          </div>
        </footer>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800 mt-16 sm:mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <p className="text-sm text-gray-500 dark:text-gray-500">© 2025 saadyucuf.uz</p>
        </div>
      </footer>
    </div>
  )
}
