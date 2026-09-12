import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Triage from './pages/Triage';
import Explorer from './pages/Explorer';
import IncidentDetail from './pages/IncidentDetail';
import Report from './pages/Report';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import PrivacyDisclaimer from './pages/PrivacyDisclaimer';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          {/* Primary Navigation (5 Core Routes) */}
          <Route path="/" element={<Home />} />
          <Route path="/what-happened-to-me" element={<Triage />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/explorer/:slug" element={<IncidentDetail />} />
          <Route path="/report" element={<Report />} />

          {/* Footer Only Routes (3 Routes) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-and-disclaimer" element={<PrivacyDisclaimer />} />

          {/* Clean Redirects for Legacy Routes */}
          <Route path="/common-scams" element={<Navigate to="/explorer" replace />} />
          <Route path="/safety-tips" element={<Navigate to="/explorer" replace />} />
          <Route path="/grievance-status-help" element={<Navigate to="/report" replace />} />
          <Route path="/faq" element={<Navigate to="/about" replace />} />
          <Route path="/victim-guide" element={<Navigate to="/what-happened-to-me" replace />} />
          <Route path="/financial-fraud" element={<Navigate to="/explorer/financial_fraud" replace />} />
          <Route path="/social-media-guide" element={<Navigate to="/explorer/fake_social_profile" replace />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
