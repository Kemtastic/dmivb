"use client"
import React, { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Link from "next/link"

interface RecommendationContent {
  id: string
  title: string
  type: string
  releaseYear: number
  trailerUrl: string | null
  director: string
  actors: string[]
  genres: string[]
  platform: string
  image: string | null
  summary: string
  createdAt: Date
  updatedAt: Date
  recommendationScore: number
  averageRating?: number
  ratingCount?: number
}

export default function CarouselSlide() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [recommendations, setRecommendations] = useState<RecommendationContent[]>([])
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('/api/recommendations?limit=8')
        if (response.ok) {
          const data = await response.json()
          setRecommendations(data)
          
          // Check if we got personalized recommendations (score > 0 indicates personalized)
          const hasPersonalized = data.some((item: RecommendationContent) => item.recommendationScore > 0)
          setIsLoggedIn(hasPersonalized)
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [])

  const handleNext = () => {
    if (!carouselRef.current || recommendations.length === 0) return

    const itemWidth = carouselRef.current.offsetWidth / 5 + 16
    const maxIndex = recommendations.length - 5

    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
      carouselRef.current.style.transform = `translateX(-${
        (currentIndex + 1) * itemWidth
      }px)`
    }
  }

  const handlePrev = () => {
    if (!carouselRef.current || recommendations.length === 0) return

    const itemWidth = carouselRef.current.offsetWidth / 5

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      carouselRef.current.style.transform = `translateX(-${
        (currentIndex - 1) * itemWidth
      }px)`
    }
  }

  if (loading) {
    return (
      <div className="bg-[#161515] p-8">
        <h2 className="text-white text-base font-bold mb-4 font-sans">
          Öneriler Yükleniyor...
        </h2>
        <div className="flex space-x-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1/5 aspect-video bg-gray-700 rounded animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#161515] p-8">
      <h2 className="text-white text-base font-bold mb-4 font-sans">
        {isLoggedIn ? "Sizin İçin Öneriler" : "Popüler İçerik"}
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

        {isHovered && currentIndex < recommendations.length - 5 && (
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
            {recommendations.map((content) => {
              const contentLink = content.type === "FILM" ? `/movies/${content.id}` : `/series/${content.id}`
              const displayRating = content.averageRating && content.averageRating > 0 
                ? content.averageRating.toFixed(1) 
                : (Math.random() * 3 + 7).toFixed(1) // Fallback random rating if no real ratings
              
              return (
                <div className="flex-none w-1/5 px-1" key={content.id}>
                  <Link href={contentLink}>
                    <div className="group relative aspect-video bg-[#2a2a2a] rounded overflow-hidden cursor-pointer">
                      <img
                        src={content.image || '/placeholder-image.jpg'}
                        alt={content.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/placeholder-image.jpg'
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 flex items-end opacity-0 transition-opacity duration-300 rounded group-hover:opacity-100">
                        <div className="p-4 w-full">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="text-white text-xs font-semibold leading-tight tracking-wide">
                              {content.title}
                            </h3>
                            <div className="flex items-center">
                              <span className="text-white text-xs mr-1">
                                {displayRating}
                              </span>
                              <Star
                                size={12}
                                className="text-yellow-400 fill-yellow-400"
                              />
                            </div>
                          </div>
                          <p className="text-[#e5e5e5] text-[0.5rem] m-0 opacity-80 leading-normal">
                            {content.genres.join(" • ")}
                          </p>
                          {isLoggedIn && content.recommendationScore > 0 && (
                            <div className="mt-1">
                              <span className="text-green-400 text-[0.45rem] bg-green-400/20 px-1 py-0.5 rounded">
                                Önerilen
                              </span>
                            </div>
                          )}
                          {content.ratingCount && content.ratingCount > 0 && (
                            <div className="mt-1">
                              <span className="text-gray-400 text-[0.4rem]">
                                {content.ratingCount} değerlendirme
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
