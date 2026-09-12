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

  // Helper to format text: Marathi only when lang === 'mr', English when lang === 'en'
  const formatText = (mrText, enText) => {
    if (lang === 'mr') {
      return mrText || enText;
    }
    return enText || mrText;
  };

  // Helper for array items
  const getBilingualList = (mrList = [], enList = []) => {
    const primaryEn = enList || [];
    return primaryEn.map((enItem, idx) => {
      const mrItem = mrList?.[idx];
      if (lang === 'mr') {
        return mrItem || enItem;
      }
      return enItem || mrItem;
    });
  };

  const actionSteps = getBilingualList(incident.victimActionStepsMr, incident.victimActionSteps);
  const howItHappens = getBilingualList(incident.howDoesItHappenMr, incident.howDoesItHappen);
  const warningSigns = getBilingualList(incident.warningSignsMr, incident.warningSigns);
  const possibleImpact = getBilingualList(incident.possibleImpactMr, incident.possibleImpact);
  const evidenceToPreserve = getBilingualList(incident.evidenceToPreserveMr, incident.evidenceToPreserve);
  const doList = getBilingualList(incident.doListMr, incident.doList);
  const dontList = getBilingualList(incident.dontListMr, incident.dontList);
  const timelineStages = incident.timelineStages || [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-screen pb-24 sm:pb-12 font-sans bg-white text-slate-900">

      {/* Back Navigation */}
      <Link
        to="/explorer"
        className="inline-flex items-center gap-2 text-sm font-heading font-bold text-slate-800 hover:text-blue-800 transition min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4 text-blue-700" />
        <span>{lang === 'mr' ? 'गुन्हे प्रकार सूचीकडे मागे जा' : 'Back to All Incidents'}</span>
      </Link>

      {/* Hero Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-blue-900 uppercase tracking-wider bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-bold">
              ID: #{incident.id}
            </span>
            <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2 leading-tight">
              {formatText(incident.titleMr, incident.title)}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              {formatText(incident.shortSummaryMr, incident.shortSummary)}
            </p>
          </div>

          <div className="shrink-0">
            <RiskBadge riskLevel={incident.riskLevelDefault} />
          </div>
        </div>

        {/* DEDICATED VINTAGE INDIAN CARTOON BANNER */}
        {incident.image && (
          <div className="rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-amber-50/50 p-2 aspect-[16/9] w-full flex items-center justify-center">
            <img
              src={incident.image}
              alt={formatText(incident.titleMr, incident.title)}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        )}

        {/* Highlighted Emergency Action Box */}
        <div className="p-5 rounded-2xl bg-red-50 border border-red-200 text-slate-900 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-red-700 block">
              {lang === 'mr' ? '🚨 तातडीने करायची तक्रार:' : '🚨 Immediate Reporting Action:'}
            </span>
            <p className="text-sm font-bold leading-relaxed text-slate-900">
              {formatText(incident.whenToReportMr, incident.whenToReport)}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:1930"
              className="bg-red-600 text-white font-heading font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:bg-red-700 transition flex items-center gap-1.5 min-h-[44px]"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>{lang === 'mr' ? '१९३० कॉल' : 'Call 1930'}</span>
            </a>
            <Link
              to="/report"
              className="bg-blue-700 text-white font-heading font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:bg-blue-800 transition min-h-[44px] flex items-center"
            >
              {lang === 'mr' ? 'तक्रार मार्ग →' : 'Report Hub →'}
            </Link>
          </div>
        </div>
      </div>

      {/* ── 1. IMMEDIATE VICTIM ACTION STEPS (Visible by Default) ──── */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
            <ListOrdered className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-slate-900 text-xl">
              {lang === 'mr' ? 'तुमची आता त्वरित काय करावे - पायऱ्या' : 'What To Do Right Now (Numbered Action Checklist)'}
            </h2>
            <p className="text-xs text-slate-500 font-normal">
              {lang === 'mr' ? 'फसवणूक लक्षात आल्यानंतर खालील क्रमाने त्वरित कृती करा.' : 'Follow these steps in order immediately after noticing the fraud.'}
            </p>
          </div>
        </div>

        {/* PICTORIAL VINTAGE COMIC BANNER FOR INCIDENT ACTION STEPS */}
        <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xs bg-amber-50/60 p-2 mb-4 w-full flex items-center justify-center">
          <img
            src="/cartoons/step1.jpg"
            alt="Incident Action Steps 1930 Helpline Vintage Comic Banner"
            className="w-full h-auto max-h-[360px] object-contain rounded-xl"
          />
        </div>

        <ol className="space-y-3">
          {actionSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-7 h-7 rounded-full bg-blue-700 text-white font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                {idx + 1}
              </span>
              <span className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* ── 2. COLLAPSED ACCORDIONS BELOW THE FOLD ────────────────── */}
      <div className="space-y-4">

        {/* Accordion 1: What is it & How does it happen */}
        <Accordion
          title={lang === 'mr' ? '📌 व्याख्या आणि फसवणूक कशी होते?' : '📌 What is it & How does it happen?'}
          icon={HelpCircle}
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                {lang === 'mr' ? 'व्याख्या / प्रकार:' : 'What is it?'}
              </h3>
              <p className="text-slate-800 leading-relaxed font-normal">
                {lang === 'mr' ? (incident.whatIsItMr || incident.whatIsIt) : incident.whatIsIt}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                {lang === 'mr' ? 'फसवणुकीची पद्धत:' : 'How does it happen?'}
              </h3>
              <ul className="space-y-2 text-slate-800 font-normal">
                {howItHappens.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-700 shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        {/* Accordion 2: Warning Signs & Possible Impact */}
        <Accordion
          title={lang === 'mr' ? '⚠️ धोक्याचे संकेत व होणारे नुकसान' : '⚠️ Warning Signs & Possible Impact'}
          icon={AlertTriangle}
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <h3 className="font-heading font-bold text-amber-900 text-base flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>{lang === 'mr' ? 'धोक्याचे संकेत' : 'Warning Signs (Red Flags)'}</span>
              </h3>
              <ul className="space-y-2 text-slate-800 font-normal">
                {warningSigns.map((sign, idx) => (
                  <li key={idx}>• {sign}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-2">
              <h3 className="font-heading font-bold text-red-900 text-base flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-red-700" />
                <span>{lang === 'mr' ? 'होणारे नुकसान' : 'Possible Impact'}</span>
              </h3>
              <ul className="space-y-2 text-slate-800 font-normal">
                {possibleImpact.map((imp, idx) => (
                  <li key={idx}>• {imp}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        {/* Accordion 3: Evidence to Preserve */}
        <Accordion
          title={lang === 'mr' ? '📁 तक्रारीसाठी जतन करायचे पुरावे' : '📁 Evidence to Preserve for Reporting'}
          icon={FileText}
          defaultOpen={false}
        >
          <div className="space-y-3">
            <p className="text-xs text-slate-600 font-normal">
              {lang === 'mr'
                ? 'ॲप किंवा मेसेज डिलीट करण्यापूर्वी खालील पुरावे आणि स्क्रीनशॉट जतन करा:'
                : 'Preserve these documents and screenshots before deleting any app or chat history:'}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-900 font-normal">
              {evidenceToPreserve.map((ev, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{ev}</span>
                </li>
              ))}
            </ul>
          </div>
        </Accordion>

        {/* Accordion 4: Do's and Don'ts Checklist */}
        <Accordion
          title={lang === 'mr' ? '✅/❌ काय करावे आणि काय करू नये' : '✅/❌ Do’s & Don’ts Checklist'}
          icon={ShieldCheck}
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <span className="font-heading font-bold text-emerald-800 block text-base">{lang === 'mr' ? '✔ काय करावे:' : '✔ DO:'}</span>
              <ul className="space-y-2 text-slate-800 font-normal">
                {doList.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-2">
              <span className="font-heading font-bold text-red-800 block text-base">{lang === 'mr' ? '✖ काय करू नये:' : '✖ DON’T:'}</span>
              <ul className="space-y-2 text-slate-800 font-normal">
                {dontList.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        {/* Accordion 5: Incident Timeline Stages */}
        <Accordion
          title={lang === 'mr' ? '⏳ फसवणुकीचे टप्पे' : '⏳ Incident Timeline Stages'}
          icon={Clock}
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineStages.map((stg, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-blue-900 block">
                  {lang === 'mr' ? `टप्पा ${i + 1}: ${stg.stageMr || stg.stage}` : `Stage ${i + 1}: ${stg.stage}`}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">{lang === 'mr' ? (stg.descriptionMr || stg.description) : stg.description}</p>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Accordion 6: How to Prevent This */}
        <Accordion
          title={lang === 'mr' ? '🛡️ भविष्यात फसवणूक टाळण्यासाठी सुरक्षा उपाय' : '🛡️ How to Prevent This in Future'}
          icon={ShieldCheck}
          defaultOpen={false}
        >
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-3 text-sm text-slate-800 font-normal">
            <p>
              {lang === 'mr'
                ? 'तुमच्या बँक व सोशल मीडिया अकाऊंटवर २-स्टेप व्हॅलिडेशन चालू ठेवा. कोणताही ओटीपी, पिन किंवा पासवर्ड कोणालाही शेअर करू नका.'
                : 'Stay safe by enabling 2-Factor Authentication on all banking and social media apps. Never share your OTP, PIN, or password with anyone, regardless of who they claim to be.'}
            </p>
            <div className="pt-2">
              <Link
                to="/report"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-blue-800 underline hover:text-blue-900"
              >
                <span>{lang === 'mr' ? 'अधिकृत तक्रार मार्ग पहा →' : 'View Official Reporting & Ombudsman Pathways →'}</span>
              </Link>
            </div>
          </div>
        </Accordion>

      </div>

      {/* Related Incidents Cross-Links */}
      {relatedList.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="font-heading font-bold text-slate-900 text-lg">
            {lang === 'mr' ? 'संबंधित गुन्हे प्रकार:' : 'Related Incident Types:'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedList.map((rel) => (
              <Link
                key={rel.id}
                to={`/explorer/${rel.id}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition flex items-center justify-between group shadow-xs"
              >
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-sm group-hover:text-blue-800">
                    {lang === 'mr' ? (rel.titleMr || rel.title) : rel.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">#{rel.id}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Legal Disclaimer Notice */}
      <DisclaimerNotice />

      {/* FIXED / STICKY BOTTOM MOBILE CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg block sm:hidden">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <a
            href="tel:1930"
            className="flex-1 bg-red-600 text-white font-heading font-bold text-xs py-3 rounded-xl text-center shadow-xs flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>1930 Helpline</span>
          </a>
          <Link
            to="/report"
            className="flex-1 bg-blue-700 text-white font-heading font-bold text-xs py-3 rounded-xl text-center shadow-xs flex items-center justify-center gap-1 min-h-[44px]"
          >
            <span>{lang === 'mr' ? 'तक्रार करा →' : 'Report Now →'}</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
