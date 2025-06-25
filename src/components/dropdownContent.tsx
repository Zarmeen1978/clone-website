'use client';

import React, { useState } from 'react';
import FancyButton from './button';

const headings = ['Programming', 'Design', 'Marketing'];
const paragraphs = [
  ['C++ Basics', 'Advanced Python', 'JavaScript Essentials'],
  ['UI/UX Design', 'Figma Mastery', 'Design Systems'],
  ['SEO Basics', 'Social Media Strategy', 'Content Marketing'],
];

export default function MegaMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="absolute top-full left-0 hidden group-hover:flex bg-white shadow-lg rounded-lg z-50 w-[800px] p-6">
      <div className="flex gap-8 w-full">
        {/* Headings */}
        <div className="w-1/3 space-y-4">
          {headings.map((heading, index) => (
            <h3
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`cursor-pointer text-lg font-semibold transition-colors duration-200 ${
                hoveredIndex === index ? 'text-blue-500' : 'text-gray-700'
              }`}
            >
              {heading}
            </h3>
          ))}
        </div>

        {/* Paragraphs */}
        <div className="w-2/3 space-y-1">
          {paragraphs[hoveredIndex]?.map((para, index) => (
            <p key={index} className="text-gray-600 text-sm">
              {para}
            </p>
          ))}

          {/* Fancy Button */}
          <div className="mt-4">
               <FancyButton
                      className="hidden ml-4 gap-2 border !rounded-full"
                    >
                      View All
                    </FancyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
