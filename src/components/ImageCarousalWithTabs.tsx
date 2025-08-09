"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const slides = [
  {
    title: "Work Order Management",
    image: "/images/Hero Image.png",
  },
  {
    title: "Smart Dashboard",
    image: "/images/smart-dashboard.png",
  },
  {
    title: "Boards",
    image: "/images/boards.png",
  },
  {
    title: "Contact Profiles",
    image: "/images/contact-profiles.png",
  },
  {
    title: "Calendar",
    image: "/images/calendar.png",
  },
]

export const ImageCarousalWithTabs = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const getPrevIndex = () => (activeIndex - 1 + slides.length) % slides.length
  const getNextIndex = () => (activeIndex + 1) % slides.length

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "px-4 py-2 rounded-full transition-all duration-300 cursor-pointer",
              activeIndex === index
                ? "bg-blueDark text-white border-2 border-blueLight"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-500"
            )}
          >
            {slide.title}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex
          const isPrev = index === getPrevIndex()
          const isNext = index === getNextIndex()

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out`}
              style={{
                transform: isActive
                  ? "translateX(0) scale(1)"
                  : isPrev
                  ? "translateX(-105%) scale(0.85)"
                  : isNext
                  ? "translateX(105%) scale(0.85)"
                  : "translateX(0) scale(0)",
                opacity: isActive ? 1 : isPrev || isNext ? 0.7 : 0,
                zIndex: isActive ? 20 : 10,
                width: isActive ? "80%" : "60%",
                height: "100%",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
