import React from 'react';
import Icon from './Icon';

export default function Feature() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="feature section-pad">
      <div className="feature-image">
        <img src="/frostygoodness-poster.png" alt="Mixed fruit bowl" loading="lazy" />
      </div>
      <div className="feature-copy">
        <div className="section-kicker">WHY FREEZE-DRIED?</div>
        <h2>Freshness, <em>retained.</em></h2>
        <p>Water is gently removed at low temperature, so natural flavour, colour and nutrients are retained. The result is lightweight, shelf-stable fruit that delivers an authentic taste and satisfying crunch every time.</p>
        <ul>
          <li><span>01</span> Fruit selected for flavour and colour</li>
          <li><span>02</span> Water removed at low temperature</li>
          <li><span>03</span> Retains nutrients and natural crunch</li>
        </ul>
        <button className="outline-button" onClick={() => scrollTo('contact')}>Talk to us <Icon name="arrow" size={18} /></button>
      </div>
    </section>
  );
}
