'use client';
import React, { useState } from 'react';
import { FaPython, FaReact, FaApple, FaRobot, FaTools } from 'react-icons/fa';
import { SiFlutter, SiTensorflow, SiKeras, SiPytorch, SiOpencv, SiOpenai } from 'react-icons/si';

const categories = [
  'All', 'Front-End', 'Back-End', 'Low/No Code', 'Database', 'DevOps', 'Mobile', 'AI & ML'
];

const tools = [
  { name: 'Flutter', category: 'Front-End', icon: <SiFlutter size={24} /> },
  { name: 'IoS', category: 'Mobile', icon: <FaApple size={24} /> },
  { name: 'Pwa', category: 'Low/No Code', icon: <FaReact size={24} /> },
  { name: 'Tensorflow', category: 'AI & ML', icon: <SiTensorflow size={24} /> },
  { name: 'Keras', category: 'AI & ML', icon: <SiKeras size={24} /> },
  { name: 'Pytorch', category: 'AI & ML', icon: <SiPytorch size={24} /> },
  { name: 'Lisp', category: 'Back-End', icon: <FaRobot size={24} /> },
  { name: 'NTKL', category: 'Back-End', icon: <FaPython size={24} /> },
  { name: 'spaCy', category: 'AI & ML', icon: <SiOpenai size={24} /> },
  { name: 'Open-ai', category: 'AI & ML', icon: <SiOpenai size={24} /> },
  { name: 'Ploty', category: 'AI & ML', icon: <SiOpencv size={24} /> },
  { name: 'Ionic', category: 'All', icon: <FaReact size={24} /> },
];

const DeveloperFilterUI = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = activeCategory === 'All'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Build Your Own Team - <span className="text-blue-600">Hire Developer</span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            We've built our business by assembling a team of skilled developers, experts in the frameworks and technologies driving modern solutions.
          </p>
        </div>
        <div className="relative w-full max-w-md mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition-all ${
              activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredTools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full mb-2 flex items-center justify-center text-lg text-blue-600">
              {tool.icon || <FaTools size={24} />}
            </div>
            <p className="text-sm font-medium text-gray-700">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperFilterUI;
