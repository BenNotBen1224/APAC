import Link from 'next/link';

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
              <h3 className="text-xl font-bold mb-4">More Info</h3>
              <ul className="space-y-2">
              <li><Link href="/icbc-claims" className="text-white hover:text-gray-300">ICBC Claims</Link></li>
                <li><Link href="/about" className="text-white hover:text-gray-300">About APAC</Link></li>
                <li><Link href="/winter-safety" className="text-white hover:text-gray-300">Winter Safety</Link></li>
                <li><Link href="/life-hacks" className="text-white hover:text-gray-300">Auto Glass Life Hacks</Link></li>
                <li><Link href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 8am - 6pm</p>
              <p>Saturday: 9am - 4pm</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }