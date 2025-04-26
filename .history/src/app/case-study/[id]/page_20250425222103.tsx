'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CaseStudyPage() {
  const params = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const caseStudy = {
    id: 'thryve-ai',
    title: 'Thryve AI',
    subtitle: 'AI-Powered Learning Platform',
    description: 'We developed a complete AI-powered platform for Thryve AI — including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure.',
    client: 'Thryve AI',
    role: 'Lead Full Stack & AI Developer',
    timeline: 'Nov 2024 - March 2025',
    services: [
      'Custom AI systems',
      'Platform architecture',
      'Frontend/backend development',
      'User authentication',
      'Social media authentication',
      'Branding kit design',
      'API integration',
      'eLearning engine',
      'User matching features'
    ],
    challenge: {
      title: 'The Challenge',
      description: 'Thryve AI aimed to empower athletes, influencers, and artists with tools to:',
      points: [
        'Educate themselves on branding, NIL deals, and marketing.',
        'Showcase their talent and connect with brands.',
        'Automate content learning and matchmaking with AI.'
      ],
      conclusion: 'They needed a transparent communicative full-stack developer to translate this vision into an interactive platform—capable of handling onboarding, education, brand discovery, and profile management—all while integrating real-time AI features.'
    },
    solution: {
      title: 'My Solution',
      description: 'As the solo developer, I led the build of Thryve\'s MVP across frontend, backend, and AI integrations.',
      website: 'https://www.thryveai.ai/'
    },
    investment: {
      title: 'Project Investment',
      description: 'The Thryve AI platform was developed through a phased engagement model, allowing the client to incrementally build key features across onboarding, eLearning, AI integration, and brand-user matchmaking.',
      details: [
        {
          title: 'Hourly Rate',
          content: 'All work was scoped and billed at a professional rate of $57.69/hour.'
        },
        {
          title: 'Milestone Billing',
          content: 'Each phase (e.g., landing page, profile system, eLearning engine) was completed and billed independently to ensure transparency and agility.'
        },
        {
          title: 'Custom Add-Ons',
          content: 'Features such as video/image uploads and advanced AI matching logic were proposed as modular enhancements with standalone scopes.'
        }
      ],
      note: 'Projects of this scale and complexity typically start at $5,000, with the final cost ranging depending on feature depth, integrations, and AI requirements.'
    },
    features: [
      {
        title: 'AI-Powered eLearning System',
        items: [
          'Personalized onboarding quiz + AI-generated learning paths.',
          'GPT-4 chatbot assistant answering real-time questions during lessons.',
          'Adaptive quiz generator and content summarizer.',
          'Progress tracking, gamification, and module unlocking system.'
        ]
      },
      {
        title: 'Smart Matchmaking Engine',
        items: [
          'Vector-based AI matching using Pinecone + OpenAI.',
          'Users see brand matches ordered by % match score.',
          'Pro users get contact access; limited for starter accounts.'
        ]
      },
      {
        title: 'Profile & Content Management',
        items: [
          'Built onboarding for multiple user types (Athletes, Influencers, Artists, Brands).',
          'Users could add photos, media links, and social accounts.',
          'Built custom image/video upload flow via Supabase buckets.'
        ]
      },
      {
        title: 'Frontend & UX/UI',
        items: [
          'Integrated Shadcn/UI for responsive, modern design.',
          'Dashboard with modular sections (Home, E-Learning, Matches, Settings, etc.).',
          'Gamified progress bars, profile completion indicators, and custom shareable links.'
        ]
      }
    ],
    techStack: {
      frontend: ['Next.js', 'Shadcn/UI', 'Tailwind CSS', 'Vercel'],
      backend: ['Node.js', 'Express', 'Supabase', 'Google Cloud'],
      ai: ['OpenAI GPT-4', 'Pinecone (vector search)', 'Llama Cloud (doc ingestion)'],
      database: ['Supabase (structured)', 'Pinecone (semantic embeddings)']
    },
    outcomes: [
      'Helped Thryve launch a market-ready MVP and secure brand-user engagement capabilities.'
    ],
    image: '/thryve.png',
    website: 'https://thryveai.ai',
    results: ['Developed MVP in 3 months', 'Reduced course creation time by 75%', '50% increase in user engagement']
  };

  if (!mounted) {
    return null;
  }

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
              priority
            />
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{caseStudy.title}</h1>
            <p className="text-xl text-indigo-600 mb-6">{caseStudy.subtitle}</p>
            <p className="text-lg text-gray-700 mb-8">{caseStudy.description}</p>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client</h3>
                <p className="text-gray-700">{caseStudy.client}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Role</h3>
                <p className="text-gray-700">{caseStudy.role}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
                <p className="text-gray-700">{caseStudy.timeline}</p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Provided</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{caseStudy.challenge.title}</h2>
              <p className="text-lg text-gray-700 mb-4">{caseStudy.challenge.description}</p>
              <ul className="space-y-2 mb-4">
                {caseStudy.challenge.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700">{caseStudy.challenge.conclusion}</p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{caseStudy.solution.title}</h2>
              <p className="text-lg text-gray-700 mb-4">{caseStudy.solution.description}</p>
              <a 
                href={caseStudy.solution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.706 2.142-.706 3.556 0 1.414.317 2.649.706 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.706-2.142.706-3.556 0-1.414-.317-2.649-.706-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.09 1.546.384 2.97.837 4.118A6.004 6.004 0 0015.917 11h-1.946zm-8.003 0H4.083a6.004 6.004 0 007.003 4.118C10.616 13.97 10.322 12.546 10.233 11z" clipRule="evenodd" />
                </svg>
                Visit Website
              </a>
            </div>

            {/* Investment */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{caseStudy.investment.title}</h2>
              <p className="text-lg text-gray-700 mb-4">{caseStudy.investment.description}</p>
              <div className="space-y-4 mb-4">
                {caseStudy.investment.details.map((detail, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{detail.title}</h3>
                    <p className="text-gray-700">{detail.content}</p>
                  </div>
                ))}
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <p className="text-gray-700 italic">{caseStudy.investment.note}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features Built</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.frontend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.backend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.ai.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Database</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.database.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcomes */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Outcomes</h2>
              <ul className="space-y-2">
                {caseStudy.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {caseStudy.website && (
              <a 
                href={caseStudy.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.706 2.142-.706 3.556 0 1.414.317 2.649.706 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.706-2.142.706-3.556 0-1.414-.317-2.649-.706-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.09 1.546.384 2.97.837 4.118A6.004 6.004 0 0015.917 11h-1.946zm-8.003 0H4.083a6.004 6.004 0 007.003 4.118C10.616 13.97 10.322 12.546 10.233 11z" clipRule="evenodd" />
                </svg>
                Visit Website
              </a>
            )}

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