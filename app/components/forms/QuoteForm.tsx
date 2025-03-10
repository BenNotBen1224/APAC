'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  make: string;
  model: string;
  year: string;
  vinNumber: string;
  location: string;
  service: string;
  comments: string;
  isICBCInsured: string;
  hasADAS: string;
  photos: FileList | null;
}

interface SubmissionState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  success: boolean;
  message: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    make: '',
    model: '',
    year: '',
    vinNumber: '',
    location: '',
    service: '',
    comments: '',
    isICBCInsured: '',
    hasADAS: '',
    photos: null
  });

  const [submission, setSubmission] = useState<SubmissionState>({
    isSubmitting: false,
    isSubmitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmission(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'photos' && value) {
          Array.from(value as FileList).forEach(file => {
            formDataToSend.append('photos', file);
          });
        } else {
          formDataToSend.append(key, value as string);
        }
      });

      const response = await fetch('/api/email', {
        method: 'POST',
        body: formDataToSend,
      });
      
      const data = await response.json();
      
      setSubmission({
        isSubmitting: false,
        isSubmitted: true,
        success: data.success,
        message: data.message || data.error
      });

      if (data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          make: '',
          model: '',
          year: '',
          vinNumber: '',
          location: '',
          service: '',
          comments: '',
          isICBCInsured: '',
          hasADAS: '',
          photos: null
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmission({
        isSubmitting: false,
        isSubmitted: true,
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setSubmission({
      isSubmitting: false,
      isSubmitted: false,
      success: false,
      message: ''
    });
  };

  return (
    <section className="bg-black text-white py-5" id="quote">
      <div className="container">
        <h2 className="text-center display-4 mb-2">Get a Quote</h2>

        {submission.isSubmitted ? (
          <div className="text-center py-5">
            <div className={`alert ${submission.success ? 'alert-success' : 'alert-danger'} mb-4`}>
              <h3 className="h4 mb-3">{submission.success ? 'Thank You!' : 'Submission Error'}</h3>
              <p className="mb-4">{submission.message}</p>
              {!submission.success && (
                <button 
                  onClick={handleReset}
                  className="btn btn-outline-light"
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-form mb-5">
            <div className="row g-4">
              <div className="col-md-4">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Make</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter vehicle make"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Model</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter vehicle model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Year</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter vehicle year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">VIN Number (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter VIN number"
                  name="vinNumber"
                  value={formData.vinNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Location</label>
                <select
                  className="form-select"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="richmond">Richmond</option>
                  <option value="burnaby">Burnaby</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Service Required</label>
                <select
                  className="form-select"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="windshield_replacement">Windshield Replacement</option>
                  <option value="windshield_repair">Windshield Repair</option>
                  <option value="door_glass">Door Glass</option>
                  <option value="rear_glass">Rear Trunk Back Glass</option>
                  <option value="quarter_glass">Quarter Glass</option>
                  <option value="vent_glass">Vent Glass</option>
                  <option value="side_mirror">Side Mirror</option>
                  <option value="rear_view_mirror">Rear View Mirror</option>
                  <option value="ldws_calibration">LDWS Calibration</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Insured by ICBC?</label>
                <select
                  className="form-select"
                  name="isICBCInsured"
                  value={formData.isICBCInsured}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Does your Car have ADAS or Forward Collision Alert?</label>
                <select
                  className="form-select"
                  name="hasADAS"
                  value={formData.hasADAS}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Upload Photos (Optional)</label>
                <input
                  type="file"
                  className="form-control"
                  name="photos"
                  onChange={(e) => {
                    const files = (e.target as HTMLInputElement).files;
                    setFormData(prev => ({
                      ...prev,
                      photos: files
                    }));
                  }}
                  accept="image/*"
                  multiple
                />
                <small className="text-muted">Upload photos of the damage for better assessment</small>
              </div>

              <div className="col-12">
                <label className="form-label">Additional Comments</label>
                <textarea
                  className="form-control"
                  placeholder="Enter any additional information"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <div className="col-12 text-center mt-4">
                <button type="submit" className="btn btn-danger btn-lg px-5">
                  Submit Quote Request
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Warranty Information */}
      <div className="bg-dark p-4 rounded-3 mb-5">
          <h3 className="text-danger mb-3">Lifetime Warranty Coverage</h3>
          <div className="text-white-50 lh-lg">
            <p className="mb-3">
              Our replacement windshields include a comprehensive lifetime warranty that covers:
            </p>
            <ul className="mb-3">
              <li>Installation defects</li>
              <li>Manufacturing defects</li>
              <li>Leaks</li>
            </ul>
            <p className="mb-3">
              This warranty remains valid for as long as your vehicle is registered under your name and expires when the vehicle is sold to a new owner.
            </p>
            <p className="mb-3">
              If any covered defect appears during the warranty period, we will provide and install all necessary parts at no additional cost.
            </p>
            <p className="mb-2 fw-bold text-white">Warranty Exclusions:</p>
            <ul>
              <li>Leaks caused by vehicle body deterioration</li>
              <li>Damage from vandalism or theft</li>
              <li>Natural disaster damage</li>
              <li>Damage from illicit activities or deliberate acts</li>
            </ul>
          </div>
        </div>

    </section>
  );
}