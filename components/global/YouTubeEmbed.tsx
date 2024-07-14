// components/YouTubeEmbed.tsx

import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  width?: string;
  height?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, width = "560", height = "315" }) => {
  const src = `https://www.youtube.com/embed/${videoId}?si=KeWrD_ABdb9_QO8J`;

  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeEmbed;