import React, { useState } from 'react';
import {
  PhoneCall, ExternalLink, MapPin, Mail,
  ShieldAlert, ShieldCheck, ShieldX, Building2,
  Smartphone, AlertTriangle, FileCheck, CheckCircle2, XCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import DisclaimerNotice from '../components/shared/DisclaimerNotice';
import contactsData from '../data/reporting-contacts.json';

export default function Report() {
  const { lang } = useLanguage();
  const [selectedDistrictId, setSelectedDistrictId] = useState('nashik_city');

  const activeContact = contactsData.districtContacts.find((c) => c.id === selectedDistrictId) || contactsData.districtContacts[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 min-h-screen bg-white text-slate-900 font-sans">

      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-heading font-bold uppercase tracking-wider border border-blue-200">
          <ShieldAlert className="w-4 h-4 text-blue-700" />
          <span>{lang === 'mr' ? 'नागरिक मार्गदर्शन व कायदा सहाय्य' : 'Citizen Guidance & Victim Support'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          {lang === 'mr' ? 'काय करावे आणि काय करू नये' : 'What To Do & What NOT To Do'}
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed font-normal">
          {lang === 'mr'
            ? 'सायबर फसवणूक किंवा संशयास्पद मेसेज आल्यास नागरिकांनी काय खबरदारी घ्यावी आणि चक्षू (Chakshu) / संचार साथी ॲपद्वारे कशी मदत घ्यावी याचे सविस्तर मार्गदर्शन.'
            : 'Step-by-step victim guidance, essential Do’s and Don’ts, and official citizen prevention applications like Chakshu (Sanchar Saathi).'}
        </p>
      </div>

      {/* ── CRITICAL CLARIFICATION BOX — POLICE OFFICER REPORTING ── */}
      <div className="p-6 sm:p-7 rounded-3xl bg-amber-50 border-2 border-amber-300 text-amber-950 shadow-xs space-y-3">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0" />
          <h2 className="text-lg sm:text-xl font-heading font-extrabold text-amber-950">
            {lang === 'mr' ? 'महत्त्वाची नोंद: शासकीय पोलीस तक्रार प्रक्रिया' : 'Important Note: Official Police Reporting Process'}
          </h2>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-amber-900 font-medium">
          {lang === 'mr'
            ? 'अधिकृत शासकीय सायबर पोलीस पोर्टलवरून तक्रार / एफआयआर (FIR) नोंदवण्याची प्रक्रिया ही केवळ अधिकृत पोलीस अधिकाऱ्यांमार्फत केली जाते. नागरिकांनी १९३० वर कॉल केल्यास किंवा नाशिक सायबर पोलीस ठाण्यात (0253-2305226) संपर्क साधल्यास पोलीस अधिकारी तक्रार नोंदवून कारवाई करतात. नागरिक स्वतः "चक्षू" (Chakshu) व "संचार साथी" (Sanchar Saathi) ॲपवरून संशयास्पद कॉल्स व हरवलेले मोबाईल रिपोर्ट करू शकतात.'
            : 'Official cybercrime reporting & FIR registration on government police portals is conducted exclusively by authorized Police Officers. When citizens call 1930 Helpline or contact Nashik Cyber Police Station (0253-2305226), Police Officers officially record and act on the grievance. Citizens can independently use the Chakshu App and Sanchar Saathi portal to report suspected spam calls and block lost mobile devices.'}
        </p>
      </div>

      {/* ── SECTION 1: CITIZEN PREVENTIVE APPS (CHAKSHU & SANCHAR SAATHI) ── */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-heading font-bold uppercase text-blue-700 tracking-wider block">
            {lang === 'mr' ? 'केंद्र सरकारचे नागरिक सुविधा ॲप्स' : 'Government Citizen Prevention Tools'}
          </span>
          <h2 className="text-2xl font-heading font-extrabold text-slate-900 mt-1">
            {lang === 'mr' ? 'चक्षू (Chakshu) व संचार साथी ॲप्स माहिती' : 'Chakshu & Sanchar Saathi Citizen Apps'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CHAKSHU APP CARD */}
          <div className="p-6 rounded-3xl bg-blue-50/80 border border-blue-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-blue-900 uppercase tracking-wider block">
                    {lang === 'mr' ? 'दूरसंचार विभाग (DoT) सुविधा' : 'Department of Telecom (DoT)'}
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-slate-900">
                    {lang === 'mr' ? '१. चक्षू (Chakshu) पोर्टल व ॲप' : '1. Chakshu (चक्षू) App'}
                  </h3>
                </div>
              </div>

              {/* VINTAGE CARTOON IMAGE FOR CHAKSHU APP */}
              <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xs bg-amber-50/50 p-2 w-full flex items-center justify-center">
                <img
                  src="/cartoons/chakshu_vector.jpg"
                  alt="Chakshu App Vintage Indian Comic Illustration"
                  className="w-full h-auto max-h-[360px] object-contain rounded-xl"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {lang === 'mr'
                  ? 'पैसे गमावण्यापूर्वीच संशयास्पद कॉल्स, फसवणुकीचे व्हॉट्सॲप मेसेज, किंवा मेसेजद्वारे आलेली संशयास्पद लिंक रिपोर्ट करण्यासाठी "चक्षू" ही नागरिकांसाठी अधिकृत प्रणाली आहे.'
                  : 'Report suspected fraudulent calls, fake WhatsApp messages, or phishing SMS BEFORE any financial loss occurs directly on the Chakshu citizen portal.'}
              </p>

              <div className="space-y-2 bg-white p-3.5 rounded-2xl border border-blue-100 text-xs text-slate-800 font-medium">
                <p className="font-bold text-blue-900">{lang === 'mr' ? 'नागरिकांनी काय माहिती द्यावी?' : 'What info to submit?'}</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-700">
                  <li>{lang === 'mr' ? 'संशयास्पद कॉल किंवा मेसेज आलेला नंबर' : 'Suspected Mobile / WhatsApp Number'}</li>
                  <li>{lang === 'mr' ? 'मेसेज / चॅटचा स्क्रीनशॉट' : 'Screenshot of SMS / WhatsApp Chat'}</li>
                  <li>{lang === 'mr' ? 'कॉल / मेसेजची तारीख व वेळ' : 'Date & Time of Communication'}</li>
                </ul>
              </div>
            </div>

            <a
              href="https://sancharsaathi.gov.in/sfc/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between w-full bg-blue-700 hover:bg-blue-800 text-white font-heading font-bold text-xs px-5 py-3 rounded-2xl shadow-xs transition min-h-[44px]"
            >
              <span>{lang === 'mr' ? 'चक्षू (Chakshu) वर रिपोर्ट करा →' : 'Report Fraud Call on Chakshu →'}</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* SANCHAR SAATHI CEIR CARD */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-slate-600 uppercase tracking-wider block">
                    {lang === 'mr' ? 'मोबाईल सुरक्षा पोर्टल' : 'Mobile Security Portal'}
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-slate-900">
                    {lang === 'mr' ? '२. संचार साथी (CEIR & TAFCOP)' : '2. Sanchar Saathi (CEIR)'}
                  </h3>
                </div>
              </div>

              {/* VINTAGE CARTOON IMAGE FOR SANCHAR SAATHI MOBILE LOCK */}
              <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xs bg-amber-50/50 p-2 w-full flex items-center justify-center">
                <img
                  src="/cartoons/step4.jpg"
                  alt="Sanchar Saathi CEIR Mobile Lock Vintage Indian Comic Illustration"
                  className="w-full h-auto max-h-[360px] object-contain rounded-xl"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {lang === 'mr'
                  ? 'मोबाईल चोरीला गेल्यास किंवा हरवल्यास त्याचा आयएमईआय (IMEI) ऑल-इंडिया नेटवर्कवर ब्लॉक करण्यासाठी आणि तुमच्या नावावर किती सीम चालू आहेत हे तपासण्यासाठी.'
                  : 'Instantly block stolen mobile phones across India via IMEI (CEIR) and check unauthorized SIM cards registered under your name (TAFCOP).'}
              </p>

              <div className="space-y-2 bg-white p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-800 font-medium">
                <p className="font-bold text-slate-900">{lang === 'mr' ? 'नागरिक सेवा:' : 'Citizen Services:'}</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-700">
                  <li>{lang === 'mr' ? 'CEIR: चोरीचा मोबाईल ब्लॉक करा' : 'CEIR: Block lost/stolen mobile'}</li>
                  <li>{lang === 'mr' ? 'TAFCOP: नावावरील सीम कार्ड तपासा' : 'TAFCOP: Know your mobile connections'}</li>
                </ul>
              </div>
            </div>

            <a
              href="https://sancharsaathi.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between w-full bg-slate-900 hover:bg-black text-white font-heading font-bold text-xs px-5 py-3 rounded-2xl shadow-xs transition min-h-[44px]"
            >
              <span>{lang === 'mr' ? 'संचार साथी (sancharsaathi.gov.in) →' : 'Visit Sanchar Saathi Portal →'}</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>

        </div>
      </div>

      {/* ── SECTION 2: DO'S AND DON'TS (काय करावे आणि काय करू नये) ── */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-heading font-bold uppercase text-blue-700 tracking-wider block">
            {lang === 'mr' ? 'नागरिकांसाठी आवश्यक मार्गदर्शक नियमावली' : 'Essential Victim Guidelines'}
          </span>
          <h2 className="text-2xl font-heading font-extrabold text-slate-900 mt-1">
            {lang === 'mr' ? 'काय करावे आणि काय करू नये (Do’s & Don’ts)' : 'What To Do & What NOT To Do'}
          </h2>
        </div>

        {/* VINTAGE CARTOON IMAGE FOR DO'S & DON'TS */}
        <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xs bg-amber-50/40 p-2 w-full flex items-center justify-center">
          <img
            src="/cartoons/dont_share_otp.jpg"
            alt="Do's and Don'ts Vintage Indian Comic Illustration"
            className="w-full h-auto max-h-[360px] object-contain rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* WHAT TO DO (DO'S) */}
          <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-emerald-200 pb-3">
              <ShieldCheck className="w-7 h-7 text-emerald-700 shrink-0" />
              <h3 className="text-xl font-heading font-extrabold text-emerald-950">
                {lang === 'mr' ? 'काय करावे (DO’S)' : 'What You MUST Do'}
              </h3>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'आर्थिक फसवणूक झाल्यास पहिल्या तासात १९३० वर किंवा नाशिक सायबर पोलीस 0253-2305226 वर तात्काळ कॉल करा.'
                    : 'Call 1930 Helpline or Nashik Cyber Police 0253-2305226 immediately during the Golden Hour to freeze bank accounts.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'सर्व बँक मेसेज, स्क्रीनशॉट, ट्रान्झॅक्शन आयडी (TxID) व चॅटिंगचे स्क्रीनशॉट सुरक्षित सेव्ह करा.'
                    : 'Preserve all bank SMS alerts, payment transaction IDs (TxID), and WhatsApp screenshots as evidence.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'संशयास्पद कॉल किंवा मेसेज आल्यास पैसे गमावण्याआधीच "चक्षू" (Chakshu) ॲपवर रिपोर्ट करा.'
                    : 'Report suspected spam/fraudulent calls on the official Chakshu (DoT) portal immediately.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'अनधिकृत व्यवहाराची माहिती ३ दिवसांच्या आत आपल्या बँकेत लेखी स्वरूपात द्या (आरबीआय नियम).'
                    : 'Notify your bank in writing within 3 days for zero financial liability under RBI guidelines.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'आपल्या नेटबँकिंग व यूपीआय ॲपचे पासवर्ड त्वरित बदला आणि एटीएम कार्ड ब्लॉक करा.'
                    : 'Immediately change your Netbanking passwords, UPI PINs, and block compromised ATM cards.'}
                </span>
              </li>
            </ul>
          </div>

          {/* WHAT NOT TO DO (DON'TS) */}
          <div className="p-6 rounded-3xl bg-red-50/70 border border-red-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-red-200 pb-3">
              <ShieldX className="w-7 h-7 text-red-700 shrink-0" />
              <h3 className="text-xl font-heading font-extrabold text-red-950">
                {lang === 'mr' ? 'काय करू नये (DON’TS)' : 'What You MUST NOT Do'}
              </h3>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'कोणत्याही अनोळखी व्यक्तीला बँक खात्याची माहिती, OTP, CVV किंवा ATM PIN कधीही सांगू नका.'
                    : 'NEVER share your OTP, Bank account numbers, CVV, or ATM PINs with anyone over the phone.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'अनोळखी मेसेजमधील संशयास्पद लिंक किंवा .APK फाईल्सवर कधीही क्लिक किंवा डाऊनलोड करू नका.'
                    : 'NEVER click unknown links or install unverified .APK files sent via SMS or WhatsApp.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'अनोळखी व्यक्तीच्या सांगण्यावरून AnyDesk, TeamViewer किंवा QuickSupport ॲप डाऊनलोड करू नका.'
                    : 'NEVER install screen-sharing apps (AnyDesk, TeamViewer, QuickSupport) on caller instructions.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'फसलेले पैसे परत मिळवून देण्याच्या नावाखाली भामट्याला पुन्हा कोणतेही पैसे पाठवू नका.'
                    : 'NEVER send advance fees or payments to fraudsters promising to refund lost money.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'mr'
                    ? 'घाबरून जाऊन व्हॉट्सॲप चॅट, कॉल रेकॉर्डिंग किंवा मेसेज डीलीट करू नका.'
                    : 'NEVER delete WhatsApp messages, call logs, or evidence out of panic.'}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── SECTION 3: NASHIK CYBER POLICE & 1930 HELPLINE CONTACT CARD ── */}
      <div className="p-6 sm:p-8 rounded-3xl bg-blue-50 border border-blue-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xs font-heading font-extrabold uppercase text-blue-900 tracking-wider block">
              {lang === 'mr' ? 'अधिकृत सायबर पोलीस मदत डेस्क' : 'Official Cyber Police Station Desk'}
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
              {lang === 'mr' ? 'नाशिक शहर सायबर पोलीस ठाणे' : 'Nashik City Cyber Police Station'}
            </h2>
          </div>
        </div>

        {/* VINTAGE CARTOON IMAGE FOR 1930 HELPLINE & POLICE DESK */}
        <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-xs bg-amber-50/40 p-2 w-full flex items-center justify-center">
          <img
            src="/cartoons/helpline_1930.jpg"
            alt="1930 Emergency Helpline Vintage Indian Comic Illustration"
            className="w-full h-auto max-h-[360px] object-contain rounded-xl"
          />
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {lang === 'mr'
            ? 'गंगापूर रोड, पोलीस आयुक्तालय परिसर, नाशिक - ४२२००२. नागरिकांनी प्रत्यक्ष भेट देऊन पुरावे सादर केल्यास किंवा १९३० वर संपर्क साधल्यास अधिकृत सायबर पोलीस अधिकारी तक्रार नोंदवून कायदेशीर कारवाई करतात.'
            : 'Located at Gangapur Road, Police Commissionerate Campus, Nashik - 422002. Citizens can visit in person or call 1930 Helpline, where authorized Cyber Police Officers officially register complaints and initiate investigation.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-blue-200 text-sm font-heading font-bold text-slate-900">
          <div className="flex items-center gap-2.5">
            <PhoneCall className="w-5 h-5 text-blue-700 shrink-0" />
            <span>0253-2305226 / 0253-2305200</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-blue-700 shrink-0" />
            <a href="mailto:cybercell.nashik@mahapolice.gov.in" className="hover:underline text-blue-800 text-xs sm:text-sm">
              cybercell.nashik@mahapolice.gov.in
            </a>
          </div>
        </div>
      </div>

      {/* ── SECTION 4: DISTRICT CYBER POLICE DIRECTORY ── */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-700" />
            <h2 className="text-2xl font-heading font-extrabold text-slate-900">
              {lang === 'mr' ? 'जिल्हा सायबर पोलीस ठाणे संपर्क सूची' : 'District Cyber Police Directory'}
            </h2>
          </div>
          <p className="text-sm text-slate-600 font-normal">
            {lang === 'mr'
              ? 'तुमचा जिल्हा निवडून स्थानिक सायबर पोलीस स्टेशनचा पत्ता व फोन नंबर मिळवा.'
              : 'Select your district to find the local Cyber Police Station contact details, office address, and official email.'}
          </p>
        </div>

        {/* District Selector Dropdown */}
        <div className="space-y-2">
          <label className="block text-xs font-heading font-bold text-slate-900 uppercase tracking-wider">
            {lang === 'mr' ? 'जिल्हा / शहर निवडा:' : 'Select Maharashtra District / City:'}
          </label>
          <select
            value={selectedDistrictId}
            onChange={(e) => setSelectedDistrictId(e.target.value)}
            className="w-full p-3.5 rounded-2xl border border-slate-300 bg-slate-50 font-heading font-bold text-slate-900 text-base focus:outline-none focus:border-blue-600 shadow-xs min-h-[48px]"
          >
            {contactsData.districtContacts.map((c) => (
              <option key={c.id} value={c.id}>
                {c.district}
              </option>
            ))}
          </select>
        </div>

        {/* Selected Contact Display Card */}
        {activeContact && (
          <div className="bg-blue-50/70 p-6 sm:p-8 rounded-3xl space-y-5 border border-blue-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-200 pb-4">
              <div>
                <span className="text-xs font-heading font-bold text-blue-900 uppercase tracking-wider">
                  {activeContact.district}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 mt-1">
                  {lang === 'mr' ? (activeContact.nameMr || activeContact.name) : activeContact.name}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-900">
              <div className="space-y-3 font-normal">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <span>{activeContact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-blue-700 shrink-0" />
                  <span className="font-heading font-bold text-slate-900">{activeContact.phone.join(' / ')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-700 shrink-0" />
                  <a href={`mailto:${activeContact.email}`} className="hover:text-blue-800 underline text-xs">
                    {activeContact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mandatory Disclaimer */}
      <DisclaimerNotice />

    </div>
  );
}

