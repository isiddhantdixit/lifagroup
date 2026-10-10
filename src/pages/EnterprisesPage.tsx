import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, CheckCircle2, ArrowUpRight, Award, Compass, School } from 'lucide-react';
import { GlassCard3D } from '../components/GlassCard3D';

interface EnterprisesPageProps {
  onOpenInquiry: (topic?: string) => void;
}

export const EnterprisesPage: React.FC<EnterprisesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: '8.5rem', paddingBottom: '7rem' }}>
      
      {/* Page Header */}
      <section style={{ paddingBottom: '4.5rem', position: 'relative' }}>
        <div className="app-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="eyebrow-pill">
                <span className="eyebrow-dot" />
                <span>Operating Subsidiaries & Centers</span>
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
              Our Educational Enterprises
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
              Lifa Group drives academic excellence through its primary operating subsidiary, <strong>LifaEducare Pvt. Ltd.</strong>, anchoring premier competitive preparation and foundational schooling across Bihar.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Primary Subsidiary Overview: LifaEducare */}
      <section style={{ padding: '3rem 0 5rem', position: 'relative' }}>
        <div className="app-container">
          <GlassCard3D highlightGold style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-base)', fontWeight: 600 }}>
                  Dedicated Education Arm
                </span>
                <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', color: '#fff', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                  LifaEducare Pvt. Ltd.
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                  Incorporated as the core education vehicle of Lifa Group, <strong>LifaEducare Pvt. Ltd.</strong> orchestrates curriculum compliance, faculty recruitment, modern digital infrastructure, and institutional partnerships.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                  We ensure regional learners in Hajipur, Sonpur, and neighboring districts have unhindered access to premier coaching methodologies and nurturing schooling without the need to relocate to distant metropolitan cities.
                </p>
                <button
                  onClick={() => onOpenInquiry('LifaEducare Academic Governance')}
                  className="btn-pill btn-pill-gold"
                >
                  <span>Institutional Governance Inquiries</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(8, 16, 30, 0.7)', border: '1px solid var(--color-border-subtle)' }}>
                  <Award size={22} color="var(--color-gold-base)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>National Standard Alignment</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    Every classroom and testing protocol matches top-tier national entrance preparation benchmarks.
                  </p>
                </div>

                <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(8, 16, 30, 0.7)', border: '1px solid var(--color-border-subtle)' }}>
                  <Compass size={22} color="var(--color-gold-base)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Regional Outreach</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    Anchoring educational quality directly in Hajipur and Sonpur to empower local youth.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard3D>
        </div>
      </section>

      {/* Institution 1: Aakash Institute Hajipur */}
      <section style={{ padding: '5rem 0', position: 'relative' }}>
        <div className="app-container">
          <GlassCard3D style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-base)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  <MapPin size={16} />
                  <span>Hajipur, Vaishali District, Bihar</span>
                </div>

                <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.25 }}>
                  Aakash Institute, Hajipur
                </h2>

                <div
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--color-gold-light)',
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                    borderLeft: '2px solid var(--color-gold-base)',
                    padding: '0.75rem 1rem',
                    marginBottom: '1.5rem',
                    borderRadius: '0 4px 4px 0'
                  }}
                >
                  Premier Medical & Engineering Test Prep · Authorized Center Association
                </div>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                  In association with Aakash Institute, LifaEducare operates the premier coaching facility in Hajipur, delivering national-standard preparation for the <strong>NEET (UG)</strong> medical entrance examination, <strong>JEE (Main & Advanced)</strong> engineering entrance tests, and Olympiad/Foundation courses.
                </p>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                  The Hajipur center features experienced subject-matter faculty, specialized test-series evaluation, doubt-resolution cells, and modern digital classroom facilities.
                </p>

                <button
                  onClick={() => onOpenInquiry('Aakash Institute, Hajipur')}
                  className="btn-pill btn-pill-gold"
                >
                  <span>Hajipur Center Admissions</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>
                  Academic Programs & Infrastructure
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <li style={{ display: 'flex', gap: '0.85rem' }}>
                    <BookOpen size={20} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block', fontSize: '0.96rem' }}>NEET (UG) Medical Wings</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>Intensive biology, physics, and chemistry pedagogy with exhaustive AIATS mock exams.</span>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '0.85rem' }}>
                    <BookOpen size={20} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block', fontSize: '0.96rem' }}>JEE Engineering Streams</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>Conceptual mathematics, analytical problem solving, and computer-based test simulations.</span>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '0.85rem' }}>
                    <BookOpen size={20} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block', fontSize: '0.96rem' }}>Foundation & NTSE (Grades 8-10)</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>Strengthening fundamental aptitude, Olympiad preparedness, and early scientific inquiry.</span>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '0.85rem' }}>
                    <CheckCircle2 size={20} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block', fontSize: '0.96rem' }}>Modern Digital Assessment Library</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>Spacious reading rooms, quiet study halls, and digital learning devices for self-study.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard3D>
        </div>
      </section>

      {/* Institution 2: St. Mary's P School Sonpur */}
      <section style={{ padding: '5rem 0', position: 'relative' }}>
        <div className="app-container">
          <GlassCard3D style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-base)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  <MapPin size={16} />
                  <span>Sonpur, Saran District, Bihar</span>
                </div>

                <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.25 }}>
                  St. Mary's P School, Sonpur
                </h2>

                <div
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--color-gold-light)',
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                    borderLeft: '2px solid var(--color-gold-base)',
                    padding: '0.75rem 1rem',
                    marginBottom: '1.5rem',
                    borderRadius: '0 4px 4px 0'
                  }}
                >
                  Flagship Primary & Foundational School · Guided by LifaEducare Pvt. Ltd.
                </div>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                  <strong>St. Mary's P School</strong> in Sonpur represents our foundational educational dedication: providing young children with a safe, morally upright, and intellectually vibrant learning sanctuary.
                </p>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                  We combine joyful early childhood education with disciplined English communication, arithmetic literacy, environmental awareness, and creative arts—ensuring our students grow with confidence and respect.
                </p>

                <button
                  onClick={() => onOpenInquiry("St. Mary's P School, Sonpur")}
                  className="btn-pill btn-pill-gold"
                >
                  <span>Sonpur School Admissions</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>
                  Pedagogical Highlights & Campus Care
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <li style={{ display: 'flex', gap: '0.85rem' }}>
                    <School size={20} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block', fontSize: '0.96rem' }}>Early Childhood Literacy</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>Activity-based phonics, language fluency, and foundational numeracy.</span>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '0.85rem' }}>
                    <GraduationCap size={20} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block', fontSize: '0.96rem' }}>Character & Moral Education</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>Instilling empathy, ethical values, cultural pride, and community discipline.</span>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '0.85rem' }}>
                    <CheckCircle2 size={20} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block', fontSize: '0.96rem' }}>Safe & Stimulating Campus</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>Spacious classrooms, monitored safety protocols, and outdoor play areas.</span>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '0.85rem' }}>
                    <CheckCircle2 size={20} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block', fontSize: '0.96rem' }}>Active Parent Collaboration</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>Regular parent-educator dialogue and student progress tracking.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard3D>
        </div>
      </section>

    </div>
  );
};
