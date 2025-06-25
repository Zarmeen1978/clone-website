'use client';
import FancyButton from '@/components/button';
import React, { useState } from 'react';

const tabs = [
  { title: 'Product Development' },
  { title: 'Managed IT Systems' },
  { title: 'Team Augmentation' },
];

const TabContent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-6 lg:p-10 mt-9">
      <div className="max-w-xl text-left">
        <h2 className="text-2xl font-semibold mb-4">Team Augmentation</h2>
        <p className="text-gray-600 mb-6">
          Upgrade your team with specialized skills & expertise.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start text-gray-700">
            <span className="text-blue-500 mr-2">✔</span>
            Operational team efficiency is high and nimble.
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-blue-500 mr-2">✔</span>
            Quick Turn-around times
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-blue-500 mr-2">✔</span>
            Access to the global talent pool
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-blue-500 mr-2">✔</span>
            Collaborate with in-house & Outsourced Teams
          </li>
        </ul>
        <FancyButton className="hidden [@media(min-width:1283px)]:inline-flex ml-4 gap-2 border !rounded-full">
                                View Details
                                </FancyButton>
      </div>
      <div className="mt-8 lg:mt-0">
        <video
          src="./Home_Page_Video_Final_Format_8fe0b0e15f.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-190 h-auto object-cover"
        />
      </div>
    </div>
  );
};

const TeamAugmentationTabs = () => {
  const [activeTab, setActiveTab] = useState('Product Development');

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex justify-around border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className={`px-4 py-3 text-sm font-medium focus:outline-none transition-colors duration-200 ${
              activeTab === tab.title ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <TabContent />
    </div>
  );
};

export default TeamAugmentationTabs;
