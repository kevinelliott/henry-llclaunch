import { getAllStates, NO_INCOME_TAX_STATES } from "@/lib/llc-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLC Formation Fees & Requirements — All 50 States | LLC Launch",
  description: "Compare LLC filing fees, processing times, annual report costs, and requirements for all 50 states. Find the cheapest and fastest state to form your LLC.",
};

export default function StatesPage() {
  const states = getAllStates();
  const sortedByFee = [...states].sort((a, b) => a.filingFee - b.filingFee);

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold text-white">LLC Launch</span>
          </Link>
          <Link href="/" className="text-slate-400 hover:text-white text-sm">← Back to Home</Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black text-white mb-3 text-center">LLC Formation Costs — All 50 States</h1>
        <p className="text-slate-400 text-center mb-10">
          Compare filing fees, processing times, and annual costs. State fees range from <strong className="text-emerald-400">$35 (Montana)</strong> to <strong className="text-red-400">$500 (Massachusetts)</strong>.
        </p>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-emerald-400">$35</div>
            <div className="text-slate-400 text-xs">Cheapest (Montana)</div>
          </div>
          <div className="bg-red-950 border border-red-800 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-red-400">$500</div>
            <div className="text-slate-400 text-xs">Most Expensive (Massachusetts)</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-white">9</div>
            <div className="text-slate-400 text-xs">No Income Tax States</div>
          </div>
          <div className="bg-yellow-950 border border-yellow-800 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-yellow-400">3</div>
            <div className="text-slate-400 text-xs">Publication Required (NY/AZ/NE)</div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-slate-400 text-xs uppercase tracking-wide">
                <tr>
                  <th className="text-left px-4 py-3">State</th>
                  <th className="text-right px-4 py-3">Filing Fee</th>
                  <th className="text-right px-4 py-3">Annual Fee</th>
                  <th className="text-left px-4 py-3 hidden md:table-cell">Processing</th>
                  <th className="text-left px-4 py-3 hidden md:table-cell">Income Tax</th>
                  <th className="text-left px-4 py-3 hidden lg:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {sortedByFee.map((state) => {
                  const noTax = NO_INCOME_TAX_STATES.includes(state.abbr);
                  const pubRequired = state.publicationRequired;
                  const highAnnual = (state.annualReportFee ?? 0) >= 200 || state.franchiseTax != null;
                  return (
                    <tr key={state.abbr} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 font-mono text-xs w-7">{state.abbr}</span>
                          <span className="text-white font-medium">{state.name}</span>
                          {pubRequired && (
                            <span className="text-xs bg-red-950 text-red-400 border border-red-800 px-1.5 py-0.5 rounded">pub req</span>
                          )}
                        </div>
                      </td>
                      <td className={`px-4 py-3 text-right font-bold ${state.filingFee <= 75 ? "text-emerald-400" : state.filingFee >= 300 ? "text-red-400" : "text-white"}`}>
                        ${state.filingFee}
                      </td>
                      <td className={`px-4 py-3 text-right ${state.annualReportFee === 0 ? "text-emerald-400" : highAnnual ? "text-red-400" : "text-slate-300"}`}>
                        {state.annualReportFee === 0 ? "Free" : state.annualReportFee != null ? `$${state.annualReportFee}` : "Varies"}
                        {state.franchiseTax != null && <span className="text-yellow-500"> +tax</span>}
                      </td>
                      <td className="px-4 py-3 text-slate-400 hidden md:table-cell text-xs">
                        {state.processingTime.split("–")[0]}
                      </td>
                      <td className={`px-4 py-3 hidden md:table-cell text-xs ${noTax ? "text-emerald-400 font-semibold" : "text-slate-400"}`}>
                        {noTax ? "None ✓" : state.stateTax}
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-xs text-slate-500">
                        {state.warnings[0] ? state.warnings[0].substring(0, 60) + "..." : state.keyFacts[0]?.substring(0, 60) || ""}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to form your LLC?</h2>
          <p className="text-slate-400 mb-6">Get your state-specific guide for free, then grab the full document kit for $19.99</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold transition-colors"
          >
            ← Get My Free State Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
