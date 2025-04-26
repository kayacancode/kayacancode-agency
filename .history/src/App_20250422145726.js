import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
        <div className="absolute inset-0  bg-center bg-cover opacity-5 z-0"></div>
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

      {/* Pain Point Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-24 bg-[#f6f7fb] text-center"
      >
        <h2 className="text-4xl font-bold text-[#1e1e2f] mb-4">That Technical Co-founder You’ve Been Looking For</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-4xl mx-auto text-left text-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-2">The Problem:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Non-technical founders want to build, but lack time and a technical network.</li>
            <li>Cheap labor overseas causes miscommunication and lacks transparency.</li>
            <li>Founders want someone who feels like part of the team—genuine, invested, and local.</li>
            <li>They crave authentic collaboration and a modern build process.</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-24 bg-white text-center"
      >
        <h2 className="text-4xl font-bold text-[#1e1e2f] mb-6">Our Solution</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          We make technology simple and transparent—guiding businesses through AI adoption with clear communication, rapid delivery, and data-driven iteration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left text-gray-800">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-[#f8fafc] rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Communication & Transparency</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Upfront payment terms via Zelle</li>
              <li>Weekly Loom progress videos</li>
              <li>Task tracking in Linear</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-[#f8fafc] rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Rapid Delivery & Feedback</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>MVPs shipped in 2–4 weeks</li>
              <li>User feedback prioritization</li>
              <li>Iterative sprints and updates</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-[#f8fafc] rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Data-Informed Development</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Built-in analytics & A/B testing</li>
              <li>Click tracking & dashboards</li>
              <li>Performance optimization tools</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-[#f8fafc] rounded-xl shadow hover:shadow-lg transition">
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
        className="px-6 py-24 bg-[#f0f4f8] text-center"
      >
        <h2 className="text-4xl font-bold text-[#1e1e2f] mb-4">Don’t take our word for it</h2>
        <p className="text-gray-600 mb-12">Here’s what our clients have to say.</p>
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md transition-all">
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
            <p className="italic text-lg text-gray-800 mb-6">“{testimonials[index].text}”</p>
          )}
          <p className="font-semibold text-[#4f46e5] mt-4">{testimonials[index].author}</p>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToTestimonial(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? 'bg-[#4f46e5]' : 'bg-gray-400'
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
        className="px-6 py-20 bg-white text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-[#1e1e2f]">Case Study: Thryve AI</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <p>
            We developed a complete AI-powered platform for Thryve AI — including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure. Our tech stack featured OpenAI, Pinecone, Supabase, and Next.js, delivering a scalable and intelligent experience from the ground up.
          </p>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-24 bg-[#f8f9fb] text-center"
      >
        <h2 className="text-4xl font-bold text-[#1e1e2f] mb-12">Meet the Founder</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div className="w-full h-96 bg-gray-300 rounded-xl shadow-inner flex items-center justify-center">
            <span className="text-gray-600 text-lg">Image of Kaya Jones</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#1e1e2f] mb-4">Kaya Jones</h3>
            <p className="text-lg text-gray-700 mb-4">
              Kaya Jones is a results-driven software engineer with deep expertise in AI development, full-stack engineering, and data science. As the founder of Kayacancode, Kaya has led engineering efforts for companies like Thryve AI and Mosaic—building AI chatbots, eLearning systems, and smart matchmaking engines using OpenAI, Pinecone, Supabase, and Retrieval-Augmented Generation (RAG) frameworks.
            </p>
            <p className="text-lg text-gray-700">
              With experience across industries—from NASA’s data science labs to AutoZone’s supply chain IT—Kaya brings both startup speed and enterprise-grade structure to product builds. Whether architecting scalable apps or leading strategy sessions, Kaya is obsessed with shipping high-quality software that moves fast and delivers value.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-[#1e1e2f] text-white px-6 py-12 text-center">
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
