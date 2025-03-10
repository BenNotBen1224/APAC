'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function QuoteForm() {
  // ... existing state code ...

  return (
    <section className="bg-black text-white py-5" id="quote">
      <div className="container">
        <h2 className="text-center display-4 mb-2">Get a Quote</h2>
        <p className="text-center mb-3">
          If you need help filling out certain questions please visit our FAQs page with the button below
        </p>
        <div className="text-center mb-5">
          <Link href="/faqs" className="btn btn-outline-light px-5">FAQs</Link>
        </div>
        
        {/* Warranty Information */}
        <div className="bg-dark p-4 rounded-3 mb-5">
          <h3 className="text-danger mb-3">Lifetime Warranty Coverage</h3>
          <div className="text-white-50 lh-lg">
            <p className="mb-3">
              Our replacement windshields include a comprehensive lifetime warranty that covers:
            </p>
            <ul className="mb-3">
              <li>Installation defects</li>
              <li>Manufacturing defects</li>
              <li>Leaks</li>
            </ul>
            <p className="mb-3">
              This warranty remains valid for as long as your vehicle is registered under your name and expires when the vehicle is sold to a new owner.
            </p>
            <p className="mb-3">
              If any covered defect appears during the warranty period, we will provide and install all necessary parts at no additional cost.
            </p>
            <p className="mb-2 fw-bold text-white">Warranty Exclusions:</p>
            <ul>
              <li>Leaks caused by vehicle body deterioration</li>
              <li>Damage from vandalism or theft</li>
              <li>Natural disaster damage</li>
              <li>Damage from illicit activities or deliberate acts</li>
            </ul>
          </div>
        </div>

        {/* Continue with existing form... */}
      </div>
    </section>
  );
}