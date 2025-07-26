"use client"

import Link from "next/link"
import { ArrowLeft, Moon, Sun, Calendar, Clock, User, BookOpen, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { MobileNav } from "@/components/mobile-nav"
import { Metadata } from "next"

const blogPosts = [
  {
    id: 1,
    title: "Odoo ERP nima va biznes uchun qanday foydali?",
    description:
      "Odoo ERP tizimi haqida to'liq ma'lumot, uning imkoniyatlari va biznes jarayonlarini qanday yaxshilashi haqida.",
    date: "2025-01-15",
    slug: "odoo-erp-nima-va-biznes-uchun-foydali",
    author: "Akbarshohdev",
    readTime: "8 daqiqa",
    category: "Odoo ERP",
    featured: true,
  },
  {
    id: 2,
    title: "Odoo ERP joriy qilish: Bosqichma-bosqich qo'llanma",
    description: "Odoo ERP tizimini muvaffaqiyatli joriy qilish uchun to'liq qo'llanma va eng yaxshi amaliyotlar.",
    date: "2025-01-10",
    slug: "odoo-erp-joriy-qilish-qollanma",
    author: "Akbarshohdev",
    readTime: "12 daqiqa",
    category: "Joriy qilish",
    featured: false,
  },
  {
    id: 3,
    title: "Odoo vs SAP vs Oracle: ERP tizimlarni solishtiruv",
    description:
      "Yetakchi ERP yechimlari o'rtasida batafsil taqqoslash va qaysi birini tanlash kerakligi haqida maslahat.",
    date: "2025-01-05",
    slug: "odoo-sap-oracle-solishtiruv",
    author: "Akbarshohdev",
    readTime: "10 daqiqa",
    category: "Solishtiruv",
    featured: false,
  },
  {
    id: 4,
    title: "Odoo ERP narxlari va to'lov rejalari 2025",
    description: "Odoo ERP tizimining turli versiyalari, narxlari va biznes uchun eng mos variantni tanlash.",
    date: "2024-12-28",
    slug: "odoo-erp-narxlari-2025",
    author: "Akbarshohdev",
    readTime: "6 daqiqa",
    category: "Narxlar",
    featured: false,
  },
  {
    id: 5,
    title: "Odoo ERP ning asosiy afzalliklari va imkoniyatlari",
    description: "Odoo ERP tizimining biznes uchun taqdim etadigan asosiy afzallik va imkoniyatlari haqida batafsil.",
    date: "2024-12-20",
    slug: "odoo-erp-afzalliklari-imkoniyatlari",
    author: "Akbarshohdev",
    readTime: "7 daqiqa",
    category: "Afzalliklar",
    featured: false,
  },
  {
    id: 6,
    title: "Kichik biznes uchun Odoo ERP: To'liq qo'llanma",
    description: "Kichik va o'rta biznes uchun Odoo ERP tizimini tanlash va joriy qilish bo'yicha maslahatlar.",
    date: "2024-12-15",
    slug: "kichik-biznes-uchun-odoo-erp",
    author: "Akbarshohdev",
    readTime: "9 daqiqa",
    category: "Kichik biznes",
    featured: false,
  },
  {
    id: 7,
    title: "Odoo ERP modullar va ularning vazifalari",
    description: "Odoo ERP tizimidagi turli modullar va ularning biznes jarayonlaridagi roli haqida.",
    date: "2024-12-10",
    slug: "odoo-erp-modullar-vazifalari",
    author: "Akbarshohdev",
    readTime: "11 daqiqa",
    category: "Modullar",
    featured: false,
  },
  {
    id: 8,
    title: "Odoo ERP xavfsizligi va ma'lumotlar himoyasi",
    description: "Odoo ERP tizimida ma'lumotlar xavfsizligi va himoya choralari haqida muhim ma'lumotlar.",
    date: "2024-12-05",
    slug: "odoo-erp-xavfsizlik-himoya",
    author: "Akbarshohdev",
    readTime: "8 daqiqa",
    category: "Xavfsizlik",
    featured: false,
  },
]

export default function BlogPage() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
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
            <Link href="/blog" className="text-gray-900 dark:text-white font-medium">
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
        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 sm:mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Bosh sahifaga qaytish
          </Link>
          
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Odoo ERP Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Odoo ERP joriy qilish va moslashtirish bo'yicha maqolalar, qo'llanmalar va eng yaxshi amaliyotlar.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Maqolalarni qidirish..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Barchasi
              </Button>
              <Button variant="outline" size="sm">
                Odoo ERP
              </Button>
              <Button variant="outline" size="sm">
                Joriy qilish
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <article key={post.id} className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-600">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                Taniqli maqola
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                {post.category}
              </span>
            </div>
            
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-3 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-lg">
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
            </Link>
          </article>
        ))}

        {/* All Posts - Compact Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Barcha maqolalar
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-200 p-5 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">
                    <User className="w-3 h-3 inline mr-1" />{post.author}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed text-sm line-clamp-3">
                    {post.description}
                  </p>
                </Link>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("uz-UZ", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="flex items-center gap-1 ml-2">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-xs font-medium">
                    O'qish <BookOpen className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-600">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Yangi maqolalardan xabardor bo'ling
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Odoo ERP bo'yicha eng so'nggi ma'lumotlar va yangiliklar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Obuna bo'lish
              </Button>
            </div>
          </div>
        </section>
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
