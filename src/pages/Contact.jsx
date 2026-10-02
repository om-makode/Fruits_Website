import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import products from '../data/products';
import categories from '../data/categories';
import business from '../data/business';
import Icon from '../components/Icon';
import SEO from '../components/SEO';

const APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbzw5MP01KrdHkUKYvObg4zpHL01T6mI_qxbLy9JlYyWcbc21Yov1vg5i7IJI42PIPbnqA/exec';

const ENQUIRY_TYPES = [
  'Product Enquiry',
  'Bulk / Wholesale Enquiry',
  'Export Enquiry',
  'Packaging Enquiry',
  'General Enquiry'
];

const UNIT_OPTIONS = ['Kg', 'Tonnes', 'Units', 'Cartons'];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product');
  const typeParam = searchParams.get('type');

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    city: '',
    enquiryType: 'Product Enquiry',
    product: '',
    quantity: '10',
    unit: 'Kg',
    message: '',
    website: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  // Pre-fill product and enquiry type if query params exist
  useEffect(() => {
    if (productParam) {
      const found = products.find(
        (p) =>
          p.slug.toLowerCase() === productParam.toLowerCase() ||
          p.name.toLowerCase() === productParam.toLowerCase()
      );
      if (found) {
        setFormData((prev) => ({ ...prev, product: found.slug }));
      }
    }

    if (typeParam) {
      const lower = typeParam.toLowerCase();
      if (lower.includes('wholesale') || lower.includes('bulk')) {
        setFormData((prev) => ({ ...prev, enquiryType: 'Bulk / Wholesale Enquiry' }));
      } else if (lower.includes('export')) {
        setFormData((prev) => ({ ...prev, enquiryType: 'Export Enquiry' }));
      } else if (lower.includes('packaging')) {
        setFormData((prev) => ({ ...prev, enquiryType: 'Packaging Enquiry' }));
      }
    }
  }, [productParam, typeParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.product) {
      newErrors.product = 'Please select a product';
    }
    if (!formData.quantity || Number(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot spam bot check
    if (formData.website) {
      setStatus('success');
      return;
    }

    if (!validate() || status === 'submitting') {
      return;
    }

    setStatus('submitting');

    try {
      const selectedProductObj = products.find((p) => p.slug === formData.product);
      const productName = selectedProductObj ? selectedProductObj.name : formData.product;

      // Construct Google Apps Script submission payload
      const payload = {
        formType: 'quote',
        timestamp: new Date().toISOString(),
        name: formData.fullName.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        country: formData.country.trim(),
        city: formData.city.trim(),
        enquiryType: formData.enquiryType,
        inquiryType: formData.enquiryType,
        product: productName,
        quantity: formData.quantity,
        unit: formData.unit,
        message: formData.message.trim()
      };

      // Send a single network dispatch via fetch
      const formParams = new URLSearchParams();
      Object.entries(payload).forEach(([key, val]) => {
        formParams.append(key, val);
      });

      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formParams.toString()
      })
        .then(() => {
          setStatus('success');
        })
        .catch(() => {
          setStatus('success');
        });
    } catch (err) {
      setStatus('error');
    }
  };

  const selectedProductData = useMemo(
    () => products.find((p) => p.slug === formData.product),
    [formData.product]
  );

  const hasRealWhatsApp =
    business.contact?.whatsappNumber &&
    !business.contact.whatsappNumber.startsWith('TODO_');

  const showPhone =
    business.contact?.phoneDisplay &&
    !business.contact.phoneDisplay.startsWith('TODO_');

  const showEmail =
    business.contact?.email && !business.contact.email.startsWith('TODO_');

  const responseTime =
    business.responseTime && !business.responseTime.startsWith('TODO_')
      ? business.responseTime
      : null;

  return (
    <main className="contact-page">
      <SEO
        title="Request a Quote | Fruit Vault"
        description="Submit your product and bulk volume requirements for freeze-dried and dehydrated produce. Our commercial team provides technical specifications and quotations."
        canonical="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Request a Quote', url: '/contact' }
        ]}
      />
      <div className="contact-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Request a Quote</span>
        </nav>

        {/* Header */}
        <header className="contact-header">
          <div className="section-kicker">COMMERCIAL ENQUIRIES</div>
          <h1>Request a Quote</h1>
          <p>
            Submit your product and bulk volume requirements below. The Fruit Vault
            team will review your request and provide full technical specifications,
            packaging options, availability schedules, and commercial quotations.
          </p>
          {responseTime && (
            <div className="response-badge">
              <span>⏱</span> {responseTime}
            </div>
          )}
        </header>

        {/* Content Layout */}
        <div className="contact-layout">
          {/* Form Column */}
          <div className="contact-form-column">
            {status === 'success' ? (
              <div className="enquiry-success-card">
                <div className="success-icon">✓</div>
                <h2>Enquiry Submitted Successfully</h2>
                <p>
                  Thank you for reaching out. We have received your quotation request.
                  Our team will review your requirements and get back to you shortly.
                </p>
                <div className="success-actions">
                  <button
                    type="button"
                    className="gold-button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData((prev) => ({
                        ...prev,
                        message: '',
                        quantity: '10'
                      }));
                    }}
                  >
                    Submit another enquiry
                  </button>
                  <Link to="/products" className="outline-button">
                    Browse products
                  </Link>
                </div>
              </div>
            ) : (
              <form className="b2b-enquiry-form" onSubmit={handleSubmit} noValidate>
                {/* Anti-spam honeypot */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website">Leave blank</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error-banner" role="alert">
                    We couldn't submit your enquiry. Please try again.
                  </div>
                )}

                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label htmlFor="fullName">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={errors.fullName ? 'has-error' : ''}
                    />
                    {errors.fullName && (
                      <span className="field-error">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">
                      Company Name <span className="req">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="e.g. Apex Foods Pvt Ltd"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={errors.company ? 'has-error' : ''}
                    />
                    {errors.company && (
                      <span className="field-error">{errors.company}</span>
                    )}
                  </div>
                </div>

                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={errors.email ? 'has-error' : ''}
                    />
                    {errors.email && (
                      <span className="field-error">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone / WhatsApp <span className="req">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={errors.phone ? 'has-error' : ''}
                    />
                    {errors.phone && (
                      <span className="field-error">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label htmlFor="country">
                      Country <span className="req">*</span>
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="e.g. India"
                      value={formData.country}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={errors.country ? 'has-error' : ''}
                    />
                    {errors.country && (
                      <span className="field-error">{errors.country}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">
                      City <span className="req">*</span>
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="e.g. Mumbai"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={errors.city ? 'has-error' : ''}
                    />
                    {errors.city && (
                      <span className="field-error">{errors.city}</span>
                    )}
                  </div>
                </div>

                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label htmlFor="enquiryType">Enquiry Type</label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                    >
                      {ENQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="product">
                      Product <span className="req">*</span>
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={errors.product ? 'has-error' : ''}
                    >
                      <option value="">Select a product...</option>
                      {categories.map((cat) => {
                        const catProducts = products.filter(
                          (p) => p.category === cat.slug
                        );
                        if (catProducts.length === 0) return null;
                        return (
                          <optgroup key={cat.slug} label={cat.name}>
                            {catProducts.map((p) => (
                              <option key={p.slug} value={p.slug}>
                                {p.name}
                              </option>
                            ))}
                          </optgroup>
                        );
                      })}
                    </select>
                    {errors.product && (
                      <span className="field-error">{errors.product}</span>
                    )}
                  </div>
                </div>

                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label htmlFor="quantity">
                      Estimated Quantity <span className="req">*</span>
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      placeholder="e.g. 50"
                      value={formData.quantity}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={errors.quantity ? 'has-error' : ''}
                    />
                    {errors.quantity && (
                      <span className="field-error">{errors.quantity}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="unit">Unit</label>
                    <select
                      id="unit"
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                    >
                      {UNIT_OPTIONS.map((u) => (
                        <option key={u} value={u}>
                          {u}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {selectedProductData && (
                  <div className="selected-product-preview">
                    <span className="preview-label">Selected Item:</span>
                    <strong>{selectedProductData.name}</strong>
                    <span className="preview-badge">
                      {selectedProductData.process}
                    </span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="message">
                    Requirement Details <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Please mention your intended cut/form, packaging preferences, destination port/city, delivery schedule, and any technical specifications..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className={errors.message ? 'has-error' : ''}
                  ></textarea>
                  {errors.message && (
                    <span className="field-error">{errors.message}</span>
                  )}
                </div>

                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="gold-button submit-btn"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        Request a Quote <Icon name="arrow" size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info Column */}
          <aside className="contact-info-column">
            <div className="info-card">
              <h3>B2B Supply Partner</h3>
              <p>
                Fruit Vault supplies high-grade freeze-dried and dehydrated
                ingredients directly to food manufacturers, bakeries, cafes,
                restaurants, and premium retail brands.
              </p>

              <div className="info-features">
                <div className="info-feature-item">
                  <span className="feature-icon">✦</span>
                  <div>
                    <b>Custom Packaging</b>
                    <small>Bulk cartons, pouches, and food-service packs.</small>
                  </div>
                </div>
                <div className="info-feature-item">
                  <span className="feature-icon">✦</span>
                  <div>
                    <b>100% Pure Ingredients</b>
                    <small>No added sugar, fillers, or artificial preservatives.</small>
                  </div>
                </div>
                <div className="info-feature-item">
                  <span className="feature-icon">✦</span>
                  <div>
                    <b>Reliable Logistics</b>
                    <small>Ambient, shelf-stable shipping across domestic &amp; export destinations.</small>
                  </div>
                </div>
              </div>

              <div className="info-contact-details">
                {business.address?.city && (
                  <div className="info-contact-line">
                    <span className="pin">⌖</span>
                    <span>
                      {business.address.city}, {business.address.country}
                    </span>
                  </div>
                )}
                {showPhone && (
                  <div className="info-contact-line">
                    <Icon name="phone" size={16} />
                    <a href={`tel:${business.contact.phoneTel}`}>
                      {business.contact.phoneDisplay}
                    </a>
                  </div>
                )}
                {showEmail && (
                  <div className="info-contact-line">
                    <Icon name="mail" size={16} />
                    <a href={`mailto:${business.contact.email}`}>
                      {business.contact.email}
                    </a>
                  </div>
                )}
              </div>

              {hasRealWhatsApp && (
                <div className="whatsapp-enquiry-box">
                  <a
                    href={`https://wa.me/${
                      business.contact.whatsappNumber
                    }?text=${encodeURIComponent(
                      `Hello Fruit Vault team, I would like to enquire about quotations for ${
                        selectedProductData ? selectedProductData.name : 'your products'
                      }.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button whatsapp-btn"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
