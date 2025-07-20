import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-helpers'
import { isContentFavorited, getContentFavoriteCount } from '@/lib/db/queries'

// GET check if content is favorited by user and get favorite count
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ contentId: string }> }
) {
  try {
    const { contentId } = await params
    const session = await getSession()

    // Get favorite count (public data)
    const favoriteCount = await getContentFavoriteCount(contentId)

    // Check if user has favorited this content (requires auth)
    let isFavorited = false
    if (session?.user) {
      isFavorited = await isContentFavorited(session.user.id, contentId)
    }

    return NextResponse.json({ 
      favoriteCount, 
      isFavorited: session?.user ? isFavorited : null 
    })

  } catch (error) {
    console.error('Get content favorite status error:', error)
    return NextResponse.json(
      { error: 'Favori durumu kontrol edilirken hata oluştu' }, 
      { status: 500 }
    )
  }
} 