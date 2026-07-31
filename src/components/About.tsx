import React from 'react';
import { motion } from 'framer-motion';

const facts = [
  { label: 'Focus', value: 'Brand' },
  { label: 'Also loves', value: 'Digital' },
  { label: 'Style', value: 'Bold' },
  { label: 'Based in', value: 'USA' },
];

export function About() {
  return (
    <section
      id="about"
      className="w-full border-b-4 border-ink bg-kraft-200 py-14 paper-grain dark:border-kraft-300/30 dark:bg-dusk-800 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, rotate: -4, y: 20 }}
          whileInView={{ opacity: 1, rotate: -2, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-sm border-4 border-ink bg-kraft-50 p-3 shadow-sign"
        >
          <img
            src="/portfolio/selfie.jpg"
            alt="Portrait artwork of designer Deanna Pursley"
            className="aspect-square w-full border-2 border-ink object-cover"
          />
          <p className="mt-2 text-center font-type text-xs uppercase tracking-widest text-ink/70">
            Deanna Pursley · Graphic Designer
          </p>
          <span className="absolute -right-3 -top-3 rotate-6 border-2 border-ink bg-mustard px-2 py-1 font-type text-[10px] uppercase tracking-widest text-ink">
            Nice to meet you
          </span>
        </motion.div>

        <div>
          <p className="font-type text-xs uppercase tracking-[0.25em] text-barn dark:text-mustard">
            The designer behind Skillbilly
          </p>
          <h2 className="mt-1 font-display text-2xl text-ink dark:text-kraft-100 sm:text-4xl">
            Down-to-earth. Detail-minded.
          </h2>
          <div className="mt-4 max-w-2xl space-y-4 font-body text-base leading-relaxed text-ink/85 dark:text-kraft-200/85">
            <p>
              I’m Deanna Pursley, a graphic designer who enjoys turning loose ideas into clear,
              memorable visual systems. My work spans identity, campaign design, editorial,
              illustration, and responsive digital experiences.
            </p>
            <p>
              Skillbilly is my reminder that good design can be both polished and full of
              personality. I care about the thinking underneath the look: useful hierarchy,
              consistent choices, and details that help the final piece feel like it belongs.
            </p>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col-reverse border-2 border-ink bg-kraft-50 p-3 text-center shadow-peg"
              >
                <dt className="font-type text-[10px] uppercase tracking-widest text-ink/60">
                  {fact.label}
                </dt>
                <dd className="font-display text-base text-barn">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
