"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function ProgramsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Programs Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-blue-500 mb-8 text-center">{t("programsTitle")}</h1>

          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t("programsDescription")}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-500">{t("skyBreathTitle")}</CardTitle>
                <CardDescription>{t("skyBreathDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("skyBreathText")}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-500">{t("mindfulnessTitle")}</CardTitle>
                <CardDescription>{t("mindfulnessDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("mindfulnessText")}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-500">{t("resilienceTitle")}</CardTitle>
                <CardDescription>{t("resilienceDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("resilienceText")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
