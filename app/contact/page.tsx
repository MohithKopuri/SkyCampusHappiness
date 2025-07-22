"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-blue-500 mb-8 text-center">{t("contactTitle")}</h1>

          <p className="text-xl text-gray-600 text-center mb-12">{t("contactDescription")}</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium text-blue-500 mb-6">{t("getInTouch")}</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>{t("email")}:</strong> info@skycampushappiness.org
                </p>
                <p>
                  <strong>{t("phone")}:</strong> (555) 123-4567
                </p>
                <p>
                  <strong>{t("address")}:</strong>
                  <br />
                  2401 15th St NW
                  <br />
                  Washington, DC 20009
                </p>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">{t("name")}</Label>
                  <Input id="name" type="text" placeholder={t("namePlaceholder")} />
                </div>
                <div>
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input id="email" type="email" placeholder={t("emailPlaceholder")} />
                </div>
                <div>
                  <Label htmlFor="institution">{t("institution")}</Label>
                  <Input id="institution" type="text" placeholder={t("institutionPlaceholder")} />
                </div>
                <div>
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea id="message" placeholder={t("messagePlaceholder")} rows={4} />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">{t("sendMessage")}</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
