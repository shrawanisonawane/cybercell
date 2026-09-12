import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Globe, PhoneCall, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: lang === 'mr' ? 'मुख्य पृष्ठ' : 'Home' },
    { path: '/what-happened-to-me', label: lang === 'mr' ? 'माझ्यासोबत काय घडले?' : 'What Happened To Me?' },
    { path: '/explorer', label: lang === 'mr' ? 'गुन्हे प्रकार सूची' : 'Incident Explorer' },
    { path: '/report', label: lang === 'mr' ? 'तक्रार व मदत केंद्र' : 'Report & Help' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-slate-900 border-b border-slate-200 shadow-sm font-sans">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 sm:py-3.5 gap-2 min-h-[60px] sm:min-h-[72px]">
          
          {/* Logo & Agency Branding */}
          <Link to="/" className="flex items-center gap-2.5 min-w-0 flex-1 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-xl p-0.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-xs shrink-0 group-hover:bg-blue-100 transition">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-blue-700" />
            </div>
            
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
                <span className="text-xs sm:text-sm md:text-base font-heading font-extrabold tracking-tight text-blue-900 truncate flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-blue-700 shrink-0 hidden sm:inline" />
                  {lang === 'mr' ? 'नाशिक शहर सायबर सेल' : 'Nashik City Cyber Cell'}
                </span>
                <span className="bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-bold px-1.5 py-0.5 rounded hidden md:inline-block shrink-0">
                  {lang === 'mr' ? 'नाशिक पोलीस' : 'Nashik Police'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-heading font-semibold text-slate-600 leading-tight truncate">
                {lang === 'mr' ? 'नागरिक सायबर सुरक्षा व तातडीचे मदत केंद्र' : 'Citizen Guidance & Cyber Awareness Portal'}
              </p>
            </div>
          </Link>

          {/* Desktop Right Quick Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Nashik Police Phone Line */}
            <a
              href="tel:02532305226"
              className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-900 px-3 py-2 rounded-xl text-xs font-heading font-bold transition min-h-[44px]"
              title={lang === 'mr' ? 'नाशिक सायबर पोलीस ठाणे थेट फोन' : 'Direct Call Nashik Cyber Police Desk'}
            >
              <PhoneCall className="w-4 h-4 text-blue-700" />
              <span>0253-2305226</span>
            </a>

            {/* 1930 Direct Emergency Hotline Button */}
            <a
              href="tel:1930"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition shadow-sm min-h-[44px]"
              title={lang === 'mr' ? '१९३० हेल्पलाइनवर कॉल करा' : 'Call 1930 National Cyber Helpline'}
            >
              <PhoneCall className="w-4 h-4 text-white animate-pulse" />
              <span>{lang === 'mr' ? 'हेल्पलाइन १९३०' : 'Helpline 1930'}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-heading font-bold transition min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Switch Language"
            >
              <Globe className="w-4 h-4 text-blue-700" />
              <span>{lang === 'mr' ? 'English मध्ये पहा' : 'मराठी मध्ये पहा'}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <a
              href="tel:1930"
              className="flex items-center gap-1 bg-red-600 text-white px-2.5 py-1.5 rounded-lg text-xs font-heading font-extrabold min-h-[38px] shrink-0"
              title="Call 1930 Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="text-[11px]">1930</span>
            </a>

            <button
              onClick={toggleLang}
              className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 px-2 py-1.5 rounded-lg border border-slate-300 text-xs font-heading font-bold min-h-[38px] shrink-0"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-700" />
              <span className="text-[11px]">{lang === 'mr' ? 'EN' : 'मराठी'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-blue-700 min-h-[38px] min-w-[38px] flex items-center justify-center rounded-lg focus:outline-none shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-blue-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden lg:block bg-slate-50 border-t border-slate-200 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl font-heading font-bold text-xs transition min-h-[40px] flex items-center gap-1.5 ${
                isActive(link.path)
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl mb-3 text-xs text-blue-900 font-bold flex items-center justify-between">
            <span>{lang === 'mr' ? 'नाशिक सायबर पोलीस ठाणे:' : 'Nashik Cyber Police Desk:'}</span>
            <a href="tel:02532305226" className="text-red-700 underline font-extrabold">0253-2305226</a>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-heading font-bold transition min-h-[48px] flex items-center justify-between ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>{link.label}</span>
              {isActive(link.path) && <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
