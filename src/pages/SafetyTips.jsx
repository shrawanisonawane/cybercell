import React, { useState } from 'react';
import { ShieldCheck, GraduationCap, UserCheck, Briefcase, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import safetyData from '../data/safety-tips.json';

export default function SafetyTips() {
  const { lang } = useLanguage();
  const [activeAudience, setActiveAudience] = useState('students');

  const currentAudience = safetyData.find((a) => a.audienceId === activeAudience) || safetyData[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-800" />
          <span>{lang === 'en' ? 'Preventive Cyber Hygiene' : 'सायबर सुरक्षा टिप्स'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-mhnavy-950">
          {lang === 'en' ? 'Cyber Safety Tips by Audience' : 'नागरिकांच्या गटानुसार सायबर सुरक्षा सल्ला'}
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'Actionable preventive advice tailored for students, senior citizens, working professionals, and parents.'
            : 'विद्यार्थी, ज्येष्ठ नागरिक, नोकरदार आणि पालकांसाठी आवश्यक सुरक्षा उपाय.'}
        </p>
      </div>

      {/* Audience Selector Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 border-b border-slate-200">
        {safetyData.map((aud) => (
          <button
            key={aud.audienceId}
            onClick={() => setActiveAudience(aud.audienceId)}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition whitespace-nowrap flex items-center gap-2 ${
              activeAudience === aud.audienceId
                ? 'bg-mhnavy-900 text-mhgold-400 shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>{lang === 'en' ? aud.title : aud.titleMr || aud.title}</span>
          </button>
        ))}
      </div>

      {/* Tips Cards */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="space-y-1 border-b border-slate-100 pb-4">
          <h2 className="text-xl font-extrabold text-mhnavy-950">
            {lang === 'en' ? currentAudience.title : currentAudience.titleMr || currentAudience.title}
          </h2>
          <p className="text-xs text-slate-500">
            {lang === 'en' ? currentAudience.description : currentAudience.descriptionMr}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentAudience.tips.map((tip, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <h3 className="font-bold text-mhnavy-950 text-base">
                  {lang === 'en' ? tip.heading : tip.headingMr || tip.heading}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-7">
                {tip.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
