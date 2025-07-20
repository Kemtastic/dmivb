import { getContentsByType } from '@/lib/db/queries';
import { ContentType } from '@/generated/prisma';
import { SearchBar } from '@/components/search/search-bar';
import { ContentListWithSort } from '@/components/content-list-with-sort';

export default async function MoviesPage() {
  const movies = await getContentsByType(ContentType.FILM, 'releaseYear', 'desc');

  return (
    <div className="min-h-screen bg-[#161515] text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Filmler</h1>
          <p className="text-gray-400 mb-4">
            Platformumuzdaki tüm filmleri keşfedin
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <SearchBar
              placeholder="Filmler içinde ara..."
              className="w-full"
              showSearchButton={false}
            />
          </div>
        </div>

        {/* Content List with Sort */}
        <ContentListWithSort
          initialContents={movies}
          emptyMessage="Henüz film eklenmemiş"
          contentType="film"
        />
      </div>
    </div>
  );
}