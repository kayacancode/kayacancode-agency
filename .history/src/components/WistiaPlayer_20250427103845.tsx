'use client';

import React, { useEffect } from 'react';

// Add Wistia type declarations
declare global {
  interface Window {
    Wistia?: {
      api: {
        ready: (callback: () => void) => void;
        get: (videoId: string) => any;
      };
    };
  }
}

interface WistiaPlayerProps {
  videoId: string;
  options?: Record<string, any>;
}

const WistiaPlayer: React.FC<WistiaPlayerProps> = ({ videoId, options = {} }) => {
  useEffect(() => {
    // Wait for Wistia to be available
    const checkWistia = () => {
      if (typeof window !== 'undefined' && window.Wistia?.api?.ready) {
        window.Wistia.api.ready(() => {
          const player = window.Wistia?.api.get(videoId);
          if (player) {
            player.initialize();
          }
        });
      } else {
        // If Wistia is not ready, check again in 100ms
        setTimeout(checkWistia, 100);
      }
    };

    checkWistia();
  }, [videoId]);

  if (!videoId) {
    return <div>Video ID is required</div>;
  }

  return (
    <div className="relative w-full aspect-video">
      <div
        className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
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
            style={{ border: 'none' }}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default WistiaPlayer; 