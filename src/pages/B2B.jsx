import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function B2B() {
  return (
    <main className="info-page b2b-page">
      <SEO
        title="B2B & Wholesale | Fruit Vault"
        description="Bulk ingredient supply, customized cut sizing, and scheduled dispatch for food manufacturers, bulk distributors, bakeries, and export buyers."
        canonical="/b2b"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'B2B & Wholesale', url: '/b2b' }
        ]}
      />
      <div className="page-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">B2B &amp; Wholesale</span>
        </nav>

        {/* 1. Hero Section */}
        <header className="page-header">
          <div className="section-kicker">COMMERCIAL PROCUREMENT</div>
          <h1>B2B &amp; Wholesale</h1>
          <p>
            Fruit Vault supplies processed fruit and vegetable ingredients in
            freeze-dried and dehydrated formats for commercial procurement, food
            manufacturing, foodservice, and distribution.
          </p>
          <div className="page-header-actions">
            <Link to="/contact?type=wholesale" className="gold-button">
              Request a Quote <Icon name="arrow" size={18} />
            </Link>
            <Link to="/products" className="outline-button">
              View Products
            </Link>
          </div>
        </header>

        {/* 2. Who We Work With */}
        <section className="b2b-section">
          <div className="section-kicker">COMMERCIAL PARTNERS</div>
          <h2>Who We Work With</h2>
          <p className="section-intro">
            We supply ambient, shelf-stable ingredients tailored to the
            operational requirements of diverse commercial food businesses:
          </p>

          <div className="b2b-grid-3">
            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Food Manufacturers</h3>
              <p>
                Source fruit and vegetable ingredients for food production,
                cereal formulations, snack bars, dry blends, and prepared
                mixes.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Wholesalers &amp; Bulk Distributors</h3>
              <p>
                Enquire about master carton volumes, pallet shipments, and
                consistent commercial supply requirements.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Restaurants, Cafés &amp; Bakeries</h3>
              <p>
                Use dried ingredients in bakery products, dessert toppings, dry
                beverage mixes, and culinary preparations with zero prep spoilage.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Retailers &amp; Private Label</h3>
              <p>
                Discuss suitable product formats and packaging configurations
                for consumer-facing retail and private-label programs.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Beverage &amp; Blending Brands</h3>
              <p>
                Explore whole pieces, cuts, and fruit powders for beverage
                blends, tea infusions, and functional drink formulations.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Export Buyers</h3>
              <p>
                Submit target product, required volume, and destination port
                requirements for international commercial enquiries.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Bulk Procurement Process */}
        <section className="b2b-section">
          <div className="section-kicker">PROCUREMENT WORKFLOW</div>
          <h2>Bulk Procurement Process</h2>
          <p className="section-intro">
            Our commercial enquiry process is designed to quickly provide buyers
            with clear product data, packaging details, and formal quotations:
          </p>

          <div className="procurement-steps-grid">
            <div className="procurement-step">
              <span className="step-num">01</span>
              <h4>Select Products &amp; Forms</h4>
              <p>
                Identify desired items from our catalog, including required cut
                forms (whole, sliced, diced, flakes, or powders).
              </p>
            </div>

            <div className="procurement-step">
              <span className="step-num">02</span>
              <h4>Share Quantity &amp; Requirements</h4>
              <p>
                Submit your estimated volume, delivery city or port, and
                target dispatch timeframe via our enquiry form.
              </p>
            </div>

            <div className="procurement-step">
              <span className="step-num">03</span>
              <h4>Receive Product Information</h4>
              <p>
                Our commercial team reviews requirements and shares detailed
                specifications, ingredient statements, and availability.
              </p>
            </div>

            <div className="procurement-step">
              <span className="step-num">04</span>
              <h4>Discuss Packaging &amp; Terms</h4>
              <p>
                Align on outer carton sizing, poly inner liners, custom pack
                requirements, and commercial payment terms.
              </p>
            </div>

            <div className="procurement-step">
              <span className="step-num">05</span>
              <h4>Confirm Order Requirements</h4>
              <p>
                Finalize order specifications, batch schedules, and dispatch
                documentation.
              </p>
            </div>
          </div>

          <div className="terms-disclaimer-box">
            <b>Commercial Terms Notice:</b>
            <p>
              Commercial terms, MOQ, packaging configuration, and lead times
              depend on product variety and order requirements and are discussed
              during enquiry.
            </p>
          </div>
        </section>

        {/* 4. Minimum Order Quantity (MOQ) */}
        <section className="b2b-section">
          <div className="section-kicker">ORDER THRESHOLDS</div>
          <h2>Minimum Order Quantity (MOQ)</h2>
          <div className="b2b-content-split">
            <div className="b2b-prose">
              <p>
                Because freeze-dried and dehydrated products differ significantly
                in density, processing volume, and packaging configurations, we
                evaluate minimum order requirements on a case-by-case basis.
              </p>
              <div className="moq-policy-card">
                <b>Standard Policy:</b>
                <p>
                  MOQ varies by product, format, packaging configuration, and
                  order requirements. Contact us with your required product and
                  estimated quantity to confirm the applicable MOQ.
                </p>
              </div>
            </div>

            <div className="b2b-sidebar-card">
              <h3>Confirm Your MOQ</h3>
              <p>
                Share your target item and approximate volume to receive
                product-specific MOQ details and volume tiers.
              </p>
              <Link to="/contact?type=wholesale" className="gold-button">
                Request MOQ Details <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Bulk Packaging */}
        <section className="b2b-section">
          <div className="section-kicker">PACKAGING SPECIFICATIONS</div>
          <h2>Bulk Packaging Solutions</h2>
          <p className="section-intro">
            Proper barrier packaging is essential to maintain the crispness and
            moisture integrity of dried produce. Packaging configurations are
            tailored to order scale:
          </p>

          <div className="b2b-grid-3">
            <div className="b2b-card">
              <h3>Bulk Master Cartons</h3>
              <p>
                Heavy-duty corrugated outer cartons lined with food-grade
                polyethylene moisture-barrier inner liners to preserve product
                dryness during warehouse storage and transport.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Commercial Sealed Pouches</h3>
              <p>
                Hermetically sealed foil or barrier pouches designed for
                intermediate foodservice, bakery, and commissary kitchen handling.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Custom Configurations</h3>
              <p>
                Packaging options, net fill weights, and carton dimensions can
                be discussed based on specific product and order requirements.
              </p>
            </div>
          </div>

          <p className="packaging-footnote">
            * Packaging options can be discussed based on product and order
            requirements.
          </p>
        </section>

        {/* 6. Product Information Available */}
        <section className="b2b-section">
          <div className="section-kicker">TECHNICAL DOCUMENTATION</div>
          <h2>Product Information Available for Buyers</h2>
          <p className="section-intro">
            We provide verified technical data sheets to support QA, R&amp;D, and
            regulatory evaluation. Parameters available upon enquiry include:
          </p>

          <div className="info-param-grid">
            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Product Form &amp; Cut:</b>
                <span>Whole, sliced, diced, flakes, or powders</span>
              </div>
            </div>

            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Ingredients Statement:</b>
                <span>Single-ingredient produce (100% fruit or vegetable)</span>
              </div>
            </div>

            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Storage Recommendation:</b>
                <span>Store sealed in a cool, dry place</span>
              </div>
            </div>

            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Pack Sizes:</b>
                <span className="avail-tag">Available upon enquiry</span>
              </div>
            </div>

            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Shelf Life:</b>
                <span className="avail-tag">Available upon enquiry</span>
              </div>
            </div>

            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Country of Origin:</b>
                <span className="avail-tag">Available upon enquiry</span>
              </div>
            </div>

            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Minimum Order Quantity (MOQ):</b>
                <span className="avail-tag">Available upon enquiry</span>
              </div>
            </div>

            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Rehydration Guidelines:</b>
                <span className="avail-tag">Available upon enquiry</span>
              </div>
            </div>

            <div className="param-item">
              <span className="param-check">✓</span>
              <div>
                <b>Custom Packaging Specs:</b>
                <span className="avail-tag">Available upon enquiry</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Sample / Product Evaluation */}
        <section className="b2b-section">
          <div className="section-kicker">R&amp;D TESTING</div>
          <h2>Product Evaluation &amp; Samples</h2>
          <div className="b2b-content-split">
            <div className="b2b-prose">
              <p>
                We understand that food manufacturers and commercial kitchens
                require test batches to confirm texture, rehydration performance,
                and recipe compatibility prior to large-scale procurement.
              </p>
              <p>
                Product samples and evaluation requirements can be discussed
                during enquiry based on current product availability and project
                scope.
              </p>
            </div>
            <div className="b2b-sidebar-card">
              <h3>Discuss Sample Requirements</h3>
              <p>
                Tell us about your formulation or trial requirements and our
                team will advise on evaluation options.
              </p>
              <Link to="/contact" className="outline-button">
                Discuss a Product <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Export Enquiries */}
        <section className="b2b-section">
          <div className="section-kicker">INTERNATIONAL COMMERCE</div>
          <h2>Export Enquiries</h2>
          <p className="section-intro">
            Freeze-dried and dehydrated products eliminate cold-chain shipping
            costs, making them highly economical for international maritime and
            air freight. When submitting an export enquiry, please include:
          </p>

          <div className="b2b-grid-3">
            <div className="b2b-card">
              <h3>Product &amp; Form</h3>
              <p>
                Target fruit or vegetable variety along with specific cut
                requirements (e.g. whole berries, sliced mango, onion flakes).
              </p>
            </div>

            <div className="b2b-card">
              <h3>Volume &amp; Frequency</h3>
              <p>
                Estimated shipment volume (Kg or Tonnes) and whether the enquiry
                is for a one-off trial order or regular contract shipments.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Destination &amp; Docs</h3>
              <p>
                Destination port or country, packaging preferences, and any
                specific commercial documentation needed for import clearance.
              </p>
            </div>
          </div>

          <div className="export-action-box">
            <Link to="/contact?type=export" className="gold-button">
              Start an Export Enquiry <Icon name="arrow" size={18} />
            </Link>
          </div>
        </section>

        {/* 9. How to Request a Quote */}
        <section className="b2b-section quote-guide-section">
          <div className="section-kicker">COMMERCIAL QUOTATIONS</div>
          <h2>How to Request a Quotation</h2>
          <p className="section-intro">
            To ensure an accurate and rapid quotation turnaround, please provide
            the following details in your enquiry:
          </p>

          <div className="quote-checklist-grid">
            <div className="checklist-item">
              <span className="check-bullet">01</span>
              <span>Product name and required cut form</span>
            </div>
            <div className="checklist-item">
              <span className="check-bullet">02</span>
              <span>Estimated quantity and unit (Kg, Tonnes, Cartons)</span>
            </div>
            <div className="checklist-item">
              <span className="check-bullet">03</span>
              <span>Destination country and city</span>
            </div>
            <div className="checklist-item">
              <span className="check-bullet">04</span>
              <span>Packaging preference (bulk carton or commercial pouch)</span>
            </div>
            <div className="checklist-item">
              <span className="check-bullet">05</span>
              <span>Intended commercial application</span>
            </div>
            <div className="checklist-item">
              <span className="check-bullet">06</span>
              <span>Any specific documentation or specification needs</span>
            </div>
          </div>

          <div className="quote-guide-action">
            <Link to="/contact" className="gold-button">
              Request a Quote Now <Icon name="arrow" size={18} />
            </Link>
            <Link to="/products" className="outline-button">
              Browse Product Catalog
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
