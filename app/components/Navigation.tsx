'use client';

import AnimatedLogo from './AnimatedLogo';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <AnimatedLogo />
        </Link>
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
              <Link href="#services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link href="#quote" className="nav-link">Get Quote</Link>
            </li>
            <li className="nav-item">
              <Link href="tel:6042786100" className="nav-link">
                <i className="fas fa-phone me-2"></i>604-278-6100
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}