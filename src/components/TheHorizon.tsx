import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export const TheHorizon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="horizon"
      style={{
        padding: '9rem 0',
        position: 'relative',
        background: 'linear-gradient(180deg, #08101E 0%, #0C172B 50%, #08101E 100%)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
        overflow: 'hidden'
      }}
    >
      {/* Animated Glowing Ring & Ambient Background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.3, 0.18]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(197, 168, 128, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />

      <div className="app-container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'rgba(14, 26, 46, 0.65)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="eyebrow-pill">
            <Sparkles size={12} color="var(--color-gold-base)" />
            <span>The Next Chapter · In Development</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: 600,
              lineHeight: 1.18,
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem'
            }}
          >
            The Next Horizon
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.85,
              maxWidth: '660px',
              margin: '0 auto 2.5rem'
            }}
          >
            While our foundation in educational governance deepens across Bihar, Lifa Group is preparing to unveil its upcoming series of transformative ventures designed to shape regional lifestyle, community infrastructure, and modern living standards.
          </p>

          <p
            className="font-serif"
            style={{
              fontSize: '1rem',
              color: 'var(--color-gold-light)',
              fontStyle: 'italic',
              marginBottom: '3rem',
              letterSpacing: '0.04em'
            }}
          >
            “Ensuring Life today. Building a transformative lifestyle for tomorrow.”
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ maxWidth: '480px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  alignItems: 'stretch'
                }}
                className="horizon-form-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Official email for confidential updates"
                  required
                  style={{
                    flexGrow: 1,
                    backgroundColor: 'rgba(8, 16, 30, 0.85)',
                    border: '1px solid var(--color-border-medium)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.9rem 1.6rem',
                    fontSize: '0.92rem',
                    color: '#fff',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-base)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border-medium)')}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-pill btn-pill-gold"
                  style={{ padding: '0.9rem 2rem' }}
                >
                  <span>{isLoading ? 'Registering...' : 'Request Briefing'}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.9rem 1.75rem',
                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: 'var(--radius-pill)',
                color: '#86EFAC',
                fontSize: '0.9rem'
              }}
            >
              <Check size={18} />
              <span>Confidential access registered with Executive Secretariat.</span>
            </motion.div>
          )}

        </motion.div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .horizon-form-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </section>
  );
};
