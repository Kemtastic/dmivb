"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { fetcher } from "@/lib/fetcher"

interface AverageRatingDisplayProps {
  contentId: string
  className?: string
  size?: "small" | "medium" | "large"
}

interface RatingData {
  average: number | null
  count: number
}

export default function AverageRatingDisplay({ 
  contentId, 
  className = "",
  size = "large" 
}: AverageRatingDisplayProps) {
  const [ratingData, setRatingData] = useState<RatingData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadRatingData = async () => {
      try {
        setIsLoading(true)
        const data = await fetcher(`/api/ratings?contentId=${contentId}`)
        setRatingData(data)
      } catch (error) {
        console.error("Error loading rating data:", error)
        setRatingData({ average: null, count: 0 })
      } finally {
        setIsLoading(false)
      }
    }

    if (contentId) {
      loadRatingData()
    }
  }, [contentId])

  if (isLoading) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className={`${
          size === "large" ? "w-16 h-16" : 
          size === "medium" ? "w-12 h-12" : "w-8 h-8"
        } bg-gray-200 rounded-full flex items-center justify-center animate-pulse`}>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
        </div>
      </div>
    )
  }

  const hasRatings = ratingData?.average !== null && (ratingData?.count ?? 0) > 0

  if (!hasRatings) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className={`${
          size === "large" ? "w-16 h-16" : 
          size === "medium" ? "w-12 h-12" : "w-8 h-8"
        } bg-gray-300 rounded-full flex items-center justify-center`}>
          <span className={`${
            size === "large" ? "text-2xl" : 
            size === "medium" ? "text-lg" : "text-sm"
          } font-bold text-gray-600`}>
            -
          </span>
        </div>
        <div>
          <p className={`${
            size === "large" ? "text-lg" : 
            size === "medium" ? "text-base" : "text-sm"
          } font-semibold text-gray-700`}>
            Kullanıcı Puanı
          </p>
          <p className={`${
            size === "large" ? "text-sm" : "text-xs"
          } text-gray-600`}>
            Henüz puanlanmamış
          </p>
        </div>
      </div>
    )
  }

  const rating = ratingData?.average!
  const ratingColor = rating >= 8 ? "bg-green-500" : 
                     rating >= 6 ? "bg-yellow-500" : 
                     rating >= 4 ? "bg-orange-500" : "bg-red-500"

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={`${
        size === "large" ? "w-16 h-16" : 
        size === "medium" ? "w-12 h-12" : "w-8 h-8"
      } ${ratingColor} rounded-full flex items-center justify-center shadow-lg`}>
        <span className={`${
          size === "large" ? "text-2xl" : 
          size === "medium" ? "text-lg" : "text-sm"
        } font-bold text-white`}>
          {rating.toFixed(1)}
        </span>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className={`${
            size === "large" ? "text-lg" : 
            size === "medium" ? "text-base" : "text-sm"
          } font-semibold text-gray-700`}>
            Kullanıcı Puanı
          </p>
          <div className="flex items-center gap-1">
            <Star className={`${
              size === "large" ? "w-4 h-4" : "w-3 h-3"
            } text-yellow-500 fill-yellow-500`} />
            <span className={`${
              size === "large" ? "text-sm" : "text-xs"
            } text-gray-600 font-medium`}>
              {rating.toFixed(1)}/10
            </span>
          </div>
        </div>
        <p className={`${
          size === "large" ? "text-sm" : "text-xs"
        } text-gray-600`}>
          {ratingData?.count ?? 0} değerlendirme
        </p>
      </div>
    </div>
  )
} 