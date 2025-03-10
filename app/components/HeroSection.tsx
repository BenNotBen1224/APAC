'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/images/broken_glass.jpg',
    title: 'Expert Auto Glass Services',
    subtitle: '專業汽車玻璃服務',
    description: 'ICBC Certified & Advanced ADAS Calibration'
  },
  {
    image: '/images/work_scene.jpg',
    title: 'Professional Installation',
    subtitle: '專業安裝',
    description: 'Factory-Certified Technicians & OEM Materials'
  },
  {
    image: '/images/customer_calling.jpg',
    title: '24/7 Emergency Service',
    subtitle: '24小時緊急服務',
    description: 'Available When You Need Us Most'
  },
  {
    image: '/images/benz.jpg',
    title: 'Free Courtesy Car',
    subtitle: '免費代用車服務',
    description: 'Complimentary Vehicle While We Fix Yours'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">{slide.title}</h1>
                <h2 className="text-2xl md:text-3xl mb-4">{slide.subtitle}</h2>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-danger transition-colors"
      >
        <i className="fas fa-chevron-left fa-2x"></i>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-danger transition-colors"
      >
        <i className="fas fa-chevron-right fa-2x"></i>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-danger' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}