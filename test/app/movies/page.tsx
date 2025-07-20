"use client"

import { fetchContentsByType } from '@/lib/fetcher';
import { ContentType } from '@/generated/prisma';
import { SearchBar } from '@/components/search/search-bar';
import { ContentListWithSort } from '@/components/content-list-with-sort';
import { useState, useEffect } from 'react';

interface Content {
  id: string;
  title: string;
  type: ContentType;
  releaseYear: number;
  image: string | null;
  director: string;
  actors: string[];
  genres: string[];
  platform: string;
  summary: string;
  trailerUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  addedById: string;
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const moviesData = await fetchContentsByType(ContentType.FILM, 'releaseYear', 'desc');
        // Convert string dates to Date objects
        const moviesWithDates = moviesData.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt),
          updatedAt: new Date(item.updatedAt),
        }));
        setMovies(moviesWithDates);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#161515] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">Filmler</h1>
            <p className="text-gray-400 mb-4">
              Platformumuzdaki tüm filmleri keşfedin
            </p>
            <div className="max-w-2xl">
              <div className="w-full h-10 bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-gray-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#161515] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">Filmler</h1>
            <p className="text-gray-400 mb-4">
              Platformumuzdaki tüm filmleri keşfedin
            </p>
          </div>
          <div className="text-center text-red-500 py-8">
            Hata: {error}
          </div>
        </div>
      </div>
    );
  }

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
              contentType="FILM"
            />
          </div>
        </div>

        {/* Content List with Sort */}
        <ContentListWithSort
          initialContents={movies as any}
          emptyMessage="Henüz film eklenmemiş"
          contentType="film"
        />
      </div>
    </div>
  );
}