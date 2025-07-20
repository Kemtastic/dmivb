'use client'

import { useState } from 'react'
import { Content } from '@/generated/prisma'

interface SortDropdownProps {
  contents: Content[]
  onSort: (sortedContents: Content[]) => void
}

export function SortDropdown({ contents, onSort }: SortDropdownProps) {
  const [sortBy, setSortBy] = useState<'releaseYear' | 'title'>('releaseYear')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const handleSort = (newSortBy: 'releaseYear' | 'title', newSortOrder: 'asc' | 'desc') => {
    setSortBy(newSortBy)
    setSortOrder(newSortOrder)

    const sorted = [...contents].sort((a, b) => {
      if (newSortBy === 'releaseYear') {
        const comparison = a.releaseYear - b.releaseYear
        return newSortOrder === 'asc' ? comparison : -comparison
      } else {
        const comparison = a.title.localeCompare(b.title, 'tr')
        return newSortOrder === 'asc' ? comparison : -comparison
      }
    })

    onSort(sorted)
  }

  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-gray-400 text-sm">Sırala:</span>
      
      {/* Sort by Release Year buttons */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-300">Yayın Yılı:</span>
        <button
          onClick={() => handleSort('releaseYear', 'desc')}
          className={`px-3 py-1 text-xs rounded ${
            sortBy === 'releaseYear' && sortOrder === 'desc'
              ? 'bg-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Yeni → Eski
        </button>
        <button
          onClick={() => handleSort('releaseYear', 'asc')}
          className={`px-3 py-1 text-xs rounded ${
            sortBy === 'releaseYear' && sortOrder === 'asc'
              ? 'bg-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Eski → Yeni
        </button>
      </div>
    </div>
  )
} 