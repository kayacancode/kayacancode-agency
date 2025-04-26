'use client';

import React from 'react';

interface WistiaPlayerProps {
  videoId: string;
  options?: Record<string, any>;
}

const WistiaPlayer: React.FC<WistiaPlayerProps> = ({ videoId, options = {} }) => {
  return (
    <div className="relative w-full aspect-video">
      {/* @ts-ignore */}
      <wistia-player
        data-video-id={videoId}
        data-options={JSON.stringify(options)}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default WistiaPlayer; 