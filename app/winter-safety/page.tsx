'use client';

import Navigation from '../components/Navigation';
import TopContact from '../components/TopContact';
import Footer from '../components/Footer';

export default function WinterSafety() {
    return (
      <>
        <TopContact />
        <Navigation />
        <div className="container py-16 mt-20">
          <h1 className="text-4xl font-bold text-danger mb-6">
            How Cold Weather Affects Your Windshield & Auto Glass in Richmond
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-8">
              As winter approaches in Richmond, drivers prepare for icy roads, foggy mornings, and battery troubles. 
              However, one of the most overlooked yet critical aspects of winter driving is how 
              <strong> cold weather impacts your windshield and auto glass</strong>.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Cold Temperature Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-danger mb-4">
                  ❄️ Cold Temperatures Can Weaken Your Windshield
                </h2>
                <p>Glass expands and contracts with temperature shifts. During cold weather, the 
                  <strong> rapid contraction</strong> of your windshield makes it more prone to cracking.</p>
                <div className="mt-4 bg-blue-50 p-4 rounded">
                  <strong>Prevention Tip:</strong> Park in a garage or use a windshield cover.
                </div>
              </div>
    
              {/* Defrosting Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-danger mb-4">
                  ⚠️ Defrosting Mistakes Can Crack Your Windshield
                </h2>
                <p>Sudden, extreme temperature shifts cause stress on your windshield, making it susceptible to 
                  <strong> cracks and fractures</strong>.</p>
                <div className="mt-4 bg-blue-50 p-4 rounded">
                  <strong>Prevention Tip:</strong> Gradually increase defroster temperature.
                </div>
              </div>
            </div>
    
            {/* Continue with other sections... */}
            
            <div className="bg-gray-900 text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">APAC Auto Glass – Your Winter Protection Experts!</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-danger mb-3">✓ 24/7 Emergency Service</h3>
                  <p>Available when winter weather strikes</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-danger mb-3">✓ ICBC Certified</h3>
                  <p>Direct billing for your convenience</p>
                </div>
              </div>
            </div>
    
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mb-4">Don't Wait Until It's Too Late!</h2>
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
        </div>
        <Footer />
      </>
    );
  }