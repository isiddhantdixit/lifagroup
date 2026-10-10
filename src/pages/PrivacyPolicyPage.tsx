import React from 'react';
import { GlassCard3D } from '../components/GlassCard3D';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: '9rem', paddingBottom: '8rem' }}>
      <div className="app-container" style={{ maxWidth: '860px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow-pill">
            <span className="eyebrow-dot" />
            <span>Institutional Governance & Compliance</span>
          </div>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', color: '#fff', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--color-gold-light)', fontSize: '0.95rem' }}>
            Effective Date: January 1, 2026 · Governing Entity: Lifa Group & LifaEducare Pvt. Ltd.
          </p>
        </div>

        <GlassCard3D style={{ padding: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.85, color: 'var(--color-text-secondary)', fontSize: '0.96rem' }}>
          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            1. Scope of Policy
          </h2>
          <p style={{ marginBottom: '1.75rem' }}>
            This Privacy Policy governs the collection, processing, and management of data by <strong>Lifa Group</strong> ("the Group"), its educational operating subsidiary <strong>LifaEducare Pvt. Ltd.</strong>, and associated institutions including Aakash Institute (Hajipur Center) and St. Mary's P School (Sonpur).
          </p>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            2. Information Collection
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We collect personal and academic data strictly necessary for institutional inquiries, academic enrollment, parent communications, and corporate correspondence:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Contact Identifiers:</strong> Name, professional email address, telephone/WhatsApp contact numbers.</li>
            <li><strong>Academic & Enrollment Details:</strong> Inquiries related to student grade level, test preparation batches (NEET/JEE), or school admissions.</li>
            <li><strong>Corporate Credentials:</strong> Organizational affiliation for partnership or vendor proposals.</li>
          </ul>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            3. Purpose of Processing
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Information submitted across our communication portals is used exclusively for:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Responding to official corporate inquiries and scheduling consultations.</li>
            <li>Processing educational inquiries for LifaEducare institutions.</li>
            <li>Maintaining institutional compliance and communication records.</li>
            <li>Transmitting confidential notices regarding group developments when explicitly requested.</li>
          </ul>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            4. Data Protection & Confidentiality
          </h2>
          <p style={{ marginBottom: '1.75rem' }}>
            Lifa Group maintains administrative and technical safeguards to preserve data confidentiality. We do not sell, rent, or lease contact records or personal data to third-party commercial marketing entities under any circumstances.
          </p>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            5. Institutional Relationships & Third-Party Links
          </h2>
          <p style={{ marginBottom: '1.75rem' }}>
            Our web portal references associated institutions such as Aakash Institute and St. Mary’s P School. While LifaEducare Pvt. Ltd. oversees designated center management and operations in Hajipur and Sonpur, institutional programs adhere to respective regulatory frameworks.
          </p>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            6. Contact Secretariat
          </h2>
          <p>
            For queries concerning corporate data handling or to request updates to your communication preferences, write to:
          </p>
          <div style={{ marginTop: '0.75rem', color: 'var(--color-gold-light)', borderLeft: '2px solid var(--color-gold-base)', paddingLeft: '1rem' }}>
            <strong>Executive Secretariat, Lifa Group</strong><br />
            Email: siddhantdixit@lifagroup.in<br />
            Contact: +91 7992466601<br />
            Hajipur & Sonpur, Bihar, India
          </div>
        </GlassCard3D>

      </div>
    </div>
  );
};
