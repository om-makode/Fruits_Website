import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <main className="legal-page">
      <SEO
        title="Terms & Conditions | Fruit Vault"
        description="Terms governing the use of Fruit Vault's informational B2B catalogue and commercial enquiry platform."
        canonical="/terms"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Terms & Conditions', url: '/terms' }
        ]}
      />
      <div className="legal-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Terms &amp; Conditions</span>
        </nav>

        {/* Header */}
        <header className="legal-header">
          <div className="section-kicker">LEGAL TERMS &amp; USAGE</div>
          <h1>Terms &amp; Conditions</h1>
          <p>
            Welcome to Fruit Vault. These Terms and Conditions govern your access to and
            use of our website, product catalogue, and commercial enquiry platform. By
            browsing our website or submitting an enquiry, you acknowledge and agree to
            these terms.
          </p>
        </header>

        {/* Content Body */}
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Website Purpose &amp; Nature of Platform</h2>
            <p>
              Fruit Vault operates exclusively as an informational business-to-business
              (B2B) product catalogue and commercial quotation platform for freeze-dried
              and dehydrated fruits and vegetables.
            </p>
            <div className="legal-callout">
              <p>
                <strong>Important Notice:</strong> This website does not function as an
                e-commerce consumer store. There is no shopping cart, online payment
                processing, or automatic order checkout. Submitting an enquiry or quote
                request through this website does not constitute a confirmed purchase,
                binding order, or sales contract.
              </p>
            </div>
            <p>
              Any formal commercial transaction is established only upon mutual execution
              of an official quotation, purchase order (PO), proforma invoice, or commercial
              supply agreement between the parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Enquiries, Quotations &amp; Commercial Terms</h2>
            <p>
              Enquiries submitted through this website are preliminary requests for
              information and pricing. While we strive to provide prompt, accurate
              quotations:
            </p>
            <ul>
              <li>
                All commercial terms—including unit pricing, payment milestones, minimum
                order volumes, and dispatch timelines—are confirmed individually in formal
                commercial quotations.
              </li>
              <li>
                Quotations provided by Fruit Vault are valid for the specific duration and
                quantities stated in the quote document.
              </li>
              <li>
                Fruit Vault reserves the right to decline or request clarification for any
                commercial enquiry at its discretion.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Product Information &amp; Disclaimers</h2>
            <p>
              We endeavor to maintain accurate and descriptive information regarding our
              freeze-dried and dehydrated ingredients. However, commercial buyers should
              note:
            </p>
            <ul>
              <li>
                <strong>Product Parameters:</strong> Technical specifications, moisture
                levels, cut sizes (whole, sliced, diced, powder), pack sizes, shelf-life
                estimates, country of origin, and minimum order quantities (MOQ) depend on
                the specific product variety, processing batch, and buyer requirements.
              </li>
              <li>
                <strong>Custom Requirements:</strong> Where detailed technical data or
                specific microbiological thresholds are required for your manufacturing or
                compliance review, buyers are invited to request them via our enquiry
                process.
              </li>
              <li>
                <strong>Non-Permanent Information:</strong> Product listings, packaging
                formats, and descriptions are subject to updates as processing batches and
                agricultural supply seasons progress.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Product Availability</h2>
            <p>
              All products listed in our catalogue are subject to seasonal availability, raw
              material harvests, processing schedules, and prior commercial commitments.
              Fruit Vault reserves the right to modify, adjust, or temporarily discontinue
              any product offering without prior notice.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Intellectual Property Rights</h2>
            <p>
              All content on this website—including but not limited to brand names, logos,
              text, images, graphic elements, layout design, icons, and product
              presentation—is the property of Fruit Vault or its content licensors and is
              protected by applicable copyright, trademark, and intellectual property laws.
            </p>
            <p>
              You may view, download, and print pages for internal procurement evaluation
              purposes only. Reproduction, redistribution, republication, or commercial
              exploitation of website materials without prior written authorization is
              strictly prohibited.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Third-Party Links &amp; Services</h2>
            <p>
              Our website may contain links to external third-party communication channels
              (such as WhatsApp) or informational services. These links are provided solely
              for buyer convenience. Fruit Vault does not endorse, control, or assume
              responsibility for the content, privacy practices, or availability of any
              third-party websites or services.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Website Availability &amp; Modifications</h2>
            <p>
              We strive to keep the website accessible and functional. However, Fruit Vault
              does not warrant that the website will operate uninterrupted, error-free, or
              free of harmful components. We reserve the right to suspend, withdraw, or
              modify the website or any portion thereof at any time for maintenance,
              updates, or operational reasons.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Fruit Vault, its affiliates,
              and team members shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages resulting from your access to, use of, or
              inability to use this website, or from reliance on any informational content
              provided herein.
            </p>
            <p>
              All commercial liabilities regarding the supply of goods are defined solely by
              the terms and conditions of the executed commercial contract or purchase order.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to Terms</h2>
            <p>
              Fruit Vault reserves the right to revise these Terms and Conditions at any time
              by publishing updated terms on this page. Your continued use of the website
              following any revisions signifies your acceptance of the updated terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact &amp; Commercial Inquiries</h2>
            <p>
              If you have any questions regarding these Terms &amp; Conditions or wish to
              discuss commercial supply arrangements, please submit an enquiry through our{' '}
              <Link to="/contact">Contact &amp; Request Quote page</Link>.
            </p>
          </section>
        </div>

        {/* Bottom CTA Banner */}
        <section className="legal-cta-banner">
          <h2>Ready to Discuss Your Commercial Requirements?</h2>
          <p>
            Browse our complete catalog of freeze-dried and dehydrated produce or request a
            custom quotation for wholesale quantities.
          </p>
          <div className="page-cta-actions">
            <Link to="/contact" className="gold-button">
              Request a Quote <Icon name="arrow" size={16} />
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
