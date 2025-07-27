"use client";
import React from "react";

const services = [
  {
    title: "Content Writing",
    description: "High-quality blog articles tailored to your niche and audience.",
  },
  {
    title: "Web Development",
    description: "Responsive and modern website solutions for your blog.",
  },
  {
    title: "SEO Optimization",
    description: "Boost your site's visibility and rank higher on search engines.",
  },
  {
    title: "Community Building",
    description: "Create a strong reader base with engagement strategies.",
  },
];

export default function Service() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg md:text-xl mb-12 opacity-90">
          We offer the best solutions to grow your blog and audience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 hover:bg-white/20"
            >
              
             
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
