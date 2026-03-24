import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLC Launch — Start Your LLC Without a Lawyer | 50-State Guide",
  description:
    "Form your LLC in any state for $19.99. Get your Operating Agreement, Articles of Organization guide, EIN walkthrough, and formation checklist. Save $280+ vs LegalZoom.",
  keywords: "LLC formation, start an LLC, operating agreement, articles of organization, LLC guide, form LLC online, LLC documents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-white">{children}</body>
    </html>
  );
}
