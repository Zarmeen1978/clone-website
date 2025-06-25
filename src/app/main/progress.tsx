'use client';
import FancyButton from '@/components/button';
import React, { useState } from 'react';

const ProgressSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cards = [
    {
      id: 'startup',
      title: "I'm A",
      subtitle: "Startup.",
      description: "Remarkable ideas often stall without the right team to bring them to life.",
      buttonText: "Get Started",
      backgroundImage: 'url(https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007576_d7d2285dfb.png)'
    },
    {
      id: 'enterprise',
      title: "I'm An",
      subtitle: "Enterprise.",
      description: "Scaling without the right infrastructure and expertise can lead to costly bottlenecks.",
      buttonText: "Explore More",
      backgroundImage: 'url(https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007575_932944c09d.png)'
    },
    {
      id: 'rescue',
      title: "I Need A",
      subtitle: "Rescue.",
      description: "A messy codebase and tech debt are suffocating your progress.",
      buttonText: "Need a Fix",
      backgroundImage: 'url(https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007577_a472bb2ea9.png)'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Backing You Up At{' '}
          <span className="text-blue-600">Every Stage Of Your Progress</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
          From launching startups to expanding enterprises, or recovering from setbacks, 
          we help businesses overcome every challenge on their journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
              className={`relative p-6 min-h-[320px] bg-cover bg-center rounded-2xl text-left cursor-pointer transition-all duration-300 ${
                activeCard === card.id 
                  ? 'border-2 border-blue-600 shadow-2xl'
                  : 'hover:border hover:border-blue-400'
              }`}
              style={{
                backgroundImage: card.backgroundImage,
                color: activeCard === card.id ? 'white' : 'inherit',
                backgroundBlendMode: 'multiply',
                backgroundColor: activeCard === card.id ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.6)'
              }}
            >
            <div className="mb-4 leading-tight">
            <p className="text-xl text-white/90">{card.title}</p>
            <h3 className="text-3xl font-extrabold text-white">{card.subtitle}</h3>
            </div>
              <p className="text-base mb-6">{card.description}</p>
                 <FancyButton className="hidden [@media(min-width:1283px)]:inline-flex ml-4 gap-2 border !rounded-full">
                          {card.buttonText}
                        </FancyButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
