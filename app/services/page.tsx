import Navigation from '@/app/components/Navigation';
import HeroSection from '@/app/components/HeroSection';
import ServiceSection from '@/app/components/ServiceSection';
import QuoteForm from '@/app/components/forms/QuoteForm';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServiceSection />
      <QuoteForm />
      <section className="container-fluid">
        <div className="map-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d-122.41941548531593!3d37.77492977975962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjAiTiAxMjLCsDI1JzA4LjQiVw!5e0!3m2!1sen!2sus!4v1633023858373!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}