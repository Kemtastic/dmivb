"use client"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { SearchBar } from "@/components/search/search-bar"
import { SearchFilters } from "@/components/search/search-filters"
import { ContentGrid } from "@/components/search/content-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Content, ContentType, Platform } from "@/generated/prisma"
import { fetcher } from "@/lib/fetcher"
import { SlidersHorizontal, X } from "lucide-react"

interface SearchFilters {
  query?: string
  type?: ContentType | 'ALL'
  genres?: string[]
  platforms?: Platform[]
  yearRange?: { min?: number; max?: number }
  director?: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [results, setResults] = useState<Content[]>([])
  const [loading, setLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  
  // Initialize filters from URL parameters
  const [filters, setFilters] = useState<SearchFilters>(() => {
    const query = searchParams.get('q') || undefined
    const type = searchParams.get('type') as ContentType | 'ALL' || 'ALL'
    const genresParam = searchParams.get('genres')
    const platformsParam = searchParams.get('platforms')
    const minYear = searchParams.get('minYear')
    const maxYear = searchParams.get('maxYear')
    const director = searchParams.get('director') || undefined

    return {
      query,
      type,
      genres: genresParam ? genresParam.split(',').filter(Boolean) : undefined,
      platforms: platformsParam ? platformsParam.split(',').filter(Boolean) as Platform[] : undefined,
      yearRange: (minYear || maxYear) ? {
        min: minYear ? parseInt(minYear) : undefined,
        max: maxYear ? parseInt(maxYear) : undefined
      } : undefined,
      director
    }
  })

  // Update URL when filters change
  const updateURL = useCallback((newFilters: SearchFilters) => {
    const params = new URLSearchParams()
    
    if (newFilters.query) params.set('q', newFilters.query)
    if (newFilters.type && newFilters.type !== 'ALL') params.set('type', newFilters.type)
    if (newFilters.genres && newFilters.genres.length > 0) params.set('genres', newFilters.genres.join(','))
    if (newFilters.platforms && newFilters.platforms.length > 0) params.set('platforms', newFilters.platforms.join(','))
    if (newFilters.yearRange?.min) params.set('minYear', newFilters.yearRange.min.toString())
    if (newFilters.yearRange?.max) params.set('maxYear', newFilters.yearRange.max.toString())
    if (newFilters.director) params.set('director', newFilters.director)

    const url = params.toString() ? `/search?${params.toString()}` : '/search'
    router.push(url, { scroll: false })
  }, [router])

  // Perform search
  const performSearch = useCallback(async (searchFilters: SearchFilters) => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      
      if (searchFilters.query) params.set('q', searchFilters.query)
      if (searchFilters.type && searchFilters.type !== 'ALL') params.set('type', searchFilters.type)
      if (searchFilters.genres && searchFilters.genres.length > 0) params.set('genres', searchFilters.genres.join(','))
      if (searchFilters.platforms && searchFilters.platforms.length > 0) params.set('platforms', searchFilters.platforms.join(','))
      if (searchFilters.yearRange?.min) params.set('minYear', searchFilters.yearRange.min.toString())
      if (searchFilters.yearRange?.max) params.set('maxYear', searchFilters.yearRange.max.toString())
      if (searchFilters.director) params.set('director', searchFilters.director)

      const url = `/api/search?${params.toString()}`
      const response = await fetcher(url)
      
      if (response.success) {
        setResults(response.data)
        setTotalResults(response.count)
      } else {
        setResults([])
        setTotalResults(0)
      }
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
      setTotalResults(0)
    } finally {
      setLoading(false)
    }
  }, [])

  // Handle search input changes
  const handleSearch = (query: string) => {
    const newFilters = { ...filters, query: query || undefined }
    setFilters(newFilters)
    updateURL(newFilters)
  }

  // Handle filter changes
  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
    updateURL(newFilters)
  }

  // Effect to perform search when filters change
  useEffect(() => {
    performSearch(filters)
  }, [filters, performSearch])

  // Initial load - always show all content
  useEffect(() => {
    performSearch(filters)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const hasActiveFilters = (searchFilters: SearchFilters) => {
    return !!(
      (searchFilters.type && searchFilters.type !== 'ALL') ||
      (searchFilters.genres && searchFilters.genres.length > 0) ||
      (searchFilters.platforms && searchFilters.platforms.length > 0) ||
      searchFilters.yearRange?.min ||
      searchFilters.yearRange?.max ||
      searchFilters.director
    )
  }

  const clearAllFilters = () => {
    const clearedFilters = {}
    setFilters(clearedFilters)
    updateURL(clearedFilters)
  }

  return (
    <div className="min-h-screen bg-[#161515] text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">İçerik Keşfet</h1>
          <p className="text-gray-400 mb-4">
            Tüm filmleri ve dizileri keşfedin, arama yapın ve filtrelerle istediğiniz içerikleri bulun
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <SearchBar
              defaultValue={filters.query || ''}
              onSearch={handleSearch}
              showSearchButton={false}
              className="w-full"
            />
          </div>
        </div>

        {/* Filter Toggle & Results Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              className="border-gray-700 text-white hover:bg-gray-800 flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtreler
              {hasActiveFilters(filters) && (
                <Badge variant="secondary" className="bg-blue-600 text-white ml-1">
                  {[
                    filters.type !== 'ALL' ? 1 : 0,
                    filters.genres?.length || 0,
                    filters.platforms?.length || 0,
                    filters.yearRange?.min || filters.yearRange?.max ? 1 : 0,
                    filters.director ? 1 : 0
                  ].reduce((a, b) => a + b, 0)}
                </Badge>
              )}
            </Button>
            
            {hasActiveFilters(filters) && (
              <Button
                onClick={clearAllFilters}
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Filtreleri Temizle
              </Button>
            )}
          </div>

          {/* Results Summary */}
          {!loading && (
            <div className="text-gray-400">
              {totalResults > 0 ? (
                <span>
                  {totalResults} {filters.query || hasActiveFilters(filters) ? 'sonuç bulundu' : 'içerik mevcut'}
                </span>
              ) : (
                <span>Sonuç bulunamadı</span>
              )}
            </div>
          )}
        </div>

        {/* Active Filters Display */}
        {(filters.query || hasActiveFilters(filters)) && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {filters.query && (
                <Badge variant="secondary" className="bg-gray-700 text-white">
                  Arama: "{filters.query}"
                  <button
                    onClick={() => handleSearch('')}
                    className="ml-2 hover:text-gray-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              
              {filters.type && filters.type !== 'ALL' && (
                <Badge variant="secondary" className="bg-blue-600 text-white">
                  {filters.type === 'FILM' ? 'Filmler' : 'Diziler'}
                  <button
                    onClick={() => handleFiltersChange({ ...filters, type: 'ALL' })}
                    className="ml-2 hover:text-gray-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              
              {filters.genres?.map((genre) => (
                <Badge key={genre} variant="secondary" className="bg-green-600 text-white">
                  {genre}
                  <button
                    onClick={() => handleFiltersChange({
                      ...filters,
                      genres: filters.genres?.filter(g => g !== genre)
                    })}
                    className="ml-2 hover:text-gray-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              
              {filters.platforms?.map((platform) => (
                <Badge key={platform} variant="secondary" className="bg-purple-600 text-white">
                  {platform}
                  <button
                    onClick={() => handleFiltersChange({
                      ...filters,
                      platforms: filters.platforms?.filter(p => p !== platform)
                    })}
                    className="ml-2 hover:text-gray-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <SearchFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
              />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            <ContentGrid
              contents={results}
              loading={loading}
              emptyMessage={
                filters.query 
                  ? `"${filters.query}" için sonuç bulunamadı`
                  : hasActiveFilters(filters)
                    ? "Seçilen filtreler için sonuç bulunamadı"
                    : "Henüz içerik eklenmemiş"
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
} 