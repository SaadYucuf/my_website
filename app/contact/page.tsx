"use client"

import Link from "next/link"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "next-themes"
import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"

export default function ContactPage() {
  const { theme, setTheme } = useTheme()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    message: string
    type: "success" | "error" | null
  }>({ message: "", type: null })

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.target)
      const response = await fetch("https://formsubmit.co/ajax/akbarshohdev@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        setFormStatus({
          message: "Xabaringiz muvaffaqiyatli yuborildi!",
          type: "success",
        })
        event.target.reset() // Formani tozalash
      } else {
        throw new Error(result.message || "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.")
      }
    } catch (error) {
      setFormStatus({
        message: error.message || "Server xatosi (500). Iltimos, keyinroq qayta urinib ko‘ring yoki admin bilan bog‘laning.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
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
            <Link href="/contact" className="text-gray-900 dark:text-white font-medium">
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Aloqa</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sizdan eshitishdan xursand bo'laman. Menga xabar yuboring va imkon qadar tezroq javob beraman.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {formStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.type === "success"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                    : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit.io uchun yashirin maydonlar */}
              <input type="hidden" name="_subject" value="Yangi xabar - Akbarshohdev.uz" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_url" value="https://yourdomain.co/contact.html" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ism
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ismingiz"
                    className="border-gray-200 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="emailingiz@example.com"
                    className="border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telegram" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telegram Username
                  </label>
                  <Input
                    id="telegram"
                    name="telegram"
                    type="text"
                    placeholder="@username"
                    className="border-gray-200 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mavzu
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Xabar mavzusi"
                    className="border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Xabar
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Xabaringizni bu yerga yozing..."
                  className="border-gray-200 dark:border-gray-700"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Yuborilmoqda..." : "Xabar yuborish"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Bog'lanish</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p>📧 akbarshohdev@gmail.com</p>
                <p>📍 Toshkent, O'zbekiston</p>
                <p>
                  💬{" "}
                  <a
                    href="https://t.me/akbarshoh_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    @akbarshoh_dev
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Javob vaqti</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Odatda xabarlarga 24 soat ichida javob beraman. Shoshilinch masalalar bo'yicha Telegram orqali
                bog'lanishingiz mumkin.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Xizmatlar</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>• Odoo ERP joriy qilish</p>
                <p>• Maxsus modullar yaratish</p>
                <p>• Tizim optimizatsiyasi</p>
                <p>• Texnik qo'llab-quvvatlash</p>
                <p>• O'qitish va konsultatsiya</p>
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
