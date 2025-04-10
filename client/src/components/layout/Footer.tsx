import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl flex items-center">
              <i className="fas fa-code mr-2 text-red-500"></i>
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Code</span>
              <span className="text-white">nova</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Professional website and coding services at just $10/hour.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-red-400 transition duration-300">Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-red-400 transition duration-300">Services</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-red-400 transition duration-300">Book Now</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-red-400 transition duration-300">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-red-400 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-gray-400 hover:text-red-400 transition duration-300">Website Development</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-red-400 transition duration-300">App Development</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-red-400 transition duration-300">Custom Coding</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2 text-red-500"></i>
                contact@codenova.dev
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
                Remote Services
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2 text-gray-300">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-red-900/20 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Codenova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
