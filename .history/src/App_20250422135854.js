import React from 'react';
import { motion } from 'framer-motion';

export default function AgencyLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl font-bold max-w-4xl mx-auto"
        >
          Build Fast. Launch Smart.
        </motion.h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          AI-Powered Product & App Development for Startups, Creatives, and Founders
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Plans Section */}
      <section className="px-6 py-20 bg-gray-50 text-center">
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
            <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 border">
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
      <section className="px-6 py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Case Study: Thryve AI</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <p>
            We developed a complete AI-powered platform for Thryve AI — including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure. Our tech stack featured OpenAI, Pinecone, Supabase, and Next.js, delivering a scalable and intelligent experience from the ground up.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">What Clients Say</h2>
        <div className="max-w-4xl mx-auto text-gray-800">
          <blockquote className="italic mb-6">“Working with Kayacancode was the smartest move we made. The systems just work, and the execution was fast, flexible, and founder-friendly.”</blockquote>
          <p className="font-semibold">— Kontji Anthony, Founder @ Youdle</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Build?</h2>
        <p className="mt-4 text-lg">Let’s take your idea from zero to launch.</p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition">
          Book a Call
        </button>
      </section>
    </div>
  );
}
