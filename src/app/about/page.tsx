"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AboutNashPage() {
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
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-950 selection:text-white pt-32 pb-24 flex flex-col justify-between">
      
      {/* 1. Top Black Utility Bar (Matches global style) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#111111] text-slate-300 text-xs font-semibold py-3 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between border-b border-white/5 gap-2">
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

      {/* Header Container that stays fixed below Top Utility Bar */}
      <div className="fixed top-[41px] sm:top-[38px] left-0 right-0 z-40 bg-white">
        {/* 2. Middle Main Logo/Contact Header */}
        <div className="w-full py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100">
          <div className="flex items-center flex-shrink-0 gap-2">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#d25838] to-[#b83c21] rounded-lg shadow-md transform rotate-3">
              <span className="text-white font-black text-xl tracking-tighter">S</span>
            </div>
            <div>
              <Link href="/" className="text-2xl font-black tracking-wider text-slate-900 uppercase block">
                SREEM FINANCIALS & <span className="text-[#c94b2b]">INSURANCE SERVICES</span>
              </Link>
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
        <div className="bg-[#1c1c1c] shadow-lg">
          <div className="max-w-none mx-auto h-16 flex items-center justify-between relative w-full pl-6 md:pl-12">
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-2 xl:gap-6 h-full">
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
                        className={`flex items-center gap-1.5 px-3 py-5 text-xs font-bold uppercase tracking-wider transition-all h-full border-b-2 hover:no-underline ${
                          activeMenu === key ? "border-[#c94b2b] text-[#c94b2b]" : "border-transparent text-white hover:text-[#c94b2b]"
                        }`}
                      >
                        {section.title}
                        <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === key ? "rotate-180 text-[#c94b2b]" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                      className={`flex items-center gap-1.5 px-3 py-5 text-xs font-bold uppercase tracking-wider transition-all h-full border-b-2 ${
                        activeMenu === key ? "border-[#c94b2b] text-[#c94b2b]" : "border-transparent text-white hover:text-[#c94b2b]"
                      }`}
                    >
                      {section.title}
                      <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === key ? "rotate-180 text-[#c94b2b]" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Dropdown Box */}
                  {activeMenu === key && (
                    <div className="absolute left-0 top-full pt-0 z-50">
                      <div className={`rounded-b-md bg-[#1c1c1c] border-t-2 border-[#c94b2b] border-x border-b border-neutral-800 shadow-2xl p-6 ${
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
              
              <Link 
                href="/about"
                className="px-3 py-5 text-xs font-bold uppercase tracking-wider text-[#c94b2b] border-b-2 border-[#c94b2b] h-full flex items-center"
              >
                About Nash
              </Link>
            </nav>

            {/* CTA & Mobile Burger */}
            <div className="flex items-center gap-0 h-full">
              <button className="hidden sm:inline-flex items-center gap-2 px-8 h-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] transition-all">
                Private Consultation <span className="text-sm">➔</span>
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-4 text-slate-300 hover:text-white"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
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
            <nav aria-label="Mobile Navigation" className="lg:hidden border-t border-neutral-800 bg-[#1c1c1c] px-6 py-6 space-y-6 max-h-[85vh] overflow-y-auto z-50 relative">
              {Object.entries(navItems).map(([key, section]) => (
                <div key={key} className="space-y-3">
                  <div className="text-xs font-extrabold text-[#c94b2b] uppercase tracking-widest border-b border-neutral-800 pb-1">
                    {section.title}
                  </div>
                  <div className="pl-2 flex flex-col gap-2.5">
                    {section.items.map((item) => (
                      <a 
                        key={item.name} 
                        href={item.link} 
                        className="text-xs font-bold text-slate-300 hover:text-[#c94b2b] transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-neutral-800">
                <Link 
                  href="/about" 
                  className="text-xs font-extrabold text-[#c94b2b] uppercase tracking-widest block"
                >
                  About Nash
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* 2. Main content section */}
      <main className="mt-32 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        {/* Left Column (The Portrait Block) */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md group">
            <img 
              src="/images/nash.jpg" 
              alt="Naresh Kumar (Nash)"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-neutral-300 font-bold tracking-widest uppercase">
              Founder & Managing Director
            </div>
          </div>
        </div>

        {/* Right Column (The Story & Persona) */}
        <div className="lg:col-span-7">
          <span className="text-indigo-600 text-[11px] font-bold uppercase tracking-[0.25em] block mb-3">
            LEADERSHIP PROFILE
          </span>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mb-6 font-sans">
            Naresh Kumar (Nash)
          </h1>

          {/* Personal Style Badges Row */}
          <div className="flex flex-wrap items-center mb-6">
            <span className="inline-flex items-center bg-neutral-50 border border-neutral-200 px-3 py-1 rounded-full text-xs font-semibold text-neutral-600 tracking-wide mr-2.5 mb-3">
              🏏 Cricket Enthusiast
            </span>
            <span className="inline-flex items-center bg-neutral-50 border border-neutral-200 px-3 py-1 rounded-full text-xs font-semibold text-neutral-600 tracking-wide mr-2.5 mb-3">
              🌍 Outgoing Strategist
            </span>
            <span className="inline-flex items-center bg-neutral-50 border border-neutral-200 px-3 py-1 rounded-full text-xs font-semibold text-neutral-600 tracking-wide mr-2.5 mb-3">
              ⚡ Jovial Catalyst
            </span>
          </div>

          {/* Biography Content Narrative */}
          <div className="text-neutral-600 text-sm leading-relaxed mb-6 space-y-4 font-medium">
            <p>
              Naresh Kumar (Nash) represents a unique dual force in the wealth preservation landscape. By day, he is an institutional pillar in capital safeguard systems, asset protection portfolios, and complex international visitor insurance structures. Working closely with corporate syndicates and high-capacity family offices, Nash maps complex exposure variables to bulletproof risk-transfer frameworks.
            </p>
            <p>
              By weekend, however, the corporate exterior gives way to a dynamic, fun-loving sportsman. A dedicated cricket player and coordinator, Nash thrives in high-energy team dynamics. Whether he’s coordinating alternative private wealth networks or captaining local weekend matches, he infuses a jovial, high-energy, and trusted mindset into everything he builds.
            </p>
          </div>

          {/* 'The Founder's Philosophy' Accent Card Box */}
          <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 shadow-xl mt-8 relative overflow-hidden">
            <span className="text-neutral-500 text-[9px] font-black tracking-widest uppercase mb-2 block">
              MANTRA
            </span>
            <blockquote className="text-neutral-200 text-base font-medium italic leading-relaxed">
              &ldquo;If you aren&apos;t bringing genuine energy and transparent joy to the table, you aren&apos;t building a real legacy. Insurance isn&apos;t just about mitigating risk; it&apos;s about protecting the freedom to live loudly.&rdquo;
            </blockquote>
          </div>
        </div>
      </main>

      {/* Footer System */}
      <div className="w-full mt-24">
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
        <footer className="bg-[#111111] py-20 text-slate-400 text-xs">
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

    </div>
  );
}
