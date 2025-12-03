'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12 md:py-20 max-w-3xl mx-auto font-serif">
      <main className="space-y-12">
        
        {/* Header */}
        <section className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-black">Kaya Jones</h1>
          <p className="text-xl text-gray-700">Software Engineer • Chicago, US</p>
          <div className="text-lg text-gray-600">
            Applied AI engineer and founder specializing in intelligent automation, context-driven agent systems, and full-stack SaaS development.
          </div>
        </section>

        {/* About */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">About Me</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 leading-relaxed ml-2">
            <li>
              Founder of <span className="font-bold">Forever 22 LLC</span>, delivering AI workflows, RAG systems, and automation pipelines for startups and venture firms.
            </li>
            <li>
              Experienced in building internal research systems, semantic search tools, founder intelligence engines, and AI-augmented content systems.
            </li>
            <li>
              Community builder hosting Chicago fireside chats, coworking sessions, and hackathons.
            </li>
            <li>
              yapping on <span className="italic">Substack</span> covering AI, consumer tech, context engineering, and tech communites through my lense (basically whatever I am interested in).
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">Experience</h2>
          
          <div className="space-y-2">
            <div className="flex justify-between items-baseline flex-wrap">
              <h3 className="text-xl font-bold text-black">Betaworks</h3>
              <span className="text-gray-600 font-medium">Applied AI Consultant (Jun 2025 – Present)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2">
              <li>Designed founder research intelligence systems aggregating multi-source structured and unstructured data.</li>
              <li>Developed enrichment pipelines using Google Sheets, Airtable, Zapier, RAG, and MCP-powered agents.</li>
              <li>Evaluated multiple MCP frameworks, conducting stress tests and workflow benchmarks.</li>
              <li>Prototyped internal AI tools for due diligence, sourcing acceleration, and context retrieval.</li>
              <li>Ran portfolio product analyses, identifying gaps and recommending workflow-driven improvements.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline flex-wrap">
              <h3 className="text-xl font-bold text-black">Forever 22 LLC</h3>
              <span className="text-gray-600 font-medium">Founder (2024 – Present)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2">
              <li>Architect and deliver intelligent automation systems and AI SaaS platforms for startups and VC teams.</li>
              <li>Built <strong>Thryve AI</strong> (eLearning + AI matchmaking), <strong>YoudleGPT</strong> (automated grocery content engine), and <strong>Sunday Money’s</strong> fantasy automation stack.</li>
              <li>Designed and deployed RAG pipelines, semantic search workflows, AI chatbots, and recommendation engines.</li>
              <li>Developed founder intelligence pipelines reducing manual research time by 90% through automated enrichment.</li>
              <li>Converted engineering consulting into subscription-based automation offerings across verticals.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline flex-wrap">
              <h3 className="text-xl font-bold text-black">AutoZone</h3>
              <span className="text-gray-600 font-medium">Supply Chain Software Engineering Intern (Jun - Aug 2024)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2">
              <li>Built a bulk upload shipment workflow using React, Redux, and Spring Boot.</li>
              <li>Developed backend POST endpoints and label printing automation.</li>
              <li>Delivered iterative improvements through Agile sprints.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline flex-wrap">
              <h3 className="text-xl font-bold text-black">NASA Glenn Research Center</h3>
              <span className="text-gray-600 font-medium">Data Science Intern (2021 – 2022)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2">
              <li>Developed a BERT-based Q&A bot integrated with a Neo4j knowledge graph.</li>
              <li>Built dashboards and REST/GraphQL APIs for mission data visualization.</li>
              <li>Automated documentation and code generation workflows.</li>
              <li>Explored graph-based NLP and semantic search prototypes.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">Education</h2>
          <div>
            <h3 className="text-xl font-bold text-black">Illinois Institute of Technology</h3>
            <p className="text-gray-700">B.S. Computer Science (May 2025)</p>
            <ul className="list-disc list-inside mt-2 text-gray-800 ml-2">
              <li>NCAA D3 Basketball Captain</li>
              <li>President, Black Student Athlete Association</li>
              <li>College of Computing Student Council</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">Contact</h2>
          <p className="text-lg text-gray-800">
            Email: <a href="mailto:kayarjones901@gmail.com" className="text-blue-800 hover:underline font-medium">kayarjones901@gmail.com</a>
          </p>
          <div className="flex space-x-4 pt-2">
             <a href="https://www.linkedin.com/in/kayarjones/" className="text-blue-800 hover:underline font-medium">LinkedIn</a>
             <a href="https://x.com/kayacancode" className="text-blue-800 hover:underline font-medium">Twitter (X)</a>
             <a href="https://github.com/kayacancode" className="text-blue-800 hover:underline font-medium">GitHub</a> 
             <a href="https://substack.com/@kayajones" className="text-blue-800 hover:underline font-medium">Substack</a>
          </div>
        </section>

      </main>
    </div>
  );
}
