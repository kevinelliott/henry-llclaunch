"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getStateData } from "@/lib/llc-data";
import Link from "next/link";

function buildOperatingAgreement(state: string, stateName: string): string {
  const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return `OPERATING AGREEMENT OF [YOUR LLC NAME], LLC

A ${stateName} Limited Liability Company

Effective Date: [DATE]
Prepared using LLC Launch · llclaunch.com

═══════════════════════════════════════════════════════════════

ARTICLE I — ORGANIZATION

1.1 Formation. [YOUR LLC NAME], LLC (the "Company") is a limited liability company 
    organized under the laws of the State of ${stateName}.

1.2 Name. The name of the Company is [YOUR LLC NAME], LLC.

1.3 Principal Office. The principal place of business of the Company is:
    [YOUR STREET ADDRESS]
    [YOUR CITY, STATE, ZIP CODE]

1.4 Registered Agent. The registered agent of the Company is:
    [REGISTERED AGENT NAME]
    [REGISTERED AGENT ADDRESS]
    ${stateName}

1.5 Purpose. The Company is organized for the purpose of engaging in any lawful 
    business activity permitted under the laws of ${stateName}.

1.6 Term. The Company shall continue until dissolved in accordance with this 
    Agreement or applicable law.

═══════════════════════════════════════════════════════════════

ARTICLE II — MEMBERS AND MEMBERSHIP INTERESTS

2.1 Initial Members. The initial member(s) of the Company are:

    Member 1:
    Name: [YOUR FULL NAME]
    Address: [YOUR ADDRESS]
    Membership Interest: [100% for single-member / specify % for multi-member]
    Capital Contribution: $[AMOUNT]

    [If multi-member, add additional members here:]
    Member 2:
    Name: [MEMBER 2 NAME]
    Address: [MEMBER 2 ADDRESS]
    Membership Interest: [PERCENTAGE]%
    Capital Contribution: $[AMOUNT]

2.2 Additional Members. Additional members may be admitted only with the unanimous 
    written consent of all existing members.

2.3 Membership Interests. Membership interests shall be expressed as a percentage.
    No fractional interests are permitted below 0.01%.

═══════════════════════════════════════════════════════════════

ARTICLE III — MANAGEMENT

3.1 Management Structure. The Company shall be:
    [X] Member-Managed (most common for small LLCs)
    [ ] Manager-Managed (complete if managed by designated manager(s))

3.2 Member-Managed. If member-managed, each member shall have authority to:
    (a) Execute contracts on behalf of the Company up to $[THRESHOLD] without 
        approval of other members;
    (b) Open and manage bank accounts;
    (c) Hire and terminate employees and contractors;
    (d) Purchase and sell assets in the ordinary course of business.

3.3 Major Decisions. The following decisions require unanimous written consent 
    of all members:
    (a) Admission of new members;
    (b) Amendment of this Operating Agreement;
    (c) Sale, lease, or transfer of substantially all Company assets;
    (d) Merger, consolidation, or dissolution of the Company;
    (e) Any single expenditure exceeding $[MAJOR THRESHOLD];
    (f) Incurring debt exceeding $[DEBT THRESHOLD].

═══════════════════════════════════════════════════════════════

ARTICLE IV — CAPITAL CONTRIBUTIONS AND DISTRIBUTIONS

4.1 Initial Capital Contributions. Each member has made or agreed to make the 
    capital contribution listed in Article II above.

4.2 Additional Contributions. No member shall be required to make additional 
    capital contributions. Additional contributions may be made with unanimous 
    written consent of all members.

4.3 Distributions. Distributions shall be made to members in proportion to their 
    membership interests at such times and in such amounts as determined by the 
    members (if member-managed) or managers (if manager-managed).

4.4 No Distribution in Kind. No distribution of non-cash assets may be made 
    without unanimous written consent of all members.

4.5 Limitations on Distributions. No distribution shall be made if, after giving 
    effect to the distribution, the Company would be unable to pay its debts as 
    they become due in the ordinary course of business.

═══════════════════════════════════════════════════════════════

ARTICLE V — ALLOCATIONS

5.1 Profits and Losses. The Company's net profits and net losses shall be 
    allocated among the members in proportion to their respective membership 
    interests.

5.2 Tax Allocations. For income tax purposes, each item of Company income, gain, 
    loss, deduction, and credit shall be allocated among the members in the same 
    manner as the corresponding item is allocated for book purposes.

═══════════════════════════════════════════════════════════════

ARTICLE VI — TRANSFERS OF MEMBERSHIP INTERESTS

6.1 Restrictions on Transfer. No member may sell, assign, transfer, pledge, 
    hypothecate, or otherwise dispose of all or any portion of their membership 
    interest without the prior written consent of all other members.

6.2 Right of First Refusal. Before any member may transfer their interest to a 
    third party, they must first offer the interest to the remaining members on 
    the same terms and conditions.

6.3 Effect of Unauthorized Transfer. Any purported transfer in violation of this 
    Article shall be void and of no effect.

═══════════════════════════════════════════════════════════════

ARTICLE VII — WITHDRAWAL AND DISSOCIATION

7.1 Voluntary Withdrawal. A member may withdraw from the Company upon [90] days' 
    written notice to all other members, subject to the buyout provisions herein.

7.2 Buyout Upon Withdrawal. Upon a member's withdrawal, the Company shall purchase 
    the withdrawing member's interest at fair market value as determined by a 
    mutually agreed-upon independent appraiser.

7.3 Dissociation Events. A member is dissociated upon:
    (a) Voluntary withdrawal per Section 7.1;
    (b) Death or dissolution of the member;
    (c) Bankruptcy of the member;
    (d) Expulsion by unanimous vote of remaining members for cause.

═══════════════════════════════════════════════════════════════

ARTICLE VIII — DISSOLUTION AND WINDING UP

8.1 Events of Dissolution. The Company shall be dissolved upon:
    (a) Written consent of all members;
    (b) Entry of a judicial decree of dissolution;
    (c) As required by ${stateName} law.

8.2 Winding Up. Upon dissolution, the Company shall:
    (a) Cease carrying on business except as necessary to wind up;
    (b) Collect amounts owed to the Company;
    (c) Pay or make provision for all debts and obligations;
    (d) Distribute remaining assets to members in proportion to their interests.

═══════════════════════════════════════════════════════════════

ARTICLE IX — BOOKS, RECORDS, AND ACCOUNTING

9.1 Books and Records. The Company shall maintain at its principal place of 
    business: articles of organization, this agreement, financial statements, 
    tax returns for 3 years, and records of member information.

9.2 Fiscal Year. The Company's fiscal year shall be the calendar year (January 1 
    through December 31).

9.3 Accounting Method. The Company shall use the [cash/accrual] method of 
    accounting for tax purposes.

═══════════════════════════════════════════════════════════════

ARTICLE X — TAXES

10.1 Tax Classification. The Company shall be taxed as a [disregarded entity 
     (single-member) / partnership (multi-member)] for federal income tax purposes, 
     unless the members unanimously elect otherwise.

10.2 Tax Matters. The tax matters member responsible for tax filings is:
     [MEMBER NAME]

═══════════════════════════════════════════════════════════════

ARTICLE XI — MISCELLANEOUS

11.1 Entire Agreement. This Operating Agreement constitutes the entire agreement 
     of the members with respect to the subject matter hereof.

11.2 Amendments. This Agreement may be amended only by the unanimous written 
     consent of all members.

11.3 Governing Law. This Agreement shall be governed by and construed in 
     accordance with the laws of the State of ${stateName}.

11.4 Severability. If any provision is held invalid, the remaining provisions 
     remain in full force.

11.5 Counterparts. This Agreement may be executed in counterparts.

═══════════════════════════════════════════════════════════════

SIGNATURES

IN WITNESS WHEREOF, the member(s) have executed this Operating Agreement as 
of the date first written above.

Member 1:

Signature: ____________________________

Print Name: ____________________________

Date: ____________________________

Member 2 (if applicable):

Signature: ____________________________

Print Name: ____________________________

Date: ____________________________

═══════════════════════════════════════════════════════════════

GENERATED BY LLC LAUNCH — llclaunch.com
For informational purposes only. Not legal advice.
Consider consulting a licensed attorney for complex situations.
Generated: ${date}
State: ${stateName}
`;
}

function buildFormationChecklist(state: string, stateName: string, filingFee: number, filingUrl: string): string {
  return `${stateName.toUpperCase()} LLC FORMATION CHECKLIST
Generated by LLC Launch · llclaunch.com

═══════════════════════════════════════════════════════════════

BEFORE YOU FILE
═══════════════════════════════════════════════════════════════

□ 1. CHOOSE YOUR LLC NAME
   • Must include "LLC", "L.L.C.", or "Limited Liability Company"
   • Check name availability: ${filingUrl}
   • Search your state's business name database
   • Consider reserving the name if processing takes time

□ 2. CHOOSE A REGISTERED AGENT
   Options:
   a) Serve as your own registered agent (must have physical address in ${stateName})
   b) Hire a registered agent service ($49–$299/year)
      Recommended services: Northwest ($49/yr), ZenBusiness ($99/yr), Registered Agents Inc.
   
□ 3. DECIDE ON MANAGEMENT STRUCTURE
   • Member-Managed: Members run the business (most common for small LLCs)
   • Manager-Managed: Designated managers run the business

□ 4. DETERMINE NUMBER OF MEMBERS
   • Single-member LLC: You're the only owner
   • Multi-member LLC: Two or more owners (need % split agreement)

═══════════════════════════════════════════════════════════════

FILING YOUR LLC
═══════════════════════════════════════════════════════════════

□ 5. FILE ARTICLES OF ORGANIZATION
   • Filing office: State Secretary of State / Division of Corporations
   • Filing fee: $${filingFee}
   • Online filing portal: ${filingUrl}
   • Have ready: LLC name, registered agent info, member names, purpose

□ 6. PAY STATE FILING FEE
   • Amount: $${filingFee}
   • Accepted: Credit card (online) or check (mail)

□ 7. WAIT FOR APPROVAL
   • Standard processing: Varies by state
   • Tip: Pay for expedited processing if you're in a hurry

═══════════════════════════════════════════════════════════════

AFTER YOUR LLC IS APPROVED
═══════════════════════════════════════════════════════════════

□ 8. GET YOUR EIN (EMPLOYER IDENTIFICATION NUMBER)
   • Free from IRS — takes ~10 minutes
   • Apply at: irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
   • Required for: bank accounts, taxes, hiring employees
   • Apply online Monday–Friday 7am–10pm ET

□ 9. CREATE YOUR OPERATING AGREEMENT
   • Use the template provided in this kit
   • Not legally required in most states (but always recommended)
   • Required in: New York
   • Keep signed copy in your business records

□ 10. OPEN A BUSINESS BANK ACCOUNT
   Bring to the bank:
   □ Your LLC's approved Articles of Organization
   □ Your EIN letter from the IRS
   □ Your Operating Agreement
   □ Photo ID
   □ Initial deposit ($25–$100 typical minimum)
   
   Good options for LLC bank accounts:
   • Mercury (online, no fees, excellent for LLCs)
   • Chase Business Complete Banking ($15/mo, waivable)
   • Bank of America Business Advantage

□ 11. GET A BUSINESS LICENSE (if required)
   • Most businesses need a local business license
   • Check with your city/county clerk
   • Cost: $25–$150 typically
   • Industry-specific licenses may also be required

□ 12. SET UP ACCOUNTING
   • Open business bank account BEFORE any transactions
   • NEVER mix personal and business funds
   • Simple options: Wave (free), QuickBooks ($15/mo), Bench ($299/mo)
   • Save ALL receipts digitally (Expensify, Receipts by Wave)

□ 13. GET BUSINESS INSURANCE (if applicable)
   • General Liability: $200–$600/year (most small businesses)
   • Professional Liability (E&O): If you give advice or provide services
   • Workers' Comp: Required if you have employees
   
□ 14. SET UP FEDERAL AND STATE TAXES
   • LLC default: Pass-through taxation (income reported on personal return)
   • File Schedule C (single-member) or Form 1065 (multi-member)
   • Consider S-Corp election if you'll pay yourself $50K+ (saves on SE tax)
   • Quarterly estimated taxes due: April 15, June 15, Sep 15, Jan 15

═══════════════════════════════════════════════════════════════

ONGOING COMPLIANCE FOR ${stateName.toUpperCase()}
═══════════════════════════════════════════════════════════════

□ FILE ANNUAL REPORT (if required for ${stateName})
   • Check state requirements for due dates and fees
   • Failure to file = LLC can be suspended or dissolved
   • Set a calendar reminder NOW

□ MAINTAIN SEPARATE FINANCES
   • Never pay personal expenses from LLC account
   • "Piercing the corporate veil" = losing liability protection

□ KEEP RECORDS CURRENT
   • Update registered agent address if it changes
   • Update member information if members change
   • Amend Articles of Organization if name changes

═══════════════════════════════════════════════════════════════

IMPORTANT DEADLINES — SET THESE REMINDERS NOW
═══════════════════════════════════════════════════════════════

□ Annual Report / Renewal: Check your state's specific date
□ Federal Taxes: April 15 (extensions available)
□ Quarterly Estimated Taxes: April 15, June 15, Sep 15, Jan 15
□ State Business Taxes: Check ${stateName} DOR for deadlines

═══════════════════════════════════════════════════════════════

GENERATED BY LLC LAUNCH — llclaunch.com
For informational purposes only. Not legal advice.
State: ${stateName} | Date Generated: ${new Date().toLocaleDateString()}
`;
}

function SuccessInner() {
  const params = useSearchParams();
  const state = params.get("state") || "CA";
  const stateData = getStateData(state);
  const stateName = stateData?.name || state;
  const [downloading, setDownloading] = useState<string | null>(null);

  const downloadDoc = (filename: string, content: string) => {
    setDownloading(filename);
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloading(null), 1000);
  };

  const documents = [
    {
      id: "operating-agreement",
      icon: "📋",
      title: "Operating Agreement",
      desc: `Complete ${stateName} operating agreement template — single or multi-member`,
      filename: `${state}-LLC-Operating-Agreement.txt`,
      content: buildOperatingAgreement(state, stateName),
    },
    {
      id: "checklist",
      icon: "✅",
      title: "Formation Checklist",
      desc: `Every step to launch your ${stateName} LLC, in order`,
      filename: `${state}-LLC-Formation-Checklist.txt`,
      content: buildFormationChecklist(
        state,
        stateName,
        stateData?.filingFee || 100,
        stateData?.filingUrl || "sos.gov"
      ),
    },
    {
      id: "articles-guide",
      icon: "📝",
      title: "Articles of Organization Guide",
      desc: `What to write in each field for ${stateName}'s Articles of Organization`,
      filename: `${state}-Articles-of-Organization-Guide.txt`,
      content: buildArticlesGuide(state, stateName, stateData),
    },
    {
      id: "ein-guide",
      icon: "🆔",
      title: "EIN Application Walkthrough",
      desc: "Free IRS EIN application — step by step, takes 10 minutes",
      filename: "EIN-Application-Guide.txt",
      content: buildEINGuide(stateName),
    },
    {
      id: "compliance-calendar",
      icon: "📅",
      title: "First-Year Compliance Calendar",
      desc: `Every ${stateName} deadline for your first 12 months`,
      filename: `${state}-Compliance-Calendar.txt`,
      content: buildComplianceCalendar(state, stateName, stateData),
    },
    {
      id: "bank-guide",
      icon: "🏦",
      title: "Business Bank Account Guide",
      desc: "Best banks for LLCs, what documents they need, how to set up",
      filename: "Business-Bank-Account-Guide.txt",
      content: buildBankGuide(stateName),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-black text-white mb-2">Your {stateName} LLC Kit is Ready!</h1>
          <p className="text-slate-400">Download all 6 documents below. Keep them — you own them forever.</p>
        </div>

        <div className="space-y-3 mb-8">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{doc.icon}</span>
                <div>
                  <div className="text-white font-semibold text-sm">{doc.title}</div>
                  <div className="text-slate-400 text-xs">{doc.desc}</div>
                </div>
              </div>
              <button
                onClick={() => downloadDoc(doc.filename, doc.content)}
                disabled={downloading === doc.filename}
                className="bg-emerald-700 hover:bg-emerald-600 disabled:opacity-60 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap flex-shrink-0"
              >
                {downloading === doc.filename ? "↓ Downloading..." : "↓ Download"}
              </button>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <h2 className="text-white font-bold mb-4">Your Next Steps</h2>
          <ol className="space-y-3">
            {[
              `Download all 6 documents above`,
              `Check your ${stateName} LLC name availability at the Secretary of State website`,
              "Choose a registered agent (or serve as your own)",
              `File your Articles of Organization online — $${stateData?.filingFee} state fee`,
              "Apply for your free EIN from the IRS (10 minutes)",
              "Open a business bank account (bring your Articles + EIN letter)",
              "Sign your Operating Agreement and store it safely",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-900 text-emerald-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <span className="text-slate-300 text-sm">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {stateData?.filingUrl && (
          <div className="text-center mb-6">
            <a
              href={stateData.filingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              File Your {stateName} LLC Now →
            </a>
            <p className="text-xs text-slate-500 mt-2">{stateData.filingOffice} — Official Filing Portal</p>
          </div>
        )}

        <div className="text-center">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 text-sm">
            ← Back to LLC Launch
          </Link>
        </div>
      </div>
    </div>
  );
}

function buildArticlesGuide(state: string, stateName: string, stateData: ReturnType<typeof getStateData>): string {
  return `ARTICLES OF ORGANIZATION GUIDE — ${stateName.toUpperCase()}
Generated by LLC Launch · llclaunch.com

═══════════════════════════════════════════════════════════════

This guide walks you through each field in ${stateName}'s Articles of Organization form.
File at: ${stateData?.filingUrl || "Your state Secretary of State website"}
Filing fee: $${stateData?.filingFee || "Check state website"}

═══════════════════════════════════════════════════════════════

FIELD 1: LLC NAME
━━━━━━━━━━━━━━━━
What to write: The exact name of your LLC, including the designator

Rules for ${stateName}:
${stateData?.namingRequirements.map((r) => `• ${r}`).join("\n") || "• Must include LLC or Limited Liability Company"}

Tips:
• Check availability first at the Secretary of State website
• The name you put here is your LEGAL name — used on all official documents
• You can use a DBA (trade name) for marketing under a different name

Example: "Acme Consulting, LLC" or "Smith Home Services, L.L.C."

═══════════════════════════════════════════════════════════════

FIELD 2: REGISTERED AGENT
━━━━━━━━━━━━━━━━━━━━━━━━━
What to write: Name and physical address of your registered agent in ${stateName}

A registered agent:
• Must have a physical address in ${stateName} (no P.O. boxes)
• Must be available during normal business hours
• Receives legal documents and official notices on behalf of your LLC

Option A — Yourself or a member:
Write your name and address in ${stateName}

Option B — Registered agent service:
Write the service's name and their ${stateName} address
(Get their exact information from the service you choose)

Recommended services:
• Northwest Registered Agent — $49/year (excellent privacy)
• ZenBusiness — $99/year (good all-around)
• Registered Agents Inc. — $100/year

${stateData?.registeredAgentRequired === false ? "NOTE: " + stateName + " is one of the few states that does not require a registered agent!" : ""}

═══════════════════════════════════════════════════════════════

FIELD 3: ORGANIZER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
What to write: Name and address of the person filing (the organizer)

This is usually:
• You (if you're filing yourself)
• Your attorney (if they're filing for you)
• Your registered agent service (if they file for you)

Note: The organizer does NOT have to be a member. They're just the person filing the paperwork.

═══════════════════════════════════════════════════════════════

FIELD 4: PRINCIPAL OFFICE ADDRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
What to write: Your LLC's main business address

Tips:
• Can be a home address
• Can be a virtual office address
• Can be your registered agent's address (some states)
• P.O. boxes are sometimes not accepted — check your state form

═══════════════════════════════════════════════════════════════

FIELD 5: MANAGEMENT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
What to select: Member-Managed or Manager-Managed

Member-Managed: Members run the business directly
→ Choose this for most small LLCs

Manager-Managed: One or more managers run the business
(managers can be members OR outsiders)
→ Choose this if you have passive investors

═══════════════════════════════════════════════════════════════

FIELD 6: PURPOSE (if asked)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
What to write: "To engage in any lawful business activity permitted under the laws of ${stateName}."

Most states accept this broad purpose statement. Use it unless you have a reason to be more specific.

═══════════════════════════════════════════════════════════════

AFTER FILING
━━━━━━━━━━━━
• Save your approved Articles of Organization — you'll need them to open a bank account
• Note your LLC's effective date
• Set a reminder for your annual report: ${stateData?.annualReportDue || "Check state requirements"}

${stateData?.publicationRequired ? `
⚠️ IMPORTANT: PUBLICATION REQUIRED IN ${stateName.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${stateData.publicationNote}
Do not ignore this — it is a legal requirement.
` : ""}

═══════════════════════════════════════════════════════════════
GENERATED BY LLC LAUNCH — llclaunch.com
For informational purposes only. Not legal advice.
`;
}

function buildEINGuide(_stateName: string): string {
  return `EIN APPLICATION GUIDE — FREE FROM THE IRS
Generated by LLC Launch · llclaunch.com

═══════════════════════════════════════════════════════════════

An EIN (Employer Identification Number) is your LLC's tax ID number.
It's like a Social Security Number for your business.

Cost: FREE
Time: ~10 minutes
Where: IRS.gov (official site only)

═══════════════════════════════════════════════════════════════

WHEN YOU NEED AN EIN
━━━━━━━━━━━━━━━━━━━━
You MUST have an EIN to:
□ Open a business bank account
□ Hire employees
□ File business tax returns
□ Apply for business credit
□ Work with most clients and vendors

Single-member LLC special note:
Even if you don't have employees, you should get an EIN to:
• Open a business bank account (most banks require it)
• Keep your Social Security Number off business forms
• File taxes as a business entity

═══════════════════════════════════════════════════════════════

HOW TO APPLY (STEP BY STEP)
━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Go to: https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
   (Only use the official IRS website — irs.gov — never pay for an EIN)

2. Click "Apply Online Now"
   Available: Monday–Friday, 7am–10pm ET

3. Select entity type: "Limited Liability Company (LLC)"

4. Enter number of members:
   • "1" for single-member LLC
   • The number for multi-member LLC

5. Select "Started a new business"

6. Enter your LLC information:
   • Legal name (exactly as it appears on your Articles of Organization)
   • State of formation
   • Principal address

7. Enter responsible party information:
   • This is typically you (the primary member)
   • You'll provide your SSN or ITIN

8. Select "Banking purposes" as one of your reasons (if applicable)

9. Review and submit

10. YOUR EIN IS ISSUED IMMEDIATELY
    • Download/print the EIN confirmation letter
    • You can use this immediately to open a bank account
    • A physical letter arrives by mail in 4–5 weeks — save it

═══════════════════════════════════════════════════════════════

IMPORTANT NOTES
━━━━━━━━━━━━━━━

□ Never pay for an EIN — the IRS issues them for free
□ You can only apply for one EIN per day per responsible party
□ Your EIN never expires and never changes
□ If you lose your EIN number, call the IRS Business & Specialty Tax Line: 1-800-829-4933

EIN FORMAT: XX-XXXXXXX (9 digits, formatted with a hyphen after the 2nd digit)

═══════════════════════════════════════════════════════════════

WHAT TO DO WITH YOUR EIN
━━━━━━━━━━━━━━━━━━━━━━━━

After receiving your EIN:
1. Open a business bank account (bring your EIN letter)
2. Set up business accounting software
3. Give it to clients who need a W-9 from you
4. Use it on all federal and state tax forms
5. Keep your EIN letter somewhere safe — you'll need it repeatedly

═══════════════════════════════════════════════════════════════
GENERATED BY LLC LAUNCH — llclaunch.com
For informational purposes only. Not legal advice.
`;
}

function buildComplianceCalendar(state: string, stateName: string, stateData: ReturnType<typeof getStateData>): string {
  const year = new Date().getFullYear();
  return `${stateName.toUpperCase()} LLC FIRST-YEAR COMPLIANCE CALENDAR
Generated by LLC Launch · llclaunch.com

═══════════════════════════════════════════════════════════════

IMMEDIATELY AFTER FORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Apply for EIN (irs.gov — free, 10 minutes)
□ Sign Operating Agreement
□ Open business bank account
□ Get local business license (if required)
${stateData?.publicationRequired ? `□ ⚠️ COMPLETE PUBLICATION REQUIREMENT: ${stateData.publicationNote}` : ""}

WITHIN 30 DAYS
━━━━━━━━━━━━━━
□ Set up business accounting (Wave/QuickBooks/etc.)
□ Transfer initial capital contribution to business bank account
□ Separate all personal and business transactions from this point forward
□ Research state and local business licenses for your industry

WITHIN 90 DAYS
━━━━━━━━━━━━━━
□ Determine if you need professional licenses for your industry
□ Set up payroll (if hiring employees) — QuickBooks Payroll, Gusto, or ADP
□ Consider business insurance (general liability minimum)
□ Review state sales tax obligations — if you sell physical goods, you may need to collect sales tax

QUARTERLY (ONGOING)
━━━━━━━━━━━━━━━━━━━
□ Q1 estimated taxes due: April 15
□ Q2 estimated taxes due: June 15
□ Q3 estimated taxes due: September 15
□ Q4 estimated taxes due: January 15

  Calculate using IRS Form 1040-ES
  Safe harbor: pay 100% of last year's tax liability in equal installments
  Penalty: ~7.5% on underpaid amounts

ANNUAL DEADLINES — ${stateName.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Annual Report / Renewal: ${stateData?.annualReportDue || "Check Secretary of State website"}
  Fee: ${stateData?.annualReportFee === 0 ? "Free" : stateData?.annualReportFee != null ? "$" + stateData.annualReportFee : "Check state website"}
  Filing link: ${stateData?.filingUrl || "Secretary of State website"}

${stateData?.franchiseTax ? `□ Franchise/Privilege Tax: ${stateData.franchiseTaxNote}` : ""}

FEDERAL TAX DEADLINES
━━━━━━━━━━━━━━━━━━━━━
□ March 15: Multi-member LLC Form 1065 + K-1s due (or file extension)
□ April 15: Single-member LLC Schedule C due with personal return (or extension)
□ April 15: Personal income tax return (Form 1040) due
□ October 15: Extended business/personal return due (if extension filed)

CALENDAR REMINDERS TO SET NOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Set these reminders in your calendar TODAY:

📅 April 15 — Q1 estimated taxes + Federal tax returns
📅 June 15 — Q2 estimated taxes
📅 September 15 — Q3 estimated taxes
📅 January 15 (next year) — Q4 estimated taxes
📅 ${stateData?.annualReportDue || "Check state website"} — State annual report/renewal

═══════════════════════════════════════════════════════════════

GOOD HABITS TO BUILD FROM DAY ONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Never mix personal and business money — ever
2. Save ALL receipts (use Expensify, Receipts by Wave, or a physical folder)
3. Reconcile your bank account monthly
4. Keep your registered agent address current
5. Review your Operating Agreement annually
6. Store approved Articles of Organization somewhere you can find them

═══════════════════════════════════════════════════════════════
GENERATED BY LLC LAUNCH — llclaunch.com
State: ${stateName} | ${state} | For informational purposes only. Not legal advice.
`;
}

function buildBankGuide(stateName: string): string {
  return `BUSINESS BANK ACCOUNT GUIDE FOR LLC OWNERS
Generated by LLC Launch · llclaunch.com

═══════════════════════════════════════════════════════════════

Opening a dedicated business bank account is THE most important step
after forming your LLC. It's what separates your personal and business
finances — the legal foundation of your liability protection.

NEVER use your personal account for business transactions.
This is called "piercing the corporate veil" and it means a court
can hold you personally liable for business debts.

═══════════════════════════════════════════════════════════════

WHAT YOU'LL NEED TO OPEN A BUSINESS ACCOUNT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Your LLC's approved Articles of Organization (the state-stamped copy)
□ Your EIN confirmation letter from the IRS
□ Your Operating Agreement (most banks require it)
□ Government-issued photo ID (driver's license or passport)
□ Initial deposit ($25–$100 for most banks)
□ Your LLC's physical business address (not P.O. box)

═══════════════════════════════════════════════════════════════

BEST BANKS FOR LLCs IN ${stateName.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ONLINE BANKS (no minimum balance, no fees, excellent for small LLCs)
────────────────────────────────────────────────────────────────────

🏆 Mercury (mercury.com) — BEST OVERALL FOR SMALL LLCs
   • $0 monthly fee, no minimum balance
   • Excellent UI/API integrations
   • Supports early-stage businesses and LLCs
   • FDIC insured through partner banks
   • Apply online in ~10 minutes
   • Bonus: Free virtual + physical debit cards

🥈 Relay (relayfi.com) — BEST FOR EXPENSE MANAGEMENT
   • $0 monthly fee
   • Up to 20 checking accounts + 2 savings accounts
   • Real-time expense categories
   • Integrates with QuickBooks, Wave, Xero
   • Good for businesses with multiple expense categories

🥉 Bluevine (bluevine.com) — BEST FOR EARNING INTEREST
   • 2.0%+ APY on balances (rare for business accounts)
   • $0 monthly fee
   • Free unlimited transactions

TRADITIONAL BANKS (local branches, better for cash-heavy businesses)
────────────────────────────────────────────────────────────────────

Chase Business Complete Banking
   • $15/mo (waived with $2,000+ daily balance or $2,000 in deposits)
   • 20 free teller transactions/mo
   • Best if you need branch access, wire transfers, or cash deposits
   • Open online or in-branch
   • Required: Articles of Organization + EIN + Operating Agreement

Bank of America Business Advantage Fundamentals
   • $16/mo (waived with $5,000 average monthly balance)
   • 200 free transactions/mo
   • Good if you already bank at BofA personally

Wells Fargo Initiate Business Checking
   • $10/mo (waived with $500 average balance)
   • 100 free transactions/mo
   • Decent option if you need widespread branch access

Credit Unions (often best rates and fees)
   • Navy Federal (military/government connections)
   • Your local credit union — often lower fees than big banks
   • Requirements vary — call ahead

═══════════════════════════════════════════════════════════════

PRO TIPS
━━━━━━━━

1. APPLY FOR EIN FIRST
   You need your EIN before most banks will open an account.
   The IRS issues EINs for free at irs.gov.

2. GET YOUR ARTICLES APPROVED FIRST
   You need the state-stamped/approved Articles of Organization.
   Don't apply for a bank account with a pending filing.

3. OPEN MERCURY OR RELAY IF YOU'RE ONLINE-FIRST
   Zero fees, excellent integrations, and they understand LLCs.
   Chase is great if you need cash deposits or in-person banking.

4. SET UP ACCOUNTING SOFTWARE IMMEDIATELY
   Connect your bank account to:
   • Wave (free, excellent for small LLCs)
   • QuickBooks Self-Employed ($15/mo)
   • QuickBooks Online ($30/mo, more features)
   • Xero ($13/mo, popular with bookkeepers)

5. GET A BUSINESS DEBIT CARD FIRST, CREDIT LATER
   Most accounts include a free debit card.
   Apply for a business credit card after 3–6 months of bank history.

6. DON'T COMINGLE FUNDS
   The moment you pay a personal expense from your business account
   (or vice versa), you've started "commingling" funds.
   This is the #1 reason courts pierce the LLC veil.

═══════════════════════════════════════════════════════════════
GENERATED BY LLC LAUNCH — llclaunch.com
For informational purposes only. Not legal advice.
`;
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading your kit...</div>}>
      <SuccessInner />
    </Suspense>
  );
}
