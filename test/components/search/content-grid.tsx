"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Content } from "@/generated/prisma"
import ContentRatingBadge from "@/components/content-rating-badge"
import { Calendar, Film, Tv, Star, Clock } from "lucide-react"

interface ContentGridProps {
  contents: Content[]
  loading?: boolean
  emptyMessage?: string
}

export const ContentGrid = ({ contents, loading = false, emptyMessage = "İçerik bulunamadı" }: ContentGridProps) => {


  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-[2/3] bg-gray-800 rounded-lg"></div>
            <div className="mt-2 space-y-2">
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-3 bg-gray-800 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (contents.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">🔍</div>
        <h3 className="text-white text-lg font-medium mb-2">{emptyMessage}</h3>
        <p className="text-gray-400">Farklı arama terimleri veya filtreler deneyin</p>
      </div>
    )
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'NETFLIX': return 'bg-red-600'
      case 'PRIME': return 'bg-blue-600'
      case 'HBO': return 'bg-purple-600'
      case 'DISNEY': return 'bg-blue-500'
      default: return 'bg-gray-600'
    }
  }

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'NETFLIX': return 'Netflix'
      case 'PRIME': return 'Prime'
      case 'HBO': return 'HBO'
      case 'DISNEY': return 'Disney+'
      default: return platform
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {contents.map((content) => (
        <Link 
          key={content.id} 
          href={content.type === "FILM" ? `/movies/${content.id}` : `/series/${content.id}`}
          className="group relative cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          {/* Content Card */}
          <div className="relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={content.image || "/placeholder-poster.jpg"}
              alt={content.title}
              className="w-full h-full object-cover"
              width={300}
              height={450}
              unoptimized
            />
            
            {/* Platform Badge */}
            <div className="absolute top-2 left-2">
              <Badge className={`${getPlatformColor(content.platform)} text-white text-xs`}>
                {getPlatformName(content.platform)}
              </Badge>
            </div>

            {/* Type Badge */}
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-black/60 text-white text-xs flex items-center gap-1">
                {content.type === 'FILM' ? <Film className="w-3 h-3" /> : <Tv className="w-3 h-3" />}
                {content.type === 'FILM' ? 'Film' : 'Dizi'}
              </Badge>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2">
                {content.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 text-gray-300 text-xs">
                  <Calendar className="w-3 h-3" />
                  {content.releaseYear}
                </div>
                <ContentRatingBadge contentId={content.id} variant="dark" />
              </div>

              <div className="text-gray-300 text-xs mb-2">
                <p className="line-clamp-1">Yön: {content.director}</p>
              </div>

              {/* Genres */}
              {content.genres && content.genres.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {content.genres.slice(0, 2).map((genre) => (
                    <Badge key={genre} variant="outline" className="text-xs border-gray-500 text-gray-300">
                      {genre}
                    </Badge>
                  ))}
                  {content.genres.length > 2 && (
                    <Badge variant="outline" className="text-xs border-gray-500 text-gray-300">
                      +{content.genres.length - 2}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Content Info Below Image */}
          <div className="mt-2 px-1">
            <h4 className="text-white text-sm font-medium line-clamp-2 mb-1">
              {content.title}
            </h4>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{content.releaseYear}</span>
              <ContentRatingBadge contentId={content.id} variant="light" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 