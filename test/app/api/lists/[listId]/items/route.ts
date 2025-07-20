import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-helpers'
import { 
  addContentToList, 
  removeContentFromList 
} from '@/lib/db/queries'

// POST add content to list
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ listId: string }> }
) {
  try {
    const { listId } = await params
    const session = await getSession()
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { contentId } = await request.json()
    
    if (!contentId) {
      return NextResponse.json({ error: 'İçerik ID gerekli' }, { status: 400 })
    }

    const listItem = await addContentToList(listId, contentId, session.user.id)

    return NextResponse.json({ 
      success: true, 
      message: 'İçerik listeye eklendi',
      listItem 
    })

  } catch (error) {
    console.error('Add content to list error:', error)
    const errorMessage = error instanceof Error ? error.message : 'İçerik listeye eklenirken hata oluştu'
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    )
  }
}

// DELETE remove content from list
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

    const { contentId } = await request.json()
    
    if (!contentId) {
      return NextResponse.json({ error: 'İçerik ID gerekli' }, { status: 400 })
    }

    await removeContentFromList(listId, contentId, session.user.id)

    return NextResponse.json({ 
      success: true, 
      message: 'İçerik listeden çıkarıldı' 
    })

  } catch (error) {
    console.error('Remove content from list error:', error)
    const errorMessage = error instanceof Error ? error.message : 'İçerik listeden çıkarılırken hata oluştu'
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    )
  }
} 