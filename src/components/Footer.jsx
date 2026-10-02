import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import business, { whatsappLink } from '../data/business';

export default function Footer() {
  const scrollTo = (id) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const showPhone =
    business.contact.phoneDisplay &&
    !business.contact.phoneDisplay.startsWith('TODO_');
  const showEmail =
    business.contact.email && !business.contact.email.startsWith('TODO_');
  const showWhatsApp =
    business.contact.whatsappNumber &&
    !business.contact.whatsappNumber.startsWith('TODO_');
  const showInstagram =
    business.social.instagram &&
    !business.social.instagram.startsWith('TODO_');
  const showFssai =
    business.compliance.fssai &&
    !business.compliance.fssai.startsWith('TODO_');
  const showGst =
    business.compliance.gst && !business.compliance.gst.startsWith('TODO_');

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <button
            className="brand footer-logo"
            onClick={() => scrollTo('top')}
            aria-label={`${business.brandName} home`}
          >
            <span className="brand-mark">
              <img
                src="/logo-icon.png"
                alt={business.brandName}
                className="brand-mark-img"
              />
            </span>
            <span>
              <b>Fruit</b>
              <strong>Vault</strong>
              <small>FREEZE-DRIED &amp; DEHYDRATED</small>
            </span>
          </button>
          <p>{business.tagline}</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/products">All Products</Link>
          <Link to="/products/freeze-dried-fruits">Freeze-Dried Fruits</Link>
          <Link to="/products/freeze-dried-vegetables">Freeze-Dried Vegetables</Link>
          <Link to="/products/dehydrated-fruits">Dehydrated Fruits</Link>
          <Link to="/products/dehydrated-vegetables">Dehydrated Vegetables</Link>
          <Link to="/b2b">B2B &amp; Wholesale</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/quality">Quality &amp; Processing</Link>
          <Link to="/about">About Us</Link>
          <Link to="/faq">Frequently Asked Questions (FAQ)</Link>
          <Link to="/contact">Request a Quote</Link>
          <button onClick={() => scrollTo('why')}>Why {business.brandName}</button>
          <button onClick={() => scrollTo('story')}>Our Story</button>
        </div>
        <div>
          <h4>Legal &amp; Policies</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/refund-policy">Refund / Cancellation Policy</Link>
        </div>
        <div>
          <h4>Contact</h4>
          {showPhone && (
            <a href={`tel:${business.contact.phoneTel}`}>
              <Icon name="phone" size={16} /> {business.contact.phoneDisplay}
            </a>
          )}
          {showEmail && (
            <a href={`mailto:${business.contact.email}`}>
              <Icon name="mail" size={16} /> {business.contact.email}
            </a>
          )}
          {showWhatsApp && (
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Get a quote on WhatsApp
            </a>
          )}
          <span>
            <span className="pin">⌖</span> {business.address.city},{' '}
            {business.address.country}
          </span>
        </div>
        <div>
          <h4>Follow</h4>
          {showInstagram && (
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" size={18} /> Instagram
            </a>
          )}
          <span>Fresh drops &amp; fruit ideas</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {business.foundedYear} {business.brandName}. All rights reserved.
        </span>
        {(showFssai || showGst) && (
          <span>
            {showFssai && `FSSAI: ${business.compliance.fssai}`}
            {showFssai && showGst && ' • '}
            {showGst && `GST: ${business.compliance.gst}`}
          </span>
        )}
        <span>Made with fruit &amp; good intent.</span>
      </div>
    </footer>
  );
}
