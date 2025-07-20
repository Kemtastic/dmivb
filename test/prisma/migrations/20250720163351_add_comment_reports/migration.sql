-- CreateTable
CREATE TABLE "comment_report" (
    "id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "details" TEXT,
    "userId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comment_report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comment_report_userId_commentId_key" ON "comment_report"("userId", "commentId");

-- AddForeignKey
ALTER TABLE "comment_report" ADD CONSTRAINT "comment_report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_report" ADD CONSTRAINT "comment_report_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
