"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-blue-500 font-bold text-xl">
              <span className="text-blue-500">sky</span>
              <div className="text-xs text-gray-600 uppercase tracking-wider">
                CAMPUS
                <br />
                HAPPINESS
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${isActive("/") ? "text-blue-500 font-medium" : "text-gray-600 hover:text-blue-500"}`}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${isActive("/about") ? "text-blue-500 font-medium" : "text-gray-600 hover:text-blue-500"}`}
            >
              {t("about")}
            </Link>

            {/* Programs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center space-x-1 px-0 hover:bg-transparent ${
                    pathname.startsWith("/programs") ? "text-blue-500 font-medium" : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  <span>{t("programs")}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/programs/students">{t("studentPrograms")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/programs/faculty">{t("facultyPrograms")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/programs/next-steps">{t("nextSteps")}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/research"
              className={`transition-colors ${isActive("/research") ? "text-blue-500 font-medium" : "text-gray-600 hover:text-blue-500"}`}
            >
              {t("research")}
            </Link>
            <Link
              href="/experiences"
              className={`transition-colors ${isActive("/experiences") ? "text-blue-500 font-medium" : "text-gray-600 hover:text-blue-500"}`}
            >
              {t("experiences")}
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${isActive("/contact") ? "text-blue-500 font-medium" : "text-gray-600 hover:text-blue-500"}`}
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Language Selector and Register Button */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <Globe className="h-4 w-4" />
                  <span>{language.toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">{t("register")}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
