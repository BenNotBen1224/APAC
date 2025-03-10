import Image from 'next/image';

const services = [
    {
        title: 'Windshield Replacement',
        time: '45 to 90 Minutes',
        image: '/images/windshield_replacement.jpg',
        alt: 'Windshield Replacement',
        description: 'Expert windshield replacement using high-quality glass and advanced adhesives to ensure safety, clarity, and durability, restoring your vehicle’s integrity and clear visibility.'
      },
      {
        title: 'Windshield Repair',
        time: '15 to 30 Minutes',
        image: '/images/windshield_repair.jpg',
        alt: 'Windshield Repair',
        description: 'Quick and effective repair solutions for minor chips and cracks, preventing further damage and restoring clear visibility in no time.'
      },
      {
        title: 'Side Glass Replacement',
        time: '45 to 90 Minutes',
        image: '/images/glass_replacement.jpg',
        alt: 'Side Glass Replacement',
        description: 'Reliable side window replacements with precision fitting, restoring your vehicle’s security and aesthetic appeal quickly and efficiently.'
      },
      {
        title: 'ADAS Calibration',
        time: '15 to 60 Minutes',
        image: '/images/ADAS_calibration.jpg',
        alt: 'ADAS Calibration',
        description: 'Advanced calibration of your vehicle’s safety systems (ADAS) to ensure accurate functioning of safety features such as lane-keeping assist and emergency braking.'
      }
];

export default function ServiceSection() {
  return (
    <section className="container py-5">
      <h2 className="text-center text-danger fw-bold mb-5 floating">Our Professional Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-3">
            <div className="card tech-card h-100 glass-effect text-white">
              <div className="position-relative" style={{ height: '200px' }}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-top"
                />
              </div>
              <div className="card-body text-center">
                <h5 className="text-danger">{service.title}</h5>
                <p className="text-white-50">Time: {service.time}</p>
                <div className="mt-3">
                  <button className="btn btn-outline-danger btn-sm">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}