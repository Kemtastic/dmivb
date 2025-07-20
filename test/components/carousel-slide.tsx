"use client"
import React, { useState, useRef } from "react"
import { movies } from "@/lib/data"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Link from "next/link"

export default function CarouselSlide() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    if (!carouselRef.current) return

    const itemWidth = carouselRef.current.offsetWidth / 5 + 16
    const maxIndex = movies.length - 5

    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
      carouselRef.current.style.transform = `translateX(-${
        (currentIndex + 1) * itemWidth
      }px)`
    }
  }

  const handlePrev = () => {
    if (!carouselRef.current) return

    const itemWidth = carouselRef.current.offsetWidth / 5

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      carouselRef.current.style.transform = `translateX(-${
        (currentIndex - 1) * itemWidth
      }px)`
    }
  }

  return (
    <div className="bg-[#161515] p-8">
      <h2 className="text-white text-base font-bold mb-4 font-sans">
        Trending Now
      </h2>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && currentIndex > 0 && (
          <button
            className="absolute h-full z-10 bg-black/50 text-white border-none cursor-pointer p-4 transition-colors duration-300 hover:bg-black/70 left-0 rounded-tr rounded-br"
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {isHovered && currentIndex < movies.length - 5 && (
          <button
            className="absolute h-full z-10 bg-black/50 text-white border-none cursor-pointer p-4 transition-colors duration-300 hover:bg-black/70 right-0 rounded-tl rounded-bl"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        )}

        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-out"
          >
            {movies.map((movie: any) => (
              <div className="flex-none w-1/5 px-1" key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                  <div className="group relative aspect-video bg-[#2a2a2a] rounded overflow-hidden cursor-pointer">
                    <img
                      src={movie.img}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 flex items-end opacity-0 transition-opacity duration-300 rounded group-hover:opacity-100">
                      <div className="p-4 w-full">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-white text-xs font-semibold leading-tight tracking-wide">
                            {movie.title}
                          </h3>
                          <div className="flex items-center">
                            <span className="text-white text-xs mr-1">
                              {movie.score}
                            </span>
                            <Star
                              size={12}
                              className="text-yellow-400 fill-yellow-400"
                            />
                          </div>
                        </div>
                        <p className="text-[#e5e5e5] text-[0.5rem] m-0 opacity-80 leading-normal">
                          {movie.genres.join(" • ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
