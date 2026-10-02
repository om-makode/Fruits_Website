import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import business from '../data/business';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="announcement">
        ENQUIRIES WELCOME <span>•</span> FREEZE-DRIED &amp; DEHYDRATED
      </div>

      <header className="navbar">
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <button
          className="brand"
          onClick={() => scrollTo('top')}
          aria-label={`${business.brandName} home`}
        >
          <img
            src="/logo-transparent.png"
            alt={`${business.brandName} — Premium Freeze-Dried & Dehydrated Fruits`}
            className="brand-logo"
            width="160"
            height="58"
          />
        </button>
        <nav
          className={menuOpen ? 'nav-links open' : 'nav-links'}
          aria-label="Main navigation"
        >
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/applications" onClick={() => setMenuOpen(false)}>
            Applications
          </Link>
          <Link to="/b2b" onClick={() => setMenuOpen(false)}>
            B2B &amp; Wholesale
          </Link>
          <Link to="/quality" onClick={() => setMenuOpen(false)}>
            Quality
          </Link>
          <button onClick={() => scrollTo('why')}>Why Us</button>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Request a Quote
          </Link>
        </nav>
      </header>
    </>
  );
}
