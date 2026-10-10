import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navRoutes = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Enterprises', path: '/enterprises' },
    { label: 'The Horizon', path: '/horizon' },
    { label: 'Leadership', path: '/leadership' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isScrolled ? '0.85rem 0' : '1.25rem 0',
          backgroundColor: isScrolled ? 'rgba(6, 12, 24, 0.88)' : 'rgba(8, 16, 30, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid var(--color-border-gold)' : '1px solid var(--color-border-subtle)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.45)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="app-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo & Tagline */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/logo.svg" alt="Lifa Group" style={{ height: '42px', width: 'auto' }} />
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '2.25rem', listStyle: 'none' }}>
              {navRoutes.map((route) => (
                <li key={route.label}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) => `nav-link-item ${isActive ? 'active-nav-link' : ''}`}
                    style={({ isActive }) => ({
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      color: isActive ? '#fff' : 'var(--color-text-secondary)',
                      position: 'relative',
                      padding: '0.35rem 0',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    })}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--color-gold-base)',
                              boxShadow: '0 0 8px var(--color-gold-base)'
                            }}
                          />
                        )}
                        <span>{route.label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button & Mobile Burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => onOpenInquiry()}
              className="btn-pill btn-pill-gold-outline nav-header-cta"
              style={{ fontSize: '0.75rem', padding: '0.6rem 1.4rem' }}
            >
              <span>Corporate Enquiry</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="mobile-burger-btn"
              aria-label="Toggle Navigation"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: '1px solid var(--color-border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 150,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            style={{
              width: '85%',
              maxWidth: '380px',
              height: '100%',
              backgroundColor: 'var(--color-bg-surface)',
              borderLeft: '1px solid var(--color-border-gold)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <img src="/assets/logo.svg" alt="Lifa Group" style={{ height: '36px', width: 'auto' }} />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {navRoutes.map((route) => (
                  <li key={route.label}>
                    <NavLink
                      to={route.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) => isActive ? 'gold-gradient-text' : ''}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        color: 'var(--color-text-primary)',
                        display: 'block'
                      }}
                    >
                      {route.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-border-subtle)' }}>
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenInquiry();
                }}
                className="btn-pill btn-pill-gold"
                style={{ width: '100%' }}
              >
                <span>Corporate Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .mobile-burger-btn { display: none !important; }
        }
        @media (max-width: 640px) {
          .nav-header-cta { display: none !important; }
        }
        .nav-link-item:hover {
          color: #fff !important;
        }
        .nav-link-item.active-nav-link {
          color: #fff !important;
        }
      `}</style>
    </>
  );
};
