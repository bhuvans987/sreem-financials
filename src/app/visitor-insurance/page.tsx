"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function VisitorInsurance() {
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
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#c94b2b] selection:text-white">
      
      {/* 1. Top Black Utility Bar (Matches homepage top bar exactly) */}
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
      
      {/* 2. Middle Main Logo/Contact Header (Matches homepage exactly) */}
      <div className="w-full bg-white py-5 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100">
        {/* Logo */}
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

      {/* 3. Navigation Bar (Matches homepage perfectly) */}
      <header className="sticky top-0 z-50 bg-[#1c1c1c] shadow-lg transition-all duration-300">
        <div className="max-w-none mx-auto h-16 flex items-center justify-between relative w-full pl-6 md:pl-12">
          
          {/* Navigation Links inside charcoal container */}
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

          {/* CTA & Mobile Burger */}
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

      {/* 1. Integrated Hero Section (Light Canvas Setup) */}
      <section className="bg-slate-50 py-20 px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 border border-[#c94b2b]/30 bg-[#c94b2b]/5 text-[#c94b2b] uppercase tracking-widest text-xs font-bold mb-6 rounded-full">
            • Executive Inbound Advisory •
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-8">
            Bespoke International Visitor Medical Insulation
          </h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
            <p>
              Temporary travel medical policies serve as a critical financial shield, insulating inbound relatives, parents, and international guests from hyper-expensive, out-of-pocket US healthcare liabilities. A single unexpected medical event or emergency room visit in the United States can result in compounding financial liabilities that threaten family assets.
            </p>
            <p>
              Understanding the design of inbound protection requires analyzing the critical difference between Fixed-Coverage plans and Comprehensive PPO Networks. Fixed-Coverage plans cap payouts per medical event or service at predefined, low thresholds, leaving the policyholder responsible for any excess costs. Conversely, Comprehensive PPO Networks offer dynamic percentage-based protection shields (typically covering 80% to 100% of eligible expenses) after the selected deductible is satisfied, providing far stronger protection against catastrophic medical bills.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The 3 Pillars Grid Component */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PILLAR A */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-[#c94b2b]/30 hover:shadow-md hover:-translate-y-1 transform transition-all duration-300">
            <div>
              <span className="text-[#c94b2b] font-extrabold text-xs tracking-widest uppercase block mb-3">
                PILLAR A
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Deductible Selection
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                Choose an initial risk threshold (ranging from $0 to $2,500) that fits your budget before policy coverage kicks in. Selecting a higher deductible lowers your premium contribution while structuring defined risk boundaries.
              </p>
            </div>
          </div>

          {/* PILLAR B */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-[#c94b2b]/30 hover:shadow-md hover:-translate-y-1 transform transition-all duration-300">
            <div>
              <span className="text-[#c94b2b] font-extrabold text-xs tracking-widest uppercase block mb-3">
                PILLAR B
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Preferred Provider Networks (PPO)
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                Gain direct access to established doctor networks (like UnitedHealthcare or First Health) to secure lower contracted rates automatically. Bypassing out-of-network penalties ensures smooth, direct billing.
              </p>
            </div>
          </div>

          {/* PILLAR C */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-[#c94b2b]/30 hover:shadow-md hover:-translate-y-1 transform transition-all duration-300">
            <div>
              <span className="text-[#c94b2b] font-extrabold text-xs tracking-widest uppercase block mb-3">
                PILLAR C
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Acute Onset of Pre-Existing Conditions
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                Secure essential coverage layers for sudden, unexpected recurrences of stabilized chronic conditions during transit. Crucial protection for visiting parents with historically managed health profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Provider Comparison Matrix Layout */}
      <section className="bg-slate-50 py-16 px-8 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 uppercase">
              Interactive Provider Comparison Matrix
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-semibold mt-2">
              Select and review verified, top-tier international travel medical options.
            </p>
            <div className="w-16 h-1 bg-[#c94b2b] rounded mt-3 mx-auto md:mx-0" />
          </div>

          <div className="space-y-6">
            
            {/* Row 1: Patriot Plus */}
            <div id="img" className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-2xl p-8 border-b border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 space-y-3">
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold tracking-widest uppercase rounded-full">
                  • Popular PPO Choice
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Patriot Plus</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">by IMG</p>
                </div>
                <ul className="space-y-2 mt-3 list-none">
                  <li className="text-slate-600 text-sm pl-2 font-medium">— Broad International Network</li>
                  <li className="text-slate-600 text-sm pl-2 font-medium">— High-Limit Cash Insulation</li>
                  <li className="text-slate-600 text-sm pl-2 font-medium">— Ideal for Visiting Parents</li>
                </ul>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <a 
                  href="https://www.imglobal.com/img-producer-insurance-plans/patriot_plus?IMGAC=539747&svi=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-auto text-center px-8 py-3 bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Get Quote ➔
                </a>
              </div>
            </div>

            {/* Row 2: Atlas Travel */}
            <div id="worldtrips" className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-2xl p-8 border-b border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 space-y-3">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold tracking-widest uppercase rounded-full">
                  • Premium Supplemental Guard
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Atlas Travel</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">by WorldTrips</p>
                </div>
                <ul className="space-y-2 mt-3 list-none">
                  <li className="text-slate-600 text-sm pl-2 font-medium">— Emergency Medical Evacuation</li>
                  <li className="text-slate-600 text-sm pl-2 font-medium">— Flexible Deductible Thresholds</li>
                  <li className="text-slate-600 text-sm pl-2 font-medium">— Inbound US Relative Protection</li>
                </ul>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <a 
                  href="https://quote.worldtrips.com/AtlasTravel/Home?referid=22999-0053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-auto text-center px-8 py-3 bg-gradient-to-r from-[#d25838] to-[#b83c21] hover:from-[#b83c21] hover:to-[#a03118] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Get Quote ➔
                </a>
              </div>
            </div>

            {/* Row 3: Sreem Broker Marketplace */}
            <div id="marketplace" className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-2xl p-8 border-b border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 space-y-3">
                <div className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold tracking-widest uppercase rounded-full">
                  • Multi-Carrier Directory
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Sreem Broker Marketplace</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Visitor Plans</p>
                </div>
                <ul className="space-y-2 mt-3 list-none">
                  <li className="text-slate-600 text-sm pl-2 font-medium">— Compare 20+ Policies Side-by-Side</li>
                  <li className="text-slate-600 text-sm pl-2 font-medium">— Instant Quote Generation</li>
                  <li className="text-slate-600 text-sm pl-2 font-medium">— Dedicated Broker Oversight</li>
                </ul>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <a 
                  href="https://www.visitorplans.com/agent/NareshMaddimsetty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-auto text-center px-8 py-3 border-2 border-[#c94b2b] hover:bg-[#c94b2b]/5 text-[#c94b2b] font-bold text-xs uppercase tracking-wider rounded-lg transition-all hover:shadow-sm transform hover:-translate-y-0.5"
                >
                  Compare Plans ➔
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. Subscription Band & Multi-Zone Social Footer */}
      
      {/* Subscription Strip (Styled with orange/terracotta gradient) */}
      <section className="bg-gradient-to-r from-[#d25838] to-[#b83c21] py-16 text-white relative overflow-hidden">
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

          {/* 3-Column Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

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
