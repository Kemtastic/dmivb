import { NextResponse } from "next/server"
import { getAllGenres } from "@/lib/db/queries"

export async function GET() {
  try {
    const genres = await getAllGenres()

    return NextResponse.json({
      success: true,
      data: genres
    })

  } catch (error) {
    console.error("Genres API error:", error)
    return NextResponse.json(
      { 
        success: false, 
        error: "Türler getirilirken bir hata oluştu",
        data: []
      },
      { status: 500 }
    )
  }
} 