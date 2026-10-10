import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Linkedin, Instagram, User } from 'lucide-react';
import { leadershipData, LeaderProfile } from '../data/leadership';

export const Leadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

  return (
    <section
      id="leadership"
      style={{
        padding: '8.5rem 0',
        backgroundColor: 'var(--color-bg-base)',
        position: 'relative'
      }}
    >
      <div className="app-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4.5rem' }}>
          <div className="eyebrow-pill">
            <span className="eyebrow-dot" />
            <span>Executive Governance</span>
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
            Our Leadership
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
            The executive council steering Lifa Group’s institutional integrity, academic excellence through LifaEducare, and strategic long-term regional expansion.
          </p>
        </div>

        {/* 4 Leaders Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {leadershipData.map((leader, index) => (
            <motion.article
              key={leader.id}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Photo Frame Container */}
              <div
                style={{
                  height: '280px',
                  position: 'relative',
                  backgroundColor: 'var(--color-bg-elevated)',
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
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(197, 168, 128, 0.08)',
                      border: '1px solid var(--color-border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold-base)'
                    }}
                  >
                    <User size={46} strokeWidth={1.5} />
                  </div>
                )}

                {/* Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    padding: '0.3rem 0.8rem',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(8, 16, 30, 0.85)',
                    border: '1px solid var(--color-border-gold)',
                    color: 'var(--color-gold-light)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  {leader.category}
                </div>
              </div>

              {/* Bio & Details */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 className="font-serif" style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.35rem' }}>
                  {leader.name}
                </h3>

                <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-gold-base)', marginBottom: '1rem' }}>
                  {leader.designation}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem', flexGrow: 1 }}>
                  {leader.bio}
                </p>

                {/* Action Contact Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--color-border-subtle)',
                    marginTop: 'auto'
                  }}
                >
                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      title="Send Email"
                      className="leader-contact-icon-btn"
                    >
                      <Mail size={16} />
                    </a>
                  )}

                  {leader.phone && (
                    <a
                      href={`tel:${leader.phone}`}
                      title="Direct Call"
                      className="leader-contact-icon-btn"
                    >
                      <Phone size={16} />
                    </a>
                  )}

                  {leader.whatsapp && (
                    <a
                      href={`https://wa.me/${leader.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp"
                      className="leader-contact-icon-btn whatsapp-icon-btn"
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
                      className="leader-contact-icon-btn"
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
                      className="leader-contact-icon-btn"
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      <style>{`
        .leader-contact-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border-medium);
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          transition: all 0.2s ease;
        }
        .leader-contact-icon-btn:hover {
          color: var(--color-gold-light);
          border-color: var(--color-gold-base);
          background: rgba(197, 168, 128, 0.1);
          transform: translateY(-2px);
        }
        .whatsapp-icon-btn:hover {
          color: #25D366 !important;
          border-color: #25D366 !important;
          background: rgba(37, 211, 102, 0.1) !important;
        }
      `}</style>
    </section>
  );
};
