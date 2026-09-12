import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Clock, PhoneCall, ExternalLink, FileText, CheckCircle2, Lock, Smartphone, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import DisclaimerNotice from '../components/shared/DisclaimerNotice';

export default function VictimGuide() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-red-700" />
          <span>{lang === 'en' ? 'Universal Citizen Recovery Protocol' : 'सार्वत्रिक नागरिक मदत प्रोटोकॉल'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-mhnavy-950">
          {lang === 'en' ? 'What To Do If You Are a Cyber Crime Victim' : 'सायबर फसवणूक झाल्यावर तातडीने काय करावे?'}
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'General incident-agnostic emergency checklist. Follow these prioritized steps regardless of the specific cyber crime type.'
            : 'कोणत्याही प्रकारची सायबर फसवणूक झाल्यास पाळावयाची तातडीची सार्वत्रिक पायरी-पायरी मार्गदर्शिका.'}
        </p>
      </div>

      {/* Golden Hour Priority Timeline Box */}
      <div className="bg-gradient-to-r from-red-950 to-mhnavy-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-mhgold-400 text-xs font-bold uppercase tracking-wider">
          <Clock className="w-4 h-4" />
          <span>{lang === 'en' ? 'Time-Critical Timeline' : 'वेळेचे महत्त्व'}</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white">
          {lang === 'en' ? 'Phase 1: First 0 to 2 Hours (Golden Hour)' : 'टप्पा १: पहिले ० ते २ तास (गोल्डन अवर)'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'For unauthorized transactions, call 1930 immediately. Every minute saved increases the probability of freezing the fraudster’s mule account before cash is withdrawn at ATMs.'
            : 'अनधिकृत व्यवहार झाल्यास १९३० वर त्वरित कॉल करा. जेवढ्या लवकर कॉल कराल तेवढे पैसे परत मिळण्याची शक्यता जास्त असते.'}
        </p>

        <div className="pt-2 flex items-center gap-3">
          <a
            href="tel:1930"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow transition"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call 1930 Helpline</span>
          </a>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-mhnavy-900 hover:bg-mhnavy-800 text-white font-bold text-xs px-5 py-3 rounded-xl border border-mhnavy-700 transition"
          >
            <ExternalLink className="w-4 h-4 text-mhgold-400" />
            <span>NCRP Portal (cybercrime.gov.in)</span>
          </a>
        </div>
      </div>

      {/* Step-by-Step Universal Checklist */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-mhnavy-950">
          {lang === 'en' ? 'Step-by-Step Recovery Checklist' : 'पायरी-पायरी कृती आराखडा'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-mhnavy-900 text-mhgold-400 font-bold text-sm flex items-center justify-center">1</span>
              <h3 className="font-bold text-mhnavy-950 text-base">
                {lang === 'en' ? 'Isolate & Freeze Financial Channels' : 'बँक खाती तात्पुरती ब्लॉक करा'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Contact your bank customer care to freeze compromised credit/debit cards, UPI IDs, or net banking access to stop recurring deductions.'
                : 'अनधिकृत व्यवहार सुरू राहू नये म्हणून डेबिट कार्ड, यूपीआय व नेट बँकिंग ब्लॉक करा.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-mhnavy-900 text-mhgold-400 font-bold text-sm flex items-center justify-center">2</span>
              <h3 className="font-bold text-mhnavy-950 text-base">
                {lang === 'en' ? 'Preserve All Digital Evidence' : 'सर्व पुरावे सुरक्षित जतन करा'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Take full-screen screenshots of transaction SMS, UPI UTR numbers, WhatsApp chats, fake web URLs, and phone call logs. Do NOT delete messages.'
                : 'मेसेज, व्हॉट्सॲप चॅट, यूपीआय ट्रान्झॅक्शन आयडीचे स्क्रीनशॉट्स घ्या. मेसेज डिलीट करू नका.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-mhnavy-900 text-mhgold-400 font-bold text-sm flex items-center justify-center">3</span>
              <h3 className="font-bold text-mhnavy-950 text-base">
                {lang === 'en' ? 'Secure Affected Devices' : 'मोबाईल / संगणक सुरक्षित करा'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'If remote apps (AnyDesk) or APK files were installed, turn off Wi-Fi/data instantly and uninstall the suspicious software.'
                : 'स्क्रीन शेअरिंग ॲप्स डाऊनलोड केले असल्यास फोनचा डाटा बंद करून ॲप्स काढून टाका.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-mhnavy-900 text-mhgold-400 font-bold text-sm flex items-center justify-center">4</span>
              <h3 className="font-bold text-mhnavy-950 text-base">
                {lang === 'en' ? 'File Written Bank Dispute (Within 3 Days)' : 'बँकेत ३ दिवसांत लेखी तक्रार द्या'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Submit a formal written dispute with your home bank branch within 72 hours to invoke RBI Zero Liability Protection.'
                : 'आरबीआय नियमांनुसार शून्य जबाबदारी संरक्षणाचा लाभ घेण्यासाठी ३ दिवसांत बँकेत लेखी अर्ज द्या.'}
            </p>
          </div>

        </div>
      </div>

      <DisclaimerNotice />

    </div>
  );
}
