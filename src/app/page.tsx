"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  'name': 'Sreem Financials and Insurance Services',
  'url': 'https://sreemfin.com',
  'logo': 'https://sreemfin.com/logo.png',
  'description': 'Sreem Financials and Insurance Services provides institutional-grade Life Insurance, Visitor Insurance portfolios, and complex Will and Trust coordination.',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'US'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Financial and Protective Products',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Insurance', 'name': 'Life Insurance Engineering' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Insurance', 'name': 'International Visitor Medical Plans' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Will & Private Trust Coordination' } }
    ]
  }
};

export default function Home() {
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

  // FAQ Accordion states
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Newsletter state
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSignedUp(true);
      setEmail("");
      setTimeout(() => setSignedUp(false), 4000);
    }
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const navItems: Record<
    string,
    { title: string; wide?: boolean; items: { name: string; link: string }[] }
  > = {
    life: {
      title: "Life Portfolios",
      wide: false,
      items: [
        { name: "Term Life Security", link: "#" },
        { name: "Permanent Whole Life", link: "#" },
        { name: "Indexed Universal Life (IUL) frameworks", link: "#" }
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
        { name: "Will Drafting", link: "#" },
        { name: "Asset Trust Execution", link: "#" },
        { name: "Private Legacy Allocation", link: "#" }
      ]
    }
  };

  const steps = [
    {
      num: 1,
      title: "Life Portfolios Setup",
      bullets: ["Term Life Security", "Permanent Whole Life", "Indexed Universal Life (IUL)"]
    },
    {
      num: 2,
      title: "Visitor Portfolios Safeguard",
      bullets: ["Global Visitor Medical Coverage", "International Travel Protection", "Diaspora Guard Plans"]
    },
    {
      num: 3,
      title: "Legacy Engineering Execution",
      bullets: ["Will Drafting & Registry", "Asset Trust Execution", "Private Legacy Allocation"]
    }
  ];

  const capabilities = [
    "Term Life Security",
    "Indexed Universal Life (IUL)",
    "Permanent Whole Life",
    "International Visitor Coverage",
    "Will Drafting & Registry",
    "Asset Trust Execution"
  ];

  const buildSteps = [
    "Structure Term Life Security",
    "Configure Permanent Whole Life",
    "Establish Indexed Universal Life (IUL)",
    "Deploy Global Visitor Medical Coverage",
    "Implement International Travel Protection",
    "Draft Fiduciary Wills",
    "Execute Asset Trust Frameworks",
    "Allocate Private Legacy Assets"
  ];

  const carriers = [
    "Prudential Financial", "Allianz Global Investors", "Lincoln Financial Group", 
    "MassMutual", "New York Life", "Pacific Life",
    "Transamerica", "Mutual of Omaha", "Corebridge Financial",
    "John Hancock", "Northwestern Mutual", "Guardian Life",
    "Principal Financial", "Nationwide Advisory", "MetLife Institutional"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#c94b2b] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* CSS For Continuous Scrolling Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* 1. Top Black Utility Bar (Match Consultio Style) */}
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
      
      {/* 2. Middle Main Logo/Contact Header (Match Consultio Style) */}
      <div className="w-full bg-white py-5 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 gap-2">
          {/* Terracotta/Brown consultio-styled logo */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#d25838] to-[#b83c21] rounded-lg shadow-md transform rotate-3">
            <span className="text-white font-black text-xl tracking-tighter">S</span>
          </div>
          <div>
            <span className="text-2xl font-black tracking-wider text-slate-900 uppercase">
              SREEM FINANCIALS & <span className="text-[#c94b2b]">INSURANCE SERVICES</span>
            </span>
            <p className="text-[9px] tracking-widest text-slate-400 font-bold uppercase -mt-1">INSURANCE SOLUTIONS</p>
          </div>
        </div>

        {/* Contact info blocks */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c94b2b]/10 flex items-center justify-center text-[#c94b2b]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold">Call Us: (210) 123-451</p>
              <p className="text-xs text-slate-800 font-bold">(Sat - Thursday)</p>
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
              <p className="text-xs text-slate-400 font-semibold">380 St Kilda Road,</p>
              <p className="text-xs text-slate-800 font-bold">Melbourne, Australia</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3. Navigation Bar (Match Consultio Style) */}
      <header className="sticky top-0 z-50 bg-[#1c1c1c] shadow-lg transition-all duration-300">
        <div className="max-w-none mx-auto h-16 flex items-center justify-between relative w-full pl-6 md:pl-12">
          
          {/* Navigation Links inside charcoal container */}
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
                      aria-label="Visitor Portfolios Hub"
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
                    aria-label={`Toggle ${section.title} Menu`}
                    aria-expanded={activeMenu === key}
                  >
                    {section.title}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === key ? "rotate-180 text-[#c94b2b]" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
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
                          aria-label="Compare all visitor insurance options in the full hub"
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
                            aria-label={`View detailed solutions for ${item.name}`}
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

            {/* Nash Hub ➔ Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("nashHub")}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-5 text-xs font-bold uppercase tracking-wider transition-all h-full border-b-2 ${
                  activeMenu === "nashHub" ? "border-[#c94b2b] text-[#c94b2b]" : "border-transparent text-white hover:text-[#c94b2b]"
                }`}
                aria-label="Toggle Nash Hub Menu"
                aria-expanded={activeMenu === "nashHub"}
              >
                Nash Hub
                <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === "nashHub" ? "rotate-180 text-[#c94b2b]" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeMenu === "nashHub" && (
                <div className="absolute left-0 top-[calc(100%)] pt-0 z-50 animate-fade-in">
                  <div className="rounded-b-md bg-[#1c1c1c] border-t-2 border-[#c94b2b] border-x border-b border-neutral-800 shadow-2xl p-6 w-80 flex flex-col gap-3.5">
                    <div className="uppercase tracking-widest text-xs font-bold text-[#c94b2b] mb-4 pb-2 border-b border-neutral-800">
                      Nash Hub Portal
                    </div>
                    <Link 
                      href="/about" 
                      className="text-xs font-bold text-slate-200 hover:text-[#c94b2b] hover:translate-x-1 transition-all py-1"
                      aria-label="Read about founder and legacy"
                    >
                      About Founder & Legacy
                    </Link>
                    <a 
                      href="https://sreemcapitalrealty.example.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-slate-200 hover:text-[#c94b2b] hover:translate-x-1 transition-all py-1 flex items-center justify-between"
                      aria-label="Visit Sreem Capital Realty website, opens in new tab"
                    >
                      <span>Sreem Capital Realty (Real Estate)</span>
                      <span className="text-[10px] text-slate-400 font-normal">↗</span>
                    </a>
                    <a 
                      href="https://eliteknotmatrimony.example.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-slate-200 hover:text-[#c94b2b] hover:translate-x-1 transition-all py-1 flex items-center justify-between"
                      aria-label="Visit Elite Knot Matrimony platform, opens in new tab"
                    >
                      <span>Elite Knot Matrimony (Matrimony Platform)</span>
                      <span className="text-[10px] text-slate-400 font-normal">↗</span>
                    </a>
                    <a 
                      href="https://sreemaviation.example.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-slate-200 hover:text-[#c94b2b] hover:translate-x-1 transition-all py-1 flex items-center justify-between"
                      aria-label="Visit Sreem Aviation & Concierge services, opens in new tab"
                    >
                      <span>Sreem Aviation & Concierge (Luxury Logistics)</span>
                      <span className="text-[10px] text-slate-400 font-normal">↗</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA & Mobile Burger */}
          <div className="flex items-center gap-0 h-full">
            <button className="hidden sm:inline-flex items-center gap-2 px-8 h-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] transition-all" aria-label="Request Private Consultation">
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
                <div className="uppercase tracking-widest text-xs font-bold text-[#c94b2b] border-b border-neutral-800 pb-1">
                  {section.title}
                </div>
                <div className="flex flex-col gap-3 pl-2">
                  {section.items.map((item) => (
                    <a key={item.name} href={item.link} className="text-xs font-medium text-slate-300 hover:text-[#c94b2b]" aria-label={`View ${item.name}`}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Nash Hub Drawer Segment */}
            <div className="space-y-3">
              <div className="uppercase tracking-widest text-xs font-bold text-indigo-400 border-b border-neutral-800 pb-1">
                Nash Hub
              </div>
              <div className="flex flex-col gap-3 pl-2">
                <Link href="/about" className="text-xs font-medium text-slate-300 hover:text-indigo-400" aria-label="Read about founder and legacy">
                  About Founder & Legacy
                </Link>
                <a 
                  href="https://sreemcapitalrealty.example.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-medium text-slate-300 hover:text-indigo-400"
                  aria-label="Visit Sreem Capital Realty website, opens in new tab"
                >
                  Sreem Capital Realty (Real Estate) ↗
                </a>
                <a 
                  href="https://eliteknotmatrimony.example.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-medium text-slate-300 hover:text-indigo-400"
                  aria-label="Visit Elite Knot Matrimony platform, opens in new tab"
                >
                  Elite Knot Matrimony (Matrimony Platform) ↗
                </a>
                <a 
                  href="https://sreemaviation.example.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-medium text-slate-300 hover:text-indigo-400"
                  aria-label="Visit Sreem Aviation & Concierge services, opens in new tab"
                >
                  Sreem Aviation & Concierge (Luxury Logistics) ↗
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#d25838] to-[#b83c21] rounded-md" aria-label="Request Private Consultation">
                Private Consultation ➔
              </button>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">

      {/* 4. Elite Corporate Hero Section (Two-Column Layout) */}
      <section className="relative bg-[#111111] py-24 md:py-32 overflow-hidden border-b border-neutral-800/50">
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(#c94b2b 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
          
          {/* Left Column: The Dominant Typography Column (55%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
            {/* Premium Asset Tag Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 border border-[#c94b2b]/30 bg-[#c94b2b]/5 text-[#c94b2b] uppercase tracking-widest text-xs font-bold">
              • PRIVATE WEALTH ADVISORY •
            </div>

            {/* The Power Headline */}
            <h1 className="font-bold tracking-tight text-4xl md:text-6xl text-white leading-[1.15]">
              Securing Your Present. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25838] to-[#b83c21]">
                Architecting Your Legacy.
              </span>
            </h1>

            {/* Value Description */}
            <p className="font-medium leading-relaxed text-slate-300 text-sm md:text-base max-w-xl">
              Our signature 360-degree approach delivers high-limit capital insulation, bespoke underwriting structures, and strategic legacy preservation, shielding sovereign wealth from market volatility and transition risk.
            </p>

            {/* Dual-Action Premium Button Suite */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] rounded-md transition-all shadow-md">
                Request a Private Consultation
              </button>
              <button className="px-6 py-3 text-xs font-bold uppercase tracking-wider border border-neutral-700 hover:border-[#c94b2b] text-white transition-all rounded-md">
                Explore Asset Portfolios
              </button>
            </div>
          </div>

          {/* Right Column: The Overlapping Asset Layer (45%) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            
            {/* Framed Corporate Media Container */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/45 to-transparent pointer-events-none z-10" />
              
              <img 
                src="/hero_executive.png" 
                alt="Professional corporate executive working on laptop with modern data chart overlays representing multi-generational capital protection" 
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Sreem Client Group Badge - Purged Checkmark Circle */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-10 bg-[#161F38] border border-neutral-800/60 p-6 shadow-2xl z-30 flex items-start gap-4 max-w-[280px] rounded-md">
              <div>
                <h3 className="text-white text-sm font-bold tracking-wide uppercase">
                  SREEM FINANCIALS & INSURANCE SERVICES
                </h3>
                <p className="font-medium leading-relaxed text-slate-300 text-[10px] mt-1">
                  Multi-Generational Capital Insulation
                </p>
                <div className="mt-3 text-[9px] font-bold text-[#c94b2b] tracking-widest uppercase">
                  PRIVATE PORTFOLIO SERVICES
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 5. Three Protection Pillars Overlapping Cards Section */}
      <section className="relative bg-slate-50 py-16 px-6 md:px-12 z-20">
        <h2 className="sr-only">Our Core Wealth Safeguarding Pillars</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Capital Safeguarding */}
          <div className="bg-white border-t-4 border-[#c94b2b] shadow-2xl rounded-md p-8 md:p-10 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-[#c94b2b]/10 flex items-center justify-center text-[#c94b2b] mb-6">
              <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0694b" />
                    <stop offset="100%" stopColor="#9e2d14" />
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="28" stroke="#c94b2b" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                <circle cx="32" cy="32" r="25" stroke="#c94b2b" strokeWidth="0.75" opacity="0.5" />
                <path d="M32 12C36.5 12 45 14 47 18C47 28 41 38 32 46C23 38 17 28 17 18C19 14 27.5 12 32 12Z" stroke="url(#shieldGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 16C35 16 41 17.5 42.5 20.5C42.5 28 38 36.5 32 42.5C26 36.5 21.5 28 21.5 20.5C23 17.5 29 16 32 16Z" fill="url(#shieldGrad)" fillOpacity="0.15" />
                <path d="M32 20V34M28 27H36" stroke="url(#shieldGrad)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M32 38C33.1046 38 34 37.1046 34 36C34 34.8954 33.1046 34 32 34C30.8954 34 30 34.8954 30 36C30 37.1046 30.8954 38 32 38Z" fill="url(#shieldGrad)" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Capital Foundation</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Setting up a solid capital foundation via Term and Permanent Whole Life portfolios to insulate your family from vulnerabilities.
            </p>
          </div>

          {/* Card 2: Visitor Medical Protection */}
          <div className="bg-white border-t-4 border-[#c94b2b] shadow-2xl rounded-md p-8 md:p-10 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-[#c94b2b]/10 flex items-center justify-center text-[#c94b2b] mb-6">
              <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0694b" />
                    <stop offset="100%" stopColor="#9e2d14" />
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="28" stroke="#c94b2b" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                <circle cx="32" cy="32" r="25" stroke="#c94b2b" strokeWidth="0.75" opacity="0.5" />
                <circle cx="32" cy="32" r="18" stroke="url(#globeGrad)" strokeWidth="2" />
                <ellipse cx="32" cy="32" rx="18" ry="7" stroke="url(#globeGrad)" strokeWidth="1.25" opacity="0.7" />
                <ellipse cx="32" cy="32" rx="7" ry="18" stroke="url(#globeGrad)" strokeWidth="1.25" opacity="0.7" />
                <line x1="32" y1="14" x2="32" y2="50" stroke="url(#globeGrad)" strokeWidth="1.25" opacity="0.7" />
                <line x1="14" y1="32" x2="50" y2="32" stroke="url(#globeGrad)" strokeWidth="1.25" opacity="0.7" />
                <path d="M32 25V39M25 32H39" stroke="url(#globeGrad)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="32" cy="32" r="2" fill="url(#globeGrad)" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Visitor Medical Protection</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Safeguarding inbound international relatives with comprehensive global medical coverage and travel protection plans.
            </p>
          </div>

          {/* Card 3: Generational Asset Shielding */}
          <div className="bg-white border-t-4 border-[#c94b2b] shadow-2xl rounded-md p-8 md:p-10 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-[#c94b2b]/10 flex items-center justify-center text-[#c94b2b] mb-6">
              <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="templeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0694b" />
                    <stop offset="100%" stopColor="#9e2d14" />
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="28" stroke="#c94b2b" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                <circle cx="32" cy="32" r="25" stroke="#c94b2b" strokeWidth="0.75" opacity="0.5" />
                <path d="M16 26L32 16L48 26H16Z" fill="url(#templeGrad)" fillOpacity="0.15" stroke="url(#templeGrad)" strokeWidth="2" strokeLinejoin="round" />
                <rect x="18" y="26" width="28" height="3" fill="url(#templeGrad)" rx="0.5" />
                <rect x="20" y="32" width="3" height="13" fill="url(#templeGrad)" rx="0.5" />
                <rect x="26" y="32" width="3" height="13" fill="url(#templeGrad)" rx="0.5" />
                <rect x="32" y="32" width="3" height="13" fill="url(#templeGrad)" rx="0.5" />
                <rect x="38" y="32" width="3" height="13" fill="url(#templeGrad)" rx="0.5" />
                <rect x="44" y="32" width="3" height="13" fill="url(#templeGrad)" rx="0.5" />
                <rect x="15" y="45" width="34" height="4" fill="url(#templeGrad)" rx="1" />
                <path d="M32 20L33.5 22L32 24L30.5 22L32 20Z" fill="url(#templeGrad)" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Generational Asset Shielding</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Shielding generational assets through standard Wills, private asset trusts, and strategic legacy allocation frameworks.
            </p>
          </div>

        </div>
      </section>

      {/* Premium Corporate Partnership Board (Replaces Ticker) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sleekMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
        .animate-sleek-marquee {
          display: flex;
          width: max-content;
          animation: sleekMarquee 25s linear infinite;
        }
      `}} />
      
      <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] bg-slate-50 py-6 overflow-hidden border-y border-slate-200/80 my-12 flex items-center shadow-sm before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-50 after:to-transparent">
        <div className="animate-sleek-marquee flex items-center space-x-16 whitespace-nowrap">
          {/* Group 1 */}
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            🏢 SREEM CAPITAL REALTY // PREMIUM INVESTMENT OPERATIONS ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            💎 ELITE KNOT MATRIMONY // PRIVATE ACCESS HNW ALLIANCES ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            🛩️ SREEM AVIATION & CONCIERGE // ALTERNATIVE FLIGHT LOGISTICS ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            📊 SREEM FINANCIALS & INSURANCE SERVICES // CORE ASSET SAFEGUARDING ➔
          </span>

          {/* Group 2 */}
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            🏢 SREEM CAPITAL REALTY // PREMIUM INVESTMENT OPERATIONS ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            💎 ELITE KNOT MATRIMONY // PRIVATE ACCESS HNW ALLIANCES ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            🛩️ SREEM AVIATION & CONCIERGE // ALTERNATIVE FLIGHT LOGISTICS ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            📊 SREEM FINANCIALS & INSURANCE SERVICES // CORE ASSET SAFEGUARDING ➔
          </span>

          {/* Group 3 */}
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            🏢 SREEM CAPITAL REALTY // PREMIUM INVESTMENT OPERATIONS ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            💎 ELITE KNOT MATRIMONY // PRIVATE ACCESS HNW ALLIANCES ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            🛩️ SREEM AVIATION & CONCIERGE // ALTERNATIVE FLIGHT LOGISTICS ➔
          </span>
          <span className="text-slate-500 hover:text-[#c94b2b] transition-colors text-xs font-bold uppercase tracking-[0.25em] font-sans inline-block px-4 cursor-pointer">
            📊 SREEM FINANCIALS & INSURANCE SERVICES // CORE ASSET SAFEGUARDING ➔
          </span>
        </div>
      </div>

      {/* 7. The Deep Roadmap & Service Columns (Modern Clean White/Gray Columns) */}
      <section className="bg-white py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Block: The 6-Step Visual Roadmap (5 columns wide) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="uppercase tracking-widest text-xs font-bold text-[#c94b2b]">
                THE STRATEGIC PRESERVATION JOURNEY
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Our Unified Wealth Engineering Framework
              </h2>
              <div className="w-16 h-1 bg-[#c94b2b] rounded mt-2" />
            </div>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="bg-slate-50 border border-slate-100 p-6 md:p-8 flex items-start gap-5 hover:border-[#c94b2b]/30 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-md">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d25838] to-[#b83c21] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold tracking-wide text-lg text-slate-900 mb-2">{step.title}</h3>
                    <ul className="space-y-1.5 mt-2">
                      {step.bullets.map((b, i) => (
                        <li key={i} className="flex items-start space-x-3 text-sm text-slate-600 leading-relaxed">
                          <span className="text-indigo-500/70 font-bold select-none">•</span>
                          <span className="flex-1">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: The Corporate Advisory Summary & 8 Steps (7 columns wide) */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase inline-block">
                About Us
              </h2>
              <div className="w-20 h-1 bg-[#c94b2b] mt-3 rounded" />
            </div>

            <p className="font-medium leading-relaxed text-slate-500 text-sm md:text-base">
              Sreem Financials and Insurance Services operates as an institutional partner to high-net-worth individuals and corporate estates worldwide. By combining bespoke underwriting models with structured private trusts, we bypass public probate systems and shield portfolios from commercial litigation.
            </p>

            {/* Two Columns of Capabilities */}
            <div className="space-y-4">
              <h3 className="uppercase tracking-widest text-xs font-bold text-[#c94b2b]">
                PORTFOLIO STRUCTURES & SOLUTIONS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm text-slate-600 leading-relaxed font-medium">
                    <span className="text-indigo-500/70 font-bold select-none">•</span>
                    <span className="flex-1">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 Steps to Build Wealth List */}
            <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 space-y-6 rounded-md shadow-inner">
              <h3 className="uppercase tracking-widest text-xs font-bold text-[#c94b2b] text-center md:text-left">
                8 Core Steps to Build Wealth
              </h3>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {buildSteps.map((step, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-600 leading-relaxed font-medium">
                    <span className="font-bold text-[#c94b2b] select-none">{i + 1}.</span>
                    <span className="flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Core Values Row & Framed Graphic (Styled to match Layout) */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Values copy block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase">
                Our Core Values
              </h2>
              <div className="w-16 h-1 bg-[#c94b2b] rounded" />
            </div>
            <p className="font-medium leading-relaxed text-slate-500 text-sm md:text-base">
              Fiduciary standard is the foundation of Sreem Financials and Insurance Services. We maintain absolute transparency across our underwriting grids, ensuring zero hidden management fees or third-party finder kickbacks. Every trust structure is designed to guarantee long-term asset security, verified by annual independent solvency audits.
            </p>
            <div className="flex gap-12 pt-2">
              <div className="border-l-4 border-[#c94b2b] pl-6">
                <div className="text-slate-900 text-2xl md:text-4xl font-black">100%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Fiduciary</div>
              </div>
              <div className="border-l-4 border-[#c94b2b] pl-6">
                <div className="text-slate-900 text-2xl md:text-4xl font-black">0%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Conflict Fees</div>
              </div>
            </div>
          </div>

          {/* Right Side: Framed stacked blocks image */}
          <div className="p-4 bg-white border border-slate-100 shadow-2xl rounded-2xl max-w-md mx-auto">
            <img 
              src="/integrity_blocks.png" 
              alt="Stacked wooden blocks displaying Integrity, Honesty, and Ethics representing the fiduciary core values of Sreem Financials" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* 9. Unified Trust & Carrier Grid (Match Consultio Style) */}
      <section className="w-full">
        
        {/* Google Reviews Strip */}
        <div className="bg-white py-24 border-b border-slate-100">
          <h2 className="sr-only">Fiduciary Client Reviews</h2>
          <div className="max-w-lg mx-auto px-6 text-center">
            <div className="bg-slate-50 border border-slate-100 shadow-2xl rounded-md p-10 flex flex-col items-center">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-6 h-6 text-[#c94b2b] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-900 font-extrabold text-lg">4.9 Star Rating • Verified Fiduciary Clients</p>
              <p className="font-semibold text-slate-400 text-xs mt-1.5">Based on 140+ executive wealth audits.</p>
              
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noreferrer"
                className="mt-8 px-8 py-3.5 bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] text-white font-bold uppercase tracking-wider text-xs rounded-md transition-all shadow"
              >
                Review us on Google
              </a>
            </div>
          </div>
        </div>

        {/* Enterprise Carrier Network Grid (Styled in slate gray and terracotta accents) */}
        <div className="bg-[#111111] py-28 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
            <div className="space-y-3">
              <h2 className="text-white text-3xl font-bold uppercase tracking-tight">
                Strategic Alliances & Top-Tier Carriers
              </h2>
              <div className="w-16 h-1 bg-[#c94b2b] mx-auto mt-2" />
            </div>

            {/* exactly 15 modules styled beautifully */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {carriers.map((carrier, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#1c1c1c] border border-neutral-800 hover:border-[#c94b2b]/50 shadow-2xl rounded-md p-6 flex flex-col justify-center items-center min-h-[110px] hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-white font-extrabold text-xs tracking-wider uppercase text-center block">
                    {carrier}
                  </span>
                  <span className="text-[#c94b2b] text-[8px] tracking-widest uppercase mt-3.5 font-bold block">
                    UNDERWRITING PARTNER
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 10. Clean FAQ Accordions (White accordion cards on light background) */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 uppercase text-center mb-16">
            Frequently Requested Insights & Clarifications
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "What is the difference between a Will and a Trust?",
                a: "A Will details asset distribution after passing and goes through probate, while a Trust takes effect immediately during your lifetime, manages assets continuously, and bypasses the probate process entirely to maintain private distribution."
              },
              {
                q: "How does Visitor Medical Insurance protect inbound travelers?",
                a: "Visitor Medical Insurance provides essential coverage for medical emergencies, hospitalization, and travel protection for international relatives visiting the USA or traveling globally, shielding them from high out-of-pocket healthcare costs."
              },
              {
                q: "Can I combine Indexed Universal Life (IUL) with legacy estate planning?",
                a: "Yes. By linking an IUL policy with a Will or Trust structure, you can fund generational asset transfers using the tax-advantaged cash accumulation of your policy, creating an efficient wealth preservation framework."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-100 shadow-xl rounded-md overflow-hidden hover:shadow-2xl transition-all duration-300">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left text-xs md:text-sm font-bold uppercase tracking-wider text-slate-800 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <svg 
                    className={`w-4 h-4 text-[#c94b2b] transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 text-xs md:text-sm font-medium leading-relaxed text-slate-500 border-t border-slate-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Subscription Band & Multi-Zone Social Footer */}
      
      {/* Subscription Strip (Styled with orange/terracotta gradient) */}
      <section className="bg-gradient-to-r from-[#d25838] to-[#b83c21] py-16 text-white relative overflow-hidden">
        <h2 className="sr-only">Wealth Security Briefings Newsletter</h2>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider">
              Stay Informed on Wealth Security
            </h3>
            <p className="text-white/80 font-medium text-xs md:text-sm">
              Periodic fiduciary briefings and regulatory underwriting reports.
            </p>
          </div>
          
          <form onSubmit={handleSignUp} className="flex gap-2 w-full md:w-auto max-w-sm">
            <input 
              type="email" 
              required
              placeholder="Enter corporate email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 bg-white text-xs text-slate-900 rounded-md placeholder-slate-400 focus:outline-none"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-[#111111] hover:bg-neutral-900 text-white font-bold uppercase tracking-wider text-xs rounded-md transition-all shadow"
            >
              SIGN UP
            </button>
          </form>
        </div>
        {signedUp && (
          <div className="text-center text-xs text-white font-bold mt-4 animate-fade-in">
            Registration confirmed. Executive briefings initiated.
          </div>
        )}
      </section>

      {/* Nash Ecosystem Operations Section */}
      <section className="bg-slate-50 py-24 px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center md:text-left">
            <span className="text-[#c94b2b] font-extrabold text-[10px] tracking-widest uppercase block mb-3">
              NASH ECOSYSTEM OPERATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Strategic Alliance Ventures
            </h2>
            <div className="w-16 h-1 bg-[#c94b2b] rounded mt-4 mx-auto md:mx-0" />
          </div>

          {/* 4-Column Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card A: Real Estate Sector */}
            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 rounded-2xl p-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between">
              <div>
                <span className="text-slate-400 font-bold text-[10px] tracking-widest uppercase block mb-3">
                  Real Estate Sector
                </span>
                <h3 className="text-xl font-bold text-slate-950 mb-3">
                  Sreem Capital Realty
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Premium asset acquisitions, architectural capital mapping, and alternative commercial/residential land banking portfolios.
                </p>
              </div>
              <a 
                href="#" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold text-xs tracking-wide uppercase mt-4 block transition-colors"
              >
                Explore Holdings ➔
              </a>
            </div>

            {/* Card B: Matrimony Sector */}
            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 rounded-2xl p-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between">
              <div>
                <span className="text-slate-400 font-bold text-[10px] tracking-widest uppercase block mb-3">
                  Matrimony Sector
                </span>
                <h3 className="text-xl font-bold text-slate-950 mb-3">
                  Elite Knot Matrimony
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  A highly private, custom-vetted relationship network engineered exclusively for high-net-worth multi-generational family alliance consulting and premium matrimonial matches.
                </p>
              </div>
              <a 
                href="#" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold text-xs tracking-wide uppercase mt-4 block transition-colors"
              >
                Enter Network ➔
              </a>
            </div>

            {/* Card C: Mock Venture Sector */}
            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 rounded-2xl p-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between">
              <div>
                <span className="text-slate-400 font-bold text-[10px] tracking-widest uppercase block mb-3">
                  Mock Venture Sector
                </span>
                <h3 className="text-xl font-bold text-slate-950 mb-3">
                  Sreem Aviation & Concierge
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  High-utility asset allocation offering alternative private aviation scheduling, elite travel transit shields, and global bespoke concierge logistics for family office operations.
                </p>
              </div>
              <a 
                href="#" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold text-xs tracking-wide uppercase mt-4 block transition-colors"
              >
                Request Charter ➔
              </a>
            </div>

            {/* Ad Slot 2: Content Sidebar Companion Block */}
            <div className="w-full h-64 bg-slate-50 border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <span className="text-slate-400 text-xs tracking-wider uppercase whitespace-pre-line">
                Sponsorship Space Open{"\n\n"}Maximize Brand Impressions Globally
              </span>
            </div>
          </div>
        </div>
      </section>



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
  );
}
