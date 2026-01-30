
import React, { useState } from 'react';
import { translations } from '../translations';
import { Language } from '../types';

interface PageProps {
  lang: Language;
  setCurrentPage: (page: string) => void;
}

const Contact: React.FC<PageProps> = ({ lang, setCurrentPage }) => {
  const t = translations[lang];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Using Web3Forms API to send email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "5c94a895-aff0-41d9-b817-ca9de7a0b068",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Novi upit s Viego Gradnja: ${formData.name}`,
          from_name: "Viego Gradnja Web",
          botcheck: "" // Honeypot field for spam prevention
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form and redirect after showing success message
        setTimeout(() => {
          setSubmitted(false);
          setCurrentPage('home');
        }, 5000);
      } else {
        throw new Error("Submission failed.");
      }
    } catch (err) {
      setError(lang === 'hr' ? "Došlo je do greške pri slanju. Molimo pokušajte kasnije ili nas nazovite." : "There was an error sending the message. Please try again later or call us directly.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 md:px-6 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start pt-6 md:pt-10 text-left">
        <div className="reveal visible order-2 lg:order-1 flex flex-col items-start">
          <h2 className="text-4xl md:text-7xl font-black mb-10 md:mb-16 leading-tight uppercase tracking-tight">{t.contactTitle}</h2>
          
          <div className="space-y-12 mb-16 w-full">
            <div className="group">
              <h4 className="text-[#1a66a4] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">{t.contactVisit}</h4>
              <p className="text-2xl md:text-3xl font-black tracking-tight leading-snug">Viego Global d.o.o.<br/>Zagreb, Hrvatska</p>
              <p className="text-slate-500 mt-3 text-sm md:text-lg font-medium">{t.contactHours}</p>
            </div>
            
            <div className="group">
              <h4 className="text-[#1a66a4] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">{t.contactCall}</h4>
              <p className="text-2xl md:text-3xl font-black tracking-tight">+38598310320</p>
              <p className="text-slate-500 mt-3 text-sm md:text-lg font-medium">{t.contactAvail}</p>
            </div>

            <div className="group">
              <h4 className="text-[#1a66a4] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">EMAIL UPITI</h4>
              <p className="text-2xl md:text-3xl font-black tracking-tight lowercase">globalviego@gmail.com</p>
              
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 p-6 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl order-1 lg:order-2">
          {submitted ? (
            <div className="text-center py-16 md:py-24 animate-modal">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 md:mb-10 bg-[#1a66a4] rounded-3xl flex items-center justify-center text-white shadow-xl">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 md:mb-6">{t.contactSuccess}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl leading-relaxed font-medium">{t.contactSuccessSub}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 flex flex-col items-stretch">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm font-bold animate-modal">
                  {error}
                </div>
              )}

              <div className="space-y-2 md:space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t.contactName}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  disabled={loading}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4 md:px-8 md:py-5 focus:outline-none focus:border-[#1a66a4] transition-colors text-base md:text-lg shadow-inner dark:text-white disabled:opacity-50" 
                  placeholder="Ivan Horvat" 
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t.contactEmail}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  disabled={loading}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4 md:px-8 md:py-5 focus:outline-none focus:border-[#1a66a4] transition-colors text-base md:text-lg shadow-inner dark:text-white disabled:opacity-50" 
                  placeholder="ivan.h@viego.hr" 
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t.contactMsg}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  required 
                  disabled={loading}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-5 md:px-8 md:py-6 focus:outline-none focus:border-[#1a66a4] transition-colors text-base md:text-lg shadow-inner resize-none dark:text-white disabled:opacity-50" 
                  placeholder="..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#1a66a4] text-white font-black py-5 md:py-6 rounded-2xl md:rounded-[2rem] text-lg md:text-xl shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{lang === 'hr' ? 'Slanje...' : 'Sending...'}</span>
                  </>
                ) : t.contactSend}
              </button>
              <p className="text-[10px] md:text-xs text-slate-400 text-center px-4 leading-relaxed font-bold uppercase tracking-widest">{t.contactGDPR}</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
