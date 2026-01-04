import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">Frequently Asked Questions</h3>
      <div className="space-y-4 max-w-3xl mx-auto">
        {FAQS.map((faq, index) => (
          <div 
            key={index}
            className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-700"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className={`font-semibold ${openIndex === index ? 'text-accent' : 'text-slate-200'}`}>
                {faq.question}
              </span>
              <div className={`p-1 rounded-full ${openIndex === index ? 'bg-accent text-primary' : 'bg-slate-800 text-slate-400'}`}>
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-5 pt-0 text-slate-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;