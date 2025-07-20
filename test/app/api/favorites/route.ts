import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-helpers'
import { 
  addToFavorites, 
  removeFromFavorites, 
  getUserFavorites,
  isContentFavorited 
} from '@/lib/db/queries'

// GET user's favorites
export async function GET() {
  try {
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const favorites = await getUserFavorites(session.user.id)
    return NextResponse.json({ favorites })

  } catch (error) {
    console.error('Get favorites error:', error)
    return NextResponse.json(
      { error: 'Favoriler getirilirken hata oluştu' }, 
      { status: 500 }
    )
  }
}

// POST add to favorites
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

    // Check if already favorited
    const alreadyFavorited = await isContentFavorited(session.user.id, contentId)
    if (alreadyFavorited) {
      return NextResponse.json({ error: 'Bu içerik zaten favorilerinizde' }, { status: 400 })
    }

    await addToFavorites(session.user.id, contentId)
    return NextResponse.json({ success: true, message: 'Favorilere eklendi' })

  } catch (error) {
    console.error('Add to favorites error:', error)
    return NextResponse.json(
      { error: 'Favorilere eklenirken hata oluştu' }, 
      { status: 500 }
    )
  }
}

// DELETE remove from favorites
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

    await removeFromFavorites(session.user.id, contentId)
    return NextResponse.json({ success: true, message: 'Favorilerden çıkarıldı' })

  } catch (error) {
    console.error('Remove from favorites error:', error)
    return NextResponse.json(
      { error: 'Favorilerden çıkarılırken hata oluştu' }, 
      { status: 500 }
    )
  }
} 