import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

export default function CaseStudyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // This would typically come from a database or API
  const caseStudies = {
    'thryve-ai': {
      title: 'Thryve AI',
      subtitle: 'AI-Powered Learning Platform',
      client: 'Thryve AI',
      industry: 'EdTech',
      duration: '3 months',
      challenge: 'Thryve AI needed a comprehensive learning platform that could personalize education experiences using AI, while maintaining high performance and scalability.',
      solution: 'We developed a complete AI-powered platform including a personalized eLearning engine, AI chatbot, brand-user matchmaking system, and user profile infrastructure.',
      techStack: ['OpenAI', 'Pinecone', 'Supabase', 'Next.js', 'React', 'TypeScript'],
      results: [
        '50% increase in user engagement',
        '30% improvement in learning outcomes',
        'Scalable infrastructure supporting 10,000+ concurrent users'
      ],
      testimonial: {
        text: 'Working with Kayacancode was the smartest move we made. The systems just work, and the execution was fast, flexible, and founder-friendly.',
        author: 'Will Hubbard, CEO @ Thryve AI'
      },
      images: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    'buildflow': {
      title: 'BuildFlow',
      subtitle: 'Construction Project Management Platform',
      client: 'BuildFlow',
      industry: 'Construction',
      duration: '4 months',
      challenge: 'BuildFlow needed a modern project management platform that could streamline communication between contractors, clients, and project managers.',
      solution: 'We built a comprehensive project management system with real-time updates, document sharing, and automated reporting capabilities.',
      techStack: ['React', 'Node.js', 'MongoDB', 'AWS', 'Socket.io'],
      results: [
        '40% reduction in project delays',
        '25% improvement in resource allocation',
        '90% client satisfaction rate'
      ],
      testimonial: {
        text: 'The platform has transformed how we manage our construction projects. It\'s intuitive, powerful, and exactly what we needed.',
        author: 'Alex Rivera, CEO @ BuildFlow'
      },
      images: [
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    'finlaunch': {
      title: 'FinLaunch',
      subtitle: 'Financial Services Marketplace',
      client: 'FinLaunch',
      industry: 'FinTech',
      duration: '2 months',
      challenge: 'FinLaunch needed a rapid MVP to test their financial services marketplace concept with potential investors.',
      solution: 'We developed a streamlined MVP with core marketplace functionality, user profiles, and payment processing integration.',
      techStack: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
      results: [
        'MVP delivered in 3 weeks',
        'Successful seed round of $500,000',
        '100+ early adopters in first month'
      ],
      testimonial: {
        text: 'Kaya helped us hit our MVP deadline in 3 weeks flat!',
        author: 'Jamie Tran, Product @ FinLaunch'
      },
      images: [
        'https://images.unsplash.com/photo-1551288049-eeb83c1e5c16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    }
  };

  const caseStudy = caseStudies[id];
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Case Study Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate('/')}
              className="text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </button>
            <div className="text-sm text-gray-500">
              {caseStudy.industry} • {caseStudy.duration}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
            <p className="text-xl md:text-2xl text-indigo-100">{caseStudy.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Challenge & Solution */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h2>
              <p className="text-gray-600">{caseStudy.challenge}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Solution</h2>
              <p className="text-gray-600 mb-6">{caseStudy.solution}</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right Column - Testimonial & Images */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Testimonial</h2>
              <blockquote className="text-gray-600 italic mb-4">"{caseStudy.testimonial.text}"</blockquote>
              <p className="font-semibold text-indigo-600">{caseStudy.testimonial.author}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Gallery</h2>
              {caseStudy.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image} 
                    alt={`${caseStudy.title} project image ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
} 