'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function BoardOfDirectors() {

  const topDirector = {
    name: "Mr. Mukti Bodh Neupane",
    title: "Executive Director",
    image: "/images/innovation.jpg",
    description:
      "Senior finance and infrastructure professional with 20+ years of experience across the energy and infrastructure sectors. Chartered Accountant with extensive financial and sectoral expertise.",
  };

  const otherMembers = [
    {
      name: "Mr. Gehanath Dhungana",
      title: "Board Member",
      image: "/images/innovation.jpg",
      description:
        "MBA-qualified veteran with 30+ years in Nepal's banking sector, including leadership roles in top commercial banks.",
    },
    {
      name: "Mr. Bharat Bahadur Khatri",
      title: "Board Member",
      image: "/images/bharat.jpg",
      description:
        "Seasoned leader with an LLM degree. Chairman at multiple power companies with extensive hydropower development expertise.",
    },
    {
      name: "Ms. Smritee Paudel",
      title: "Board Member & Head of Business Development",
      image: "/images/smritee.jpg",
      description:
        "7+ years’ experience in renewable energy, sustainability, and infrastructure. Holds an M.Sc. from Asian Institute of Technology.",
    },
    {
      name: "Ms. Suzata Khadka",
      title: "Board Member",
      image: "/images/suzata.jpg",
      description:
        "Finance professional with strong experience in auditing, financial management, and corporate finance.",
    },
  ];

  return (
    <section id="board_of_directors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Board of Directors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strong leadership guiding long-term strategic vision and governance.
          </p>
        </div>

        {/* Board of Directors Title */}
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Executive Leadership</h3>

        {/* Top Executive Director (Same design as Management topMember) */}
        <div className="flex justify-center mb-16">
          <Card className="bg-white shadow-md border rounded-xl w-110">
            <CardContent className="p-0">

              <div className="w-full h-60 overflow-hidden rounded-t-xl">
                <img
                  src={topDirector.image}
                  alt={topDirector.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {topDirector.name}
                </h4>

                <p className="text-green-600 font-semibold mb-3 text-sm">
                  {topDirector.title}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {topDirector.description}
                </p>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Other Board Members (Same grid as Management Team) */}
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Board Members</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {otherMembers.map((member, i) => (
            <Card key={i} className="bg-white shadow-md border rounded-xl w-85">
              <CardContent className="p-0">

                <div className="w-full h-50 overflow-hidden rounded-t-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h4>

                  <p className="text-green-600 font-semibold mb-3 text-sm">
                    {member.title}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
