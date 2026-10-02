import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import categories from '../data/categories';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function Category() {
  const { slug } = useParams();

  const category = useMemo(
    () => categories.find((c) => c.slug === slug),
    [slug]
  );

  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return products.filter((p) => p.category === category.slug);
  }, [category]);

  if (!category) {
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
              Please browse our complete collection of freeze-dried and dehydrated
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

  // Category specific overview content based strictly on data
  const categoryOverview = {
    'freeze-dried-fruits':
      'A dedicated commercial catalog of fruit products processed through low-temperature vacuum freeze-drying (lyophilization). By removing water via sublimation, these items retain their natural cellular geometry, vibrant natural pigmentation, and characteristic aroma while offering an airy, crisp crunch and rapid rehydration capability.',
    'freeze-dried-vegetables':
      'A catalog of harvest-fresh vegetables preserved through vacuum freeze-drying. These vegetables maintain their natural shape, crispness, and tenderness, providing commercial kitchens and food processors with immediate rehydration capabilities for dry soups, ramen kits, and savory snack blends.',
    'dehydrated-fruits':
      'A catalog of ripe fruit varieties processed through controlled warm-air dehydration. Removing moisture under monitored thermal conditions yields dense, flexible, and chewy fruit cuts with naturally concentrated sweetness, suited for baking inclusions, granola bars, and confectionery.',
    'dehydrated-vegetables':
      'A catalog of aromatic culinary vegetables processed through steady warm-air dehydration. These uniform flakes, granules, and powders deliver authentic savory depth and pungent aroma to spice mixes, sauces, and institutional foodservice without peeling or prep waste.'
  };

  const overviewText = categoryOverview[category.slug] || category.description;

  return (
    <main className="category-page">
      <SEO
        title={`${category.name} | Fruit Vault`}
        description={category.description}
        canonical={`/products/${category.slug}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: category.name, url: `/products/${category.slug}` }
        ]}
      />
      <div className="page-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{category.name}</span>
        </nav>

        {/* Category Hero */}
        <header className="category-header">
          <div className="section-kicker">
            {category.process ? category.process.toUpperCase() : 'CATALOG'} INGREDIENTS
          </div>
          <h1>{category.name}</h1>
          <p className="category-lead">{category.description}</p>

          <div className="category-meta-chips">
            <span className="meta-chip active">{category.process}</span>
            <span className="meta-chip">{category.type} Produce</span>
            <span className="meta-chip count-chip">
              {categoryProducts.length}{' '}
              {categoryProducts.length === 1 ? 'Product' : 'Products'} Listed
            </span>
          </div>
        </header>

        {/* Category Overview */}
        <section className="b2b-section category-overview-section">
          <div className="section-kicker">CATEGORY OVERVIEW</div>
          <h2>About {category.name}</h2>
          <p className="section-intro">{overviewText}</p>
        </section>

        {/* Product Grid */}
        <section className="category-products-section">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">AVAILABLE PRODUCTS</div>
              <h2>{category.name} Catalog</h2>
            </div>
            <p className="category-product-count">
              Showing all {categoryProducts.length} items in this category
            </p>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="products-empty">
              <p>No products are currently listed in this category.</p>
              <div className="empty-actions">
                <Link to="/products" className="gold-button">
                  View All Products
                </Link>
                <Link to="/contact" className="outline-button">
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="product-grid">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id || product.slug} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Commercial B2B Context */}
        <section className="b2b-section category-b2b-section">
          <div className="section-kicker">COMMERCIAL PROCUREMENT</div>
          <h2>Buying {category.name} for Commercial Use?</h2>
          <div className="b2b-content-split">
            <div className="b2b-prose">
              <p>
                Fruit Vault supplies {category.name.toLowerCase()} directly to food
                manufacturers, commercial bakeries, foodservice operators, and
                distributors.
              </p>
              <p>
                Our commercial team can discuss available cut forms (whole pieces,
                slices, dices, flakes, powders), bulk carton configurations,
                moisture-barrier liners, recurring dispatch schedules, and formal
                technical specification sheets.
              </p>
            </div>
            <div className="b2b-sidebar-card">
              <h3>Request Quotation</h3>
              <p>
                Submit your estimated volume and destination port or city to receive
                pricing, availability, and applicable MOQ.
              </p>
              <Link to="/contact" className="gold-button">
                Request a Quote <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Applications Connection */}
        <section className="b2b-section category-apps-section">
          <div className="section-kicker">END-USE APPLICATIONS</div>
          <h2>Where {category.name} Are Applied</h2>
          <p className="section-intro">
            These ingredients perform across multiple commercial sectors where
            ambient stability and genuine produce flavor are required:
          </p>

          <div className="b2b-grid-3">
            {category.type === 'Fruit' ? (
              <>
                <div className="b2b-card">
                  <h3>Cereals &amp; Granola</h3>
                  <p>
                    Crisp pieces and slices that rehydrate smoothly in dairy or plant
                    milks, providing vibrant color in morning mixes.
                  </p>
                </div>
                <div className="b2b-card">
                  <h3>Bakery &amp; Confectionery</h3>
                  <p>
                    Fruit inclusions that fold into batters, biscuits, and chocolates
                    without introducing unwanted moisture or batter bleed.
                  </p>
                </div>
                <div className="b2b-card">
                  <h3>Beverages &amp; Infusions</h3>
                  <p>
                    Botanical fruit pieces and fine powders that release natural aroma
                    and pigmentation in smoothies and specialty teas.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="b2b-card">
                  <h3>Prepared Meal Kits &amp; Soups</h3>
                  <p>
                    Vegetables and flakes that rehydrate in minutes in hot broths,
                    adding tender texture to ramen, noodles, and dry soup mixes.
                  </p>
                </div>
                <div className="b2b-card">
                  <h3>Seasoning Blends &amp; Rubs</h3>
                  <p>
                    Aromatic flakes and powders that disperse savory taste uniformly
                    throughout commercial spice blends, sauces, and marinades.
                  </p>
                </div>
                <div className="b2b-card">
                  <h3>Foodservice &amp; Scratch Cooking</h3>
                  <p>
                    Zero-prep culinary ingredients that eliminate produce peeling,
                    slicing, and refrigeration spoilage in high-volume kitchens.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="category-action-row">
            <Link to="/applications" className="text-button">
              Explore All Commercial Applications <span>↘</span>
            </Link>
          </div>
        </section>

        {/* Quality & Processing Connection */}
        <section className="b2b-section category-quality-section">
          <div className="section-kicker">PROCESSING &amp; STORAGE</div>
          <h2>About {category.process} Processing &amp; Storage</h2>
          <div className="b2b-content-split">
            <div className="b2b-prose">
              <p>
                {category.process === 'Freeze-Dried'
                  ? 'Freeze-drying removes water via vacuum sublimation while the produce remains frozen. This gentle drying preserves the cellular structure, natural geometry, and color of the produce while creating a delicate, porous crunch that stores at ambient temperatures.'
                  : 'Dehydration removes moisture through continuous, regulated warm-air circulation until safe moisture equilibrium is reached, resulting in a flexible, shelf-stable format with concentrated natural taste.'}
              </p>
              <div className="storage-callout">
                <b>Storage Recommendation:</b>
                <p>{category.storage}</p>
              </div>
            </div>
            <div className="b2b-sidebar-card">
              <h3>Standards &amp; Methodology</h3>
              <p>
                Learn more about our quality approach, hygienic dry-food handling, and
                moisture-barrier packaging standards.
              </p>
              <Link to="/quality" className="outline-button">
                View Quality Details <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Other Categories Switcher */}
        <section className="category-switcher-strip">
          <span className="switcher-label">Other Product Categories:</span>
          <div className="switcher-links">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/products/${c.slug}`}
                  className="switcher-link"
                >
                  {c.name}
                </Link>
              ))}
            <Link to="/products" className="switcher-link all-link">
              All Products &rarr;
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
