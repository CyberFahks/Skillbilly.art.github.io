import React, { useState } from 'react';
import { WindIcon } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { PaletteCard } from './PaletteCard';

type ClotheslineProps = {
  onSelect: (project: Project) => void;
};

export function Clothesline({ onSelect }: ClotheslineProps) {
  const [gust, setGust] = useState(0);

  return (
    <section
      id="work"
      className="relative w-full border-b-4 border-ink bg-kraft-200 py-14 paper-grain dark:border-kraft-300/30 dark:bg-dusk-800 sm:py-20">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-type text-xs uppercase tracking-[0.25em] text-barn dark:text-mustard">
              Selected work · hung out to dry
            </p>
            <h2 className="mt-1 font-display text-2xl text-ink dark:text-kraft-100 sm:text-4xl">
              The Wash Line
            </h2>
            <p className="mt-2 max-w-xl font-body text-sm text-ink/80 dark:text-kraft-200/80 sm:text-base">
              Branding, advertising, editorial, and interface work—curated into six project
              stories. Pick a card to see the full case study.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setGust((g) => g + 1)}
            className="inline-flex items-center gap-2 border-2 border-ink bg-mustard px-4 py-2.5 font-type text-sm uppercase tracking-wide text-ink shadow-sign transition-transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-barn dark:border-kraft-200">
            
            <WindIcon className="h-4 w-4" />
            Kick up a breeze
          </button>
        </div>

        {/* The line itself */}
        <div className="relative mt-16">
          {/* posts */}
          <div className="pointer-events-none absolute -left-2 -top-10 hidden h-[420px] w-4 -rotate-2 bg-kraft-400 shadow-peg lg:block dark:bg-dusk-600" />
          <div className="pointer-events-none absolute -right-2 -top-10 hidden h-[420px] w-4 rotate-2 bg-kraft-400 shadow-peg lg:block dark:bg-dusk-600" />

          <svg
            className="pointer-events-none absolute -top-8 left-0 h-16 w-full"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            aria-hidden="true">
            
            <path
              d="M0 10 Q 500 62 1000 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-ink dark:text-kraft-200" />
            
          </svg>

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 sm:gap-3 lg:justify-between">
            {projects.map((project, i) => {
              const t = (i + 0.5) / projects.length;
              const sag = Math.round(30 * Math.sin(Math.PI * t));
              return (
                <div key={project.id} className="snap-center">
                  <PaletteCard
                    project={project}
                    index={i}
                    sag={sag}
                    gust={gust}
                    onSelect={onSelect} />
                  
                </div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}
