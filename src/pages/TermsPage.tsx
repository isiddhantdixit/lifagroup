import React from 'react';
import { GlassCard3D } from '../components/GlassCard3D';

export const TermsPage: React.FC = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: '9rem', paddingBottom: '8rem' }}>
      <div className="app-container" style={{ maxWidth: '860px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow-pill">
            <span className="eyebrow-dot" />
            <span>Institutional Governance & Compliance</span>
          </div>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', color: '#fff', marginBottom: '1rem' }}>
            Terms & Conditions
          </h1>
          <p style={{ color: 'var(--color-gold-light)', fontSize: '0.95rem' }}>
            Effective Date: January 1, 2026 · Governing Entity: Lifa Group & LifaEducare Pvt. Ltd.
          </p>
        </div>

        <GlassCard3D style={{ padding: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.85, color: 'var(--color-text-secondary)', fontSize: '0.96rem' }}>
          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            1. Corporate Identity & Representation
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            This website is the official corporate digital property of <strong>Lifa Group</strong> ("the Parent Group"). Lifa Group is the parent company of <strong>LifaEducare Pvt. Ltd.</strong>, which is associated with:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Aakash Institute, Hajipur, Bihar:</strong> Associated test preparation center. All references to Aakash Institute denote this specific center association; Lifa Group and LifaEducare Pvt. Ltd. do not claim ownership of the national brand beyond authorized institutional agreements.</li>
            <li><strong>St. Mary's P School, Sonpur, Bihar:</strong> Guided foundational educational institution.</li>
          </ul>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            2. Use of Digital Property
          </h2>
          <p style={{ marginBottom: '1.75rem' }}>
            Materials, trademarks, logos, typography, visual marks, and institutional narratives displayed on this website are the proprietary assets of Lifa Group or used under authorized license. Unauthorized reproduction or commercial distribution without written consent is strictly prohibited.
          </p>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            3. Forward-Looking Representations ("The Horizon")
          </h2>
          <p style={{ marginBottom: '1.75rem' }}>
            Notices, teasers, and sections denoting future expansions ("Coming Soon" or "The Next Horizon") represent strategic intent and institutional exploration. They do not constitute formal commercial prospectuses, binding investment offers, or operational warranties until definitive contracts are executed.
          </p>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            4. Communication & Inquiries
          </h2>
          <p style={{ marginBottom: '1.75rem' }}>
            Submitting an electronic inquiry via our digital forms constitutes an authorization for Lifa Group and LifaEducare Pvt. Ltd. to contact the respondent via provided email or telephone regarding the specific nature of their submission.
          </p>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            5. Jurisdiction
          </h2>
          <p style={{ marginBottom: '1.75rem' }}>
            These terms and all institutional interactions are governed by the laws of India, under the jurisdiction of the competent courts in the State of Bihar.
          </p>

          <h2 className="font-serif" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            6. Corporate Registry & Office
          </h2>
          <div style={{ marginTop: '0.75rem', color: 'var(--color-gold-light)', borderLeft: '2px solid var(--color-gold-base)', paddingLeft: '1rem' }}>
            <strong>Executive Secretariat, Lifa Group</strong><br />
            Email: siddhantdixit@lifagroup.in<br />
            Contact: +91 7992466601<br />
            Operating Headquarters: Hajipur & Sonpur, Bihar, India
          </div>
        </GlassCard3D>

      </div>
    </div>
  );
};
