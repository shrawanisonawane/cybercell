import React from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function DisclaimerNotice() {
  const { lang } = useLanguage();

  return (
    <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1">
      <div className="flex items-center gap-1.5 font-bold text-slate-900">
        <Info className="w-4 h-4 text-slate-600 shrink-0" />
        <span>{lang === 'en' ? 'Informational Triage Disclaimer' : 'माहितीत्मक अस्वीकरण'}</span>
      </div>
      <p className="leading-relaxed">
        {lang === 'en'
          ? 'This is an informational assessment based on your selected answers. It is not a legal classification or an official police determination. For an official police assessment or FIR, please file a report through the National Cyber Crime Reporting Portal (cybercrime.gov.in) or contact your nearest Cyber Police Station.'
          : 'हे मूल्यमापन तुम्ही दिलेल्या उत्तरांवर आधारित एक माहितीत्मक अंदाज आहे. हा कोणताही कायदेशीर किंवा पोलीस अधिकृत निष्कर्ष नाही. अधिकृत तक्रारीसाठी किंवा एफआयआरसाठी राष्ट्रीय सायबर गुन्हे नोंदणी पोर्टल (cybercrime.gov.in) वर तक्रार नोंदवा किंवा जवळच्या सायबर पोलीस ठाण्याशी संपर्क साधा.'}
      </p>
    </div>
  );
}
