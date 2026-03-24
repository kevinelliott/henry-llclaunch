"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAllStates } from "@/lib/llc-data";
import Link from "next/link";

const STATES = getAllStates();

function CheckoutInner() {
  const params = useSearchParams();
  const stateAbbr = params.get("state") || "CA";
  const [selectedState, setSelectedState] = useState(stateAbbr);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const stateData = STATES.find((s) => s.abbr === selectedState);

  const handleCheckout = async () => {
    if (!email) { alert("Please enter your email address."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: selectedState, email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        alert("Checkout temporarily unavailable. Please try again.");
      }
    } catch {
      alert("Checkout temporarily unavailable. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mb-4 inline-block">← Back to LLC Launch</Link>
          <h1 className="text-3xl font-black text-white">Get Your LLC Formation Kit</h1>
          <p className="text-slate-400 mt-2">Everything you need to form your LLC — personalized to your state</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left — Order Details */}
          <div className="md:col-span-2 space-y-4">
            {/* State Selection */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-white font-bold mb-4">Which state are you forming in?</h2>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
              >
                {STATES.map((s) => (
                  <option key={s.abbr} value={s.abbr}>{s.name}</option>
                ))}
              </select>
              {stateData && (
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-800 rounded-lg p-3">
                    <div className="text-slate-500 text-xs">State Filing Fee</div>
                    <div className="text-white font-bold">${stateData.filingFee}</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3">
                    <div className="text-slate-500 text-xs">Processing</div>
                    <div className="text-white font-bold text-xs">{stateData.processingTime.split("–")[0]}</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3">
                    <div className="text-slate-500 text-xs">Annual Fee</div>
                    <div className="text-white font-bold">{stateData.annualReportFee === 0 ? "Free" : `$${stateData.annualReportFee}`}</div>
                  </div>
                </div>
              )}
            </div>

            {/* What's Included */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-white font-bold mb-4">What's in Your {selectedState} LLC Kit</h2>
              <ul className="space-y-3">
                {[
                  {
                    icon: "📋",
                    title: "Operating Agreement",
                    desc: "Single-member or multi-member template, pre-filled for " + (stateData?.name || selectedState),
                  },
                  {
                    icon: "📝",
                    title: "Articles of Organization Template",
                    desc: `State-specific template matching ${stateData?.filingOffice || "your Secretary of State"} requirements`,
                  },
                  {
                    icon: "🆔",
                    title: "EIN Application Walkthrough",
                    desc: "Step-by-step guide to getting your free Employer Identification Number from the IRS",
                  },
                  {
                    icon: "✅",
                    title: "Formation Checklist",
                    desc: "Every step from filing to opening your business bank account, in order",
                  },
                  {
                    icon: "📅",
                    title: "First-Year Compliance Calendar",
                    desc: `All ${stateData?.name || selectedState} deadlines for your first 12 months — annual reports, tax filings, and renewals`,
                  },
                  {
                    icon: "🏦",
                    title: "Business Bank Account Guide",
                    desc: "Which banks accept single-member LLCs, what documents they require, and how to set up properly",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {stateData?.warnings && stateData.warnings.length > 0 && (
                <div className="mt-4 bg-red-950 border border-red-800 rounded-xl p-4">
                  <div className="text-red-400 font-bold text-sm mb-1">⚠️ {selectedState}-Specific Warning Included</div>
                  <p className="text-red-300 text-xs">{stateData.warnings[0]}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right — Payment */}
          <div className="space-y-4">
            <div className="bg-slate-900 border-2 border-emerald-600 rounded-2xl p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-slate-400 text-sm line-through mb-1">$299 at LegalZoom</div>
                <div className="text-4xl font-black text-emerald-400">$19.99</div>
                <div className="text-slate-400 text-xs mt-1">One-time · No subscription</div>
              </div>

              <div className="mb-4">
                <label className="text-slate-400 text-xs mb-1 block">Email (for document delivery)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-sm"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>🔒</span>
                    <span>Get My LLC Kit — $19.99</span>
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center mt-3">
                Secure payment via Stripe. Instant download after purchase.
              </p>

              <div className="mt-4 space-y-2">
                {["✓ Instant download — no waiting", "✓ State-specific to " + (stateData?.name || selectedState), "✓ One-time payment, keep forever", "✓ Save $279 vs LegalZoom"].map((item) => (
                  <div key={item} className="text-xs text-slate-400">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>}>
      <CheckoutInner />
    </Suspense>
  );
}
