"use client"

import Image from "next/image"
import { Github, Linkedin, Send, Moon, Sun, ArrowRight, Calendar, Clock, User, BookOpen, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

// Blog postlar ma'lumotlari
const latestPosts = [
  {
    slug: "odoo-erp-nima-va-biznes-uchun-foydali",
    title: "Odoo ERP nima va biznes uchun qanday foydali?",
    description:
      "Zamonaviy biznes dunyosida muvaffaqiyat qozonish uchun samarali boshqaruv tizimlariga ega bo'lish zarur.",
    date: "2025-01-15",
    author: "Akbarshohdev",
    readTime: "8 daqiqa",
    category: "Odoo ERP",
    featured: true,
  },
  {
    slug: "odoo-erp-joriy-qilish-qollanma",
    title: "Odoo ERP joriy qilish: Bosqichma-bosqich qo'llanma",
    description:
      "Odoo ERP tizimini muvaffaqiyatli joriy qilish - bu puxta rejalashtirish, to'g'ri bajarish va doimiy qo'llab-quvvatlashni talab qiladigan murakkab jarayon.",
    date: "2025-01-10",
    author: "Akbarshohdev",
    readTime: "12 daqiqa",
    category: "Joriy qilish",
    featured: false,
  },
  {
    slug: "odoo-sap-oracle-solishtiruv",
    title: "Odoo vs SAP vs Oracle: ERP tizimlarni solishtiruv",
    description:
      "ERP tizimini tanlash har qanday biznes uchun strategik qaror hisoblanadi. Bugungi kunda bozorda ko'plab ERP yechimlari mavjud.",
    date: "2025-01-05",
    author: "Akbarshohdev",
    readTime: "10 daqiqa",
    category: "Solishtiruv",
    featured: false,
  },
]

// Xizmatlar ma'lumotlari
const services = [
  {
    icon: "🚀",
    title: "Joriy qilish",
    description: "Rejalashtirish bosqichidan to ishga tushirishgacha bo'lgan to'liq Odoo ERP joriy qilish.",
    features: [
      "Biznes jarayonlarini tahlil qilish",
      "Tizim arxitekturasini loyihalash",
      "Ma'lumotlarni migratsiya qilish",
      "Xodimlarni o'qitish"
    ]
  },
  {
    icon: "⚙️",
    title: "Moslashtirish",
    description: "Biznes ehtiyojlariga moslashtirilgan maxsus modullar va ish jarayonlari.",
    features: [
      "Maxsus modullar yaratish",
      "Ish jarayonlarini moslashtirish",
      "API integratsiyalari",
      "Interfeys dizayni"
    ]
  },
  {
    icon: "📈",
    title: "Optimizatsiya",
    description: "Tizim ishlashini optimizatsiya qilish va texnik xizmat ko'rsatish.",
    features: [
      "Ishlash tezligini oshirish",
      "Xavfsizlikni kuchaytirish",
      "Zaruriy yangilanishlar",
      "24/7 qo'llab-quvvatlash"
    ]
  },
]

export default function Component() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-2xl">
            <div className="mb-6 sm:mb-8">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Akbarshohdev Profili"
                width={80}
                height={80}
                className="rounded-full mb-4 sm:mb-6"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Odoo ERP mutaxassisi
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Men bizneslarni maxsus Odoo ERP yechimlari orqali raqamlashtirish va jarayonlarni optimallashtirishga
              yordam beraman. 1 yillik Odoo tajribasi va 3 yillik dasturiy ta'minot ishlab chiqish tajribasiga egaman.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  Bog'lanish
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://t.me/akbarshoh_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Telegram
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://t.me/akbarshoh_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 sm:py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Xizmatlarim
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Odoo ERP bo'yicha to'liq xizmatlar va maxsus yechimlar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Posts */}
        <section className="py-12 sm:py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                So'nggi maqolalar
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Odoo ERP bo'yicha eng so'nggi ma'lumotlar va qo'llanmalar
              </p>
            </div>
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Barchasini ko'rish →
            </Link>
          </div>

          <div className="space-y-8">
            {latestPosts.map((post, index) => (
              <article key={post.slug} className={`group ${index === 0 ? 'p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-600' : 'border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0'}`}>
                {index === 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                      Taniqli maqola
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                )}
                
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      {index !== 0 && (
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                            {post.category}
                          </span>
                        </div>
                      )}
                      
                      <h3 className={`font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-3 transition-colors ${index === 0 ? 'text-2xl' : 'text-xl sm:text-2xl'}`}>
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {post.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
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
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">O'qish</span>
                      <BookOpen className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Biznesingizni raqamlashtirishga tayyormisiz?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Odoo ERP tizimi orqali biznesingizni keyingi darajaga ko'taring. Bepul maslahat uchun biz bilan bog'laning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Bepul maslahat
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="w-full sm:w-auto">
                  Maqolalarni o'qish
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800 mt-16 sm:mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-500">© 2025 saadyucuf.uz</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://t.me/akbarshoh_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Telegram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
