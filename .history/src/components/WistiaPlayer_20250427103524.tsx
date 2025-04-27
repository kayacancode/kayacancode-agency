'use client';

import React, { useEffect } from 'react';

interface WistiaPlayerProps {
  videoId: string;
  options?: Record<string, any>;
}

const WistiaPlayer: React.FC<WistiaPlayerProps> = ({ videoId, options = {} }) => {
  useEffect(() => {
    // Ensure Wistia is loaded
    if (typeof window !== 'undefined' && window.Wistia) {
      window.Wistia.api.ready(() => {
        // Initialize the player
        const player = window.Wistia.api.get(videoId);
        if (player) {
          player.initialize();
        }
      });
    }
  }, [videoId]);

  if (!videoId) {
    return <div>Video ID is required</div>;
  }

  return (
    <div className="relative w-full aspect-video">
      <div
        className="wistia_embed wistia_async_${videoId} videoFoam=true"
        style={{ height: '100%', position: 'relative' }}
      >
        <div
          style={{
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        >
          <iframe
            src={`https://fast.wistia.com/embed/medias/${videoId}`}
            title="Wistia Video Player"
            allow="autoplay; fullscreen"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
            name={`wistia_embed_${videoId}`}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default WistiaPlayer; 