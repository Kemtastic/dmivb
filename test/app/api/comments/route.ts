import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { auth } from '@/lib/auth';
import { getSession } from '@/lib/auth-helpers';

// Helper function to calculate like stats for a comment
function calculateLikeStats(comment: any, currentUserId?: string) {
  const likes = comment.commentLikes.filter((like: any) => like.isLike).length;
  const dislikes = comment.commentLikes.filter((like: any) => !like.isLike).length;
  
  // Find current user's like status
  let userLikeStatus = null;
  if (currentUserId) {
    const userLike = comment.commentLikes.find((like: any) => like.userId === currentUserId);
    if (userLike) {
      userLikeStatus = userLike.isLike ? 'liked' : 'disliked';
    }
  }
  
  // Remove commentLikes from response
  const { commentLikes, ...commentWithoutLikes } = comment;
  
  return {
    ...commentWithoutLikes,
    likeCount: likes,
    dislikeCount: dislikes,
    netLikes: likes - dislikes,
    userLikeStatus,
  };
}

// GET /api/comments?contentId=xxx
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const contentId = searchParams.get('contentId');

    if (!contentId) {
      return NextResponse.json(
        { error: 'Content ID is required' },
        { status: 400 }
      );
    }

    const session = await getSession();

    // Fetch top-level comments (parentId is null)
    const comments = await db.comment.findMany({
      where: {
        contentId: contentId,
        parentId: null, // Only top-level comments
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        commentLikes: {
          select: {
            isLike: true,
            userId: true,
          },
        },
        replies: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            commentLikes: {
              select: {
                isLike: true,
                userId: true,
              },
            },
          },
          orderBy: {
            createdAt: 'asc', // Replies in chronological order
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Calculate like counts and user's like status for comments and replies
    const commentsWithStats = comments.map(comment => {
      const commentStats = calculateLikeStats(comment, session?.user?.id);
      
      // Process replies
      const repliesWithStats = comment.replies.map(reply => 
        calculateLikeStats(reply, session?.user?.id)
      );
      
      return {
        ...commentStats,
        replies: repliesWithStats,
      };
    });

    // Sort by net likes (descending), then by creation date (descending)
    commentsWithStats.sort((a, b) => {
      if (a.netLikes !== b.netLikes) {
        return b.netLikes - a.netLikes;
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return NextResponse.json(commentsWithStats);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST /api/comments
export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { contentId, text, parentId } = body;

    if (!contentId || !text?.trim()) {
      return NextResponse.json(
        { error: 'Content ID and comment text are required' },
        { status: 400 }
      );
    }

    // Check if content exists
    const content = await db.content.findUnique({
      where: { id: contentId },
    });

    if (!content) {
      return NextResponse.json(
        { error: 'Content not found' },
        { status: 404 }
      );
    }

    // If parentId is provided, check if the parent comment exists
    if (parentId) {
      const parentComment = await db.comment.findUnique({
        where: { id: parentId },
      });

      if (!parentComment) {
        return NextResponse.json(
          { error: 'Parent comment not found' },
          { status: 404 }
        );
      }

      // Ensure parent comment belongs to the same content
      if (parentComment.contentId !== contentId) {
        return NextResponse.json(
          { error: 'Parent comment does not belong to this content' },
          { status: 400 }
        );
      }
    }

    const comment = await db.comment.create({
      data: {
        text: text.trim(),
        userId: session.user.id,
        contentId: contentId,
        parentId: parentId || null,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
} 