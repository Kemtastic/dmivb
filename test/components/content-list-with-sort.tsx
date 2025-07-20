'use client'

import { useState } from 'react'
import { Content } from '@/generated/prisma'
import { ContentGrid } from '@/components/search/content-grid'
import { SortDropdown } from '@/components/search/sort-dropdown'

interface ContentListWithSortProps {
  initialContents: Content[]
  emptyMessage: string
  contentType: 'film' | 'dizi'
}

export function ContentListWithSort({ 
  initialContents, 
  emptyMessage, 
  contentType 
}: ContentListWithSortProps) {
  const [contents, setContents] = useState<Content[]>(initialContents)

  const handleSort = (sortedContents: Content[]) => {
    setContents(sortedContents)
  }

  return (
    <>
      {/* Results Summary */}
      <div className="mb-6">
        <div className="text-gray-400">
          {contents.length > 0 ? (
            <span>{contents.length} {contentType} bulundu</span>
          ) : (
            <span>Henüz {contentType} eklenmemiş</span>
          )}
        </div>
      </div>

      {/* Sort Controls */}
      {contents.length > 0 && (
        <SortDropdown 
          contents={contents} 
          onSort={handleSort} 
        />
      )}

      {/* Content Grid */}
      <ContentGrid
        contents={contents}
        loading={false}
        emptyMessage={emptyMessage}
      />
    </>
  )
} 