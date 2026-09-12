import React, { useState } from 'react';
import {
  PhoneCall, ExternalLink, MapPin, Mail,
  ShieldAlert, Calendar, FileText, Building2
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

      {/* Page Title & Subtitle */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-heading font-bold uppercase tracking-wider border border-red-200">
          <ShieldAlert className="w-4 h-4 text-red-700" />
          <span>{lang === 'mr' ? 'अधिकृत तक्रार व मदतीचा मार्ग' : 'Official Reporting & Help Pathways'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          {lang === 'mr' ? 'सायबर तक्रार नोंदणी केंद्र' : 'Cyber Crime Reporting Hub'}
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed font-normal">
          {lang === 'mr'
            ? 'खालील ५ टप्प्यांचे क्रमाने पालन करा. आर्थिक फसवणुकीसाठी पैसे गोठवण्यासाठी सर्वात आधी १९३० वर किंवा नाशिक पोलीस 0253-2305226 वर कॉल करा.'
            : 'Follow the official 5-stage guidance pathway below. For financial fraud, call 1930 or Nashik Police 0253-2305226 immediately.'}
        </p>
      </div>

      {/* ── NASHIK CYBER CELL DIRECT CONTACT HIGHLIGHT CARD ────── */}
      <div className="p-6 sm:p-8 rounded-3xl bg-blue-50 border border-blue-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xs font-heading font-extrabold uppercase text-blue-900 tracking-wider block">
              {lang === 'mr' ? 'प्राथमिक जिल्हा सायबर मदत डेस्क' : 'Primary District Cyber Desk'}
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
              {lang === 'mr' ? 'नाशिक शहर सायबर पोलीस ठाणे' : 'Nashik City Cyber Police Station'}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {lang === 'mr'
            ? 'गंगापूर रोड, पोलीस आयुक्तालय परिसर, नाशिक - ४२२००२. नाशिक क्षेत्रातील नागरिकांसाठी प्रत्यक्ष मदत, एफआयआर मार्गदर्शन व पुरावे सबमिशनसाठी.'
            : 'Located at Gangapur Road, Police Commissionerate Campus, Nashik - 422002. For in-person victim assistance, FIR filing guidance, or digital evidence submission in Nashik.'}
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

      {/* ── 5-STAGE REPORTING PATHWAY ────────────────────────────── */}
      <div className="space-y-6">
        <h2 className="text-2xl font-heading font-extrabold text-slate-900">
          {lang === 'mr' ? 'क्रमाने करायची तक्रार प्रक्रिया (५ टप्पे)' : 'Staged Reporting Pathway'}
        </h2>

        {/* STAGE 1 — 1930 & NCRP */}
        <div className="p-6 sm:p-8 rounded-3xl bg-red-50 border border-red-200 text-slate-900 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-2xl bg-red-600 text-white font-heading font-extrabold text-2xl flex items-center justify-center shrink-0 shadow-xs">
                1
              </span>
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-red-700 block">
                  {lang === 'mr' ? 'टप्पा १ — तातडीची तक्रार' : 'Stage 1 — Report Immediately'}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  {lang === 'mr' ? '१९३० कॉल व NCRP ऑनलाईन तक्रार' : 'Call 1930 & File on NCRP Portal'}
                </h3>
              </div>
            </div>

            <a
              href="tel:1930"
              id="btn-1930-stage1"
              className="inline-flex items-center gap-2 bg-red-600 text-white font-heading font-extrabold text-lg px-6 py-3 rounded-2xl shadow-xs hover:bg-red-700 transition shrink-0 min-h-[48px]"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              <span>CALL 1930</span>
            </a>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {lang === 'mr'
              ? 'कोणत्याही अनधिकृत ट्रान्झॅक्शनसाठी — आधी १९३० वर किंवा नाशिक सायबर पोलीस 0253-2305226 वर कॉल करा. यामुळे CFCFRMS प्रणालीद्वारे बँक खात्यांमधील पैसे गोठवण्यास मदत होते. तसेच cybercrime.gov.in वर तक्रार नोंदवा.'
              : 'For any unauthorized payment or financial fraud — call Helpline 1930 or Nashik Cyber Police 0253-2305226 immediately. This activates the CFCFRMS system to freeze stolen money in transit across bank accounts. Also register your complaint on cybercrime.gov.in.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-red-200">
            <div className="flex flex-wrap gap-2 text-xs font-heading font-bold">
              <span className="bg-white px-3 py-1 rounded-full border border-red-200 text-slate-900">✔ २४x७ हेल्पलाइन (1930)</span>
              <span className="bg-white px-3 py-1 rounded-full border border-red-200 text-slate-900">✔ नाशिक सायबर: 0253-2305226</span>
              <span className="bg-white px-3 py-1 rounded-full border border-red-200 text-slate-900">✔ मोफत सेवा</span>
            </div>

            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-blue-800 bg-white border border-blue-200 px-4 py-2 rounded-xl hover:bg-blue-50 transition min-h-[40px]"
            >
              <span>{lang === 'mr' ? 'राष्ट्रीय सायबर तक्रार पोर्टल (cybercrime.gov.in)' : 'National Cyber Crime Portal (cybercrime.gov.in)'}</span>
              <ExternalLink className="w-4 h-4 text-blue-700" />
            </a>
          </div>
        </div>

        {/* STAGE 2 — BANK GRIEVANCE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-2xl bg-blue-700 text-white font-heading font-extrabold text-xl flex items-center justify-center shrink-0">
              2
            </span>
            <div>
              <span className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider block">
                {lang === 'mr' ? 'टप्पा २ — बँक / डिजिटल पेमेंट फ्रॉड डेस्क' : 'Stage 2 — Bank / Payment App Desk'}
              </span>
              <h3 className="font-heading font-bold text-slate-900 text-xl">
                {lang === 'mr' ? '३ दिवसांत बँकेला कळवा (आरबीआय नियम)' : 'Notify Your Bank within 3 Days (RBI Zero Liability)'}
              </h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {lang === 'mr'
              ? 'अनधिकृत व्यवहाराची माहिती ३ दिवसांच्या आत आपल्या बँकेत किंवा पेमेंट ॲपमध्ये लेखी स्वरूपात नोंदवा. आरबीआय नियमानुसार ३ दिवसांत कळवल्यास तुमची आर्थिक जबाबदारी राहत नाही.'
              : 'Submit a formal written complaint / fraud form to your bank or payment app (GPay, PhonePe, Paytm, BHIM) within 3 working days. Under RBI guidelines, notifying within 3 days ensures zero financial liability for unauthorized third-party transactions.'}
          </p>
        </div>

        {/* STAGE 3 — RBI OMBUDSMAN */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-2xl bg-blue-700 text-white font-heading font-extrabold text-xl flex items-center justify-center shrink-0">
              3
            </span>
            <div>
              <span className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider block">
                {lang === 'mr' ? 'टप्पा ३ — आरबीआय लोकपाल अपिल' : 'Stage 3 — Escalation'}
              </span>
              <h3 className="font-heading font-bold text-slate-900 text-xl">
                {lang === 'mr' ? 'आरबीआय एकात्मिक लोकपाल कडे अपिल' : 'RBI Integrated Ombudsman ("One Nation One Ombudsman")'}
              </h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {lang === 'mr'
              ? 'जर बँकेने ३० दिवसांच्या आत तुमच्या तक्रारीचे निवारण केले नाही, तर आरबीआयच्या एकात्मिक लोकपाल पोर्टलवर दाद मागा.'
              : 'If your bank or wallet provider does not respond or refuses to resolve your unauthorized debit dispute within 30 days, file an official escalation on the RBI Ombudsman Portal.'}
          </p>
          <a
            href="https://cms.rbi.org.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-blue-800 bg-blue-50 border border-blue-200 px-4 py-2.5 rounded-xl hover:bg-blue-100 transition min-h-[40px]"
          >
            <ExternalLink className="w-4 h-4 text-blue-700" />
            <span>cms.rbi.org.in — RBI Complaint Management Portal</span>
          </a>
        </div>

        {/* STAGE 4 — SANCHAR SAATHI */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-2xl bg-blue-700 text-white font-heading font-extrabold text-xl flex items-center justify-center shrink-0">
              4
            </span>
            <div>
              <span className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider block">
                {lang === 'mr' ? 'टप्पा ४ — मोबाईल व सीम सुरक्षा' : 'Stage 4 — Mobile & SIM Security'}
              </span>
              <h3 className="font-heading font-bold text-slate-900 text-xl">
                {lang === 'mr' ? 'संचार साथी पोर्टल (फोन व सीम सुरक्षा)' : 'Sanchar Saathi Portal (DoT Mobile Protection)'}
              </h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {lang === 'mr'
              ? 'फोन चोरीला गेला असल्यास किंवा सीम फसवणूक झाली असल्यास: संचार साथी पोर्टलद्वारे आयएमईआय ब्लॉक करा व नाव नोंदणीकृत सीम कार्ड तपासा.'
              : 'For lost/stolen mobile phones or SIM swap fraud: Use DoT Sanchar Saathi to instantly block stolen device IMEI (CEIR) and check mobile connections registered in your name (TAFCOP).'}
          </p>
          <a
            href="https://sancharsaathi.gov.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-blue-800 bg-blue-50 border border-blue-200 px-4 py-2.5 rounded-xl hover:bg-blue-100 transition min-h-[40px]"
          >
            <ExternalLink className="w-4 h-4 text-blue-700" />
            <span>sancharsaathi.gov.in — Sanchar Saathi Portal</span>
          </a>
        </div>

        {/* STAGE 5 — STATUS TRACKING */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-2xl bg-blue-700 text-white font-heading font-extrabold text-xl flex items-center justify-center shrink-0">
              5
            </span>
            <div>
              <span className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider block">
                {lang === 'mr' ? 'टप्पा ५ — तक्रारीची स्थिती तपासा' : 'Stage 5 — Track Complaint Status'}
              </span>
              <h3 className="font-heading font-bold text-slate-900 text-xl">
                {lang === 'mr' ? 'तुमच्या तक्रारीची सद्यस्थिती पाहा' : 'Check Your Existing Complaint Status'}
              </h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {lang === 'mr'
              ? 'तुम्ही आधीच १९३० किंवा NCRP वर तक्रार दाखल केली आहे का? अधिकृत पोर्टलवर पोच पावती क्रमांकाने स्थिती तपासा.'
              : 'Already filed a complaint on National Cyber Crime Portal or 1930? Track your case status using your Acknowledgement Number on the official NCRP portal.'}
          </p>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noreferrer"
            id="btn-track-status"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl hover:bg-emerald-100 transition shadow-xs min-h-[40px]"
          >
            <FileText className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'mr' ? 'तक्रारीची स्थिती तपासा (cybercrime.gov.in) →' : 'Track Complaint Status on cybercrime.gov.in →'}</span>
          </a>
        </div>

      </div>

      {/* ── DISTRICT CYBER CELL CONTACT FINDER ─────────────────── */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-700" />
            <h2 className="text-2xl font-heading font-extrabold text-slate-900">
              {lang === 'mr' ? 'जिल्हा सायबर पोलीस ठाणे संपर्क सूची' : 'District Cyber Police Station Directory'}
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

              {/* Verified Trust Signal Badge */}
              <div className="inline-flex items-center gap-1.5 bg-white border border-blue-200 px-3 py-1.5 rounded-full text-xs text-slate-700 font-heading font-bold shrink-0">
                <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'mr' ? `सत्यापित दिनांक: ${activeContact.lastVerified}` : `Verified on ${activeContact.lastVerified}`}</span>
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

              <div className="space-y-3 bg-white p-4 rounded-2xl border border-blue-100">
                <span className="text-xs font-heading font-bold text-blue-900 uppercase tracking-wider block">
                  {lang === 'mr' ? 'अधिकृत संकेतस्थळ:' : 'Official Portal Link:'}
                </span>
                <a
                  href={activeContact.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-heading font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition min-h-[40px]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{activeContact.officialUrl.replace('https://', '')}</span>
                </a>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  {lang === 'mr'
                    ? 'डिजिटल पुरावे व तक्रारी थेट जिल्हा पोर्टलवर सबमिट करा.'
                    : 'Submit digital evidence or register grievances directly on the district portal.'}
                </p>
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
