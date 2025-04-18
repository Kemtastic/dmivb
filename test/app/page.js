'use client';

import CarouselSection from '@/components/carousel-slide';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';

import { useState } from 'react';

export default function Home() {
  const featuredItems = [
    {
      id: 1,
      title: 'Atomfall',
      type: 'game',
      image: '/atomfall.jpg',
      score: 76,
      rating: 'Generally Favorable',
      reviews: 24,
      colorClass: 'bg-yellow-500'
    },
    {
      id: 2,
      title: 'Snow White',
      type: 'movie',
      image: '/snow-white.jpg',
      score: 50,
      rating: 'Mixed or Average',
      reviews: 47,
      colorClass: 'bg-white text-black'
    },
    {
      id: 3,
      title: 'Ash',
      type: 'movie',
      image: '/ash.jpg',
      score: 61,
      rating: 'Generally Favorable',
      reviews: 7897,
      colorClass: 'bg-yellow-500'
    },
    {
      id: 4,
      title: 'The Alto Knights',
      type: 'movie',
      image: '/alto-knights.jpg',
      score: 46,
      rating: 'Mixed or Average',
      reviews: 37,
      colorClass: 'bg-white text-black'
    },
    {
      id: 5,
      title: 'Anora',
      type: 'movie',
      image: '/anora.jpg',
      score: 91,
      rating: 'Universally Acclaimed',
      reviews: 78,
      colorClass: 'bg-white text-black'
    },
    {
      id: 6,
      title: "O'Dessa",
      type: 'movie',
      image: '/odessa.jpg',
      score: 41,
      rating: 'Mixed or Average',
      reviews: 12,
      colorClass: 'bg-white text-black'
    },
    {
      id: 7,
      title: 'The Substance',
      type: 'movie',
      image: '/the-substance.jpg',
      score: 77,
      rating: 'Generally Favorable',
      reviews: 34,
      colorClass: 'bg-white text-black'
    },
    {
      id: 8,
      title: 'The Studio',
      type: 'tv series',
      image: '/the-studio.jpg',
      score: 87,
      rating: 'Universally Acclaimed',
      reviews: 44,
      colorClass: 'bg-white text-black'
    },
  ];



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