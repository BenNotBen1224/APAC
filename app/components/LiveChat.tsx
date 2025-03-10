'use client';

import { useState } from 'react';

export default function LiveChat() {
  const [isMinimized, setIsMinimized] = useState(true);

  const handleWhatsApp = () => {
    window.open('https://wa.me/17783877928', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:6042786100';
  };

  return (
    <div className="fixed-bottom mb-4 me-4" style={{ right: 0, zIndex: 1000 }}>
      <div className="chat-container">
        {!isMinimized && (
          <div className="glass-effect rounded-lg p-4 mb-3 animate-fadeInUp">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-white mb-0">Contact Us</h5>
              <button 
                className="btn btn-link text-danger p-0" 
                onClick={() => setIsMinimized(true)}
              >
                <i className="fas fa-minus"></i>
              </button>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-success" onClick={handleWhatsApp}>
                <i className="fab fa-whatsapp me-2"></i>WhatsApp Chat
              </button>
              <button className="btn btn-outline-primary" onClick={handleCall}>
                <i className="fas fa-phone me-2"></i>Call Us
              </button>
            </div>
          </div>
        )}
        <button 
          className="btn btn-danger rounded-circle p-3 shadow-lg"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <i className={`fas ${isMinimized ? 'fa-comments' : 'fa-times'} fa-lg`}></i>
        </button>
      </div>
    </div>
  );
}