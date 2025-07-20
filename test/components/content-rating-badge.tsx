"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { fetcher } from "@/lib/fetcher"

interface ContentRatingBadgeProps {
  contentId: string
  showText?: boolean
  className?: string
  variant?: "light" | "dark"
}

interface RatingData {
  average: number | null
  count: number
}

export default function ContentRatingBadge({ 
  contentId, 
  showText = false,
  className = "",
  variant = "light"
}: ContentRatingBadgeProps) {
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
      <div className={`flex items-center gap-1 ${className}`}>
        <Star className="w-3 h-3 text-gray-400" />
        <span className={`text-xs ${variant === "light" ? "text-gray-400" : "text-gray-400"}`}>
          -
        </span>
      </div>
    )
  }

  const hasRating = ratingData?.average !== null && (ratingData?.count ?? 0) > 0
  
  if (!hasRating) {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <Star className="w-3 h-3 text-gray-400" />
        <span className={`text-xs ${variant === "light" ? "text-gray-500" : "text-gray-400"}`}>
          -
        </span>
      </div>
    )
  }

  const rating = ratingData?.average!
  const starColor = rating >= 8 ? "text-green-400" : 
                   rating >= 6 ? "text-yellow-400" : 
                   rating >= 4 ? "text-orange-400" : "text-red-400"
  
  const fillColor = rating >= 8 ? "fill-green-400" : 
                   rating >= 6 ? "fill-yellow-400" : 
                   rating >= 4 ? "fill-orange-400" : "fill-red-400"

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Star className={`w-3 h-3 ${starColor} ${fillColor}`} />
      <span className={`text-xs font-medium ${
        variant === "light" 
          ? starColor.replace("text-", "text-") 
          : "text-white"
      }`}>
        {rating.toFixed(1)}
      </span>
      {showText && (
        <span className={`text-xs ${
          variant === "light" ? "text-gray-600" : "text-gray-300"
        }`}>
          ({ratingData?.count ?? 0})
        </span>
      )}
    </div>
  )
} 