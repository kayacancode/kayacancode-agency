'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

// Add type declaration for Wistia player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'media-id': string;
        aspect?: string;
      }, HTMLElement>;
    }
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Auto-rotate testimonials every 5 seconds
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      author: 'Will Hubbard, CEO @ Thryve AI',
      text: 'Working with Kayacancode was the smartest move we made. The systems just work, and the execution was fast, flexible, and founder-friendly.',
      video: 'ka9fvaqeth',
      videoType: 'wistia'
    },
    {
      author: 'Alex Rivera, CEO @ BuildFlow',
      text: null,
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      videoType: 'youtube'
    },
    {
      author: 'Jamie Tran, Product @ FinLaunch',
      text: 'Kaya helped us hit our MVP deadline in 3 weeks flat!',
      video: null,
      videoType: null
    }
  ];

  const caseStudies = [
    {
      id: 'thryve-ai',
      title: 'Thryve AI',
      subtitle: 'AI-Powered Learning Platform',
      description: 'We developed a complete AI-powered platform for Thryve AI — including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure.',
      image: '/thryveiconlogo.png',
      website: 'https://thryveai.ai',
      techStack: ['OpenAI', 'Pinecone', 'Supabase', 'Next.js'],
      results: ['50% increase in user engagement', '30% improvement in learning outcomes'],
      gallery: [
        '/thryve-gallery-1.jpg',
        '/thryve-gallery-2.jpg',
        '/thryve-gallery-3.jpg'
      ]
    }
  ];

  if (!mounted) {
    return null;
  }

  return (
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

      {/* Problem-Solution Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-20 bg-white text-center relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
        <h2 className="text-4xl font-bold mb-10 text-[#1e1e2f]">The Problem & Solution</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#f8f9fb] p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[#1e1e2f] mb-4">The Problem</h3>
            <p className="text-lg text-gray-700 mb-4">
              Startups and founders often struggle with technical execution, leading to missed deadlines, budget overruns, and subpar products. Traditional development agencies are slow, expensive, and lack the agility needed in today's fast-paced market.
            </p>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Slow development cycles
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                High costs and budget overruns
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Lack of technical expertise
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Communication barriers with overseas developers
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Time zone and cultural differences
              </li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#f8f9fb] p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[#1e1e2f] mb-4">The Solution</h3>
            <p className="text-lg text-gray-700 mb-4">
              Kayacancode provides fast, flexible, and founder-friendly development services powered by AI. We combine technical expertise with agile methodologies to deliver high-quality products on time and within budget.
            </p>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Rapid development and deployment
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Transparent pricing and communication
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                AI-powered development tools
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-20 bg-[#f8f9fb] text-center relative"
      >
        <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
        <h2 className="text-4xl font-bold mb-4 text-[#1e1e2f]">Don't Just Take Our Word For It</h2>
        <p className="text-xl text-gray-600 mb-12">Hear what our clients have to say about working with us</p>
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              {testimonials[currentTestimonial].video && (
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  {testimonials[currentTestimonial].videoType === 'wistia' ? (
                    <div className="w-full h-full">
                      <wistia-player 
                        media-id={testimonials[currentTestimonial].video} 
                        aspect="1.7777777777777777"
                        className="w-full h-full"
                      ></wistia-player>
                    </div>
                  ) : testimonials[currentTestimonial].videoType === 'youtube' ? (
                    <iframe
                      src={testimonials[currentTestimonial].video}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : null}
                </div>
              )}
              {testimonials[currentTestimonial].text && (
                <p className="text-gray-700 mb-6 text-lg italic">"{testimonials[currentTestimonial].text}"</p>
              )}
              <p className="text-[#4f46e5] font-semibold text-xl">{testimonials[currentTestimonial].author}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-[#4f46e5] scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
            <Link href={`/case-study/${study.id}`} key={study.id}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    priority
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
                    {study.website && (
                      <a 
                        href={study.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.706 2.142-.706 3.556 0 1.414.317 2.649.706 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.706-2.142.706-3.556 0-1.414-.317-2.649-.706-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.09 1.546.384 2.97.837 4.118A6.004 6.004 0 0015.917 11h-1.946zm-8.003 0H4.083a6.004 6.004 0 007.003 4.118C10.616 13.97 10.322 12.546 10.233 11z" clipRule="evenodd" />
                        </svg>
                        Visit Website
                      </a>
                    )}
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

      {/* Image Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-20 bg-[#f8f9fb] text-center relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
        <h2 className="text-4xl font-bold mb-10 text-[#1e1e2f]">Project Gallery</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies[0].gallery.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={image}
                alt={`Thryve AI Gallery ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
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
            <Image
              src="/kayajonesheadshot.jpeg"
              alt="Kaya Jones"
              fill
              className="object-cover"
              priority
            />
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
  );
} 