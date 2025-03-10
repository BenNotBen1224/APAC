import Navigation from '../components/Navigation';
import TopContact from '../components/TopContact';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
    return (
      <>
        <TopContact />
        <Navigation />
        <div className="container py-16 mt-20">
          <h1 className="text-4xl font-bold text-danger mb-6">Trust Richmond's Most Reliable Auto Glass Expert</h1>
          
          <div className="mb-8">
            <p className="text-xl mb-4">
              When seconds count and safety can't wait, APAC Auto Glass delivers peace of mind with every service. 
              At APAC, quality isn't just a promise—it's our foundation. Every windshield replacement and repair 
              is performed with precision, using premium materials and advanced techniques that exceed industry standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-danger">15,000+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-danger">4.9★</div>
                <div className="text-gray-600">Google Rating</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-danger">30+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
    
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-danger mb-6">Meet Our Owner - Liam Zhen</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                APAC Auto Glass is more than just a business—it's a story of dedication, perseverance, and family values. 
                As a Chinese immigrant arriving in Canada in the early 2000s, I started with nothing but an eagerness to learn 
                and a heart full of hope.
              </p>
              <p className="mb-4">
                Beginning as an apprentice in an auto glass shop, my journey was challenging but rewarding. Through dedication 
                and hard work, I earned the trust of my employer, who eventually entrusted me with the business upon his 
                retirement in 2007.
              </p>
              <p className="mb-4">
                Today, we treat every client as part of the APAC family, ensuring your experience with us is as seamless 
                and positive as possible. This caring approach remains our pledge to you, backed by decades of expertise 
                and a commitment to excellence.
              </p>
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-danger mb-2">OEM</div>
              <p className="text-gray-700">Original Equipment Manufacturer Quality Glass</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-danger mb-2">DOT</div>
              <p className="text-gray-700">Department of Transportation Certified</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-danger mb-2">ADAS</div>
              <p className="text-gray-700">Advanced Driver Assistance Systems Certified</p>
            </div>
          </div>
    
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The APAC Advantage: Why Customers Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-danger mb-3">✓ Zero-Stress ICBC Claims</h3>
                <p>We handle everything - no paperwork, no hassle, no waiting. Direct billing to ICBC means you can focus on your day while we take care of your vehicle.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-danger mb-3">✓ Same-Day Emergency Service</h3>
                <p>Don't compromise your safety. Our rapid response team is ready 24/7 to fix your auto glass emergency, usually within 90 minutes or less.</p>
              </div>
            </div>
          </div>
    
          <div className="bg-gray-900 text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Five-Point Quality Assurance Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-danger text-xl mr-4">①</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">Premium Material Selection</h3>
                  <p>Only OEM and OEM-equivalent glass that meets or exceeds manufacturer specifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-danger text-xl mr-4">②</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">Expert Installation</h3>
                  <p>Factory-certified technicians with ongoing training in latest techniques</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-danger text-xl mr-4">③</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">Advanced Technology</h3>
                  <p>State-of-the-art ADAS calibration equipment and precision tools</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-danger text-xl mr-4">④</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">Quality Control</h3>
                  <p>Multi-point inspection process before, during, and after installation</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-danger text-xl mr-4">⑤</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">Lifetime Warranty</h3>
                  <p>Our commitment to quality backed by comprehensive warranty coverage</p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Experience the APAC Difference Today</h2>
            <p className="text-xl mb-6">Join thousands of satisfied customers who trust Richmond's premier auto glass experts</p>
            <div className="space-x-4">
              <a href="tel:6042786100" className="inline-block bg-danger text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Call Now: 604-278-6100
              </a>
              <a href="https://wa.me/17783877928" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Text Us: 778-387-7928
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }