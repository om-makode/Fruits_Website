import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import business from '../data/business';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function About() {
  return (
    <main className="info-page about-page">
      <SEO
        title="About Us | Fruit Vault"
        description="Learn about Fruit Vault's mission to supply shelf-stable freeze-dried and dehydrated ingredients to food manufacturers, bakeries, and wholesale distributors."
        canonical="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
      />
      <div className="page-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">About Us</span>
        </nav>

        {/* Page Hero */}
        <header className="page-header">
          <div className="section-kicker">COMPANY PROFILE</div>
          <h1>About Fruit Vault</h1>
          <p>
            Fruit Vault is a dedicated B2B supplier specializing in freeze-dried
            and dehydrated fruit and vegetable products. We supply ambient,
            shelf-stable ingredients tailored to food manufacturers, culinary
            businesses, retailers, and commercial distributors.
          </p>
        </header>

        {/* Who We Are */}
        <section className="b2b-section">
          <div className="section-kicker">WHO WE ARE</div>
          <h2>Pure Ingredient Supply for Modern Food Businesses</h2>
          <div className="b2b-content-split">
            <div className="b2b-prose">
              <p>
                Fruit Vault was established with a clear objective: to make
                seasonal agricultural produce accessible all year round through
                reliable, high-standard preservation methods. Headquartered in{' '}
                {business.address.city}, {business.address.country}, we provide
                food businesses with stable, ready-to-use plant ingredients
                without the operational complexities of cold-chain dependency.
              </p>
              <p>
                Our catalog spans carefully processed fruits and vegetables in
                freeze-dried and dehydrated formats. By removing moisture under
                monitored parameters, we supply products that maintain their
                natural structural integrity, vibrant appearance, and distinct
                flavor profile while offering extended ambient shelf stability.
              </p>
            </div>
            <div className="b2b-sidebar-card">
              <h3>Fast Facts</h3>
              <ul className="fact-list">
                <li>
                  <b>Brand:</b> {business.brandName}
                </li>
                <li>
                  <b>Founded:</b> {business.foundedYear}
                </li>
                <li>
                  <b>Location:</b> {business.address.city},{' '}
                  {business.address.country}
                </li>
                <li>
                  <b>Primary Offerings:</b> Freeze-Dried &amp; Dehydrated Produce
                </li>
                <li>
                  <b>Business Model:</b> B2B Wholesale &amp; Commercial Enquiry
                </li>
                <li>
                  <b>Storage Advantage:</b> Ambient, shelf-stable storage
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="b2b-section">
          <div className="section-kicker">OUR CORE CATEGORIES</div>
          <h2>What We Offer</h2>
          <p className="section-intro">
            We focus strictly on two proven preservation techniques to serve
            diverse manufacturing and foodservice applications:
          </p>

          <div className="b2b-grid-2">
            <div className="b2b-card">
              <div className="card-badge">METHOD 01</div>
              <h3>Freeze-Dried Produce</h3>
              <p>
                Moisture is gently removed under vacuum conditions while the
                produce remains frozen. This preserves the fruit and vegetable
                cellular structure, resulting in lightweight, airy, and crisp
                pieces with rapid rehydration properties.
              </p>
              <ul className="bullet-list">
                <li>Available in whole pieces, uniform slices, and fine powders</li>
                <li>Ideal for breakfast cereals, snack packs, and baking</li>
                <li>No cold-chain transport required</li>
              </ul>
              <div className="card-action">
                <Link to="/products" className="text-button">
                  View freeze-dried items <span>↘</span>
                </Link>
              </div>
            </div>

            <div className="b2b-card">
              <div className="card-badge">METHOD 02</div>
              <h3>Dehydrated Produce</h3>
              <p>
                Moisture is removed using regulated warm-air circulation until
                safe, stable moisture levels are achieved. This delivers chewy,
                flavor-concentrated fruits and savory vegetable flakes suited
                for culinary manufacturing and seasoning.
              </p>
              <ul className="bullet-list">
                <li>Available in dried slices, dices, flakes, and powders</li>
                <li>Well-suited for confectionery, culinary sauces, and soups</li>
                <li>High packaging density for efficient bulk logistics</li>
              </ul>
              <div className="card-action">
                <Link to="/products" className="text-button">
                  View dehydrated items <span>↘</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="b2b-section">
          <div className="section-kicker">MARKET SECTORS</div>
          <h2>Who We Serve</h2>
          <p className="section-intro">
            Fruit Vault caters exclusively to commercial buyers seeking
            dependable supply, consistent ingredient sizing, and professional
            communication:
          </p>

          <div className="b2b-grid-3">
            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Food Manufacturers</h3>
              <p>
                Ingredient inclusions for breakfast cereals, granola, health
                bars, confectionery fillings, dry bakery blends, and premixes.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Wholesalers &amp; Distributors</h3>
              <p>
                Bulk carton supplies and palletized shipments configured for
                regional distribution networks and ingredient re-sellers.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Restaurants, Cafés &amp; Bakeries</h3>
              <p>
                Ready-to-use toppings, dessert garnishes, smoothie bases, and
                savory culinary flakes free from seasonality and prep spoilage.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Retailers &amp; Private Label</h3>
              <p>
                Shelf-stable fruit snacks and ingredient lines ready for
                custom packaging, premium grocery shelves, and retail distribution.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Beverage &amp; Blending Brands</h3>
              <p>
                Pure fruit powders and flakes for tea blends, functional
                beverages, flavored syrups, and health drink formulations.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Export Buyers</h3>
              <p>
                Shelf-stable goods packed in moisture-barrier cartons, well-suited
                for international maritime and air cargo shipping requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="b2b-section">
          <div className="section-kicker">COMMERCIAL WORKFLOW</div>
          <h2>Our B2B Approach</h2>
          <div className="b2b-grid-2">
            <div className="b2b-card">
              <h3>Factual Product Data</h3>
              <p>
                We provide clear technical information on cuts, forms, pack
                sizes, and storage specifications so your R&amp;D and procurement
                teams can evaluate compatibility with precision.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Direct Commercial Communication</h3>
              <p>
                Every quotation request is reviewed directly by our commercial
                team, with target response times within 24 hours.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Packaging Flexibility</h3>
              <p>
                From food-service pouches to master bulk cartons with moisture
                barriers, we discuss pack sizes matching your operational
                workflow.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Cold-Chain Elimination</h3>
              <p>
                Our freeze-dried and dehydrated products store and ship at
                ambient temperatures, significantly reducing transit costs and
                cold-storage energy expenses.
              </p>
            </div>
          </div>
        </section>

        {/* Business Information & Compliance */}
        <section className="b2b-section">
          <div className="section-kicker">VERIFIED DETAILS</div>
          <h2>Company &amp; Operational Information</h2>
          <div className="info-summary-table-wrap">
            <table className="info-summary-table">
              <tbody>
                <tr>
                  <th>Brand Name</th>
                  <td>{business.brandName}</td>
                </tr>
                <tr>
                  <th>Operating Headquarters</th>
                  <td>
                    {business.address.city}, {business.address.state},{' '}
                    {business.address.country}
                  </td>
                </tr>
                <tr>
                  <th>Response Time</th>
                  <td>{business.responseTime}</td>
                </tr>
                <tr>
                  <th>Commercial Enquiries</th>
                  <td>
                    Quotations and product specifications available online via{' '}
                    <Link to="/contact">Request a Quote</Link>
                  </td>
                </tr>
                <tr>
                  <th>Compliance &amp; Licensing</th>
                  <td>
                    Documentation (FSSAI, GST, origin documentation) is provided
                    to verified commercial buyers during quotation review and
                    contract finalization.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Page CTA */}
        <section className="page-cta-banner">
          <h2>Looking for reliable fruit &amp; vegetable ingredients?</h2>
          <p>
            Browse our complete catalog or submit your volume and cut requirements
            to receive a tailored commercial quotation.
          </p>
          <div className="page-cta-actions">
            <Link to="/contact" className="gold-button">
              Request a Quote <Icon name="arrow" size={18} />
            </Link>
            <Link to="/products" className="outline-button">
              View Products
            </Link>
            <Link to="/quality" className="text-button">
              Quality &amp; Processing <span>↘</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
