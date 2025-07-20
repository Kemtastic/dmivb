import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-helpers'
import { getUserRecommendations, getAverageRating, getContentsByGuest } from '@/lib/db/queries'

export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '8')
    
    let recommendations
    
    if (session?.user?.id) {
      // Get personalized recommendations for logged-in user
      recommendations = await getUserRecommendations(session.user.id, limit)
    } else {
      // For guests, return recent/popular content
      const allContent = await getContentsByGuest()
      recommendations = allContent
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit)
        .map(content => ({
          ...content,
          recommendationScore: 0
        }))
    }
    
    // Add average rating to each recommendation
    const recommendationsWithRatings = await Promise.all(
      recommendations.map(async (content) => {
        const rating = await getAverageRating(content.id)
        return {
          ...content,
          averageRating: rating.average || 0,
          ratingCount: rating.count || 0
        }
      })
    )
    
    return NextResponse.json(recommendationsWithRatings)
  } catch (error) {
    console.error('Error getting recommendations:', error)
    return NextResponse.json(
      { error: 'Failed to get recommendations' },
      { status: 500 }
    )
  }
} 