"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function StudentProgramsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            {/* Image on the left */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/students-meditating.png"
                alt="Students meditating outdoors"
                width={600}
                height={400}
                className="w-full max-w-md md:max-w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Title and text on the right */}
            <div className="flex flex-col justify-center md:justify-start md:h-full">
              <h1 className="text-3xl md:text-4xl font-light text-blue-500 mb-4 text-center md:text-left">
                {t("studentProgramsPageTitle")}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                {t("studentProgramsPageDescription")}
              </p>
            </div>
          </div>

          {/* SKY Happiness Retreat Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-4">{t("skyHappinessRetreatTitle")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{t("skyHappinessRetreatDesc")}</p>

            {/* SKY Happiness Retreat Includes & Benefits */}
            <div className="max-w-3xl mx-auto text-left">
              <h3 className="text-xl font-medium text-blue-500 mb-4">{t("skyRetreatIncludes")}</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
                <li>{t("skyRetreatItem1")}</li>
                <li>{t("skyRetreatItem2")}</li>
                <li>{t("skyRetreatItem3")}</li>
                <li>{t("skyRetreatItem4")}</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">{t("skyRetreatBenefits")}</p>

              {/* See Upcoming Retreats Button */}
              <div className="flex justify-center mb-16">
                <Link
                  href="https://members.us.artofliving.org/us-en/course?courseType=SILENT_RETREAT"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
                    {t("seeUpcomingRetreats")}
                  </Button>
                </Link>
              </div>

              {/* Meditation & Breathwork Facilitator Certification Trainings Section */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-4">{t("facilitatorTrainingTitle")}</h2>
                <h3 className="text-xl font-medium text-blue-500 mb-2">{t("skyLeadershipTraining")}</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{t("skyLeadershipTrainingDesc")}</p>

                {/* SKY Leadership Training Includes & Benefits */}
                <div className="max-w-3xl mx-auto text-left">
                  <h3 className="text-xl font-medium text-blue-500 mb-4">{t("skyLeadershipIncludes")}</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
                    <li>{t("skyLeadershipItem1")}</li>
                    <li>{t("skyLeadershipItem2")}</li>
                    <li>{t("skyLeadershipItem3")}</li>
                    <li>{t("skyLeadershipItem4")}</li>
                    <li>{t("skyLeadershipItem5")}</li>
                    <li>{t("skyLeadershipItem6")}</li>
                    <li>{t("skyLeadershipItem7")}</li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-600">{t("skyLeadershipBenefits")}</p>
                </div>
              </div>

              {/* SKY Wellness Coach Training Section */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-4">
                  {t("skyWellnessCoachTrainingTitle")}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{t("skyWellnessCoachTrainingDesc")}</p>

                {/* SKY Wellness Coach Training Includes & Benefits */}
                <div className="max-w-3xl mx-auto text-left">
                  <h3 className="text-xl font-medium text-blue-500 mb-4">{t("skyWellnessCoachIncludes")}</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
                    <li>{t("skyWellnessCoachItem1")}</li>
                    <li>{t("skyWellnessCoachItem2")}</li>
                    <li>{t("skyWellnessCoachItem3")}</li>
                    <li>{t("skyWellnessCoachItem4")}</li>
                    <li>{t("skyWellnessCoachItem5")}</li>
                    <li>{t("skyWellnessCoachItem6")}</li>
                    <li>{t("skyWellnessCoachItem7")}</li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-600 mb-4">{t("skyWellnessCoachBenefits1")}</p>
                  <p className="text-lg leading-relaxed text-gray-600 mb-4">{t("skyWellnessCoachBenefits2")}</p>
                  <p className="text-lg leading-relaxed text-gray-600">{t("skyWellnessCoachBenefits3")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add more content here for other programs */}
        </div>
      </section>

      <Footer />
    </div>
  )
}
