"use client";
import React from 'react';

const YT = ({ url }: { url: string }) => {
  const id = url.split('v=')[1]
  return (
    <div className="relative w-full h-full">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );
};

export default YT;