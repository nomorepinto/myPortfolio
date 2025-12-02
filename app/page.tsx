'use client';

import React from 'react';
import WebsitePreview from './components/WebsitePreview';
import Header from './components/Header';
import Footer from './components/Footer';
import TechBanner, { TechItem } from './components/TechBanner';

export default function Home() {
  const myTechnologies: TechItem[] = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Bootstrap CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "Supabase", category: "Backend" },
    { name: "Alibaba Cloud", category: "Technologies" },
    { name: "Git", category: "Technologies" }
  ];

  const portfolioItems = [
    {
      title: "MGC E-commerce Website",
      url: "https://mgc-ecom-website.vercel.app/", // REPLACE WITH YOUR PROJECT URL
      description: "A modern e-commerce interface with complete ordering capabilities. I pioneered the development of the product selling part of our organization.",
      techStack: ["Bootstrap", "JQuery", "Javascript", "Supabase"],
      contribution: "Full Stack",
      isLive: true,
      height: "h-96"
    },
    {
      title: "Pasig Onebiz",
      url: "https://pasig-onebiz.vercel.app/", // REPLACE WITH YOUR PROJECT URL
      description: "A modern solution to long process needed to procure business permits in the Philippines, narrowed down to Pasig City for scope with AI OCR ID recognition for faster input of data.",
      techStack: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js"],
      contribution: "Full Stack",
      isLive: false,
      statusText: "Archived (Front-end only hosted)"
    },
    {
      title: "TekoLingo",
      url: "https://tekolingofrontend.vercel.app/", // REPLACE WITH YOUR PROJECT URL (Note: Bing often blocks embedding)
      description: "An AI-enhanced cybersecurity LMS Integration, utilizing Qwen AI for adaptive text lessons and gamified scam simulations, to empower children and seniors against manipulation and online threats.",
      techStack: ["React Native", "Expo", "Django", "Alibaba Cloud: Qwen-Flash"],
      contribution: "Backend",
      isLive: false,
      statusText: "Archived (Front-end only hosted)"
    }
    /*
    {
      title: "E-commerce Storefront",
      url: "https://store.google.com/", // REPLACE WITH YOUR PROJECT URL
      description: "A modern e-commerce interface with cart functionality.",
      techStack: ["Vue.js", "Nuxt", "Pinia"],
      contribution: "Frontend",
      isLive: false,
      statusText: "Under Maintenance"
    }
    */
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-20 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Welcome to my <span className="text-amber-600">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              I'm Jedrick Ocenar, an aspiring web developer. Check out my latest work below. Most of these are past projects from hackathons with unsupported backends.</p>
          </div>
        </section>

        {/* Tech Banner */}
        <TechBanner technologies={myTechnologies} />

        {/* Portfolio Grid */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-10xl mx-auto">
              {portfolioItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <WebsitePreview
                    url={item.url}
                    title={item.title}
                    techStack={item.techStack}
                    contribution={item.contribution}
                    isLive={item.isLive}
                    statusText={item.statusText}
                  />
                  <div className="mt-4 px-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    {/* COMMENT: Update the URL below to point to your actual project link if different from the preview URL */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
