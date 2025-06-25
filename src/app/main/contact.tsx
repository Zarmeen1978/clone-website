'use client';
import FancyButton from '@/components/button';
import { url } from 'inspector';
import React from 'react';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const ContactFormWithStats = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-7xl mx-auto p-6 lg:p-10 flex flex-col lg:flex-row gap-10">
      {/* Left: Contact Form */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-1">Your Vision, Our Expertise</h2>
        <p className="text-gray-600 mb-6">Submit your information to drive success forward.</p>

        <div className="flex flex-wrap gap-4 mb-6">
          {['Staff Augmentation', 'Dedicated Teams', 'Fixed Gigs'].map((label) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" className="accent-blue-600" />
              <span className="text-sm text-gray-800">{label}</span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Full name*" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          <input type="text" placeholder="Contact Number" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
        </div>
        <input type="email" placeholder="Email*" className="w-full mb-4 border border-gray-300 rounded-lg px-4 py-2" />
        <input type="text" placeholder="Enter your preferred tech stack..." className="w-full mb-4 border border-gray-300 rounded-lg px-4 py-2" />
        <textarea placeholder="Tell us how we can help.*" rows={4} className="w-full mb-4 border border-gray-300 rounded-lg px-4 py-2"></textarea>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-blue-600" /> Get NDA
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-blue-600" /> I agree with <a href="#" className="text-blue-600 underline">T&Cs</a>
          </label>
        </div>

        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 transition">
          
                    Send Message <FaPaperPlane />
        </button>
      </div>

      {/* Right: Stats Section */}
      <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-6 space-y-6">
        <h3 className="text-xl font-semibold">Company’s Stats</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
                      <img 
  src="https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg" 
  alt="Experience" 
  className="mx-auto h-10" 
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = '/fallback-image.png';
  }}
/>
            <p className="font-bold text-lg">300+</p>
            <p className="text-sm text-gray-500">Successful Projects</p>
          </div>
          <div className="text-center">
                      <img 
  src="https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg" 
  alt="Experience" 
  className="mx-auto h-10" 
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = '/fallback-image.png';
  }}
/>
            <p className="font-bold text-lg">97%</p>
            <p className="text-sm text-gray-500">Success Rate</p>
          </div>
          <div className="text-center">
                      <img 
  src="https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg" 
  alt="Experience" 
  className="mx-auto h-10" 
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = '/fallback-image.png';
  }}
/>
            <p className="font-bold text-lg">500+</p>
            <p className="text-sm text-gray-500">Developers & Engineers</p>
          </div>
          <div className="text-center">
            <img 
  src="https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg" 
  alt="Experience" 
  className="mx-auto h-10" 
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = '/fallback-image.png';
  }}
/>
              <p className="font-bold text-lg">10+</p>
            <p className="text-sm text-gray-500">Years of Experience</p>
          </div>
        </div>

        <div className="flex justify-around mt-6">
                      <img 
  src="https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg" 
  alt="Experience" 
  className="mx-auto h-10" 
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = '/fallback-image.png';
  }}
/>          <img 
  src="https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg" 
  alt="Experience" 
  className="mx-auto h-10" 
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = '/fallback-image.png';
  }}
/>          <img 
  src="https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg" 
  alt="Experience" 
  className="mx-auto h-10" 
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = '/fallback-image.png';
  }}
/>
        </div>
      </div>
    </div>
  );
};

export default ContactFormWithStats;
