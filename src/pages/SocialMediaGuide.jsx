import React, { useState } from 'react';
import { UserX, MessageSquare, ShieldAlert, ExternalLink, CheckCircle2, ArrowRight, Lock, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import takedownData from '../data/social-media-takedowns.json';
import DisclaimerNotice from '../components/shared/DisclaimerNotice';

export default function SocialMediaGuide() {
  const { lang } = useLanguage();
  const [selectedTab, setSelectedTab] = useState('fake_account_deletion');

  const currentGuide = takedownData.find((g) => g.id === selectedTab) || takedownData[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
          <UserX className="w-4 h-4 text-purple-800" />
          <span>{lang === 'en' ? 'Nashik Cyber Cell Emergency Social Guide' : 'नाशिक सायबर सोशल मीडिया मदत'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-mhnavy-950">
          {lang === 'en' ? 'Social Media Impersonation, Hacking & Account Deletion' : 'सोशल मीडिया हॅकिंग, बनावट प्रोफाईल व अकाऊंट डिलीट मार्गदर्शक'}
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'Scanned our QR code for social media problems? Follow these exact step-by-step instructions to get fake accounts removed, recover hacked accounts, or stop intimate photo harassment.'
            : 'क्यूआर कोड स्कॅन करून आला आहात? बनावट अकाऊंट डिलीट करण्यासाठी, हॅक व्हॉट्सॲप परत मिळवण्यासाठी व फोटो हटवण्यासाठी खालील सोप्या पायऱ्या वापरा.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {takedownData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedTab(item.id)}
            className={`p-4 rounded-2xl border text-left transition font-bold text-xs sm:text-sm flex flex-col justify-between space-y-2 ${
              selectedTab === item.id
                ? 'bg-mhnavy-900 text-mhgold-400 border-mhnavy-900 shadow-md'
                : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{item.platform}</span>
              {item.urgency === 'CRITICAL' && (
                <span className="px-1.5 py-0.5 rounded text-[9px] bg-red-600 text-white">Critical</span>
              )}
            </div>
            <span className="line-clamp-2 leading-tight">
              {lang === 'en' ? item.title : item.titleMr || item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Active Guide Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {currentGuide.platform} Guide
            </span>
            <h2 className="text-2xl font-extrabold text-mhnavy-950 mt-0.5">
              {lang === 'en' ? currentGuide.title : currentGuide.titleMr || currentGuide.title}
            </h2>
          </div>

          {currentGuide.officialLink && (
            <a
              href={currentGuide.officialLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-mhnavy-900 text-white font-bold text-xs hover:bg-mhnavy-800 transition shrink-0"
            >
              <span>{currentGuide.officialLinkLabel}</span>
              <ExternalLink className="w-3.5 h-3.5 text-mhgold-400" />
            </a>
          )}
        </div>

        {/* Steps List */}
        <div className="space-y-4">
          <h3 className="font-extrabold text-mhnavy-950 text-base uppercase tracking-wider text-xs">
            {lang === 'en' ? 'Step-by-Step Takedown Instructions:' : 'पायरी-पायरी कारवाई मार्गदर्शक:'}
          </h3>

          <div className="space-y-3">
            {currentGuide.steps.map((st, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-mhnavy-900 text-mhgold-400 font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    {st.step}
                  </span>
                  <h4 className="font-bold text-mhnavy-950 text-sm sm:text-base">
                    {lang === 'en' ? st.title : st.titleMr || st.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nashik Police Takedown Support Note */}
        <div className="p-4 rounded-2xl bg-mhnavy-900 text-white text-xs space-y-2">
          <span className="font-bold text-mhgold-400 block uppercase tracking-wider">
            {lang === 'en' ? 'Nashik Cyber Police Support:' : 'नाशिक सायबर पोलीस मदत:'}
          </span>
          <p className="text-slate-200 leading-relaxed">
            {lang === 'en'
              ? 'If the fake profile or harassment persists after reporting in-app, visit Nashik City Cyber Police Station (Gangapur Road) with screenshots and profile URLs. Our officers issue direct law enforcement takedown notices under Section 79(3)(b) IT Act to Meta / X nodal officers.'
              : 'ॲपमध्ये रिपोर्ट करूनही फेक प्रोफाईल डिलीट न झाल्यास नाशिक शहर सायबर पोलीस ठाणे (गंगापूर रोड) येथे भेट द्या. पोलीस थेट मेटा किंवा सोशल मीडिया नोडल अधिकाऱ्यांना आयटी कायद्यानुसार खाते हटवण्याची नोटीस पाठवतात.'}
          </p>
        </div>

      </div>

      <DisclaimerNotice />

    </div>
  );
}
