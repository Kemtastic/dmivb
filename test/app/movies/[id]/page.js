import YT from "@/components/youtube-embed"
import { movies } from "@/lib/data"
import RatingSection from "@/components/RatingSection"
import CommentSection from "@/components/comment-section";

export default async function MovieDetailsPage({ params }) {
  const { id } = await params
  const movie = movies.find((movie) => movie.id === parseInt(id));
  
  // Mock additional data that would normally come from your API/database
  const movieDetails = {
    year: "1999",
    rating: "R",
    studio: "Warner Bros. Pictures",
    duration: "2 h 16 m",
    metascore: {
      score: 73,
      description: "Generally Favorable",
      reviews: 36
    },
    userScore: {
      score: 8.9,
      description: "Universal Acclaim",
      ratings: 1677
    }
  };

  
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-hidden flex flex-col md:flex-row">
        {/* Left side - YouTube embed and comments */}
        <div className="md:w-1/2 flex flex-col">
          <div className="aspect-video w-full">
            <YT id={movie.trailer} />
          </div>
          <CommentSection />
        </div>
        
        {/* Right side - Movie details */}
        <div className="md:w-1/2 p-6">
          {/* Movie title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{movie.title}</h1>
          
          {/* Movie metadata */}
          <div className="flex items-center gap-2 text-sm mb-6 text-gray-600 dark:text-gray-300">
            <span>{movieDetails.year}</span>
            <span>•</span>
            <span>{movieDetails.rating}</span>
            <span>•</span>
            <span>{movieDetails.studio}</span>
            <span>•</span>
            <span>{movieDetails.duration}</span>
          </div>
          
          {/* Metascore section */}
          <div className="mb-6">
            <h2 className="text-sm uppercase mb-1 text-gray-600 dark:text-gray-400">METASCORE</h2>
            <div className="flex items-center gap-3">
              <div className="bg-green-500 w-16 h-16 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{movieDetails.metascore.score}</span>
              </div>
              <div>
                <p className="font-medium">{movieDetails.metascore.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Based on {movieDetails.metascore.reviews} Critic Reviews</p>
              </div>
            </div>
          </div>
          
          {/* User score section */}
          <div className="mb-6">
            <h2 className="text-sm uppercase mb-1 text-gray-600 dark:text-gray-400">USER SCORE</h2>
            <div className="flex items-center gap-3">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{movieDetails.userScore.score}</span>
              </div>
              <div>
                <p className="font-medium">{movieDetails.userScore.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Based on {movieDetails.userScore.ratings} User Ratings</p>
              </div>
            </div>
          </div>
          
          {/* My score section - now using client component */}
          <RatingSection movieId={movie.id} />
        </div>
      </div>
    </div>
  )
}