import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
// Import pattern asset
import pattern from './pattern.svg';

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f1f5ff] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative px-6 py-40 bg-gradient-to-tr from-[#dbeafe] via-[#c7d2fe] to-[#e0e7ff] text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: 'cover' }}
        ></div>
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
            AI-Powered Product & App Development for Startups, Creatives, and Founders
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 px-8 py-4 bg-[#4f46e5] text-white rounded-2xl font-semibold hover:bg-[#4338ca] transition"
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* continue other sections unchanged */}
    </div>
  );
}
