import React from 'react';

export default function Story() {
  return (
    <section className="story section-pad" id="story">
      <div className="story-card">
        <div className="section-kicker">OUR LITTLE PHILOSOPHY</div>
        <h2>More fruit.<br /><em>Less fuss.</em></h2>
        <p>Fruit Vault was imagined around a simple idea: make genuinely good fruit easier to enjoy, even when the season has moved on. We believe proper preservation allows genuine fruit to stay fresh and vibrant—without flavour or goodness disappearing.</p>
        <div className="signature">Fruit Vault <span>•</span> Since 2026</div>
      </div>
      <div className="story-orbit">
        <div className="orbit-ring"></div>
        <div className="orbit-copy">
          <span>REAL FRUITS</span>
          <b>PURE<br />GOODNESS</b>
          <span>ALL YEAR ROUND</span>
        </div>
      </div>
    </section>
  );
}
