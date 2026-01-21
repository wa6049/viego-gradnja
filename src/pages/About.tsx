
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import ConstructionSite4 from '../assets/ConstructionSite4.png';

interface PageProps {
  lang: Language;
  setCurrentPage: (page: string) => void;
}

const About: React.FC<PageProps> = ({ lang, setCurrentPage }) => {
  const t = translations[lang];

  return (
    <div className="container mx-auto px-4 md:px-6 max-w-6xl pb-20 overflow-x-hidden">
      <div className="text-left mb-16 md:mb-20 pt-10">
        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase tracking-tight">{t.aboutTitle}</h2>
        <div className="w-24 h-2 bg-[#1a66a4] rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-6 bg-[#1a66a4]/5 rounded-[3rem] blur-3xl opacity-50"></div>
          <img 
            src={ConstructionSite4} 
            alt="Viego Precision" 
            className="rounded-[2.5rem] md:rounded-[3rem] relative z-10 shadow-2xl border border-slate-50 dark:border-slate-800"
          />
        </div>
        <div className="space-y-8 flex flex-col items-start text-left order-1 md:order-2">
          <p className="text-2xl md:text-4xl font-black text-[#1a66a4] leading-tight uppercase italic border-l-8 border-[#1a66a4] pl-6 md:pl-8">
            {t.aboutPhilosophy}
          </p>
          <div className="space-y-6 text-base md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            <p>{t.aboutText}</p>
            <p>{t.aboutTarget}</p>
            <p>{t.aboutGoal}</p>
          </div>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="mt-6 bg-[#1a66a4] text-white font-black px-10 py-4 md:px-12 md:py-5 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          >
            {t.aboutCollaborate}
          </button>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/40 p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-center md:text-left flex flex-col items-center md:items-start">
        <h3 className="text-2xl md:text-4xl font-black mb-8 md:mb-12 uppercase tracking-tight">{t.aboutEquipmentTitle}</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-4xl text-base md:text-lg leading-relaxed font-medium">
          {t.aboutEquipmentText}
        </p>
      </div>
    </div>
  );
};

export default About;
