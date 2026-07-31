import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Find the story',
    body: 'Start with the audience, the goal, and the one idea the work needs to communicate.',
    glow: '#E3A72F',
  },
  {
    number: '02',
    title: 'Build the system',
    body: 'Develop type, color, imagery, and layout together so every piece feels related.',
    glow: '#9E3B26',
  },
  {
    number: '03',
    title: 'Polish the details',
    body: 'Test the design at real sizes, tighten the hierarchy, and prepare it for its final home.',
    glow: '#6E8B4B',
  },
];

export function Testimonials() {
  return (
    <section
      id="word"
      className="w-full border-b-4 border-ink bg-kraft-100 py-14 paper-grain dark:border-kraft-300/30 dark:bg-dusk-900 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="font-type text-xs uppercase tracking-[0.25em] text-barn dark:text-mustard">
          How the work comes together
        </p>
        <h2 className="mt-1 font-display text-2xl text-ink dark:text-kraft-100 sm:text-4xl">
          From Idea to Finished Piece
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
              className="relative border-4 border-ink bg-kraft-50 p-6 shadow-sign dark:bg-dusk-700"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink font-display text-sm text-ink"
                style={{ backgroundColor: step.glow }}
              >
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-lg text-ink dark:text-kraft-100">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/75 dark:text-kraft-200/80">
                {step.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
