"use client";

import { useState } from "react";
import { getAllStates, getStateData, NO_INCOME_TAX_STATES, type StateData } from "@/lib/llc-data";
import Link from "next/link";

const STATES = getAllStates();

export default function HomePage() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStates = STATES.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.abbr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <header className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold text-white">LLC Launch</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <Link href="/states" className="hover:text-white transition-colors">All States</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-emerald-800">
          <span>✓</span>
          <span>5.5 million new LLCs formed in 2023 — the record is still climbing</span>
        </div>
        <h1 className="text-5xl font-black text-white mb-4 leading-tight">
          Form Your LLC in Any State<br />
          <span className="text-emerald-400">Without a Lawyer</span>
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
          Get your <strong className="text-white">state-specific formation guide</strong>, Operating Agreement, Articles of Organization template, and EIN walkthrough — all in one kit.
        </p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="bg-red-950 border border-red-800 rounded-xl px-6 py-3 text-center">
            <div className="text-2xl font-black text-red-400">$299+</div>
            <div className="text-xs text-red-500 mt-0.5">LegalZoom</div>
          </div>
          <div className="text-2xl text-slate-500">vs</div>
          <div className="bg-emerald-950 border border-emerald-800 rounded-xl px-6 py-3 text-center">
            <div className="text-2xl font-black text-emerald-400">$19.99</div>
            <div className="text-xs text-emerald-500 mt-0.5">LLC Launch</div>
          </div>
        </div>
        <p className="text-sm text-slate-500">Free state guide · No account needed · Documents ready in minutes</p>
      </section>

      {/* State Selector */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            Pick Your State — Get Your Free Formation Guide
          </h2>
          <p className="text-slate-400 text-center mb-6 text-sm">
            Every state has different fees, requirements, and gotchas. Know before you file.
          </p>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search states..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 max-h-64 overflow-y-auto mb-6">
            {filteredStates.map((state) => (
              <button
                key={state.abbr}
                onClick={() => setSelectedState(state)}
                className={`py-2 px-1 rounded-lg text-xs font-semibold transition-all border ${
                  selectedState?.abbr === state.abbr
                    ? "bg-emerald-600 border-emerald-500 text-white"
                    : NO_INCOME_TAX_STATES.includes(state.abbr)
                    ? "bg-slate-800 border-emerald-900 text-emerald-400 hover:border-emerald-600"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
                }`}
              >
                {state.abbr}
              </button>
            ))}
          </div>
          <p className="text-xs text-emerald-400 mb-6">
            <span className="bg-emerald-950 border border-emerald-900 px-2 py-0.5 rounded">Green outline</span>
            {" "}= no state income tax
          </p>

          {/* State Guide */}
          {selectedState && <StateGuide state={selectedState} />}
          {!selectedState && (
            <div className="border border-dashed border-slate-700 rounded-xl p-12 text-center text-slate-500">
              <div className="text-4xl mb-3">👆</div>
              <p>Select your state above to see your free formation guide</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-black text-white text-center mb-3">How It Works</h2>
        <p className="text-slate-400 text-center mb-12">From idea to LLC in three simple steps</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              icon: "🗺️",
              title: "Get Your State Guide",
              desc: "Free instant guide for all 50 states. See filing fees, deadlines, naming rules, and the gotchas that trip up first-time founders.",
            },
            {
              step: "2",
              icon: "📄",
              title: "Download Your Documents",
              desc: "Get your Operating Agreement, Articles of Organization template, EIN walkthrough, and formation checklist — all personalized to your state.",
            },
            {
              step: "3",
              icon: "✅",
              title: "File & Launch",
              desc: "Submit directly to your Secretary of State. Most states accept online filing. Your LLC is active in days, not weeks.",
            },
          ].map((item) => (
            <div key={item.step} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-xs text-emerald-400 font-bold mb-1 uppercase tracking-wide">Step {item.step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-black text-white text-center mb-3">Simple Pricing</h2>
        <p className="text-slate-400 text-center mb-12">Pay once, own your documents forever</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="text-sm text-slate-400 font-medium mb-1">FREE</div>
            <div className="text-4xl font-black text-white mb-1">$0</div>
            <p className="text-slate-400 text-sm mb-6">Your state formation guide</p>
            <ul className="space-y-2 text-sm mb-6">
              {[
                "State-specific filing fees",
                "Processing time estimates",
                "Publication requirements",
                "Annual report details",
                "Tax overview",
                "Naming requirements",
                "Key warnings & gotchas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-slate-800 text-white py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors text-sm">
              Free — No Sign-Up
            </button>
          </div>
          <div className="bg-slate-900 border-2 border-emerald-500 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="text-sm text-emerald-400 font-medium mb-1">FULL KIT</div>
            <div className="text-4xl font-black text-white mb-1">$19.99</div>
            <p className="text-slate-400 text-sm mb-6">One-time · No subscription</p>
            <ul className="space-y-2 text-sm mb-6">
              {[
                "Everything in Free, plus:",
                "Operating Agreement (single or multi-member)",
                "Articles of Organization template",
                "EIN application walkthrough",
                "Formation checklist (step-by-step)",
                "Bank account setup guide",
                "First-year compliance calendar",
                "Registered agent explainer",
              ].map((item, i) => (
                <li key={item} className={`flex items-center gap-2 ${i === 0 ? "text-slate-500 text-xs" : "text-slate-300"}`}>
                  {i > 0 && <span className="text-emerald-400">✓</span>}
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/checkout"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold transition-colors text-sm flex items-center justify-center gap-2"
            >
              Get My LLC Kit — $19.99
            </Link>
            <p className="text-xs text-slate-500 text-center mt-3">vs $299 at LegalZoom · Save $279</p>
          </div>
        </div>
      </section>

      {/* State comparison quick hits */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Your State Choice Matters</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-2xl mb-2">💸</div>
            <h3 className="font-bold text-white mb-2">Filing Fees: $35 – $500</h3>
            <p className="text-sm text-slate-400">Montana charges $35. Massachusetts charges $500. Same LLC, 14x price difference. Pick strategically.</p>
          </div>
          <div className="bg-slate-900 border border-red-900 rounded-xl p-6">
            <div className="text-2xl mb-2">📰</div>
            <h3 className="font-bold text-white mb-2">Publication Trap (NY, AZ, NE)</h3>
            <p className="text-sm text-slate-400">New York requires newspaper publication that costs up to $2,000 in NYC. Most people don't know until after they file.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-2xl mb-2">🏦</div>
            <h3 className="font-bold text-white mb-2">Annual Fees: $0 – $800+</h3>
            <p className="text-sm text-slate-400">California's $800 annual franchise tax hits even inactive LLCs. Wyoming and Nevada have no income tax at all.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Common Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need a lawyer to form an LLC?",
              a: "No. LLC formation is paperwork — it's a form you submit to your state's Secretary of State. A lawyer can help with complex situations (multiple owners, outside investment, operating in multiple states) but for most simple LLCs, you don't need one.",
            },
            {
              q: "Should I form in Delaware, Nevada, or Wyoming?",
              a: "Only if you're raising VC funding (Delaware) or have specific asset protection needs. For most small businesses, form in your home state. If you form elsewhere, you'll need to 'foreign qualify' in your home state anyway — paying fees in two states instead of one.",
            },
            {
              q: "What's an Operating Agreement and do I need one?",
              a: "An Operating Agreement defines how your LLC is run — who owns what, how decisions are made, what happens if a member leaves. Most states don't legally require it (New York is an exception), but banks, investors, and courts expect you to have one. Always get one.",
            },
            {
              q: "How long does LLC formation take?",
              a: "Online filings in states like Colorado, Indiana, and New Mexico are often same-day or next-day. Most states take 3–7 business days. Some states (Massachusetts, New York) can take 2+ weeks without expediting.",
            },
            {
              q: "What's an EIN and do I need one?",
              a: "An EIN (Employer Identification Number) is your LLC's tax ID — like a Social Security number for your business. You need one to open a business bank account, hire employees, or file taxes. It's free from the IRS and takes about 10 minutes online.",
            },
          ].map((item) => (
            <details key={item.q} className="bg-slate-900 border border-slate-800 rounded-xl p-5 group">
              <summary className="text-white font-semibold cursor-pointer text-sm list-none flex items-center justify-between">
                {item.q}
                <span className="text-slate-500 group-open:rotate-180 transition-transform ml-4">▼</span>
              </summary>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p className="mb-2">⚡ <strong className="text-white">LLC Launch</strong> — Start Your LLC Without a Lawyer</p>
          <p className="text-xs text-slate-600">
            For informational purposes only. Not legal advice. Consult an attorney for complex situations.
          </p>
        </div>
      </footer>
    </div>
  );
}

function StateGuide({ state }: { state: StateData }) {
  const isNoIncomeTax = NO_INCOME_TAX_STATES.includes(state.abbr);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* State Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-2xl font-black text-white">{state.name} LLC Formation Guide</h3>
          <p className="text-slate-400 text-sm mt-1">Free guide · Last updated 2026</p>
        </div>
        <Link
          href={`/checkout?state=${state.abbr}`}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors"
        >
          Get Full {state.abbr} Kit — $19.99 →
        </Link>
      </div>

      {/* Warnings */}
      {(state.warnings.length > 0 || state.publicationRequired) && (
        <div className="bg-red-950 border border-red-800 rounded-xl p-4">
          <div className="flex items-center gap-2 text-red-400 font-bold mb-2 text-sm">
            <span>⚠️</span>
            <span>Important Warnings for {state.name}</span>
          </div>
          <ul className="space-y-1">
            {state.publicationRequired && (
              <li className="text-red-300 text-sm flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>{state.publicationNote}</span>
              </li>
            )}
            {state.warnings.map((w) => (
              <li key={w} className="text-red-300 text-sm flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatBox label="Filing Fee" value={`$${state.filingFee}`} note={state.processingTime} highlight={state.filingFee <= 75} />
        <StatBox
          label="Annual Cost"
          value={state.annualReportFee != null ? (state.annualReportFee === 0 ? "Free" : `$${state.annualReportFee}`) : "Varies"}
          note="Annual report/renewal"
          highlight={state.annualReportFee === 0}
        />
        <StatBox
          label="Income Tax"
          value={isNoIncomeTax ? "None ✓" : state.stateTax}
          note={isNoIncomeTax ? "No state income tax" : "State income tax"}
          highlight={isNoIncomeTax}
        />
        <StatBox
          label="Processing"
          value={state.processingTime.split("–")[0].trim()}
          note="Standard processing"
          highlight={state.processingTime.toLowerCase().includes("immediate") || state.processingTime.includes("1–2")}
        />
      </div>

      {/* Franchise Tax */}
      {state.franchiseTax != null && (
        <div className="bg-yellow-950 border border-yellow-800 rounded-xl p-4">
          <div className="text-yellow-400 font-bold text-sm mb-1">Annual Franchise / Privilege Tax</div>
          <p className="text-yellow-200 text-sm">{state.franchiseTaxNote}</p>
        </div>
      )}

      {/* Two columns */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Naming Requirements */}
        <div className="bg-slate-800 rounded-xl p-5">
          <h4 className="text-white font-bold mb-3 text-sm">Naming Requirements</h4>
          <ul className="space-y-1">
            {state.namingRequirements.map((req) => (
              <li key={req} className="text-slate-300 text-xs flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Operating Agreement */}
        <div className={`rounded-xl p-5 ${state.operatingAgreementRequired ? "bg-yellow-950 border border-yellow-800" : "bg-slate-800"}`}>
          <h4 className={`font-bold mb-2 text-sm ${state.operatingAgreementRequired ? "text-yellow-400" : "text-white"}`}>
            Operating Agreement {state.operatingAgreementRequired ? "⚠️ REQUIRED BY LAW" : ""}
          </h4>
          <p className="text-slate-300 text-xs leading-relaxed">{state.operatingAgreementNote}</p>
        </div>
      </div>

      {/* Key Facts */}
      <div className="bg-slate-800 rounded-xl p-5">
        <h4 className="text-white font-bold mb-3 text-sm">Key Facts for {state.name}</h4>
        <ul className="grid md:grid-cols-2 gap-1">
          {state.keyFacts.map((fact) => (
            <li key={fact} className="text-slate-300 text-xs flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              {fact}
            </li>
          ))}
        </ul>
      </div>

      {/* Filing Info */}
      <div className="bg-slate-800 rounded-xl p-5">
        <h4 className="text-white font-bold mb-3 text-sm">Where to File</h4>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-slate-500 text-xs mb-0.5">Filing Office</div>
            <div className="text-slate-200">{state.filingOffice}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-0.5">Official Filing URL</div>
            <a href={state.filingUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-xs break-all">
              {state.filingUrl}
            </a>
          </div>
        </div>
      </div>

      {/* Expedited */}
      {state.expeditedFee && (
        <div className="bg-slate-800 rounded-xl p-4 flex items-center gap-4">
          <span className="text-2xl">⚡</span>
          <div>
            <div className="text-white font-semibold text-sm">Expedited Processing Available</div>
            <div className="text-slate-400 text-xs">${state.expeditedFee} extra for {state.expeditedTime}</div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-6 text-center">
        <h4 className="text-white font-bold mb-1">Ready to file your {state.name} LLC?</h4>
        <p className="text-emerald-300 text-sm mb-4">
          Get your complete formation kit — Operating Agreement, Articles template, EIN guide, and compliance calendar — for $19.99
        </p>
        <Link
          href={`/checkout?state=${state.abbr}`}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold transition-colors"
        >
          Get My {state.name} LLC Kit — $19.99
        </Link>
        <p className="text-xs text-emerald-700 mt-2">vs $299 at LegalZoom · Instant download · No account needed</p>
      </div>
    </div>
  );
}

function StatBox({ label, value, note, highlight }: { label: string; value: string; note: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 ${highlight ? "bg-emerald-950 border border-emerald-800" : "bg-slate-800"}`}>
      <div className="text-slate-500 text-xs mb-1">{label}</div>
      <div className={`text-lg font-black ${highlight ? "text-emerald-400" : "text-white"}`}>{value}</div>
      <div className="text-slate-500 text-xs mt-0.5">{note}</div>
    </div>
  );
}
