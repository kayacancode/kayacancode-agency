import React from 'react';
import { motion } from 'framer-motion';

export default function AgencyLandingPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfa] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-36 bg-gradient-to-br from-[#f2f2ff] via-[#e8f0fe] to-[#d9e7ff] text-center">
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
      </section>

      {/* Pain Point Section */}
      
      {/* Pain Point Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-24 bg-[#f6f7fb] text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-[#1f2937]">That Technical Co-founder You’ve Been Looking For</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Run your product on auto-pilot while we build your base MVP with speed, quality, and strategy.
        </p>
        <div className="max-w-4xl mx-auto text-left text-gray-800">
          <h3 className="text-2xl font-semibold mb-2">The Problem:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Non-technical founders want to build, but lack time and a technical network.</li>
            <li>Cheap labor overseas causes miscommunication and lacks transparency.</li>
            <li>Founders want someone who feels like part of the team—genuine, invested, and local.</li>
            <li>They crave authentic collaboration and a modern build process.</li>
          </ul>
        </div>
        <div className="mt-10 text-lg text-gray-700">
          
          <p className="mt-4">We’re your MVP co-founder—focused on shipping lean, fast, and AI-powered from day one.</p>
        </div>
        <div className="mt-8 text-gray-600">
          <p><strong>Who we serve:</strong> Early-stage startups and founders who need to prove a concept fast—with real AI integrations that make it stick.</p>
        </div>
      </motion.section>

      {/* Plans Section */}
      <section className="px-6 py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Monthly Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Starter',
              price: '$800/month',
              description: 'Best for solopreneurs or microbusinesses.',
              features: [
                '10 dev hours/month',
                '5-page landing site',
                'Bug fixes & hosting',
                'Async support',
              ],
            },
            {
              title: 'Pro',
              price: '$1,600/month',
              description: 'Ideal for early-stage startups building MVPs.',
              features: [
                '20 dev hours/month',
                'Mobile MVP dev',
                'Basic AI integrations',
                '2 strategy sessions/month',
              ],
            },
            {
              title: 'Partner',
              price: '$2,400/month',
              description: 'For scaling teams needing full-stack builds.',
              features: [
                '40 dev hours/month',
                'Advanced AI (RAG, Pinecone)',
                'Full-stack mobile/web dev',
                'Text + Slack support',
              ],
            },
          ].map((plan, idx) => (
            <div key={idx} className="bg-[#f9f9f9] shadow-lg rounded-2xl p-6 border hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{plan.price}</p>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
              <ul className="text-left space-y-2 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-black rounded-full" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="px-6 py-20 bg-[#ffffff] text-center">
        <h2 className="text-4xl font-bold mb-10">Case Study: Thryve AI</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <p>
            We developed a complete AI-powered platform for Thryve AI — including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure. Our tech stack featured OpenAI, Pinecone, Supabase, and Next.js, delivering a scalable and intelligent experience from the ground up.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}

      {/* Testimonial Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-24 bg-[#f0f4f8] text-center"
      >
        <h2 className="text-4xl font-bold text-[#1e1e2f] mb-4">Don’t take our word for it</h2>
        <p className="text-gray-600 mb-12">Here’s what our clients have to say.</p>
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md transition-all">
          <p className="italic text-lg text-gray-800 mb-6">“{testimonials[index].text}”</p>
          <p className="font-semibold text-[#4f46e5]">{testimonials[index].author}</p>
        </div>
        <button
          onClick={nextTestimonial}
          className="mt-8 px-6 py-2 bg-[#4f46e5] text-white rounded-full hover:bg-[#4338ca] transition"
        >
          Next Testimonial
        </button>
      </motion.section>
    </div>
  );
}
