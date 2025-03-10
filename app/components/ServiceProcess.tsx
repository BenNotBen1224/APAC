'use client';

const steps = [
  {
    title: 'Assessment',
    icon: 'fa-magnifying-glass',
    description: 'Thorough damage inspection'
  },
  {
    title: 'Preparation',
    icon: 'fa-tools',
    description: 'Area cleaning and setup'
  },
  {
    title: 'Installation',
    icon: 'fa-car',
    description: 'Professional replacement'
  },
  {
    title: 'Quality Check',
    icon: 'fa-check-circle',
    description: 'Final inspection'
  }
];

export default function ServiceProcess() {
  return (
    <section className="py-5 bg-black">
      <div className="container">
        <h2 className="text-center text-danger fw-bold mb-5 floating">Our Process</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="glass-effect p-4 rounded-lg tech-card h-100 text-center">
                <div className="position-relative mb-4">
                  <div className="process-number">{index + 1}</div>
                  <i className={`fas ${step.icon} fa-3x text-danger mb-3`}></i>
                </div>
                <h4 className="text-white mb-3">{step.title}</h4>
                <p className="text-white-50">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}