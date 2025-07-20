"use client"

import { useState, useEffect } from "react"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession } from "@/lib/auth-client"
import { toast } from "sonner"

interface WatchedButtonProps {
  contentId: string
  className?: string
}

interface WatchedData {
  watchedCount: number
  isWatched: boolean | null
}

export default function WatchedButton({ contentId, className }: WatchedButtonProps) {
  const { data: session } = useSession()
  const [watchedData, setWatchedData] = useState<WatchedData>({
    watchedCount: 0,
    isWatched: null
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Fetch watched status and count
  useEffect(() => {
    const fetchWatchedStatus = async () => {
      try {
        const response = await fetch(`/api/watched/${contentId}`)
        if (response.ok) {
          const data = await response.json()
          setWatchedData(data)
        }
      } catch (error) {
        console.error('Error fetching watched status:', error)
      }
    }

    fetchWatchedStatus()
  }, [contentId])

  const handleToggleWatched = async () => {
    if (!session?.user) {
      toast.error("İzlenenlere eklemek için giriş yapmanız gerekiyor")
      return
    }

    setIsLoading(true)
    
    try {
      const isCurrentlyWatched = watchedData.isWatched
      const method = isCurrentlyWatched ? 'DELETE' : 'POST'
      
      const response = await fetch('/api/watched', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contentId }),
      })

      if (response.ok) {
        const result = await response.json()
        
        // Update local state optimistically
        setWatchedData(prev => ({
          watchedCount: isCurrentlyWatched 
            ? prev.watchedCount - 1 
            : prev.watchedCount + 1,
          isWatched: !isCurrentlyWatched
        }))
        
      } else {
        const error = await response.json()
        toast.error(error.error || 'Bir hata oluştu')
      }
    } catch (error) {
      console.error('Error toggling watched:', error)
      toast.error('Bir hata oluştu')
    } finally {
      setIsLoading(false)
    }
  }

  const getButtonText = () => {
    if (watchedData.isWatched && isHovered) return 'Kaldır'
    if (watchedData.isWatched) return 'İzledim'
    return 'İzledim'
  }

  return (
    <Button
      onClick={handleToggleWatched}
      disabled={isLoading}
      variant="outline"
      size="sm"
      className={`flex items-center gap-1 h-auto py-2 px-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Eye 
        className={`w-5 h-5 ${
          watchedData.isWatched 
            ? 'text-green-500' 
            : ''
        }`} 
      />
      <span className="text-xs font-medium">
        {getButtonText()}
      </span>
    </Button>
  )
} 