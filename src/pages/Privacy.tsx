
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';

interface PageProps {
  lang: Language;
}

const Privacy: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl pb-20 overflow-x-hidden">
      <div className="text-left md:text-center mb-16 pt-10">
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tight">{t.privacyTitle}</h2>
        <p className="text-slate-500 dark:text-slate-400 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs border-l-4 md:border-l-0 border-[#1a66a4] pl-4 md:pl-0">{t.privacyEU}</p>
      </div>
      
      <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed shadow-xl border border-slate-100 dark:border-slate-800 text-left">
        <section>
          <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight">{t.privacySection1}</h3>
          <p className="font-medium text-base md:text-lg">{t.privacySection1Text}</p>
        </section>

        <section>
          <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight">{t.privacySection2}</h3>
          <p className="font-medium text-base md:text-lg">{t.privacySection2Text}</p>
        </section>

        <section>
          <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight">{t.privacySection3}</h3>
          <p className="font-medium text-base md:text-lg">{t.privacySection3Text}</p>
        </section>

        <section className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">2025 • VIEGO GRADNJA ZAGREB</p>
          <button onClick={() => window.print()} className="bg-[#1a66a4]/10 text-[#1a66a4] px-6 py-2.5 rounded-full font-black hover:bg-[#1a66a4] hover:text-white transition-all uppercase text-[10px] tracking-widest">{t.privacyPrint}</button>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
