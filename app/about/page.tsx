"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { MobileNav } from "@/components/mobile-nav"

export default function AboutPage() {
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
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link href="/about" className="text-gray-900 dark:text-white font-medium">
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
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 sm:mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Orqaga
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Biz haqimizda</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Akbarshohdev"
                width={200}
                height={200}
                className="rounded-full mb-4 sm:mb-6"
              />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center lg:text-left">
                Akbarshohdev
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-center lg:text-left">
                Odoo ERP mutaxassisi, Rakat systems
              </p>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">
                <p>📍 Toshkent, O'zbekiston</p>
                <p>📅 4 yillik tajriba</p>
                <p>💼 5+ Odoo loyihalar</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Salom</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                <p>
                  Men Akbarshohdev, hozirda Rakat systems kompaniyasida Odoo ERP mutaxassisi bo'lib ishlayman. 1 yillik
                  maxsus Odoo tajribasi va 3 yillik dasturiy ta'minot ishlab chiqish tajribasiga ega bo'lib, bizneslarni
                  Odoo ERP yechimlarini joriy qilish va moslashtirish orqali rivojlantirishga yordam beraman.
                </p>
                <p>
                  Mening texnologiyalar sohasidagi sayohatim 5 yil oldin boshlangan, va men kichik startaplardan tortib
                  yirik korxona ilovalarigacha bo'lgan turli loyihalarda ishlash imkoniyatiga ega bo'ldim. Men ayniqsa
                  zamonaviy veb-texnologiyalar, tizim dizayni va dasturchilar samaradorligi bilan qiziqaman.
                </p>
                <p>
                  Kod yozish bilan band bo'lmaganimda, meni blogim orqali bilimlarimni ulashayotgan, ochiq kodli
                  loyihalarga hissa qo'shayotgan yoki sun'iy intellekt va mashinali o'rganish sohasidagi so'nggi
                  yangiliklarni o'rganayotgan holda topishingiz mumkin.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tajriba</h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Odoo ERP mutaxassisi</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Rakat systems • 2024 - Hozirgi vaqtgacha</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Odoo ERP joriy qilish, maxsus modullar ishlab chiqish va korxona mijozlariga doimiy yordam
                    ko'rsatish.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Dasturiy ta'minot ishlab chiquvchisi</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Tech Startup • 2021 - 2024</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    React, Node.js va PostgreSQL yordamida to'liq stack veb-ilovalarni yaratish.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ko'nikmalar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Odoo</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Joriy qilish</li>
                    <li>Moslashtirish</li>
                    <li>Modul ishlab chiqish</li>
                    <li>Integratsiya</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Texnik</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>PostgreSQL</li>
                    <li>XML/QWeb</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
