"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query Submitted:", formData);

    // ✅ In real use, send to backend or email service like EmailJS or Formspree
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-xl">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Contact Us</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-indigo-700 transition" onClick={() => alert("Query Send To developers Team :) ")}
          >
            Send Message
          </button>
        </form>

        {/* Divider */}
        <div className="border-t my-8"></div>

        {/* Other Contact Options */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Other Ways to Connect</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-blue-500 hover:underline"
              >
                your.email@example.com
              </a>
            </li>
            <li>
              💼 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                linkedin.com/in/yourprofile
              </a>
            </li>
            <li>
              🐦 Twitter:{" "}
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                @yourusername
              </a>
            </li>
            <li>
              🌐 GitHub:{" "}
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                github.com/yourgithub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
