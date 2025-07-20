import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-helpers'
import { 
  getListById, 
  updateList, 
  deleteList 
} from '@/lib/db/queries'

// GET specific list
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ listId: string }> }
) {
  try {
    const { listId } = await params
    const session = await getSession()

    const list = await getListById(listId, session?.user?.id)

    if (!list) {
      return NextResponse.json({ error: 'Liste bulunamadı' }, { status: 404 })
    }

    return NextResponse.json({ list })

  } catch (error) {
    console.error('Get list error:', error)
    return NextResponse.json(
      { error: 'Liste getirilirken hata oluştu' }, 
      { status: 500 }
    )
  }
}

// PUT update list
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ listId: string }> }
) {
  try {
    const { listId } = await params
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { name, description, isPublic } = await request.json()
    
    if (name !== undefined) {
      if (!name || name.trim().length === 0) {
        return NextResponse.json({ error: 'Liste adı gerekli' }, { status: 400 })
      }

      if (name.length > 100) {
        return NextResponse.json({ error: 'Liste adı çok uzun (maksimum 100 karakter)' }, { status: 400 })
      }
    }

    const list = await updateList(listId, session.user.id, {
      name: name?.trim(),
      description: description?.trim(),
      isPublic: isPublic !== undefined ? Boolean(isPublic) : undefined,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Liste başarıyla güncellendi',
      list 
    })

  } catch (error) {
    console.error('Update list error:', error)
    return NextResponse.json(
      { error: 'Liste güncellenirken hata oluştu' }, 
      { status: 500 }
    )
  }
}

// DELETE list
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ listId: string }> }
) {
  try {
    const { listId } = await params
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await deleteList(listId, session.user.id)

    return NextResponse.json({ 
      success: true, 
      message: 'Liste başarıyla silindi' 
    })

  } catch (error) {
    console.error('Delete list error:', error)
    return NextResponse.json(
      { error: 'Liste silinirken hata oluştu' }, 
      { status: 500 }
    )
  }
} 