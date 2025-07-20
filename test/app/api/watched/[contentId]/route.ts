import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-helpers'
import { isContentWatched, getContentWatchedCount } from '@/lib/db/queries'

// GET check if content is watched by user and get watched count
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ contentId: string }> }
) {
  try {
    const { contentId } = await params
    const session = await getSession()

    // Get watched count (public data)
    const watchedCount = await getContentWatchedCount(contentId)

    // Check if user has watched this content (requires auth)
    let isWatched = false
    if (session?.user) {
      isWatched = await isContentWatched(session.user.id, contentId)
    }

    return NextResponse.json({ 
      watchedCount, 
      isWatched: session?.user ? isWatched : null 
    })

  } catch (error) {
    console.error('Get content watched status error:', error)
    return NextResponse.json(
      { error: 'İzlenme durumu kontrol edilirken hata oluştu' }, 
      { status: 500 }
    )
  }
} 