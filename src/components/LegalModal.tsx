import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, initialTab = 'privacy', onClose }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 260,
            backgroundColor: 'rgba(4, 9, 18, 0.88)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={onClose}
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
              maxWidth: '780px',
              maxHeight: '88vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.55)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1.75rem 2rem',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(8, 16, 30, 0.6)'
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className="btn-pill"
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.5rem 1.25rem',
                    backgroundColor: activeTab === 'privacy' ? 'var(--color-gold-base)' : 'transparent',
                    color: activeTab === 'privacy' ? 'var(--color-bg-base)' : 'var(--color-text-secondary)',
                    border: activeTab === 'privacy' ? 'none' : '1px solid var(--color-border-medium)'
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>Privacy Policy</span>
                </button>

                <button
                  onClick={() => setActiveTab('terms')}
                  className="btn-pill"
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.5rem 1.25rem',
                    backgroundColor: activeTab === 'terms' ? 'var(--color-gold-base)' : 'transparent',
                    color: activeTab === 'terms' ? 'var(--color-bg-base)' : 'var(--color-text-secondary)',
                    border: activeTab === 'terms' ? 'none' : '1px solid var(--color-border-medium)'
                  }}
                >
                  <FileText size={14} />
                  <span>Terms & Conditions</span>
                </button>
              </div>

              <button
                onClick={onClose}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              style={{
                padding: '2.5rem',
                overflowY: 'auto',
                lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
                fontSize: '0.94rem'
              }}
            >
              {activeTab === 'privacy' ? (
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.5rem' }}>
                    Corporate Privacy Policy
                  </h3>
                  <p style={{ color: 'var(--color-gold-light)', fontSize: '0.85rem', marginBottom: '2rem' }}>
                    Effective Date: 2026 · Governing Entity: Lifa Group & LifaEducare Pvt. Ltd.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    1. Scope and Regulatory Compliance
                  </h4>
                  <p>
                    This Privacy Policy applies to personal, academic, and corporate data collected by <strong>Lifa Group</strong> and its education division <strong>LifaEducare Pvt. Ltd.</strong> across all associated learning institutions in Hajipur and Sonpur, Bihar.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    2. Data Collection & Student Inquiries
                  </h4>
                  <p>
                    We collect identification and contact details strictly for institutional correspondence, enrollment requests for NEET/JEE preparation at Aakash Institute Hajipur, school admissions at St. Mary's P School Sonpur, and executive partnership inquiries.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    3. Confidentiality Guarantee
                  </h4>
                  <p>
                    Lifa Group does not sell, rent, or monetize personal details or academic inquiry records with external advertisers or commercial data brokers under any circumstances.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    4. Secretariat Contact
                  </h4>
                  <p>
                    For queries regarding institutional data handling or communications preferences, email: <a href="mailto:siddhantdixit@lifagroup.in" style={{ color: 'var(--color-gold-base)' }}>siddhantdixit@lifagroup.in</a> or call <a href="tel:+917992466601" style={{ color: 'var(--color-gold-base)' }}>+91 7992466601</a>.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.5rem' }}>
                    Corporate Terms and Conditions
                  </h3>
                  <p style={{ color: 'var(--color-gold-light)', fontSize: '0.85rem', marginBottom: '2rem' }}>
                    Effective Date: 2026 · Governing Entity: Lifa Group & LifaEducare Pvt. Ltd.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    1. Corporate Structure & Representation
                  </h4>
                  <p>
                    <strong>Lifa Group</strong> is the parent enterprise. <strong>LifaEducare Pvt. Ltd.</strong> operates as its dedicated education business. References to Aakash Institute signify the authorized coaching center partnership in Hajipur, Bihar, and do not imply ownership of the national brand beyond authorized institutional agreements.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    2. Forward-Looking Teasers ("The Next Horizon")
                  </h4>
                  <p>
                    References to future expansions into lifestyle and infrastructure represent strategic vision and intent. They do not constitute formal investment contracts, commercial prospectuses, or binding legal representations until definitive contracts are executed.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    3. Intellectual Property
                  </h4>
                  <p>
                    All marks, logotypes, graphic badges, and narratives displayed on this portal are the intellectual property of Lifa Group or used under appropriate license. Unauthorized reproduction is strictly prohibited.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    4. Jurisdiction
                  </h4>
                  <p>
                    All institutional representations and disputes are governed under the laws of India, within the jurisdiction of the competent courts of Bihar.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: '1.25rem 2rem',
                borderTop: '1px solid var(--color-border-subtle)',
                backgroundColor: 'rgba(8, 16, 30, 0.6)',
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <button onClick={onClose} className="btn-pill btn-pill-outline" style={{ fontSize: '0.8rem' }}>
                <span>Understood</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
