import React from 'react';
import { motion } from 'framer-motion';

/** A spinning tin rooster. Purely decorative, but it earns its keep. */
export function Weathervane() {
  return (
    <div className="pointer-events-auto flex flex-col items-center">
      <motion.svg
        width="86"
        height="86"
        viewBox="0 0 100 100"
        role="img"
        aria-label="Spinning tin rooster weathervane"
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d' }}>
        
        <g fill="#241C16">
          <path d="M54 20c6 0 11 4 12 9 1 4-1 7-4 9 5 3 8 8 8 14 0 9-7 16-16 16h-4l-6 10-2-10c-8-2-14-9-14-17 0-9 6-16 15-18-1-2-1-4 0-6 2-4 6-7 11-7z" />
          <path d="M66 44c6-2 12 0 16 4-5 1-9 3-12 6-2 2-4 2-5 0-1-3 0-8 1-10z" />
          <path d="M40 78l-4 12h6l3-9z" />
        </g>
        <circle cx="56" cy="30" r="2" fill="#FBF5E7" />
        <path d="M52 16c2-4 6-6 10-6-2 3-3 5-3 8z" fill="#9E3B26" />
      </motion.svg>
      <div className="h-16 w-1.5 bg-ink" aria-hidden="true" />
    </div>);

}