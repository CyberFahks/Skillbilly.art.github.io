import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FirefliesProps = {
  active: boolean;
};

const bugs = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: i * 37 % 96,
  top: i * 53 % 88,
  delay: i % 7 * 0.4,
  duration: 6 + i % 5 * 1.4
}));

/** Lightning bugs that only come out after sundown. */
export function Fireflies({ active }: FirefliesProps) {
  return (
    <AnimatePresence>
      {active &&
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden="true">
        
          {bugs.map((b) =>
        <motion.span
          key={b.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-mustard"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            boxShadow: '0 0 10px #E3A72F'
          }}
          animate={{
            opacity: [0, 0.9, 0],
            x: [0, 26, -18, 0],
            y: [0, -22, 12, 0]
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />

        )}
        </motion.div>
      }
    </AnimatePresence>);

}