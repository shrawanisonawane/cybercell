import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, PhoneCall, AlertTriangle, Search, ChevronRight, IndianRupee, MessageSquare, AlertCircle, Smartphone, Lock, UserX, CreditCard, ShieldAlert, Briefcase, ShoppingBag, Cpu, ArrowRight, Building2, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import incidentsData from '../data/incidents.json';

const categoryIcons = {
  upi_fraud: IndianRupee,
  investment_scam: AlertTriangle,
  financial_fraud: CreditCard,
  phishing: Lock,
  account_takeover: ShieldAlert,
  fake_social_profile: UserX,
  identity_photo_misuse: UserX,
  sextortion: AlertCircle,
  online_harassment: MessageSquare,
  job_scam: Briefcase,
  shopping_fraud: ShoppingBag,
  loan_app_fraud: Smartphone,
  malware_apk: Cpu,
  sim_mobile_fraud: Smartphone,
  crypto_fraud: Lock,
  other: Shield
};

// Visual Badges with colors & illustrations for quick visual identification
const categoryVisualBadges = {
  upi_fraud: { bg: 'bg-emerald-50 border-emerald-200 text-emerald-800', iconBg: 'bg-emerald-600 text-white', labelMr: '💸 बँक / GPay फसवणूक', labelEn: '💸 Bank / UPI Fraud' },
  investment_scam: { bg: 'bg-amber-50 border-amber-200 text-amber-900', iconBg: 'bg-amber-600 text-white', labelMr: '📈 शेअर मार्केट घोटाळा', labelEn: '📈 Investment Scam' },
  financial_fraud: { bg: 'bg-blue-50 border-blue-200 text-blue-900', iconBg: 'bg-blue-600 text-white', labelMr: '💳 एटीएम / क्रेडिट कार्ड', labelEn: '💳 Card & Banking' },
  phishing: { bg: 'bg-indigo-50 border-indigo-200 text-indigo-900', iconBg: 'bg-indigo-600 text-white', labelMr: '🔗 बनावट मेसेज / लिंक', labelEn: '🔗 Fake Links & OTP' },
  account_takeover: { bg: 'bg-purple-50 border-purple-200 text-purple-900', iconBg: 'bg-purple-600 text-white', labelMr: '🔐 अकाऊंट हॅक', labelEn: '🔐 Account Hacked' },
  fake_social_profile: { bg: 'bg-pink-50 border-pink-200 text-pink-900', iconBg: 'bg-pink-600 text-white', labelMr: '👤 बनावट प्रोफाइल', labelEn: '👤 Fake Profile' },
  identity_photo_misuse: { bg: 'bg-rose-50 border-rose-200 text-rose-900', iconBg: 'bg-rose-600 text-white', labelMr: '📷 फोटोचा गैरवापर', labelEn: '📷 Photo Misuse' },
  sextortion: { bg: 'bg-red-50 border-red-200 text-red-900', iconBg: 'bg-red-600 text-white', labelMr: '🚨 व्हिडिओ कॉल ब्लॅकमेल', labelEn: '🚨 Sextortion Call' },
  online_harassment: { bg: 'bg-orange-50 border-orange-200 text-orange-900', iconBg: 'bg-orange-600 text-white', labelMr: '🛑 ऑनलाईन छळ', labelEn: '🛑 Online Harassment' },
  job_scam: { bg: 'bg-teal-50 border-teal-200 text-teal-900', iconBg: 'bg-teal-600 text-white', labelMr: '💼 बनावट नोकरी ऑफर', labelEn: '💼 Fake Job Scam' },
  shopping_fraud: { bg: 'bg-cyan-50 border-cyan-200 text-cyan-900', iconBg: 'bg-cyan-600 text-white', labelMr: '🛍️ बनावट खरेदी वेबसाईट', labelEn: '🛍️ Shopping Scam' },
  loan_app_fraud: { bg: 'bg-red-50 border-red-300 text-red-950', iconBg: 'bg-red-700 text-white', labelMr: '📱 बनावट लोन ॲप त्रास', labelEn: '📱 Fake Loan App' },
  malware_apk: { bg: 'bg-slate-100 border-slate-300 text-slate-900', iconBg: 'bg-slate-700 text-white', labelMr: '🤖 व्हायरस ॲप (APK)', labelEn: '🤖 Virus APK App' },
  sim_mobile_fraud: { bg: 'bg-amber-50 border-amber-300 text-amber-950', iconBg: 'bg-amber-700 text-white', labelMr: '📲 सीम ब्लॉक / स्वाप', labelEn: '📲 SIM Fraud' },
  crypto_fraud: { bg: 'bg-yellow-50 border-yellow-300 text-yellow-950', iconBg: 'bg-yellow-700 text-white', labelMr: '🪙 क्रिप्टो फसवणूक', labelEn: '🪙 Crypto Scam' },
  other: { bg: 'bg-blue-50 border-blue-200 text-blue-900', iconBg: 'bg-blue-700 text-white', labelMr: '🛡️ इतर सायबर मदत', labelEn: '🛡️ Other Fraud Help' }
};

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-16 font-sans">

      {/* ── 1. EMERGENCY HELPLINE STRIP (Solid Red Emergency Bar) ───────────────── */}
      <div className="bg-red-600 text-white py-3.5 px-4 shadow-sm sticky top-[4rem] sm:top-[5rem] z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-heading font-extrabold tracking-wide text-white">
                {lang === 'mr'
                  ? 'पैसे चोरीला गेले असल्यास आत्ताच १९३० सायबर हेल्पलाईनवर कॉल करा'
                  : 'Money Stolen? Call 1930 Cyber Crime Helpline Immediately'}
              </p>
              <p className="text-xs text-red-100 hidden sm:block font-medium">
                {lang === 'mr'
                  ? 'नाशिक शहर सायबर पोलीस ठाणे थेट फोन: 0253-2305226 (२४x७ मदतीसाठी)'
                  : 'Nashik City Cyber Police Station Direct Desk: 0253-2305226 (Available 24x7)'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:02532305226"
              className="bg-blue-900 hover:bg-blue-950 text-white font-heading font-bold text-xs px-3.5 py-2.5 rounded-full shadow-sm transition flex items-center gap-1.5 min-h-[44px]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>0253-2305226</span>
            </a>
            <a
              href="tel:1930"
              className="bg-white text-red-700 hover:bg-red-50 font-heading font-extrabold text-xs px-4 py-2.5 rounded-full shadow-sm transition flex items-center gap-1.5 min-h-[44px]"
            >
              <span>{lang === 'mr' ? '१९३० कॉल करा' : 'CALL 1930 NOW'}</span>
              <ChevronRight className="w-4 h-4 text-red-700" />
            </a>
          </div>
        </div>
      </div>

      {/* ── 2. HERO SECTION (Solid Off-White Background & Deep Blue Text) ─────── */}
      <section className="bg-slate-50 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">

          {/* Focused Agency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-heading font-extrabold uppercase tracking-wider shadow-xs">
            <Award className="w-4 h-4 text-blue-700" />
            <span>{lang === 'mr' ? 'नाशिक शहर सायबर पोलीस ठाणे • नाशिक सायबर सेल' : 'Nashik City Cyber Police Station • Cyber Cell Nashik'}</span>
          </div>

          {/* Main Headline — Primary Language Marathi */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 leading-tight">
            {lang === 'mr' ? (
              <>सायबर फसवणूक झाली आहे? <br/><span className="text-blue-800">नाशिक सायबर सेलचे तातडीने मार्गदर्शन मिळवा.</span></>
            ) : (
              <>Victim of Cyber Fraud? <br/><span className="text-blue-800">Get Immediate Nashik Cyber Cell Guidance.</span></>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            {lang === 'mr'
              ? 'नाशिक जिल्हा नागरिकांसाठी चित्रांच्या सहाय्याने अत्यंत सोपे व अधिकृत मार्गदर्शन. लॉगीनची गरज नाही. काय घडले, आत्ता काय करावे आणि कुठे तक्रार करावी हे त्वरित जाणून घ्या.'
              : 'Simple visual step-by-step guidance for citizens of Nashik district. No login required. Discover what happened, what to do right now, and how to file your report.'}
          </p>

          {/* TWO PRIMARY VISUAL CTA CARDS (Pictures & Icons for Easy Identification) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-4 text-left">
            
            {/* CTA 1: What Happened To Me? (Visual Guided Assessment) */}
            <Link
              to="/what-happened-to-me"
              id="cta-what-happened"
              className="group relative bg-blue-700 hover:bg-blue-800 text-white p-6 sm:p-7 rounded-3xl shadow-md border border-blue-600 transition-all duration-200 flex flex-col justify-between min-h-[230px] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center shadow-xs">
                    <AlertTriangle className="w-8 h-8 text-amber-300" />
                  </div>
                  <span className="bg-amber-400 text-slate-950 font-heading font-extrabold text-xs px-3 py-1 rounded-full shadow-xs">
                    {lang === 'mr' ? '२ मिनिटांत मार्गदर्शन' : '2 Min Triage'}
                  </span>
                </div>

                <h2 className="text-2xl font-heading font-extrabold tracking-tight mb-2 text-white">
                  {lang === 'mr' ? 'माझ्यासोबत काय घडले?' : 'What Happened To Me?'}
                </h2>
                <p className="text-sm leading-relaxed font-medium text-blue-100">
                  {lang === 'mr'
                    ? '२-३ चित्रांवर क्लिक करून तुमच्या फसवणुकीचे स्वरूप, धोका पातळी व तातडीने करायचे उपाय जाणून घ्या.'
                    : 'Tap visual picture options to immediately assess your incident, risk level, and emergency steps.'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between font-heading font-bold text-sm text-amber-300">
                <span>{lang === 'mr' ? 'चित्रांद्वारे मार्गदर्शन सुरू करा →' : 'Start Visual Assessment →'}</span>
                <div className="w-8 h-8 rounded-full bg-white text-blue-800 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-blue-800" />
                </div>
              </div>
            </Link>

            {/* CTA 2: Browse All Cyber Incidents (Visual Library) */}
            <Link
              to="/explorer"
              id="cta-browse-explorer"
              className="group relative bg-white hover:bg-blue-50/50 text-slate-900 p-6 sm:p-7 rounded-3xl shadow-xs border border-slate-200 transition-all duration-200 flex flex-col justify-between min-h-[230px] focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                    <Search className="w-8 h-8 text-blue-800" />
                  </div>
                  <span className="bg-blue-100 text-blue-900 border border-blue-200 font-heading font-bold text-xs px-3 py-1 rounded-full">
                    {lang === 'mr' ? '१६ प्रकार उपलब्ध' : '16 Types'}
                  </span>
                </div>

                <h2 className="text-2xl font-heading font-extrabold tracking-tight mb-2 text-slate-900">
                  {lang === 'mr' ? 'सायबर गुन्हे प्रकार पहा' : 'Explore Cyber Incidents'}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {lang === 'mr'
                    ? '१६ प्रमुख सायबर फसवणूक प्रकार, चित्रांच्या सहाय्याने ओळखा, धोक्याचे संकेत व सुरक्षिततेचे नियम पहा.'
                    : 'Browse 16 visual fraud types, warning signals, evidence collection guides, and safety rules.'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-heading font-bold text-sm text-blue-800">
                <span>{lang === 'mr' ? 'सर्व गुन्हे प्रकार पहा →' : 'Explore Incident Library →'}</span>
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-blue-800" />
                </div>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* ── 3. VISUAL CATEGORY GRID (Pictures & Icons for Easy Identification) ────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full text-blue-900 text-xs font-heading font-extrabold">
            <span>{lang === 'mr' ? 'चित्र ओळखून क्लिक करा' : 'Tap Visual Picture Cards'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
            {lang === 'mr' ? 'प्रमुख सायबर गुन्हे व मार्गदर्शक माहिती' : 'Common Cyber Crimes & Guidance'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
            {lang === 'mr'
              ? 'खालीलपैकी तुमच्यासोबत घडलेल्या प्रकाराच्या चित्रावर क्लिक करा व तातडीने करायचे उपाय जाणून घ्या.'
              : 'Select any visual incident card below to view immediate action checklists curated by Cyber Police Nashik.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {incidentsData.map((incident) => {
            const IconComp = categoryIcons[incident.id] || Shield;
            const visual = categoryVisualBadges[incident.id] || {
              bg: 'bg-blue-50 border-blue-200 text-blue-900',
              iconBg: 'bg-blue-700 text-white',
              labelMr: incident.titleMr || incident.title,
              labelEn: incident.title
            };

            const riskColor = incident.riskLevelDefault === 'HIGH'
              ? 'bg-red-50 text-red-700 border-red-200'
              : incident.riskLevelDefault === 'MEDIUM'
              ? 'bg-amber-50 text-amber-800 border-amber-200'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200';

            return (
              <Link
                key={incident.id}
                to={`/explorer/${incident.id}`}
                className="group bg-slate-50 hover:bg-blue-50/70 p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 transition-all duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <div>
                  {/* Big Visual Header Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`w-12 h-12 rounded-2xl ${visual.iconBg} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-heading font-bold px-2.5 py-0.5 rounded-full border ${riskColor}`}>
                      {incident.riskLevelDefault} RISK
                    </span>
                  </div>

                  {/* Prominent Visual Category Badge */}
                  <div className={`inline-block px-3 py-1 rounded-xl text-xs font-heading font-extrabold border mb-2.5 ${visual.bg}`}>
                    {lang === 'mr' ? visual.labelMr : visual.labelEn}
                  </div>

                  <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-blue-800 transition leading-snug mb-1">
                    {lang === 'mr' ? (incident.titleMr || incident.title) : incident.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {lang === 'mr' ? (incident.shortSummaryMr || incident.shortSummary) : incident.shortSummary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-heading font-bold text-blue-800">
                  <span>{lang === 'mr' ? 'माहिती व उपाय पहा →' : 'View Details & Action →'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 4. CITIZEN REASSURANCE & NASHIK CYBER CELL INFO ───────────────────── */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl text-xs sm:text-sm text-slate-700 leading-relaxed font-medium space-y-3 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-900 font-heading font-bold text-sm sm:text-base">
            <Building2 className="w-5 h-5 text-blue-800 shrink-0" />
            <span>{lang === 'mr' ? 'नाशिक शहर सायबर पोलीस ठाणे — अधिकृत नागरिक मदत केंद्र' : 'Nashik City Cyber Police Station — Official Citizen Advisory'}</span>
          </div>
          
          <p>
            {lang === 'mr'
              ? 'हे पोर्टल नाशिक जिल्ह्यातील नागरिकांच्या सायबर सुरक्षिततेसाठी आहे. येथे कोणतीही वैयक्तिक माहिती साठवली जात नाही. अधिकृत एफआयआर नोंदवण्यासाठी १९३० वर कॉल करा किंवा सायबर पोलीस ठाणे, गंगापूर रोड, नाशिक (फोन: 0253-2305226) येथे संपर्क साधा.'
              : 'This portal is run for public cyber awareness and victim guidance in Nashik District. No personal case records or victim details are collected here. For official FIR filing or lodging formal complaints, call 1930 or contact Cyber Police Station, Gangapur Road, Nashik (Phone: 0253-2305226).'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 font-semibold border-t border-slate-200">
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> {lang === 'mr' ? 'कोणत्याही लॉगीनची गरज नाही' : 'No Account Needed'}</span>
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> {lang === 'mr' ? '१००% मोफत व सुरक्षित' : '100% Free Public Portal'}</span>
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> {lang === 'mr' ? 'अधिकृत पोलीस मार्गदर्शन' : 'Official Police Guidelines'}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
