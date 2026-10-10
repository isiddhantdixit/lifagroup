import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, MessageSquare, Mail, Phone, ExternalLink } from 'lucide-react';
import {
  getDivisionRouting,
  createWhatsAppDispatchUrl,
  createMailtoDispatchUrl,
  DivisionRecipient
} from '../data/inquiryRouting';

interface InquiryModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, initialTopic, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: initialTopic || 'LifaEducare Admissions',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRecipient, setSubmittedRecipient] = useState<DivisionRecipient | null>(null);
  const [dispatchedUrls, setDispatchedUrls] = useState<{ waUrl: string; mailtoUrl: string } | null>(null);

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({ ...prev, topic: initialTopic }));
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const currentRecipient = getDivisionRouting(formData.topic);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      topic: formData.topic,
      message: formData.details
    };

    const waUrl = createWhatsAppDispatchUrl(currentRecipient, payload);
    const mailtoUrl = createMailtoDispatchUrl(currentRecipient, payload);

    setSubmittedRecipient(currentRecipient);
    setDispatchedUrls({ waUrl, mailtoUrl });

    // Open WhatsApp in new tab for direct transmission
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Handled in submitted state
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setSubmittedRecipient(null);
    setDispatchedUrls(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'LifaEducare Admissions',
      details: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 250,
            backgroundColor: 'rgba(4, 9, 18, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={handleResetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-lg)',
              width: '100%',
              maxWidth: '560px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: 'clamp(2rem, 5vw, 2.75rem)',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--color-border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-gold-base)';
                e.currentTarget.style.borderColor = 'var(--color-gold-base)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.borderColor = 'var(--color-border-medium)';
              }}
            >
              <X size={18} />
            </button>

            <div className="eyebrow-pill" style={{ marginBottom: '0.75rem' }}>
              <span className="eyebrow-dot" />
              <span>Corporate Secretariat</span>
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.45rem' }}>
              Corporate Enquiry
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.75rem' }}>
              Connect directly with Lifa Group Executive Secretariat or its education division LifaEducare.
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
                <h4 className="font-serif" style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.5rem' }}>
                  Enquiry Dispatched
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', maxWidth: '420px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name || 'there'}</strong>. Your communication has been officially logged with the corporate secretariat.
                </p>

                {/* Direct Action Dispatches */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
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
                  onClick={handleResetAndClose}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-bg-base)',
                      border: '1px solid var(--color-border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.8rem 1.1rem',
                      fontSize: '0.92rem',
                      color: '#fff',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--color-bg-base)',
                        border: '1px solid var(--color-border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.8rem 1.1rem',
                        fontSize: '0.92rem',
                        color: '#fff',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 79924 66601"
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--color-bg-base)',
                        border: '1px solid var(--color-border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.8rem 1.1rem',
                        fontSize: '0.92rem',
                        color: '#fff',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                    Target Division *
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-bg-base)',
                      border: '1px solid var(--color-border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.8rem 1.1rem',
                      fontSize: '0.92rem',
                      color: '#fff',
                      outline: 'none'
                    }}
                  >
                    <option value="Aakash Institute, Hajipur">Aakash Institute, Hajipur Center</option>
                    <option value="St. Mary's P School, Sonpur">St. Mary's P School, Sonpur</option>
                    <option value="LifaEducare Admissions">LifaEducare Pvt. Ltd. (General Academic)</option>
                    <option value="Executive Governance">Executive Secretariat Office</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                    Enquiry Brief *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Brief description of your query..."
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-bg-base)',
                      border: '1px solid var(--color-border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.8rem 1.1rem',
                      fontSize: '0.92rem',
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
                    style={{ width: '100%', padding: '0.9rem', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    <span>{isSubmitting ? 'Dispatching Communication...' : 'Submit Official Enquiry'}</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
