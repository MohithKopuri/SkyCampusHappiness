"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* SKY Logo */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6">
            <span className="text-white font-bold text-xl">sky</span>
          </div>

          {/* Address */}
          <div className="text-blue-400 mb-2">
            <p>{t("addressLine1")}</p>
            <p>{t("addressLine2")}</p>
          </div>

          {/* Email */}
          <div className="mb-6">
            <Link
              href="mailto:skycampushappiness@iahv.org"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              skycampushappiness@iahv.org
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors" aria-label="YouTube">
              <Youtube className="h-6 w-6" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <p>{t("footerCopyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
