import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Intro from '../components/Intro';
import Benefits from '../components/Benefits';
import Shop from '../components/Shop';
import Feature from '../components/Feature';
import Story from '../components/Story';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <main id="top">
      <SEO
        title="Fruit Vault | Freeze-Dried & Dehydrated Fruits and Vegetables"
        description="B2B supplier of shelf-stable freeze-dried and dehydrated fruits and vegetables for food manufacturers, wholesalers, bakeries, and commercial kitchens."
        canonical="/"
        breadcrumbs={[{ name: 'Home', url: '/' }]}
      />
      <Hero />
      <Marquee />
      <Intro />
      <Benefits />
      <Shop />
      <Feature />
      <Story />
      <Contact />
    </main>
  );
}
