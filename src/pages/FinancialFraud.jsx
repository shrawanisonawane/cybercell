import React, { useState, useRef } from 'react';
import { PhoneCall, ExternalLink, CheckCircle2, Printer, ClipboardCopy, ArrowRight, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ─── Application template generator ────────────────────────────────────────
function buildApplication({ lang, name, date, amount, bank, upi, description, evidence }) {
  if (lang === 'en') {
    return `TO,
The Officer In-Charge,
Nashik City Cyber Police Station,
Gangapur Road, Nashik – 422002.

SUBJECT: Complaint Regarding Online Financial Fraud / Cyber Crime

Respected Sir / Madam,

I, ${name || '[Your Full Name]'}, am a resident of Nashik city. I am writing to formally report a cyber financial fraud that occurred on ${date || '[Date of Incident]'}.

WHAT HAPPENED:
${description || '[Please describe in detail: who called / messaged you, what they said, what you did, and how the money was deducted]'}

FINANCIAL LOSS:
Amount Deducted: ₹${amount || '[Amount]'}
Bank / UPI Account Affected: ${bank || '[Bank Name & Account / UPI ID]'}
Transaction Reference / UPI ID: ${upi || '[Transaction ID if available]'}

EVIDENCE AVAILABLE:
${evidence || '[List the screenshots, SMS, bank statements, or call records you have]'}

I have already called the National Cyber Crime Helpline 1930 (if done: Yes / No).

I request your office to register my complaint, take necessary action to freeze the fraudulent transaction, and help recover the deducted amount at the earliest.

Thanking you,

Name: ${name || '______________________'}
Date: ${date || '______________________'}
Mobile: ______________________
Signature: ______________________`;
  } else {
    return `प्रति,
अधिकारी प्रभारी,
नाशिक शहर सायबर पोलीस ठाणे,
गंगापूर रोड, नाशिक – ४२२००२.

विषय: ऑनलाईन आर्थिक फसवणूक / सायबर गुन्ह्याबाबत तक्रार

महोदय / महोदया,

मी, ${name || '[तुमचे पूर्ण नाव]'}, नाशिक शहरचा/ची रहिवासी आहे. मला ${date || '[घटनेची तारीख]'} रोजी सायबर आर्थिक फसवणुकीला सामोरे जावे लागले.

काय घडले:
${description || '[कृपया सविस्तर लिहा: कोणी फोन / मेसेज केला, त्यांनी काय सांगितले, तुम्ही काय केले, आणि पैसे कसे कापले गेले]'}

आर्थिक नुकसान:
कापलेली रक्कम: ₹${amount || '[रक्कम]'}
बँक / UPI खाते: ${bank || '[बँकेचे नाव आणि खाते क्र. / UPI ID]'}
व्यवहार संदर्भ क्र.: ${upi || '[उपलब्ध असल्यास Transaction ID]'}

उपलब्ध पुरावे:
${evidence || '[स्क्रीनशॉट, SMS, बँक स्टेटमेंट किंवा कॉल रेकॉर्डची यादी द्या]'}

मी राष्ट्रीय सायबर हेल्पलाइन १९३० वर कॉल केला आहे: होय / नाही.

आपल्या कार्यालयास विनंती आहे की माझी तक्रार नोंदवावी, बेकायदेशीर व्यवहार त्वरित गोठवावा आणि रक्कम परत मिळवण्यासाठी आवश्यक कारवाई करावी.

आपला/आपली विश्वासू,

नाव: ${name || '______________________'}
तारीख: ${date || '______________________'}
मोबाईल: ______________________
स्वाक्षरी: ______________________`;
  }
}

const STEPS_EN = [
  {
    step: '1',
    urgent: true,
    title: 'Call 1930 IMMEDIATELY',
    body: 'Call the National Cyber Crime Helpline 1930 right now if the fraud happened within the last few hours. They can attempt to freeze the money still in transit between banks.',
    action: { label: 'Call 1930 Now', href: 'tel:1930', red: true },
  },
  {
    step: '2',
    title: 'File Online on Cyber Police Portal',
    body: 'Register your complaint on the official National Cyber Crime Portal (cybercrime.gov.in). Keep your acknowledgment number.',
    action: { label: 'Open Cyber Police Portal', href: 'https://cybercrime.gov.in', external: true },
  },
  {
    step: '3',
    title: 'File on Nashik Samanvaya Portal',
    body: 'Also file on the Nashik Police coordination portal. This helps track your case at the district level.',
    action: { label: 'Open Samanvaya Portal', href: 'https://nashikpolice.gov.in', external: true },
  },
  {
    step: '4',
    title: 'Write Your Application',
    body: 'Fill the form below. It will prepare a ready-to-submit complaint application for this police station.',
  },
];

const STEPS_MR = [
  {
    step: '१',
    urgent: true,
    title: 'आत्ताच १९३० वर कॉल करा',
    body: 'जर फसवणूक काही तासांपूर्वी झाली असेल तर लगेच राष्ट्रीय सायबर हेल्पलाइन १९३० वर कॉल करा. ते बँकांमधील संक्रमणातील पैसे गोठवण्याचा प्रयत्न करतात.',
    action: { label: '१९३० वर कॉल करा', href: 'tel:1930', red: true },
  },
  {
    step: '२',
    title: 'सायबर पोलीस पोर्टलवर तक्रार नोंदवा',
    body: 'अधिकृत राष्ट्रीय सायबर गुन्हे पोर्टल (cybercrime.gov.in) वर तुमची तक्रार नोंदवा. पोचपावती क्रमांक जपून ठेवा.',
    action: { label: 'सायबर पोलीस पोर्टल उघडा', href: 'https://cybercrime.gov.in', external: true },
  },
  {
    step: '३',
    title: 'समन्वय पोर्टलवर तक्रार नोंदवा',
    body: 'नाशिक पोलीस समन्वय पोर्टलवर देखील तक्रार नोंदवा. यामुळे जिल्हा स्तरावर तुमचे प्रकरण ट्रॅक होते.',
    action: { label: 'समन्वय पोर्टल उघडा', href: 'https://nashikpolice.gov.in', external: true },
  },
  {
    step: '४',
    title: 'तुमचा अर्ज लिहा',
    body: 'खाली दिलेला फॉर्म भरा. हे या पोलीस ठाण्यात सादर करण्यासाठी तयार तक्रार अर्ज तयार करेल.',
  },
];

export default function FinancialFraud() {
  const { lang } = useLanguage();
  const steps = lang === 'en' ? STEPS_EN : STEPS_MR;

  const [form, setForm] = useState({ name: '', date: '', amount: '', bank: '', upi: '', description: '', evidence: '' });
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const generate = () => {
    const app = buildApplication({ lang, ...form });
    setGenerated(app);
    setTimeout(() => textRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const copy = () => {
    navigator.clipboard.writeText(generated).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const print = () => window.print();

  const label = lang === 'en' ? {
    pageTag: 'Financial Fraud — Step-by-Step Guide',
    h1: 'Financial Fraud: What To Do',
    sub: 'Follow these steps in order. Step 4 lets you write your complaint application here.',
    bring: 'Bring to the station:',
    bringItems: ['Bank statement showing unauthorized debit', 'Screenshots of fraud SMS / WhatsApp / call', 'Govt. ID (Aadhaar / PAN)', 'Mobile phone used during incident'],
    formTitle: 'Write Your Complaint Application',
    formSub: 'Fill in what you can — we will format a ready-to-submit application for you.',
    fname: 'Your Full Name', fdate: 'Date of Incident', famount: 'Amount Lost (₹)',
    fbank: 'Bank Name & Account No. / UPI ID', fupi: 'Transaction ID / UPI Reference (if known)',
    fdesc: 'Describe what happened — in your own words', fdescPH: 'Example: I received a call from someone saying they are from my bank. They asked for my OTP and after I shared it, ₹25,000 was deducted from my account...',
    fevidence: 'What evidence do you have?', fevidencePH: 'Example: Screenshot of SMS, WhatsApp chat, bank statement PDF...',
    generate: 'Generate My Application',
    appTitle: 'Your Complaint Application (Ready to Submit)',
    appSub: 'Show this to the officer, or print it and attach to your complaint.',
    copyBtn: 'Copy Text',
    copiedBtn: 'Copied!',
    printBtn: 'Print',
  } : {
    pageTag: 'आर्थिक फसवणूक — पायरी-पायरी मार्गदर्शन',
    h1: 'आर्थिक फसवणूक: काय करायचे',
    sub: 'हे टप्पे क्रमाने पाळा. टप्पा ४ मध्ये तुम्ही इथेच तक्रार अर्ज लिहू शकता.',
    bring: 'ठाण्यावर हे घेऊन या:',
    bringItems: ['अनधिकृत डेबिट दर्शवणारे बँक स्टेटमेंट', 'फसवणुकीचे SMS / WhatsApp / कॉलचे स्क्रीनशॉट', 'शासकीय ओळखपत्र (आधार / पॅन)', 'घटनेत वापरलेला मोबाईल फोन'],
    formTitle: 'तुमचा तक्रार अर्ज लिहा',
    formSub: 'जेवढे माहीत असेल ते भरा — आम्ही तुमच्यासाठी सादर-तयार अर्ज तयार करू.',
    fname: 'तुमचे पूर्ण नाव', fdate: 'घटनेची तारीख', famount: 'गमावलेली रक्कम (₹)',
    fbank: 'बँकेचे नाव आणि खाते क्र. / UPI ID', fupi: 'Transaction ID / UPI संदर्भ (उपलब्ध असल्यास)',
    fdesc: 'काय घडले ते तुमच्या शब्दांत सांगा', fdescPH: 'उदाहरण: मला माझ्या बँकेतून कोणी कॉल केल्याचे सांगितले. त्यांनी OTP मागितला आणि मी दिल्यावर माझ्या खात्यातून ₹२५,०००  कापले गेले...',
    fevidence: 'तुमच्याजवळ कोणते पुरावे आहेत?', fevidencePH: 'उदाहरण: SMS स्क्रीनशॉट, WhatsApp चॅट, बँक स्टेटमेंट PDF...',
    generate: 'माझा अर्ज तयार करा',
    appTitle: 'तुमचा तक्रार अर्ज (सादर करण्यास तयार)',
    appSub: 'हे अधिकाऱ्याला दाखवा किंवा प्रिंट करून तक्रारीसोबत जोडा.',
    copyBtn: 'मजकूर कॉपी करा',
    copiedBtn: 'कॉपी केले!',
    printBtn: 'प्रिंट करा',
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

      {/* Page header */}
      <div className="space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">{label.pageTag}</span>
        <h1 className="text-3xl font-extrabold text-mhnavy-950">{label.h1}</h1>
        <p className="text-sm text-slate-500">{label.sub}</p>
      </div>

      {/* Bring to station callout */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-800 text-sm">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{label.bring}</span>
        </div>
        <ul className="space-y-1">
          {label.bringItems.map(item => (
            <li key={item} className="flex items-center gap-2 text-xs text-amber-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((s) => (
          <div
            key={s.step}
            className={`p-5 rounded-2xl border space-y-2 ${s.urgent ? 'bg-red-50 border-red-300' : 'bg-white border-slate-200'}`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center shrink-0 shadow-sm ${s.urgent ? 'bg-red-600 text-white' : 'bg-mhnavy-900 text-mhgold-400'}`}>
                {s.step}
              </span>
              <h3 className={`font-extrabold text-base ${s.urgent ? 'text-red-800' : 'text-mhnavy-950'}`}>{s.title}</h3>
            </div>
            <p className={`text-sm leading-relaxed pl-11 ${s.urgent ? 'text-red-700' : 'text-slate-600'}`}>{s.body}</p>
            {s.action && (
              <div className="pl-11">
                <a
                  href={s.action.href}
                  target={s.action.external ? '_blank' : undefined}
                  rel={s.action.external ? 'noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs shadow transition ${
                    s.action.red
                      ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                      : 'bg-mhnavy-900 hover:bg-mhnavy-800 text-white'
                  }`}
                >
                  {s.action.red ? <PhoneCall className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5 text-mhgold-400" />}
                  <span>{s.action.label}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── APPLICATION WRITER ─────────────────────────────────────────── */}
      <div className="rounded-3xl border-2 border-mhnavy-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-mhnavy-950 px-6 py-5">
          <h2 className="text-xl font-extrabold text-white">{label.formTitle}</h2>
          <p className="text-xs text-slate-300 mt-0.5">{label.formSub}</p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">{label.fname}</label>
              <input
                type="text"
                value={form.name}
                onChange={e => update('name', e.target.value)}
                placeholder={lang === 'en' ? 'e.g. Rajesh Kumar' : 'उदा. राजेश कुमार'}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-mhnavy-600 focus:ring-1 focus:ring-mhnavy-600 transition"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">{label.fdate}</label>
              <input
                type="date"
                value={form.date}
                onChange={e => update('date', e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-mhnavy-600 focus:ring-1 focus:ring-mhnavy-600 transition"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">{label.famount}</label>
              <input
                type="number"
                value={form.amount}
                onChange={e => update('amount', e.target.value)}
                placeholder={lang === 'en' ? 'e.g. 25000' : 'उदा. २५०००'}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-mhnavy-600 focus:ring-1 focus:ring-mhnavy-600 transition"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">{label.fbank}</label>
              <input
                type="text"
                value={form.bank}
                onChange={e => update('bank', e.target.value)}
                placeholder={lang === 'en' ? 'e.g. SBI, A/C 1234...' : 'उदा. SBI खाते क्र. १२३४...'}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-mhnavy-600 focus:ring-1 focus:ring-mhnavy-600 transition"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">{label.fupi}</label>
            <input
              type="text"
              value={form.upi}
              onChange={e => update('upi', e.target.value)}
              placeholder={lang === 'en' ? 'e.g. 12345@ybl or TXN ID' : 'उदा. १२३४५@ybl किंवा TXN ID'}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-mhnavy-600 focus:ring-1 focus:ring-mhnavy-600 transition"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">{label.fdesc} <span className="text-red-500">*</span></label>
            <textarea
              rows={5}
              value={form.description}
              onChange={e => update('description', e.target.value)}
              placeholder={label.fdescPH}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-mhnavy-600 focus:ring-1 focus:ring-mhnavy-600 transition resize-none leading-relaxed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">{label.fevidence}</label>
            <textarea
              rows={2}
              value={form.evidence}
              onChange={e => update('evidence', e.target.value)}
              placeholder={label.fevidencePH}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-mhnavy-600 focus:ring-1 focus:ring-mhnavy-600 transition resize-none"
            />
          </div>

          <button
            onClick={generate}
            disabled={!form.description.trim()}
            className="w-full flex items-center justify-center gap-2 bg-mhnavy-900 hover:bg-mhnavy-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl text-sm shadow-lg transition"
          >
            <ArrowRight className="w-4 h-4" />
            <span>{label.generate}</span>
          </button>
        </div>
      </div>

      {/* Generated Application */}
      {generated && (
        <div ref={textRef} className="rounded-3xl border-2 border-emerald-400 bg-emerald-50 overflow-hidden">
          <div className="bg-emerald-700 px-6 py-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-extrabold text-white">{label.appTitle}</h2>
              <p className="text-xs text-emerald-100">{label.appSub}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={copy}
                className="flex items-center gap-1.5 bg-white text-emerald-800 font-bold text-xs px-3 py-2 rounded-lg hover:bg-emerald-50 transition"
              >
                <ClipboardCopy className="w-3.5 h-3.5" />
                <span>{copied ? label.copiedBtn : label.copyBtn}</span>
              </button>
              <button
                onClick={print}
                className="flex items-center gap-1.5 bg-emerald-900 text-white font-bold text-xs px-3 py-2 rounded-lg hover:bg-emerald-800 transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{label.printBtn}</span>
              </button>
            </div>
          </div>
          <pre className="p-6 text-xs sm:text-sm text-slate-800 font-mono leading-7 whitespace-pre-wrap break-words bg-white">
            {generated}
          </pre>
        </div>
      )}

    </div>
  );
}
