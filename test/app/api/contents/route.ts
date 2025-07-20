import { NextRequest, NextResponse } from 'next/server'
import { getAllContents, getContentsByType } from '@/lib/db/queries'
import { ContentType } from '@/generated/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') as ContentType | null
    const sortBy = searchParams.get('sortBy') as 'releaseYear' | 'createdAt' || 'createdAt'
    const sortOrder = searchParams.get('sortOrder') as 'asc' | 'desc' || 'desc'

    let contents

    if (type && (type === 'FILM' || type === 'DIZI')) {
      // Get contents by type
      contents = await getContentsByType(type, sortBy, sortOrder)
    } else {
      // Get all contents
      contents = await getAllContents()
    }

    return NextResponse.json({
      success: true,
      data: contents,
      count: contents.length
    })

  } catch (error) {
    console.error('Contents API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'İçerikler getirilirken bir hata oluştu',
        data: [],
        count: 0
      },
      { status: 500 }
    )
  }
} 