'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Handshake, Mail, Phone, MapPin, Shield, BookOpen, LineChart, TrendingUp, Briefcase, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from "framer-motion";

import TypingMaveric from './components/animation';



export default function MaverickWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const values = [
    {
      image: "images/Collaboration.jpg",
      title: "Collaboration and Discipline"
    },
    {
      image: "images/Impact.jpg",
      title: "Impact and Sustainability"
    },
    {
      image: "images/Innovation.jpg",
      title: "Innovation and Entrepreneurship"
    },
    {
      image: "images/integrity.jpg",
      title: "Integrity and Governance"
    }
  ];


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      <section id="home" className="relative w-full h-screen overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/vedios/nepal.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            Transforming Nepali Enterprises Through Strategic Investment
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-8 max-w-3xl mx-auto text-center leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            SEBON-licensed Private Equity and Venture Capital fund manager committed to empowering Nepal&apos;s private sector
          </motion.p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                onClick={() => scrollToSection('news')}
                size="lg"
                className="bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                News And Article <ChevronRight className="ml-2" size={20} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection('investments')}
                size="lg"
                variant="outline"
                className="bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Investments <ChevronRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-green-900  text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          // viewport={{ once: true }}
          >
            Why Maverick?
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-center text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Maverick Kautilya Venture Limited combines deep industry expertise with innovative perspectives to identify overlooked opportunities and high-potential ventures. We provide strategic guidance, operational support, and market access, enabling businesses to scale sustainably. By aligning investments with national priorities and global best practices, we deliver measurable impact and long-term value for investors, entrepreneurs, and communities alike.
          </motion.p>


          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Companies Funded", value: "25+" },
              { title: "Jobs Created", value: "1,200+" },
              { title: "Social Projects", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              // viewport={{ once: true }}
              >
                <p className="text-2xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>


      <div className="bg-gray-50 rounded-lg p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h3>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm cursor-pointer h-48 flex flex-col justify-end"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="bg-white/70 py-2 px-3 rounded-md backdrop-blur-sm">
                <h4 className="font-semibold text-black-300">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section>

      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-3">
                What makes <TypingMaveric /> different ?
              </h2>
            </div>

          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">

            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <Handshake className="w-12 h-12 text-green-600 mb-4 f" />
                <CardTitle className='text-center text-1xl font-bold text-2xl'>Collaborative Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We leverage our well-connected network across institutional investors, entrepreneurs, and the global Nepali diaspora to unlock meaningful opportunities and strategic partnerships.</p>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className='text-center text-1xl font-bold text-2xl'>Industry Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Our team of seasoned professionals with deep expertise in financial services, legal advisory and renewable energy brings a unique approach to private equity investing in Nepal, enabling us to identify opportunities and high-potential ventures.</p>

              </CardContent>
            </Card>

            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <LineChart className="w-12 h-12 text-green-600 mb-4 " />
                <CardTitle className='text-center text-1xl font-bold text-2xl'>Diversified Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We manage sector-diversified investments across multiple industries and business segments, covering different growth stages. This approach allows us to:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Build a balanced and resilient investment portfolio</li>
                  <li>• Capture opportunities across varied market cycles</li>
                  <li>• Leverage cross-industry insights for smarter allocation</li>
                  <li>• Support companies from early growth to maturity</li>
                </ul>
              </CardContent>

            </Card>

            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className='text-center text-1xl font-bold text-2xl'>Sustainable Investing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We aim to integrate sustainability into our investments and business operations to drive better outcomes and responsible growth. This enables us to:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Promote long-term environmental and social resilience</li>
                  <li>• Support businesses committed to responsible practices</li>
                  <li>• Align investment decisions with global sustainability standards</li>
                  <li>• Generate value while minimizing negative impact</li>
                </ul>
              </CardContent>

            </Card>
          </div>
        </div>
      </section>

      <section id="whatWeDo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive investment and advisory services to drive sustainable growth
            </p>
          </div>

          {/* HORIZONTAL SCROLL ROW */}
          <div className="flex space-x-8 overflow-x-auto pb-4 no-scrollbar">

            {[
              {
                title: "Private Equity Investments",
                desc: "Maverick invests in SMEs, startups, and companies nearing IPO — providing capital, strategy, and hands-on growth support.",
                Icon: LineChart
              },
              {
                title: "Financial Optimization & Capital Structuring",
                desc: "We improve capital structure, profitability, cash flow, and long-term stability for sustainable growth.",
                Icon: TrendingUp
              },
              {
                title: "Institutional Liaison & Credit Facilitation",
                desc: "We connect businesses with banks to secure subsidized loans, structured financing, and optimized credit solutions.",
                Icon: Briefcase
              },
              {
                title: "Advisory & Value-Creation Services",
                desc: "End-to-end advisory including modeling, business planning, governance, and strategic restructuring.",
                Icon: Lightbulb
              },
              {
                title: "Growth & Exit Preparation",
                desc: "We prepare companies for IPOs, strategic exits, and scaled expansion with governance and market readiness.",
                Icon: Target
              }
            ].map((item, i) => (
              <Card
                key={i}
                className="min-w-[300px] max-w-[300px] bg-white h-[420px] shadow-md hover:shadow-xl rounded-xl transition-all duration-300 transform hover:-translate-y-1 fade-up flex flex-col"
              >
                <CardHeader className="flex-1">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-green-200 p-4 rounded-xl">
                      <item.Icon className="w-10 h-10 text-green-500" />
                    </div>

                    <CardTitle className="text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}

          </div>
        </div>

        {/* Animation */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

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


      <section
        id="investments"
        className="relative bg-[url('/images/entreprenaurs.jpg')] bg-cover bg-center text-white"
      >
        {/* Overlay */}
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Investments
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-10">
            Target sectors, investment process, and our flagship Maverick Fund-101.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Targeted Sectors",
                description:
                  "Energy, ICT, Infrastructure, Agriculture, Health, Education, Tourism & Hospitality.",
                link: "/investments",
                image: "/images/integrity.jpg",
                
              },
              {
                title: "Investment Process",
                description:
                  "A structured 13-step due diligence and approval process ensuring governance and quality.",
                link: "/investments",
              },
              {
                title: "Maverick Fund-101",
                description:
                  "A NPR 75 Crore fund focusing on renewable energy and mid-market high-growth businesses.",
                link: "/investments",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group relative rounded-xl overflow-hidden"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md transition group-hover:bg-white/20"></div>

                {/* Card content */}
                <div className="relative p-6 h-full min-h-80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 line-clamp-4 ">
                      {item.description}
                    </p>
                  </div>

                  {/* Button */}
                  <span className="inline-block mt-6 px-4 py-2 bg-green-800 rounded-full text-sm group-hover:bg-green-900 transition">
                    Learn More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Line clamp */}
        <style>{`
    .line-clamp-4 {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `}</style>
      </section>



      <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Articles</h2>
            <p className="text-lg text-gray-600">Latest insights, announcements, and industry updates.</p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Nepal’s Private Equity Outlook 2025",
                description: "Explore how Nepal’s evolving market landscape is shaping future investment opportunities.",
                image: "/images/integrity.jpg",
              },
              {
                title: "Renewable Energy: The Next Growth Engine",
                description: "A deep dive into why renewable energy continues to dominate institutional investment trends.",
                image: "/images/innovation.jpg",
              },
              {
                title: "Maverick Fund-101 Reaches New Milestones",
                description: "Inside the fund’s recent progress, portfolio expansion, and future strategic direction.",
                image: "/images/impact.jpg",
              },
            ].map((article, index) => (
              <a key={index} href="/news" className="block">
                <div className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">

                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img src={article.image} className="w-full h-full object-cover" alt={article.title} />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>

                    <span className="text-green-700 font-semibold hover:underline text-sm">
                      Read More →
                    </span>
                  </div>

                </div>
              </a>
            ))}

          </div>

        </div>
      </section>





      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-lg text-gray-600">Get in touch with our team</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Card className="p-6 hover:shadow-lg transition-shadow rounded-xl cursor-pointer">
            <CardContent className="flex flex-col items-center gap-3">
              <MapPin className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold">Address</h3>
              <p className="text-black-600">Lainchaur, Kathmandu</p>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow rounded-xl cursor-pointer">
            <CardContent className="flex flex-col items-center gap-3">
              <Phone className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:9704583930" className="text-black-900 hover:underline">14547944 / 9704583930</a>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow rounded-xl cursor-pointer">
            <CardContent className="flex flex-col items-center gap-3">
              <Mail className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:maverickkautilya@gmail.com" className="text-black-900 hover:underline">venture@maverickkautilya.com</a>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}