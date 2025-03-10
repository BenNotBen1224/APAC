'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AnimatedLogo() {
  return (
    <div className="flex items-center relative min-w-[1200px]">
      <Link href="/" className="flex items-center">
        <Image 
          src="/images/apac_logo.jpg" 
          alt="APAC Auto Glass" 
          width={80} 
          height={80} 
          className="mr-3"
          priority
        />
        <div className="animate-slideIn">
          <div className="text-danger font-bold">APAC Auto Glass</div>
          <div className="text-danger">大眾汽車玻璃</div>
        </div>
      </Link>
      
      <div className="animate-slideIn absolute -right-[150px] top-1/2 -translate-y-1/2">
        <div className="text-danger font-bold text-xl">24/7 Emergency Service</div>
        <div className="text-white">
          <Link href="tel:6042786100" className="text-white no-underline block">
            <i className="fas fa-phone mr-1"></i>Richmond: 604-278-6100
          </Link>
          <Link href="https://wa.me/17783877928" className="text-white block">
            <i className="fab fa-whatsapp mr-1"></i>Text: 778-387-7928
          </Link>
        </div>
      </div>
    </div>
  );
}
