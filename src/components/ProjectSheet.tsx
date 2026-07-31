import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, CopyIcon, XIcon } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectSheetProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(null), 1400);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
    } catch {
      setCopied(hex);
    }
  };

  return (
    <AnimatePresence>
      {project &&
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        
          <button
          type="button"
          aria-label="Close case study"
          onClick={onClose}
          className="absolute inset-0 h-full w-full cursor-default bg-ink/70" />
        

          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ y: 60, rotate: 1.5, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto border-4 border-ink bg-kraft-50 shadow-sign paper-grain dark:bg-kraft-100">
          
            <div className="flex items-start justify-between gap-4 border-b-2 border-ink bg-kraft-200 px-5 py-4">
              <div>
                <p className="font-type text-[11px] uppercase tracking-[0.25em] text-barn">
                  {project.kind}
                </p>
                <h3 className="mt-1 font-display text-xl text-ink sm:text-2xl">{project.title}</h3>
                <p className="font-body text-sm text-ink/70">{project.client}</p>
              </div>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 border-2 border-ink bg-kraft-50 p-2 text-ink shadow-sign transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-barn">
              
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-6 px-5 py-6">
              <p className="font-body text-base leading-relaxed text-ink/90">{project.story}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <figure
                    key={image.src}
                    className={index === 0 ? 'sm:col-span-2' : ''}
                  >
                    <div className="overflow-hidden border-2 border-ink bg-kraft-200">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`w-full object-contain ${index === 0 ? 'max-h-[420px]' : 'h-56'}`}
                      />
                    </div>
                  </figure>
                ))}
              </div>

              <div>
                <h4 className="font-type text-xs uppercase tracking-[0.2em] text-ink/60">
                  Color direction (tap a chip to copy the hex)
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.palette.map((swatch) =>
                <button
                  key={swatch.hex}
                  type="button"
                  onClick={() => copyHex(swatch.hex)}
                  className="group flex items-center gap-3 border-2 border-ink bg-kraft-100 p-2 text-left shadow-peg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-barn">
                  
                      <span
                    className="h-10 w-10 shrink-0 border-2 border-ink"
                    style={{ backgroundColor: swatch.hex }} />
                  
                      <span className="min-w-0">
                        <span className="block truncate font-body text-sm font-semibold text-ink">
                          {swatch.name}
                        </span>
                        <span className="flex items-center gap-1 font-type text-[11px] uppercase text-ink/60">
                          {copied === swatch.hex ?
                      <>
                              <CheckIcon className="h-3 w-3" /> Got it
                            </> :

                      <>
                              <CopyIcon className="h-3 w-3 opacity-60" /> {swatch.hex}
                            </>
                      }
                        </span>
                      </span>
                    </button>
                )}
                </div>
              </div>

              <div>
                <h4 className="font-type text-xs uppercase tracking-[0.2em] text-ink/60">
                  Project pieces
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.deliverables.map((d) =>
                <li
                  key={d}
                  className="border-2 border-ink bg-kraft-200 px-3 py-1.5 font-body text-sm text-ink">
                  
                      {d}
                    </li>
                )}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}
