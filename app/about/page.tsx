"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { TeamMemberCard } from "@/components/team-member-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      id: 1,
      imageSrc: "/images/team-nina.png",
      nameKey: "teamNinaName",
      titleKey: "teamNinaTitle",
      bioKey: "teamNinaBio",
    },
    {
      id: 2,
      imageSrc: "/images/team-kelsi.png",
      nameKey: "teamKelsiName",
      titleKey: "teamKelsiTitle",
      bioKey: "teamKelsiBio",
    },
    {
      id: 3,
      imageSrc: "/images/team-namrata.png",
      nameKey: "teamNamrataName",
      titleKey: "teamNamrataTitle",
      bioKey: "teamNamrataBio",
    },
    {
      id: 4,
      imageSrc: "/images/team-stephanie.png",
      nameKey: "teamStephanieName",
      titleKey: "teamStephanieTitle",
      bioKey: "teamStephanieBio",
    },
    {
      id: 5,
      imageSrc: "/images/team-kaitlin.png",
      nameKey: "teamKaitlinName",
      titleKey: "teamKaitlinTitle",
      bioKey: "teamKaitlinBio",
    },
    {
      id: 6,
      imageSrc: "/images/team-harry.png",
      nameKey: "teamHarryName",
      titleKey: "teamHarryTitle",
      bioKey: "teamHarryBio",
    },
    {
      id: 7,
      imageSrc: "/images/team-jameelah.png",
      nameKey: "teamJameelahName",
      titleKey: "teamJameelahTitle",
      bioKey: "teamJameelahBio",
    },
    {
      id: 8,
      imageSrc: "/images/team-annelies.png",
      nameKey: "teamAnneliesName",
      titleKey: "teamAnneliesTitle",
      bioKey: "teamAnneliesBio",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* About Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-blue-500 mb-8 text-center">{t("aboutTitle")}</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8 text-center">{t("aboutDescription")}</p>

            <div className="flex justify-center mb-12">
              <Image
                src="/images/about-meditation.png"
                alt="Person meditating with closed eyes"
                width={800}
                height={500}
                className="w-full max-w-2xl h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h2 className="text-2xl font-medium text-blue-500 mb-4">{t("ourMission")}</h2>
                <p className="leading-relaxed">{t("missionText")}</p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-blue-500 mb-4">{t("ourVision")}</h2>
                <p className="leading-relaxed">{t("visionText")}</p>
              </div>
            </div>

            {/* Curriculum Section */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-6 text-center">
                {t("programCurriculumTitle")}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
                <li>{t("curriculumItem1")}</li>
                <li>{t("curriculumItem2")}</li>
                <li>{t("curriculumItem3")}</li>
                <li>{t("curriculumItem4")}</li>
                <li>{t("curriculumItem5")}</li>
                <li>{t("curriculumItem6")}</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-600 text-center">{t("programCornerstone")}</p>
            </div>

            {/* Science-backed techniques title and button */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-6">
                {t("scienceBackedTechniquesTitle")}
              </h2>
              <Link href="/research" passHref>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
                  {t("viewResearchButton")}
                </Button>
              </Link>
            </div>

            {/* New Research Comparison Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* SKY vs Mindfulness */}
              <div className="flex flex-col">
                <Link
                  href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2020.00590/full"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-500 hover:underline text-xl font-medium mb-2"
                >
                  {t("skyVsMindfulnessTitle")}
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t("skyVsMindfulnessDesc")}</p>
                <Link
                  href="https://www.frontiersin.org/articles/10.3389/fpsyt.2020.00590/full"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto" // Pushes button to the bottom
                >
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 bg-transparent"
                  >
                    {t("readFullStudyButton")}
                  </Button>
                </Link>
              </div>

              {/* SKY vs A Cognitively Focused Intervention */}
              <div className="flex flex-col">
                <Link
                  href="https://www.tandfonline.com/doi/full/10.1080/07448481.2020.1781867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-500 hover:underline text-xl font-medium mb-2"
                >
                  {t("skyVsCognitiveTitle")}
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t("skyVsCognitiveDesc")}</p>
                <Link
                  href="https://www.tandfonline.com/doi/full/10.1080/07448481.2020.1781867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto" // Pushes button to the bottom
                >
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 bg-transparent"
                  >
                    {t("readFullStudyButton")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Programs Offerings Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-4">{t("aboutProgramsTitle")}</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">{t("aboutProgramsTagline")}</p>
              <div className="flex justify-center">
                <Image
                  src="/images/program-offerings.png"
                  alt="SKY program offerings including Wellness Workshop, Happiness Retreat, Silent Retreat, Leadership Training, Teacher Training, and Wellness Coach Training"
                  width={900}
                  height={600}
                  className="w-full max-w-4xl h-auto object-contain"
                />
              </div>
            </div>

            {/* Our Team Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-4">{t("ourTeamTitle")}</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">{t("ourTeamTagline")}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    imageSrc={member.imageSrc}
                    name={t(member.nameKey)}
                    title={t(member.titleKey)}
                    bio={t(member.bioKey)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
