'use client';

import AnimatedLogo from './AnimatedLogo';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <AnimatedLogo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#quote">Get Quote</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tel:6042786100">
                <i className="fas fa-phone me-2"></i>604-278-6100
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}