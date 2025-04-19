import YT from "@/components/youtube-embed"
import { movies } from "@/lib/data"
import RatingSection from "@/components/RatingSection"
import CommentSection from "@/components/comment-section";
import Image from "next/image";

export default async function MovieDetailsPage({ params }) {
  const { id } = params;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  
  if (!movie) {
    return <div>Film bulunamadı</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-hidden flex flex-col md:flex-row gap-8">
        {/* Left side - Movie poster and trailer */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Poster */}
          <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={movie.img}
              alt={movie.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Trailer */}
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <YT id={movie.trailer} />
          </div>
        </div>
        
        {/* Right side - Movie details */}
        <div className="md:w-1/2">
          {/* Movie title and basic info */}
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center gap-2 text-sm mb-6 text-gray-600">
            <span>{movie.releaseYear}</span>
            <span>•</span>
            <span className="capitalize">{movie.platform}</span>
            <span>•</span>
            <span>{movie.type === 'movie' ? 'Film' : 'Dizi'}</span>
          </div>
          
          {/* Score */}
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{movie.score}</span>
              </div>
              <div>
                <p className="text-lg font-semibold">Kullanıcı Puanı</p>
                <p className="text-sm text-gray-600">Toplam puan</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Özet</h2>
            <p className="text-gray-700 leading-relaxed">{movie.description}</p>
          </div>

          {/* Credits */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Künye</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Yönetmen</h3>
                <p className="mt-1">{movie.director}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Oyuncular</h3>
                <p className="mt-1">{movie.cast.join(', ')}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Türler</h3>
                <p className="mt-1">{movie.genres.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Rating section */}
          <div className="mb-8">
            <RatingSection movieId={movie.id} />
          </div>

          {/* Comments */}
          <div>
            <CommentSection />
          </div>
        </div>
      </div>
    </div>
  );
}