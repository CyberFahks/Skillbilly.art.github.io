import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

type NavProps = {
  dusk: boolean;
  onToggleDusk: () => void;
};

const links = [
{ href: '#work', label: 'Work' },
{ href: '#services', label: 'Skills' },
{ href: '#about', label: 'About' },
{ href: '#word', label: 'Process' },
{ href: '#holler', label: 'Contact' }];


export function Nav({ dusk, onToggleDusk }: NavProps) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b-2 border-ink/80 dark:border-kraft-300/30 transition-colors ${
      stuck ?
      'bg-kraft-100/95 dark:bg-dusk-800/95 backdrop-blur' :
      'bg-kraft-100 dark:bg-dusk-800'}`
      }>
      
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-mustard text-ink shadow-peg transition-transform group-hover:-rotate-12 dark:border-kraft-200">
            <span className="font-display text-lg leading-none">S</span>
          </span>
          <span className="font-display text-lg tracking-tight text-ink dark:text-kraft-100 sm:text-xl">
            Skillbilly<span className="text-barn dark:text-rust">.art</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="rounded-sm px-3 py-2 font-type text-sm uppercase tracking-wide text-ink/80 underline-offset-4 transition-colors hover:bg-mustard hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-barn dark:text-kraft-200 dark:hover:bg-mustard dark:hover:text-ink">
            
              {l.label}
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={onToggleDusk}
          aria-pressed={dusk}
          className="flex items-center gap-2 rounded-sm border-2 border-ink bg-kraft-50 px-3 py-2 font-type text-xs uppercase tracking-wide text-ink shadow-sign transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-barn dark:border-kraft-200 dark:bg-dusk-700 dark:text-kraft-100">
          
          {dusk ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
          <span className="hidden sm:inline">{dusk ? 'Sundown' : 'Daylight'}</span>
        </button>
      </div>
    </header>);

}
