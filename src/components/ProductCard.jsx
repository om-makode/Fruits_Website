import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories';

const categoryMap = Object.fromEntries(categories.map((c) => [c.slug, c.name]));

export default function ProductCard({ product }) {
  const categoryName = categoryMap[product.category] || product.category;

  return (
    <article className="product-card">
      <div className="product-image">
        {product.image && (
          <img
            src={product.image}
            alt={`${product.process ? `${product.process} ` : ''}${product.name}`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        <span className="product-pill">
          {product.process ? product.process.toUpperCase() : '100% NATURAL'}
        </span>
      </div>
      <div className="product-info">
        <div>
          <span className="product-tag">{product.tag}</span>
          <h3>{product.name}</h3>
          <small>{categoryName}</small>
          {product.shortDescription && (
            <p className="product-desc">{product.shortDescription}</p>
          )}
          <Link to={`/products/${product.slug}`} className="product-link">
            View Details &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
