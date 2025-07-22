"use client"

import { useState } from "react"
import Image from "next/image"

interface TeamMemberCardProps {
  imageSrc: string
  name: string
  title: string
  bio: string
}

export function TeamMemberCard({ imageSrc, name, title, bio }: TeamMemberCardProps) {
  const [showBio, setShowBio] = useState(false)

  return (
    <div
      className="relative w-full min-h-[350px] rounded-lg overflow-hidden shadow-md cursor-pointer group"
      onMouseEnter={() => setShowBio(true)}
      onMouseLeave={() => setShowBio(false)}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-blue-800 bg-opacity-90 flex flex-col items-center justify-center p-6 text-white text-center transition-opacity duration-300 ${
          showBio ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm font-medium mb-4">{title}</p>
        <p className="text-xs leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}
