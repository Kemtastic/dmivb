import 'server-only'

import db from "./index"
import { Platform, ContentType } from "@/generated/prisma"

export async function updateUserProfile(
  userId: string,
  data: {
    bio?: string
    location?: string
    twitter?: string
    instagram?: string
  }
) {
  return await db.user.update({
    where: { id: userId },
    data: {
      bio: data.bio,
      location: data.location,
      twitter: data.twitter,
      instagram: data.instagram,
      updatedAt: new Date(),
    },
  })
}

export async function createContent(data: {
  title: string
  summary: string
  type: ContentType
  releaseYear: number
  trailerUrl: string
  image: string
  director: string
  actors: string[]
  genres: string[]
  platform: Platform
  userId: string
}) {
  try {
    await db.content.create({
      data: {
        title: data.title,
        summary: data.summary,
        type: data.type,
        releaseYear: data.releaseYear,
        trailerUrl: data.trailerUrl,
        image: data.image,
        director: data.director,
        actors: data.actors,
        genres: data.genres,
        platform: data.platform,
        addedById: data.userId,
      },
    })
  } catch (error) {
    throw new Error("Something went wrong")
  }
}

export async function getContentsByAdmin() {
  try {
    return await db.content.findMany()
  } catch (error) {
    throw new Error("Something went wrong")
  }
}

export async function updateContentByAdmin(id: string, data: {
  title: string
  summary: string
  type: ContentType
  releaseYear: number
  trailerUrl: string
  image: string
  director: string
  actors: string[]
  genres: string[]
  platform: Platform
}) {
  console.log(data)
  try {
    return await db.content.update({
      where: { id },
      data,
    })
  } catch (error) {
    console.log(error)
    throw new Error("Something went wrong")
  }
}

export async function deleteContentByAdmin(id: string) {
  try {
    return await db.content.delete({
      where: { id },
    })
  } catch (error) {
    console.log(error)
    throw new Error("İçerik silinirken bir hata oluştu")
  }
}