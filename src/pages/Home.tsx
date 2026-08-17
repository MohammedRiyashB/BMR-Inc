import { Hero } from '../components/Hero';
import { WhatWeBuild } from '../components/WhatWeBuild';
import { Products } from '../components/Products';
import { Technology } from '../components/Technology';
import { Vision } from '../components/Vision';
import { About } from '../components/About';
import { Journey } from '../components/Journey';
import { Future } from '../components/Future';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <WhatWeBuild />
      <Products />
      <Technology />
      <Vision />
      <About />
      <Journey />
      <Future />
      <Contact />
    </main>
  );
}
