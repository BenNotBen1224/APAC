'use client';

import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className="py-5 bg-black">
      <div className="container">
        <h2 className="text-center text-danger fw-bold mb-5 floating">Why Choose APAC Auto Glass?</h2>
        
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <div className="position-relative tech-card overflow-hidden rounded-lg">
              <Image
                src="/images/car_reflective.jpg"
                alt="Professional Windshield Installation"
                width={600}
                height={400}
                className="img-fluid rounded-lg"
              />
              <div className="glass-effect position-absolute bottom-0 p-3 w-100">
                <h4 className="text-white mb-0">Professional Grade Installation</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass-effect p-4 rounded-lg">
              <h3 className="text-danger mb-4">Expert Installation & Safety First</h3>
              <ul className="text-white list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Factory-Certified Technicians
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  OEM Quality Materials
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Advanced Safety Systems Calibration
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-center flex-row-reverse">
          <div className="col-md-6">
            <div className="position-relative tech-card overflow-hidden rounded-lg">
              <Image
                src="/images/work_scene2.jpg"
                alt="Advanced Equipment"
                width={600}
                height={400}
                className="img-fluid rounded-lg"
              />
              <div className="glass-effect position-absolute bottom-0 p-3 w-100">
                <h4 className="text-white mb-0">State-of-the-Art Equipment</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass-effect p-4 rounded-lg">
              <h3 className="text-danger mb-4">Modern Technology & Expertise</h3>
              <ul className="text-white list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Latest ADAS Calibration Equipment
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Precision Installation Tools
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Lifetime Warranty on Workmanship
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <div className="position-relative tech-card overflow-hidden rounded-lg">
              <Image
                src="/images/handshake.jpg"
                alt="Building Customer Trust"
                width={600}
                height={400}
                className="img-fluid rounded-lg"
              />
              <div className="glass-effect position-absolute bottom-0 p-3 w-100">
                <h4 className="text-white mb-0">Building Lasting Relationships</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass-effect p-4 rounded-lg">
              <h3 className="text-danger mb-4">Customer Confidence & Trust</h3>
              <ul className="text-white list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  ICBC Certified & Approved
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Transparent Pricing & Service
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Dedicated Customer Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}