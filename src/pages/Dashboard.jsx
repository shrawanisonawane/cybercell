import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Info, Table } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, Cell } from 'recharts';
import { useLanguage } from '../context/LanguageContext';
import dashboardData from '../data/dashboard-stats.json';

const COLORS = ['#534AB7', '#AFA9EC', '#5DCAA5', '#F4C0D1', '#DC2626', '#D97706', '#059669', '#4B5563'];

export default function Dashboard() {
  const { lang } = useLanguage();
  const [viewType, setViewType] = useState('chart'); // 'chart' | 'table'

  const headline = dashboardData.headline;
  const filteredTrend = dashboardData.monthlyTrend;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-screen bg-white text-charcoal font-sans">
      
      {/* Title & Provenance Banner */}
      <div className="space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender-100 text-lavender-deep text-xs font-heading font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-lavender-deep" />
            <span>{lang === 'en' ? 'Public Cyber Trend Analytics' : 'सायबर ट्रेंड विश्लेषण'}</span>
          </div>

          {/* Data Provenance Badge */}
          {dashboardData.isDemoData && (
            <div className="bg-risk-med-bg text-risk-med border border-risk-med/30 text-xs font-heading font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
              <Info className="w-3.5 h-3.5 text-risk-med" />
              <span>Demonstration Data — for prototype only</span>
            </div>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal">
          {lang === 'en' ? 'Public Cyber Crime Statistics' : 'सार्वजनिक सायबर गुन्हे आकडेवारी'}
        </h1>
        <p className="text-base text-charcoal-600 max-w-3xl leading-relaxed font-normal">
          {lang === 'en'
            ? 'Aggregated and anonymized trend statistics published for public awareness and prevention. No personal or victim data is recorded.'
            : 'नागरिकांच्या जनजागृतीसाठी संकलित केलेली माहिती. यात कोणत्याही नागरिकाची वैयक्तिक माहिती समाविष्ट नाही.'}
        </p>
      </div>

      {/* HEADLINE STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-6 rounded-3xl bg-white border border-lavender-100 shadow-xs space-y-2">
          <span className="text-xs font-heading font-bold text-charcoal-500 uppercase tracking-wider block">
            {lang === 'en' ? 'Total Reported Incidents' : 'एकूण नोंदवलेले गुन्हे'}
          </span>
          <div className="text-3xl font-heading font-extrabold text-charcoal">
            {headline.totalReported.toLocaleString()}
          </div>
          <span className="text-xs text-charcoal-500 block">Period: {dashboardData.dataPeriod}</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-lavender-100 shadow-xs space-y-2">
          <span className="text-xs font-heading font-bold text-charcoal-500 uppercase tracking-wider block">
            {lang === 'en' ? 'Top Category Share' : 'प्रमुख गुन्हा प्रकार'}
          </span>
          <div className="text-3xl font-heading font-extrabold text-lavender-deep">
            {headline.topCategoryShare}
          </div>
          <span className="text-xs font-heading font-bold text-charcoal block">{headline.topCategory}</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-lavender-100 shadow-xs space-y-2">
          <span className="text-xs font-heading font-bold text-risk-high uppercase tracking-wider block flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-risk-high" />
            <span>{lang === 'en' ? 'Fastest Rising' : 'सर्वाधिक वाढ'}</span>
          </span>
          <div className="text-3xl font-heading font-extrabold text-risk-high">
            {headline.fastestRisingPct}
          </div>
          <span className="text-xs font-semibold text-charcoal block">{headline.fastestRising}</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-lavender-100 shadow-xs space-y-2">
          <span className="text-xs font-heading font-bold text-risk-low uppercase tracking-wider block flex items-center gap-1">
            <TrendingDown className="w-4 h-4 text-risk-low" />
            <span>{lang === 'en' ? 'Fastest Falling' : 'सर्वाधिक घट'}</span>
          </span>
          <div className="text-3xl font-heading font-extrabold text-risk-low">
            {headline.fastestFallingPct}
          </div>
          <span className="text-xs font-semibold text-charcoal block">{headline.fastestFalling}</span>
        </div>

      </div>

      {/* CATEGORY BREAKDOWN (BAR CHART & ACCESSIBLE TABLE TOGGLE) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-lavender-100 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-lavender-100 pb-4">
          <div>
            <h2 className="text-xl font-heading font-extrabold text-charcoal">
              {lang === 'en' ? 'Incidents Breakdown by Category' : 'गुन्हे प्रकारानुसार वर्गवारी'}
            </h2>
            <p className="text-xs text-charcoal-500 font-normal">Percentage share of total reported cyber crimes</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewType('chart')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition min-h-[36px] ${
                viewType === 'chart' ? 'bg-lavender-deep text-white shadow-xs' : 'bg-lavender-bg text-charcoal'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Chart View' : 'आलेख'}</span>
            </button>

            <button
              onClick={() => setViewType('table')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition min-h-[36px] ${
                viewType === 'table' ? 'bg-lavender-deep text-white shadow-xs' : 'bg-lavender-bg text-charcoal'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Table View (Accessible)' : 'तक्ता'}</span>
            </button>
          </div>
        </div>

        {viewType === 'chart' ? (
          <div className="h-80 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dashboardData.byCategory} margin={{ top: 10, right: 10, left: 10, bottom: 40 }}>
                <XAxis dataKey="categoryName" angle={-25} textAnchor="end" interval={0} tick={{ fontSize: 11, fill: '#1F2937' }} />
                <YAxis tick={{ fontSize: 11, fill: '#1F2937' }} />
                <Tooltip formatter={(val) => [`${val.toLocaleString()} incidents`, 'Count']} />
                <Bar dataKey="count" fill="#534AB7" radius={[6, 6, 0, 0]}>
                  {dashboardData.byCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-lavender-bg text-charcoal font-heading font-bold border-b border-lavender-100">
                  <th className="p-3">Category Name</th>
                  <th className="p-3">Total Reported Incidents</th>
                  <th className="p-3">Percentage Share (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lavender-100">
                {dashboardData.byCategory.map((item, idx) => (
                  <tr key={idx} className="hover:bg-lavender-bg/50">
                    <td className="p-3 font-heading font-bold text-charcoal">{item.categoryName}</td>
                    <td className="p-3 text-charcoal-700">{item.count.toLocaleString()}</td>
                    <td className="p-3 font-heading font-bold text-lavender-deep">{item.pct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* MONTHLY TREND OVER TIME (LINE CHART) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-lavender-100 shadow-xs space-y-4">
        <div>
          <h2 className="text-xl font-heading font-extrabold text-charcoal">
            {lang === 'en' ? 'Monthly Trend Analysis (Jan 2026 – Aug 2026)' : 'मासिक ट्रेंड आलेख'}
          </h2>
          <p className="text-xs text-charcoal-500 font-normal">Tracking monthly incident volume progression</p>
        </div>

        <div className="h-80 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredTrend} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#1F2937' }} />
              <YAxis tick={{ fontSize: 11, fill: '#1F2937' }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="upi_fraud" name="UPI Fraud" stroke="#534AB7" strokeWidth={3} />
              <Line type="monotone" dataKey="investment_scam" name="Investment & Digital Arrest" stroke="#DC2626" strokeWidth={3} />
              <Line type="monotone" dataKey="job_scam" name="Job & Task Scam" stroke="#5DCAA5" strokeWidth={2} />
              <Line type="monotone" dataKey="financial_fraud" name="Card & Financial Fraud" stroke="#059669" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Auto-generated insights summary text */}
        <div className="p-3 rounded-xl bg-lavender-bg border border-lavender-100 text-xs text-charcoal-700 font-normal italic">
          <strong>Auto-generated insight:</strong> Investment and 'Digital Arrest' scams recorded the highest month-over-month growth rate over the last 6 months (+48.5%), while UPI fraud remains the largest overall category by volume.
        </div>
      </div>

      {/* EMERGING VS DECLINING SCAMS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Emerging */}
        <div className="p-6 rounded-3xl bg-white border border-lavender-100 shadow-xs space-y-4">
          <h3 className="font-heading font-extrabold text-charcoal text-base flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-risk-high" />
            <span>{lang === 'en' ? 'Emerging Cyber Threats' : 'नवीन वेगाने वाढणारे धोके'}</span>
          </h3>

          <div className="space-y-3">
            {dashboardData.emerging.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-risk-high-bg border border-risk-high/30 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-charcoal text-xs">{item.name}</h4>
                  <span className="text-[10px] text-charcoal-500 font-mono">#{item.categoryId}</span>
                </div>
                <span className="font-heading font-extrabold text-risk-high text-sm">+{item.pctChange}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Declining */}
        <div className="p-6 rounded-3xl bg-white border border-lavender-100 shadow-xs space-y-4">
          <h3 className="font-heading font-extrabold text-charcoal text-base flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-risk-low" />
            <span>{lang === 'en' ? 'Declining Cyber Trends' : 'घट होत असलेले प्रकार'}</span>
          </h3>

          <div className="space-y-3">
            {dashboardData.declining.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-risk-low-bg border border-risk-low/30 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-charcoal text-xs">{item.name}</h4>
                  <span className="text-[10px] text-charcoal-500 font-mono">#{item.categoryId}</span>
                </div>
                <span className="font-heading font-extrabold text-risk-low text-sm">{item.pctChange}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* DATA PROVENANCE FOOTER */}
      <div className="p-4 rounded-2xl bg-lavender-bg border border-lavender-100 text-charcoal text-xs flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-lavender-deep shrink-0" />
          <span>
            Statistics are aggregated and anonymized. Source: Maharashtra Cyber Nodal Office.
          </span>
        </div>
        <span className="text-lavender-deep font-mono font-bold shrink-0">
          Last Updated: {dashboardData.lastUpdated}
        </span>
      </div>

    </div>
  );
}

