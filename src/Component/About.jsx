import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="mt-4 text-gray-600">
          We build modern, scalable and user-friendly web applications using
          the MERN stack.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
        
        {/* Left */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-600">
            We are passionate developers focused on creating fast, secure
            and scalable applications. Our goal is to deliver real-world
            solutions for businesses and startups.
          </p>
        </div>

        {/* Right */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Frontend Development (React + Tailwind)</li>
            <li>Backend APIs (Node.js + Express)</li>
            <li>Database Design (MongoDB)</li>
            <li>Authentication & Security</li>
          </ul>
        </div>
      </div>

      {/* Call To Action */}
      <div className="text-center mt-16">
        <button  onClick={() => navigate("/contact")} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Contact Us
        </button>
      </div>

    </div>
  );
}

export default About;
