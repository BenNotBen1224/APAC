export default function Footer() {
    return (
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Richmond Tel: 604-278-6100</p>
              <p>Text: 778-387-7928</p>
              <p>Email: info@apacautoglass.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul>
                <li>Windshield Replacement</li>
                <li>Chip Repair</li>
                <li>ICBC Claims</li>
                <li>ADAS Calibration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 8am - 6pm</p>
              <p>Saturday: 9am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }