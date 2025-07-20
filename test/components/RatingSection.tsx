"use client"

import { useState, useEffect } from "react"
import { useSession } from "@/lib/auth-client"
import { fetcher } from "@/lib/fetcher"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Trash2, Star } from "lucide-react"

interface RatingData {
  userRating?: {
    id: string
    rating: number
    createdAt: string
    updatedAt: string
  }
  average: number | null
  count: number
}

interface RatingSectionProps {
  movieId?: string
  contentId?: string
}

export default function RatingSection({ movieId, contentId }: RatingSectionProps) {
  const [ratingData, setRatingData] = useState<RatingData | null>(null)
  const [selectedRating, setSelectedRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const { data: session } = useSession()

  // Use movieId or contentId (backwards compatibility)
  const id = contentId || movieId

  useEffect(() => {
    if (id) {
      loadRatingData()
    }
  }, [id, session])

  const loadRatingData = async () => {
    try {
      setIsLoading(true)
      const url = `/api/ratings?contentId=${id}${session?.user?.id ? `&userId=${session.user.id}` : ''}`
      const data = await fetcher(url)
      setRatingData(data)
      setSelectedRating(data.userRating?.rating || 0)
    } catch (error) {
      console.error("Error loading rating data:", error)
      toast.error("Puanlar yüklenirken hata oluştu")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRatingClick = async (rating: number) => {
    if (!session?.user) {
      toast.error("Puan vermek için giriş yapın")
      return
    }

    if (selectedRating === rating) {
      // If clicking the same rating, remove it
      await handleDeleteRating()
      return
    }

    try {
      setIsSaving(true)
      const response = await fetcher("/api/ratings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentId: id,
          rating,
        }),
      })

      if (response.success) {
        setSelectedRating(rating)
        setRatingData(prev => ({
          ...prev,
          userRating: response.userRating,
          average: response.average,
          count: response.count
        }))
        toast.success(`${rating}/10 puan verdiniz`)
      }
    } catch (error) {
      console.error("Error saving rating:", error)
      toast.error("Puan kaydedilirken hata oluştu")
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeleteRating = async () => {
    if (!session?.user || !selectedRating) return

    try {
      setIsSaving(true)
      const response = await fetcher(`/api/ratings/${id}`, {
        method: "DELETE",
      })

      if (response.success) {
        setSelectedRating(0)
        setRatingData(prev => ({
          ...prev,
          userRating: undefined,
          average: response.average,
          count: response.count
        }))
        toast.success("Puanınız kaldırıldı")
      }
    } catch (error) {
      console.error("Error deleting rating:", error)
      toast.error("Puan silinirken hata oluştu")
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Spinner className="w-4 h-4" />
        <span className="text-sm text-gray-600">Puanlar yükleniyor...</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Average Rating Display */}
      {ratingData?.average !== null && (ratingData?.count ?? 0) > 0 && (
        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-2xl font-bold text-yellow-600">
              {ratingData?.average?.toFixed(1)}
            </span>
            <span className="text-sm text-gray-600">/ 10</span>
          </div>
          <div className="text-sm text-gray-600">
            {ratingData?.count ?? 0} değerlendirme
          </div>
        </div>
      )}

      {/* User Rating Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">
              {selectedRating > 0 ? "Puanınız" : "Puan Verin"}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {selectedRating > 0 
                ? `${selectedRating}/10 puan verdiniz` 
                : session?.user 
                  ? "1-10 arası puan verin" 
                  : "Puan vermek için giriş yapın"
              }
            </p>
          </div>
          {selectedRating > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeleteRating}
              disabled={isSaving}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Rating boxes */}
        <div className="flex gap-1 flex-wrap">
          {Array.from({ length: 10 }).map((_, i) => {
            const rating = i + 1
            const isSelected = selectedRating === rating
            const isHovered = hoveredRating >= rating
            const isActive = isSelected || isHovered
            
            let bgColorClass = "transition-all duration-200 "
            
            if (isActive) {
              if (rating <= 4) {
                bgColorClass += "bg-red-500 text-white"
              } else if (rating <= 7) {
                bgColorClass += "bg-yellow-500 text-white"
              } else {
                bgColorClass += "bg-green-500 text-white"
              }
            } else {
              bgColorClass += "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }

            if (isSelected) {
              bgColorClass += " ring-2 ring-blue-500 ring-offset-1"
            }

            return (
              <button
                key={i}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-semibold cursor-pointer ${bgColorClass} ${
                  !session?.user ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleRatingClick(rating)}
                onMouseEnter={() => setHoveredRating(rating)}
                onMouseLeave={() => setHoveredRating(0)}
                disabled={isSaving || !session?.user}
                aria-label={`Rate ${rating} out of 10`}
              >
                {isSaving && isSelected ? (
                  <Spinner className="w-4 h-4" />
                ) : (
                  rating
                )}
              </button>
            )
          })}
        </div>

        {!session?.user && (
          <p className="text-xs text-gray-500 mt-2">
            Puan vermek için hesabınıza giriş yapmanız gerekiyor.
          </p>
        )}
      </div>
    </div>
  )
}