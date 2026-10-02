import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import categories from '../data/categories';
import ProductDetail from './ProductDetail';
import Category from './Category';
import SEO from '../components/SEO';

export default function ProductOrCategory() {
  const { slug } = useParams();

  // 1. Safe Category Match
  const isCategory = categories.some((c) => c.slug === slug);
  if (isCategory) {
    return <Category />;
  }

  // 2. Safe Product Match
  const isProduct = products.some((p) => p.slug === slug);
  if (isProduct) {
    return <ProductDetail />;
  }

  // 3. Specific Category Not-Found detection
  const looksLikeCategory =
    slug?.includes('fruit') ||
    slug?.includes('vegetable') ||
    slug?.includes('category') ||
    slug?.includes('freeze') ||
    slug?.includes('dehydrated');

  if (looksLikeCategory) {
    return (
      <main className="info-page not-found-page">
        <SEO
          title="Category Not Found | Fruit Vault"
          description="The requested product category could not be found in our catalog."
          canonical="/products"
          noindex={true}
        />
        <div className="page-container">
          <div className="not-found-card">
            <div className="section-kicker">CATALOG ERROR</div>
            <h1>Category Not Found</h1>
            <p>
              The requested product category could not be found in our catalog.
              Please explore our full range of freeze-dried and dehydrated
              ingredients.
            </p>
            <div className="not-found-actions">
              <Link to="/products" className="gold-button">
                View All Products
              </Link>
              <Link to="/contact" className="outline-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // 4. Default to ProductDetail (which renders its own clean Product Not Found card)
  return <ProductDetail />;
}
