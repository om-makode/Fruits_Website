import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const products = [
  {
    name: 'Strawberries',
    tag: 'Sweet & bright',
    price: '₹249',
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Blueberries',
    tag: 'Antioxidant rich',
    price: '₹349',
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Mango',
    tag: 'Tropical & golden',
    price: '₹229',
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Kiwi',
    tag: 'Fresh & tangy',
    price: '₹279',
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Mixed Berries',
    tag: 'The house favourite',
    price: '₹399',
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Tropical Mix',
    tag: 'Mango • Pineapple • Papaya',
    price: '₹299',
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=900&q=85'
  }
];

const benefits = [
  { icon: 'leaf', title: '100% Natural', text: 'Just fruit. No unnecessary extras.' },
  { icon: 'snow', title: 'Locked-in Freshness', text: 'Frozen at peak freshness to preserve taste.' },
  { icon: 'flask', title: 'No Added Preservatives', text: 'Clean, simple ingredients you can trust.' },
  { icon: 'heart', title: 'Rich in Vitamins', text: 'A colourful everyday boost of goodness.' }
];

function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    leaf: <><path d="M20.8 3.2C12.2 3.1 6.3 6.2 4.6 12.3c-1.2 4.2 1.7 7.7 5.5 7.1 5.9-.9 9.7-6.8 10.7-16.2Z"/><path d="M3.5 21c4-5.1 8.1-8.5 13.1-11.3"/></>,
    snow: <><path d="M12 2v20M4.7 6.2l14.6 11.6M19.3 6.2 4.7 17.8M7.8 3.8 12 6l4.2-2.2M7.8 20.2 12 18l4.2 2.2"/></>,
    flask: <><path d="M9 3h6M10 3v5.2L4.8 17a3 3 0 0 0 2.5 4.7h9.4a3 3 0 0 0 2.5-4.7L14 8.2V3"/><path d="M7.2 16h9.6"/></>,
    heart: <path d="M20.8 8.7c0 5.4-8.8 11-8.8 11S3.2 14.1 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z"/>,
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    cart: <><path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 7H6"/><circle cx="10" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.8" r=".7" fill="currentColor" stroke="none"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    phone: <path d="M6.5 3.5 9 3l2 5-2.1 1.7a15 15 0 0 0 5.9 5.9l1.7-2.1 5 2 .-0.5 2.5a2 2 0 0 1-2.2 1.6C11.2 18.8 5.2 12.8 4.9 5.7A2 2 0 0 1 6.5 3.5Z"/>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState(0);
  const [active, setActive] = useState('All');
  const [toast, setToast] = useState('');

  const filteredProducts = useMemo(() => {
    if (active === 'All') return products;
    if (active === 'Berries') return products.filter(p => p.name.includes('Berry') || p.name.includes('Straw') || p.name.includes('Blue'));
    if (active === 'Tropical') return products.filter(p => ['Mango', 'Tropical Mix'].includes(p.name));
    return products.filter(p => p.name === 'Kiwi');
  }, [active]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const addToCart = (name) => {
    setCart(c => c + 1);
    setToast(`${name} added to your basket`);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submitInquiry = (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData();

  formData.append("name", form.elements.name.value.trim());
  formData.append("email", form.elements.email.value.trim());
  formData.append("message", form.elements.message.value.trim());

  const iframe = document.createElement("iframe");
  iframe.name = "hidden_iframe";
  iframe.style.display = "none";

  document.body.appendChild(iframe);

  const submitForm = document.createElement("form");

  submitForm.action =
    "https://script.google.com/macros/s/AKfycbzw5MP01KrdHkUKYvObg4zpHL01T6mI_qxbLy9JlYyWcbc21Yov1vg5i7IJI42PIPbnqA/exec";

  submitForm.method = "POST";
  submitForm.target = "hidden_iframe";
  submitForm.style.display = "none";

  formData.forEach((value, key) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    submitForm.appendChild(input);
  });

  document.body.appendChild(submitForm);

  submitForm.submit();

  setToast("Thanks! We will get back to you soon.");

  form.reset();

  setTimeout(() => {
    document.body.removeChild(submitForm);
    document.body.removeChild(iframe);
  }, 3000);
};

  return (
    <div className="site-shell">
      <div className="announcement">FREE DELIVERY ON ORDERS ABOVE ₹999 <span>•</span> COLD-CHAIN DELIVERED</div>

      <header className="navbar">
        <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Fruit Vault home">
          <span className="brand-mark"><Icon name="leaf" size={29} /></span>
          <span><b>Fruit</b><strong>Vault</strong><small>PREMIUM FROZEN FRUITS</small></span>
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => scrollTo('shop')}>Shop</button>
          <button onClick={() => scrollTo('why')}>Why Fruit Vault</button>
          <button onClick={() => scrollTo('story')}>Our Story</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <button className="cart-button" onClick={() => setToast(cart ? `${cart} item${cart > 1 ? 's' : ''} in your basket` : 'Your basket is ready for goodness')}>
          <Icon name="cart" size={21} /><span className="cart-label">Basket</span><em>{cart}</em>
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> PREMIUM QUALITY <span></span></div>
            <h1>Real fruit.<br /><i>Pure goodness.</i><br /><span>All year round.</span></h1>
            <p className="hero-lead">Beautifully frozen at peak freshness, so every smoothie, dessert and snack starts with fruit that tastes like it should.</p>
            <div className="hero-actions">
              <button className="gold-button" onClick={() => scrollTo('shop')}>Explore the collection <Icon name="arrow" size={19} /></button>
              <button className="text-button" onClick={() => scrollTo('story')}>Our story <span>↘</span></button>
            </div>
            <div className="hero-trust"><span><Icon name="snow" size={17} /> Cold-chain packed</span><span><Icon name="leaf" size={17} /> No added preservatives</span><span><Icon name="heart" size={17} /> Made for everyday goodness</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow"></div>
            <div className="poster-frame">
              <img src="/frostygoodness-poster.png" alt="Fruit Vault premium mixed frozen fruits" />
            </div>
            <div className="floating-card quality-card"><span className="mini-icon"><Icon name="leaf" size={18} /></span><div><b>Peak freshness</b><small>Frozen when fruit is at its best</small></div></div>
            <div className="floating-card made-card"><b>100%</b><span>FRUIT<br />GOODNESS</span></div>
          </div>
        </section>

        <section className="marquee-strip" aria-label="Brand values">
          <div>FRESHNESS <b>✦</b> HEALTH <b>✦</b> HAPPINESS <b>✦</b> FRESHNESS <b>✦</b> HEALTH <b>✦</b> HAPPINESS</div>
        </section>

        <section className="intro section-pad">
          <div className="section-kicker">THE FRUIT VAULT STANDARD</div>
          <h2>Good fruit deserves<br /><em>great treatment.</em></h2>
          <p>We choose vibrant fruit, prepare it simply, then freeze it to lock in the colour, texture and flavour you love. No complicated ingredients. No compromise on taste.</p>
        </section>

        <section className="benefits section-pad" id="why">
          {benefits.map((b) => <article className="benefit" key={b.title}><div className="benefit-icon"><Icon name={b.icon} size={27} /></div><h3>{b.title}</h3><p>{b.text}</p></article>)}
        </section>

        <section className="shop section-pad" id="shop">
          <div className="section-heading-row">
            <div><div className="section-kicker">THE COLLECTION</div><h2>Pick your <em>favourite.</em></h2></div>
            <p>From morning smoothies to midnight desserts, keep a bag of beautiful fruit in your freezer.</p>
          </div>
          <div className="filter-row">
            {['All', 'Berries', 'Tropical', 'Kiwi'].map(item => <button key={item} className={active === item ? 'filter active' : 'filter'} onClick={() => setActive(item)}>{item}</button>)}
          </div>
          <div className="product-grid">
            {filteredProducts.map((product, i) => <article className="product-card" key={product.name}>
              <div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-pill">FROZEN FRESH</span></div>
              <div className="product-info"><div><span className="product-tag">{product.tag}</span><h3>{product.name}</h3><small>{product.unit} pack</small></div><div className="product-buy"><strong>{product.price}</strong><button onClick={() => addToCart(product.name)} aria-label={`Add ${product.name} to basket`}>+</button></div></div>
            </article>)}
          </div>
        </section>

        <section className="feature section-pad">
          <div className="feature-image"><img src="/frostygoodness-poster.png" alt="Mixed frozen fruit bowl" loading="lazy" /></div>
          <div className="feature-copy"><div className="section-kicker">WHY FROZEN?</div><h2>Freshness, <em>paused.</em></h2><p>Freezing at the right moment lets fruit keep the character that made us choose it in the first place. So your freezer becomes a little shortcut to better breakfasts, brighter desserts and easier everyday eating.</p><ul><li><span>01</span> Fruit selected for flavour and colour</li><li><span>02</span> Carefully prepared in small batches</li><li><span>03</span> Frozen to protect freshness</li></ul><button className="outline-button" onClick={() => scrollTo('contact')}>Talk to us <Icon name="arrow" size={18} /></button></div>
        </section>

        <section className="story section-pad" id="story">
          <div className="story-card"><div className="section-kicker">OUR LITTLE PHILOSOPHY</div><h2>More fruit.<br /><em>Less fuss.</em></h2><p>Fruit Vault was imagined around a simple idea: make genuinely good fruit easier to enjoy, even when the season has moved on. We believe the freezer can be a place for freshness—not a place where flavour goes to disappear.</p><div className="signature">Fruit Vault <span>•</span> Since 2026</div></div>
          <div className="story-orbit"><div className="orbit-ring"></div><div className="orbit-copy"><span>REAL FRUITS</span><b>PURE<br />GOODNESS</b><span>ALL YEAR ROUND</span></div></div>
        </section>

        <section className="cta section-pad" id="contact">
          <div className="cta-inner"><div><div className="section-kicker">BRING GOODNESS HOME</div><h2>Your freezer just found<br /><em>its new favourite.</em></h2><p>Want to stock Fruit Vault for home, cafés, restaurants or retail? Say hello and let's talk.</p></div><form onSubmit={submitInquiry}>
  <input
    type="text"
    name="name"
    placeholder="Your name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email address"
    required
  />

  <textarea
    name="message"
    placeholder="Tell us what you need"
    rows="3"
  ></textarea>

  <button className="gold-button" type="submit">
    Send enquiry
    <Icon name="arrow" size={18} />
  </button>
</form></div>
        </section>
      </main>

      <footer className="footer"><div className="footer-main"><div className="footer-brand"><button className="brand footer-logo" onClick={() => scrollTo('top')} aria-label="Fruit Vault home"><span className="brand-mark"><Icon name="leaf" size={26} /></span><span><b>Fruit</b><strong>Vault</strong><small>PREMIUM FROZEN FRUITS</small></span></button><p>Real fruits. Pure goodness. All year round.</p></div><div><h4>Explore</h4><button onClick={() => scrollTo('shop')}>Shop fruits</button><button onClick={() => scrollTo('why')}>Our standard</button><button onClick={() => scrollTo('story')}>Our story</button></div><div><h4>Contact</h4><a href="tel:+919876543210"><Icon name="phone" size={16} /> +91 98765 43210</a><a href="mailto:hello@fruitvault.in"><Icon name="mail" size={16} /> hello@fruitvault.in</a><span><span className="pin">⌖</span> Mumbai, India</span></div><div><h4>Follow</h4><a href="#instagram"><Icon name="instagram" size={18} /> Instagram</a><span>Fresh drops & fruit ideas</span></div></div><div className="footer-bottom"><span>© 2026 Fruit Vault. All rights reserved.</span><span>Made with fruit & good intent.</span></div></footer>

      {toast && <div className="toast"><span>✓</span>{toast}</div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
