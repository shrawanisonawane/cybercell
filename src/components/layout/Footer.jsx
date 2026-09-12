import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink, Building2, Award, PhoneCall } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-slate-100 text-slate-800 border-t border-slate-200 pt-10 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-200">
          
          {/* Column 1: Agency Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-300 flex items-center justify-center shadow-xs">
                <Shield className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-slate-900 text-base flex items-center gap-1">
                  <span>{lang === 'mr' ? 'नाशिक सायबर सेल' : 'Nashik Cyber Cell'}</span>
                  <Award className="w-3.5 h-3.5 text-blue-700" />
                </h3>
                <p className="text-xs text-blue-800 font-bold">
                  {lang === 'mr' ? 'नाशिक शहर सायबर पोलीस ठाणे' : 'Nashik City Cyber Police Station'}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {lang === 'mr'
                ? 'नाशिक पोलिसांतर्गत नाशिक जिल्ह्यातील नागरिकांच्या सायबर सुरक्षिततेसाठी अधिकृत मार्गदर्शन व जनजागृती पोर्टल.'
                : 'Public Cyber Crime Awareness & Victim Guidance Portal operated under Nashik Police. Dedicated to helping citizens prevent and report cyber fraud.'}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
              <Building2 className="w-3.5 h-3.5 text-blue-700" />
              <span>गंगापूर रोड, पोलीस आयुक्तालय परिसर, नाशिक</span>
            </div>
          </div>

          {/* Column 2: Emergency Helplines & Official Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-slate-900 text-xs tracking-wider uppercase border-b border-slate-200 pb-2">
              {lang === 'mr' ? 'आपत्कालीन हेल्पलाइन व पोर्टल' : 'Emergency Helplines & Portals'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="p-2.5 rounded-xl bg-white border border-red-200 flex items-center justify-between shadow-xs">
                <div>
                  <span className="block font-heading font-bold text-red-700">National Cyber Helpline</span>
                  <span className="text-[11px] text-slate-500">24x7 Financial Fraud Freeze</span>
                </div>
                <a href="tel:1930" className="text-base font-heading font-extrabold text-red-700 hover:underline">1930</a>
              </li>
              <li className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between shadow-xs">
                <div>
                  <span className="block font-heading font-bold text-blue-900">नाशिक सायबर पोलीस फोन</span>
                  <span className="text-[11px] text-slate-600">गंगापूर रोड, नाशिक</span>
                </div>
                <a href="tel:02532305226" className="text-sm font-heading font-extrabold text-blue-800 hover:underline">0253-2305226</a>
              </li>
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-blue-800 transition flex items-center justify-between py-1 font-medium">
                  <span>{lang === 'mr' ? 'राष्ट्रीय सायबर पोर्टल (cybercrime.gov.in)' : 'National Cyber Crime Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Footer Destinations */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-slate-900 text-xs tracking-wider uppercase border-b border-slate-200 pb-2">
              {lang === 'mr' ? 'माहिती व कायदेशीर' : 'Information & Legal'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/dashboard" className="text-slate-700 hover:text-blue-800 transition font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>{lang === 'mr' ? 'सार्वजनिक आकडेवारी डॅशबोर्ड' : 'Public Statistics Dashboard'}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-700 hover:text-blue-800 transition font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>{lang === 'mr' ? 'नाशिक सायबर सेल माहिती व प्रश्नोत्तरी' : 'About Nashik Cyber Cell & FAQ'}</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-and-disclaimer" className="text-slate-700 hover:text-blue-800 transition font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <span>{lang === 'mr' ? 'गोपनीयता धोरण व अस्वीकरण' : 'Privacy Policy & Legal Disclaimer'}</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Nashik City Cyber Police Station (नाशिक सायबर सेल). Govt of Maharashtra.</p>
          <div className="flex items-center gap-3 font-medium">
            <Link to="/dashboard" className="hover:text-blue-800">{lang === 'mr' ? 'डॅशबोर्ड' : 'Dashboard'}</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-blue-800">{lang === 'mr' ? 'माहिती व FAQ' : 'About & FAQ'}</Link>
            <span>•</span>
            <Link to="/privacy-and-disclaimer" className="hover:text-blue-800">{lang === 'mr' ? 'गोपनीयता धोरण' : 'Privacy & Disclaimer'}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
