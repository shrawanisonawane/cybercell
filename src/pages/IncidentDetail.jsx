import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertTriangle, FileText, PhoneCall, Clock, ChevronRight, HelpCircle, ShieldCheck, ListOrdered, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import incidentsData from '../data/incidents.json';
import RiskBadge from '../components/shared/RiskBadge';
import DisclaimerNotice from '../components/shared/DisclaimerNotice';
import Accordion from '../components/shared/Accordion';

export default function IncidentDetail() {
  const { slug } = useParams();
  const { lang } = useLanguage();

  const incident = incidentsData.find((inc) => inc.id === slug) || incidentsData[0];

  const relatedList = (incident.relatedIncidents || [])
    .map((relId) => incidentsData.find((i) => i.id === relId))
    .filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-screen pb-24 sm:pb-12 font-sans bg-white text-charcoal">
      
      {/* Back Navigation */}
      <Link
        to="/explorer"
        className="inline-flex items-center gap-2 text-sm font-heading font-bold text-charcoal hover:text-lavender-deep transition min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4 text-lavender-deep" />
        <span>{lang === 'en' ? 'Back to All Incidents' : 'गुन्हे प्रकार सूचीकडे मागे जा'}</span>
      </Link>

      {/* Hero Header Card */}
      <div className="bg-white rounded-3xl border border-lavender-100 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-lavender-100 pb-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-lavender-deep uppercase tracking-wider bg-lavender-bg border border-lavender-100 px-3 py-1 rounded-full">
              Category ID: #{incident.id}
            </span>
            <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-charcoal mt-2 leading-tight">
              {lang === 'en' ? incident.title : incident.titleMr || incident.title}
            </h1>
            <p className="text-sm sm:text-base text-charcoal-600 font-normal">
              {lang === 'en' ? incident.shortSummary : incident.shortSummaryMr || incident.shortSummary}
            </p>
          </div>

          <div className="shrink-0">
            <RiskBadge riskLevel={incident.riskLevelDefault} />
          </div>
        </div>

        {/* Highlighted Emergency Action Box */}
        <div className="p-5 rounded-2xl bg-risk-high-bg border border-risk-high/30 text-charcoal shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-risk-high block">
              {lang === 'en' ? '🚨 Immediate Reporting Action:' : '🚨 तातडीने करायची तक्रार:'}
            </span>
            <p className="text-sm font-semibold leading-relaxed text-charcoal">
              {incident.whenToReport}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:1930"
              className="bg-risk-high text-white font-heading font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:bg-red-700 transition flex items-center gap-1.5 min-h-[44px]"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>{lang === 'en' ? 'Call 1930' : '१९३० कॉल'}</span>
            </a>
            <Link
              to="/report"
              className="bg-lavender-deep text-white font-heading font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:bg-lavender-light hover:text-lavender-deep transition min-h-[44px] flex items-center"
            >
              {lang === 'en' ? 'Report Hub →' : 'तक्रार मार्ग →'}
            </Link>
          </div>
        </div>
      </div>

      {/* ── 1. IMMEDIATE VICTIM ACTION STEPS (Visible by Default) ──── */}
      <div className="bg-white rounded-3xl border border-lavender-100 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 border-b border-lavender-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-lavender-100 text-lavender-deep flex items-center justify-center font-bold">
            <ListOrdered className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-charcoal text-xl">
              {lang === 'en' ? 'What To Do Right Now (Numbered Action Checklist)' : 'आत्ताच काय करावे (तात्काळ कृती यादी)'}
            </h2>
            <p className="text-xs text-charcoal-500 font-normal">
              {lang === 'en' ? 'Follow these steps in order immediately after noticing the fraud.' : 'फसवणूक लक्षात आल्यानंतर खालील क्रमाने त्वरित कृती करा.'}
            </p>
          </div>
        </div>

        <ol className="space-y-3">
          {incident.victimActionSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-lavender-bg border border-lavender-100">
              <span className="w-7 h-7 rounded-full bg-lavender-deep text-white font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                {idx + 1}
              </span>
              <span className="text-sm sm:text-base font-semibold text-charcoal leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* ── 2. COLLAPSED ACCORDIONS BELOW THE FOLD ────────────────── */}
      <div className="space-y-4">
        
        {/* Accordion 1: What is it & How does it happen */}
        <Accordion
          title={lang === 'en' ? '📌 What is it & How does it happen?' : '📌 व्याख्या आणि फसवणूक कशी होते?'}
          icon={HelpCircle}
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-lavender-bg border border-lavender-100 space-y-2">
              <h3 className="font-heading font-bold text-charcoal text-base">
                {lang === 'en' ? 'What is it?' : 'व्याख्या / प्रकार:'}
              </h3>
              <p className="text-charcoal-700 leading-relaxed font-normal">
                {lang === 'en' ? incident.whatIsIt : incident.whatIsItMr || incident.whatIsIt}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-lavender-bg border border-lavender-100 space-y-2">
              <h3 className="font-heading font-bold text-charcoal text-base">
                {lang === 'en' ? 'How does it happen?' : 'फसवणुकीची पद्धत:'}
              </h3>
              <ul className="space-y-2 text-charcoal-700 font-normal">
                {incident.howDoesItHappen.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-lavender-deep shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        {/* Accordion 2: Warning Signs & Possible Impact */}
        <Accordion
          title={lang === 'en' ? '⚠️ Warning Signs & Possible Impact' : '⚠️ धोक्याचे संकेत व होणारे नुकसान'}
          icon={AlertTriangle}
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-risk-med-bg border border-risk-med/30 space-y-2">
              <h3 className="font-heading font-bold text-risk-med text-base flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-risk-med" />
                <span>{lang === 'en' ? 'Warning Signs (Red Flags)' : 'धोक्याचे संकेत (रेड फ्लॅग्स)'}</span>
              </h3>
              <ul className="space-y-2 text-charcoal-700 font-normal">
                {incident.warningSigns.map((sign, idx) => (
                  <li key={idx}>• {sign}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-risk-high-bg border border-risk-high/30 space-y-2">
              <h3 className="font-heading font-bold text-risk-high text-base flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-risk-high" />
                <span>{lang === 'en' ? 'Possible Impact' : 'होणारे नुकसान'}</span>
              </h3>
              <ul className="space-y-2 text-charcoal-700 font-normal">
                {incident.possibleImpact.map((imp, idx) => (
                  <li key={idx}>• {imp}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        {/* Accordion 3: Evidence to Preserve */}
        <Accordion
          title={lang === 'en' ? '📁 Evidence to Preserve for Reporting' : '📁 तक्रारीसाठी जतन करायचे पुरावे'}
          icon={FileText}
          defaultOpen={false}
        >
          <div className="space-y-3">
            <p className="text-xs text-charcoal-500 font-normal">
              {lang === 'en'
                ? 'Preserve these documents and screenshots before deleting any app or chat history:'
                : 'ॲप किंवा मेसेज डिलीट करण्यापूर्वी खालील पुरावे आणि स्क्रीनशॉट जतन करा:'}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal font-normal">
              {incident.evidenceToPreserve.map((ev, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-lavender-bg border border-lavender-100">
                  <CheckCircle2 className="w-5 h-5 text-risk-low shrink-0 mt-0.5" />
                  <span>{ev}</span>
                </li>
              ))}
            </ul>
          </div>
        </Accordion>

        {/* Accordion 4: Do's and Don'ts Checklist */}
        <Accordion
          title={lang === 'en' ? '✅/❌ Do’s & Don’ts Checklist' : '✅/❌ काय करावे आणि काय करू नये'}
          icon={ShieldCheck}
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-risk-low-bg border border-risk-low/30 space-y-2">
              <span className="font-heading font-bold text-risk-low block text-base">✔ DO (काय करावे):</span>
              <ul className="space-y-2 text-charcoal-700 font-normal">
                {incident.doList.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-risk-high-bg border border-risk-high/30 space-y-2">
              <span className="font-heading font-bold text-risk-high block text-base">✖ DON’T (काय करू नये):</span>
              <ul className="space-y-2 text-charcoal-700 font-normal">
                {incident.dontList.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        {/* Accordion 5: Incident Timeline Stages */}
        <Accordion
          title={lang === 'en' ? '⏳ Incident Timeline Stages' : '⏳ फसवणुकीचे टप्पे (घटनाक्रम)'}
          icon={Clock}
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {incident.timelineStages.map((stg, i) => (
              <div key={i} className="p-4 rounded-2xl bg-lavender-bg border border-lavender-100 space-y-1.5">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-lavender-deep block">
                  Stage {i + 1}: {stg.stage}
                </span>
                <p className="text-xs text-charcoal-700 leading-relaxed font-normal">{stg.description}</p>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Accordion 6: How to Prevent This */}
        <Accordion
          title={lang === 'en' ? '🛡️ How to Prevent This in Future' : '🛡️ भविष्यात फसवणूक टाळण्यासाठी सुरक्षा उपाय'}
          icon={ShieldCheck}
          defaultOpen={false}
        >
          <div className="p-4 rounded-2xl bg-lavender-bg border border-lavender-100 space-y-3 text-sm text-charcoal font-normal">
            <p>
              {lang === 'en'
                ? 'Stay safe by enabling 2-Factor Authentication on all banking and social media apps. Never share your OTP, PIN, or password with anyone, regardless of who they claim to be.'
                : 'तुमच्या बँक व सोशल मीडिया अकाऊंटवर २-स्टेप व्हॅलिडेशन चालू ठेवा. कोणताही ओटीपी, पिन किंवा पासवर्ड कोणालाही शेअर करू नका.'}
            </p>
            <div className="pt-2">
              <Link
                to="/report"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-lavender-deep underline hover:text-lavender-deep"
              >
                <span>{lang === 'en' ? 'View Official Reporting & Ombudsman Pathways →' : 'अधिकृत तक्रार मार्ग पहा →'}</span>
              </Link>
            </div>
          </div>
        </Accordion>

      </div>

      {/* Related Incidents Cross-Links */}
      {relatedList.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-lavender-100">
          <h2 className="font-heading font-bold text-charcoal text-lg">
            {lang === 'en' ? 'Related Incident Types:' : 'संबंधित गुन्हे प्रकार:'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedList.map((rel) => (
              <Link
                key={rel.id}
                to={`/explorer/${rel.id}`}
                className="p-4 rounded-2xl bg-white border border-lavender-100 hover:border-lavender-200 transition flex items-center justify-between group shadow-xs"
              >
                <div>
                  <h3 className="font-heading font-bold text-charcoal text-sm group-hover:text-lavender-deep">
                    {lang === 'en' ? rel.title : rel.titleMr || rel.title}
                  </h3>
                  <span className="text-[11px] font-mono text-charcoal-500">#{rel.id}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-charcoal-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Legal Disclaimer Notice */}
      <DisclaimerNotice />

      {/* FIXED / STICKY BOTTOM MOBILE CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-lavender-200 p-3 shadow-lg block sm:hidden">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <a
            href="tel:1930"
            className="flex-1 bg-risk-high text-white font-heading font-bold text-xs py-3 rounded-xl text-center shadow-xs flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>1930 Helpline</span>
          </a>
          <Link
            to="/report"
            className="flex-1 bg-lavender-deep text-white font-heading font-bold text-xs py-3 rounded-xl text-center shadow-xs flex items-center justify-center gap-1 min-h-[44px]"
          >
            <span>Report Now →</span>
          </Link>
        </div>
      </div>

    </div>
  );
}


