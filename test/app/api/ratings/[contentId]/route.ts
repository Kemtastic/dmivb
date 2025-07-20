import { NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/auth-helpers"
import { deleteRating, getUserRating, getAverageRating } from "@/lib/db/queries"

// DELETE /api/ratings/[contentId]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ contentId: string }> }
) {
  try {
    const session = await getSession()
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { contentId } = await params

    // Check if user has rated this content
    const existingRating = await getUserRating(session.user.id, contentId)
    if (!existingRating) {
      return NextResponse.json(
        { error: "You haven't rated this content" },
        { status: 404 }
      )
    }

    await deleteRating(session.user.id, contentId)
    const averageData = await getAverageRating(contentId)

    return NextResponse.json({
      success: true,
      message: "Rating deleted successfully",
      average: averageData.average,
      count: averageData.count
    })
  } catch (error) {
    console.error("Error deleting rating:", error)
    return NextResponse.json(
      { error: "Failed to delete rating" },
      { status: 500 }
    )
  }
} 