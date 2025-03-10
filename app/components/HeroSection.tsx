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
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="hero-section relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-white">
            <div className="floating text-center">
              <h1 className="display-1 fw-bold mb-2 glow animate-fadeInUp">{slide.title}</h1>
              <h2 className="display-4 fw-bold mb-4 chinese-text">{slide.subtitle}</h2>
              <p className="lead fs-2 mb-4 glass-effect p-3 rounded-lg inline-block">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-danger' : 'bg-white'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </header>
  );
}