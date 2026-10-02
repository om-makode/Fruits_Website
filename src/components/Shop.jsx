import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import categories from '../data/categories';
import ProductCard from './ProductCard';
import Icon from './Icon';

export default function Shop() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="shop section-pad" id="shop">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">THE COLLECTION</div>
          <h2>
            Pick your <em>favourite.</em>
          </h2>
        </div>
        <p>
          From morning smoothies to midnight desserts, keep a pack of pure
          goodness in your pantry.
        </p>
      </div>

      <div className="home-category-strip">
        <span className="home-cat-label">Explore by Category:</span>
        <div className="home-cat-links">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="home-cat-pill"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id || product.slug} product={product} />
        ))}
      </div>

      <div className="shop-all-action">
        <Link to="/products" className="gold-button">
          View all products <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
