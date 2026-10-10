import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

import { ThreeCanvas } from './components/ThreeCanvas';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EnterprisesPage } from './pages/EnterprisesPage';
import { HorizonPage } from './pages/HorizonPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export const App: React.FC = () => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic);
    setInquiryModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* 3D WebGL Canvas Layer */}
      <ThreeCanvas />

      {/* App Shell */}
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Navigation */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        {/* Multi-Page Routes */}
        <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/enterprises" element={<EnterprisesPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/horizon" element={<HorizonPage />} />
            <Route path="/leadership" element={<LeadershipPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <Footer />

        {/* Modal Dialog */}
        <InquiryModal
          isOpen={inquiryModalOpen}
          initialTopic={inquiryTopic}
          onClose={() => setInquiryModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
