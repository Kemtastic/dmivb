import 'server-only'

import db from "./index"
import { Platform, ContentType } from "@/generated/prisma"

export async function updateUserProfile(
  userId: string,
  data: {
    bio?: string
    location?: string
    twitter?: string
    instagram?: string
  }
) {
  return await db.user.update({
    where: { id: userId },
    data: {
      bio: data.bio,
      location: data.location,
      twitter: data.twitter,
      instagram: data.instagram,
      updatedAt: new Date(),
    },
  })
}

export async function createContent(data: {
  title: string
  summary: string
  type: ContentType
  releaseYear: number
  trailerUrl: string
  image: string
  director: string
  actors: string[]
  genres: string[]
  platform: Platform
  userId: string
}) {
  try {
    await db.content.create({
      data: {
        title: data.title,
        summary: data.summary,
        type: data.type,
        releaseYear: data.releaseYear,
        trailerUrl: data.trailerUrl,
        image: data.image,
        director: data.director,
        actors: data.actors,
        genres: data.genres,
        platform: data.platform,
        addedById: data.userId,
      },
    })
  } catch (error) {
    throw new Error("Something went wrong")
  }
}

export async function getContentsByAdmin() {
  try {
    return await db.content.findMany()
  } catch (error) {
    throw new Error("Something went wrong")
  }
}
export async function getContentsByGuest() {
  try {
    return await db.content.findMany()
  } catch (error) {
    throw new Error("Something went wrong")
  }
}

export async function updateContentByAdmin(id: string, data: {
  title: string
  summary: string
  type: ContentType
  releaseYear: number
  trailerUrl: string
  image: string
  director: string
  actors: string[]
  genres: string[]
  platform: Platform
}) {
  console.log(data)
  try {
    return await db.content.update({
      where: { id },
      data,
    })
  } catch (error) {
    console.log(error)
    throw new Error("Something went wrong")
  }
}

export async function deleteContentByAdmin(id: string) {
  try {
    return await db.content.delete({
      where: { id },
    })
  } catch (error) {
    console.log(error)
    throw new Error("İçerik silinirken bir hata oluştu")
  }
}

export async function getAllContents() {
  try {
    return await db.content.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  } catch (error) {
    throw new Error("İçerikler getirilirken bir hata oluştu")
  }
}

export async function getContentById(id: string) {
  try {
    return await db.content.findUnique({
      where: { id },
      include: {
        addedBy: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })
  } catch (error) {
    throw new Error("İçerik getirilirken bir hata oluştu")
  }
}

export async function getMovieById(id: string) {
  try {
    return await db.content.findFirst({
      where: { 
        id,
        type: ContentType.FILM
      }
    })
  } catch (error) {
    throw new Error("Film getirilirken bir hata oluştu")
  }
}

export async function getSeriesById(id: string) {
  try {
    return await db.content.findFirst({
      where: { 
        id,
        type: ContentType.DIZI
      }
    })
  } catch (error) {
    throw new Error("Dizi getirilirken bir hata oluştu")
  }
}

// Favorites operations
export async function addToFavorites(userId: string, contentId: string) {
  try {
    return await db.favorite.create({
      data: {
        userId,
        contentId
      }
    })
  } catch (error) {
    throw new Error("Favorilere eklenirken bir hata oluştu")
  }
}

export async function removeFromFavorites(userId: string, contentId: string) {
  try {
    return await db.favorite.delete({
      where: {
        userId_contentId: {
          userId,
          contentId
        }
      }
    })
  } catch (error) {
    throw new Error("Favorilerden çıkarılırken bir hata oluştu")
  }
}

export async function isContentFavorited(userId: string, contentId: string) {
  try {
    const favorite = await db.favorite.findUnique({
      where: {
        userId_contentId: {
          userId,
          contentId
        }
      }
    })
    return !!favorite
  } catch (error) {
    throw new Error("Favori durumu kontrol edilirken bir hata oluştu")
  }
}

export async function getUserFavorites(userId: string) {
  try {
    return await db.favorite.findMany({
      where: { userId },
      include: {
        content: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  } catch (error) {
    throw new Error("Kullanıcı favorileri getirilirken bir hata oluştu")
  }
}

export async function getContentFavoriteCount(contentId: string) {
  try {
    return await db.favorite.count({
      where: { contentId }
    })
  } catch (error) {
    throw new Error("Favori sayısı getirilirken bir hata oluştu")
  }
}

// Watched operations
export async function addToWatched(userId: string, contentId: string) {
  try {
    return await db.watched.create({
      data: {
        userId,
        contentId
      }
    })
  } catch (error) {
    throw new Error("İzlenenlere eklenirken bir hata oluştu")
  }
}

export async function removeFromWatched(userId: string, contentId: string) {
  try {
    return await db.watched.delete({
      where: {
        userId_contentId: {
          userId,
          contentId
        }
      }
    })
  } catch (error) {
    throw new Error("İzlenenlerden çıkarılırken bir hata oluştu")
  }
}

export async function isContentWatched(userId: string, contentId: string) {
  try {
    const watched = await db.watched.findUnique({
      where: {
        userId_contentId: {
          userId,
          contentId
        }
      }
    })
    return !!watched
  } catch (error) {
    throw new Error("İzlenme durumu kontrol edilirken bir hata oluştu")
  }
}

export async function getUserWatched(userId: string) {
  try {
    return await db.watched.findMany({
      where: { userId },
      include: {
        content: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  } catch (error) {
    throw new Error("Kullanıcı izlenenleri getirilirken bir hata oluştu")
  }
}

export async function getContentWatchedCount(contentId: string) {
  try {
    return await db.watched.count({
      where: { contentId }
    })
  } catch (error) {
    throw new Error("İzlenme sayısı getirilirken bir hata oluştu")
  }
}

// List operations
export async function createList(data: {
  name: string
  description?: string
  isPublic: boolean
  userId: string
}) {
  try {
    return await db.list.create({
      data: {
        name: data.name,
        description: data.description,
        isPublic: data.isPublic,
        userId: data.userId,
      },
      include: {
        listItems: {
          include: {
            content: true
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      }
    })
  } catch (error) {
    throw new Error("Liste oluşturulurken bir hata oluştu")
  }
}

export async function getUserLists(userId: string) {
  try {
    return await db.list.findMany({
      where: { userId },
      include: {
        listItems: {
          include: {
            content: true
          }
        },
        _count: {
          select: {
            listItems: true
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      }
    })
  } catch (error) {
    throw new Error("Kullanıcı listeleri getirilirken bir hata oluştu")
  }
}

export async function getListById(listId: string, userId?: string) {
  try {
    const list = await db.list.findUnique({
      where: { id: listId },
      include: {
        listItems: {
          include: {
            content: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true
          }
        },
        _count: {
          select: {
            listItems: true
          }
        }
      }
    })

    // Check if list exists and is accessible
    if (!list) {
      return null
    }

    // If list is private and user is not the owner, return null
    if (!list.isPublic && (!userId || list.userId !== userId)) {
      return null
    }

    return list
  } catch (error) {
    throw new Error("Liste getirilirken bir hata oluştu")
  }
}

export async function updateList(listId: string, userId: string, data: {
  name?: string
  description?: string
  isPublic?: boolean
}) {
  try {
    return await db.list.update({
      where: {
        id: listId,
        userId: userId // Ensure user owns the list
      },
      data: {
        name: data.name,
        description: data.description,
        isPublic: data.isPublic,
        updatedAt: new Date()
      },
      include: {
        listItems: {
          include: {
            content: true
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      }
    })
  } catch (error) {
    throw new Error("Liste güncellenirken bir hata oluştu")
  }
}

export async function deleteList(listId: string, userId: string) {
  try {
    return await db.list.delete({
      where: {
        id: listId,
        userId: userId // Ensure user owns the list
      }
    })
  } catch (error) {
    throw new Error("Liste silinirken bir hata oluştu")
  }
}

export async function addContentToList(listId: string, contentId: string, userId: string) {
  try {
    // First check if user owns the list
    const list = await db.list.findUnique({
      where: { id: listId, userId }
    })

    if (!list) {
      throw new Error("Liste bulunamadı veya yetkiniz yok")
    }

    // Check if content is already in the list
    const existingItem = await db.listItem.findUnique({
      where: {
        listId_contentId: {
          listId,
          contentId
        }
      }
    })

    if (existingItem) {
      throw new Error("Bu içerik zaten listede mevcut")
    }

    return await db.listItem.create({
      data: {
        listId,
        contentId
      },
      include: {
        content: true,
        list: true
      }
    })
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "İçerik listeye eklenirken bir hata oluştu")
  }
}

export async function removeContentFromList(listId: string, contentId: string, userId: string) {
  try {
    // First check if user owns the list
    const list = await db.list.findUnique({
      where: { id: listId, userId }
    })

    if (!list) {
      throw new Error("Liste bulunamadı veya yetkiniz yok")
    }

    return await db.listItem.delete({
      where: {
        listId_contentId: {
          listId,
          contentId
        }
      }
    })
  } catch (error) {
    throw new Error("İçerik listeden çıkarılırken bir hata oluştu")
  }
}

export async function getPublicLists(limit: number = 20) {
  try {
    return await db.list.findMany({
      where: { isPublic: true },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true
          }
        },
        listItems: {
          include: {
            content: true
          }
        },
        _count: {
          select: {
            listItems: true
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      },
      take: limit
    })
  } catch (error) {
    throw new Error("Halka açık listeler getirilirken bir hata oluştu")
  }
}

export async function isContentInList(listId: string, contentId: string) {
  try {
    const listItem = await db.listItem.findUnique({
      where: {
        listId_contentId: {
          listId,
          contentId
        }
      }
    })
    return !!listItem
  } catch (error) {
    throw new Error("Liste durumu kontrol edilirken bir hata oluştu")
  }
}

// Search and filter operations
export async function searchContents(filters: {
  query?: string
  type?: ContentType | 'ALL'
  genres?: string[]
  platforms?: Platform[]
  yearRange?: { min?: number; max?: number }
  director?: string
}) {
  try {
    const whereClause: any = {}

    // Text search in title, director, actors
    if (filters.query) {
      whereClause.OR = [
        { title: { contains: filters.query, mode: 'insensitive' } },
        { director: { contains: filters.query, mode: 'insensitive' } },
        { actors: { hasSome: [filters.query] } },
        { summary: { contains: filters.query, mode: 'insensitive' } }
      ]
    }

    // Content type filter
    if (filters.type && filters.type !== 'ALL') {
      whereClause.type = filters.type
    }

    // Genre filter
    if (filters.genres && filters.genres.length > 0) {
      whereClause.genres = { hasSome: filters.genres }
    }

    // Platform filter
    if (filters.platforms && filters.platforms.length > 0) {
      whereClause.platform = { in: filters.platforms }
    }

    // Year range filter
    if (filters.yearRange) {
      whereClause.releaseYear = {}
      if (filters.yearRange.min) {
        whereClause.releaseYear.gte = filters.yearRange.min
      }
      if (filters.yearRange.max) {
        whereClause.releaseYear.lte = filters.yearRange.max
      }
    }

    // Director filter
    if (filters.director) {
      whereClause.director = { contains: filters.director, mode: 'insensitive' }
    }

    return await db.content.findMany({
      where: whereClause,
      orderBy: [
        { createdAt: 'desc' }
      ],
      include: {
        addedBy: {
          select: {
            name: true
          }
        }
      }
    })
  } catch (error) {
    console.error('Search error:', error)
    throw new Error("Arama yapılırken bir hata oluştu")
  }
}

// Get unique genres from all content
export async function getAllGenres() {
  try {
    const contents = await db.content.findMany({
      select: { genres: true }
    })
    
    const allGenres = contents.flatMap(content => content.genres)
    const uniqueGenres = [...new Set(allGenres)].sort()
    
    return uniqueGenres
  } catch (error) {
    throw new Error("Türler getirilirken bir hata oluştu")
  }
}

// Get content by genre
export async function getContentsByGenre(genre: string) {
  try {
    return await db.content.findMany({
      where: {
        genres: { has: genre }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  } catch (error) {
    throw new Error("Tür bazlı içerikler getirilirken bir hata oluştu")
  }
}

// Get content by type (FILM or DIZI)
export async function getContentsByType(type: ContentType, sortBy: 'releaseYear' | 'createdAt' = 'createdAt', sortOrder: 'asc' | 'desc' = 'desc') {
  try {
    return await db.content.findMany({
      where: { type },
      orderBy: {
        [sortBy]: sortOrder
      }
    })
  } catch (error) {
    throw new Error("Tip bazlı içerikler getirilirken bir hata oluştu")
  }
}

// Get content by year range
export async function getContentsByYearRange(minYear: number, maxYear: number) {
  try {
    return await db.content.findMany({
      where: {
        releaseYear: {
          gte: minYear,
          lte: maxYear
        }
      },
      orderBy: {
        releaseYear: 'desc'
      }
    })
  } catch (error) {
    throw new Error("Yıl bazlı içerikler getirilirken bir hata oluştu")
  }
}

// ========================
// RATING OPERATIONS
// ========================

// Get user's rating for specific content
export async function getUserRating(userId: string, contentId: string) {
  try {
    return await db.rating.findUnique({
      where: {
        userId_contentId: {
          userId,
          contentId
        }
      }
    })
  } catch (error) {
    throw new Error("Kullanıcı puanı getirilirken bir hata oluştu")
  }
}

// Create or update user rating
export async function upsertRating(userId: string, contentId: string, rating: number) {
  try {
    // Validate rating is between 1-10
    if (rating < 1 || rating > 10) {
      throw new Error("Puan 1-10 arasında olmalıdır")
    }

    return await db.rating.upsert({
      where: {
        userId_contentId: {
          userId,
          contentId
        }
      },
      update: {
        rating,
        updatedAt: new Date()
      },
      create: {
        userId,
        contentId,
        rating
      }
    })
  } catch (error) {
    throw new Error("Puan kaydedilirken bir hata oluştu")
  }
}

// Delete user rating
export async function deleteRating(userId: string, contentId: string) {
  try {
    return await db.rating.delete({
      where: {
        userId_contentId: {
          userId,
          contentId
        }
      }
    })
  } catch (error) {
    throw new Error("Puan silinirken bir hata oluştu")
  }
}

// Get average rating for content
export async function getAverageRating(contentId: string) {
  try {
    const result = await db.rating.aggregate({
      where: { contentId },
      _avg: { rating: true },
      _count: { rating: true }
    })

    return {
      average: result._avg.rating ? Number(result._avg.rating.toFixed(1)) : null,
      count: result._count.rating
    }
  } catch (error) {
    throw new Error("Ortalama puan hesaplanırken bir hata oluştu")
  }
}

// Get all ratings for content with user info
export async function getContentRatings(contentId: string) {
  try {
    return await db.rating.findMany({
      where: { contentId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  } catch (error) {
    throw new Error("İçerik puanları getirilirken bir hata oluştu")
  }
}

// Get user's all ratings
export async function getUserRatings(userId: string) {
  try {
    return await db.rating.findMany({
      where: { userId },
      include: {
        content: {
          select: {
            id: true,
            title: true,
            type: true,
            image: true,
            releaseYear: true
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      }
    })
  } catch (error) {
    throw new Error("Kullanıcı puanları getirilirken bir hata oluştu")
  }
}

// RECOMMENDATION ALGORITHM
export async function getUserRecommendations(userId: string, limit: number = 6) {
  try {
    // Get user's watched content
    const watchedContent = await db.watched.findMany({
      where: { userId },
      include: {
        content: {
          select: {
            id: true,
            genres: true,
            type: true,
            platform: true
          }
        }
      }
    })

    // Get user's ratings (especially high ratings: 7+)
    const userRatings = await db.rating.findMany({
      where: { 
        userId,
        rating: { gte: 7 } // High ratings only
      },
      include: {
        content: {
          select: {
            id: true,
            genres: true,
            type: true,
            platform: true
          }
        }
      }
    })

    // Extract watched content IDs to exclude them from recommendations
    const watchedContentIds = watchedContent.map(w => w.content.id)

    // Analyze preferred genres and types from high-rated content
    const preferredGenres: { [key: string]: number } = {}
    const preferredTypes: { [key: string]: number } = {}
    const preferredPlatforms: { [key: string]: number } = {}

    userRatings.forEach(rating => {
      const content = rating.content
      
      // Count genres
      content.genres.forEach(genre => {
        preferredGenres[genre] = (preferredGenres[genre] || 0) + rating.rating
      })

      // Count types
      preferredTypes[content.type] = (preferredTypes[content.type] || 0) + rating.rating

      // Count platforms
      preferredPlatforms[content.platform] = (preferredPlatforms[content.platform] || 0) + rating.rating
    })

    // If user has no high ratings, fall back to watched content analysis
    if (userRatings.length === 0) {
      watchedContent.forEach(watched => {
        const content = watched.content
        
        content.genres.forEach(genre => {
          preferredGenres[genre] = (preferredGenres[genre] || 0) + 1
        })

        preferredTypes[content.type] = (preferredTypes[content.type] || 0) + 1
        preferredPlatforms[content.platform] = (preferredPlatforms[content.platform] || 0) + 1
      })
    }

    // Get all content that user hasn't watched
    const recommendations = await db.content.findMany({
      where: {
        id: {
          notIn: watchedContentIds
        }
      },
      select: {
        id: true,
        title: true,
        type: true,
        releaseYear: true,
        trailerUrl: true,
        director: true,
        actors: true,
        genres: true,
        platform: true,
        image: true,
        summary: true,
        createdAt: true,
        updatedAt: true
      }
    })

    // Score recommendations based on user preferences
    const scoredRecommendations = recommendations.map(content => {
      let score = 0

      // Score based on genres
      content.genres.forEach(genre => {
        if (preferredGenres[genre]) {
          score += preferredGenres[genre]
        }
      })

      // Score based on type
      if (preferredTypes[content.type]) {
        score += preferredTypes[content.type] * 2 // Type preference is important
      }

      // Score based on platform
      if (preferredPlatforms[content.platform]) {
        score += preferredPlatforms[content.platform]
      }

      return {
        ...content,
        recommendationScore: score
      }
    })

    // Sort by score and return top recommendations
    const topRecommendations = scoredRecommendations
      .sort((a, b) => b.recommendationScore - a.recommendationScore)
      .slice(0, limit)

    // If we don't have enough personalized recommendations, fill with popular content
    if (topRecommendations.length < limit) {
      const additionalContent = await db.content.findMany({
        where: {
          id: {
            notIn: [
              ...watchedContentIds,
              ...topRecommendations.map(r => r.id)
            ]
          }
        },
        take: limit - topRecommendations.length,
        orderBy: {
          createdAt: 'desc' // Recent content as fallback
        },
        select: {
          id: true,
          title: true,
          type: true,
          releaseYear: true,
          trailerUrl: true,
          director: true,
          actors: true,
          genres: true,
          platform: true,
          image: true,
          summary: true,
          createdAt: true,
          updatedAt: true
        }
      })

      // Add fallback content with lower score
      additionalContent.forEach(content => {
        topRecommendations.push({
          ...content,
          recommendationScore: 0
        })
      })
    }

    return topRecommendations
  } catch (error) {
    console.error("Error getting recommendations:", error)
    
    // Fallback: return recent content if everything fails
    return await db.content.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        title: true,
        type: true,
        releaseYear: true,
        trailerUrl: true,
        director: true,
        actors: true,
        genres: true,
        platform: true,
        image: true,
        summary: true,
        createdAt: true,
        updatedAt: true
      }
    }).then(contents => contents.map(content => ({
      ...content,
      recommendationScore: 0
    })))
  }
}