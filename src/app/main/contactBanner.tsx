'use client';
import FancyButton from '@/components/button';
import React from 'react';

const ContactBanner = () => {
  const backgroundImageUrl =
    'https://invozone-backend.s3.us-east-1.amazonaws.com/banner_bg_984aa4b385.webp';

  return (
    <div
      className="relative py-20 px-6 sm:px-10 lg:px-16 bg-cover bg-center rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto text-white">
        {/* Heading Left */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Got An Idea Or Concerns?
          </h2>
          <h3 className="text-2xl md:text-3xl">Let's Discuss.</h3>
        </div>

        {/* Button Right */}
        <div>
          <FancyButton className="inline-flex gap-2 border-white border text-white !rounded-full hover:bg-white hover:text-black transition">
            Explore More
          </FancyButton>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
