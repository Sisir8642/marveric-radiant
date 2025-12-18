import React from "react";

const page = () => {
  return (
    <section className="mt-20 py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            News & Articles
          </h1>
          <p className="text-gray-600">
            Latest insights, announcements, and industry updates.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-10">

          <article>
            <span className="text-sm text-green-700 font-semibold">
              Jan 12, 2025 • Investment
            </span>
            <h2 className="text-xl font-bold text-gray-900 mt-2 mb-2">
              Nepal’s Private Equity Outlook 2025
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nepal’s private equity sector continues to evolve with increasing
              investor confidence, regulatory improvements, and growing
              opportunities across energy, infrastructure, and technology.
            </p>
          </article>

          <article>
            <span className="text-sm text-green-700 font-semibold">
              Feb 03, 2025 • Energy
            </span>
            <h2 className="text-xl font-bold text-gray-900 mt-2 mb-2">
              Renewable Energy: The Next Growth Engine
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Renewable energy remains a key investment focus as sustainability,
              policy support, and regional power demand drive long-term growth
              potential.
            </p>
          </article>

          <article>
            <span className="text-sm text-green-700 font-semibold">
              Mar 18, 2025 • Funds
            </span>
            <h2 className="text-xl font-bold text-gray-900 mt-2 mb-2">
              Maverick Fund-101 Reaches New Milestones
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Maverick Fund-101 continues to expand its portfolio, strengthening
              its strategic position through disciplined investment and value
              creation.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default page;
