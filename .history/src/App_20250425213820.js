import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CaseStudyPage from './components/CaseStudyPage';
import headshot from "../public/kayajonesheadshot.jpeg"

export default function AgencyLandingPage() {
  const testimonials = [
    {
      author: 'Will Hubbard, CEO @ Thryve AI',
      text: 'Working with Kayacancode was the smartest move we made. The systems just work, and the execution was fast, flexible, and founder-friendly.',
      video: 'https://kayarjones901.wistia.com/medias/ka9fvaqeth'
    },
    {
      author: 'Alex Rivera, CEO @ BuildFlow',
      text: null,
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      author: 'Jamie Tran, Product @ FinLaunch',
      text: 'Kaya helped us hit our MVP deadline in 3 weeks flat!',
      video: null
    }
  ];

  const [index, setIndex] = useState(0);
  const goToTestimonial = i => setIndex(i);

  // Case study data - only Thryve AI
  const caseStudies = [
    {
      id: 'thryve-ai',
      title: 'Thryve AI',
      subtitle: 'AI-Powered Learning Platform',
      description: 'We developed a complete AI-powered platform for Thryve AI — including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      techStack: ['OpenAI', 'Pinecone', 'Supabase', 'Next.js'],
      results: ['50% increase in user engagement', '30% improvement in learning outcomes']
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-b from-white to-[#f1f5ff] text-gray-900 font-sans">
            {/* Hero Section */}
            <section className="relative px-6 py-40 bg-gradient-to-tr from-[#dbeafe] via-[#c7d2fe] to-[#e0e7ff] text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-center bg-cover opacity-5 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-10 z-0"></div>
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-6xl font-extrabold text-[#1e1e2f] max-w-5xl mx-auto leading-tight"
                >
                  Build Fast. Launch Smart.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="mt-6 text-xl text-[#3a3a4f] max-w-3xl mx-auto"
                >
                  AI-Powered Business Development for Startups, Creatives, and Founders
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-10 px-8 py-4 bg-[#4f46e5] text-white rounded-2xl font-semibold hover:bg-[#4338ca] transition shadow-lg hover:shadow-xl"
                >
                  Get Started
                </motion.button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
            </section>

            {/* Pain Point Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="px-6 py-24 bg-[#f6f7fb] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
              <h2 className="text-4xl font-bold text-[#1e1e2f] mb-4">That Technical Co-founder You've Been Looking For</h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-4xl mx-auto text-left text-gray-800 bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#4f46e5]">The Problem:</h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 mt-1">1</span>
                    <span>Non-technical founders want to build, but lack time and a technical network.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 mt-1">2</span>
                    <span>Cheap labor overseas causes miscommunication and lacks transparency.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 mt-1">3</span>
                    <span>Founders want someone who feels like part of the team—genuine, invested, and local.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 mt-1">4</span>
                    <span>They crave authentic collaboration and a modern build process.</span>
                  </li>
                </ul>
              </motion.div>
            </motion.section>

            {/* Solution Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="px-6 py-24 bg-white text-center relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
              <h2 className="text-4xl font-bold text-[#1e1e2f] mb-6">Our Solution</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-10">
                We make technology simple and transparent—guiding businesses through AI adoption with clear communication, rapid delivery, and data-driven iteration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left text-gray-800">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  className="p-6 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100"
                >
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Communication & Transparency</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Upfront payment terms via Zelle</li>
                    <li>Weekly Loom progress videos</li>
                    <li>Task tracking in Linear</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  className="p-6 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100"
                >
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Rapid Delivery & Feedback</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>MVPs shipped in 2–4 weeks</li>
                    <li>User feedback prioritization</li>
                    <li>Iterative sprints and updates</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  className="p-6 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100"
                >
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Data-Informed Development</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Built-in analytics & A/B testing</li>
                    <li>Click tracking & dashboards</li>
                    <li>Performance optimization tools</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  className="p-6 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100"
                >
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">AI-Powered Support</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Real-time AI chat assistance</li>
                    <li>Custom technical workflows</li>
                    <li>24/7 system monitoring</li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* Testimonial Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="px-6 py-24 bg-[#f0f4f8] text-center relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
              <h2 className="text-4xl font-bold text-[#1e1e2f] mb-4">Don't take our word for it</h2>
              <p className="text-gray-600 mb-12">Here's what our clients have to say.</p>
              <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
                {testimonials[index].video ? (
                  <div className="aspect-video w-full mb-6">
                    <iframe
                      src={testimonials[index].video}
                      title="Video Testimonial"
                      className="w-full h-full rounded-lg shadow"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <p className="italic text-lg text-gray-800 mb-6">"{testimonials[index].text}"</p>
                )}
                <p className="font-semibold text-[#4f46e5] mt-4">{testimonials[index].author}</p>
              </div>
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === index ? 'bg-[#4f46e5] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.section>

            {/* Case Study Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="px-6 py-20 bg-white text-center relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
              <h2 className="text-4xl font-bold mb-10 text-[#1e1e2f]">Featured Case Study</h2>
              <div className="max-w-4xl mx-auto">
                {caseStudies.map((study) => (
                  <Link to={`/case-study/${study.id}`} key={study.id}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
                    >
                      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-8 md:w-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{study.title}</h3>
                          <p className="text-indigo-600 font-medium mb-3">{study.subtitle}</p>
                          <p className="text-gray-600 mb-6">{study.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {study.techStack.map((tech, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center text-indigo-600 font-medium">
                          <span>View Case Study</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* Founder Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="px-6 py-24 bg-[#f8f9fb] text-center relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
              <h2 className="text-4xl font-bold text-[#1e1e2f] mb-12">Meet the Founder</h2>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="w-full h-96 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl shadow-lg overflow-hidden relative"
                >
                  <div className="absolute inset-0" style={{ backgroundImage: `url(${headshot})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">Kaya Jones</h3>
                    <p className="text-sm opacity-90">Founder & Lead Developer</p>
                  </div>
                </motion.div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#1e1e2f] mb-4">Kaya Jones</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Kaya Jones is a results-driven software engineer with deep expertise in AI development, full-stack engineering, and data science. As the founder of Kayacancode, Kaya has led engineering efforts for companies like Thryve AI and Mosaic—building AI chatbots, eLearning systems, and smart matchmaking engines using OpenAI, Pinecone, Supabase, and Retrieval-Augmented Generation (RAG) frameworks.
                  </p>
                  <p className="text-lg text-gray-700">
                    With experience across industries—from NASA's data science labs to AutoZone's supply chain IT—Kaya brings both startup speed and enterprise-grade structure to product builds. Whether architecting scalable apps or leading strategy sessions, Kaya is obsessed with shipping high-quality software that moves fast and delivers value.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Footer Section */}
            <footer className="bg-[#1e1e2f] text-white px-6 py-12 text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
              <h3 className="text-2xl font-bold mb-4">Kayacancode</h3>
              <p className="mb-6 text-gray-300">Empowering founders with full-stack development and AI integration to ship smarter, faster, better.</p>
              <div className="flex justify-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">LinkedIn</a>
                <a href="#" className="hover:text-white transition">GitHub</a>
                <a href="#" className="hover:text-white transition">Email</a>
              </div>
              <p className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Kayacancode. All rights reserved.</p>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}
