import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Award, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreEnterprises: () => void;
  onExploreAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreEnterprises, onExploreAbout }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 20%, #112442 0%, #08101E 70%)'
      }}
    >
      {/* Dynamic Ambient Glow Orb */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.5, 0.35]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.15) 0%, rgba(197, 168, 128, 0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }}
      />

      {/* Subtle Architectural Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 75%)',
          pointerEvents: 'none'
        }}
      />

      <div className="app-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow-pill">
              <span className="eyebrow-dot" />
              <span>Parent Conglomerate · Est. Bihar</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-serif"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2.5rem, 5.8vw, 4.6rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem'
            }}
          >
            Ensuring Life.<br />
            <span className="gold-gradient-text">Building Lifestyle.</span>
          </motion.h1>

          {/* Narrative Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              maxWidth: '780px',
              margin: '0 auto 2.75rem'
            }}
          >
            Lifa Group serves as the overarching institutional parent enterprise guiding transformative academic advancement through its dedicated subsidiary, <strong style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>LifaEducare Pvt. Ltd.</strong>, while laying the enduring framework for premier future lifestyle and infrastructure ventures.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              marginBottom: '4.5rem'
            }}
          >
            <button
              onClick={onExploreEnterprises}
              className="btn-pill btn-pill-gold"
              style={{ padding: '0.95rem 2.25rem' }}
            >
              <span>Our Enterprises</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onExploreAbout}
              className="btn-pill btn-pill-outline"
              style={{ padding: '0.95rem 2.25rem' }}
            >
              <span>Corporate Story</span>
            </button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="trust-strip"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              padding: '0.85rem 2rem',
              backgroundColor: 'rgba(14, 26, 46, 0.75)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-pill)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.82rem', fontWeight: 500 }}>
              <Shield size={16} color="var(--color-gold-base)" />
              <span>LifaEducare Pvt. Ltd.</span>
            </div>

            <div className="trust-divider" style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-border-gold)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.82rem', fontWeight: 500 }}>
              <MapPin size={16} color="var(--color-gold-base)" />
              <span>Hajipur & Sonpur Hubs</span>
            </div>

            <div className="trust-divider" style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-border-gold)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.82rem', fontWeight: 500 }}>
              <Award size={16} color="var(--color-gold-base)" />
              <span>Institutional Stewardship</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
