import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Landmark, Sparkles } from 'lucide-react';

interface AboutProps {
  onExploreLeadership: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreLeadership }) => {
  const pillars = [
    {
      num: '01',
      icon: <ShieldCheck size={24} color="var(--color-gold-base)" />,
      title: 'Institutional Stewardship',
      description: 'Maintaining uncompromising fiduciary governance, regulatory transparency, and ethical credibility across all subsidiaries.'
    },
    {
      num: '02',
      icon: <Compass size={24} color="var(--color-gold-base)" />,
      title: 'Academic Distinction',
      description: 'Equipping students in Hajipur and Sonpur with benchmark test preparation and foundational schooling that rivals national standards.'
    },
    {
      num: '03',
      icon: <Landmark size={24} color="var(--color-gold-base)" />,
      title: 'Regional Roots',
      description: 'Rooted proudly in Bihar, investing deeply in physical and intellectual infrastructure that elevates our communities.'
    },
    {
      num: '04',
      icon: <Sparkles size={24} color="var(--color-gold-base)" />,
      title: 'Generational Horizon',
      description: 'Laying strategic ground plans for sustainable future expansions into premium lifestyle and regional infrastructure sectors.'
    }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '7.5rem 0',
        backgroundColor: 'var(--color-bg-surface)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative'
      }}
    >
      <div className="app-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Narrative Column */}
          <div>
            <div className="eyebrow-pill">
              <span className="eyebrow-dot" />
              <span>Foundation & Corporate Philosophy</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.25,
                color: 'var(--color-text-primary)',
                marginBottom: '1.75rem'
              }}
            >
              Building Trust That Endures Across Generations
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              <strong>Lifa Group</strong> was founded on a singular conviction: lasting regional transformation is forged through the dual pillars of educational excellence and elevated living environments.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              As the governing parent organization, Lifa Group provides strategic leadership, capital governance, and institutional oversight to <span style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>LifaEducare Pvt. Ltd.</span> Each associated center is held to exacting academic rigor, ensuring every learner thrives with confidence and character.
            </p>

            <div>
              <button
                onClick={onExploreLeadership}
                className="btn-pill btn-pill-gold-outline"
                style={{ fontSize: '0.8rem', padding: '0.75rem 1.6rem' }}
              >
                <span>Executive Council</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ padding: '2rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(197, 168, 128, 0.08)',
                      border: '1px solid var(--color-border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span className="font-serif" style={{ fontSize: '1rem', color: 'var(--color-gold-base)', letterSpacing: '0.1em' }}>
                    {pillar.num}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.65rem' }}>
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
