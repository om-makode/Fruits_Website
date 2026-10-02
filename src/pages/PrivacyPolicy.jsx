import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <SEO
        title="Privacy Policy | Fruit Vault"
        description="Information on how commercial enquiry submissions and business contact details are handled at Fruit Vault."
        canonical="/privacy-policy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' }
        ]}
      />
      <div className="legal-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="legal-header">
          <div className="section-kicker">DATA &amp; PRIVACY NOTICE</div>
          <h1>Privacy Policy</h1>
          <p>
            Fruit Vault operates an informational business-to-business (B2B) product
            catalogue and enquiry platform for freeze-dried and dehydrated ingredients. This
            Privacy Policy explains how information submitted through our website enquiry
            forms is collected, used, and handled.
          </p>
        </header>

        {/* Content Body */}
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Overview &amp; Commercial Scope</h2>
            <p>
              Fruit Vault connects commercial buyers—including food manufacturers,
              wholesalers, distributors, bakeries, retailers, and hospitality brands—with
              shelf-stable freeze-dried and dehydrated produce. We do not provide an online
              consumer checkout or e-commerce shopping cart. Consequently, the information
              collected through this website is exclusively focused on commercial business
              enquiries, quotation preparation, and B2B communication.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information Collected via Website Enquiry Forms</h2>
            <p>
              When you submit a quote request or contact enquiry through our website, we may
              collect specific commercial and contact details provided by you. Depending on
              your submission, this information may include:
            </p>
            <ul>
              <li>
                <strong>Full Name:</strong> To address you personally in commercial
                correspondence.
              </li>
              <li>
                <strong>Company Name:</strong> To identify your business organization and
                commercial context.
              </li>
              <li>
                <strong>Email Address:</strong> To send formal product quotations,
                specifications, and replies.
              </li>
              <li>
                <strong>Phone / WhatsApp Number:</strong> For rapid commercial coordination
                and order discussions where preferred.
              </li>
              <li>
                <strong>Country &amp; City:</strong> To assess freight feasibility, logistics
                routes, and regional supply parameters.
              </li>
              <li>
                <strong>Product Selection:</strong> The specific freeze-dried or
                dehydrated ingredients you are interested in sourcing.
              </li>
              <li>
                <strong>Quantity &amp; Packaging Unit:</strong> Estimated volume requirements
                (e.g., kilograms, metric tonnes, cartons, or sample units).
              </li>
              <li>
                <strong>Enquiry Type:</strong> The category of your request (Product Enquiry,
                Bulk / Wholesale Enquiry, Export Enquiry, Packaging Enquiry, or General
                Enquiry).
              </li>
              <li>
                <strong>Message Details:</strong> Specific custom cut sizes, application
                requirements, target lead times, or procurement questions you choose to
                share.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Purpose of Processing &amp; Information Use</h2>
            <p>
              The information submitted through our enquiry form is collected solely for
              legitimate commercial purposes, including:
            </p>
            <ul>
              <li>Responding directly to your product inquiries and commercial requests.</li>
              <li>
                Discussing product availability, processing formats, pack sizes, and MOQ
                parameters.
              </li>
              <li>
                Preparing customized price quotations, proforma documentation, and freight
                estimates.
              </li>
              <li>
                Communicating regarding samples, batch documentation, or ongoing orders.
              </li>
              <li>
                Maintaining standard business records of procurement inquiries and customer
                service communications.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Form Processing &amp; Technical Services</h2>
            <div className="legal-callout">
              <p>
                Enquiry information submitted through this website may be processed through
                the services used to operate the enquiry form.
              </p>
            </div>
            <p>
              We utilize reliable third-party infrastructure and form-processing services
              to receive and organize commercial quote submissions. We do not claim
              unverified technical certifications or proprietary encryption standards beyond
              the standard protocols implemented by the underlying service providers.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Information Sharing &amp; Third-Party Disclosure</h2>
            <p>
              Fruit Vault does not sell, rent, trade, or commercially monetize business contact
              details or enquiry submissions to third-party marketing lists. Information is
              accessible only to team members and service partners directly involved in
              commercial operations, quotation preparation, or order logistics.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention &amp; Commercial Records</h2>
            <p>
              Enquiry submissions are retained as part of our commercial communication
              history to facilitate future order inquiries, re-orders, and buyer support. If you
              wish to review, correct, or request the deletion of contact details submitted
              through an enquiry, you may submit a request through our standard contact
              channels.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Privacy Enquiries &amp; Contact</h2>
            <p>
              Privacy enquiries can be submitted through the Contact page.
            </p>
            <p>
              If you have any questions regarding how your commercial details are processed or
              wish to update your information, please visit our{' '}
              <Link to="/contact">Contact &amp; Request Quote page</Link> to get in touch.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Policy Updates</h2>
            <p>
              Fruit Vault may periodically update this Privacy Policy to reflect changes in our
              operations, services, or regulatory considerations. Any updates will be posted
              directly on this page.
            </p>
          </section>
        </div>

        {/* Bottom CTA Banner */}
        <section className="legal-cta-banner">
          <h2>Have Questions Regarding Privacy or Sourcing?</h2>
          <p>
            Our team is available to assist with ingredient specifications, custom packaging,
            or questions about how we handle commercial enquiries.
          </p>
          <div className="page-cta-actions">
            <Link to="/contact" className="gold-button">
              Contact Us <Icon name="arrow" size={16} />
            </Link>
            <Link to="/products" className="outline-button">
              Browse Products
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
