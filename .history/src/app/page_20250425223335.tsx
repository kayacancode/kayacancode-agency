'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import WistiaPlayer from '@/components/WistiaPlayer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      author: 'Will Hubbard, CEO @ Thryve AI',
      text: 'Working with Kayacancode was the smartest move we made. The systems just work, and the execution was fast, flexible, and founder-friendly.',
      video: 'ka9fvaqeth',
      videoType: 'wistia'
    }
  ];

  const caseStudies = [
    {
      id: 'thryve-ai',
      title: 'Thryve AI',
      subtitle: 'AI-Powered Learning Platform',
      description: 'We developed a complete AI-powered platform for Thryve AI — including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure.',
      image: '/thryve.png',
      website: 'https://thryveai.ai',
      techStack: ['OpenAI', 'Pinecone', 'Supabase', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Shadcn', 'GCP'],
      results: ['Developed MVP in 3 months', 'Reduced course creation time by 75%', '50% increase in user engagement']
    }
  ];

  const mission = 'We can make the world a far better place by helping more companies leverage the technology that&apos;s available today, especially AI– but it&apos;s confusing & hard to figure out how to implement it, and it&apos;s our job to help businesses navigate this confusing tech landscape.';

  const problems = [
    'AI can be overwhelming, too many tools, no clear transparency, no communication',
    'Non-technical people want to build however they don&apos;t have the time and network',
    'They try to go for cheap labor overseas however there is no transparency and easy communication',
    'People want that tech person apart of their team',
    'People want Genuine Authentic, Connection'
  ];

  const solutions = [
    {
      title: 'Feedback & Iteration',
      features: [
        'Weights user feedback for data-driven decisions',
        'Tracks user analytics, clicks, and engagement metrics',
        'Implements A/B testing for optimal performance'
      ]
    },
    {
      title: 'Technical Support',
      features: [
        'Dedicated chat support for technical issues',
        'Regular check-ins and progress updates',
        'Transparent communication throughout development'
      ]
    },
    {
      title: 'Rapid Development',
      features: [
        'MVP development in 3 months',
        'AI Business Workflows in weeks',

        'Agile methodology with continuous delivery',
        'AI-powered development tools for efficiency'
      ]
    }
  ];

  const targetAudience = 'Early stage Companies trying to get a product to market fast with AI Integrations. People trying to make a proof of concept fast.';

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
            onClick={() => window.location.href = "mailto:kayarjones901@gmail.com?subject=Discovery%20Call"}
          >
            Get Started
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-20 bg-white text-center relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
        <h2 className="text-4xl font-bold mb-10 text-[#1e1e2f]">Our Mission</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700">{mission}</p>
        </div>
      </motion.section>

      {/* Problem-Solution Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-20 bg-[#f8f9fb] text-center relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
        <h2 className="text-4xl font-bold mb-10 text-[#1e1e2f]">The Problem</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4 text-left">
            {problems.map((problem, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-lg text-gray-700">{problem}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-20 bg-white text-center relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
        <h2 className="text-4xl font-bold mb-10 text-[#1e1e2f]">Our Solution</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#f8f9fb] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#1e1e2f] mb-6">{solution.title}</h3>
              <ul className="space-y-4 text-left">
                {solution.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                    className="flex items-start"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Target Audience Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-20 bg-white text-center relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#4f46e5]"></div>
        <h2 className="text-4xl font-bold mb-10 text-[#1e1e2f]">Who We Serve</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700">{targetAudience}</p>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Hear directly from our satisfied clients</p>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="mb-6">
                <WistiaPlayer videoId="your-video-id-here" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Will Hubbard</h3>
                <p className="text-gray-600">CEO, Thryve AI</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
        {/* Wistia Video Player */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <div
            className="wistia_responsive_padding"
            style={{ padding: '56.25% 0 0 0', position: 'relative' }}
          >
            <div
              className="wistia_responsive_wrapper"
              style={{
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%'
              }}
            >
              {/* @ts-ignore */}
              <wistia-player
                data-video-id="abc123xyz"
                data-options='{"playerColor":"54bbff","autoPlay":false}'
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
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
              With experience across industries—from NASA&apos;s data science labs to AutoZone&apos;s supply chain IT—Kaya brings both startup speed and enterprise-grade structure to product builds. Whether architecting scalable apps or leading strategy sessions, Kaya is obsessed with shipping high-quality software that moves fast and delivers value.
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
          <a href="https://www.linkedin.com/in/kayarjones/" className="hover:text-white transition">LinkedIn</a>
          <a href="mailto:kayarjones901@gmail.com" className="hover:text-white transition">Email</a>
        </div>
        <p className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Kayacancode. All rights reserved.</p>
      </footer>
    </div>
  );
} 