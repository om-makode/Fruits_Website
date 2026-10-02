import React from 'react';
import Icon from './Icon';
import benefits from '../data/benefits';

export default function Benefits() {
  return (
    <section className="benefits section-pad" id="why">
      {benefits.map((b) => (
        <article className="benefit" key={b.title}>
          <div className="benefit-icon"><Icon name={b.icon} size={27} /></div>
          <h3>{b.title}</h3>
          <p>{b.text}</p>
        </article>
      ))}
    </section>
  );
}
