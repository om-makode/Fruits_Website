import React from 'react';
import Icon from './Icon';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span></span> PREMIUM QUALITY <span></span></div>
        <h1>Real fruit.<br /><i>Pure goodness.</i><br /><span>All year round.</span></h1>
        <p className="hero-lead">Beautifully preserved at peak freshness, so every smoothie, dessert and snack starts with fruit that tastes like it should.</p>
        <div className="hero-actions">
          <button className="gold-button" onClick={() => scrollTo('shop')}>Explore the collection <Icon name="arrow" size={19} /></button>
          <button className="text-button" onClick={() => scrollTo('story')}>Our story <span>↘</span></button>
        </div>
        <div className="hero-trust"><span><Icon name="snow" size={17} /> Shelf-stable quality</span><span><Icon name="leaf" size={17} /> No added preservatives</span><span><Icon name="heart" size={17} /> Made for everyday goodness</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-glow"></div>
        <div className="poster-frame">
          <img src="/frostygoodness-poster.png" alt="Fruit Vault premium mixed fruits" />
        </div>
        <div className="floating-card quality-card"><span className="mini-icon"><Icon name="leaf" size={18} /></span><div><b>Peak freshness</b><small>Preserved when fruit is at its best</small></div></div>
        <div className="floating-card made-card"><b>100%</b><span>FRUIT<br />GOODNESS</span></div>
      </div>
    </section>
  );
}
