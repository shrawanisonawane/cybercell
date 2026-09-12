import React from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function RiskBadge({ riskLevel = 'MEDIUM', showLabel = true }) {
  const { lang } = useLanguage();

  const config = {
    LOW: {
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      icon: ShieldCheck,
      textEn: 'LOW RISK',
      textMr: 'कमी धोका',
      descEn: 'Informational concern',
      descMr: 'माहितीत्मक'
    },
    MEDIUM: {
      bg: 'bg-amber-50 text-amber-900 border-amber-300',
      icon: AlertTriangle,
      textEn: 'MEDIUM RISK',
      textMr: 'मध्यम धोका',
      descEn: 'Precautionary action recommended',
      descMr: 'खबरदारीची गरज'
    },
    HIGH: {
      bg: 'bg-red-50 text-red-900 border-red-300',
      icon: ShieldAlert,
      textEn: 'HIGH RISK',
      textMr: 'उच्च धोका',
      descEn: 'Immediate emergency action needed',
      descMr: 'तातडीने कारवाई आवश्यक'
    }
  };

  const current = config[riskLevel] || config.MEDIUM;
  const IconComponent = current.icon;

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-xs ${current.bg}`}>
      <IconComponent className="w-4 h-4 shrink-0" />
      {showLabel && (
        <span>
          {lang === 'en' ? current.textEn : current.textMr}
        </span>
      )}
    </div>
  );
}
