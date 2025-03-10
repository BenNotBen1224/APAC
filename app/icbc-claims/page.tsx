'use client';

import Navigation from '../components/Navigation';
import TopContact from '../components/TopContact';
import Footer from '../components/Footer';

export default function ICBCClaims() {
    return (
      <>
        <TopContact />
        <Navigation />
        <div className="container py-16 mt-20">
          <h1 className="text-4xl font-bold text-danger mb-6">
            Hassle-Free ICBC Claims Process
          </h1>
          
          <p className="text-xl mb-8">
            As an ICBC Glass Express Partner, we streamline your auto glass claims process. No need to visit ICBC—we handle everything right here at our Richmond location.
          </p>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-danger mb-4">Coverage Details</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Comprehensive Coverage:</strong> Only pay your deductible for glass replacement
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Rock Chip Repairs:</strong> Up to 3 repairs covered if deemed repairable
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Special Discount:</strong> $200 deductible (instead of $300) for rock chip damage
                  </div>
                </li>
              </ul>
            </div>
    
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-danger mb-4">Additional Insurance Partners</h2>
              <p className="mb-4">We also work with major Canadian insurance providers:</p>
              <ul className="space-y-3">
                <li>• Optiom Insurance</li>
                <li>• Family Insurance</li>
                <li>• Intact Insurance</li>
                <li>• Belron Canada</li>
              </ul>
            </div>
          </div>
    
          <div className="bg-gray-900 text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Our ICBC Claims Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold text-danger mb-3">1. Quick Claim Creation</h3>
                <p>Claims processed in minutes at our shop</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-danger mb-3">2. Immediate Service</h3>
                <p>Glass ordered and replaced promptly</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-danger mb-3">3. Direct Billing</h3>
                <p>We handle all paperwork with ICBC</p>
              </div>
            </div>
          </div>
    
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Start Your ICBC Claim Now</h2>
            <p className="text-xl mb-6">Our experts are ready to assist with your auto glass claim</p>
            <div className="space-x-4">
              <a href="tel:6042786100" 
                 className="inline-block bg-danger text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Call Now: 604-278-6100
              </a>
              <a href="https://wa.me/17783877928" 
                 className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Text Us: 778-387-7928
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }