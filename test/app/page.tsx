import Head from "next/head";
import CarouselSection from "@/components/carousel-slide";
import { getAllContents } from "@/lib/db/queries";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DMIVb - Your Media Bases',
}

export default async function Home() {
  const data = await getAllContents();

  // Deterministik fake kullanıcı puanları üretme fonksiyonu (content ID'sine göre)
  const generateFakeUserRating = (contentId: string) => {
    // Content ID'sini kullanarak deterministik bir değer üret
    let hash = 0;
    for (let i = 0; i < contentId.length; i++) {
      const char = contentId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 32bit integer'a çevir
    }
    // Hash'i 6.0-10.0 arasında bir değere çevir
    const rating = 6 + (Math.abs(hash) % 40) / 10;
    return rating.toFixed(1);
  };

  return (
    <main className="min-h-screen bg-[#161515] text-gray-800">
      <CarouselSection />
      <div className="container mx-auto p-8">
        <h2 className="text-white text-xl font-bold mb-6">Tüm İçerikler</h2>
        
        {/* İçerik Grid Listesi */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {data.map((content) => (
            <Link 
              key={content.id} 
              href={content.type === "FILM" ? `/movies/${content.id}` : `/series/${content.id}`}
              className="group relative cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* İçerik Resmi - Dik Aspect Ratio */}
              <div className="relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={content.image || ""}
                  alt={content.title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-2">
                    {content.releaseYear}
                  </p>
                  <div className="flex items-center">
                    <div className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                      ★ {generateFakeUserRating(content.id)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
