import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function Applications() {

  // Categorize products by application relevance using data from products.js
  const foodMfgProducts = useMemo(
    () =>
      products.filter((p) =>
        ['strawberries', 'blueberries', 'mixed-berries', 'sweet-corn', 'green-peas', 'onion-flakes', 'garlic-flakes'].includes(
          p.slug
        )
      ),
    []
  );

  const beverageProducts = useMemo(
    () =>
      products.filter((p) =>
        ['mango', 'strawberries', 'mixed-berries', 'tropical-mix', 'kiwi'].includes(p.slug)
      ),
    []
  );

  const bakeryProducts = useMemo(
    () =>
      products.filter((p) =>
        ['blueberries', 'strawberries', 'mango-slices', 'garlic-flakes', 'onion-flakes', 'mixed-berries'].includes(
          p.slug
        )
      ),
    []
  );

  const foodserviceProducts = useMemo(
    () =>
      products.filter((p) =>
        ['mango', 'blueberries', 'sweet-corn', 'green-peas', 'onion-flakes', 'garlic-flakes'].includes(
          p.slug
        )
      ),
    []
  );

  const retailSnackProducts = useMemo(
    () =>
      products.filter((p) =>
        ['strawberries', 'mango', 'tropical-mix', 'mango-slices', 'green-peas', 'sweet-corn'].includes(
          p.slug
        )
      ),
    []
  );

  return (
    <main className="info-page applications-page">
      <SEO
        title="Applications & Ingredient Formats | Fruit Vault"
        description="Explore ingredient applications across bakery, breakfast cereals, confectionery, beverage blends, seasonings, and packaged food manufacturing."
        canonical="/applications"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Applications', url: '/applications' }
        ]}
      />
      <div className="page-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Commercial Applications</span>
        </nav>

        {/* Hero Section */}
        <header className="page-header">
          <div className="section-kicker">COMMERCIAL USE CASES</div>
          <h1>Commercial Applications</h1>
          <p>
            Explore how Fruit Vault’s freeze-dried and dehydrated fruit and
            vegetable ingredients perform across food manufacturing, bakery,
            beverages, culinary preparation, and retail snack programs.
          </p>
          <div className="page-header-actions">
            <Link to="/products" className="gold-button">
              Browse Products <Icon name="arrow" size={18} />
            </Link>
            <Link to="/contact" className="outline-button">
              Request a Quote
            </Link>
          </div>
        </header>

        {/* 1. Food Manufacturing & Dry Mixes */}
        <section className="b2b-section app-section">
          <div className="section-kicker">SECTOR 01</div>
          <h2>Food Manufacturing &amp; Dry Mixes</h2>
          <p className="section-intro">
            Industrial processors incorporate freeze-dried and dehydrated
            ingredients to introduce genuine fruit and vegetable character
            without altering formulation moisture levels or introducing cold-chain
            storage dependencies.
          </p>

          <div className="app-use-cases-grid">
            <div className="app-use-box">
              <h4>Breakfast Cereals, Granola &amp; Oatmeal</h4>
              <p>
                Whole and sliced freeze-dried berries float crisp and rehydrate
                smoothly in milk or yogurt, adding vibrant visual contrast and
                natural fruit taste to morning cereal formulations.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Prepared Meal Kits &amp; Instant Soups</h4>
              <p>
                Freeze-dried green peas and sweet corn kernels rehydrate in
                minutes in warm broths, retaining tender mouthfeel in instant
                noodle cups and dehydrated soup premixes.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Seasoning Blends &amp; Savoury Rubs</h4>
              <p>
                Dehydrated onion and garlic flakes, granules, and powders
                disperse aroma evenly in dry seasoning mixes, commercial
                marinades, and meat rubs.
              </p>
            </div>
          </div>

          <div className="app-products-strip">
            <span className="strip-label">Relevant Catalog Products:</span>
            <div className="strip-pills">
              {foodMfgProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="product-pill-link"
                >
                  {p.name} <span className="pill-proc">{p.process}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Bakery & Confectionery */}
        <section className="b2b-section app-section">
          <div className="section-kicker">SECTOR 02</div>
          <h2>Bakery &amp; Confectionery</h2>
          <p className="section-intro">
            Bakeries and confectioners rely on dried produce for applications
            where fresh fruit moisture would compromise dough structure, cause
            sogginess, or accelerate mould growth.
          </p>

          <div className="app-use-cases-grid">
            <div className="app-use-box">
              <h4>Muffins, Cakes &amp; Biscuit Inclusions</h4>
              <p>
                Freeze-dried blueberries and strawberries remain intact during
                gentle fold-ins, preventing batter bleeding while releasing
                concentrated berry flavour during baking.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Chocolates, Gourmet Bark &amp; Truffles</h4>
              <p>
                Moisture-free freeze-dried fruit pieces and powders bond
                cleanly with chocolate tempering without causing seizing or
                sugar bloom.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Artisan Breads &amp; Garlic Baguettes</h4>
              <p>
                Dehydrated garlic and onion flakes rehydrate during dough
                fermentation, creating aromatic herb breads and crust seasonings
                with uniform dispersion.
              </p>
            </div>
          </div>

          <div className="app-products-strip">
            <span className="strip-label">Relevant Catalog Products:</span>
            <div className="strip-pills">
              {bakeryProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="product-pill-link"
                >
                  {p.name} <span className="pill-proc">{p.process}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Beverages & Infusions */}
        <section className="b2b-section app-section">
          <div className="section-kicker">SECTOR 03</div>
          <h2>Beverages &amp; Infusions</h2>
          <p className="section-intro">
            Freeze-dried fruits preserve their cellular permeability, allowing
            them to rapidly release aroma, colour, and taste when blended or
            infused into liquids.
          </p>

          <div className="app-use-cases-grid">
            <div className="app-use-box">
              <h4>Smoothies &amp; Smoothie Bowls</h4>
              <p>
                Freeze-dried mango, strawberries, and tropical mix pulverize
                rapidly in commercial blenders to build rich, flavourful
                smoothie bases with vibrant natural pigmentation.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Fruit Teas &amp; Botanicals</h4>
              <p>
                Freeze-dried kiwi slices and berry pieces provide appealing
                botanical aesthetics and fruity notes in artisanal hot and iced
                tea blends.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Beverage Mix-Ins &amp; Garnishes</h4>
              <p>
                Floatable crisp berry pieces and tropical fruit chunks provide
                textural contrast and visual appeal in mocktails, craft sodas,
                and specialty drinks.
              </p>
            </div>
          </div>

          <div className="app-products-strip">
            <span className="strip-label">Relevant Catalog Products:</span>
            <div className="strip-pills">
              {beverageProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="product-pill-link"
                >
                  {p.name} <span className="pill-proc">{p.process}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Restaurants, Cafés & Foodservice */}
        <section className="b2b-section app-section">
          <div className="section-kicker">SECTOR 04</div>
          <h2>Restaurants, Cafés &amp; Foodservice</h2>
          <p className="section-intro">
            Commercial kitchens benefit from consistent year-round supply,
            standardized piece cuts, and the complete elimination of produce
            washing, peeling, slicing, and trimming labor.
          </p>

          <div className="app-use-cases-grid">
            <div className="app-use-box">
              <h4>Parfaits, Yogurt &amp; Acai Bowls</h4>
              <p>
                Ready-to-serve freeze-dried fruit toppings that maintain their
                signature crunch over chilled yogurt, granola, and breakfast
                desserts.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Salad Toppings &amp; Savoury Garnishes</h4>
              <p>
                Crunchy freeze-dried sweet corn and tender green peas add
                delightful texture and pop to gourmet salads, bowls, and pasta
                dishes.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Zero-Prep Culinary Seasoning</h4>
              <p>
                Dehydrated onion and garlic flakes deliver immediate aromatic
                depth to house-made stocks, gravies, dressings, and culinary
                sautés with zero preparation waste.
              </p>
            </div>
          </div>

          <div className="app-products-strip">
            <span className="strip-label">Relevant Catalog Products:</span>
            <div className="strip-pills">
              {foodserviceProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="product-pill-link"
                >
                  {p.name} <span className="pill-proc">{p.process}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Packaged Retail & Snacking */}
        <section className="b2b-section app-section">
          <div className="section-kicker">SECTOR 05</div>
          <h2>Packaged Retail &amp; Snacking</h2>
          <p className="section-intro">
            Single-ingredient dried produce matches consumer demand for clean-label,
            convenient foods suitable for on-the-go snacking, school lunches, and
            pantry storage.
          </p>

          <div className="app-use-cases-grid">
            <div className="app-use-box">
              <h4>Single-Ingredient Fruit Packs</h4>
              <p>
                Crisp freeze-dried strawberries, mango chunks, and tropical
                mixes ready for commercial pouch packaging without added sugars,
                fillers, or artificial flavours.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Chewy Fruit Strips</h4>
              <p>
                Dehydrated mango slices offer a satisfying chewy mouthfeel and
                concentrated tropical sweetness ideal for dry snack packs and
                trail mix blends.
              </p>
            </div>

            <div className="app-use-box">
              <h4>Savory Crunchy Vegetable Snacks</h4>
              <p>
                Lightly seasoned or natural freeze-dried sweet corn and green
                peas positioned as plant-based crunchy snack alternatives.
              </p>
            </div>
          </div>

          <div className="app-products-strip">
            <span className="strip-label">Relevant Catalog Products:</span>
            <div className="strip-pills">
              {retailSnackProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="product-pill-link"
                >
                  {p.name} <span className="pill-proc">{p.process}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Ingredient & Industrial Formulations */}
        <section className="b2b-section">
          <div className="section-kicker">TECHNICAL ADVANTAGE</div>
          <h2>Ingredient &amp; Industrial Formulations</h2>
          <div className="b2b-content-split">
            <div className="b2b-prose">
              <p>
                In technical industrial food formulations, moisture content is a
                critical variable controlling shelf life, water activity (aw),
                microbial stability, and mechanical handling during extrusion
                and mixing.
              </p>
              <p>
                Our freeze-dried and dehydrated ingredients deliver single-ingredient
                plant matter in controlled physical formats (whole, diced, flakes,
                powders) that integrate predictably into automated blending,
                sacheting, and packaging lines.
              </p>
            </div>
            <div className="b2b-sidebar-card">
              <h3>Formulation Discussion</h3>
              <p>
                Need to discuss specific particle size, moisture parameters, or
                cut dimensions for your production recipe?
              </p>
              <Link to="/contact" className="gold-button">
                Consult With Our Team <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Commercial CTA */}
        <section className="page-cta-banner">
          <h2>Have a specific commercial application or recipe requirement?</h2>
          <p>
            Tell us about your target application, required cut format, and
            estimated volumes. We will provide product recommendations, technical
            data sheets, and tailored quotations.
          </p>
          <div className="page-cta-actions">
            <Link to="/contact" className="gold-button">
              Request a Quote <Icon name="arrow" size={18} />
            </Link>
            <Link to="/products" className="outline-button">
              View All Products
            </Link>
            <Link to="/b2b" className="text-button">
              B2B &amp; Wholesale Terms <span>↘</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
