import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import categories from '../data/categories';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

const isValid = (val) => {
  if (!val) return false;
  if (typeof val === 'string') return !val.startsWith('TODO_');
  if (Array.isArray(val)) {
    return (
      val.length > 0 &&
      !val.some((item) => typeof item === 'string' && item.startsWith('TODO_'))
    );
  }
  return true;
};

export default function ProductDetail() {
  const { slug } = useParams();
  const [imgError, setImgError] = useState(false);

  // Reset image error state when navigating to a new product
  useEffect(() => {
    setImgError(false);
  }, [slug]);

  const product = useMemo(
    () => products.find((p) => p.slug === slug),
    [slug]
  );

  const category = useMemo(
    () => (product ? categories.find((c) => c.slug === product.category) : null),
    [product]
  );

  const productSchema = useMemo(() => {
    if (!product) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.shortDescription || product.description,
      image: product.image
        ? (product.image.startsWith('http')
            ? product.image
            : `https://fruitvault.netlify.app${product.image}`)
        : undefined,
      category: category?.name,
      brand: {
        '@type': 'Brand',
        name: 'Fruit Vault'
      }
    };
  }, [product, category]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const sameCategory = products.filter(
      (p) => p.category === product.category && p.slug !== product.slug
    );
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }
    const others = products.filter(
      (p) => p.category !== product.category && p.slug !== product.slug
    );
    return [...sameCategory, ...others].slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <main className="product-detail-page not-found-page">
        <SEO
          title="Product Not Found | Fruit Vault"
          description="The requested product could not be found in our catalog."
          canonical="/products"
          noindex={true}
        />
        <div className="not-found-card">
          <div className="section-kicker">CATALOG ERROR</div>
          <h1>Product Not Found</h1>
          <p>
            The requested product could not be found in our current catalog. Please
            browse our complete collection of freeze-dried and dehydrated products.
          </p>
          <Link to="/products" className="gold-button">
            &larr; Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const specs = [
    { label: 'Category', value: category?.name },
    { label: 'Product Type', value: product.type },
    { label: 'Processing Method', value: product.process },
    { label: 'Ingredients', value: product.ingredients },
    {
      label: 'Forms / Cuts',
      value: Array.isArray(product.forms)
        ? product.forms.join(', ')
        : product.forms
    },
    {
      label: 'Pack Sizes',
      value: Array.isArray(product.packSizes)
        ? product.packSizes.join(', ')
        : product.packSizes
    },
    { label: 'Shelf Life', value: product.shelfLife },
    { label: 'Origin', value: product.origin },
    { label: 'Storage', value: product.storage }
  ].filter((item) => isValid(item.value));

  return (
    <main className="product-detail-page">
      <SEO
        title={`${product.name} | ${product.process} ${product.type} | Fruit Vault`}
        description={product.shortDescription || product.description}
        canonical={`/products/${product.slug}`}
        ogType="product"
        image={product.image}
        imageAlt={`${product.process} ${product.name}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.name, url: `/products/${product.slug}` }
        ]}
        schema={productSchema}
      />
      <div className="product-detail-container">
        {/* A. Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        {/* B. Main product section */}
        <section className="product-detail-main">
          {/* Left: Product Image */}
          <div className="product-detail-visual">
            <div className="product-detail-image-box">
              {!imgError && product.image ? (
                <img
                  src={product.image}
                  alt={`${product.process} ${product.name}`}
                  loading="eager"
                  onError={() => setImgError(true)}
                  className="product-detail-img"
                />
              ) : (
                <div className="product-image-fallback">
                  <span className="fallback-pill">{product.process}</span>
                  <b className="fallback-title">{product.name}</b>
                  <small className="fallback-sub">{category?.name}</small>
                </div>
              )}
              <span className="product-pill">
                {product.process ? product.process.toUpperCase() : '100% NATURAL'}
              </span>
            </div>
          </div>

          {/* Right: Product Details & CTAs */}
          <div className="product-detail-content">
            <div className="product-detail-header">
              {product.tag && <span className="product-tag">{product.tag}</span>}
              <h1>{product.name}</h1>
              <div className="product-detail-meta">
                {category && <span className="meta-category">{category.name}</span>}
                <span className="meta-badge">{product.process}</span>
                {product.type && <span className="meta-type">{product.type}</span>}
              </div>
            </div>

            {product.shortDescription && (
              <p className="product-detail-lead">{product.shortDescription}</p>
            )}

            {product.description && (
              <p className="product-detail-desc">{product.description}</p>
            )}

            <div className="product-detail-actions">
              <Link to={`/contact?product=${product.slug}`} className="gold-button">
                Request a Quote <Icon name="arrow" size={18} />
              </Link>
              <Link to={`/contact?product=${product.slug}`} className="outline-button">
                Contact Us
              </Link>
            </div>

            <div className="product-bulk-prompt">
              <span>Procuring in commercial volumes?</span>{' '}
              <Link to="/b2b" className="bulk-link">
                Explore B2B &amp; Wholesale terms <span>↘</span>
              </Link>
            </div>
          </div>
        </section>

        {/* C. Product Information / Specifications */}
        {specs.length > 0 && (
          <section className="product-detail-section">
            <div className="section-kicker">TECHNICAL DETAILS</div>
            <h2>Product Specifications</h2>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <tbody>
                  {specs.map((item) => (
                    <tr key={item.label}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* D. Features */}
        {product.features && product.features.length > 0 && (
          <section className="product-detail-section">
            <div className="section-kicker">KEY HIGHLIGHTS</div>
            <h2>Product Features</h2>
            <div className="features-grid">
              {product.features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <span className="feature-bullet">✦</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* E. Applications & Uses */}
        {product.uses && product.uses.length > 0 && (
          <section className="product-detail-section">
            <div className="section-kicker">FOOD SERVICE & MANUFACTURING</div>
            <h2>Applications &amp; Uses</h2>
            <div className="uses-grid">
              {product.uses.map((use, idx) => (
                <div key={idx} className="use-card">
                  <span className="use-number">0{idx + 1}</span>
                  <p>{use}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* F. Related Products */}
        {relatedProducts.length > 0 && (
          <section className="product-detail-section related-section">
            <div className="section-heading-row">
              <div>
                <div className="section-kicker">EXPLORE MORE</div>
                <h2>Related Products</h2>
              </div>
              <Link to="/products" className="text-button">
                View full catalog <span>↘</span>
              </Link>
            </div>
            <div className="product-grid">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.id || relProduct.slug}
                  product={relProduct}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
