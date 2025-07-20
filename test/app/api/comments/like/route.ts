import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { getSession } from '@/lib/auth-helpers';

// POST /api/comments/like
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
    const { commentId, isLike } = body;

    if (!commentId || typeof isLike !== 'boolean') {
      return NextResponse.json(
        { error: 'Comment ID and like status are required' },
        { status: 400 }
      );
    }

    // Check if comment exists
    const comment = await db.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Check if user already liked/disliked this comment
    const existingLike = await db.commentLike.findUnique({
      where: {
        userId_commentId: {
          userId: session.user.id,
          commentId: commentId,
        },
      },
    });

    if (existingLike) {
      if (existingLike.isLike === isLike) {
        // Same action, remove the like/dislike
        await db.commentLike.delete({
          where: {
            id: existingLike.id,
          },
        });
        return NextResponse.json({ action: 'removed', isLike });
      } else {
        // Different action, update the like/dislike
        await db.commentLike.update({
          where: {
            id: existingLike.id,
          },
          data: {
            isLike: isLike,
          },
        });
        return NextResponse.json({ action: 'updated', isLike });
      }
    } else {
      // New like/dislike
      await db.commentLike.create({
        data: {
          userId: session.user.id,
          commentId: commentId,
          isLike: isLike,
        },
      });
      return NextResponse.json({ action: 'created', isLike });
    }
  } catch (error) {
    console.error('Error handling comment like:', error);
    return NextResponse.json(
      { error: 'Failed to handle comment like' },
      { status: 500 }
    );
  }
} 