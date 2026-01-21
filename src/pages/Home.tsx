
import React, { useEffect, useRef } from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import ConstructionSite from '../assets/ConstructionSite.png';
import ConstructionSite5 from '../assets/ConstructionSite5.png';
import ConstructionSite3 from '../assets/ConstructionSite3.png';
import ConstructionSite2 from '../assets/ConstructionSite2.png';

interface PageProps {
  lang: Language;
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<PageProps> = ({ lang, setCurrentPage }) => {
  const t = translations[lang];
  const revealsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    revealsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToReveals = (el: HTMLDivElement | null) => {
    if (el && !revealsRef.current.includes(el)) revealsRef.current.push(el);
  };

  const services = [
    { 
      title: t.gletanje, 
      desc: t.gletanjeDesc, 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      title: t.brusenje, 
      desc: t.brusenjeDesc, 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      title: t.farbanje, 
      desc: t.farbanjeDesc, 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    { 
      title: t.bandaziranje, 
      desc: t.bandaziranjeDesc, 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    { 
      title: t.gradnja, 
      desc: t.gradnjaDesc, 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      title: t.collaboration, 
      desc: t.collaborationDesc, 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
  ];

  const processSteps = [
    { step: '01', title: t.step1, desc: t.step1Desc },
    { step: '02', title: t.step2, desc: t.step2Desc },
    { step: '03', title: t.step3, desc: t.step3Desc },
    { step: '04', title: t.step4, desc: t.step4Desc },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center relative py-12 lg:py-0">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full lg:w-1/2 h-full opacity-[0.03] lg:opacity-100 pointer-events-none z-0">
          <div className="w-full h-full relative overflow-hidden rounded-[2rem] lg:rounded-l-[100px] shadow-2xl">
            <img 
              src={ConstructionSite5} 
              alt="Viego Finishing Works" 
              className="w-full h-full object-cover grayscale lg:grayscale-0 dark:grayscale dark:opacity-40"
            />
          </div>
        </div>
        
        <div className="max-w-xl relative z-10 reveal text-left" ref={addToReveals}>
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-[#1a66a4]/30 bg-[#1a66a4]/5 text-[#1a66a4] text-[10px] md:text-xs font-black uppercase tracking-[0.25em] mb-6 md:mb-8">
            {t.heroTagline}
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tighter text-slate-900 dark:text-white text-balance">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-10 md:mb-12 max-w-2xl leading-relaxed">
            {t.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button onClick={() => setCurrentPage('contact')} className="bg-[#1a66a4] px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95">
              {t.heroCTA}
            </button>
            <button onClick={() => setCurrentPage('about')} className="bg-white dark:bg-slate-900 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 transition-all active:scale-95">
              {t.heroAbout}
            </button>
          </div>
        </div>
      </section>

      {/* About Section Summary */}
      <section className="py-20 md:py-32 reveal" ref={addToReveals}>
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
             <div className="absolute -inset-10 bg-[#1a66a4]/5 rounded-[5rem] blur-3xl opacity-50"></div>
             <img 
               src={ConstructionSite2}  
               className="rounded-[2.5rem] md:rounded-[4rem] relative z-10 shadow-2xl w-full object-cover aspect-[4/3]" 
               alt="Viego Gradnja Team"
             />
          </div>
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tight">{t.homeAboutTitle}</h2>
            <p className="text-lg md:text-2xl text-[#1a66a4] font-black italic mb-6 border-l-4 border-[#1a66a4] pl-6 text-balance">{t.homeAboutGoal}</p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">{t.homeAboutText}</p>
            <button 
              onClick={() => setCurrentPage('about')}
              className="text-[#1a66a4] font-black text-lg uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-transform"
            >
              {t.homeAboutLearnMore} <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 reveal" ref={addToReveals}>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tight">{t.servicesTitle}</h2>
          <div className="w-20 md:w-24 h-2 bg-[#1a66a4] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-[#1a66a4]/40 hover:shadow-2xl transition-all duration-500 group flex flex-col items-start text-left">
              <div className="text-[#1a66a4] mb-6 md:mb-8 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
              <h3 className="text-xl md:text-2xl font-black mb-4">{s.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base flex-grow">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] md:rounded-[4rem] px-6 md:px-16 reveal" ref={addToReveals}>
        <div className="max-w-xl mb-16 md:mb-20 text-left">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">{t.processTitle}</h2>
          <div className="w-16 h-1.5 bg-[#1a66a4] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[1px] bg-slate-200 dark:bg-slate-800 z-0"></div>
          {processSteps.map((p, i) => (
            <div key={i} className="relative z-10 space-y-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#1a66a4] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#1a66a4]/20">{p.step}</div>
              <h4 className="text-lg md:text-xl font-black">{p.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 reveal" ref={addToReveals}>
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-12 uppercase tracking-tight">{t.whyTitle}</h2>
            <div className="space-y-6 w-full">
              {[t.why1, t.why2, t.why3, t.why4, t.why5].map((w, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-5 text-base md:text-lg font-bold">
                  <div className="w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#1a66a4]">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="leading-tight">{w}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-10 bg-[#1a66a4]/5 rounded-[5rem] blur-3xl opacity-50"></div>
            <img 
              src={ConstructionSite3} 
              className="rounded-[2.5rem] md:rounded-[4rem] relative z-10 shadow-2xl w-full object-cover aspect-[4/3]" 
              alt="Viego Quality Guarantee"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 reveal" ref={addToReveals}>
        <div className="bg-[#1a66a4] p-10 md:p-24 rounded-[3rem] md:rounded-[4rem] text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 leading-tight uppercase tracking-tighter">Spremni za Vaš novi projekt?</h2>
            <p className="text-lg md:text-2xl mb-10 md:mb-12 opacity-90 font-medium">Dogovorite besplatni pregled i procjenu troškova.</p>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className="bg-white text-[#1a66a4] px-10 py-4 md:px-12 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:scale-105 transition-transform shadow-xl w-full sm:w-auto"
            >
              {t.contactSend}
            </button>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
