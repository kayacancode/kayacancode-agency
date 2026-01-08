'use client';

import React from 'react';
import Image from 'next/image';

function CompanyLogo({ name, src }: { name: string; src?: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} logo`}
        width={32}
        height={32}
        className="rounded"
      />
    );
  }
  return (
    <div className="w-8 h-8 rounded bg-[#242424] flex items-center justify-center text-xs font-medium text-[#a3a3a3]">
      {name.charAt(0)}
    </div>
  );
}

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const SubstackIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.27-5.516 9.27 5.516V10.812H1.46zM22.539 0H1.46v2.836h21.08V0z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#e5e5e5] px-6 py-16 md:py-24">
      <main className="max-w-xl mx-auto space-y-12">

        {/* Header */}
        <section className="flex items-start justify-between">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-medium">
              hi im kaya
            </h1>
            <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-md">
              applied ai engineer and founder building intelligent automation systems.
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-[#242424] flex items-center justify-center text-2xl overflow-hidden flex-shrink-0 ml-4">
            {/* Replace with your photo: <Image src="/profile.jpg" alt="Kaya" width={64} height={64} className="object-cover" /> */}
            <span className="text-[#a3a3a3]">K</span>
          </div>
        </section>

        {/* Currently */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-wide">
            Currently
          </h2>
          <div className="flex items-center gap-3">
            <CompanyLogo name="Betaworks" />
            <div>
              <span className="text-[#e5e5e5]">Applied AI Consultant</span>
              <span className="text-[#a3a3a3]"> at </span>
              <a
                href="https://betaworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#60a5fa] hover:text-[#93c5fd]"
              >
                Betaworks
              </a>
            </div>
          </div>
        </section>

        {/* Previously */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-wide">
            Previously
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CompanyLogo name="Forever 22" />
              <div>
                <span className="text-[#e5e5e5]">Founder</span>
                <span className="text-[#a3a3a3]"> at </span>
                <span className="text-[#e5e5e5]">Forever 22 LLC</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CompanyLogo name="AutoZone" />
              <div>
                <span className="text-[#e5e5e5]">Software Engineering Intern</span>
                <span className="text-[#a3a3a3]"> at </span>
                <a
                  href="https://autozone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:text-[#93c5fd]"
                >
                  AutoZone
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CompanyLogo name="NASA" />
              <div>
                <span className="text-[#e5e5e5]">Data Science Intern</span>
                <span className="text-[#a3a3a3]"> at </span>
                <a
                  href="https://www.nasa.gov/glenn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:text-[#93c5fd]"
                >
                  NASA Glenn Research Center
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-wide">
            Education
          </h2>
          <div className="flex items-center gap-3">
            <CompanyLogo name="IIT" />
            <div>
              <span className="text-[#e5e5e5]">B.S. Computer Science</span>
              <span className="text-[#a3a3a3]"> from </span>
              <span className="text-[#e5e5e5]">Illinois Institute of Technology</span>
              <span className="text-[#a3a3a3]"> (2025)</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-wide">
            Projects
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://thryve.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#60a5fa] hover:text-[#93c5fd]"
              >
                Thryve AI
              </a>
              <span className="text-[#a3a3a3]"> - eLearning platform with AI matchmaking</span>
            </li>
            <li>
              <a
                href="https://github.com/kayacancode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#60a5fa] hover:text-[#93c5fd]"
              >
                YoudleGPT
              </a>
              <span className="text-[#a3a3a3]"> - automated grocery content engine</span>
            </li>
          </ul>
        </section>

        {/* Writing */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-wide">
            Writing
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://substack.com/@kayajones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#60a5fa] hover:text-[#93c5fd]"
              >
                Substack
              </a>
              <span className="text-[#a3a3a3]"> - thoughts on AI, consumer tech, and context engineering</span>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#333333]">
          <div className="flex items-center gap-5">
            <a
              href="mailto:kayarjones901@gmail.com"
              className="text-[#a3a3a3] hover:text-[#e5e5e5]"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/kayarjones/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#e5e5e5]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/kayacancode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#e5e5e5]"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://x.com/kayacancode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#e5e5e5]"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://substack.com/@kayajones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#e5e5e5]"
              aria-label="Substack"
            >
              <SubstackIcon />
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
