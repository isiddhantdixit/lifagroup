import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Corporate',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'General Corporate',
        message: ''
      });
    }, 850);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '8.5rem 0',
        backgroundColor: 'var(--color-bg-surface)',
        borderTop: '1px solid var(--color-border-subtle)',
        position: 'relative'
      }}
    >
      <div className="app-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4.5rem' }}>

          {/* Contact Details Column */}
          <div>
            <div className="eyebrow-pill">
              <span className="eyebrow-dot" />
              <span>Direct Communication</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 600,
                lineHeight: 1.25,
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem'
              }}
            >
              Corporate Secretariat & Enquiries
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              For institutional collaborations, admissions communications at LifaEducare institutions, or executive governance inquiries, reach out directly to the executive secretariat of Lifa Group.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold-base)',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold-light)', marginBottom: '0.25rem' }}>
                    Regional Secretariat
                  </div>
                  <div style={{ fontSize: '1rem', color: '#fff', lineHeight: 1.5 }}>
                    Lifa Group Corporate Secretariat<br />
                    Hajipur & Sonpur, Bihar, India
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold-base)',
                    flexShrink: 0
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold-light)', marginBottom: '0.25rem' }}>
                    Electronic Mail
                  </div>
                  <a href="mailto:siddhantdixit@lifagroup.in" style={{ fontSize: '1rem', color: '#fff', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-base)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}>
                    siddhantdixit@lifagroup.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold-base)',
                    flexShrink: 0
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold-light)', marginBottom: '0.25rem' }}>
                    Institutional Line
                  </div>
                  <a href="tel:+917992466601" style={{ fontSize: '1rem', color: '#fff', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-base)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}>
                    +91 7992466601
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Card */}
          <div
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)'
            }}
          >
            <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.5rem' }}>
              Corporate Dispatch
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              Submit an official communication to receive response from our secretariat.
            </p>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  borderRadius: 'var(--radius-md)',
                  color: '#86EFAC',
                  fontSize: '0.92rem',
                  marginBottom: '1.5rem'
                }}
              >
                <CheckCircle2 size={20} />
                <span>Thank you. Your communication has been dispatched to Lifa Group Secretariat.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.45rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-bg-surface)',
                      border: '1px solid var(--color-border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem 1.15rem',
                      fontSize: '0.95rem',
                      color: '#fff',
                      outline: 'none'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-base)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border-medium)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.45rem' }}>
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh@domain.com"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-bg-surface)',
                      border: '1px solid var(--color-border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem 1.15rem',
                      fontSize: '0.95rem',
                      color: '#fff',
                      outline: 'none'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-base)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border-medium)')}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.45rem' }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 79924 66601"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-bg-surface)',
                      border: '1px solid var(--color-border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem 1.15rem',
                      fontSize: '0.95rem',
                      color: '#fff',
                      outline: 'none'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-base)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border-medium)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.45rem' }}>
                    Inquiry Nature
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-bg-surface)',
                      border: '1px solid var(--color-border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem 1.15rem',
                      fontSize: '0.95rem',
                      color: '#fff',
                      outline: 'none'
                    }}
                  >
                    <option value="General Corporate">General Corporate Governance</option>
                    <option value="Aakash Institute Hajipur">Aakash Institute, Hajipur Center</option>
                    <option value="St Marys Sonpur">St. Mary's P School, Sonpur</option>
                    <option value="Strategic Partnership">Strategic Institutional Partnership</option>
                    <option value="Confidential Horizon">The Horizon Briefing</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.45rem' }}>
                  Communication Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail the context of your inquiry..."
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border-medium)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1.15rem',
                    fontSize: '0.95rem',
                    color: '#fff',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-base)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border-medium)')}
                />
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill btn-pill-gold"
                  style={{ width: '100%', padding: '0.95rem' }}
                >
                  <span>{isSubmitting ? 'Transmitting Dispatch...' : 'Transmit Corporate Communication'}</span>
                  <Send size={15} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
