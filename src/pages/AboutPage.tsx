import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, Landmark, Sparkles, ArrowRight, CheckCircle2, Award, Scale } from 'lucide-react';
import { GlassCard3D } from '../components/GlassCard3D';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      num: '01',
      icon: <ShieldCheck size={28} color="var(--color-gold-base)" />,
      title: 'Institutional Stewardship',
      subtitle: 'Fiduciary Integrity & Governance',
      description: 'Lifa Group maintains uncompromising fiduciary governance, regulatory transparency, and ethical credibility across all operating subsidiaries. We believe trust is built over decades through steady, consistent stewardship.'
    },
    {
      num: '02',
      icon: <Compass size={28} color="var(--color-gold-base)" />,
      title: 'Pedagogical Rigor',
      subtitle: 'Excellence through LifaEducare',
      description: 'Through LifaEducare Pvt. Ltd., we equip learners in Hajipur and Sonpur with benchmark test preparation and foundational schooling that matches national standards, mentoring young minds to lead in sciences and society.'
    },
    {
      num: '03',
      icon: <Landmark size={28} color="var(--color-gold-base)" />,
      title: 'Civic & Regional Anchoring',
      subtitle: 'Rooted Deeply in Bihar',
      description: 'Rooted proudly in Bihar, we invest in physical, intellectual, and community infrastructure. We elevate local educational accessibility so students never have to compromise on academic quality.'
    },
    {
      num: '04',
      icon: <Sparkles size={28} color="var(--color-gold-base)" />,
      title: 'Generational Horizon',
      subtitle: 'Sustainable Long-Term Lifestyle',
      description: 'We believe that true regional transformation begins with education and blossoms into enriched living environments. Our forward-looking investments pave the way for sustainable infrastructure and modern lifestyles.'
    }
  ];

  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: '8.5rem', paddingBottom: '7rem' }}>
      
      {/* Page Header */}
      <section style={{ paddingBottom: '5rem', position: 'relative' }}>
        <div className="app-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="eyebrow-pill">
                <span className="eyebrow-dot" />
                <span>Corporate Genesis & Ethics</span>
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
              The Story of Lifa Group
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: '1.18rem',
                color: 'var(--color-gold-light)',
                lineHeight: 1.8,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                marginBottom: '2rem'
              }}
            >
              “Ensuring Life. Building Lifestyle.”
            </motion.p>
          </div>
        </div>
      </section>

      {/* Narrative Section 1: Genesis */}
      <section style={{ padding: '4rem 0 6rem', position: 'relative' }}>
        <div className="app-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.25 }}>
                A Parent Group Founded on Enduring Responsibility
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                <strong>Lifa Group</strong> was conceived to provide sound institutional governance, ethical capital stewardship, and long-term vision to critical human development sectors in Bihar. 
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Headquartered with deep operational ties across Hajipur and Sonpur, the group recognizes that regional development begins with foundational learning and competitive academic empowerment. To execute this mission with precision, Lifa Group established <strong style={{ color: 'var(--color-gold-light)' }}>LifaEducare Pvt. Ltd.</strong> as its dedicated educational arm.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.85 }}>
                Every decision made across our operating companies is measured not by short-term cycles, but by the generational value delivered to students, families, and community stakeholders.
              </p>
            </div>

            <GlassCard3D highlightGold style={{ padding: '3rem' }}>
              <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-base)', fontWeight: 600 }}>
                Governance Architecture
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#fff', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                The Lifa Framework
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block' }}>Parent Stewardship</strong>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Lifa Group provides legal governance, strategic capital, and executive leadership.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block' }}>Operational Independence</strong>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>LifaEducare Pvt. Ltd. operates specialized academic and admissions management.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block' }}>Long-Term Horizon</strong>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Structured expansion into lifestyle, sustainable development, and regional infrastructure.</span>
                  </div>
                </li>
              </ul>
            </GlassCard3D>
          </div>
        </div>
      </section>

      {/* The 4 Pillars Detailed */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="app-container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4.5rem' }}>
            <div className="eyebrow-pill">
              <span className="eyebrow-dot" />
              <span>Core Foundations</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', color: '#fff', marginBottom: '1rem' }}>
              Our Strategic Pillars
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.75 }}>
              The foundational principles that guide our institutional stewardship today and our upcoming lifestyle ventures tomorrow.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {pillars.map((pillar) => (
              <GlassCard3D key={pillar.num} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
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
                  <span className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-gold-base)', letterSpacing: '0.1em' }}>
                    {pillar.num}
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.35rem' }}>
                  {pillar.title}
                </h3>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold-light)', marginBottom: '1rem' }}>
                  {pillar.subtitle}
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, flexGrow: 1 }}>
                  {pillar.description}
                </p>
              </GlassCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values Matrix */}
      <section style={{ padding: '6rem 0 4rem', position: 'relative' }}>
        <div className="app-container">
          <GlassCard3D style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Scale size={24} color="var(--color-gold-base)" />
                  <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#fff' }}>
                    Our Vision
                  </h3>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                  To be Bihar’s most trusted parent enterprise—recognized for elevating regional human potential through benchmark educational institutions and pioneering distinguished lifestyle environments for future generations.
                </p>
                <div style={{ color: 'var(--color-gold-light)', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  “Ensuring Life today. Building a lifestyle of enduring prestige for tomorrow.”
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Award size={24} color="var(--color-gold-base)" />
                  <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#fff' }}>
                    Core Commitments
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-gold-base)', fontWeight: 600 }}>01.</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                      <strong style={{ color: '#fff' }}>Institutional Credibility:</strong> Clear, honest relationships with parents, partners, and associates.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-gold-base)', fontWeight: 600 }}>02.</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                      <strong style={{ color: '#fff' }}>Merit & Quality:</strong> No compromises on faculty caliber, student safety, or curriculum rigor.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-gold-base)', fontWeight: 600 }}>03.</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                      <strong style={{ color: '#fff' }}>Visionary Foresight:</strong> Thoughtful, deliberate diversification into modern living spaces.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span style={{ color: '#fff', fontWeight: 600, display: 'block' }}>Want to explore our operational institutions?</span>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Discover LifaEducare and our associated centers in Hajipur and Sonpur.</span>
              </div>
              <Link to="/enterprises" className="btn-pill btn-pill-gold">
                <span>View Enterprises</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </GlassCard3D>
        </div>
      </section>

    </div>
  );
};
