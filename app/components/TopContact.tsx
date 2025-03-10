'use client';

export default function TopContact() {
  return (
    <div className="bg-black text-white py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="tel:6042786100" className="text-white text-decoration-none me-4">
              <i className="fas fa-phone me-2"></i>
              <span className="fw-bold">604-278-6100</span>
            </a>
            <a href="https://wa.me/17783877928" className="text-white text-decoration-none">
              <i className="fab fa-whatsapp me-2"></i>
              <span className="fw-bold">778-387-7928</span>
            </a>
          </div>
          <div>
            <a href="#quote" className="btn btn-danger btn-sm">
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}