'use client';

import Image from 'next/image';

export default function AnimatedLogo() {
  return (
    <div className="d-flex align-items-center position-relative" style={{ minWidth: '1200px' }}>
      <div className="d-flex align-items-center">
        <Image 
          src="/images/apac_logo.jpg" 
          alt="APAC Auto Glass" 
          width={80} 
          height={80} 
          className="me-3"
        />
        <div className="animate-slideIn">
          <div className="text-danger fw-bold">APAC Auto Glass</div>
          <div className="text-danger">大眾汽車玻璃</div>
        </div>
      </div>
      <div className="animate-slideIn position-absolute" style={{ right: '-150px', top: '50%', transform: 'translateY(-50%)' }}>
        <div className="text-danger fw-bold fs-5">24/7 Emergency Service</div>
        <a href="tel:6042786100" className="text-white text-decoration-none d-block">
          <i className="fas fa-phone me-1"></i>Richmond: 604-278-6100
        </a>
        <a href="https://wa.me/17783877928" className="text-white d-block">
          <i className="fab fa-whatsapp me-1"></i>Text: 778-387-7928
        </a>
      </div>
    </div>
  );
}
