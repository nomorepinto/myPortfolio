'use client';

import React from 'react';
import WebsitePreview from './components/WebsitePreview';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const portfolioItems = [
    {
      title: "MGC E-commerce Website",
      url: "https://mgc-ecom-website.vercel.app/", // REPLACE WITH YOUR PROJECT URL
      description: "A modern e-commerce interface with complete ordering capability. I pioneered the development of the production selling part of our organization.",
      techStack: ["Bootstrap", "JQuery", "Javascript", "Supabase"]
    },
    {
      title: "My Static Landing Page",
      url: "https://example.com/", // REPLACE WITH YOUR PROJECT URL
      description: "A high-conversion landing page optimized for performance and SEO.",
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "A Simple Calculator App",
      url: "https://www.bing.com/", // REPLACE WITH YOUR PROJECT URL (Note: Bing often blocks embedding)
      description: "A functional calculator built with React and TypeScript.",
      techStack: ["React", "TypeScript", "Vite"]
    },
    {
      title: "E-commerce Storefront",
      url: "https://store.google.com/", // REPLACE WITH YOUR PROJECT URL
      description: "A modern e-commerce interface with cart functionality.",
      techStack: ["Vue.js", "Nuxt", "Pinia"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-20 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Welcome to my <span className="text-amber-600">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              I'm Jedrick Ocenar, a passionate developer creating modern, responsive, and user-friendly web applications. Check out my latest work below. </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">Most of these are past projects from hackathons with unsupported backends.</p>
          </div>
        </section>


        {/* Portfolio Grid */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
              {portfolioItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <WebsitePreview url={item.url} title={item.title} techStack={item.techStack} />
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
