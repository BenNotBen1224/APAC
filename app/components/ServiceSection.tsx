'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Service {
  title: string;
  time: string;
  image: string;
  alt: string;
  description: string;
  longDescription?: string;
}

const services: Service[] = [
    {
        title: 'Windshield Replacement',
        time: '45 to 90 Minutes',
        image: '/images/windshield_replacement.jpg',
        alt: 'Windshield Replacement',
        description: "Expert windshield replacement using high-quality glass and advanced adhesives to ensure safety, clarity, and durability, restoring your vehicle's integrity and clear visibility.",
        longDescription: `Our comprehensive windshield replacement service includes:
          • OEM-Quality Glass: Using manufacturer-specified materials
          • Advanced Urethane Adhesives: For optimal bonding and safety
          • Precision Installation: Factory-certified technicians
          • ADAS Compatibility: Ensuring all safety systems work correctly
          • Quality Control: Multiple inspection points during installation
          • Weather Protection: Indoor installation when possible
          
          We follow strict safety protocols and manufacturer guidelines to ensure your new windshield meets all safety standards. Our service includes a thorough cleaning, proper priming, and precise installation techniques. We recommend waiting at least one hour after installation before driving to ensure proper adhesive curing.`
      },
      {
        title: 'Windshield Repair',
        time: '15 to 30 Minutes',
        image: '/images/windshield_repair.jpg',
        alt: 'Windshield Repair',
        description: 'Quick and effective repair solutions for minor chips and cracks, preventing further damage and restoring clear visibility in no time.',
        longDescription: `Our windshield repair process includes:
          • Damage Assessment: Expert evaluation of chip or crack
          • Advanced Repair Technology: Using latest repair equipment
          • High-Grade Resins: Professional-grade repair materials
          • UV Curing: Ensuring long-lasting repairs
          • Surface Finishing: Smooth finish for clear visibility
          • Quality Check: Ensuring structural integrity
          
          We can repair chips up to the size of a quarter and cracks up to 6 inches long. The repair process preserves the original factory seal and maintains the structural integrity of your windshield. Best results are achieved when repairs are done promptly after damage occurs.`
      },
      {
        title: 'Side Glass Replacement',
        time: '45 to 90 Minutes',
        image: '/images/glass_replacement.jpg',
        alt: 'Side Glass Replacement',
        description: "Reliable side window replacements with precision fitting, restoring your vehicle's security and aesthetic appeal quickly and efficiently.",
        longDescription: `Our side glass replacement service features:
          • Exact-Fit Glass: Perfectly matched to your vehicle
          • Complete Removal: Safe disposal of damaged glass
          • Window Mechanism Check: Testing regulators and motors
          • Weather Sealing: New weatherstripping when needed
          • Interior Protection: Careful handling and cleanup
          • Functionality Testing: Ensuring proper operation
          
          We handle all types of side windows including tempered and laminated glass. Our service includes thorough testing of window operations, weather sealing, and cleaning of all glass surfaces. We also check and lubricate window mechanisms for smooth operation.`
      },
      {
        title: 'ADAS Calibration',
        time: '15 to 60 Minutes',
        image: '/images/ADAS_calibration.jpg',
        alt: 'ADAS Calibration',
        description: "Advanced calibration of your vehicle's safety systems (ADAS) to ensure accurate functioning of safety features such as lane-keeping assist and emergency braking.",
        longDescription: `Our ADAS calibration service includes:
          • Comprehensive System Scan: Identifying all ADAS components
          • Static Calibration: Using manufacturer-specified equipment
          • Dynamic Calibration: Road testing when required
          • Multiple Systems Coverage: Forward cameras, radar sensors, etc.
          • Documentation: Detailed calibration reports
          • Safety Verification: Testing all calibrated systems
          
          We use the latest calibration technology and follow manufacturer-specific procedures for each vehicle make and model. This ensures all safety systems function correctly, including lane departure warning, automatic emergency braking, and adaptive cruise control.`
      },
      {
        title: 'Fleet Services',
        time: 'Same-Day Service',
        image: '/images/fleet_service.jpg',
        alt: 'Fleet Auto Glass Services',
        description: 'Specialized auto glass solutions for fleet operators. We understand the importance of minimizing vehicle downtime and offer priority service with flexible scheduling, mobile repairs, and streamlined ICBC claims processing.',
        longDescription: `Our fleet service program offers:
          • Priority Scheduling: Minimizing fleet downtime
          • Volume Pricing: Competitive rates for fleet accounts
          • Mobile Service: On-site repairs and replacements
          • Account Management: Dedicated fleet coordinator
          • Simplified Billing: Consolidated invoicing options
          • Preventive Maintenance: Regular fleet inspections
          
          We work with fleet operators of all sizes, from small business fleets to large commercial operations. Our service includes streamlined ICBC claims processing, detailed documentation for each service, and flexible scheduling to accommodate your fleet's operational needs.`
      },
      {
        title: 'Accessories',
        time: 'Varies by Product',
        image: '/images/accessories.jpg',
        alt: 'Auto Glass Accessories',
        description: 'Complete range of auto glass accessories including wipers, rain repellents, and tinting solutions for enhanced visibility and protection.',
        longDescription: `Our comprehensive auto glass accessories include:
          • Premium Windshield Wipers: High-quality wipers for crystal clear visibility
          • Rain Repellent Treatments: Advanced water-beading solutions
          • Window Tinting: UV protection and privacy options
          • Glass Protection Films: Additional layer of safety
          • Defrost Kits: Enhanced winter visibility solutions
          • Trim and Molding: OEM-quality replacement parts
          
          All our accessories are carefully selected to meet the highest quality standards and are installed by our certified technicians. We offer competitive pricing and professional installation services to ensure optimal performance and longevity.`
      }
];

export default function ServiceSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-2">Time: {service.time}</p>
                <p className="text-gray-700 mb-4">{service.description}</p>
                {service.longDescription && (
                  <button
                    onClick={() => toggleService(service.title)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {expandedService === service.title ? 'Show Less' : 'Read More'}
                  </button>
                )}
              </div>
              {expandedService === service.title && service.longDescription && (
                <div className="px-6 pb-6">
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-line">
                      {service.longDescription}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}