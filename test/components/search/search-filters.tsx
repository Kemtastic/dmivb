"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Filter, RotateCcw } from "lucide-react"
import { ContentType, Platform } from "@/generated/prisma"
import { fetcher } from "@/lib/fetcher"
import useSWR from "swr"

interface SearchFilters {
  query?: string
  type?: ContentType | 'ALL'
  genres?: string[]
  platforms?: Platform[]
  yearRange?: { min?: number; max?: number }
  director?: string
}

interface SearchFiltersProps {
  filters: SearchFilters
  onFiltersChange: (filters: SearchFilters) => void
  className?: string
}

const PLATFORMS = [
  { value: 'NETFLIX', label: 'Netflix' },
  { value: 'PRIME', label: 'Prime Video' },
  { value: 'HBO', label: 'HBO' },
  { value: 'DISNEY', label: 'Disney+' }
]

const CONTENT_TYPES = [
  { value: 'ALL', label: 'Tümü' },
  { value: 'FILM', label: 'Filmler' },
  { value: 'DIZI', label: 'Diziler' }
]

export const SearchFilters = ({ filters, onFiltersChange, className = "" }: SearchFiltersProps) => {
  const [localFilters, setLocalFilters] = useState<SearchFilters>(filters)
  const [isExpanded, setIsExpanded] = useState(false)

  // Fetch available genres
  const { data: genresData } = useSWR('/api/search/genres', fetcher)
  const availableGenres = genresData?.data || []

  useEffect(() => {
    setLocalFilters(filters)
  }, [filters])

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const addGenre = (genre: string) => {
    const currentGenres = localFilters.genres || []
    if (!currentGenres.includes(genre)) {
      updateFilter('genres', [...currentGenres, genre])
    }
  }

  const removeGenre = (genre: string) => {
    const currentGenres = localFilters.genres || []
    updateFilter('genres', currentGenres.filter(g => g !== genre))
  }

  const addPlatform = (platform: Platform) => {
    const currentPlatforms = localFilters.platforms || []
    if (!currentPlatforms.includes(platform)) {
      updateFilter('platforms', [...currentPlatforms, platform])
    }
  }

  const removePlatform = (platform: Platform) => {
    const currentPlatforms = localFilters.platforms || []
    updateFilter('platforms', currentPlatforms.filter(p => p !== platform))
  }

  const clearAllFilters = () => {
    const clearedFilters = { query: localFilters.query }
    setLocalFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const hasActiveFilters = () => {
    return !!(
      (localFilters.type && localFilters.type !== 'ALL') ||
      (localFilters.genres && localFilters.genres.length > 0) ||
      (localFilters.platforms && localFilters.platforms.length > 0) ||
      localFilters.yearRange?.min ||
      localFilters.yearRange?.max ||
      localFilters.director
    )
  }

  return (
    <div className={`bg-gray-900 p-4 rounded-lg border border-gray-800 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <h3 className="text-white font-medium">Filtreler</h3>
          {hasActiveFilters() && (
            <Badge variant="secondary" className="bg-blue-600 text-white">
              {[
                localFilters.type !== 'ALL' ? 1 : 0,
                localFilters.genres?.length || 0,
                localFilters.platforms?.length || 0,
                localFilters.yearRange?.min || localFilters.yearRange?.max ? 1 : 0,
                localFilters.director ? 1 : 0
              ].reduce((a, b) => a + b, 0)}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters() && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-gray-400 hover:text-white"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Temizle
            </Button>
          )}
          <Button
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Daralt' : 'Genişlet'}
          </Button>
        </div>
      </div>

      <div className={`space-y-4 ${!isExpanded && 'hidden'}`}>
        {/* Content Type Filter */}
        <div>
          <Label className="text-gray-300 mb-2 block">İçerik Türü</Label>
          <Select 
            value={localFilters.type || 'ALL'} 
            onValueChange={(value) => updateFilter('type', value as ContentType | 'ALL')}
          >
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {CONTENT_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value} className="text-white hover:bg-gray-700">
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Genre Filter */}
        <div>
          <Label className="text-gray-300 mb-2 block">Türler</Label>
          <Select onValueChange={addGenre}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Tür seçin..." />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {availableGenres.map((genre: string) => (
                <SelectItem key={genre} value={genre} className="text-white hover:bg-gray-700">
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {localFilters.genres && localFilters.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {localFilters.genres.map((genre) => (
                <Badge key={genre} variant="secondary" className="bg-blue-600 text-white">
                  {genre}
                  <button
                    onClick={() => removeGenre(genre)}
                    className="ml-1 hover:text-gray-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Platform Filter */}
        <div>
          <Label className="text-gray-300 mb-2 block">Platformlar</Label>
          <Select onValueChange={(value) => addPlatform(value as Platform)}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Platform seçin..." />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {PLATFORMS.map((platform) => (
                <SelectItem key={platform.value} value={platform.value} className="text-white hover:bg-gray-700">
                  {platform.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {localFilters.platforms && localFilters.platforms.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {localFilters.platforms.map((platform) => (
                <Badge key={platform} variant="secondary" className="bg-green-600 text-white">
                  {PLATFORMS.find(p => p.value === platform)?.label}
                  <button
                    onClick={() => removePlatform(platform)}
                    className="ml-1 hover:text-gray-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Year Range Filter */}
        <div>
          <Label className="text-gray-300 mb-2 block">Yıl Aralığı</Label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Input
                type="number"
                placeholder="Min. yıl"
                value={localFilters.yearRange?.min || ''}
                onChange={(e) => updateFilter('yearRange', {
                  ...localFilters.yearRange,
                  min: e.target.value ? parseInt(e.target.value) : undefined
                })}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Max. yıl"
                value={localFilters.yearRange?.max || ''}
                onChange={(e) => updateFilter('yearRange', {
                  ...localFilters.yearRange,
                  max: e.target.value ? parseInt(e.target.value) : undefined
                })}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Director Filter */}
        <div>
          <Label className="text-gray-300 mb-2 block">Yönetmen</Label>
          <Input
            type="text"
            placeholder="Yönetmen adı..."
            value={localFilters.director || ''}
            onChange={(e) => updateFilter('director', e.target.value || undefined)}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Quick Filters - Always Visible */}
      <div className="pt-4 border-t border-gray-800 mt-4">
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            onClick={() => updateFilter('type', localFilters.type === 'FILM' ? 'ALL' : 'FILM')}
            className={localFilters.type === 'FILM' ? 'bg-blue-600 hover:bg-blue-700' : 'border-gray-700 '}
          >
            Filmler
          </Button>
          <Button
            size="sm"
            onClick={() => updateFilter('type', localFilters.type === 'DIZI' ? 'ALL' : 'DIZI')}
            className={localFilters.type === 'DIZI' ? 'bg-blue-600 hover:bg-blue-700' : 'border-gray-700 '}
          >
            Diziler
          </Button>
        </div>
      </div>
    </div>
  )
} 