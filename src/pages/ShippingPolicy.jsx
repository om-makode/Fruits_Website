import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function ShippingPolicy() {
  return (
    <main className="legal-page">
      <SEO
        title="Shipping Policy | Fruit Vault"
        description="Information on commercial freight arrangements, dispatch schedules, and domestic and export order logistics."
        canonical="/shipping-policy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Shipping Policy', url: '/shipping-policy' }
        ]}
      />
      <div className="legal-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Shipping Policy</span>
        </nav>

        {/* Header */}
        <header className="legal-header">
          <div className="section-kicker">LOGISTICS &amp; FULFILLMENT</div>
          <h1>Shipping &amp; Delivery Policy</h1>
          <p>
            Fruit Vault supplies freeze-dried and dehydrated ingredients to commercial
            buyers. Because our products are supplied on a business-to-business (B2B)
            wholesale and contract basis, shipping logistics and delivery terms are
            tailored to each order rather than calculated through an automated consumer
            checkout.
          </p>
        </header>

        {/* Content Body */}
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. B2B Logistics &amp; Quotation Model</h2>
            <p>
              Fruit Vault operates as an enquiry-driven B2B supplier. We do not provide an
              automated e-commerce checkout with instant courier rate calculators. Instead:
            </p>
            <div className="legal-callout">
              <p>
                Shipping and freight arrangements are discussed, estimated, and finalized
                during the formal quotation process based on your order volume, destination,
                and delivery preferences.
              </p>
            </div>
            <p>
              No shipping fees are charged online through this website. All agreed freight,
              insurance, handling, or dispatch terms are documented directly within your
              commercial quotation and purchase order.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Logistics Determination &amp; Delivery Methods</h2>
            <p>
              The most suitable transportation method and packaging configuration are
              determined based on several key factors:
            </p>
            <ul>
              <li>
                <strong>Order Quantity &amp; Volume:</strong> Whether the consignment
                comprises sample batches, carton quantities, palletized shipments, or full
                freight loads.
              </li>
              <li>
                <strong>Product Sensitivity &amp; Packaging:</strong> Freeze-dried and
                dehydrated ingredients are ambient-stable (requiring no cold chain), but
                require secure moisture-barrier liners and sturdy corrugated outer cartons
                to preserve crispness and quality during transit.
              </li>
              <li>
                <strong>Destination &amp; Unloading Capabilities:</strong> Destination city,
                regional distribution hub, dock facilities, and receiver unloading
                requirements.
              </li>
              <li>
                <strong>Buyer Commercial Preferences:</strong> Whether the buyer arranges
                their own freight collection or requests doorstep/warehouse delivery arranged
                by Fruit Vault.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Domestic &amp; International Enquiries</h2>
            <p>
              We welcome commercial enquiries for both domestic supply within India and
              international export requirements:
            </p>
            <ul>
              <li>
                <strong>Domestic Distribution:</strong> Shipments across India are coordinated
                via commercial road freight or cargo carriers based on consignment size and
                destination.
              </li>
              <li>
                <strong>Export Enquiries:</strong> Commercial buyers outside India can submit
                export enquiries. Regulatory documentation, phytosanitary requirements,
                customs handling, and applicable freight modalities are evaluated and
                confirmed individually per destination and consignment.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Lead Times &amp; Delivery Timelines</h2>
            <p>
              Lead times and estimated delivery windows vary based on the required product,
              available inventory, batch processing schedules, cut size specifications, and
              freight distance.
            </p>
            <p>
              Estimated dispatch lead times are confirmed in your formal quotation rather
              than guaranteed as fixed timelines on this website. Once an order is confirmed,
              our operations team provides updates regarding dispatch scheduling and
              consignment tracking.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Consignment Receiving &amp; Inspection</h2>
            <p>
              Upon delivery, commercial receiving teams are advised to verify outer carton
              counts, inspect exterior seal integrity, and report any apparent transit damage
              in accordance with standard commercial goods-receipt procedures and the terms of
              the governing sales contract.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Requesting Shipping &amp; Logistics Information</h2>
            <p>
              To enquire about freight feasibility, lead times, or export logistics for
              specific ingredient quantities, please submit a quotation request through our{' '}
              <Link to="/contact">Contact page</Link> including your destination city and
              estimated volume.
            </p>
          </section>
        </div>

        {/* Bottom CTA Banner */}
        <section className="legal-cta-banner">
          <h2>Planning a Bulk Consignment or Export Order?</h2>
          <p>
            Submit an enquiry with your required volume and destination to receive a detailed
            quotation with logistics options.
          </p>
          <div className="page-cta-actions">
            <Link to="/contact" className="gold-button">
              Request a Logistics Quote <Icon name="arrow" size={16} />
            </Link>
            <Link to="/products" className="outline-button">
              View Product Range
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
