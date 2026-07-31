import React, { useCallback, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import type { Project } from '../data/projects';

type PaletteCardProps = {
  project: Project;
  index: number;
  sag: number;
  gust: number;
  onSelect: (project: Project) => void;
};

export function PaletteCard({ project, index, sag, gust, onSelect }: PaletteCardProps) {
  const controls = useAnimationControls();
  const amplitude = 1.4 + index % 3 * 0.7;

  const idle = useCallback(() => {
    controls.start({
      rotate: [-amplitude, amplitude, -amplitude],
      transition: {
        duration: 5 + index % 4 * 0.8,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    });
  }, [controls, amplitude, index]);

  useEffect(() => {
    idle();
  }, [idle]);

  useEffect(() => {
    if (gust === 0) return;
    let cancelled = false;
    controls.
    start({
      rotate: [-14 - index, 10, -7, 4, -amplitude],
      transition: { duration: 1.5 + index * 0.08, ease: 'easeOut' }
    }).
    then(() => {
      if (!cancelled) idle();
    });
    return () => {
      cancelled = true;
    };
  }, [gust, controls, idle, amplitude, index]);

  return (
    <div
      className="relative flex w-[190px] shrink-0 justify-center"
      style={{ paddingTop: sag }}>
      
      <motion.div
        animate={controls}
        drag="x"
        dragConstraints={{ left: -14, right: 14 }}
        dragElastic={0.35}
        onDragEnd={() => idle()}
        whileHover={{ y: 8, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        style={{ originX: 0.5, originY: 0 }}
        className="relative w-[190px] cursor-pointer">
        
        {/* clothespin */}
        <div className="absolute -top-[18px] left-1/2 z-10 -translate-x-1/2">
          <div className="h-7 w-3.5 rounded-t-sm border-2 border-ink bg-kraft-300 dark:bg-kraft-400" />
          <div className="mx-auto -mt-4 h-1 w-5 border-y border-ink bg-kraft-200" />
        </div>

        <button
          type="button"
          onClick={() => onSelect(project)}
          aria-label={`Open case study: ${project.title}`}
          className="group block w-full border-2 border-ink bg-kraft-50 p-3 text-left shadow-peg focus:outline-none focus-visible:ring-4 focus-visible:ring-mustard dark:border-kraft-200 dark:bg-kraft-100">
          
          <div className="flex items-center justify-between font-type text-[10px] uppercase tracking-widest text-ink/60">
            <span>{project.kind}</span>
          </div>

          <div className="mt-2 aspect-[4/3] overflow-hidden border border-ink/70 bg-kraft-200">
            <img
              src={project.cover}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="mt-2 flex gap-1">
            {project.palette.map((swatch) => (
              <span
                key={swatch.hex}
                className="h-3 flex-1 border border-ink/60"
                style={{ backgroundColor: swatch.hex }}
                title={`${swatch.name}: ${swatch.hex}`}
              />
            ))}
          </div>

          <h3 className="mt-3 font-display text-sm leading-snug text-ink">{project.title}</h3>
          <p className="mt-1 font-body text-xs italic text-ink/70">{project.hook}</p>

          <span className="mt-3 inline-block border border-ink bg-mustard px-2 py-1 font-type text-[10px] uppercase tracking-widest text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Take a gander →
          </span>
        </button>
      </motion.div>
    </div>);

}
