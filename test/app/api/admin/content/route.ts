import { auth } from "@/lib/auth"
import { createContent, getContentsByAdmin, updateContentByAdmin, deleteContentByAdmin } from "@/lib/db/queries"
import { getSession } from "@/lib/session"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 })
    }

    const body = await request.json()
    const {
      title,
      summary,
      type,
      releaseYear,
      trailerUrl,
      image,
      director,
      actors,
      genres,
      platform,
    } = body

    if (
      !title ||
      !summary ||
      !type ||
      !releaseYear ||
      !director ||
      !actors ||
      !genres ||
      !platform
    ) {
      return NextResponse.json(
        { error: "Gerekli alanlar eksik" },
        { status: 400 }
      )
    }

    const content = await createContent({
      title,
      summary,
      type,
      releaseYear,
      trailerUrl,
      image,
      director,
      actors,
      genres,
      platform,
      userId: session.user.id,
    })

    return NextResponse.json({
      success: true,
      content,
    })
  } catch (error) {
    console.error("Content creation error:", error)
    return NextResponse.json(
      { error: "İçerik eklenirken bir hata oluştu" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const session = await getSession()

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 })
  }

  const contents = await getContentsByAdmin()
  return NextResponse.json({
    success: true,
    data:contents,
  })
}

export async function PUT(request: NextRequest) {
  const session = await getSession()

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 })
  }

  const body = await request.json()
  const { id, ...data } = body

  const content = await updateContentByAdmin(id, data)

  return NextResponse.json({
    success: true,
    content,
  })
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getSession()

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 })
    }

    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { error: "Content ID gerekli" },
        { status: 400 }
      )
    }

    await deleteContentByAdmin(id)

    return NextResponse.json({
      success: true,
      message: "İçerik başarıyla silindi",
    })
  } catch (error) {
    console.error("Content deletion error:", error)
    return NextResponse.json(
      { error: "İçerik silinirken bir hata oluştu" },
      { status: 500 }
    )
  }
} 
