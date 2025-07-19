import Head from "next/head";
import CarouselSection from "@/components/carousel-slide";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>DMIVb - Your Media Bases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CarouselSection />
    </main>
  );
}
