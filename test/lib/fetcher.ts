import { ContentType } from '@/generated/prisma'

export const fetcher = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}

// Get all contents
export const fetchAllContents = async () => {
  const response = await fetch('/api/contents')
  if (!response.ok) {
    throw new Error('İçerikler getirilirken hata oluştu')
  }
  const result = await response.json()
  return result.data
}

// Get contents by type
export const fetchContentsByType = async (
  type: ContentType, 
  sortBy: 'releaseYear' | 'createdAt' = 'createdAt', 
  sortOrder: 'asc' | 'desc' = 'desc'
) => {
  const params = new URLSearchParams({
    type,
    sortBy,
    sortOrder
  })
  
  const response = await fetch(`/api/contents?${params}`)
  if (!response.ok) {
    throw new Error('İçerikler getirilirken hata oluştu')
  }
  const result = await response.json()
  return result.data
}
