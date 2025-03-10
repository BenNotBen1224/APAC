'use client';

import Navigation from '../components/Navigation';
import TopContact from '../components/TopContact';
import Footer from '../components/Footer';

export default function LifeHacks() {
    return (
      <>
        <TopContact />
        <Navigation />
        <div className="container py-16 mt-20">
          <h1 className="text-4xl font-bold text-danger mb-6">
            Essential Auto Glass Care Tips from APAC's Experts
          </h1>
          
          <p className="text-xl mb-8">
            After serving Richmond for over 30 years, our experts have compiled these proven tips to help maintain your auto glass and maximize its lifespan. Follow these professional guidelines to protect your investment and ensure optimal visibility.
          </p>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-danger mb-4">After Installation Care ⚡</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Leave Tape in Place:</strong> Keep retention tape on for at least 24 hours to ensure proper adhesive curing
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Avoid Car Washes:</strong> Wait 48 hours before using any automatic car wash facilities
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Keep Windows Cracked:</strong> Leave windows slightly open when parked to prevent pressure buildup
                  </div>
                </li>
              </ul>
            </div>
    
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-danger mb-4">Daily Maintenance Tips 🔧</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Clean Properly:</strong> Use automotive glass cleaner and microfiber cloths to prevent scratches
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Park Smart:</strong> Choose covered parking when possible to protect from weather damage
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-danger mr-2">✓</span>
                  <div>
                    <strong>Replace Wipers:</strong> Keep windshield wipers fresh to prevent scratching (change every 6-12 months)
                  </div>
                </li>
              </ul>
            </div>
          </div>
    
          <div className="bg-gray-900 text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Professional Tips for Long-Term Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-danger mb-3">Temperature Management</h3>
                <ul className="space-y-3">
                  <li>• Gradually warm up your car in winter</li>
                  <li>• Never use hot water on frozen glass</li>
                  <li>• Keep defroster at moderate settings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-danger mb-3">Damage Prevention</h3>
                <ul className="space-y-3">
                  <li>• Maintain safe following distance</li>
                  <li>• Address chips immediately</li>
                  <li>• Use quality windshield washer fluid</li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Need Professional Auto Glass Service?</h2>
            <p className="text-xl mb-6">Trust Richmond's auto glass experts for all your repair and replacement needs</p>
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