"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession } from "@/lib/auth-client"
import { toast } from "sonner"

interface FavoriteButtonProps {
  contentId: string
  className?: string
}

interface FavoriteData {
  favoriteCount: number
  isFavorited: boolean | null
}

export default function FavoriteButton({ contentId, className }: FavoriteButtonProps) {
  const { data: session } = useSession()
  const [favoriteData, setFavoriteData] = useState<FavoriteData>({
    favoriteCount: 0,
    isFavorited: null
  })
  const [isLoading, setIsLoading] = useState(false)

  // Fetch favorite status and count
  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const response = await fetch(`/api/favorites/${contentId}`)
        if (response.ok) {
          const data = await response.json()
          setFavoriteData(data)
        }
      } catch (error) {
        console.error('Error fetching favorite status:', error)
      }
    }

    fetchFavoriteStatus()
  }, [contentId])

  const handleToggleFavorite = async () => {
    if (!session?.user) {
      toast.error("Favorilere eklemek için giriş yapmanız gerekiyor")
      return
    }

    setIsLoading(true)
    
    try {
      const isCurrentlyFavorited = favoriteData.isFavorited
      const method = isCurrentlyFavorited ? 'DELETE' : 'POST'
      
      const response = await fetch('/api/favorites', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contentId }),
      })

      if (response.ok) {
        const result = await response.json()
        
        // Update local state optimistically
        setFavoriteData(prev => ({
          favoriteCount: isCurrentlyFavorited 
            ? prev.favoriteCount - 1 
            : prev.favoriteCount + 1,
          isFavorited: !isCurrentlyFavorited
        }))
        
        toast.success(result.message)
      } else {
        const error = await response.json()
        toast.error(error.error || 'Bir hata oluştu')
      }
    } catch (error) {
      console.error('Error toggling favorite:', error)
      toast.error('Bir hata oluştu')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={handleToggleFavorite}
        disabled={isLoading}
        variant={favoriteData.isFavorited ? "default" : "outline"}
        size="sm"
        className={`flex items-center gap-2 ${className}`}
      >
        <Heart 
          className={`w-4 h-4 ${
            favoriteData.isFavorited 
              ? 'fill-red-500 text-red-500' 
              : 'text-gray-500'
          }`} 
        />
        <span>{favoriteData.favoriteCount} </span>
        {isLoading ? 'Yükleniyor...' : (
          favoriteData.isFavorited ? 'Favorilerden Çıkar' : 'Favorilere Ekle'
        )}
      </Button>
    </div>
  )
} 