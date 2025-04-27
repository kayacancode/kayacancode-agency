import React from 'react';
import { motion } from 'framer-motion';

export default function BusinessWorkflows() {
  return (
    <section className="relative px-6 py-40 bg-gradient-to-tr from-[#dbeafe] via-[#c7d2fe] to-[#e0e7ff] text-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-center bg-cover opacity-5 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-10 z-0"></div>
      <div className="relative z-10 max-w-2xl mx-auto bg-white/80 rounded-2xl p-10 shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#1e1e2f] leading-tight mb-4"
        >
          Automate Your Business with AI-Powered Workflows
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-2 text-lg md:text-xl text-[#3a3a4f] mb-4"
        >
          We help businesses scale faster by automating repetitive tasks and connecting your favorite tools seamlessly.
        </motion.p>
        <div className="font-semibold text-[#1e1e2f] mb-6">
          <span className="block">Save Time. Increase Efficiency. Scale Faster.</span>
          <span className="block text-base font-normal text-gray-700 mt-1">Custom AI workflows to automate your unique business processes, connect your tools, and free up your time.</span>
        </div>
        <div className="border-t border-gray-200 my-6"></div>
        <div className="text-left mb-6">
          <div className="font-bold text-lg mb-2">How It Works</div>
          <ol className="list-decimal ml-6 space-y-1 text-base">
            <li><span className="font-semibold">Tell us your tools and goals</span> <span className="text-gray-600">– AI understands your business</span></li>
            <li><span className="font-semibold">We design your custom AI-powered workflow</span></li>
            <li><span className="font-semibold">We implement, test, and optimize your workflow</span></li>
            <li><span className="font-semibold">Watch your business run smoothly with AI automation</span></li>
          </ol>
        </div>
        <div className="border-t border-gray-200 my-6"></div>
        <div className="mb-6">
          <div className="font-bold text-lg mb-2">Tools We Integrate</div>
          <div className="flex flex-wrap justify-center gap-4 text-2xl">
            <span className="inline-flex items-center"><img src="/slack-logo.svg" alt="Slack" className="h-7 w-7 mr-2"/>Slack</span>
            <span className="inline-flex items-center"><img src="/notion-logo.svg" alt="Notion" className="h-7 w-7 mr-2"/>Notion</span>
            <span className="inline-flex items-center"><img src="/stripe-logo.svg" alt="Stripe" className="h-7 w-7 mr-2"/>Stripe</span>
            <span className="inline-flex items-center"><img src="/zapier-logo.svg" alt="Zapier" className="h-7 w-7 mr-2"/>Zapier</span>
            <span className="inline-flex items-center"><img src="/openai-logo.svg" alt="OpenAI" className="h-7 w-7 mr-2"/>OpenAI</span>
          </div>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 px-8 py-4 bg-[#ff6b35] text-white rounded-2xl font-semibold hover:bg-[#ff3b00] transition shadow-lg hover:shadow-xl text-lg"
          onClick={() => window.location.href = "mailto:kayarjones901@gmail.com?subject=Free%20AI%20Workflow%20Strategy%20Call"}
        >
          Get Your Free AI Workflow Strategy Call
        </motion.button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
} 