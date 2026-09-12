import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight, RotateCcw, ShieldAlert, CheckCircle2, AlertTriangle, FileText, PhoneCall, ExternalLink, ArrowLeft, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import questionnaireData from '../data/questionnaire.json';
import incidentsData from '../data/incidents.json';
import RiskBadge from '../components/shared/RiskBadge';
import DisclaimerNotice from '../components/shared/DisclaimerNotice';

export default function Triage() {
  const { lang } = useLanguage();
  const [history, setHistory] = useState(['q1_main']);
  const [userAnswers, setUserAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const currentQuestionId = history[history.length - 1];
  const currentQuestion = questionnaireData.questions[currentQuestionId];

  const handleSelectOption = (option) => {
    const updatedAnswers = [...userAnswers, { question: currentQuestion, option }];
    setUserAnswers(updatedAnswers);

    if (option.resultId) {
      const incident = incidentsData.find((i) => i.id === option.resultId) || incidentsData.find((i) => i.id === 'other');
      setResult({
        incident,
        risk: option.riskOverride || incident.riskLevelDefault,
        reason: option.reasonTemplate || 'Your answers match this pattern of cyber incident.'
      });
    } else if (option.next) {
      setHistory([...history, option.next]);
    }
  };

  const handleReset = () => {
    setHistory(['q1_main']);
    setUserAnswers([]);
    setResult(null);
  };

  const handleGoBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setUserAnswers(userAnswers.slice(0, -1));
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 min-h-screen font-sans bg-white text-slate-900">
      
      {/* THIN PROGRESS INDICATOR (ONLY VISIBLE DURING QUESTIONNAIRE) */}
      {!result && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-heading font-extrabold text-blue-900">
            <span>{lang === 'mr' ? `टप्पा ${history.length} / ३ — चित्रावर क्लिक करून पर्याय निवडा` : `Step ${history.length} of 3 — Tap Visual Option`}</span>
            {history.length > 1 && (
              <button
                onClick={handleGoBack}
                className="flex items-center gap-1 text-slate-700 hover:text-blue-800 font-bold underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{lang === 'mr' ? 'मागील प्रश्न' : 'Previous Question'}</span>
              </button>
            )}
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-blue-700 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(history.length / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* QUESTION NODE UI (1 Question per screen, full width, large visual buttons) */}
      {!result && currentQuestion && (
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div className="space-y-3 border-b border-slate-200 pb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
              {lang === 'mr' ? (currentQuestion.questionMr || currentQuestion.question) : currentQuestion.question}
            </h1>
            {currentQuestion.subtext && (
              <p className="text-base text-slate-600 font-normal">
                {lang === 'mr' ? currentQuestion.subtextMr : currentQuestion.subtext}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt)}
                className="w-full text-left p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 hover:bg-blue-50/60 transition duration-150 flex items-center justify-between group shadow-xs cursor-pointer min-h-[72px]"
              >
                <span className="font-heading font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-blue-800 leading-snug">
                  {lang === 'mr' ? (opt.labelMr || opt.label) : opt.label}
                </span>
                <div className="w-10 h-10 rounded-full bg-blue-100 group-hover:bg-blue-700 text-blue-800 group-hover:text-white flex items-center justify-center shrink-0 ml-4 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-normal text-slate-500">
            <span>🔒 {lang === 'mr' ? '१००% सुरक्षित व गोपनीय — कोणतीही नोंदणी आवश्यक नाही' : 'Safe & Anonymous — No personal data collected'}</span>
            <button onClick={handleReset} className="flex items-center gap-1.5 text-slate-700 hover:text-blue-800 underline font-semibold">
              <RotateCcw className="w-4 h-4" />
              <span>{lang === 'mr' ? 'पुन्हा सुरु करा' : 'Start Over'}</span>
            </button>
          </div>
        </div>
      )}

      {/* RESULT SCREEN UI */}
      {result && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Main Incident Result Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-xs font-heading font-bold text-blue-900 uppercase tracking-wider">
                  {lang === 'mr' ? 'संभाव्य सायबर गुन्हा निष्कर्ष' : 'Probable Incident Match'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-1">
                  {lang === 'mr' ? (result.incident.titleMr || result.incident.title) : result.incident.title}
                </h2>
              </div>
              <RiskBadge riskLevel={result.risk} />
            </div>

            {/* Why This May Match */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-sm text-slate-800 space-y-1 font-normal">
              <span className="font-heading font-bold block text-blue-950 text-base">
                {lang === 'mr' ? 'तुमच्या उत्तरांनुसार हा निष्कर्ष का काढला:' : 'Why this matches your answers:'}
              </span>
              <p className="leading-relaxed">{result.reason}</p>
            </div>

            {/* Direct Emergency Desk Contact Banner */}
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-red-950">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-red-700 shrink-0" />
                <div>
                  <span className="font-heading font-extrabold text-sm block">
                    {lang === 'mr' ? 'नाशिक शहर सायबर पोलीस ठाणे थेट हेल्पलाईन:' : 'Nashik City Cyber Police Direct Helpline:'}
                  </span>
                  <span className="text-xs text-slate-700">गंगापूर रोड, नाशिक • फोन: 0253-2305226</span>
                </div>
              </div>
              <a
                href="tel:02532305226"
                className="bg-red-700 hover:bg-red-800 text-white font-heading font-extrabold text-xs px-4 py-2 rounded-xl transition shadow-xs shrink-0"
              >
                0253-2305226
              </a>
            </div>

            {/* What is it */}
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                {lang === 'mr' ? 'हा गुन्हा काय आहे?' : 'What is this incident?'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {lang === 'mr' ? (result.incident.whatIsItMr || result.incident.whatIsIt) : result.incident.whatIsIt}
              </p>
            </div>

            {/* Emergency Action Steps */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-red-700" />
                <h3 className="font-heading font-extrabold text-slate-900 text-xl">
                  {lang === 'mr' ? 'तुम्ही आता त्वरित काय करावे (पायऱ्या):' : 'What You Should Do Right Now:'}
                </h3>
              </div>

              <ol className="space-y-3 text-sm sm:text-base text-slate-900 font-semibold">
                {result.incident.victimActionSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-blue-700 text-white font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:1930"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-heading font-bold px-6 py-4 rounded-2xl shadow-xs transition text-base min-h-[48px]"
              >
                <PhoneCall className="w-5 h-5 text-white" />
                <span>{lang === 'mr' ? '१९३० हेल्पलाइनवर कॉल करा' : 'Call 1930 Helpline Now'}</span>
              </a>

              <Link
                to="/report"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 bg-blue-700 hover:bg-blue-800 text-white font-heading font-bold px-6 py-4 rounded-2xl shadow-xs transition text-base min-h-[48px]"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{lang === 'mr' ? 'अधिकृत तक्रार केंद्राकडे जा' : 'Go to Official Reporting Hub'}</span>
              </Link>
            </div>

          </div>

          {/* Evidence & Do/Don't Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Evidence Checklist */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-heading font-bold text-slate-900 text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-700" />
                <span>{lang === 'mr' ? 'जतन करायचे पुरावे' : 'Evidence to Preserve'}</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-800 font-normal">
                {result.incident.evidenceToPreserve.map((ev, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Do & Don't */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-heading font-bold text-slate-900 text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>{lang === 'mr' ? 'काय करावे आणि काय करू नये' : 'Do & Don’t Checklist'}</span>
              </h3>
              
              <div className="space-y-4 text-sm font-normal">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <span className="font-heading font-bold text-emerald-800 block text-base">✔ DO (हे करा):</span>
                  <ul className="space-y-1 text-slate-700">
                    {result.incident.doList.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-1">
                  <span className="font-heading font-bold text-red-800 block text-base">✖ DON’T (हे करू नका):</span>
                  <ul className="space-y-1 text-slate-700">
                    {result.incident.dontList.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Incident Link & Reset */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <Link
              to={`/explorer/${result.incident.id}`}
              className="text-sm font-heading font-bold text-blue-800 underline hover:text-blue-900"
            >
              <span>{lang === 'mr' ? 'या गुन्ह्याची सविस्तर माहिती पाहा →' : 'View Full Deep-Dive Incident Page →'}</span>
            </Link>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-heading font-bold transition shadow-xs min-h-[44px]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{lang === 'mr' ? 'पुन्हा तपासणी करा' : 'Start Another Assessment'}</span>
            </button>
          </div>

          {/* Fixed Legal Disclaimer */}
          <DisclaimerNotice />

        </div>
      )}

    </div>
  );
}
