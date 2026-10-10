import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MapPin, Award, BookOpen, GraduationCap, Sparkles, Users, Send } from 'lucide-react';
import { GlassCard3D } from '../components/GlassCard3D';

interface HomePageProps {
  onOpenInquiry: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  return (
    <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      
      {/* ======================================================================
           HERO SECTION
           ====================================================================== */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '9rem',
          paddingBottom: '6rem',
          position: 'relative'
        }}
      >
        <div className="app-container" style={{ textAlign: 'center', width: '100%' }}>
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="eyebrow-pill">
                <span className="eyebrow-dot" />
                <span>Parent Conglomerate · Est. Bihar</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-serif"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                fontSize: 'clamp(2.6rem, 6.2vw, 4.8rem)',
                fontWeight: 600,
                lineHeight: 1.14,
                letterSpacing: '-0.02em',
                color: '#fff',
                marginBottom: '1.75rem'
              }}
            >
              Ensuring Life.<br />
              <span className="gold-gradient-text">Building Lifestyle.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.85,
                maxWidth: '820px',
                margin: '0 auto 3rem'
              }}
            >
              Lifa Group serves as the overarching institutional parent enterprise guiding transformative academic advancement through its dedicated subsidiary, <strong style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>LifaEducare Pvt. Ltd.</strong>, while laying the enduring framework for premier future lifestyle and infrastructure ventures.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '4.5rem'
              }}
            >
              <Link to="/enterprises" className="btn-pill btn-pill-gold" style={{ padding: '1rem 2.4rem' }}>
                <span>Explore Enterprises</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-pill btn-pill-outline" style={{ padding: '1rem 2.4rem' }}>
                <span>Corporate Genesis</span>
              </Link>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="trust-strip"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.75rem',
                padding: '0.9rem 2.2rem',
                backgroundColor: 'rgba(14, 26, 46, 0.75)',
                border: '1px solid var(--color-border-gold)',
                borderRadius: 'var(--radius-pill)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', fontWeight: 500 }}>
                <Shield size={16} color="var(--color-gold-base)" />
                <span>LifaEducare Pvt. Ltd.</span>
              </div>
              <div className="trust-divider" style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-border-gold)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', fontWeight: 500 }}>
                <MapPin size={16} color="var(--color-gold-base)" />
                <span>Hajipur & Sonpur Hubs</span>
              </div>
              <div className="trust-divider" style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-border-gold)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.84rem', fontWeight: 500 }}>
                <Award size={16} color="var(--color-gold-base)" />
                <span>Institutional Governance</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======================================================================
           3D BENTO PORTFOLIO SHOWCASE
           ====================================================================== */}
      <section style={{ padding: '7rem 0', position: 'relative' }}>
        <div className="app-container">
          
          <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
            <div className="eyebrow-pill">
              <span className="eyebrow-dot" />
              <span>Institutional Portfolio</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', color: '#fff', marginBottom: '1rem' }}>
              The Pillars of Lifa Group
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.75 }}>
              From competitive academic benchmarks to foundational schooling and future lifestyle infrastructure, explore how our enterprises create lasting value.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            
            {/* Bento Card 1: LifaEducare */}
            <GlassCard3D highlightGold style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold-base)', fontWeight: 600 }}>
                  Subsidiary Entity
                </span>
                <span className="font-serif" style={{ color: 'var(--color-gold-light)', fontSize: '1.2rem' }}>01</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.75rem' }}>
                LifaEducare Pvt. Ltd.
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                The flagship educational division managing institutional compliance, pedagogical quality, and regional admissions across high-impact learning hubs in Bihar.
              </p>
              <Link to="/enterprises" className="btn-pill btn-pill-gold-outline" style={{ fontSize: '0.78rem' }}>
                <span>View Educational Division</span>
                <ArrowRight size={14} />
              </Link>
            </GlassCard3D>

            {/* Bento Card 2: Aakash Institute Hajipur */}
            <GlassCard3D style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold-base)', fontWeight: 600 }}>
                  Test Prep Center
                </span>
                <span className="font-serif" style={{ color: 'var(--color-gold-light)', fontSize: '1.2rem' }}>02</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <BookOpen size={24} color="var(--color-gold-base)" />
                <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff' }}>
                  Aakash Institute, Hajipur
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Delivering national-benchmark medical (NEET) and engineering (JEE) classroom training in Hajipur under authorized institutional partnership.
              </p>
              <Link to="/enterprises" className="btn-pill btn-pill-outline" style={{ fontSize: '0.78rem' }}>
                <span>Center Overview</span>
                <ArrowRight size={14} />
              </Link>
            </GlassCard3D>

            {/* Bento Card 3: St. Mary's P School */}
            <GlassCard3D style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold-base)', fontWeight: 600 }}>
                  K-12 Schooling
                </span>
                <span className="font-serif" style={{ color: 'var(--color-gold-light)', fontSize: '1.2rem' }}>03</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <GraduationCap size={24} color="var(--color-gold-base)" />
                <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff' }}>
                  St. Mary's P School, Sonpur
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Foundational learning, disciplined character formation, and holistic childhood literacy deeply rooted in the Sonpur community.
              </p>
              <Link to="/enterprises" className="btn-pill btn-pill-outline" style={{ fontSize: '0.78rem' }}>
                <span>Campus Details</span>
                <ArrowRight size={14} />
              </Link>
            </GlassCard3D>

            {/* Bento Card 4: The Next Horizon */}
            <GlassCard3D highlightGold style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold-light)', fontWeight: 600 }}>
                  Upcoming Chapter
                </span>
                <span className="font-serif" style={{ color: 'var(--color-gold-light)', fontSize: '1.2rem' }}>04</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Sparkles size={24} color="var(--color-gold-base)" />
                <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff' }}>
                  The Next Horizon
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                A confidential, premium exploration into lifestyle infrastructure and regional modernization, unfolding in our next developmental phase.
              </p>
              <Link to="/horizon" className="btn-pill btn-pill-gold" style={{ fontSize: '0.78rem' }}>
                <span>Enter The Horizon</span>
                <ArrowRight size={14} />
              </Link>
            </GlassCard3D>

          </div>
        </div>
      </section>

      {/* ======================================================================
           EXECUTIVE COUNCIL TEASER
           ====================================================================== */}
      <section style={{ padding: '7rem 0', position: 'relative' }}>
        <div className="app-container">
          <GlassCard3D style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div className="eyebrow-pill">
                  <Users size={12} color="var(--color-gold-base)" />
                  <span>Executive Governance</span>
                </div>
                <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: '1.25rem' }}>
                  Steered by 4 Dedicated Leaders
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Lifa Group is directed by four forward-looking leaders managing institutional governance, academic rigor at LifaEducare, and strategic capital for upcoming lifestyle developments.
                </p>
                <Link to="/leadership" className="btn-pill btn-pill-gold">
                  <span>Meet The Leadership</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                {['Managing Director', 'Director & Co-Founder', 'Director of Education', 'Director of Strategy'].map((role, idx) => (
                  <div
                    key={role}
                    style={{
                      padding: '1.5rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(8, 16, 30, 0.7)',
                      border: '1px solid var(--color-border-subtle)',
                      textAlign: 'center'
                    }}
                  >
                    <span className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--color-gold-base)', display: 'block', marginBottom: '0.25rem' }}>
                      0{idx + 1}
                    </span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard3D>
        </div>
      </section>

      {/* ======================================================================
           CORPORATE DISPATCH BANNER
           ====================================================================== */}
      <section style={{ padding: '5rem 0 8rem', position: 'relative' }}>
        <div className="app-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', color: '#fff', marginBottom: '1rem' }}>
              Connect with Corporate Secretariat
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              For admissions at Aakash Hajipur or St. Mary’s Sonpur, partnership inquiries, or executive correspondence, connect with our offices.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button onClick={() => onOpenInquiry()} className="btn-pill btn-pill-gold" style={{ padding: '0.95rem 2.25rem' }}>
                <span>Initiate Corporate Enquiry</span>
                <Send size={15} />
              </button>
              <Link to="/contact" className="btn-pill btn-pill-outline" style={{ padding: '0.95rem 2.25rem' }}>
                <span>View Contact Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
