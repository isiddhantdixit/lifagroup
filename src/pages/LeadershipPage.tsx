import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Linkedin, Instagram, User, ShieldCheck } from 'lucide-react';
import { GlassCard3D } from '../components/GlassCard3D';
import { leadershipData } from '../data/leadership';

interface LeadershipPageProps {
  onOpenInquiry: (topic?: string) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onOpenInquiry }) => {
  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: '8.5rem', paddingBottom: '8rem' }}>
      
      {/* Page Header */}
      <section style={{ paddingBottom: '4.5rem', position: 'relative' }}>
        <div className="app-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="eyebrow-pill">
                <ShieldCheck size={12} color="var(--color-gold-base)" />
                <span>Executive Governance & Council</span>
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
              The Leadership Council
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
              Meet the executive stewards steering Lifa Group’s institutional integrity, academic governance at LifaEducare, and strategic long-term regional development across Bihar.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 4 Leaders Grid */}
      <section style={{ padding: '2rem 0 6rem', position: 'relative' }}>
        <div className="app-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {leadershipData.map((leader, index) => (
              <GlassCard3D key={leader.id} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Photo Container */}
                <div
                  style={{
                    height: '300px',
                    position: 'relative',
                    backgroundColor: 'rgba(9, 18, 34, 0.85)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '96px',
                        height: '96px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(197, 168, 128, 0.08)',
                        border: '1px solid var(--color-border-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-gold-base)'
                      }}
                    >
                      <User size={50} strokeWidth={1.5} />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'rgba(8, 16, 30, 0.9)',
                      border: '1px solid var(--color-border-gold)',
                      color: 'var(--color-gold-light)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    {leader.category}
                  </div>
                </div>

                {/* Profile Details */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.35rem' }}>
                    {leader.name}
                  </h3>

                  <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-gold-base)', marginBottom: '1.25rem' }}>
                    {leader.designation}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>
                    {leader.bio}
                  </p>

                  {/* Direct Contact Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--color-border-subtle)',
                      marginTop: 'auto'
                    }}
                  >
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        title="Send Email"
                        className="leader-action-circle"
                      >
                        <Mail size={16} />
                      </a>
                    )}

                    {leader.phone && (
                      <a
                        href={`tel:${leader.phone}`}
                        title="Direct Call"
                        className="leader-action-circle"
                      >
                        <Phone size={16} />
                      </a>
                    )}

                    {leader.whatsapp && (
                      <a
                        href={`https://wa.me/${leader.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp Direct"
                        className="leader-action-circle whatsapp-circle"
                      >
                        <MessageSquare size={16} />
                      </a>
                    )}

                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        className="leader-action-circle"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}

                    {leader.instagram && (
                      <a
                        href={leader.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                        className="leader-action-circle"
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance Protocol Note */}
      <section style={{ padding: '2rem 0', position: 'relative' }}>
        <div className="app-container">
          <GlassCard3D style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
            <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.75rem' }}>
              Secretariat Direct Line
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              To schedule an executive consultation or request institutional governance credentials with any member of the board, please contact the Executive Secretariat.
            </p>
            <button onClick={() => onOpenInquiry('Executive Secretariat Direct')} className="btn-pill btn-pill-gold">
              <span>Connect with Secretariat</span>
            </button>
          </GlassCard3D>
        </div>
      </section>

      <style>{`
        .leader-action-circle {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border-medium);
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          transition: all 0.2s ease;
        }
        .leader-action-circle:hover {
          color: #fff;
          border-color: var(--color-gold-base);
          background: rgba(197, 168, 128, 0.12);
          transform: translateY(-2px);
        }
        .whatsapp-circle:hover {
          color: #25D366 !important;
          border-color: #25D366 !important;
          background: rgba(37, 211, 102, 0.12) !important;
        }
      `}</style>
    </div>
  );
};
