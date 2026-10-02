import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import business from '../data/business';

export default function Contact() {
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const customerText =
    business.customers.length > 1
      ? business.customers.slice(0, -1).map((c) => c.toLowerCase()).join(', ') +
        ' or ' +
        business.customers.slice(-1)[0].toLowerCase()
      : business.customers[0]?.toLowerCase() || '';

  const submitInquiry = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Honeypot spam check
    if (form.elements.website?.value) {
      setToast("Thanks! We will get back to you soon.");
      form.reset();
      return;
    }

    const formData = new FormData();

    formData.append("formType", "inquiry");
    formData.append("enquiryType", "General Inquiry");
    formData.append("inquiryType", "General Inquiry");
    formData.append("timestamp", new Date().toISOString());
    formData.append("name", form.elements.name.value.trim());
    formData.append("email", form.elements.email.value.trim());
    formData.append("message", form.elements.message.value.trim());

    const scriptUrl =
      import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbzw5MP01KrdHkUKYvObg4zpHL01T6mI_qxbLy9JlYyWcbc21Yov1vg5i7IJI42PIPbnqA/exec";

    // Send a single network dispatch via fetch
    const formParams = new URLSearchParams();
    formData.forEach((value, key) => {
      formParams.append(key, value);
    });

    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formParams.toString()
    }).catch(() => {});

    setToast("Thanks! We will get back to you soon.");
    form.reset();
  };

  return (
    <section className="cta section-pad" id="contact">
      <div className="cta-inner">
        <div>
          <div className="section-kicker">BRING GOODNESS HOME</div>
          <h2>Your pantry just found<br /><em>its new favourite.</em></h2>
          <p>Want to stock {business.brandName} for {customerText}? Say hello and let's talk.</p>
        </div>
        <form onSubmit={submitInquiry}>
          <div style={{ display: 'none' }} aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />

          <textarea
            name="message"
            placeholder="Tell us what you need"
            rows="3"
          ></textarea>

          <button className="gold-button" type="submit">
            Send enquiry
            <Icon name="arrow" size={18} />
          </button>
        </form>
      </div>
      {toast && <div className="toast"><span>✓</span>{toast}</div>}
    </section>
  );
}
