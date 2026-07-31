import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { Weathervane } from './Weathervane';

export function Hero() {
  return (
		<section
			id="top"
			className="relative w-full overflow-hidden border-b-4 border-ink dark:border-kraft-300/30"
		>
			<img
				src="/6931f29f-2d01-4799-a085-3390406246df.jpg"
				alt="Screen-printed illustration of rolling hills, a red barn and a clothesline at golden hour"
				className="h-[46vh] min-h-[260px] w-full object-cover sm:h-[54vh]"
			/>

			<div
				className="absolute inset-0 bg-ink/25 dark:bg-dusk-900/60"
				aria-hidden="true"
			/>

			<div className="absolute inset-0 flex items-center">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 24, rotate: -3 }}
						animate={{ opacity: 1, y: 0, rotate: -1.5 }}
						transition={{
							type: "spring",
							stiffness: 110,
							damping: 14,
						}}
						className="max-w-2xl border-4 border-ink bg-kraft-50 p-5 shadow-sign sm:p-7 dark:bg-kraft-100"
					>
						<p className="font-type text-xs uppercase tracking-[0.25em] text-barn sm:text-sm">
							Graphic design by Deanna Pursley
						</p>
						<h1 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-5xl">
							Skillbilly<span className="text-barn">.art</span>
						</h1>
						<p className="mt-3 font-body text-base text-ink/85 sm:text-lg">
							Thoughtful branding, advertising, and digital design—served with
							personality, built with purpose, and polished down to the last detail.
						</p>
						<div className="mt-5 flex flex-wrap items-center gap-3">
							<a
								href="#work"
								className="inline-flex items-center gap-2 border-2 border-ink bg-barn px-4 py-2.5 font-type text-sm uppercase tracking-wide text-kraft-50 shadow-sign transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard"
							>
								See my work
								<ArrowDownIcon className="h-4 w-4" />
							</a>
							<a
								href="#holler"
								className="inline-flex items-center gap-2 border-2 border-ink bg-kraft-200 px-4 py-2.5 font-type text-sm uppercase tracking-wide text-ink shadow-sign transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-barn"
							>
								Get in touch
							</a>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="pointer-events-none absolute right-4 top-6 hidden sm:block">
				<Weathervane />
			</div>
		</section>
  );

}
