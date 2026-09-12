import React from 'react';
import { ExternalLink, Search, CheckCircle2, ShieldAlert, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import DisclaimerNotice from '../components/shared/DisclaimerNotice';

export default function GrievanceHelp() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mhnavy-100 text-mhnavy-900 text-xs font-bold uppercase tracking-wider">
          <Search className="w-4 h-4 text-mhnavy-800" />
          <span>{lang === 'en' ? 'Complaint Tracking Signpost' : 'तक्रारीची स्थिती तपासणे'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-mhnavy-950">
          {lang === 'en' ? 'How to Check Your Complaint / GRM Status' : 'तुमच्या तक्रारीची स्थिती कशी पाहावी?'}
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'This portal provides triage and guidance only. To check the live status of an existing complaint or FIR, visit the official government portals below.'
            : 'ही वेबसाईट केवळ जनजागृती व मार्गदर्शनासाठी आहे. तुमच्या जुन्या तक्रारीची स्थिती पाहण्यासाठी खालील अधिकृत पोर्टल्सवर जा.'}
        </p>
      </div>

      {/* Official Signposts */}
      <div className="space-y-6">
        
        {/* NCRP Tracking */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="font-extrabold text-mhnavy-950 text-lg">
              1. Track National Cyber Crime Portal (NCRP) Complaint
            </h2>
            <span className="px-2.5 py-1 rounded text-xs font-bold bg-mhnavy-50 text-mhnavy-800">
              NCRP Complaint ID Required
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            If you filed a complaint online via 1930 Helpline or cybercrime.gov.in, you received an acknowledgment number via SMS (e.g. 2190XXXXXXXXXX).
          </p>

          <ol className="space-y-2 text-xs text-slate-700">
            <li>1. Visit <strong>cybercrime.gov.in</strong></li>
            <li>2. Click on <strong>'Track Your Complaint'</strong> in the top menu.</li>
            <li>3. Enter your Acknowledgment Number and Mobile Number.</li>
            <li>4. Submit the OTP sent to your phone to view live police investigation status.</li>
          </ol>

          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-mhnavy-900 text-white font-bold text-xs hover:bg-mhnavy-800 transition"
          >
            <span>Go to Official NCRP Track Status Page →</span>
            <ExternalLink className="w-4 h-4 text-mhgold-400" />
          </a>
        </div>

        {/* RBI Ombudsman Tracking */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="font-extrabold text-mhnavy-950 text-lg">
              2. Track RBI Integrated Ombudsman Complaint
            </h2>
            <span className="px-2.5 py-1 rounded text-xs font-bold bg-mhnavy-50 text-mhnavy-800">
              RBI CMS Reference Number Required
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            If you lodged an escalation dispute against your bank with the Reserve Bank of India Ombudsman on cms.rbi.org.in.
          </p>

          <a
            href="https://cms.rbi.org.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-mhnavy-900 text-white font-bold text-xs hover:bg-mhnavy-800 transition"
          >
            <span>Go to RBI CMS Portal →</span>
            <ExternalLink className="w-4 h-4 text-mhgold-400" />
          </a>
        </div>

      </div>

      <DisclaimerNotice />

    </div>
  );
}
