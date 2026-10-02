import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function Quality() {
  return (
    <main className="info-page quality-page">
      <SEO
        title="Quality & Processing | Fruit Vault"
        description="Overview of our freeze-drying and dehydration processes, ambient moisture barrier packaging, and hygiene standards for commercial ingredients."
        canonical="/quality"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Quality & Processing', url: '/quality' }
        ]}
      />
      <div className="page-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Quality &amp; Processing</span>
        </nav>

        {/* Page Hero */}
        <header className="page-header">
          <div className="section-kicker">STANDARDS &amp; METHODOLOGY</div>
          <h1>Quality &amp; Processing</h1>
          <p>
            An overview of the drying and preservation methodologies behind
            Fruit Vault’s fruit and vegetable ingredients. We combine
            controlled processing techniques with careful handling to supply
            stable, ambient products for commercial use.
          </p>
        </header>

        {/* Processing Methods */}
        <section className="b2b-section">
          <div className="section-kicker">TWO PROVEN PROCESSES</div>
          <h2>Our Processing Methods</h2>
          <p className="section-intro">
            We employ two distinct drying processes depending on the target
            application, desired texture, and formulation requirements of our
            commercial buyers:
          </p>

          <div className="b2b-grid-2">
            {/* Freeze-Dried Card */}
            <div className="process-card">
              <div className="process-header">
                <span className="process-tag">METHOD A</span>
                <h3>Freeze-Drying (Lyophilization)</h3>
              </div>
              <div className="process-body">
                <p>
                  In the freeze-drying process, fresh fruit and vegetable pieces
                  are frozen solid before entering a specialized vacuum drying
                  chamber. Under low pressure, the frozen water sublimates
                  directly from solid ice into vapor, bypassing the liquid
                  phase entirely.
                </p>

                <h4>Key Physical Characteristics:</h4>
                <ul className="bullet-list">
                  <li>
                    <b>Structural Preservation:</b> Retains the natural cellular
                    geometry, size, and shape of the fruit or vegetable.
                  </li>
                  <li>
                    <b>Lightweight &amp; Porous:</b> High porosity provides an
                    airy, delicate crunch when dry and enables rapid
                    rehydration when exposed to liquids.
                  </li>
                  <li>
                    <b>Color &amp; Aroma:</b> The low-temperature vacuum
                    environment protects the vibrant natural pigmentation and
                    characteristic aroma of the produce.
                  </li>
                </ul>

                <h4>Typical B2B Applications:</h4>
                <p className="process-uses">
                  Breakfast cereals, muesli and granola blends, gourmet
                  chocolate inclusions, baking decorations, dry smoothie mixes,
                  and premium snack packs.
                </p>

                <div className="process-link-wrap">
                  <Link to="/products" className="text-button">
                    Explore freeze-dried products <span>↘</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Dehydrated Card */}
            <div className="process-card">
              <div className="process-header">
                <span className="process-tag">METHOD B</span>
                <h3>Dehydration (Controlled Air Drying)</h3>
              </div>
              <div className="process-body">
                <p>
                  Dehydration removes moisture through continuous, monitored
                  circulation of warm air. The drying cycle continues until the
                  produce reaches a safe, stable equilibrium suitable for
                  ambient shelf life and bulk transportation.
                </p>

                <h4>Key Physical Characteristics:</h4>
                <ul className="bullet-list">
                  <li>
                    <b>Dense &amp; Flexible Texture:</b> Yields a pliable, chewy
                    texture for fruits with concentrated natural sweetness, or
                    crisp, aromatic flakes for vegetables.
                  </li>
                  <li>
                    <b>High Packaging Density:</b> Reduced volume allows higher
                    product mass per carton, optimizing container space and
                    shipping costs.
                  </li>
                  <li>
                    <b>Culinary Versatility:</b> Performs exceptionally in baked
                    goods, culinary sauces, and simmered preparations where
                    sustained heat is applied.
                  </li>
                </ul>

                <h4>Typical B2B Applications:</h4>
                <p className="process-uses">
                  Bakery doughs and fillings, confectionery bars, trail mixes,
                  soup premixes, savory seasonings, and institutional food
                  service.
                </p>

                <div className="process-link-wrap">
                  <Link to="/products" className="text-button">
                    Explore dehydrated products <span>↘</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Approach */}
        <section className="b2b-section">
          <div className="section-kicker">OPERATIONAL DISCIPLINE</div>
          <h2>Our Quality Approach</h2>
          <p className="section-intro">
            We emphasize reliable commercial practices across all processing
            stages to ensure that delivered products meet customer requirements:
          </p>

          <div className="b2b-grid-3">
            <div className="b2b-card">
              <span className="quality-step-num">01</span>
              <h3>Raw Material Inspection</h3>
              <p>
                Incoming fresh produce is sorted, cleaned, and evaluated for
                ripeness, uniformity, and absence of physical defects before
                entering processing lines.
              </p>
            </div>

            <div className="b2b-card">
              <span className="quality-step-num">02</span>
              <h3>Controlled Drying Cycles</h3>
              <p>
                Drying run times and airflow parameters are calibrated
                specifically for each product variety to achieve consistent
                moisture reduction.
              </p>
            </div>

            <div className="b2b-card">
              <span className="quality-step-num">03</span>
              <h3>Hygienic Handling</h3>
              <p>
                Processing and packing areas operate under dry-food hygiene
                practices to safeguard product purity and prevent foreign
                matter contamination.
              </p>
            </div>

            <div className="b2b-card">
              <span className="quality-step-num">04</span>
              <h3>Barrier Sealing</h3>
              <p>
                Finished products are promptly sealed in moisture-impermeable
                liners to protect crispness and prevent ambient humidity
                re-absorption.
              </p>
            </div>

            <div className="b2b-card">
              <span className="quality-step-num">05</span>
              <h3>Batch Traceability</h3>
              <p>
                Every master carton and production lot receives batch coding to
                enable seamless inventory tracking and commercial lot
                verification.
              </p>
            </div>

            <div className="b2b-card">
              <span className="quality-step-num">06</span>
              <h3>Specification Compliance</h3>
              <p>
                Physical cuts, sizing, and packaging formats are checked against
                the client’s agreed quotation specifications prior to dispatch.
              </p>
            </div>
          </div>
        </section>

        {/* Packaging & Storage */}
        <section className="b2b-section">
          <div className="section-kicker">SHELF STABILITY &amp; HANDLING</div>
          <h2>Packaging &amp; Storage Guidelines</h2>
          <div className="b2b-content-split">
            <div className="b2b-prose">
              <p>
                Both freeze-dried and dehydrated products are naturally
                hygroscopic—they readily absorb humidity when exposed to open
                air. Maintaining product crispness and shelf life depends on
                proper barrier storage.
              </p>
              <div className="storage-callout">
                <b>Standard Storage Recommendation:</b>
                <p>
                  Store sealed in a cool, dry place, away from moisture and
                  direct sunlight.
                </p>
              </div>
              <p>
                Keep packaging tightly sealed when not in active production use.
                In commercial facilities, we recommend resealing liners
                immediately after drawing material for batch formulations.
              </p>
            </div>

            <div className="b2b-sidebar-card">
              <h3>Commercial Packaging Options</h3>
              <ul className="bullet-list">
                <li>
                  <b>Bulk Master Cartons:</b> Corrugated outer boxes with heavy-duty
                  food-grade poly inner liners.
                </li>
                <li>
                  <b>Moisture-Barrier Pouches:</b> Sealed barrier bags suited for
                  intermediate food-service storage.
                </li>
                <li>
                  <b>Custom Configurations:</b> Pack dimensions, net weights, and
                  labeling specifications discussed during the enquiry phase.
                </li>
              </ul>
              <small className="sidebar-note">
                * Product-specific packaging details, shelf life, and carton
                dimensions are confirmed alongside formal quotations.
              </small>
            </div>
          </div>
        </section>

        {/* Product Specifications Available */}
        <section className="b2b-section">
          <div className="section-kicker">TECHNICAL DOCUMENTATION</div>
          <h2>Specifications Available Upon Enquiry</h2>
          <p className="section-intro">
            To assist your quality assurance and formulation teams, the
            following verified parameters can be detailed for each product:
          </p>

          <div className="b2b-grid-3">
            <div className="b2b-card">
              <h3>Form &amp; Cut Type</h3>
              <p>
                Information on available cuts: whole produce, slices, diced cubes,
                flakes, and fine powder meshes.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Ingredient Statement</h3>
              <p>
                Single-ingredient product statements (100% real fruit or
                vegetable) with no added sugar or artificial fillers.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Pack Sizes &amp; Taras</h3>
              <p>
                Detailed net weights, gross weights, inner bag counts, and master
                box dimensions per product.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Origin &amp; Harvest Details</h3>
              <p>
                Geographic sourcing region and harvest crop specifications for
                procurement traceability.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Storage &amp; Rehydration</h3>
              <p>
                Handling instructions, optimal temperature ranges, and
                rehydration liquid ratios where applicable.
              </p>
            </div>

            <div className="b2b-card">
              <h3>Commercial Terms &amp; MOQ</h3>
              <p>
                Minimum order quantities, dispatch lead times, and shipping
                configurations tailored to your destination.
              </p>
            </div>
          </div>
        </section>

        {/* Page CTA */}
        <section className="page-cta-banner">
          <h2>Need product specifications or bulk quotation?</h2>
          <p>
            Submit your specific cut and volume requirements. Our commercial
            team will review your enquiry and provide complete technical and
            pricing details.
          </p>
          <div className="page-cta-actions">
            <Link to="/contact" className="gold-button">
              Request a Quote <Icon name="arrow" size={18} />
            </Link>
            <Link to="/products" className="outline-button">
              View Products
            </Link>
            <Link to="/about" className="text-button">
              About Fruit Vault <span>↘</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
