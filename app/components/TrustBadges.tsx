'use client';

import Image from 'next/image';

export default function TrustBadges() {
  return (
    <section className="py-4 bg-black">
      <div className="container">
        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="glass-effect p-3 rounded-lg h-100">
              <i className="fas fa-certificate text-danger fa-2x mb-3"></i>
              <h5 className="text-white mb-2">ICBC Certified</h5>
              <p className="text-white-50 mb-0">Authorized ICBC repair facility</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="glass-effect p-3 rounded-lg h-100">
              <i className="fas fa-award text-danger fa-2x mb-3"></i>
              <h5 className="text-white mb-2">BBB Accredited</h5>
              <p className="text-white-50 mb-0">A+ Rating Business</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="glass-effect p-3 rounded-lg h-100">
              <i className="fas fa-user-shield text-danger fa-2x mb-3"></i>
              <h5 className="text-white mb-2">Certified Technicians</h5>
              <p className="text-white-50 mb-0">Factory-trained experts</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="glass-effect p-3 rounded-lg h-100">
              <i className="fas fa-shield-alt text-danger fa-2x mb-3"></i>
              <h5 className="text-white mb-2">Lifetime Warranty</h5>
              <p className="text-white-50 mb-0">On installations & materials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}