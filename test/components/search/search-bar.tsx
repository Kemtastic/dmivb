"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  defaultValue?: string
  className?: string
  showSearchButton?: boolean
}

export const SearchBar = ({ 
  placeholder = "Film, dizi, yönetmen veya oyuncu ara...", 
  onSearch,
  defaultValue = "",
  className = "",
  showSearchButton = true
}: SearchBarProps) => {
  const [query, setQuery] = useState(defaultValue)
  const router = useRouter()

  const handleSearch = (searchQuery: string = query) => {
    if (onSearch) {
      onSearch(searchQuery)
    } else {
      // Default behavior: navigate to search page
      if (searchQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch()
  }

  const clearSearch = () => {
    setQuery("")
    handleSearch("")
  }

  return (
    <form onSubmit={handleSubmit} className={`relative flex gap-2 ${className}`}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-8 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {showSearchButton && (
        <Button 
          type="submit"
          variant="default"
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Search className="w-4 h-4" />
        </Button>
      )}
    </form>
  )
} 