import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, AlertTriangle, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import commonScamsData from '../data/common-scams.json';

export default function CommonScams() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-800" />
          <span>{lang === 'en' ? 'Curated Scam Case Studies' : 'फसवणूक कथा व जनजागृती'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-mhnavy-950">
          {lang === 'en' ? 'Frequently Seen Scam Patterns' : 'सध्या प्रचलित असलेल्या फसवणूक पद्धती'}
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'Read story-style breakdowns of real scam methods reported across Maharashtra, including red flags and real-world facts.'
            : 'नागरिकांना फसवण्यासाठी वापरल्या जाणाऱ्या खऱ्या ट्रिक्स, रेड फ्लॅग्स आणि सत्य परिस्थिती.'}
        </p>
      </div>

      {/* Scam Cards Grid */}
      <div className="space-y-6">
        {commonScamsData.map((scam) => (
          <div key={scam.id} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 mb-1">
                  Target: {scam.targetAudience}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-mhnavy-950">
                  {lang === 'en' ? scam.title : scam.titleMr || scam.title}
                </h2>
              </div>
              <span className="text-xs text-slate-400 font-semibold">{scam.readTime}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {lang === 'en' ? scam.summary : scam.summaryMr || scam.summary}
            </p>

            {/* How it works */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-mhnavy-950 text-xs uppercase tracking-wider">
                {lang === 'en' ? 'How this scam works (Step-by-Step):' : 'ही फसवणूक कशी होते:'}
              </h3>
              <ol className="space-y-1.5 text-xs text-slate-700">
                {scam.howItWorks.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-mhnavy-800 shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Red Flags & Real World Fact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs space-y-1">
                <span className="font-bold text-red-950 block flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
                  <span>{lang === 'en' ? 'Red Flags (Warning Signs):' : 'धोक्याची घंटा (Red Flags):'}</span>
                </span>
                <ul className="space-y-1 text-red-900 pl-2">
                  {scam.redFlags.map((rf, i) => (
                    <li key={i}>• {rf}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                <span className="font-bold text-emerald-950 block flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{lang === 'en' ? 'Real-World Law Fact:' : 'शासकीय व कायदेशीर सत्य:'}</span>
                </span>
                <p className="text-emerald-900 leading-relaxed">{scam.realWorldFact}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <Link
                to={`/explorer/${scam.incidentCategory}`}
                className="font-bold text-mhnavy-800 hover:text-mhnavy-950 underline flex items-center gap-1"
              >
                <span>View Full Structured Guide for #{scam.incidentCategory} →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
