import { NextRequest, NextResponse } from "next/server"
import { searchContents, getAllGenres } from "@/lib/db/queries"
import { ContentType, Platform } from "@/generated/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse query parameters
    const query = searchParams.get('q') || undefined
    const type = searchParams.get('type') as ContentType | 'ALL' || 'ALL'
    const genresParam = searchParams.get('genres')
    const platformsParam = searchParams.get('platforms')
    const minYear = searchParams.get('minYear')
    const maxYear = searchParams.get('maxYear')
    const director = searchParams.get('director') || undefined

    // Parse arrays from comma-separated strings
    const genres = genresParam ? genresParam.split(',').filter(Boolean) : undefined
    const platforms = platformsParam ? platformsParam.split(',').filter(Boolean) as Platform[] : undefined

    // Parse year range
    const yearRange = (minYear || maxYear) ? {
      min: minYear ? parseInt(minYear) : undefined,
      max: maxYear ? parseInt(maxYear) : undefined
    } : undefined

    // Build filters object
    const filters = {
      query,
      type,
      genres,
      platforms,
      yearRange,
      director
    }

    // Search content
    const results = await searchContents(filters)

    return NextResponse.json({
      success: true,
      data: results,
      count: results.length,
      filters: filters
    })

  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json(
      { 
        success: false, 
        error: "Arama yapılırken bir hata oluştu",
        data: [],
        count: 0
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const results = await searchContents(body.filters)

    return NextResponse.json({
      success: true,
      data: results,
      count: results.length,
      filters: body.filters
    })

  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json(
      { 
        success: false, 
        error: "Arama yapılırken bir hata oluştu",
        data: [],
        count: 0
      },
      { status: 500 }
    )
  }
} 