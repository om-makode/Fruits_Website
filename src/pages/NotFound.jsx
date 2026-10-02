import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <main className="info-page not-found-page">
      <SEO
        title="Page Not Found | Fruit Vault"
        description="The page you are looking for does not exist or may have been moved."
        canonical="/"
        noindex={true}
      />
      <div className="page-container">
        <div className="not-found-card">
          <div className="section-kicker">404 ERROR</div>
          <h1>Page Not Found</h1>
          <p>
            The page you are looking for does not exist or may have been moved.
            Please explore our catalog of freeze-dried and dehydrated ingredients or
            return to the homepage.
          </p>
          <div className="not-found-actions">
            <Link to="/products" className="gold-button">
              View All Products
            </Link>
            <Link to="/" className="outline-button">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
