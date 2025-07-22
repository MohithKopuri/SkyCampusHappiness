"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-blue-500 mb-12">{t("pageNotFound")}</h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            {/* Meditation Illustration */}
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Person meditating"
                width={300}
                height={300}
                className="w-64 h-64 object-contain"
              />
            </div>

            {/* Error Message */}
            <div className="max-w-md">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{t("notFoundText")}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">{t("goToHomepage")}</Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 bg-transparent"
                  >
                    {t("contactSkyCampus")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
