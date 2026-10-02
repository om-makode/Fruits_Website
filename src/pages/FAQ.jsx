import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

const FAQ_DATA = [
  {
    category: 'Products & Processing',
    items: [
      {
        q: 'What is the difference between freeze-dried and dehydrated products?',
        a: (
          <>
            <p>
              Freeze-drying involves freezing fresh produce and removing moisture
              primarily through sublimation under a vacuum chamber—meaning ice converts
              directly into water vapor without passing through a liquid state. This
              maintains the original cellular structure, vibrant color, and creates a
              lightweight, porous, crisp texture with rapid rehydration capability.
            </p>
            <p>
              Dehydration removes moisture through continuous, controlled warm-air
              circulation until safe moisture equilibrium is reached. This produces a
              chewier, denser texture for fruits with concentrated sweetness, or firm,
              aromatic flakes for vegetables. Neither method requires cold-chain
              refrigeration during transit or storage. Learn more on our{' '}
              <Link to="/quality">Quality &amp; Processing page</Link>.
            </p>
          </>
        )
      },
      {
        q: 'Which products does Fruit Vault offer?',
        a: (
          <p>
            Our catalog features freeze-dried fruits (Strawberries, Blueberries, Mango,
            Kiwi, Mixed Berries, Tropical Mix), freeze-dried vegetables (Green Peas,
            Sweet Corn), dehydrated fruits (Mango Slices), and dehydrated vegetables
            (Onion Flakes, Garlic Flakes). View all items in our{' '}
            <Link to="/products">Product Catalog</Link>.
          </p>
        )
      },
      {
        q: 'Are the products ready to use out of the bag?',
        a: (
          <p>
            Suitability depends on the product and your intended commercial application.
            Freeze-dried fruits and dehydrated mango strips can be eaten directly as
            crisp ingredients, incorporated into dry cereal mixes, or folded into
            chocolates and baked goods. Vegetables such as freeze-dried peas and sweet
            corn can be enjoyed crunchy or rehydrated within minutes in warm liquid for
            soups and meal kits. Dehydrated flakes rehydrate during culinary cooking or
            baking fermentation.
          </p>
        )
      }
    ]
  },
  {
    category: 'Product Specifications',
    items: [
      {
        q: 'What product specifications are available for buyers?',
        a: (
          <p>
            We provide verified parameters including physical cut forms (whole, sliced,
            diced, flakes, powders), single-ingredient declarations (100% fruit or
            vegetable with zero added sugars or fillers), and baseline storage
            guidelines. Additional commercial details such as confirmed pack sizes,
            shelf life, country of origin, rehydration ratios, and packaging tare
            weights are available upon commercial enquiry.
          </p>
        )
      },
      {
        q: 'Can I request technical specification sheets and documentation?',
        a: (
          <p>
            Yes. Commercial buyers can request applicable technical specification
            sheets and product documentation during the enquiry process. Documentation
            availability is product- and requirement-specific and will be provided by
            our commercial team during quotation review.
          </p>
        )
      }
    ]
  },
  {
    category: 'Shelf Life & Storage',
    items: [
      {
        q: 'What is the shelf life of Fruit Vault products?',
        a: (
          <p>
            Shelf life is product- and packaging-specific. Because moisture levels,
            physical cuts, and packaging barrier materials differ between freeze-dried
            and dehydrated items, the applicable shelf-life duration is confirmed
            alongside formal quotations based on your specific packaging format.
          </p>
        )
      },
      {
        q: 'How should products be stored in commercial warehouses?',
        a: (
          <p>
            Standard storage instruction: <em>Store sealed in a cool, dry place, away from
            moisture and direct sunlight.</em> Both freeze-dried and dehydrated
            ingredients are naturally hygroscopic—they readily absorb humidity from open
            air. Always keep inner poly-liners and outer packaging tightly sealed when not
            actively dispensing material for batch formulations.
          </p>
        )
      }
    ]
  },
  {
    category: 'Packaging',
    items: [
      {
        q: 'What bulk packaging options are available?',
        a: (
          <p>
            Bulk packaging options include heavy-duty corrugated outer cartons with
            food-grade moisture-barrier polyethylene inner liners, as well as sealed
            barrier pouches designed for intermediate food-service storage. Available
            pack sizes and carton configurations depend on product density, order volume,
            and operational requirements.
          </p>
        )
      },
      {
        q: 'Can you provide retail-ready or private-label packaging?',
        a: (
          <p>
            Private-label and retail packaging requirements can be discussed during
            enquiry and are subject to product compatibility, minimum production
            volumes, and operational scheduling.
          </p>
        )
      }
    ]
  },
  {
    category: 'Wholesale & MOQ',
    items: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: (
          <p>
            MOQ varies by product, format, packaging configuration, and order
            requirements. Because item densities and box configurations differ between
            powders, slices, and whole pieces, please{' '}
            <Link to="/contact?type=wholesale">submit an enquiry</Link> with your
            target item and estimated volume to confirm the applicable MOQ.
          </p>
        )
      },
      {
        q: 'Do you offer commercial terms for regular scheduled shipments?',
        a: (
          <p>
            Yes. We work with food manufacturers, wholesalers, and commercial kitchens
            that require recurring scheduled shipments. Commercial contract terms,
            dispatch schedules, and volume tiers are discussed during formal enquiry.
          </p>
        )
      }
    ]
  },
  {
    category: 'Samples & Evaluation',
    items: [
      {
        q: 'Can I request product samples for R&D formulation testing?',
        a: (
          <p>
            Product evaluation and sample requirements can be discussed during commercial
            enquiry. Availability, dispatch arrangements, and applicable terms depend on
            the specific product variety, cut format, and project scope.{' '}
            <Link to="/contact">Contact us</Link> with your trial requirements to discuss
            sample evaluation.
          </p>
        )
      }
    ]
  },
  {
    category: 'Export Enquiries',
    items: [
      {
        q: 'Do you accept international export enquiries?',
        a: (
          <p>
            Yes, export requirements can be submitted as a commercial enquiry. Because
            freeze-dried and dehydrated products eliminate cold-chain refrigeration
            requirements, they are highly suited for international ambient sea and air
            freight. Buyers should provide destination country and port, target items,
            estimated volumes, packaging preferences, and any required documentation.
            You can{' '}
            <Link to="/contact?type=export">start an export enquiry here</Link>.
          </p>
        )
      }
    ]
  },
  {
    category: 'Ordering & Enquiries',
    items: [
      {
        q: 'How do I request a quotation?',
        a: (
          <p>
            Browse our catalog, navigate to our{' '}
            <Link to="/contact">Request a Quote page</Link>, enter your company and contact
            information, select your target product, and provide estimated quantity,
            destination city, and requirement details (cut form, intended use, packaging
            needs). Our commercial team will review your enquiry and provide a formal
            quotation.
          </p>
        )
      },
      {
        q: 'What information should I include in my enquiry for fastest turnaround?',
        a: (
          <p>
            Please provide: (1) Product name and required cut form (whole, sliced, diced,
            powder), (2) Estimated volume and unit (Kg, Tonnes, Cartons), (3) Delivery
            destination (city and country), (4) Packaging preference, (5) Intended
            commercial application, and (6) Any specific documentation or specification
            thresholds needed for procurement review.
          </p>
        )
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState('All');

  const toggleItem = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories =
    activeCategory === 'All'
      ? FAQ_DATA
      : FAQ_DATA.filter((c) => c.category === activeCategory);

  // Generate plain text FAQPage schema matching visible content
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            typeof item.a === 'string'
              ? item.a
              : item.q.includes('freeze-dried and dehydrated')
              ? 'Freeze-drying removes moisture through sublimation under vacuum, producing a lightweight, porous structure. Dehydration removes moisture through controlled warm-air drying, producing a denser, chewier texture.'
              : item.q.includes('Which products')
              ? 'Fruit Vault offers freeze-dried fruits, freeze-dried vegetables, dehydrated fruits, and dehydrated vegetables.'
              : item.q.includes('shelf life')
              ? 'Shelf life is product- and packaging-specific and can be provided during enquiry.'
              : item.q.includes('stored')
              ? 'Store sealed in a cool, dry place, away from moisture and direct sunlight.'
              : item.q.includes('MOQ')
              ? 'MOQ varies by product, format, packaging configuration and order requirements.'
              : item.q.includes('export')
              ? 'Yes, export requirements can be submitted as a commercial enquiry.'
              : 'Details available upon commercial enquiry.'
        }
      }))
    )
  };

  return (
    <main className="info-page faq-page">
      <SEO
        title="FAQ | Fruit Vault"
        description="Frequently asked questions regarding our freeze-dried and dehydrated ingredients, bulk packaging, MOQs, and B2B ordering procedures."
        canonical="/faq"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Frequently Asked Questions', url: '/faq' }
        ]}
      />
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="page-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Frequently Asked Questions</span>
        </nav>

        {/* Hero */}
        <header className="page-header">
          <div className="section-kicker">BUYER KNOWLEDGE BASE</div>
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our freeze-dried and dehydrated
            ingredients, processing methods, bulk packaging, MOQs, and commercial
            ordering procedures.
          </p>
        </header>

        {/* Category Filters */}
        <div className="faq-category-nav">
          <button
            type="button"
            className={`faq-cat-chip ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All Questions
          </button>
          {FAQ_DATA.map((cat) => (
            <button
              key={cat.category}
              type="button"
              className={`faq-cat-chip ${
                activeCategory === cat.category ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Groups */}
        <div className="faq-groups-wrap">
          {filteredCategories.map((cat, catIdx) => (
            <section key={cat.category} className="b2b-section faq-group-section">
              <div className="section-kicker">CATEGORY</div>
              <h2>{cat.category}</h2>

              <div className="faq-accordion-list">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = !!openItems[key];
                  const answerId = `faq-answer-${catIdx}-${itemIdx}`;

                  return (
                    <div
                      key={itemIdx}
                      className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-question-btn"
                        onClick={() => toggleItem(catIdx, itemIdx)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                      >
                        <span className="faq-question-text">{item.q}</span>
                        <span className="faq-toggle-icon" aria-hidden="true">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          id={answerId}
                          className="faq-answer-pane"
                          role="region"
                        >
                          <div className="faq-answer-content">{item.a}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Buyer Trust & Procurement Information */}
        <section className="b2b-section procurement-trust-section">
          <div className="section-kicker">COMMERCIAL INTEGRITY</div>
          <h2>Procurement Information &amp; Buyer Standards</h2>
          <p className="section-intro">
            We prioritize transparent commercial communication and accurate product
            information. What buyers can expect when evaluating Fruit Vault:
          </p>

          <div className="b2b-grid-3">
            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Product-Specific Details</h3>
              <p>
                Accurate physical cuts, single-ingredient statements, and processing
                methods provided without exaggerated claims or fabricated specifications.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Enquiry-Based MOQ Alignment</h3>
              <p>
                Minimum order quantities are confirmed realistically based on product
                bulk density, carton pack format, and dispatch frequency.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Moisture-Barrier Protection</h3>
              <p>
                Packaging guidelines specified to protect the hygroscopic nature of
                dried produce during warehouse storage and transport.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Transparent Workflow</h3>
              <p>
                Direct communication with our commercial team to review volume tiers,
                dispatch lead times, and billing requirements.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Cold-Chain Elimination</h3>
              <p>
                100% ambient storage and shipping stability, eliminating high
                refrigeration energy costs and temperature transit risks.
              </p>
            </div>

            <div className="b2b-card">
              <span className="sector-icon">✦</span>
              <h3>Export Enquiry Support</h3>
              <p>
                International commercial requirements evaluated based on destination port,
                container configurations, and export documentation needs.
              </p>
            </div>
          </div>
        </section>

        {/* Documentation & Compliance */}
        <section className="b2b-section">
          <div className="section-kicker">VERIFICATION &amp; COMPLIANCE</div>
          <h2>Documentation &amp; Compliance</h2>
          <div className="b2b-content-split">
            <div className="b2b-prose">
              <p>
                Food manufacturing, ingredient formulation, and commercial procurement
                often require specific documentation for supplier onboarding and quality
                assurance.
              </p>
              <div className="storage-callout">
                <b>Documentation Policy:</b>
                <p>
                  Documentation is product- and requirement-specific and can be
                  discussed during the quotation process.
                </p>
              </div>
              <p>
                Available documentation categories can include product specifications,
                ingredient declarations, storage protocols, commercial invoices, and
                regulatory/compliance documentation (such as statutory registration
                details) provided to verified commercial buyers during formal contract
                finalization.
              </p>
            </div>

            <div className="b2b-sidebar-card">
              <h3>Request Technical Data</h3>
              <p>
                Have specific QA or vendor onboarding documentation requirements?
                Submit your request and our team will review the parameters.
              </p>
              <Link to="/contact" className="gold-button">
                Contact Commercial Team <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Page CTA */}
        <section className="page-cta-banner">
          <h2>Still have questions about our products or procurement?</h2>
          <p>
            Our commercial team is ready to answer specific product, packaging, or
            volume questions for your business.
          </p>
          <div className="page-cta-actions">
            <Link to="/contact" className="gold-button">
              Request a Quote <Icon name="arrow" size={18} />
            </Link>
            <Link to="/products" className="outline-button">
              Browse Products
            </Link>
            <Link to="/b2b" className="text-button">
              B2B &amp; Wholesale Guide <span>↘</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
