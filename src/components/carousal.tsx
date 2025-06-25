'use client';
import React, { useState, useEffect, useRef } from 'react';

const SuccessStoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const slideInterval = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const SLIDE_INTERVAL_TIME = 5000;

  const slides = [
    {
      id: 1,
      title: "Partner's Success Stories",
      mediaType: 'image',
      mediaContent: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Chris_Dominguez_8fb4bfa290.webp',
      company: "Kinde",
      name: "Oliver Wolff",
      position: "Kindle Product Manager",
      quote: "We partnered with InvoZone to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates, even with minor estimate shifts, allowed us to adapt efficiently. Their proactive approach kept us informed, and the code quality exceeded our expectations, reducing extensive testing. Overall, InvoZone's clear communication and high-quality delivery made them a standout partner, ensuring smooth collaboration throughout the project.",
      caseStudyLink: "#"
    },
    {
      id: 2,
      title: "Partner's Success Stories",
      mediaType: 'image',
      mediaContent: "https://invozone-backend.s3.us-east-1.amazonaws.com/Chris_Dominguez_8fb4bfa290.webp",
      company: "TechSolutions Inc.",
      name: "Chris Dominguez",
      position: "CTO",
      quote: "InvoZone transformed our mobile application with their React Native expertise. The team delivered ahead of schedule while maintaining exceptional quality. Their attention to detail and regular progress reports made the entire process transparent and stress-free. We've seen a 40% increase in user engagement since the launch, and we're already planning our next project with them.",
      caseStudyLink: "#"
    },
    {
      id: 3,
      title: "Partner's Success Stories",
      mediaType: 'image',
      mediaContent: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Chris_Dominguez_8fb4bfa290.webp',
      company: "Global Retail",
      name: "Sarah Johnson",
      position: "E-commerce Director",
      quote: "Working with InvoZone on our e-commerce platform migration was a game-changer. Their team handled the complex transition from Magento to Shopify Plus flawlessly, with zero downtime during peak season. Their technical expertise and round-the-clock support during the launch period were invaluable. Our conversion rates have improved by 28% since the new platform went live.",
      caseStudyLink: "#"
    },
    {
      id: 4,
      title: "Partner's Success Stories",
      mediaType: 'image',
      mediaContent: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      company: "FinTech Innovations",
      name: "Michael Chen",
      position: "Head of Product Development",
      quote: "InvoZone's blockchain developers helped us build a secure, scalable cryptocurrency wallet that exceeded all our security benchmarks. Their team worked as an extension of our own, understanding our compliance requirements perfectly. The product launched with zero critical bugs, which is unheard of in our industry. We've since engaged them for two additional projects.",
      caseStudyLink: "#"
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    if (autoPlay) {
      slideInterval.current = setInterval(nextSlide, SLIDE_INTERVAL_TIME);
    }
  };

  const resetAutoSlide = () => {
    clearInterval(slideInterval.current);
    startAutoSlide();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    clearInterval(slideInterval.current);
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoSlide();
  };

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) {
      nextSlide();
    } else if (difference < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideInterval.current);
  }, [autoPlay]);

  return (
    <div 
      className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl bg-white mt-6"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full p-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{slide.title}</h2>
              
              <div className="w-full max-w-lg h-64 md:h-80 mb-8 rounded-lg overflow-hidden relative bg-gray-100">
                {slide.mediaType === 'video' ? (
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-blue-600 hover:scale-105 transition-all">
                    <span className="text-sm">▶</span>
                    Play Video
                  </button>
                ) : (
                  <img 
                    src={slide.mediaContent} 
                    alt={slide.name} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              <div className="max-w-3xl">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-1">{slide.company}</h3>
                <h4 className="text-lg md:text-xl font-medium text-gray-800">{slide.name}</h4>
                <p className="text-gray-500 italic mb-6">{slide.position}</p>
                
                <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed relative px-6 mb-6">
                  <span className="absolute -top-6 -left-2 text-4xl text-blue-500 opacity-30">"</span>
                  {slide.quote}
                  <span className="absolute -bottom-8 -right-2 text-4xl text-blue-500 opacity-30">"</span>
                </blockquote>
                
                <a 
                  href={slide.caseStudyLink} 
                  className="inline-block mt-4 text-blue-500 font-bold px-6 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                >
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all"
        aria-label="Previous testimonial"
      >
        ←
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all"
        aria-label="Next testimonial"
      >
        →
      </button>
      
      <div className="flex justify-center gap-2 pb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-500 scale-125' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesCarousel;