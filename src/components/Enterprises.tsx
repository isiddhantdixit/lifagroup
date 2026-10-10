import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, BookOpen, GraduationCap, ArrowUpRight } from 'lucide-react';

interface EnterprisesProps {
  onOpenInquiry: (topic?: string) => void;
}

export const Enterprises: React.FC<EnterprisesProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="enterprises"
      style={{
        padding: '8rem 0',
        backgroundColor: 'var(--color-bg-base)',
        position: 'relative'
      }}
    >
      <div className="app-container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
          <div className="eyebrow-pill">
            <span className="eyebrow-dot" />
            <span>Operating Portfolio</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: 'var(--color-text-primary)',
              marginBottom: '1.25rem'
            }}
          >
            Our Educational Enterprises
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
            Lifa Group champions educational excellence through its specialized subsidiary, <strong style={{ color: '#fff' }}>LifaEducare Pvt. Ltd.</strong>, anchoring premier test preparation and holistic schooling in Bihar.
          </p>
        </div>

        {/* Parent Subsidiary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: 'rgba(197, 168, 128, 0.07)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            marginBottom: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'space-between'
          }}
          className="parent-subsidiary-box"
        >
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-base)', fontWeight: 600 }}>
              Primary Educational Subsidiary
            </span>
            <h3 className="font-serif" style={{ fontSize: '1.9rem', color: '#fff', marginTop: '0.35rem', marginBottom: '0.5rem' }}>
              LifaEducare Pvt. Ltd.
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '680px', fontSize: '0.98rem' }}>
              The dedicated educational vehicle of Lifa Group, managing institutional governance, academic infrastructure, and regional admissions for associated learning centers.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('LifaEducare Academic Governance')}
            className="btn-pill btn-pill-gold-outline"
            style={{ alignSelf: 'flex-start', fontSize: '0.8rem' }}
          >
            <span>Subsidiary Inquiries</span>
            <ArrowUpRight size={14} />
          </button>
        </motion.div>

        {/* Institutions 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
          
          {/* Card 1: Aakash Institute Hajipur */}
          <motion.article
            className="glass-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            <div
              style={{
                height: '220px',
                position: 'relative',
                background: 'linear-gradient(135deg, #10213D 0%, #091322 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--color-border-subtle)'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(8, 16, 30, 0.85)',
                  border: '1px solid var(--color-border-gold)',
                  color: 'var(--color-gold-light)'
                }}
              >
                Competitive Test Prep
              </div>

              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(8, 16, 30, 0.85)',
                  border: '1px solid var(--color-border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                }}
              >
                <BookOpen size={38} color="var(--color-gold-base)" />
              </div>
            </div>

            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--color-gold-base)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                <MapPin size={14} />
                <span>Hajipur, Bihar</span>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.65rem', color: '#fff', marginBottom: '1rem', lineHeight: 1.3 }}>
                Aakash Institute, Hajipur
              </h3>

              <div
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--color-gold-light)',
                  backgroundColor: 'rgba(197, 168, 128, 0.08)',
                  borderLeft: '2px solid var(--color-gold-base)',
                  padding: '0.65rem 0.95rem',
                  marginBottom: '1.25rem',
                  borderRadius: '0 4px 4px 0'
                }}
              >
                Premier Medical & Engineering Prep · Authorized Center Association
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Delivering India’s benchmark test preparation curriculum for NEET, JEE (Main & Advanced), and foundation programs. Operated through LifaEducare, providing dedicated faculty mentorship and rigorous test series in Hajipur.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2.25rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-base)" />
                  <span>Comprehensive NEET & JEE classroom programs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-base)" />
                  <span>Foundation batches for grades 8, 9 & 10</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-base)" />
                  <span>Modern library and digital assessment infrastructure</span>
                </li>
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Hajipur Center Admissions</span>
                <button
                  onClick={() => onOpenInquiry('Aakash Institute, Hajipur')}
                  className="btn-pill btn-pill-gold-outline"
                  style={{ fontSize: '0.75rem', padding: '0.55rem 1.25rem' }}
                >
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          </motion.article>

          {/* Card 2: St. Mary's P School Sonpur */}
          <motion.article
            className="glass-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            <div
              style={{
                height: '220px',
                position: 'relative',
                background: 'linear-gradient(135deg, #10213D 0%, #091322 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--color-border-subtle)'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(8, 16, 30, 0.85)',
                  border: '1px solid var(--color-border-gold)',
                  color: 'var(--color-gold-light)'
                }}
              >
                Foundational Schooling
              </div>

              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(8, 16, 30, 0.85)',
                  border: '1px solid var(--color-border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                }}
              >
                <GraduationCap size={38} color="var(--color-gold-base)" />
              </div>
            </div>

            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--color-gold-base)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                <MapPin size={14} />
                <span>Sonpur, Bihar</span>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.65rem', color: '#fff', marginBottom: '1rem', lineHeight: 1.3 }}>
                St. Mary's P School, Sonpur
              </h3>

              <div
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--color-gold-light)',
                  backgroundColor: 'rgba(197, 168, 128, 0.08)',
                  borderLeft: '2px solid var(--color-gold-base)',
                  padding: '0.65rem 0.95rem',
                  marginBottom: '1.25rem',
                  borderRadius: '0 4px 4px 0'
                }}
              >
                Flagship Primary Institution · Guided by LifaEducare Pvt. Ltd.
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Committed to foundational academic literacy, moral values, and student-first holistic education in Sonpur. St. Mary’s fosters a supportive, disciplined learning atmosphere designed to nurture future leaders.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2.25rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-base)" />
                  <span>Student-first foundational learning environment</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-base)" />
                  <span>Emphasis on early childhood literacy and cognitive development</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-base)" />
                  <span>Community-anchored arts, sports, and moral education</span>
                </li>
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Sonpur School Admissions</span>
                <button
                  onClick={() => onOpenInquiry("St. Mary's P School, Sonpur")}
                  className="btn-pill btn-pill-gold-outline"
                  style={{ fontSize: '0.75rem', padding: '0.55rem 1.25rem' }}
                >
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          </motion.article>

        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .parent-subsidiary-box {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
};
