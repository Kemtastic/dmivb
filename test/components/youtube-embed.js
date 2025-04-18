"use client";

import React from 'react';
import { YouTubeEmbed } from '@next/third-parties/google'

const YT = ({ id }) => {
  return (
    <div>
      <YouTubeEmbed videoid={id} height={400} width={720} />
    </div>
  );
};

export default YT;