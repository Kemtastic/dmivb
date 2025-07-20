import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-helpers'
import { 
  createList, 
  getUserLists,
  getPublicLists 
} from '@/lib/db/queries'

// GET user's lists or public lists
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const publicOnly = searchParams.get('public') === 'true'
    
    if (publicOnly) {
      // Get public lists (no auth required)
      const lists = await getPublicLists()
      return NextResponse.json({ lists })
    }

    // Get user's own lists (auth required)
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const lists = await getUserLists(session.user.id)
    return NextResponse.json({ lists })

  } catch (error) {
    console.error('Get lists error:', error)
    return NextResponse.json(
      { error: 'Listeler getirilirken hata oluştu' }, 
      { status: 500 }
    )
  }
}

// POST create new list
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { name, description, isPublic } = await request.json()
    
    if (!name || name.trim().length === 0) {
      return NextResponse.json({ error: 'Liste adı gerekli' }, { status: 400 })
    }

    if (name.length > 100) {
      return NextResponse.json({ error: 'Liste adı çok uzun (maksimum 100 karakter)' }, { status: 400 })
    }

    const list = await createList({
      name: name.trim(),
      description: description?.trim(),
      isPublic: Boolean(isPublic),
      userId: session.user.id,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Liste başarıyla oluşturuldu',
      list 
    })

  } catch (error) {
    console.error('Create list error:', error)
    return NextResponse.json(
      { error: 'Liste oluşturulurken hata oluştu' }, 
      { status: 500 }
    )
  }
} 