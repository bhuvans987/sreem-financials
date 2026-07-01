"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AtlasTravelPage() {
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
      
      <header className="w-full h-20 bg-white/90 backdrop-blur-md border-b border-neutral-100 fixed top-0 left-0 z-50 px-4 sm:px-6">
        <div className="w-full h-full flex items-center justify-between px-6 sm:px-12">
          <Link href="/" className="flex items-center gap-x-3 outline-none group flex-shrink-0">
            <img src="/images/sreemlogo (1).png" className="h-[72px] sm:h-[84px] w-auto object-contain block translate-y-[3px]" alt="Sreem Logo" />
            <div className="hidden sm:flex items-center whitespace-nowrap gap-x-2">
              <span className="text-neutral-950 font-black text-xl sm:text-2xl tracking-tight uppercase">SREEM</span>
              <span className="text-neutral-500 font-bold text-xs sm:text-sm tracking-tight">Financials & Insurance Services</span>
            </div>
          </Link>

          {/* Primary Group 2 (Right Aligned) */}
          <div className="flex items-center gap-x-8 lg:gap-x-12 h-full">
            {/* Navigation Links inside centered container */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-6 h-full">
              {Object.entries(navItems).map(([key, section]) => (
                <div 
                  key={key} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  {key === "visitor" ? (
                    <div className="flex items-center h-full text-xs font-bold uppercase tracking-wider text-slate-800">
                      <Link 
                        href="/visitor-insurance"
                        className="hover:underline hover:text-[#c94b2b] transition-all cursor-pointer relative h-full flex items-center py-5 gap-1 text-slate-800"
                      >
                        {section.title} ➔
                      </Link>
                    </div>
                  ) : (
                    <a
                      href={section.items[0].link}
                      className={`flex items-center gap-1.5 px-3 py-5 text-xs font-bold uppercase tracking-wider transition-all h-full border-b-2 ${
                        activeMenu === key ? "border-[#c94b2b] text-[#c94b2b]" : "border-transparent text-slate-800 hover:text-[#c94b2b]"
                      }`}
                    >
                      {section.title}
                      <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === key ? "rotate-180 text-[#c94b2b]" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>
                  )}

                  {/* Dropdown Box */}
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

            <div className="hidden lg:flex flex-col items-start text-left ml-8 select-all space-y-1">
              <div className="flex items-center gap-x-1.5">
                <svg className="w-3 h-3 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-neutral-950 font-extrabold text-[10px] tracking-widest uppercase leading-none">
                  Houston, TX
                </span>
              </div>
              <div className="flex items-center gap-x-1.5">
                <svg className="w-3 h-3 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.01-1.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="text-neutral-800 font-bold text-[10px] tracking-wider leading-none">
                  +1 (510) 285-7322
                </span>
              </div>
            </div>

            {/* Mobile Burger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-4 text-slate-600 hover:text-slate-900"
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

        {/* Mobile Navigation Drawer */}
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
      <main className="flex-grow bg-white pt-32 pb-12 md:pb-20 px-6 md:px-12 flex flex-col justify-center">
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
              Atlas Travel Insurance Portfolio
            </h1>
            <p className="text-slate-500 font-semibold text-sm md:text-base">
              Underwritten by WorldTrips Networks
            </p>
          </div>

          {/* Plan Specific Details Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-2 hover:border-[#c94b2b]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Emergency Transit Shield
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Elite built-in coordination frameworks for medical evacuation and crisis repatriation events.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-2 hover:border-[#c94b2b]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Deductible Flexibility
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Configurable structural risk settings matching private family budgets from $0 upwards.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-2 hover:border-[#c94b2b]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Inbound Relative Shielding
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Direct billing advantages inside participating healthcare clusters to bypass out-of-pocket delays.
              </p>
            </div>

          </div>

          {/* Affiliate Action Trigger */}
          <div className="pt-6 flex justify-start">
            <a 
              href="https://quote.worldtrips.com/AtlasTravel/Home?referid=22999-0053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              Launch Official WorldTrips Engine ➔
            </a>
          </div>

        </div>
      </main>





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
