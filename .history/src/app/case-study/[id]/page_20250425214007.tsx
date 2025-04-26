'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id;

  const caseStudy = {
    id: 'thryve-ai',
    title: 'Thryve AI',
    subtitle: 'AI-Powered Learning Platform',
    description: 'We developed a complete AI-powered platform for Thryve AI — including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    techStack: ['OpenAI', 'Pinecone', 'Supabase', 'Next.js'],
    results: ['50% increase in user engagement', '30% improvement in learning outcomes']
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f1f5ff] text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative h-96">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{caseStudy.title}</h1>
            <p className="text-xl text-indigo-600 mb-6">{caseStudy.subtitle}</p>
            <p className="text-lg text-gray-700 mb-8">{caseStudy.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results</h2>
              <ul className="space-y-2">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 