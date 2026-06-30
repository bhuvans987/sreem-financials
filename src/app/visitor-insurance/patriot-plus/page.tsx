"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PatriotPlusPage() {
  // Navigation Dropdown state with timeout delay
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuTimeoutId, setMenuTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (key: string) => {
    if (menuTimeoutId) {
      clearTimeout(menuTimeoutId);
      setMenuTimeoutId(null);
    }
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
    setMenuTimeoutId(id);
  };



  const navItems: Record<
    string,
    { title: string; wide?: boolean; items: { name: string; link: string }[] }
  > = {
    life: {
      title: "Life Portfolios",
      wide: false,
      items: [
        { name: "Term Life Security", link: "/#life" },
        { name: "Permanent Whole Life", link: "/#whole-life" },
        { name: "Indexed Universal Life (IUL) frameworks", link: "/#iul" }
      ]
    },
    visitor: {
      title: "Visitor Portfolios",
      wide: false,
      items: [
        { name: "Patriot Plus (IMG)", link: "/visitor-insurance/patriot-plus" },
        { name: "Atlas Travel (WorldTrips)", link: "/visitor-insurance/atlas-travel" },
        { name: "Sreem Broker Marketplace", link: "/visitor-insurance/marketplace" }
      ]
    },
    legacy: {
      title: "Legacy Engineering",
      wide: false,
      items: [
        { name: "Will Drafting", link: "/#will" },
        { name: "Asset Trust Execution", link: "/#trust" },
        { name: "Private Legacy Allocation", link: "/#legacy" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#c94b2b] selection:text-white">
      
      {/* 1. Top Black Utility Bar */}
      <div className="w-full bg-[#111111] text-slate-300 text-xs font-semibold py-3 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between border-b border-white/5 z-50 relative gap-2">
        <div>
          Welcome to <span className="text-[#c94b2b]">Sreem Financials and Insurance Services</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#c94b2b] flex items-center justify-center text-white transition-colors text-[10px]">f</a>
          <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#c94b2b] flex items-center justify-center text-white transition-colors text-[10px]">t</a>
          <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#c94b2b] flex items-center justify-center text-white transition-colors text-[10px]">in</a>
          <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#c94b2b] flex items-center justify-center text-white transition-colors text-[10px]">p</a>
        </div>
      </div>
      
      {/* 2. Middle Main Logo/Contact Header */}
      <div className="w-full bg-white py-5 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100">
        <div className="flex items-center flex-shrink-0 gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#d25838] to-[#b83c21] rounded-lg shadow-md transform rotate-3">
            <span className="text-white font-black text-xl tracking-tighter">S</span>
          </div>
          <div>
            <a href="/" className="text-2xl font-black tracking-wider text-slate-900 uppercase block">
              SREEM FINANCIALS & <span className="text-[#c94b2b]">INSURANCE SERVICES</span>
            </a>
            <p className="text-[9px] tracking-widest text-slate-400 font-bold uppercase -mt-1">INSURANCE SOLUTIONS</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c94b2b]/10 flex items-center justify-center text-[#c94b2b]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold">Call Us: +1 (510) 285-7322</p>
              <p className="text-xs text-slate-800 font-bold">Mon - Sat</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c94b2b]/10 flex items-center justify-center text-[#c94b2b]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold">Houston,</p>
              <p className="text-xs text-slate-800 font-bold">Texas</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#1c1c1c] shadow-lg transition-all duration-300">
        <div className="max-w-none mx-auto h-16 flex items-center justify-between relative w-full pl-6 md:pl-12">
          
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6 h-full">
            {Object.entries(navItems).map(([key, section]) => (
              <div 
                key={key} 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                {key === "visitor" ? (
                  <div className="flex items-center h-full text-xs font-bold uppercase tracking-wider text-white">
                    <Link 
                      href="/visitor-insurance"
                      className="hover:underline hover:text-[#c94b2b] transition-all cursor-pointer relative h-full flex items-center py-5 gap-1"
                    >
                      {section.title} ➔
                    </Link>
                  </div>
                ) : (
                  <a
                    href={section.items[0].link}
                    className={`flex items-center gap-1.5 px-3 py-5 text-xs font-bold uppercase tracking-wider transition-all h-full border-b-2 ${
                      activeMenu === key ? "border-[#c94b2b] text-[#c94b2b]" : "border-transparent text-white hover:text-[#c94b2b]"
                    }`}
                  >
                    {section.title}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === key ? "rotate-180 text-[#c94b2b]" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                )}

                {activeMenu === key && (
                  <div className="absolute left-0 top-[calc(100%)] pt-0 z-50">
                    <div className={`rounded-b-md bg-[#1c1c1c] border-t-2 border-[#c94b2b] border-x border-b border-neutral-800 shadow-2xl p-6 animate-fade-in ${
                      section.wide ? "w-[540px]" : "w-80"
                    }`}>
                      {key === "visitor" && (
                        <Link 
                          href="/visitor-insurance"
                          className="bg-white/5 text-slate-300 hover:text-white font-bold text-[10px] tracking-wider uppercase p-3 mb-4 rounded-lg block border border-white/10 hover:border-[#c94b2b]/50 hover:bg-[#c94b2b]/5 transition-all text-center"
                        >
                          📊 Looking to compare all options? View Full Hub ➔
                        </Link>
                      )}
                      <div className="uppercase tracking-widest text-xs font-bold text-[#c94b2b] mb-4 pb-2 border-b border-neutral-800">
                        {section.title} Solutions
                      </div>
                      <div className={section.wide ? "grid grid-cols-2 gap-x-6 gap-y-3" : "flex flex-col gap-3.5"}>
                        {section.items.map((item) => (
                          <a 
                            key={item.name} 
                            href={item.link} 
                            className="text-xs font-bold text-slate-200 hover:text-[#c94b2b] hover:translate-x-1 transition-all py-1"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-0 h-full">
            <button className="hidden sm:inline-flex items-center gap-2 px-8 h-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] transition-all">
              Private Consultation <span className="text-sm">➔</span>
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-4 text-slate-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-800 bg-[#1c1c1c] px-6 py-6 space-y-6 max-h-[85vh] overflow-y-auto z-50 relative">
            {Object.entries(navItems).map(([key, section]) => (
              <div key={key} className="space-y-3">
                <div className="uppercase tracking-widest text-xs font-bold text-[#c94b2b] border-b border-neutral-800 pb-1">
                  {section.title}
                </div>
                <div className="flex flex-col gap-3 pl-2">
                  {section.items.map((item) => (
                    <a key={item.name} href={item.link} className="text-xs font-medium text-slate-300 hover:text-[#c94b2b]">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Container (Pristine White Background, Sreem Accents) */}
      <main className="flex-grow bg-white py-12 md:py-20 px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full space-y-12">
          
          {/* Header Breadcrumb Row */}
          <div>
            <Link 
              href="/visitor-insurance" 
              className="text-slate-500 hover:text-[#c94b2b] font-semibold text-xs uppercase tracking-wider transition-colors block mb-6"
            >
              ← Return to Visitor Insurance Overview Hub
            </Link>
          </div>

          {/* Product Profile Banner */}
          <div className="border-b border-slate-100 pb-8">
            <span className="inline-flex items-center px-3 py-1.5 border border-[#c94b2b]/30 bg-[#c94b2b]/5 text-[#c94b2b] uppercase tracking-widest text-[10px] font-extrabold mb-4 rounded-full">
              • Elite Travel Medical Shield •
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Patriot Plus Travel Medical Protection
            </h1>
            <p className="text-slate-500 font-semibold text-sm md:text-base">
              Underwritten by International Medical Group (IMG)
            </p>
          </div>

          {/* Plan Specific Details Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-2 hover:border-[#c94b2b]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Network Alignment
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Access to widespread, tier-1 national PPO provider healthcare registries.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-2 hover:border-[#c94b2b]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Coverage Mechanics
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Comprehensive percentage-based insurance safeguards that protect travelers against sudden sickness or injury while in the United States.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-2 hover:border-[#c94b2b]/30 hover:shadow-md transition-all duration-300 md:col-span-2">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Ideal Profiles
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Tailored for visiting parents, relatives, and inbound international executives seeking robust premium protection lines.
              </p>
            </div>

          </div>

          {/* Affiliate Action Trigger */}
          <div className="pt-6 flex justify-start">
            <a 
              href="https://www.imglobal.com/img-producer-insurance-plans/patriot_plus?IMGAC=539747&svi=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              Launch Official IMG Quote Engine ➔
            </a>
          </div>

        </div>
      </main>



      {/* Social Band */}
      <section className="bg-[#1c1c1c] py-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-6 text-slate-400 text-xs font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-[#c94b2b] transition-colors">Facebook</a>
          <span className="text-neutral-800 font-light">|</span>
          <a href="#" className="hover:text-[#c94b2b] transition-colors">Instagram</a>
          <span className="text-neutral-800 font-light">|</span>
          <a href="#" className="hover:text-[#c94b2b] transition-colors">LinkedIn</a>
        </div>
      </section>

      {/* Bottom Anchor Footer */}
      <footer className="bg-[#111111] py-20 text-slate-400 text-xs mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-bold text-white uppercase tracking-wider">SREEM FINANCIALS & INSURANCE SERVICES</p>
            <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed">
              © {new Date().getFullYear()} Sreem Financials and Insurance Services. All rights reserved. Compliance License F-82939. Fiduciary advisory services are regulated locally.
            </p>
          </div>
          
          <div className="flex gap-4 text-[10px] font-bold tracking-widest text-[#c94b2b]">
            <a href="#" className="hover:text-white transition-colors">QUOTE</a>
            <span className="text-neutral-800">|</span>
            <a href="#" className="hover:text-white transition-colors">BLOG</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
