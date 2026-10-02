import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

export default function RefundPolicy() {
  return (
    <main className="legal-page">
      <SEO
        title="Refund & Cancellation Policy | Fruit Vault"
        description="Policy outlining commercial agreement terms, cancellation protocols, and quality dispute resolutions for wholesale orders."
        canonical="/refund-policy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Refund & Cancellation Policy', url: '/refund-policy' }
        ]}
      />
      <div className="legal-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Refund &amp; Cancellation Policy</span>
        </nav>

        {/* Header */}
        <header className="legal-header">
          <div className="section-kicker">COMMERCIAL TERMS &amp; REMEDIES</div>
          <h1>Refund &amp; Cancellation Policy</h1>
          <p>
            Fruit Vault operates as a business-to-business (B2B) supplier of freeze-dried
            and dehydrated fruits and vegetables. Because all transactions are executed
            through custom commercial quotations and purchase agreements rather than
            consumer e-commerce checkout, this policy outlines how cancellations, order
            modifications, and quality resolutions are managed.
          </p>
        </header>

        {/* Content Body */}
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Commercial Business Model</h2>
            <p>
              Fruit Vault operates exclusively on an enquiry and quotation basis. Our
              website functions as an informational product catalogue and procurement
              channel:
            </p>
            <div className="legal-callout">
              <p>
                <strong>No Online Payments:</strong> We do not accept consumer retail orders,
                credit card charges, or automated online checkout payments through this
                website. Therefore, conventional retail return policies (such as consumer
                cooling-off periods or automatic returns) do not apply to commercial
                transactions.
              </p>
            </div>
            <p>
              All orders are established through formal B2B agreements, proforma invoices,
              or purchase orders executed between the buyer and Fruit Vault.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Order Confirmation &amp; Commercial Terms</h2>
            <p>
              Terms governing advance deposits, payment schedules, production allocation,
              and order commitments are explicitly agreed upon in the written commercial
              quotation or sales contract for each specific consignment.
            </p>
            <p>
              Once a purchase order is confirmed and production or packaging has commenced,
              the order is governed strictly by the mutual terms specified in that contract.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Order Modification &amp; Cancellation Protocol</h2>
            <p>
              Because freeze-dried and dehydrated produce involves batch processing, custom
              cut sizing, and specialized barrier packaging:
            </p>
            <ul>
              <li>
                <strong>Requests in Writing:</strong> Any request to adjust volumes, modify
                specifications, or cancel a confirmed order must be submitted in writing by an
                authorized representative.
              </li>
              <li>
                <strong>Pre-Production Stage:</strong> Adjustments requested prior to the
                initiation of batch processing or custom packaging runs will be reviewed
                commercially and accommodated wherever feasible.
              </li>
              <li>
                <strong>Committed Production:</strong> For orders where raw materials have
                been processed, custom cuts created, or private-label packaging applied,
                cancellations and modifications are subject to the terms and cost-recovery
                provisions set forth in the commercial purchase order.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Quality Verification &amp; Non-Conformance</h2>
            <p>
              Fruit Vault is committed to providing premium, specification-compliant
              ingredients. Upon delivery of a consignment:
            </p>
            <ul>
              <li>
                Commercial buyers are responsible for inspecting delivered goods in
                accordance with standard receiving procedures and the inspection timeline
                specified in the purchase agreement.
              </li>
              <li>
                In the event that delivered products do not conform to mutually agreed
                written specifications, batch parameters, or exhibit transit damage, the
                buyer must notify Fruit Vault in writing within the contractual notification
                period, providing batch details and documentation.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Commercial Remedies &amp; Resolutions</h2>
            <p>
              Where a non-conformance claim or commercial discrepancy is validated in
              accordance with the sales agreement, remedies are handled through agreed
              commercial channels, which may include:
            </p>
            <ul>
              <li>Product replacement for affected cartons or batches.</li>
              <li>Issuance of a commercial credit note applicable to subsequent orders.</li>
              <li>Adjusted billing or refund as specified in the governing contract.</li>
            </ul>
            <p>
              All remedies are determined per the terms of the specific commercial
              contract or purchase order executed between the parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Procurement Clarifications &amp; Contact</h2>
            <p>
              If you have questions regarding commercial order policies, terms of supply, or
              an existing quotation, please reach out through our{' '}
              <Link to="/contact">Contact &amp; Request Quote page</Link>.
            </p>
          </section>
        </div>

        {/* Bottom CTA Banner */}
        <section className="legal-cta-banner">
          <h2>Questions Regarding Commercial Terms?</h2>
          <p>
            Our sales and procurement team is ready to discuss order parameters, sample
            evaluation, and tailored supply contracts.
          </p>
          <div className="page-cta-actions">
            <Link to="/contact" className="gold-button">
              Contact Commercial Team <Icon name="arrow" size={16} />
            </Link>
            <Link to="/products" className="outline-button">
              Browse Ingredients
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
