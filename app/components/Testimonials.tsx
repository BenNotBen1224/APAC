'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: "David Chen",
    location: "Richmond",
    text: "Excellent service! They replaced my windshield and calibrated my ADAS system perfectly.",
    rating: 5,
    service: "Windshield Replacement"
  },
  {
    name: "Sarah Wong",
    location: "Burnaby",
    text: "Professional team, quick service, and great price with ICBC claim.",
    rating: 5,
    service: "Chip Repair"
  },
  {
    name: "Mike Liu",
    location: "Vancouver",
    text: "Very knowledgeable about modern car systems. Highly recommend!",
    rating: 5,
    service: "ADAS Calibration"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-5 bg-black">
      <div className="container">
        <h2 className="text-center text-danger fw-bold mb-5 floating">Customer Testimonials</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="glass-effect p-4 rounded-lg tech-card">
              <div className="text-center text-white mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-danger me-1"></i>
                ))}
              </div>
              <p className="text-white text-center fs-5 mb-4">"{testimonials[activeIndex].text}"</p>
              <div className="text-center text-white-50">
                <p className="mb-0">{testimonials[activeIndex].name}</p>
                <p className="small">{testimonials[activeIndex].location} - {testimonials[activeIndex].service}</p>
              </div>
            </div>
            <div className="text-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm mx-1 ${index === activeIndex ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  •
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}