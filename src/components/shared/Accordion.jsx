import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Accordion({ title, icon: Icon, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl border border-lavender-100 overflow-hidden shadow-xs transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between bg-lavender-bg hover:bg-lavender-100/50 text-left transition font-heading font-bold text-charcoal text-base min-h-[48px]"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-lavender-deep shrink-0" />}
          <span>{title}</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-white border border-lavender-200 flex items-center justify-center shrink-0">
          {isOpen ? <ChevronUp className="w-4 h-4 text-charcoal" /> : <ChevronDown className="w-4 h-4 text-charcoal" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-5 sm:p-6 border-t border-lavender-100 bg-white text-charcoal">
          {children}
        </div>
      )}
    </div>
  );
}

