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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/liam.jpg"
                alt="Liam Zhen - Owner of APAC Auto Glass"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="md:col-span-2 prose max-w-none">
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
        </div>

        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Our Six-Point Promise to You</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex items-start bg-gray-50 p-4 rounded-lg">
              <span className="text-danger mr-2 text-2xl">①</span>
              <div className="text-left">
                <strong className="block text-xl mb-1">OEM-Quality Materials</strong>
                <span className="text-gray-600">Only factory-grade glass and adhesives that meet or exceed safety standards</span>
              </div>
            </li>
            <li className="flex items-start bg-gray-50 p-4 rounded-lg">
              <span className="text-danger mr-2 text-2xl">②</span>
              <div className="text-left">
                <strong className="block text-xl mb-1">Certified Expert Installation</strong>
                <span className="text-gray-600">Factory-trained technicians with advanced certification in modern vehicle systems</span>
              </div>
            </li>
            <li className="flex items-start bg-gray-50 p-4 rounded-lg">
              <span className="text-danger mr-2 text-2xl">③</span>
              <div className="text-left">
                <strong className="block text-xl mb-1">Lifetime Warranty</strong>
                <span className="text-gray-600">Our confidence in quality backed by a comprehensive lifetime warranty</span>
              </div>
            </li>
            <li className="flex items-start bg-gray-50 p-4 rounded-lg">
              <span className="text-danger mr-2 text-2xl">④</span>
              <div className="text-left">
                <strong className="block text-xl mb-1">ADAS Calibration</strong>
                <span className="text-gray-600">Professional calibration of advanced driver assistance systems for optimal safety</span>
              </div>
            </li>
            <li className="flex items-start bg-gray-50 p-4 rounded-lg">
              <span className="text-danger mr-2 text-2xl">⑤</span>
              <div className="text-left">
                <strong className="block text-xl mb-1">Courtesy Vehicle</strong>
                <span className="text-gray-600">Free loaner car service while we take care of your vehicle</span>
              </div>
            </li>
            <li className="flex items-start bg-gray-50 p-4 rounded-lg">
              <span className="text-danger mr-2 text-2xl">⑥</span>
              <div className="text-left">
                <strong className="block text-xl mb-1">ICBC Express Service</strong>
                <span className="text-gray-600">Direct billing and streamlined claims process for your convenience</span>
              </div>
            </li>
          </ul>

          <div className="mt-12 bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the APAC Difference?</h3>
            <p className="text-lg mb-6">Join thousands of satisfied customers who trust Richmond's premier auto glass experts</p>
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