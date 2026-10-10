import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, Building, Clock, HelpCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { GlassCard3D } from '../components/GlassCard3D';
import {
  getDivisionRouting,
  createWhatsAppDispatchUrl,
  createMailtoDispatchUrl,
  DivisionRecipient
} from '../data/inquiryRouting';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Aakash Institute, Hajipur Center',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRecipient, setSubmittedRecipient] = useState<DivisionRecipient | null>(null);
  const [dispatchedUrls, setDispatchedUrls] = useState<{ waUrl: string; mailtoUrl: string } | null>(null);

  const currentRecipient = getDivisionRouting(formData.department);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      topic: formData.department,
      message: formData.message
    };

    const waUrl = createWhatsAppDispatchUrl(currentRecipient, payload);
    const mailtoUrl = createMailtoDispatchUrl(currentRecipient, payload);

    setSubmittedRecipient(currentRecipient);
    setDispatchedUrls({ waUrl, mailtoUrl });

    // Open WhatsApp in new tab for direct transmission
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: '8.5rem', paddingBottom: '8rem' }}>

      {/* Page Header */}
      <section style={{ paddingBottom: '4.5rem', position: 'relative' }}>
        <div className="app-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="eyebrow-pill">
                <span className="eyebrow-dot" />
                <span>Executive Secretariat</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-serif"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 600,
                lineHeight: 1.18,
                color: '#fff',
                marginBottom: '1.5rem'
              }}
            >
              Corporate Secretariat & Contact
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: '1.12rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.85,
                maxWidth: '780px',
                margin: '0 auto'
              }}
            >
              For corporate partnerships, educational governance communications, and institutional enquiries, connect directly with the executive office of Lifa Group.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section style={{ padding: '2rem 0 6rem', position: 'relative' }}>
        <div className="app-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem' }}>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <GlassCard3D style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
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
                    <Building size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-light)', display: 'block', marginBottom: '0.35rem' }}>
                      Operating Headquarters
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
                      Lifa Group Secretariat
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: 1.7 }}>
                      Coordinating operations across Hajipur & Sonpur, Bihar, India.<br />
                      Primary Regional Office: Vaishali & Saran Hubs
                    </p>
                  </div>
                </div>
              </GlassCard3D>

              <GlassCard3D style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
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
                    <Mail size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-light)', display: 'block', marginBottom: '0.35rem' }}>
                      Electronic Mail
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
                      Official Secretariat
                    </h3>
                    <a href="mailto:siddhantdixit@lifagroup.in" style={{ color: 'var(--color-gold-light)', fontSize: '1rem', textDecoration: 'underline' }}>
                      siddhantdixit@lifagroup.in
                    </a>
                  </div>
                </div>
              </GlassCard3D>

              <GlassCard3D style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
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
                    <Phone size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-light)', display: 'block', marginBottom: '0.35rem' }}>
                      Direct Telephone
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
                      Institutional Desk
                    </h3>
                    <a href="tel:+917992466601" style={{ color: 'var(--color-gold-light)', fontSize: '1rem' }}>
                      +91 7992466601
                    </a>
                  </div>
                </div>
              </GlassCard3D>
            </div>

            {/* Interactive Form Card */}
            <GlassCard3D highlightGold style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <h3 className="font-serif" style={{ fontSize: '1.85rem', color: '#fff', marginBottom: '0.5rem' }}>
                Corporate Communication
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', marginBottom: '2rem' }}>
                Transmit an official dispatch to receive verified response from our executive secretariat.
              </p>

              {isSubmitted && submittedRecipient ? (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(34, 197, 94, 0.15)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: '#86EFAC'
                    }}
                  >
                    <CheckCircle2 size={30} />
                  </div>
                  <h4 className="font-serif" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>
                    Communication Dispatched
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: 'var(--color-text-secondary)', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.name || 'there'}</strong>. Your communication has been officially logged with the secretariat.
                  </p>

                  {/* Direct Action Dispatches */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    {dispatchedUrls?.waUrl && (
                      <a
                        href={dispatchedUrls.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-pill-gold"
                        style={{
                          padding: '0.85rem 1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.6rem',
                          textDecoration: 'none'
                        }}
                      >
                        <MessageSquare size={16} />
                        <span>Transmit via WhatsApp</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {dispatchedUrls?.mailtoUrl && (
                      <a
                        href={dispatchedUrls.mailtoUrl}
                        className="btn-pill"
                        style={{
                          padding: '0.85rem 1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.6rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--color-border-medium)',
                          color: '#fff',
                          textDecoration: 'none'
                        }}
                      >
                        <Mail size={16} />
                        <span>Send via Email Client</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmittedRecipient(null);
                      setDispatchedUrls(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        department: 'Aakash Institute, Hajipur Center',
                        message: ''
                      });
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
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
                          backgroundColor: 'rgba(8, 16, 30, 0.85)',
                          border: '1px solid var(--color-border-medium)',
                          borderRadius: 'var(--radius-md)',
                          padding: '0.85rem 1.15rem',
                          fontSize: '0.95rem',
                          color: '#fff',
                          outline: 'none'
                        }}
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
                          backgroundColor: 'rgba(8, 16, 30, 0.85)',
                          border: '1px solid var(--color-border-medium)',
                          borderRadius: 'var(--radius-md)',
                          padding: '0.85rem 1.15rem',
                          fontSize: '0.95rem',
                          color: '#fff',
                          outline: 'none'
                        }}
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
                          backgroundColor: 'rgba(8, 16, 30, 0.85)',
                          border: '1px solid var(--color-border-medium)',
                          borderRadius: 'var(--radius-md)',
                          padding: '0.85rem 1.15rem',
                          fontSize: '0.95rem',
                          color: '#fff',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.45rem' }}>
                        Target Division *
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: 'rgba(8, 16, 30, 0.85)',
                          border: '1px solid var(--color-border-medium)',
                          borderRadius: 'var(--radius-md)',
                          padding: '0.85rem 1.15rem',
                          fontSize: '0.95rem',
                          color: '#fff',
                          outline: 'none'
                        }}
                      >
                        <option value="Aakash Institute, Hajipur Center">Aakash Institute, Hajipur Center</option>
                        <option value="St. Mary's P School, Sonpur">St. Mary's P School, Sonpur</option>
                        <option value="LifaEducare Pvt. Ltd. (General Academic)">LifaEducare Pvt. Ltd. (General Academic)</option>
                        <option value="Executive Secretariat & Partnerships">Executive Secretariat & Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.45rem' }}>
                      Communication Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details regarding the nature of your correspondence..."
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(8, 16, 30, 0.85)',
                        border: '1px solid var(--color-border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.85rem 1.15rem',
                        fontSize: '0.95rem',
                        color: '#fff',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ marginTop: '0.5rem' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-pill btn-pill-gold"
                      style={{ width: '100%', padding: '0.95rem', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                      <span>{isSubmitting ? 'Dispatching Communication...' : 'Transmit Official Communication'}</span>
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </GlassCard3D>

          </div>
        </div>
      </section>

      {/* Corporate Correspondence Guidelines */}
      <section style={{ padding: '3rem 0 2rem', position: 'relative' }}>
        <div className="app-container">
          <GlassCard3D style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Clock size={22} color="var(--color-gold-base)" />
              <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#fff' }}>
                Secretariat Protocol & Hours
              </h3>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Official dispatches received via this digital portal are reviewed during business days (Monday through Saturday, 09:30 AM – 06:30 PM IST). Inquiries regarding admissions for Aakash Institute Hajipur or St. Mary’s Sonpur are routed directly to the respective institutional desk coordinators.
            </p>
          </GlassCard3D>
        </div>
      </section>

    </div>
  );
};
