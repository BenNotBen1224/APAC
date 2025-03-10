import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import QuoteForm from './components/forms/QuoteForm';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import ServiceProcess from './components/ServiceProcess';
import FAQSection from './components/FAQSection';
import TopContact from './components/TopContact';
// import LiveChat from './components/LiveChat';


export default function Home() {
  return (
    <>
      <TopContact />
      <Navigation />
      <HeroSection />
      <TrustBadges />
      <ServiceSection />
      <ServiceProcess />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <QuoteForm />
      {/* <LiveChat /> */}
      <section className="container-fluid">
        <div className="map-container mt-5">
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