import React from 'react';
import { MailIcon, ArrowUpRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section
      id="holler"
      className="w-full border-b-4 border-ink bg-kraft-200 py-14 paper-grain dark:border-kraft-300/30 dark:bg-dusk-800 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative border-4 border-ink bg-kraft-50 p-7 text-center shadow-sign sm:p-12"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 border-2 border-ink bg-mustard px-3 py-1 font-type text-[10px] uppercase tracking-widest text-ink">
            New ideas welcome
          </span>
          <MailIcon className="mx-auto h-9 w-9 text-barn" aria-hidden="true" />
          <p className="mt-4 font-type text-xs uppercase tracking-[0.25em] text-barn">
            Have a project in mind?
          </p>
          <h2 className="mt-2 font-display text-2xl text-ink sm:text-4xl">
            Let’s Make Something Good
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-ink/75">
            Tell me what you’re building, what you need, and where you’re stuck. I’d love to hear
            about the idea and help give it a clear visual direction.
          </p>
          <a
            href="mailto:howdy@skillbilly.art"
            className="mt-7 inline-flex items-center gap-2 border-2 border-ink bg-barn px-5 py-3 font-type text-sm uppercase tracking-widest text-kraft-50 shadow-sign transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard"
          >
            howdy@skillbilly.art
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
