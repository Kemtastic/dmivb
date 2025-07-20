import { NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/auth-helpers"
import { getUserRating, upsertRating, getAverageRating, getContentRatings } from "@/lib/db/queries"

// GET /api/ratings?contentId=xxx&userId=xxx
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const contentId = searchParams.get("contentId")
    const userId = searchParams.get("userId")
    const includeAll = searchParams.get("includeAll") === "true"

    if (!contentId) {
      return NextResponse.json(
        { error: "contentId is required" },
        { status: 400 }
      )
    }

    // If userId is provided, get user's specific rating
    if (userId && !includeAll) {
      const userRating = await getUserRating(userId, contentId)
      return NextResponse.json({ userRating })
    }

    // Get average rating and count for content
    const averageData = await getAverageRating(contentId)
    
    // If includeAll is true, also get all ratings for the content
    if (includeAll) {
      const allRatings = await getContentRatings(contentId)
      return NextResponse.json({
        average: averageData.average,
        count: averageData.count,
        ratings: allRatings
      })
    }

    return NextResponse.json(averageData)
  } catch (error) {
    console.error("Error fetching ratings:", error)
    return NextResponse.json(
      { error: "Failed to fetch ratings" },
      { status: 500 }
    )
  }
}

// POST /api/ratings
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { contentId, rating } = body

    if (!contentId || !rating) {
      return NextResponse.json(
        { error: "contentId and rating are required" },
        { status: 400 }
      )
    }

    if (typeof rating !== "number" || rating < 1 || rating > 10) {
      return NextResponse.json(
        { error: "Rating must be a number between 1 and 10" },
        { status: 400 }
      )
    }

    const userRating = await upsertRating(session.user.id, contentId, rating)
    const averageData = await getAverageRating(contentId)

    return NextResponse.json({
      success: true,
      userRating,
      average: averageData.average,
      count: averageData.count
    })
  } catch (error) {
    console.error("Error saving rating:", error)
    return NextResponse.json(
      { error: "Failed to save rating" },
      { status: 500 }
    )
  }
} 