-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('FILM', 'DIZI');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('NETFLIX', 'PRIME', 'HBO', 'DISNEY');

-- CreateTable
CREATE TABLE "content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "ContentType" NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "trailerUrl" TEXT,
    "director" TEXT NOT NULL,
    "actors" TEXT[],
    "genres" TEXT[],
    "platform" "Platform" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "addedById" TEXT NOT NULL,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "content" ADD CONSTRAINT "content_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
