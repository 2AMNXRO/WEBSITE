import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-white font-bold text-xl flex items-center">
              <i className="fas fa-code mr-2 text-purple-500"></i>
              Codenova
            </Link>
            <p className="mt-4 text-gray-400">
              Professional website and coding services at affordable rates.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition duration-300">Services</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-white transition duration-300">Book Now</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition duration-300">Website Development</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition duration-300">App Development</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition duration-300">Custom Coding</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2 text-blue-500"></i>
                contact@codenova.dev
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                Remote Services
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Codenova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
