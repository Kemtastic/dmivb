import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { getSession } from '@/lib/auth-helpers';

// POST /api/comments/report - Create a new comment report
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
    const { commentId, reason, details } = body;

    if (!commentId || !reason?.trim()) {
      return NextResponse.json(
        { error: 'Comment ID and reason are required' },
        { status: 400 }
      );
    }

    // Check if comment exists
    const comment = await db.comment.findUnique({
      where: { id: commentId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Check if user is trying to report their own comment
    if (comment.userId === session.user.id) {
      return NextResponse.json(
        { error: 'You cannot report your own comment' },
        { status: 400 }
      );
    }

    // Check if user has already reported this comment
    const existingReport = await db.commentReport.findUnique({
      where: {
        userId_commentId: {
          userId: session.user.id,
          commentId: commentId,
        },
      },
    });

    if (existingReport) {
      return NextResponse.json(
        { error: 'You have already reported this comment' },
        { status: 400 }
      );
    }

    const report = await db.commentReport.create({
      data: {
        reason: reason.trim(),
        details: details?.trim() || null,
        userId: session.user.id,
        commentId: commentId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        comment: {
          select: {
            id: true,
            text: true,
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      { 
        message: 'Comment reported successfully',
        report: {
          id: report.id,
          reason: report.reason,
          createdAt: report.createdAt,
        }
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating comment report:', error);
    return NextResponse.json(
      { error: 'Failed to report comment' },
      { status: 500 }
    );
  }
}

// GET /api/comments/report - Get all reports (Admin only)
export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Check if user is admin
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });

    if (user?.role !== 'admin') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'pending';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;

    const reports = await db.commentReport.findMany({
      where: {
        status: status,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        comment: {
          select: {
            id: true,
            text: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            content: {
              select: {
                id: true,
                title: true,
                type: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip,
      take: limit,
    });

    const totalReports = await db.commentReport.count({
      where: {
        status: status,
      },
    });

    return NextResponse.json({
      reports,
      pagination: {
        page,
        limit,
        total: totalReports,
        totalPages: Math.ceil(totalReports / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching comment reports:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    );
  }
}

// PUT /api/comments/report - Update report status (Admin only)
export async function PUT(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Check if user is admin
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });

    if (user?.role !== 'admin') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { reportId, status, action } = body;

    if (!reportId || !status) {
      return NextResponse.json(
        { error: 'Report ID and status are required' },
        { status: 400 }
      );
    }

    // Valid statuses
    const validStatuses = ['pending', 'reviewed', 'dismissed', 'action_taken'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    // Check if report exists
    const report = await db.commentReport.findUnique({
      where: { id: reportId },
      include: {
        comment: {
          select: {
            id: true,
            text: true,
            userId: true,
          },
        },
      },
    });

    if (!report) {
      return NextResponse.json(
        { error: 'Report not found' },
        { status: 404 }
      );
    }

    // Start a transaction to update report and potentially delete comment
    const result = await db.$transaction(async (prisma) => {
      // Update the report
      const updatedReport = await prisma.commentReport.update({
        where: { id: reportId },
        data: {
          status: status,
          reviewedBy: session.user.id,
          reviewedAt: new Date(),
        },
      });

      // If action is to delete the comment
      if (action === 'delete_comment' && status === 'action_taken') {
        // Delete all replies first (due to foreign key constraints)
        await prisma.comment.deleteMany({
          where: { parentId: report.comment.id },
        });
        
        // Delete the comment itself
        await prisma.comment.delete({
          where: { id: report.comment.id },
        });
      }

      return updatedReport;
    });

    return NextResponse.json({
      message: 'Report updated successfully',
      report: {
        id: result.id,
        status: result.status,
        reviewedAt: result.reviewedAt,
      },
    });
  } catch (error) {
    console.error('Error updating comment report:', error);
    return NextResponse.json(
      { error: 'Failed to update report' },
      { status: 500 }
    );
  }
} 