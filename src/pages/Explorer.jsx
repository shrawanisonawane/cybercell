import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, ChevronRight, AlertTriangle, Flame, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import incidentsData from '../data/incidents.json';

const trendingIds = ['upi_fraud', 'investment_scam', 'job_scam', 'sextortion', 'malware_apk', 'loan_app_fraud'];

export default function Explorer() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', labelEn: 'All Incidents', labelMr: 'सर्व गुन्हे प्रकार' },
    { id: 'TRENDING', labelEn: 'Trending Scams', labelMr: 'ट्रेंडिंग घोटाळे' },
    { id: 'FINANCIAL', labelEn: 'Financial & UPI', labelMr: 'बँक व यूपीआय' },
    { id: 'SOCIAL', labelEn: 'Social Media', labelMr: 'सोशल मीडिया' },
    { id: 'JOB_LOAN', labelEn: 'Job & Investment', labelMr: 'नोकरी व गुंतवणूक' },
    { id: 'HARASSMENT', labelEn: 'Extortion & Threats', labelMr: 'धमकी व ब्लॅकमेल' },
  ];

  const filteredIncidents = incidentsData.filter((inc) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      inc.title.toLowerCase().includes(query) ||
      (inc.titleMr && inc.titleMr.toLowerCase().includes(query)) ||
      inc.shortSummary.toLowerCase().includes(query);

    let matchesCategory = true;
    if (activeCategory === 'TRENDING') {
      matchesCategory = trendingIds.includes(inc.id);
    } else if (activeCategory === 'FINANCIAL') {
      matchesCategory = ['upi_fraud', 'financial_fraud', 'crypto_fraud', 'shopping_fraud'].includes(inc.id);
    } else if (activeCategory === 'SOCIAL') {
      matchesCategory = ['account_takeover', 'fake_social_profile', 'identity_photo_misuse', 'phishing'].includes(inc.id);
    } else if (activeCategory === 'JOB_LOAN') {
      matchesCategory = ['job_scam', 'investment_scam', 'loan_app_fraud'].includes(inc.id);
    } else if (activeCategory === 'HARASSMENT') {
      matchesCategory = ['sextortion', 'online_harassment', 'identity_photo_misuse'].includes(inc.id);
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 min-h-screen bg-slate-50 text-charcoal font-sans">
      
      {/* Title Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-800 text-xs font-heading font-bold uppercase tracking-wider border border-navy-200">
          <Award className="w-4 h-4 text-navy-700" />
          <span>{lang === 'en' ? 'Nashik Cyber Police Incident Directory' : 'नाशिक सायबर पोलीस मार्गदर्शक सूची'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal tracking-tight">
          {lang === 'en' ? 'Browse Cyber Incident Types' : 'सायबर गुन्हे व फसवणूक प्रकार'}
        </h1>
        <p className="text-base text-charcoal-600 max-w-3xl leading-relaxed font-normal">
          {lang === 'en'
            ? 'Select any cyber crime category to see plain-language explanations, how it happens, warning signs, evidence checklists, and immediate victim action steps.'
            : 'कोणत्याही प्रकारावर क्लिक करून फसवणूक कशी होते, धोक्याचे संकेत, जतन करायचे पुरावे व उपाय जाणून घ्या.'}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-6 h-6 text-charcoal-500 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'en' ? 'Search e.g. UPI, Instagram, WhatsApp, OTP, Digital Arrest, Loan app...' : 'शोधा (उदा. यूपीआय, डिजिटल अरेस्ट, व्हॉट्सॲप, ॲप)...'}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 bg-white focus:outline-none focus:border-navy-600 text-base text-charcoal shadow-sm font-normal"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold transition whitespace-nowrap border min-h-[40px] ${
                activeCategory === cat.id
                  ? 'bg-navy-900 text-white border-navy-950 shadow-sm'
                  : 'bg-white text-charcoal border-slate-200 hover:bg-navy-50'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelMr}
            </button>
          ))}
        </div>

      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIncidents.map((inc) => {
          const isTrending = trendingIds.includes(inc.id);
          const riskColor = inc.riskLevelDefault === 'HIGH'
            ? 'bg-risk-high-bg text-risk-high border-risk-high/30'
            : inc.riskLevelDefault === 'MEDIUM'
            ? 'bg-risk-med-bg text-risk-med border-risk-med/30'
            : 'bg-risk-low-bg text-risk-low border-risk-low/30';

          return (
            <Link
              key={inc.id}
              to={`/explorer/${inc.id}`}
              className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-400 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  {isTrending ? (
                    <span className="flex items-center gap-1 text-[11px] font-heading font-bold text-tertiary-700 bg-tertiary-50 px-2.5 py-1 rounded-full border border-tertiary-200">
                      <Flame className="w-3.5 h-3.5 text-tertiary-600 fill-tertiary-600" />
                      <span>{lang === 'en' ? 'TRENDING' : 'ट्रेंडिंग'}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-charcoal-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      #{inc.id}
                    </span>
                  )}
                  <span className={`text-[11px] font-heading font-bold px-2.5 py-1 rounded-full border ${riskColor}`}>
                    {inc.riskLevelDefault} RISK
                  </span>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-charcoal text-xl group-hover:text-navy-700 transition leading-snug">
                    {lang === 'en' ? inc.title : inc.titleMr || inc.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed line-clamp-3 font-normal">
                    {lang === 'en' ? inc.shortSummary : inc.shortSummaryMr || inc.shortSummary}
                  </p>
                </div>

                {/* Key Warning Indicator */}
                {inc.warningSigns && inc.warningSigns[0] && (
                  <div className="pt-2">
                    <span className="text-[11px] font-heading font-bold text-charcoal-500 block mb-1">
                      {lang === 'en' ? '⚠️ Main Indicator:' : '⚠️ मुख्य संकेत:'}
                    </span>
                    <p className="text-xs text-charcoal-700 bg-slate-50 p-3 rounded-xl border border-slate-200 font-normal">
                      "{inc.warningSigns[0]}"
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-heading font-bold text-navy-700">
                <span>{lang === 'en' ? 'View Guidance & Actions →' : 'मार्गदर्शन व उपाय पहा →'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {filteredIncidents.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 space-y-4">
          <AlertTriangle className="w-12 h-12 text-risk-med mx-auto" />
          <h3 className="font-heading font-bold text-charcoal text-xl">
            {lang === 'en' ? 'No incident categories match your filter' : 'काहीही माहिती आढळली नाही'}
          </h3>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto font-normal">
            {lang === 'en' ? 'Try searching for general keywords like "money", "WhatsApp", or click "All Incidents".' : 'कृपया इतर शब्द शोधून पाहा किंवा फिल्टर रिसेट करा.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }}
            className="px-5 py-2.5 bg-navy-900 text-white rounded-xl text-xs font-heading font-bold shadow-sm min-h-[44px]"
          >
            {lang === 'en' ? 'Reset All Filters' : 'फिल्टर रिसेट करा'}
          </button>
        </div>
      )}

    </div>
  );
}
