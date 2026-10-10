import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, Lock, Eye, Compass } from 'lucide-react';
import { GlassCard3D } from '../components/GlassCard3D';

export const HorizonPage: React.FC = () => {
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
    }, 750);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: '8.5rem', paddingBottom: '8rem' }}>
      
      {/* Header */}
      <section style={{ paddingBottom: '4.5rem', position: 'relative' }}>
        <div className="app-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="eyebrow-pill">
                <Sparkles size={12} color="var(--color-gold-base)" />
                <span>The Undisclosed Frontier</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-serif"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                color: '#fff',
                marginBottom: '1.5rem'
              }}
            >
              The Next Horizon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: '1.18rem',
                color: 'var(--color-gold-light)',
                lineHeight: 1.85,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                maxWidth: '740px',
                margin: '0 auto 2rem'
              }}
            >
              “Ensuring Life today. Building a transformative lifestyle for tomorrow.”
            </motion.p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: '3rem 0 6rem', position: 'relative' }}>
        <div className="app-container">
          <GlassCard3D highlightGold style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '920px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 168, 128, 0.1)',
                  border: '1px solid var(--color-border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--color-gold-base)'
                }}
              >
                <Lock size={28} />
              </div>

              <h2 className="font-serif" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: '#fff', marginBottom: '1.25rem' }}>
                A Confidential Chapter in Development
              </h2>

              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                While our initial focus remains firmly anchored in academic stewardship through <strong>LifaEducare Pvt. Ltd.</strong>, Lifa Group was designed from its inception as a multi-industry parent conglomerate.
              </p>

              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.85 }}>
                Our upcoming ventures will address modern living environments, elevated regional lifestyle infrastructure, and sustainable community architecture. In accordance with executive protocol, specific commercial frameworks and industry verticals remain undisclosed until official statutory rollouts.
              </p>
            </div>

            {/* Strategic Phases */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
              <div style={{ padding: '1.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(8, 16, 30, 0.8)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-base)', fontWeight: 600 }}>Phase 01</span>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', marginTop: '0.35rem', marginBottom: '0.5rem' }}>The Educational Bedrock</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  Active operations via LifaEducare, Aakash Institute Hajipur, and St. Mary’s Sonpur.
                </p>
              </div>

              <div style={{ padding: '1.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(8, 16, 30, 0.8)', border: '1px solid var(--color-border-gold)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-light)', fontWeight: 600 }}>Phase 02 · Unfolding</span>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', marginTop: '0.35rem', marginBottom: '0.5rem' }}>Lifestyle Diversification</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  Strategic development of elevated living spaces and regional lifestyle amenities.
                </p>
              </div>

              <div style={{ padding: '1.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(8, 16, 30, 0.8)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-base)', fontWeight: 600 }}>Phase 03 · Forward</span>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', marginTop: '0.35rem', marginBottom: '0.5rem' }}>Regional Modernization</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  Comprehensive multi-sector ventures redefining living benchmarks across Bihar.
                </p>
              </div>
            </div>

            {/* Confidential Briefing Form */}
            <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-gold-light)', fontSize: '0.85rem' }}>
                <Eye size={16} />
                <span>Executive Briefing Registry</span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter official email address for confidential notices"
                    required
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(8, 16, 30, 0.9)',
                      border: '1px solid var(--color-border-medium)',
                      borderRadius: 'var(--radius-pill)',
                      padding: '0.95rem 1.6rem',
                      fontSize: '0.92rem',
                      color: '#fff',
                      outline: 'none',
                      textAlign: 'center'
                    }}
                  />
                  <button type="submit" disabled={isLoading} className="btn-pill btn-pill-gold" style={{ padding: '0.95rem' }}>
                    <span>{isLoading ? 'Processing Registration...' : 'Request Confidential Access'}</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.95rem 1.85rem',
                    backgroundColor: 'rgba(34, 197, 94, 0.12)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    borderRadius: 'var(--radius-pill)',
                    color: '#86EFAC',
                    fontSize: '0.92rem'
                  }}
                >
                  <Check size={18} />
                  <span>Confidential registry confirmed with Executive Secretariat.</span>
                </motion.div>
              )}
            </div>

          </GlassCard3D>
        </div>
      </section>

    </div>
  );
};
