import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-helpers'
import {
  addToWatched,
  removeFromWatched,
  getUserWatched,
  isContentWatched
} from '@/lib/db/queries'

// GET user's watched list
export async function GET() {
  try {
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const watched = await getUserWatched(session.user.id)
    return NextResponse.json(watched)

  } catch (error) {
    console.error('Get watched error:', error)
    return NextResponse.json(
      { error: 'İzlenenleri alırken hata oluştu' }, 
      { status: 500 }
    )
  }
}

// POST add to watched
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { contentId } = await request.json()
    
    if (!contentId) {
      return NextResponse.json({ error: 'İçerik ID gerekli' }, { status: 400 })
    }

    // Check if already watched
    const alreadyWatched = await isContentWatched(session.user.id, contentId)
    if (alreadyWatched) {
      return NextResponse.json({ error: 'Bu içerik zaten izlenenlerde' }, { status: 400 })
    }

    await addToWatched(session.user.id, contentId)
    return NextResponse.json({ success: true, message: 'İzlenenlere eklendi' })

  } catch (error) {
    console.error('Add to watched error:', error)
    return NextResponse.json(
      { error: 'İzlenenlere eklenirken hata oluştu' }, 
      { status: 500 }
    )
  }
}

// DELETE remove from watched
export async function DELETE(request: NextRequest) {
  try {
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { contentId } = await request.json()
    
    if (!contentId) {
      return NextResponse.json({ error: 'İçerik ID gerekli' }, { status: 400 })
    }

    await removeFromWatched(session.user.id, contentId)
    return NextResponse.json({ success: true, message: 'İzlenenlerden çıkarıldı' })

  } catch (error) {
    console.error('Remove from watched error:', error)
    return NextResponse.json(
      { error: 'İzlenenlerden çıkarılırken hata oluştu' }, 
      { status: 500 }
    )
  }
} 