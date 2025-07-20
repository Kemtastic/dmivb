import YT from "@/components/youtube-embed"
import { getSeriesById } from "@/lib/db/queries"
import RatingSection from "@/components/RatingSection"
import CommentSection from "@/components/comment-section"
import FavoriteButton from "@/components/favorite-button"
import AddToListButton from "@/components/lists/add-to-list-button"
import WatchedButton from "@/components/watched-button"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function SeriesDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const series = await getSeriesById(id)

  if (!series) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-hidden flex flex-col md:flex-row gap-8">
        {/* Left side - Series poster and trailer */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Poster */}
          <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={series.image || "/placeholder-movie.jpg"}
              alt={series.title}
              className="object-cover w-full h-full"
              width={500}
              height={500}
            />
          </div>

          {/* Trailer */}
          {series.trailerUrl && (
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <YT id={series.trailerUrl} />
            </div>
          )}
        </div>

        {/* Right side - Series details */}
        <div className="md:w-1/2">
          {/* Series title and basic info */}
          <h1 className="text-3xl font-bold mb-2">{series.title}</h1>
          <div className="flex items-center gap-2 text-sm mb-6 text-gray-600">
            <span>{series.releaseYear}</span>
            <span>•</span>
            <span className="capitalize">{series.platform.toLowerCase()}</span>
            <span>•</span>
            <span>Dizi</span>
          </div>

          {/* Score - Note: Score field doesn't exist in new schema, using placeholder */}
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">-</span>
              </div>
              <div>
                <p className="text-lg font-semibold">Kullanıcı Puanı</p>
                <p className="text-sm text-gray-600">Henüz puanlanmamış</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Özet</h2>
            <p className="text-gray-700 leading-relaxed">{series.summary}</p>
          </div>

          {/* Credits */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Künye</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Yönetmen</h3>
                <p className="mt-1">{series.director}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Oyuncular</h3>
                <p className="mt-1">{series.actors.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Türler</h3>
                <p className="mt-1">{series.genres.join(", ")}</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mb-8 flex items-center gap-4">
            <FavoriteButton contentId={series.id} />
            <AddToListButton contentId={series.id} />
            <WatchedButton contentId={series.id} />
          </div>

          {/* Rating section */}
          <div className="mb-8">
            <RatingSection movieId={series.id} />
          </div>

          {/* Comments */}
          <div>
            <CommentSection />
          </div>
        </div>
      </div>
    </div>
  )
}
