'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How long does windshield replacement take?',
    answer: 'A typical windshield replacement takes 45-90 minutes. However, you should wait at least one hour after installation before driving to ensure proper adhesive curing.'
  },
  {
    question: 'Do you work with ICBC claims?',
    answer: 'Yes, we are an ICBC-certified shop. We can handle your claim directly with ICBC, making the process hassle-free for you.'
  },
  {
    question: 'Can my windshield still be repaired if there is more than one damage point?',
    answer: 'Yes. As long as all points of damage meet the criteria mentioned above, we will likely be able to repair up to 3 damage points. Anything more than that would severely affect the windshield\'s structural strength and we would recommend a replacement.'
  },
  {
    question: 'Will you calibrate my car\'s safety system sensors (ADAS)?',
    answer: 'Yes. We are able to recalibrate the advanced sensors for any make or model.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center text-danger fw-bold mb-5 floating">Frequently Asked Questions</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                <div 
                  className="glass-effect p-4 rounded-lg tech-card cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="text-white h5 mb-0">{faq.question}</h3>
                    <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-danger`}></i>
                  </div>
                  {openIndex === index && (
                    <p className="text-white-50 mt-3 mb-0 animate-fadeInUp">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}