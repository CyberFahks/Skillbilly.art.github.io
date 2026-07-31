import React from 'react';

const marqueeItems = [
'Brand identity',
'Advertising design',
'Editorial & packaging',
'Digital experiences',
'Made with personality'];


export function Footer() {
  return (
    <footer className="w-full bg-ink text-kraft-100">
      <div className="overflow-hidden border-b-2 border-kraft-100/25 bg-barn py-2">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) =>
          <span
            key={`${item}-${i}`}
            className="font-type text-xs uppercase tracking-[0.2em] text-kraft-50">
            
              ✳ {item}
            </span>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">
            Skillbilly<span className="text-mustard">.art</span>
          </p>
          <p className="mt-2 max-w-sm font-body text-sm text-kraft-200/80">
            Graphic design by Deanna Pursley—clear ideas, memorable visuals, and a little
            Skillbilly personality.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 font-type text-xs uppercase tracking-widest text-kraft-200/80">
          <a href="#work" className="hover:text-mustard">
            Work
          </a>
          <a href="#services" className="hover:text-mustard">
            Skills
          </a>
          <a href="#about" className="hover:text-mustard">
            About
          </a>
          <a href="#holler" className="hover:text-mustard">
            Contact
          </a>
        </div>
      </div>

      <div className="border-t border-kraft-100/20 px-4 py-4 text-center font-type text-[11px] uppercase tracking-widest text-kraft-200/60 sm:px-6">
        © {new Date().getFullYear()} Skillbilly.art · All rights reserved, y’all
      </div>
    </footer>);

}
