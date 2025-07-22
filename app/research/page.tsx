"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function ResearchPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-blue-500 mb-8">{t("research")}</h1>
          <p className="text-xl text-gray-600">Research content coming soon...</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
