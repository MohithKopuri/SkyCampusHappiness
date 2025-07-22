
"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageCarousel } from "@/components/image-carousel"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  // Carousel images with translated alt text
  const carouselImages = [
    {
      src: "/images/carousel-1.png",
      alt: t("carouselImage1Alt"),
    },
    {
      src: "/images/carousel-2.png",
      alt: t("carouselImage2Alt"),
    },
    {
      src: "/images/carousel-3.png",
      alt: t("carouselImage3Alt"),
    },
    {
      src: "/images/carousel-4.png",
      alt: t("carouselImage4Alt"),
    },
    {
      src: "/images/carousel-5.png",
      alt: t("carouselImage5Alt"),
    },
    {
      src: "/images/carousel-6.png",
      alt: t("carouselImage6Alt"),
    },
  ]

  const approachPillars = [
    {
      id: 1,
      imageSrc: "/images/approach-emotional-intelligence.png",
      titleKey: "approachEmotionalIntelligenceTitle",
      descKey: "approachEmotionalIntelligenceDesc",
    },
    {
      id: 2,
      imageSrc: "/images/approach-breathwork-meditation.png",
      titleKey: "approachBreathworkMeditationTitle",
      descKey: "approachBreathworkMeditationDesc",
    },
    {
      id: 3,
      imageSrc: "/images/approach-inclusion-belonging.png",
      titleKey: "approachInclusionBelongingTitle",
      descKey: "approachInclusionBelongingDesc",
    },
    {
      id: 4,
      imageSrc: "/images/approach-service.png",
      titleKey: "approachServiceTitle",
      descKey: "approachServiceDesc",
    },
    {
      id: 5,
      imageSrc: "/images/approach-leadership.png",
      titleKey: "approachLeadershipTitle",
      descKey: "approachLeadershipDesc",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Image Carousel */}
          <ImageCarousel images={carouselImages} />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-blue-500 mb-8 leading-tight">
            {t("heroTitle")}
          </h1>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">{t("heroDescription1")}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{t("heroDescription2")}</p>
          </div>
        </div>
      </section>

      {/* Featured Research & Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Featured Research Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-8 text-center lg:text-left">
                {t("featuredResearch")}
              </h2>
              <Link
                href="https://news.yale.edu/2020/07/27/improve-students-mental-health-yale-study-finds-teach-them-breathe?fbclid=IwAR0vZ5zRwuY6jZ7tGrLSy3U2gOhCYi1xAMj6d-oF-_g9mOW8Kn19Bb0M_W0"
                target="_blank"
                rel="noopener noreferrer"
                className="group block max-w-3xl mx-auto lg:mx-0 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                  src="/images/yale-news-article.png"
                  alt={t("yaleArticleAlt")}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-gray-50">
                  <p className="text-sm text-gray-500 mb-2 text-left">{t("yaleArticleSource")}</p>
                  <h3 className="text-xl font-medium text-gray-800 text-left group-hover:text-blue-500 transition-colors">
                    {t("yaleArticleTitle")}
                  </h3>
                </div>
              </Link>
            </div>

            {/* Featured Video Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-8 text-center lg:text-left">
                {t("featuredVideo")}
              </h2>
              <div className="max-w-3xl mx-auto lg:mx-0 rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/Vlu3arLc0WE"
                    title={t("youtubeVideoTitle")}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-medium text-gray-800 text-left">{t("youtubeVideoTitle")}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Our Impact Section */}
<section className="pt-0 bg-blue-500 text-white">
  {/* Banner Image */}
  <div className="w-full h-[400px] overflow-hidden">
    <Image
      src="/images/impact-banner.png"
      alt="People meditating in a group"
      width={1920}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Title + Description below image */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl md:text-4xl font-light text-center mb-6 text-white">
      {t("ourImpactTitle")}
    </h2>
    <p className="text-center mb-10 text-lg">{t("ourImpactDescription")}</p>

    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <Image
          src="/images/impact-participants.png"
          alt={t("impactParticipantsAlt")}
          width={400}
          height={400}
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
      <div>
        <Image
          src="/images/impact-facilitators.png"
          alt={t("impactFacilitatorsAlt")}
          width={400}
          height={400}
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
      <div>
        <Image
          src="/images/impact-campuses.png"
          alt={t("impactCampusesAlt")}
          width={400}
          height={400}
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>


      {/* Our Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-500 mb-4">{t("ourApproach")}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t("ourApproachTagline")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {approachPillars.map((pillar) => (
              <div key={pillar.id} className="flex flex-col items-center text-center max-w-xs">
                <Image
                  src={pillar.imageSrc || "/placeholder.svg"}
                  alt={t(pillar.titleKey)}
                  width={150}
                  height={150}
                  className="mb-4"
                />
                <h3 className="text-xl font-medium text-blue-500 mb-2">{t(pillar.titleKey)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(pillar.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In The Press Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-blue-500 text-center mb-12">{t("inThePress")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/images/press-huffpost.png"
                alt={t("pressHuffPostAlt")}
                width={150}
                height={40}
                className="mb-4 object-contain"
              />
              <p className="text-gray-600 text-lg leading-relaxed">{t("pressQuote1")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/press-washington-post.png"
                alt={t("pressWashingtonPostAlt")}
                width={200}
                height={40}
                className="mb-4 object-contain"
              />
              <p className="text-gray-600 text-lg leading-relaxed">{t("pressQuote2")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/press-new-university.png"
                alt={t("pressNewUniversityAlt")}
                width={200}
                height={40}
                className="mb-4 object-contain"
              />
              <p className="text-gray-600 text-lg leading-relaxed">{t("pressQuote3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-blue-500 text-center mb-12">{t("latestUpdates")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Link
              href="https://www.skycampushappiness.org/post/sky-campus-happiness-expands-to-over-101-campuses-and-14-countries1"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/images/blog-post-1.png"
                    alt={t("blogPost1Alt")}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-800 font-medium text-lg leading-tight group-hover:text-blue-500 transition-colors">
                    {t("blogPost1Title")}
                  </h3>
                </div>
              </div>
            </Link>

            {/* Blog Post 2 */}
            <Link
              href="https://www.skycampushappiness.org/post/what-is-the-antidote-for-student-anxiety-loneliness"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/images/blog-post-2.png"
                    alt={t("blogPost2Alt")}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-800 font-medium text-lg leading-tight group-hover:text-blue-500 transition-colors">
                    {t("blogPost2Title")}
                  </h3>
                </div>
              </div>
            </Link>

            {/* Blog Post 3 */}
            <Link
              href="https://www.skycampushappiness.org/post/yogic-breathing-helps-fight-depression"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/images/blog-post-3.png"
                    alt={t("blogPost3Alt")}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-800 font-medium text-lg leading-tight group-hover:text-blue-500 transition-colors">
                    {t("blogPost3Title")}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Collaborators Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="/images/collaborators.png"
              alt={t("collaboratorsAlt")}
              width={800}
              height={400}
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
