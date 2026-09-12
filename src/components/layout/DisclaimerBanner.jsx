import React from 'react';
import { AlertCircle, ExternalLink, PhoneCall } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function DisclaimerBanner() {
  const { lang } = useLanguage();

  return (
    <div className="bg-slate-950 text-slate-200 text-xs sm:text-sm py-2.5 px-4 border-b border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 hidden xs:inline" />
          <span>
            {lang === 'en' ? (
              <>
                <strong className="text-amber-400 font-bold">Public Awareness Portal:</strong> Informational site for citizen triage. For official reporting visit{' '}
                <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="text-blue-300 underline hover:text-white font-bold">cybercrime.gov.in</a>
              </>
            ) : (
              <>
                <strong className="text-amber-400 font-bold">जनजागृती पोर्टल:</strong> नागरिकांच्या मदतीसाठी माहितीत्मक व्यासपीठ. अधिकृत तक्रारीसाठी{' '}
                <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="text-blue-300 underline hover:text-white font-bold">cybercrime.gov.in</a> वर जा.
              </>
            )}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0 font-medium">
          <a
            href="tel:1930"
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full font-extrabold text-xs transition shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Helpline 1930' : 'हेल्पलाइन १९३०'}</span>
          </a>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-slate-200 hover:text-amber-400 transition font-bold"
          >
            <span>{lang === 'en' ? 'Official NCRP' : 'एनसीआरपी पोर्टल'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
