"use client";
import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-4xl flex items-center justify-center font-bold text-blue-500 mb-4" >About Our Blog</h1>

        {/* What is a blog */}
        <div className="flex justify-center items-center">
            <img src="/blogHero.webp" alt="hero" width={500} height={600}/>
        </div>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">What is a Blog Website?</h2>
          <p className="text-gray-700 leading-relaxed">
            A blog website is a digital platform where individuals, teams, or organizations
            regularly publish written content, typically presented as articles or posts. These entries often
            reflect opinions, tutorials, news, personal experiences, or educational insights
            related to a specific topic or broad interest area. Blog websites can be personal journals,
            niche-based platforms, or professional knowledge-sharing hubs.A weblog, commonly shortened to blog, is a type of website, or a section of a website, that features regularly updated content, often in the form of articles or posts, presented in reverse chronological order. Blogs are typically characterized by a conversational or personal tone, and they often allow for interaction with readers through comments or other engagement features. 
          </p>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-500 gap-3 flex mb-2 ">Why Are Blog Websites Beneficial?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Knowledge Sharing:</strong> Bloggers can educate readers on topics ranging from coding to cooking.
            </li>
            <li>
              <strong>Improves Writing Skills:</strong> Blogging encourages better communication and consistent writing.
            </li>
            <li>
              <strong>Community Building:</strong> Blogs help create communities around common interests or causes.
            </li>
            <li>
              <strong>Professional Visibility:</strong> Developers, designers, and creators can use blogs as personal portfolios.
            </li>
            <li>
              <strong>SEO and Branding:</strong> For businesses, blogs help improve search rankings and build brand trust.
            </li>
            <li>
              <strong>Monetization Opportunities:</strong> Popular blogs can earn through ads, sponsorships, or affiliate marketing.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg">
            Start exploring our latest blog posts and become part of our growing tech community!
          </p>
        </div>
      </div>
    </div>
  );
}
