import fs from 'fs';
import path from 'path';

const outputDir = 'c:/Users/goura/maharashtra/public/cartoons';

const svgs = {
  'upi_fraud.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff7ed"/>
      <stop offset="100%" stop-color="#ffedd5"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.15"/>
    </filter>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#bgGrad)" stroke="#f97316" stroke-width="2"/>
  
  <!-- Comic Header Badge -->
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#c2410c"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">💸 यूपीआय फसवणूक • UPI QR SCAM ALERT</text>
  
  <!-- Smartphone with QR Code -->
  <g filter="url(#shadow)" transform="translate(60, 65)">
    <rect x="0" y="0" width="110" height="185" rx="16" fill="#1e293b" stroke="#475569" stroke-width="3"/>
    <rect x="8" y="12" width="94" height="160" rx="8" fill="#ffffff"/>
    <rect x="18" y="24" width="74" height="74" fill="#0f172a" rx="4"/>
    <!-- QR Code patterns -->
    <rect x="24" y="30" width="24" height="24" fill="#ffffff"/>
    <rect x="28" y="34" width="16" height="16" fill="#0f172a"/>
    <rect x="60" y="30" width="24" height="24" fill="#ffffff"/>
    <rect x="64" y="34" width="16" height="16" fill="#0f172a"/>
    <rect x="24" y="66" width="24" height="24" fill="#ffffff"/>
    <rect x="28" y="70" width="16" height="16" fill="#0f172a"/>
    <rect x="54" y="60" width="10" height="10" fill="#ea580c"/>
    <rect x="68" y="70" width="12" height="12" fill="#ea580c"/>
    
    <!-- Warning Text on Phone -->
    <rect x="14" y="108" width="82" height="24" rx="12" fill="#dc2626"/>
    <text x="55" y="124" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">PIN = PAY ₹</text>
    <text x="55" y="145" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-weight="700" font-size="9">पैसे मिळण्यासाठी PIN नको</text>
    <text x="55" y="158" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="9">PIN is ONLY to Send!</text>
  </g>
  
  <!-- Scammer Figure Cartoon -->
  <g filter="url(#shadow)" transform="translate(220, 70)">
    <circle cx="60" cy="40" r="28" fill="#fde047" stroke="#1e293b" stroke-width="3"/>
    <!-- Mask -->
    <rect x="36" y="30" width="48" height="16" rx="8" fill="#0f172a"/>
    <circle cx="48" cy="38" r="4" fill="#ffffff"/>
    <circle cx="72" cy="38" r="4" fill="#ffffff"/>
    <circle cx="48" cy="38" r="2" fill="#0f172a"/>
    <circle cx="72" cy="38" r="2" fill="#0f172a"/>
    <!-- Sneaky grin -->
    <path d="M 48 54 Q 60 64 72 54" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
    <!-- Body -->
    <path d="M 20 120 C 20 80, 100 80, 100 120 Z" fill="#ea580c" stroke="#1e293b" stroke-width="3"/>
    <!-- Money Bag -->
    <circle cx="95" cy="115" r="22" fill="#16a34a" stroke="#1e293b" stroke-width="2"/>
    <text x="95" y="122" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="18">₹</text>
  </g>

  <!-- Speech Bubble -->
  <g transform="translate(180, 185)" filter="url(#shadow)">
    <path d="M 0 0 L 170 0 L 170 65 L 40 65 L 20 80 L 25 65 L 0 65 Z" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
    <text x="85" y="24" text-anchor="middle" fill="#9a3412" font-family="sans-serif" font-weight="800" font-size="11">"पिन टाका, पैसे मिळतील!"</text>
    <text x="85" y="42" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="11">🛑 हे खोटे आहे! STOP!</text>
  </g>
</svg>`,

  'investment_scam.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="invGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fefce8"/>
      <stop offset="100%" stop-color="#fef9c3"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#invGrad)" stroke="#ca8a04" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#854d0e"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">📈 शेअर मार्केट घोटाळा • FAKE TRADING SCAM</text>
  
  <!-- Chart with fake rocket & crash -->
  <g transform="translate(30, 70)">
    <rect x="0" y="0" width="200" height="150" rx="12" fill="#ffffff" stroke="#eab308" stroke-width="2"/>
    <path d="M 20 120 L 60 90 L 100 110 L 150 30" fill="none" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
    <path d="M 150 30 L 180 130" fill="none" stroke="#dc2626" stroke-width="5" stroke-dasharray="4" stroke-linecap="round"/>
    <circle cx="150" cy="30" r="6" fill="#16a34a"/>
    <circle cx="180" cy="130" r="8" fill="#dc2626"/>
    <text x="110" y="45" fill="#16a34a" font-family="sans-serif" font-weight="900" font-size="11">+500% PROMISE</text>
    <text x="120" y="145" fill="#dc2626" font-family="sans-serif" font-weight="900" font-size="12">TRAP! (गमावले)</text>
  </g>
  
  <!-- Scammer with WhatsApp Tips -->
  <g transform="translate(245, 75)">
    <rect x="0" y="0" width="130" height="145" rx="14" fill="#065f46" stroke="#047857" stroke-width="2"/>
    <text x="65" y="24" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">WhatsApp Group</text>
    <rect x="10" y="35" width="110" height="40" rx="8" fill="#ffffff"/>
    <text x="65" y="52" text-anchor="middle" fill="#047857" font-family="sans-serif" font-weight="800" font-size="10">"रोज ५०,००० नफा!"</text>
    <text x="65" y="66" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="9">Double Money Trap</text>
    
    <rect x="10" y="85" width="110" height="45" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="65" y="103" text-anchor="middle" fill="#991b1b" font-family="sans-serif" font-weight="800" font-size="10">SEBI नोंदणीकृत नाही!</text>
    <text x="65" y="118" text-anchor="middle" fill="#991b1b" font-family="sans-serif" font-weight="800" font-size="9">Fake Trading App</text>
  </g>
  
  <rect x="30" y="232" width="340" height="32" rx="8" fill="#fef08a" stroke="#ca8a04"/>
  <text x="200" y="253" text-anchor="middle" fill="#713f12" font-family="sans-serif" font-weight="800" font-size="11">⚠️ जास्त परताव्याच्या आमिषाला बळी पडू नका • Never Join Unverified Stock Groups</text>
</svg>`,

  'financial_fraud.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eff6ff"/>
      <stop offset="100%" stop-color="#dbeafe"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#finGrad)" stroke="#2563eb" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#1e40af"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">💳 एटीएम व बँक खाते सुरक्षितता • BANKING SECURITY</text>
  
  <!-- Credit Card / ATM Card in Lock -->
  <g transform="translate(50, 75)">
    <rect x="0" y="0" width="180" height="110" rx="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="3"/>
    <rect x="20" y="20" width="30" height="24" rx="4" fill="#fbbf24"/>
    <text x="20" y="80" fill="#ffffff" font-family="monospace" font-weight="700" font-size="12">**** **** **** 4821</text>
    <text x="20" y="96" fill="#93c5fd" font-family="sans-serif" font-weight="700" font-size="9">NASHIK CITIZEN CARD</text>
    
    <!-- Lock Overlay -->
    <circle cx="140" cy="55" r="30" fill="#dc2626" stroke="#ffffff" stroke-width="3"/>
    <path d="M 130 55 L 130 45 C 130 38, 150 38, 150 45 L 150 55 Z" fill="none" stroke="#ffffff" stroke-width="4"/>
    <rect x="126" y="55" width="28" height="20" rx="4" fill="#ffffff"/>
  </g>
  
  <!-- Bank Call Refusal Shield -->
  <g transform="translate(250, 70)">
    <path d="M 50 0 L 100 20 L 100 80 C 100 120, 50 140, 50 140 C 50 140, 0 120, 0 80 L 0 20 Z" fill="#15803d" stroke="#ffffff" stroke-width="3"/>
    <text x="50" y="50" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="13">NO OTP</text>
    <text x="50" y="70" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="13">NO PIN</text>
    <text x="50" y="90" text-anchor="middle" fill="#bbf7d0" font-family="sans-serif" font-weight="800" font-size="10">बँक कधीही</text>
    <text x="50" y="104" text-anchor="middle" fill="#bbf7d0" font-family="sans-serif" font-weight="800" font-size="10">OTP मागणार नाही</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#1e293b"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">बँक फसवणूक झाल्यास त्वरित बँकेच्या टोल फ्री नंबरवर फोन करून</text>
  <text x="200" y="257" text-anchor="middle" fill="#60a5fa" font-family="sans-serif" font-weight="800" font-size="11">कार्ड ब्लॉक करा व १९३० सायबर हेल्पलाइनवर कॉल करा</text>
</svg>`,

  'phishing.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="phishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eef2ff"/>
      <stop offset="100%" stop-color="#e0e7ff"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#phishGrad)" stroke="#4338ca" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#3730a3"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">🔗 बनावट मेसेज व लिंक धोका • FAKE SMS & LINK PHISHING</text>
  
  <!-- Fish Hook with Fake SMS Link -->
  <g transform="translate(60, 65)">
    <path d="M 40 0 L 40 60 Q 40 100 80 100 Q 110 100 110 70 L 95 80" fill="none" stroke="#475569" stroke-width="5" stroke-linecap="round"/>
    
    <!-- Bait SMS Card -->
    <rect x="70" y="40" width="180" height="90" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
    <rect x="80" y="48" width="160" height="20" rx="4" fill="#fee2e2"/>
    <text x="160" y="62" text-anchor="middle" fill="#991b1b" font-family="sans-serif" font-weight="800" font-size="9">⚠️ LIGHT BILL OVERDUE!</text>
    <text x="160" y="82" text-anchor="middle" fill="#1e293b" font-family="sans-serif" font-weight="700" font-size="10">वीज बिल न भरल्यास वीज कापली जाईल</text>
    <text x="160" y="100" text-anchor="middle" fill="#2563eb" font-family="sans-serif" font-weight="800" font-size="11">http://bit.ly/fake-bill-pay 👈</text>
    <line x1="85" y1="104" x2="235" y2="104" stroke="#2563eb" stroke-width="1.5"/>
  </g>
  
  <!-- STOP WARNING BADGE -->
  <g transform="translate(280, 160)">
    <circle cx="40" cy="40" r="34" fill="#dc2626" stroke="#ffffff" stroke-width="3"/>
    <text x="40" y="36" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">DON'T</text>
    <text x="40" y="52" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">CLICK!</text>
  </g>

  <rect x="30" y="225" width="340" height="38" rx="10" fill="#312e81"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">अनोळखी मेसेजमधील कोणत्याही लिंकवर क्लिक करू नका</text>
  <text x="200" y="257" text-anchor="middle" fill="#a5b4fc" font-family="sans-serif" font-weight="800" font-size="11">असे संशयास्पद नंबर "चक्षू" (Chakshu) ॲपवर रिपोर्ट करा</text>
</svg>`,

  'account_takeover.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="accGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#faf5ff"/>
      <stop offset="100%" stop-color="#f3e8ff"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#accGrad)" stroke="#9333ea" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#7e22ce"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">🔐 अकाऊंट हॅकिंग व सुरक्षा • ACCOUNT TAKEOVER</text>
  
  <!-- WhatsApp / Social Account Box with Broken Lock -->
  <g transform="translate(50, 70)">
    <rect x="0" y="0" width="160" height="130" rx="16" fill="#ffffff" stroke="#a855f7" stroke-width="3"/>
    <circle cx="80" cy="45" r="26" fill="#25d366"/>
    <!-- Phone / WhatsApp icon inside -->
    <path d="M 70 38 Q 72 32 78 35 L 82 40 Q 84 43 80 47 L 76 50 Q 82 58 90 64 L 93 60 Q 97 56 100 58 L 105 62 Q 108 68 102 70" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <text x="80" y="92" text-anchor="middle" fill="#6b21a8" font-family="sans-serif" font-weight="900" font-size="12">WhatsApp Hacking</text>
    <rect x="15" y="100" width="130" height="20" rx="10" fill="#fee2e2"/>
    <text x="80" y="114" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="10">2FA पिन चोरीला गेला!</text>
  </g>
  
  <!-- 2-Step Verification Shield -->
  <g transform="translate(240, 70)">
    <rect x="0" y="0" width="120" height="130" rx="16" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2"/>
    <circle cx="60" cy="40" r="22" fill="#7e22ce"/>
    <text x="60" y="46" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">2FA</text>
    <text x="60" y="80" text-anchor="middle" fill="#581c87" font-family="sans-serif" font-weight="800" font-size="11">टू-स्टेप व्हेरिफिकेशन</text>
    <text x="60" y="95" text-anchor="middle" fill="#15803d" font-family="sans-serif" font-weight="800" font-size="11">नेहमी ऑन ठेवा!</text>
    <rect x="15" y="104" width="90" height="18" rx="9" fill="#16a34a"/>
    <text x="60" y="117" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="9">ENABLE NOW</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#581c87"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">व्हॉट्सॲप किंवा इंस्टाग्रामचा ६-अंकी कोड कोणालाही देऊ नका</text>
  <text x="200" y="257" text-anchor="middle" fill="#e9d5ff" font-family="sans-serif" font-weight="800" font-size="11">अकाऊंट हॅक झाल्यास मित्रांना त्वरित मेसेज करून सावध करा</text>
</svg>`,

  'fake_social_profile.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="fakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdf2f8"/>
      <stop offset="100%" stop-color="#fce7f3"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#fakeGrad)" stroke="#db2777" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#be185d"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">👤 बनावट सोशल मीडिया प्रोफाइल • FAKE CLONED PROFILE</text>
  
  <!-- Real vs Fake Profile Cards -->
  <g transform="translate(35, 70)">
    <!-- Real Profile -->
    <rect x="0" y="0" width="150" height="135" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="3"/>
    <circle cx="75" cy="40" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="75" y="46" text-anchor="middle" fill="#15803d" font-family="sans-serif" font-weight="900" font-size="16">👨</text>
    <text x="75" y="76" text-anchor="middle" fill="#14532d" font-family="sans-serif" font-weight="800" font-size="11">खरे प्रोफाइल (Real)</text>
    <rect x="20" y="86" width="110" height="22" rx="11" fill="#16a34a"/>
    <text x="75" y="101" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">✓ Verified Friend</text>
    <text x="75" y="122" text-anchor="middle" fill="#15803d" font-family="sans-serif" font-weight="700" font-size="9">पैसे मागत नाही</text>
  </g>
  
  <!-- Fake Profile -->
  <g transform="translate(215, 70)">
    <rect x="0" y="0" width="150" height="135" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
    <circle cx="75" cy="40" r="22" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
    <text x="75" y="46" text-anchor="middle" fill="#991b1b" font-family="sans-serif" font-weight="900" font-size="16">🎭</text>
    <text x="75" y="76" text-anchor="middle" fill="#7f1d1d" font-family="sans-serif" font-weight="800" font-size="11">बनावट अकाऊंट (Fake)</text>
    <rect x="15" y="86" width="120" height="22" rx="11" fill="#dc2626"/>
    <text x="75" y="101" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">⚠️ Urgent Emergency Money!</text>
    <text x="75" y="122" text-anchor="middle" fill="#b91c1c" font-family="sans-serif" font-weight="700" font-size="9">वैद्यकीय अडचणीचे नाटक</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#831843"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">नातेवाईक किंवा मित्राच्या नावाने मेसेज आल्यास</text>
  <text x="200" y="257" text-anchor="middle" fill="#fbcfe8" font-family="sans-serif" font-weight="800" font-size="11">त्यांना थेट फोन करून खात्री केल्याशिवाय पैसे पाठवू नका</text>
</svg>`,

  'identity_photo_misuse.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="photoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff1f2"/>
      <stop offset="100%" stop-color="#ffe4e6"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#photoGrad)" stroke="#e11d48" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#be123c"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">📷 फोटोचा गैरवापर व डीपफेक • PHOTO MISUSE SAFETY</text>
  
  <!-- Photo Frame & Shield -->
  <g transform="translate(60, 65)">
    <rect x="0" y="0" width="140" height="140" rx="14" fill="#ffffff" stroke="#e11d48" stroke-width="3"/>
    <circle cx="70" cy="50" r="28" fill="#ffe4e6"/>
    <text x="70" y="58" text-anchor="middle" fill="#be123c" font-family="sans-serif" font-weight="900" font-size="22">👩</text>
    <rect x="15" y="90" width="110" height="36" rx="8" fill="#fff1f2" stroke="#f43f5e"/>
    <text x="70" y="106" text-anchor="middle" fill="#9f1239" font-family="sans-serif" font-weight="800" font-size="10">Social Media Photo</text>
    <text x="70" y="120" text-anchor="middle" fill="#e11d48" font-family="sans-serif" font-weight="800" font-size="9">लॉक ठेवून सुरक्षित करा</text>
  </g>
  
  <!-- Privacy Lock Guard -->
  <g transform="translate(230, 75)">
    <path d="M 50 0 L 100 25 L 100 85 C 100 125, 50 145, 50 145 C 50 145, 0 125, 0 85 L 0 25 Z" fill="#9f1239" stroke="#ffffff" stroke-width="3"/>
    <text x="50" y="50" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="13">LOCK</text>
    <text x="50" y="70" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="13">PROFILE</text>
    <text x="50" y="95" text-anchor="middle" fill="#fecdd3" font-family="sans-serif" font-weight="800" font-size="10">फोटो फक्त</text>
    <text x="50" y="110" text-anchor="middle" fill="#fecdd3" font-family="sans-serif" font-weight="800" font-size="10">मित्रांना दाखवा</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#881337"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">फोटोचा गैरवापर किंवा मॉर्फिंग झाल्यास घाबरू नका</text>
  <text x="200" y="257" text-anchor="middle" fill="#fecdd3" font-family="sans-serif" font-weight="800" font-size="11">स्क्रीनशॉट घ्या व नाशिक सायबर पोलीस ठाण्यात तक्रार करा</text>
</svg>`,

  'sextortion.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="sexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef2f2"/>
      <stop offset="100%" stop-color="#fee2e2"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#sexGrad)" stroke="#dc2626" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#991b1b"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">🚨 व्हॉट्सॲप व्हिडिओ कॉल ब्लॅकमेल • SEXTORTION ALERT</text>
  
  <!-- Smartphone Video Call Alert -->
  <g transform="translate(60, 65)">
    <rect x="0" y="0" width="120" height="150" rx="14" fill="#0f172a" stroke="#dc2626" stroke-width="3"/>
    <rect x="8" y="10" width="104" height="130" rx="8" fill="#1e293b"/>
    <circle cx="60" cy="50" r="22" fill="#ef4444"/>
    <text x="60" y="56" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="18">📞</text>
    <rect x="15" y="82" width="90" height="20" rx="10" fill="#dc2626"/>
    <text x="60" y="96" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="9">UNKNOWN VIDEO</text>
    <text x="60" y="118" text-anchor="middle" fill="#fca5a5" font-family="sans-serif" font-weight="800" font-size="9">कॉल उचलून नका!</text>
  </g>
  
  <!-- Police Shield Protection -->
  <g transform="translate(230, 65)">
    <path d="M 50 0 L 100 25 L 100 85 C 100 125, 50 145, 50 145 C 50 145, 0 125, 0 85 L 0 25 Z" fill="#1e3a8a" stroke="#ffffff" stroke-width="3"/>
    <text x="50" y="45" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="13">NASHIK</text>
    <text x="50" y="65" text-anchor="middle" fill="#facc15" font-family="sans-serif" font-weight="900" font-size="13">CYBER CELL</text>
    <text x="50" y="90" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="16">0253-2305226</text>
    <text x="50" y="110" text-anchor="middle" fill="#93c5fd" font-family="sans-serif" font-weight="800" font-size="10">ब्लॅकमेलला घाबरू नका</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#7f1d1d"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">अनोळखी व्हिडिओ कॉल उचलू नका • पैसे पाठवू नका</text>
  <text x="200" y="257" text-anchor="middle" fill="#fca5a5" font-family="sans-serif" font-weight="800" font-size="11">नाशिक सायबर पोलीस ठाणे (0253-2305226) किंवा १९३० वर संपर्क साधा</text>
</svg>`,

  'online_harassment.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="harGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff7ed"/>
      <stop offset="100%" stop-color="#ffedd5"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#harGrad)" stroke="#ea580c" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#c2410c"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">🛑 ऑनलाईन छळ व सायबर बुलिंग • ONLINE HARASSMENT</text>
  
  <!-- Chat Block & Report -->
  <g transform="translate(50, 70)">
    <rect x="0" y="0" width="150" height="135" rx="14" fill="#ffffff" stroke="#ea580c" stroke-width="3"/>
    <rect x="15" y="15" width="120" height="30" rx="8" fill="#fee2e2"/>
    <text x="75" y="34" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="10">Abusive Message 💬</text>
    
    <rect x="15" y="55" width="120" height="30" rx="8" fill="#fef3c7"/>
    <text x="75" y="74" text-anchor="middle" fill="#d97706" font-family="sans-serif" font-weight="800" font-size="10">📸 Take Screenshot</text>
    
    <rect x="15" y="95" width="120" height="28" rx="14" fill="#dc2626"/>
    <text x="75" y="113" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="11">🚫 BLOCK USER</text>
  </g>
  
  <!-- Cyber Police Station Protection -->
  <g transform="translate(230, 70)">
    <rect x="0" y="0" width="120" height="135" rx="14" fill="#1e3a8a" stroke="#ffffff" stroke-width="2"/>
    <text x="60" y="35" text-anchor="middle" fill="#facc15" font-family="sans-serif" font-weight="900" font-size="12">नाशिक पोलीस</text>
    <text x="60" y="55" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="11">कायदेशीर कारवाई</text>
    <rect x="15" y="70" width="90" height="48" rx="8" fill="#1e293b"/>
    <text x="60" y="88" text-anchor="middle" fill="#60a5fa" font-family="sans-serif" font-weight="800" font-size="9">IT Act Sec 66E/67</text>
    <text x="60" y="104" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="9">गुन्हा दाखल</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#9a3412"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">सतत त्रास किंवा धमक्या आल्यास मेसेज डीलीट करू नका</text>
  <text x="200" y="257" text-anchor="middle" fill="#ffedd5" font-family="sans-serif" font-weight="800" font-size="11">स्क्रीनशॉट पुरावा म्हणून ठेवून सायबर पोलिसांत तक्रार करा</text>
</svg>`,

  'job_scam.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="jobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="100%" stop-color="#dcfce7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#jobGrad)" stroke="#16a34a" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#15803d"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">💼 बनावट पार्ट-टाईम नोकरी फसवणूक • FAKE JOB SCAM</text>
  
  <!-- Offer Letter Trap -->
  <g transform="translate(45, 65)">
    <rect x="0" y="0" width="160" height="145" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="3"/>
    <text x="80" y="25" text-anchor="middle" fill="#166534" font-family="sans-serif" font-weight="900" font-size="12">Telegram Work Offer</text>
    <rect x="15" y="35" width="130" height="35" rx="8" fill="#dcfce7"/>
    <text x="80" y="52" text-anchor="middle" fill="#14532d" font-family="sans-serif" font-weight="800" font-size="10">"Like YouTube Videos"</text>
    <text x="80" y="64" text-anchor="middle" fill="#16a34a" font-family="sans-serif" font-weight="800" font-size="9">Earn ₹3000/Daily</text>
    
    <!-- Trap warning -->
    <rect x="15" y="80" width="130" height="45" rx="8" fill="#fee2e2" stroke="#f87171"/>
    <text x="80" y="98" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="10">TRAP: "पहिले ₹५००0 भरा"</text>
    <text x="80" y="114" text-anchor="middle" fill="#991b1b" font-family="sans-serif" font-weight="800" font-size="9">Prepaid Task Fraud</text>
  </g>
  
  <!-- Warning Shield -->
  <g transform="translate(235, 75)">
    <circle cx="60" cy="50" r="42" fill="#dc2626" stroke="#ffffff" stroke-width="3"/>
    <text x="60" y="44" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="13">NO PREPAID</text>
    <text x="60" y="60" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="13">TASKS!</text>
    <text x="60" y="115" text-anchor="middle" fill="#14532d" font-family="sans-serif" font-weight="800" font-size="11">खरी नोकरी कधीही</text>
    <text x="60" y="130" text-anchor="middle" fill="#14532d" font-family="sans-serif" font-weight="800" font-size="11">पैसे मागत नाही!</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#14532d"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">लाईक करा किंवा रिव्ह्यू द्या या नावाखाली पैसे भरू नका</text>
  <text x="200" y="257" text-anchor="middle" fill="#bbf7d0" font-family="sans-serif" font-weight="800" font-size="11">पार्ट टाईम जॉबच्या नावाखाली होणाऱ्या फसवणुकीपासून सावध राहा</text>
</svg>`,

  'shopping_fraud.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="shopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ecfeff"/>
      <stop offset="100%" stop-color="#cffafe"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#shopGrad)" stroke="#0891b2" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#0e7490"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">🛍️ बनावट खरेदी वेबसाईट • FAKE SHOPPING SITE</text>
  
  <!-- Fake E-commerce Store -->
  <g transform="translate(45, 65)">
    <rect x="0" y="0" width="160" height="145" rx="12" fill="#ffffff" stroke="#0891b2" stroke-width="3"/>
    <rect x="10" y="12" width="140" height="24" rx="6" fill="#cffafe"/>
    <text x="80" y="28" text-anchor="middle" fill="#155e75" font-family="sans-serif" font-weight="800" font-size="10">http://super-cheap-store.xyz</text>
    
    <!-- Product Tag -->
    <rect x="20" y="48" width="120" height="40" rx="8" fill="#fee2e2" stroke="#ef4444"/>
    <text x="80" y="65" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="900" font-size="12">iPhone 15 - 90% OFF!</text>
    <text x="80" y="80" text-anchor="middle" fill="#991b1b" font-family="sans-serif" font-weight="800" font-size="10">Only ₹1,999 Today!</text>
    
    <rect x="20" y="98" width="120" height="30" rx="15" fill="#dc2626"/>
    <text x="80" y="117" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="11">FAKE SITE (फसवणूक)</text>
  </g>
  
  <!-- COD Safety Shield -->
  <g transform="translate(235, 75)">
    <rect x="0" y="0" width="120" height="130" rx="14" fill="#155e75" stroke="#ffffff" stroke-width="2"/>
    <text x="60" y="35" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">C.O.D.</text>
    <text x="60" y="55" text-anchor="middle" fill="#67e8f9" font-family="sans-serif" font-weight="800" font-size="10">Cash On Delivery</text>
    <text x="60" y="72" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">नेहमी वापरा!</text>
    <rect x="15" y="85" width="90" height="30" rx="6" fill="#0891b2"/>
    <text x="60" y="104" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="9">पार्सल तपासून द्या</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#164e63"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">अनोळखी वेबसाईटवरून खूप स्वस्त वस्तू दाखवल्यास आधी खात्री करा</text>
  <text x="200" y="257" text-anchor="middle" fill="#a5f3fc" font-family="sans-serif" font-weight="800" font-size="11">सोशल मीडियावरील स्पॉन्सर्ड लिंक्सवर सहजासहजी विश्वास ठेवू नका</text>
</svg>`,

  'loan_app_fraud.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="loanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff1f2"/>
      <stop offset="100%" stop-color="#ffe4e6"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#loanGrad)" stroke="#be123c" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#9f1239"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">📱 बनावट लोन ॲप त्रास • FAKE LOAN APP HARASSMENT</text>
  
  <!-- Phone Screen with Loan Trap -->
  <g transform="translate(60, 65)">
    <rect x="0" y="0" width="120" height="150" rx="14" fill="#881337" stroke="#ffffff" stroke-width="3"/>
    <rect x="8" y="10" width="104" height="130" rx="8" fill="#ffffff"/>
    <text x="60" y="32" text-anchor="middle" fill="#9f1239" font-family="sans-serif" font-weight="900" font-size="11">7-Day Loan App</text>
    <rect x="15" y="42" width="90" height="24" rx="6" fill="#fee2e2"/>
    <text x="60" y="58" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="10">TRAP: ₹3,000</text>
    
    <text x="60" y="85" text-anchor="middle" fill="#1e293b" font-family="sans-serif" font-weight="800" font-size="9">काँटॅक्ट्स व फोटो</text>
    <text x="60" y="98" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="9">हॅक करण्याचा धोका!</text>
    
    <rect x="15" y="108" width="90" height="20" rx="10" fill="#dc2626"/>
    <text x="60" y="122" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="9">UNOFFICIAL APK</text>
  </g>
  
  <!-- RBI Approved Only Shield -->
  <g transform="translate(230, 65)">
    <path d="M 50 0 L 100 25 L 100 85 C 100 125, 50 145, 50 145 C 50 145, 0 125, 0 85 L 0 25 Z" fill="#9f1239" stroke="#ffffff" stroke-width="3"/>
    <text x="50" y="45" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">RBI</text>
    <text x="50" y="65" text-anchor="middle" fill="#fef08a" font-family="sans-serif" font-weight="900" font-size="12">APPROVED</text>
    <text x="50" y="82" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">फक्त अधिकृत</text>
    <text x="50" y="96" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">बँकांचेच ॲप्स</text>
    <text x="50" y="112" text-anchor="middle" fill="#fecdd3" font-family="sans-serif" font-weight="800" font-size="9">वापरा!</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#4c0519"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">प्ले स्टोअरबाहेरील कोणत्याही अनधिकृत लोन ॲपवरून कर्ज घेऊ नका</text>
  <text x="200" y="257" text-anchor="middle" fill="#fecdd3" font-family="sans-serif" font-weight="800" font-size="11">धमक्या आल्यास घाबरू नका, नाशिक सायबर पोलीस ठाण्यात तक्रार करा</text>
</svg>`,

  'malware_apk.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="malGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#malGrad)" stroke="#475569" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#334155"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">🤖 बनावट ॲप फाईल (APK) धोका • MALWARE APK ALERT</text>
  
  <!-- APK File Warning -->
  <g transform="translate(50, 65)">
    <rect x="0" y="0" width="150" height="145" rx="14" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
    <rect x="15" y="15" width="120" height="36" rx="8" fill="#fee2e2"/>
    <text x="75" y="32" text-anchor="middle" fill="#991b1b" font-family="sans-serif" font-weight="900" font-size="10">Bank_Update.apk ⚠️</text>
    <text x="75" y="44" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="700" font-size="8">WhatsApp File Trap</text>
    
    <circle cx="75" cy="85" r="22" fill="#ef4444"/>
    <text x="75" y="92" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="16">🐛</text>
    
    <rect x="15" y="112" width="120" height="20" rx="10" fill="#dc2626"/>
    <text x="75" y="126" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="9">DON'T INSTALL</text>
  </g>
  
  <!-- Play Protect Shield -->
  <g transform="translate(235, 75)">
    <rect x="0" y="0" width="120" height="130" rx="14" fill="#1e293b" stroke="#ffffff" stroke-width="2"/>
    <text x="60" y="35" text-anchor="middle" fill="#4ade80" font-family="sans-serif" font-weight="900" font-size="12">Google Play</text>
    <text x="60" y="52" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="12">Protect</text>
    <text x="60" y="78" text-anchor="middle" fill="#cbd5e1" font-family="sans-serif" font-weight="800" font-size="10">फक्त Play Store</text>
    <text x="60" y="92" text-anchor="middle" fill="#cbd5e1" font-family="sans-serif" font-weight="800" font-size="10">वरूनच ॲप डाऊनलोड करा</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#0f172a"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">व्हॉट्सॲपवरून आलेल्या .APK फाईल्सवर कधीही क्लिक करू नका</text>
  <text x="200" y="257" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-weight="800" font-size="11">या फाईल्समुळे तुमचा फोन हॅक होऊन ओटीपी चोरीला जाऊ शकतो</text>
</svg>`,

  'sim_mobile_fraud.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="simGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#simGrad)" stroke="#d97706" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#b45309"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">📲 सीम ब्लॉक व सीम स्वाप फसवणूक • SIM SWAP FRAUD</text>
  
  <!-- SIM Card & Tower Signal -->
  <g transform="translate(50, 70)">
    <rect x="0" y="0" width="140" height="135" rx="14" fill="#ffffff" stroke="#d97706" stroke-width="3"/>
    <path d="M 30 20 L 95 20 L 115 40 L 115 110 L 30 110 Z" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
    <rect x="45" y="40" width="40" height="30" rx="4" fill="#f59e0b"/>
    <text x="70" y="90" text-anchor="middle" fill="#78350f" font-family="sans-serif" font-weight="900" font-size="11">SIM CARD</text>
    <text x="70" y="103" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="9">नेटवर्क अचानक बंद?</text>
  </g>
  
  <!-- Sanchar Saathi Portal Shield -->
  <g transform="translate(225, 70)">
    <rect x="0" y="0" width="130" height="135" rx="14" fill="#78350f" stroke="#ffffff" stroke-width="2"/>
    <text x="65" y="32" text-anchor="middle" fill="#fef08a" font-family="sans-serif" font-weight="900" font-size="12">संचार साथी</text>
    <text x="65" y="48" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="11">TAFCOP</text>
    <text x="65" y="74" text-anchor="middle" fill="#fef3c7" font-family="sans-serif" font-weight="800" font-size="10">तुमच्या नावावर</text>
    <text x="65" y="88" text-anchor="middle" fill="#fef3c7" font-family="sans-serif" font-weight="800" font-size="10">चालू असलेले सीम</text>
    <text x="65" y="102" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">ऑनलाइन तपासा</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#451a03"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">मोबाईल नेटवर्क अचानक बंद झाल्यास त्वरित सीम कंपनीशी संपर्क साधा</text>
  <text x="200" y="257" text-anchor="middle" fill="#fde68a" font-family="sans-serif" font-weight="800" font-size="11">sancharsaathi.gov.in वर तुमच्या नावावरील सीम कार्ड्स तपासा</text>
</svg>`,

  'crypto_fraud.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="cryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fefce8"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#cryGrad)" stroke="#eab308" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#a16207"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">🪙 क्रिप्टो व आभासी मालमत्ता घोटाळा • CRYPTO SCAM</text>
  
  <!-- Crypto Coin Trap -->
  <g transform="translate(50, 70)">
    <rect x="0" y="0" width="140" height="135" rx="14" fill="#ffffff" stroke="#eab308" stroke-width="3"/>
    <circle cx="70" cy="50" r="28" fill="#eab308" stroke="#ca8a04" stroke-width="3"/>
    <text x="70" y="58" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="22">₿</text>
    <text x="70" y="95" text-anchor="middle" fill="#854d0e" font-family="sans-serif" font-weight="900" font-size="11">Unverified Crypto</text>
    <text x="70" y="112" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="800" font-size="10">High Risk Trap!</text>
  </g>
  
  <!-- Warning Shield -->
  <g transform="translate(225, 70)">
    <rect x="0" y="0" width="130" height="135" rx="14" fill="#713f12" stroke="#ffffff" stroke-width="2"/>
    <text x="65" y="35" text-anchor="middle" fill="#fef08a" font-family="sans-serif" font-weight="900" font-size="13">FIU / RBI</text>
    <text x="65" y="52" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">नियम पाळा</text>
    <text x="65" y="80" text-anchor="middle" fill="#fef3c7" font-family="sans-serif" font-weight="800" font-size="10">अनोळखी टेलीग्राम</text>
    <text x="65" y="95" text-anchor="middle" fill="#fef3c7" font-family="sans-serif" font-weight="800" font-size="10">ग्रुपमधील क्रिप्टो</text>
    <text x="65" y="110" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">सल्ल्यावर विश्वास ठेऊ नका</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#451a03"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">क्रिप्टोमध्ये रातोरात पैसे दुप्पट होण्याचे दावे खोटे असतात</text>
  <text x="200" y="257" text-anchor="middle" fill="#fde68a" font-family="sans-serif" font-weight="800" font-size="11">फसवणूक झाल्यास त्वरित १९३० सायबर हेल्पलाइनवर कॉल करा</text>
</svg>`,

  'other_cyber_fraud.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="othGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eff6ff"/>
      <stop offset="100%" stop-color="#dbeafe"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" rx="16" fill="url(#othGrad)" stroke="#1d4ed8" stroke-width="2"/>
  
  <rect x="20" y="16" width="360" height="36" rx="18" fill="#1e40af"/>
  <text x="200" y="39" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">🛡️ इतर सायबर मदत व मार्गदर्शन • CYBER POLICE HELP</text>
  
  <!-- Cyber Police Station Desk Illustration -->
  <g transform="translate(45, 65)">
    <rect x="0" y="0" width="150" height="145" rx="14" fill="#ffffff" stroke="#1d4ed8" stroke-width="3"/>
    <circle cx="75" cy="45" r="24" fill="#1e40af"/>
    <text x="75" y="52" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="16">👮‍♂️</text>
    <text x="75" y="85" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif" font-weight="900" font-size="11">नाशिक सायबर पोलीस</text>
    <rect x="15" y="98" width="120" height="22" rx="11" fill="#1d4ed8"/>
    <text x="75" y="113" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="10">24x7 Citizen Desk</text>
  </g>
  
  <!-- 1930 Emergency Badge -->
  <g transform="translate(230, 65)">
    <rect x="0" y="0" width="125" height="145" rx="14" fill="#dc2626" stroke="#ffffff" stroke-width="3"/>
    <text x="62" y="38" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="14">EMERGENCY</text>
    <text x="62" y="68" text-anchor="middle" fill="#fef08a" font-family="sans-serif" font-weight="900" font-size="32">1930</text>
    <text x="62" y="90" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="11">CYBER HELPLINE</text>
    <text x="62" y="115" text-anchor="middle" fill="#fef2f2" font-family="sans-serif" font-weight="800" font-size="10">नाशिक थेट फोन:</text>
    <text x="62" y="130" text-anchor="middle" fill="#fef08a" font-family="sans-serif" font-weight="900" font-size="11">0253-2305226</text>
  </g>
  
  <rect x="30" y="225" width="340" height="38" rx="10" fill="#1e1b4b"/>
  <text x="200" y="243" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="11">कोणत्याही सायबर फसवणुकीत न घाबरता पोलिसांचे सहकार्य घ्या</text>
  <text x="200" y="257" text-anchor="middle" fill="#93c5fd" font-family="sans-serif" font-weight="800" font-size="11">नाशिक शहर सायबर पोलीस ठाणे, गंगापूर रोड येथे संपर्क साधा</text>
</svg>`
};

Object.entries(svgs).forEach(([filename, content]) => {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Created SVG:', filename);
});
