import React from 'react';
import { Shield, HelpCircle, MapPin, Mail, Phone, ExternalLink, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import contactsData from '../data/reporting-contacts.json';
import faqData from '../data/faq.json';
import Accordion from '../components/shared/Accordion';

export default function About() {
  const { lang } = useLanguage();
  const nashikContact = contactsData.districtContacts.find(c => c.id === 'nashik_city') || contactsData.districtContacts[0];
  const stateNodal = contactsData.stateNodal;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Title Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 text-xs font-heading font-extrabold uppercase tracking-wider border border-blue-200">
          <Building2 className="w-4 h-4 text-blue-700" />
          <span>{lang === 'mr' ? 'नाशिक शहर सायबर पोलीस ठाणे' : 'Nashik City Cyber Police Station'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
          {lang === 'mr' ? 'नाशिक सायबर सेल बद्दल माहिती' : 'About Nashik Cyber Cell'}
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed font-normal">
          {lang === 'mr'
            ? 'नाशिक सायबर सेल (नाशिक पोलीस) ही नाशिक जिल्ह्यातील नागरिकांच्या सायबर सुरक्षेसाठी, फसवणूक रोखण्यासाठी आणि तातडीने मदतीसाठी कार्यरत असलेली अधिकृत विशेष शाखा आहे.'
            : 'Nashik Cyber Cell (Nashik Police) is the specialized unit dedicated to cyber crime prevention, victim guidance, digital safety awareness, and financial fraud response for citizens of Nashik.'}
        </p>
      </div>

      {/* Overview Cards */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-xl font-heading font-extrabold text-slate-900 border-b border-slate-200 pb-3">
          {lang === 'mr' ? 'प्रमुख जबाबदाऱ्या व उद्दिष्टे' : 'Key Mandate & Responsibilities'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-base">
              {lang === 'mr' ? 'नाशिक जिल्हा तातडीची मदत' : 'District Triage'}
            </h3>
            <p className="text-slate-600 leading-relaxed font-normal">
              {lang === 'mr' 
                ? 'नाशिक क्षेत्रातील पीडितांना तातडीने मार्गदर्शन, 0253-2305226 फोन मदत व १९३० हेल्पलाइनद्वारे पैसे गोठवण्यास मदत.'
                : 'Providing immediate guidance to victims in Nashik via 0253-2305226 & connecting financial fraud cases to 1930 Helpline.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-base">
              {lang === 'mr' ? 'बँक व पोर्टल प्रतिसाद' : 'Bank & Portal Response'}
            </h3>
            <p className="text-slate-600 leading-relaxed font-normal">
              {lang === 'mr'
                ? 'स्थानिक बँक शाखा व NCRP राष्ट्रीय पोर्टलशी समन्वय साधून तक्रारींचा वेगवान पाठपुरावा.'
                : 'Coordinating with local bank branches and NCRP portal for speedy victim support.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-base">
              {lang === 'mr' ? 'डिजिटल साक्षरता' : 'Digital Literacy'}
            </h3>
            <p className="text-slate-600 leading-relaxed font-normal">
              {lang === 'mr'
                ? 'नागरिक, विद्यार्थी, महिला व व्यापाऱ्यांना सायबर सुरक्षेचे नियम व खबरदारी चित्रांच्या सहाय्याने शिकवणे.'
                : 'Empowering citizens, students, seniors, and merchants with practical cyber defense awareness.'}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section Accordion */}
      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-700" />
          <span>{lang === 'mr' ? 'सतत विचारले जाणारे प्रश्न (FAQ)' : 'Frequently Asked Questions (FAQ)'}</span>
        </h2>
        
        <div className="space-y-3">
          {faqData.map((faq, idx) => (
            <Accordion 
              key={idx} 
              title={lang === 'mr' ? (faq.questionMr || faq.question) : faq.question} 
              defaultOpen={idx === 0}
            >
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {lang === 'mr' ? (faq.answerMr || faq.answer) : faq.answer}
              </p>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Primary Nashik Office Contact Card */}
      <div className="bg-blue-50 border border-blue-200 text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-xl font-heading font-extrabold text-blue-900 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-700" />
          <span>{lang === 'mr' ? 'नाशिक सायबर पोलीस ठाणे संपर्क पत्ता' : 'Nashik Cyber Police Station Address'}</span>
        </h2>
        
        <div className="space-y-3 text-sm text-slate-700 font-normal">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <span className="leading-relaxed font-semibold">{nashikContact.address}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-5 h-5 text-blue-700 shrink-0" />
            <span className="font-heading font-extrabold text-slate-900 text-base">{nashikContact.phone.join(' / ')}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-blue-700 shrink-0" />
            <span>{nashikContact.email}</span>
          </div>
        </div>

        <div className="pt-3 flex flex-wrap gap-3">
          <a
            href={nashikContact.officialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-heading font-bold text-sm transition min-h-[44px]"
          >
            <span>{lang === 'mr' ? 'नाशिक पोलीस वेबसाईटला भेट द्या' : 'Visit Nashik Police Website'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={stateNodal.officialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-blue-200 text-blue-800 font-heading font-bold text-sm hover:bg-blue-50 transition min-h-[44px]"
          >
            <span>{lang === 'mr' ? 'राज्य सायबर पोर्टल (mhcyber.gov.in)' : 'State Cyber Portal (mhcyber.gov.in)'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
}
