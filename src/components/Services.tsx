import React from 'react';
import { motion } from 'framer-motion';
import { BrushIcon, PackageIcon, SignpostIcon, TypeIcon } from 'lucide-react';

const services = [
{
  icon: TypeIcon,
  title: 'Brand Identity',
  body: 'Memorable logos, color systems, typography, and practical guidelines that work together.',
  color: '#E3A72F',
  tilt: -2
},
{
  icon: PackageIcon,
  title: 'Print & Campaigns',
  body: 'Posters, advertising, editorial layouts, and campaign pieces built around one clear idea.',
  color: '#9E3B26',
  tilt: 1.5
},
{
  icon: BrushIcon,
  title: 'Illustration',
  body: 'Custom graphic elements and artwork that give a project its own recognizable personality.',
  color: '#6E8B4B',
  tilt: -1
},
{
  icon: SignpostIcon,
  title: 'Digital Design',
  body: 'Responsive websites and interface concepts with clear hierarchy and thoughtful interactions.',
  color: '#35566B',
  tilt: 2
}];


export function Services() {
  return (
    <section
      id="services"
      className="w-full border-b-4 border-ink bg-kraft-100 py-14 paper-grain dark:border-kraft-300/30 dark:bg-dusk-900 sm:py-20">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="font-type text-xs uppercase tracking-[0.25em] text-barn dark:text-mustard">
          Capabilities
        </p>
        <h2 className="mt-1 font-display text-2xl text-ink dark:text-kraft-100 sm:text-4xl">
          What I Make
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: s.tilt }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 120, damping: 15 }}
                whileHover={{ rotate: 0, y: -6 }}
                className="relative border-4 border-ink bg-kraft-50 p-5 shadow-sign dark:bg-kraft-100">
                
                <span
                  className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-ink"
                  style={{ backgroundColor: s.color }}
                  aria-hidden="true" />
                
                <Icon className="h-7 w-7 text-barn" aria-hidden="true" />
                <h3 className="mt-3 font-display text-base leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 font-body text-sm text-ink/80">{s.body}</p>
              </motion.article>);

          })}
        </div>
      </div>
    </section>);

}
