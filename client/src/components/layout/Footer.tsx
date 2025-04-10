import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(220,38,38,0.06),transparent_25%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mr-3 shadow-lg shadow-red-900/30">
                  <i className="fas fa-code text-white text-lg"></i>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-bold text-2xl">Code</span>
                  <span className="text-white font-bold text-2xl">nova</span>
                </div>
              </div>
            </Link>
            
            <p className="mt-5 text-gray-400 leading-relaxed">
              Professional website and coding services with transparent pricing. Get quality development work at competitive rates.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-red-900/30 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-red-900/30 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-red-900/30 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 md:ml-auto">
            <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600/70 -z-10"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-200 flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 opacity-60"></span>Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition duration-200 flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 opacity-60"></span>Services</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-white transition duration-200 flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 opacity-60"></span>Book Now</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-200 flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 opacity-60"></span>About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-200 flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 opacity-60"></span>Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600/70 -z-10"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 hover:text-white transition duration-200">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 opacity-60"></span>
                <Link href="/#services">Website Development</Link>
                <span className="ml-2 text-red-500 text-xs">$25</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition duration-200">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 opacity-60"></span>
                <Link href="/#services">App Development</Link>
                <span className="ml-2 text-red-500 text-xs">$35</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition duration-200">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 opacity-60"></span>
                <Link href="/#services">Custom Development</Link>
                <span className="ml-2 text-red-500 text-xs">$45</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600/70 -z-10"></span>
            </h4>
            
            <div className="bg-zinc-900/80 p-6 rounded-xl border border-zinc-800 shadow-md">
              <div className="flex items-center text-gray-300 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center mr-3 text-red-500">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us at</p>
                  <p>contact@codenova.dev</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center mr-3 text-red-500">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Based in</p>
                  <p>Remote Services Worldwide</p>
                </div>
              </div>
              
              <div className="mt-5 pt-5 border-t border-zinc-800/60">
                <Link href="/contact" className="text-red-500 hover:text-red-400 font-medium flex items-center justify-center">
                  Send us a message
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Codenova. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-red-400 transition duration-200">Privacy Policy</Link>
              <Link href="#" className="hover:text-red-400 transition duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
