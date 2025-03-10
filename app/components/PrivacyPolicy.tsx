'use client';

export default function PrivacyPolicy() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="text-danger mb-4">Privacy Policy</h1>
      <p className="text-muted">Effective Date: March 15, 2024</p>

      <div className="mb-4">
        <p>At APAC Auto Glass, we prioritize the protection of our customers' personal information. This Privacy Policy outlines our practices for collecting, using, and safeguarding your data in accordance with Canadian privacy laws.</p>
      </div>

      <div className="mb-4">
        <h3>1. Information We Collect</h3>
        <p>We collect personal information including:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Vehicle details (make, model, year, VIN)</li>
          <li>ICBC and insurance information</li>
          <li>Payment details for service processing</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3>2. Use of Information</h3>
        <p>Your information helps us:</p>
        <ul>
          <li>Deliver auto glass services and ADAS calibration</li>
          <li>Process ICBC claims and insurance verification</li>
          <li>Manage appointments and service scheduling</li>
          <li>Improve our service quality</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3>3. Information Security</h3>
        <p>We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</p>
      </div>

      <div className="mb-4">
        <h3>4. Contact Information</h3>
        <p>For privacy concerns, contact us at:</p>
        <address>
          APAC Auto Glass<br />
          Richmond, BC<br />
          Tel: 604-278-6100<br />
          Email: info@apacautoglass.com
        </address>
      </div>
    </div>
  );
}