"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Investments() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* MAIN TITLE */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 fade-up">
          Investments
        </h1>

        {/* TARGET SECTORS */}
        <div className="mb-20 fade-up">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Targeted Sectors</h2>
          <p className="text-gray-600 mb-4">
            The broad areas of investment of the fund include but are not limited to:
          </p>

          <ul className="space-y-3">
            {[
              "Energy and Alternative Energy",
              "Information & Communication Technologies",
              "Infrastructure, Real Estate & related sectors",
              "Agriculture & related industries",
              "Health, Education & related sectors",
              "Tourism, Hospitality & allied industries",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-green-600 w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* INVESTMENT PROCESS */}
        <div className="mb-20 fade-up">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Investment Process / Due Diligence Flow
          </h2>

          <div className="space-y-4 border-l-4 border-green-600 pl-6">
            {[
              "Initial Screening & Understanding the Business",
              "Preliminary Analysis (Initial Due Diligence)",
              "Term Sheet Signing",
              "Comprehensive Due Diligence",
              "Investment Committee (IC) Approval",
              "Deal Structuring",
              "Negotiation and Final Term Sheet",
              "Preparation & Signing of Definitive Agreement",
              "Fulfillment of Conditions Precedent",
              "Capital Injection (Fund Disbursement)",
              "Post-Investment Monitoring",
              "Value Addition & Strategic Support",
              "Exit Planning and Execution",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm md:text-base">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TARGET STRATEGY */}
        <div className="mb-20 fade-up">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Investment Focus</h2>

          <p className="text-gray-600 leading-relaxed">
            The Fund targets early-stage SMEs with scalable models, growth-stage companies preparing
            for public listing, and high-return potential businesses in priority sectors identified by
            the Government of Nepal (GoN), including energy and infrastructure.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            The Fund also prioritizes import-substituting and export-oriented enterprises.
          </p>
        </div>

        {/* FUND - MAVERICK 101 */}
        <div className="fade-up">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Maverick Fund-101</h2>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Maverick Fund-101 is a governance-driven private equity fund positioned to harness
                Nepal’s rapidly expanding renewable energy and mid-market sectors.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                With a corpus of <strong>NPR 75 Crore</strong>, the Fund aims to attract high-net-worth
                individuals and institutional investors seeking priority returns, strategic
                involvement, and exposure to high-growth opportunities.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Focused on fundamentally strong, growth-stage companies and pre-IPO prospects, the
                Fund provides active value creation, operational guidance, and strategic oversight —
                driving sustainable development and long-term value creation.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>

      {/* Animation */}
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease-out forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
