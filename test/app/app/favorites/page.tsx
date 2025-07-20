import { getSession } from '@/lib/auth-helpers'
import { getUserFavorites } from '@/lib/db/queries'
import { redirect } from 'next/navigation'
import { Routes } from '@/lib/routes'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Calendar, Star } from 'lucide-react'

export default async function FavoritesPage() {
  const session = await getSession()
  
  if (!session?.user) {
    redirect(Routes.Pages.SignIn)
  }

  const favorites = await getUserFavorites(session.user.id)

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Heart className="w-8 h-8 text-red-500" />
          Favorilerim
        </h1>
        <p className="text-gray-600">
          Beğendiğiniz {favorites.length} içerik burada listeleniyor
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
            Henüz favori içeriğiniz yok
          </h2>
          <p className="text-gray-500 mb-6">
            Film ve dizilerin detay sayfalarından favorilerinize ekleyebilirsiniz
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/movies" 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Filmleri Keşfet
            </Link>
            <Link 
              href="/series" 
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Dizileri Keşfet
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <Link href={`/${favorite.content.type === 'FILM' ? 'movies' : 'series'}/${favorite.content.id}`}>
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={favorite.content.image || '/placeholder-movie.jpg'}
                    alt={favorite.content.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    width={300}
                    height={450}
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      favorite.content.type === 'FILM' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {favorite.content.type === 'FILM' ? 'Film' : 'Dizi'}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-black bg-opacity-60 rounded-full p-1">
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {favorite.content.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{favorite.content.releaseYear}</span>
                    <span>•</span>
                    <span className="capitalize">{favorite.content.platform.toLowerCase()}</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                    {favorite.content.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Favorilere eklendi:</span>
                    <span>
                      {new Date(favorite.createdAt).toLocaleDateString('tr-TR')}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {favorite.content.genres.slice(0, 3).map((genre) => (
                      <span key={genre} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {genre}
                      </span>
                    ))}
                    {favorite.content.genres.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{favorite.content.genres.length - 3} daha
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 