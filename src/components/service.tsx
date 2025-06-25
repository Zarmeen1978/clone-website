'use client';
import React, { useState } from 'react';
import {
  FaCloud,
  FaCogs,
  FaRobot,
  FaUserTie,
  FaCode,
  FaSyncAlt,
} from 'react-icons/fa';
import FancyButton from './button';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('DevOps & CloudOps');

  const services = [
    {
      id: 'forward-planners',
      title: 'Forward Planners',
      icon: <FaUserTie size={36} />,
      description: 'We plan software architecture, timelines, and execution paths tailored to your goals.',
    },
    {
      id: 'product-engineering',
      title: 'Product Engineering',
      icon: <FaCogs size={36} />,
      description: 'We build scalable digital products from scratch using modern stacks.',
    },
    {
      id: 'data-ai',
      title: 'Data & Artificial Intelligence',
      icon: <FaRobot size={36} />,
      description: 'We deliver AI solutions and data pipelines to help businesses make smarter decisions.',
    },
    {
      id: 'hire-dev',
      title: 'Hire Dev',
      icon: <FaUserTie size={36} />,
      description: 'Quickly hire vetted developers for your startup or enterprise projects.',
    },
    {
      id: 'devops-cloudops',
      title: 'DevOps & CloudOps',
      icon: <FaCloud size={36} />,
      description: 'We optimize operations with advanced DevOps and CloudOps strategies while boosting agility & scalability in technology deployments.',
    },
    {
      id: 'cicd',
      title: 'CI/CD As a Service',
      icon: <FaSyncAlt size={36} />,
      description: 'We build automated CI/CD pipelines to streamline and accelerate software delivery.',
    },
  ];

  const active = services.find((s) => s.title === activeService);

  return (
    <div>
    <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between flex-wrap mb-8">
  {/* Left Side Texts */}
  <div>
    <h2 className="text-3xl font-bold text-gray-800">Software Development Services</h2>
    <h2 className="text-lg text-gray-600">Forward Planner</h2>
  </div>

  {/* Right Side Button */}
  <FancyButton className="hidden [@media(min-width:1283px)]:inline-flex ml-4 gap-2 border !rounded-full">
    View All
  </FancyButton>
</div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Service List */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service.title)}
              className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer border transition-all duration-200 ${
                activeService === service.title
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-blue-100'
              }`}
            >
              <div className="text-4xl">{service.icon}</div>
              <div className="text-lg font-semibold">{service.title}</div>
            </div>
          ))}
        </div>

        {/* Right Side: Description Panel */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-blue-600 text-5xl">{active?.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800">{active?.title}</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {active?.description || 'Select a service to view more details about what we offer.'}
          </p>
            <FancyButton className="hidden [@media(min-width:1283px)]:inline-flex ml-4 gap-2 border !rounded-full">
                      View All
                    </FancyButton>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServicesSection;
