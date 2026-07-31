import React, { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Clothesline } from './components/Clothesline';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectSheet } from './components/ProjectSheet';
import { Fireflies } from './components/Fireflies';
import type { Project } from './data/projects';

export function App() {
  const [dusk, setDusk] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dusk);
    return () => document.documentElement.classList.remove('dark');
  }, [dusk]);

  return (
    <div className="min-h-screen w-full bg-kraft-100 font-body text-ink dark:bg-dusk-900 dark:text-kraft-100">
      <Nav dusk={dusk} onToggleDusk={() => setDusk((d) => !d)} />
      <main>
        <Hero />
        <Clothesline onSelect={setActive} />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ProjectSheet project={active} onClose={() => setActive(null)} />
      <Fireflies active={dusk} />
    </div>);

}