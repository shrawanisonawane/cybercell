import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink, Building2, Award } from 'lucide-react';
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
                  <span>{lang === 'mr' ? 'नाशिक शहर सायबर सेल' : 'Nashik City Cyber Cell'}</span>
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
              <Building2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>{lang === 'mr' ? 'गंगापूर रोड, पोलीस आयुक्तालय परिसर, नाशिक - ४२२००२' : 'Gangapur Road, Police Commissionerate Office, Nashik - 422002'}</span>
            </div>
          </div>

          {/* Column 2: Official Citizen Portals & Apps */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-slate-900 text-xs tracking-wider uppercase border-b border-slate-200 pb-2">
              {lang === 'mr' ? 'नागरिक सुविधा ॲप्स व पोर्टल्स' : 'Official Citizen Portals & Apps'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://sancharsaathi.gov.in/sfc/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 hover:text-blue-800 transition flex items-center justify-between py-1 font-medium bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs"
                >
                  <span>{lang === 'mr' ? 'चक्षू ॲप - संशयास्पद कॉल्स व मेसेज रिपोर्ट' : 'Chakshu App (Report Spam / Fraud Calls)'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-700 shrink-0 ml-2" />
                </a>
              </li>
              <li>
                <a
                  href="https://sancharsaathi.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 hover:text-blue-800 transition flex items-center justify-between py-1 font-medium bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs"
                >
                  <span>{lang === 'mr' ? 'संचार साथी - मोबाईल ब्लॉक पोर्टल' : 'Sanchar Saathi (Block Stolen Mobile)'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-700 shrink-0 ml-2" />
                </a>
              </li>
              <li>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 hover:text-blue-800 transition flex items-center justify-between py-1 font-medium bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs"
                >
                  <span>{lang === 'mr' ? 'आरबीआय एकात्मिक लोकपाल योजना' : 'RBI Integrated Ombudsman Scheme'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-700 shrink-0 ml-2" />
                </a>
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 font-normal leading-normal pt-1">
              {lang === 'mr'
                ? 'टीप: अधिकृत पोलीस पोर्टलवर तक्रार नोंदणी ही पोलीस अधिकाऱ्यांमार्फत केली जाते.'
                : 'Note: Official police portal reporting is conducted by Police Officers.'}
            </p>
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
          <p>© {new Date().getFullYear()} {lang === 'mr' ? 'नाशिक शहर सायबर पोलीस ठाणे, महाराष्ट्र शासन' : 'Nashik City Cyber Police Station, Govt of Maharashtra'}.</p>
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
