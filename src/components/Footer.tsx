import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#040914',
        borderTop: '1px solid var(--color-border-gold)',
        paddingTop: '6rem',
        paddingBottom: '3.5rem',
        color: 'var(--color-text-secondary)'
      }}
    >
      <div className="app-container">
        
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3.5rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid var(--color-border-subtle)'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <Link to="/">
              <img src="/assets/logo.svg" alt="Lifa Group" style={{ height: '46px', width: 'auto' }} />
            </Link>
            <p className="font-serif" style={{ fontSize: '1.05rem', color: 'var(--color-gold-light)', marginTop: '1.25rem', marginBottom: '0.85rem' }}>
              Ensuring Life. Building Lifestyle.
            </p>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--color-text-muted)' }}>
              An institutional parent conglomerate guiding educational empowerment through LifaEducare Pvt. Ltd., and future lifestyle ventures in Bihar and beyond.
            </p>
          </div>

          {/* Operating Enterprises */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: '1.5rem' }}>
              Enterprises
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <li><Link to="/enterprises" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>LifaEducare Pvt. Ltd.</Link></li>
              <li><Link to="/enterprises" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>Aakash Institute, Hajipur</Link></li>
              <li><Link to="/enterprises" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>St. Mary's P School, Sonpur</Link></li>
              <li><Link to="/horizon" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>The Next Horizon</Link></li>
            </ul>
          </div>

          {/* Governance & Council */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: '1.5rem' }}>
              Corporate Pages
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <li><Link to="/about" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>Corporate Genesis</Link></li>
              <li><Link to="/leadership" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>Executive Council</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>Regional Secretariat</Link></li>
              <li><Link to="/horizon" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>Confidential Briefings</Link></li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: '1.5rem' }}>
              Legal & Compliance
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <li><Link to="/privacy-policy" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>Privacy Policy</Link></li>
              <li><Link to="/terms" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>Terms and Conditions</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>Secretariat Inquiries</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            paddingTop: '2.5rem',
            fontSize: '0.85rem',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          className="footer-bottom-row"
        >
          <p style={{ margin: 0 }}>
            © 2026 Lifa Group. All rights reserved. LifaEducare Pvt. Ltd. is an operating subsidiary of Lifa Group.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
              Terms of Service
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-bottom-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
};
