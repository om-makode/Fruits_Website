import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import categories from '../data/categories';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';

const PROCESS_TABS = ['All', 'Freeze-Dried', 'Dehydrated'];
const TYPE_CHIPS = ['All', 'Fruit', 'Vegetable'];

export default function Products() {
  const [search, setSearch] = useState('');
  const [processFilter, setProcessFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const query = search.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        (product.tag && product.tag.toLowerCase().includes(query));

      const matchesProcess =
        processFilter === 'All' || product.process === processFilter;

      const matchesType =
        typeFilter === 'All' || product.type === typeFilter;

      return matchesSearch && matchesProcess && matchesType;
    });
  }, [search, processFilter, typeFilter]);

  const clearFilters = () => {
    setSearch('');
    setProcessFilter('All');
    setTypeFilter('All');
  };

  return (
    <main className="products-page">
      <SEO
        title="Products | Freeze-Dried & Dehydrated Produce | Fruit Vault"
        description="Explore our wholesale catalog of freeze-dried and dehydrated fruits and vegetables. Available in slices, dices, whole pieces, and powders for B2B procurement."
        canonical="/products"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' }
        ]}
      />
      <header className="products-header">
        <div className="section-kicker">OUR COLLECTION</div>
        <h1>Our Products</h1>
        <p>
          Premium freeze-dried and dehydrated fruits and vegetables
          crafted for food service, bakeries, snacking, and culinary creations.
        </p>
      </header>

      {/* Category Landing Pages Navigation */}
      <section className="products-categories-strip">
        <span className="strip-title">Browse by Category:</span>
        <div className="category-strip-links">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="category-strip-btn"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="products-controls">
        <div className="search-wrap">
          <input
            type="text"
            className="products-search"
            placeholder="Search by product name or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search products"
          />
        </div>

        <div className="filters-group">
          <div className="process-tabs" role="tablist" aria-label="Process filters">
            {PROCESS_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={processFilter === tab ? 'filter active' : 'filter'}
                onClick={() => setProcessFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="type-chips" role="group" aria-label="Type filters">
            {TYPE_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                className={typeFilter === chip ? 'chip active' : 'chip'}
                onClick={() => setTypeFilter(chip)}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        <p className="products-count">
          Showing {filteredProducts.length}{' '}
          {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </section>

      {filteredProducts.length === 0 ? (
        <div className="products-empty">
          <p>No products found</p>
          <button type="button" className="gold-button" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id || product.slug} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
