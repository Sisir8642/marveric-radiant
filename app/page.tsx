'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, TrendingUp, Users, Target, Award, Mail, Phone, MapPin, Briefcase, LineChart, Shield, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav
        className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <nav className="relative z-50"></nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="images/logo.jpeg"
                alt="logo, marvik"
                className="w-40 h-20 object-contain cursor-pointer"
              />
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className=" border-2 border-transparent hover:border-green-400 p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold ">HOME</button>
              <button onClick={() => scrollToSection('about')} className=" border-2 border-transparent hover:border-green-400 p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold">ABOUT US</button>
              <div className="relative group">

                <button className="border-2 border-transparent hover:border-green-400 p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold">
                  SERVICES
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <button
                    onClick={() => scrollToSection('entrepreneurs')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600"
                  >
                    FOR ENTREPRENEURS
                  </button>
                  <button
                    onClick={() => scrollToSection('investors')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600"
                  >
                    FOR INVESTORS
                  </button>
                </div>
              </div>
              <button onClick={() => scrollToSection('services')} className=" border-2 border-transparent hover:border-green-400 p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold">WHAT WE DO</button>
              <button onClick={() => scrollToSection('contact')} className=" border-2 border-transparent hover:border-green-400 p-2 rounded-3xl transition-all duration-500 zoom-out-65 text-gray-600 hover:text-blue-600 cursor-pointer font-bold">CONTACT</button>

            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <button onClick={() => scrollToSection('home')} className="block py-2 text-gray-700">Home</button>
              <button onClick={() => scrollToSection('about')} className="block py-2 text-gray-700">About</button>
              <button onClick={() => scrollToSection('services')} className="block py-2 text-gray-700">What We Do</button>
              <button onClick={() => scrollToSection('entrepreneurs')} className="block py-2 text-gray-700">For Entrepreneurs</button>
              <button onClick={() => scrollToSection('investors')} className="block py-2 text-gray-700">For Investors</button>
              <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-700">Contact</button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative w-full h-screen overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/vedios/newyork.mp4"
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
            transition={{ duration: 1 }}
          >
            Transforming Nepali Enterprises Through Strategic Investment
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-8 max-w-3xl mx-auto text-center leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            SEBON-licensed Private Equity and Venture Capital fund manager committed to empowering Nepal&apos;s private sector
          </motion.p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                onClick={() => scrollToSection('entrepreneurs')}
                size="lg"
                className="bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                For Entrepreneurs <ChevronRight className="ml-2" size={20} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection('investors')}
                size="lg"
                variant="outline"
                className="bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                For Investors <ChevronRight className="ml-2" size={20} />
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
            transition={{ duration: 0.9 }}
          // viewport={{ once: true }}
          >
            Our Impact
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-center text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          // viewport={{ once: true }}
          >
            We invest in transformative ideas and scalable business models capable of shaping Nepal&apos;s future.
            With a blend of global best practices and deep local expertise, we help build resilient companies
            that contribute to national growth, employment generation, and social prosperity.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                transition={{ duration: 0.6, delay: 0.2 * index }}
              // viewport={{ once: true }}
              >
                <p className="text-2xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Founded by accomplished professionals, institutions, and high net-worth individuals with a shared vision to provide structured, regulated private-sector financing in Nepal
              </p>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)", borderRadius: "1.5rem", }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card>
                  <CardHeader>
                    <Target className="w-12 h-12 text-green-600 mb-4" />
                    <CardTitle className='text-2xl font-semibold'>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      To be Nepal&apos;s most trusted and transformative private investment partner, enabling entrepreneurs and businesses to unlock their full potential.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: +100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)", borderRadius: "1.5rem", }}

                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >

                <Card>
                  <CardHeader>
                    <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                    <CardTitle className='text-2xl font-semibold'>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      To drive sustainable economic development by investing in high-growth sectors, strengthening operational capabilities of enterprises, and maximizing stakeholder value.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>


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
                  viewport={{ once: true }}
                >
                  <div className="bg-white/70 py-2 px-3 rounded-md backdrop-blur-sm">
                    <h4 className="font-semibold text-black-300">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </div>

      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">

            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <LineChart className="w-12 h-12 text-green-600 mb-4 f" />
                <CardTitle className='text-center text-1xl font-bold text-2xl'>Private Equity & Venture Capital Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We identify and invest in high-growth Nepali enterprises with strong expansion potential. Through structured financing solutions, we help businesses scale up, innovate, and strengthen their market positioning.
                </p>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <Briefcase className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className='text-center text-1xl font-bold text-2xl'>Operational Value Addition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Our team works closely with portfolio companies to:</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Improve governance and internal systems</li>
                  <li>• Enhance financial discipline</li>
                  <li>• Optimize operations and processes</li>
                  <li>• Build long-term strategic plans</li>
                  <li>• Navigate regulatory challenges</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mb-4 " />
                <CardTitle className='text-center text-1xl font-bold text-2xl'>Due Diligence & Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Our rigorous due diligence framework helps us:</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Identify strong business fundamentals</li>
                  <li>• Assess sectoral competitiveness</li>
                  <li>• Mitigate operational and financial risks</li>
                  <li>• Ensure sustained value creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <Target className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className='text-center text-1xl font-bold text-2xl'>Exit Strategy Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With disciplined exit planning, we maximize returns for investors while ensuring continued growth for portfolio companies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section id="entrepreneurs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white bg-[url('/images/entreprenaurs.jpg')] bg-cover bg-center relative sm:overflow-hidden ">
      <div className="absolute inset-0 backdrop-blur-lg bg-black/20"></div>
        <div
          className="max-w-7xl mx-auto "
        >


          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">For Entrepreneurs</h2>
            <p className="text-xl opacity-90">Fueling Ambition with Strategic Capital</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10 relative z-10">

            <p className="text-lg mb-8 text-center">
              If you are building a high-potential business and need growth capital, strategic guidance, or operational support, Maverick is your ideal partner.
            </p>

            <motion.div
              className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">We Help You:</h3>
              <ul className="space-y-2 text-lg">
                <li>• Refine your growth strategy</li>
                <li>• Access expertise and networks</li>
                <li>• Improve financial and operational strength</li>
                <li>• Scale sustainably</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Investment Sectors:</h3>
              <div className="flex flex-wrap gap-3">
                {['Technology', 'Manufacturing', 'Consumer Goods', 'Healthcare', 'Agriculture', 'Renewable Energy', 'Services'].map((sector) => (
                  <span key={sector} className="bg-white/20 px-4 py-2 cursor-pointer rounded-full text-sm hover:bg-white/30 transition">
                    {sector}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <div className="text-center">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-green-900 text-white-600 hover:bg-gray-300">
                Get in Touch <ChevronRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="investors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">For Investors</h2>
            <p className="text-xl text-gray-600">A Diversified & Disciplined Investment Platform</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            <p className="text-lg text-gray-600 mb-8 text-center">
              Maverick&apos;s funds provide investors with access to curated high-growth opportunities in Nepal&apos;s private sector.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-lg transform transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Our Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Thorough due diligence</li>
                    <li>• Structured investment processes</li>
                    <li>• Active portfolio monitoring</li>
                    <li>• Long-term value creation</li>
                    <li>• Strong governance & transparency</li>
                  </ul>
                </CardContent>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-lg transform transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Our Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We aim to deliver superior risk-adjusted returns while contributing to the growth of Nepal&apos;entrepreneurial ecosystem.
                  </p>
                </CardContent>
              </motion.div>
            </div>

            <div className="text-center">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-green-900 hover:bg-blue-800 text-white">
                Learn More <ChevronRight className="ml-2" size={20} />
              </Button>
            </div>
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
              <a href="tel:9704583930" className="text-black-900 hover:underline">9704583930</a>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow rounded-xl cursor-pointer">
            <CardContent className="flex flex-col items-center gap-3">
              <Mail className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:maverickkautilya@gmail.com" className="text-black-900 hover:underline">maverickkautilya@gmail.com</a>
            </CardContent>
          </Card>
        </div>
      </section>



      <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

          <div className="flex flex-col md:items-start items-center text-center md:text-left">
            <div className="flex items-center">
              <img
                src="images/logo.jpeg"
                alt="logo, marvik"
                className="w-40 h-20 object-contain cursor-pointer"
              />
            </div>
            <p className="text-gray-400 text-sm">
              SEBON-licensed Private Equity and Venture Capital fund manager
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="flex flex-col space-y-1">
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">What We Do</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 text-sm">Lainchaur, Kathmandu</p>
            <p className="text-gray-400 text-sm">9704583930</p>
            <p className="text-gray-400 text-sm">maverickradiant@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Maverick Kautilya Venture Limited. All rights reserved.
        </div>
      </footer>

    </div>
  );
}