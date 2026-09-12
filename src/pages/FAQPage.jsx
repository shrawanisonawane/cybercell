import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import faqData from '../data/faq.json';

export default function FAQPage() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mhnavy-100 text-mhnavy-900 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-mhnavy-800" />
          <span>{lang === 'en' ? 'Frequently Asked Questions' : 'सतत विचारले जाणारे प्रश्न'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-mhnavy-950">
          {lang === 'en' ? 'Frequently Asked Questions' : 'प्रश्न व उत्तरे'}
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'Quick answers to common questions about reporting legalities, 1930 response times, evidence rules, and bank disputes.'
            : 'सायबर तक्रार प्रक्रिया, १९३० हेल्पलाइन आणि बँकेच्या नियमांबाबतच्या प्रश्नांची उत्तरे.'}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 text-left font-bold text-mhnavy-950 text-base sm:text-lg flex items-center justify-between gap-4 hover:bg-slate-50 transition"
              >
                <span>{lang === 'en' ? item.question : item.questionMr || item.question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-mhgold-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {lang === 'en' ? item.answer : item.answerMr || item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
