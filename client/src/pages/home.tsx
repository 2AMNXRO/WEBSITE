import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Welcome to Codenova
              </h1>
              <p className="text-xl md:text-2xl mt-4 font-light">
                Affordable Website & Coding Services at <span className="font-bold">$10 per Hour</span>
              </p>
              <p className="mt-6 text-lg text-gray-100">
                Professional development services at a fraction of the cost. Get your project started today with expert guidance and implementation.
              </p>
              <div className="mt-8">
                <Link href="/booking">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    Book your session now and get started!
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-lg shadow-2xl overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  fill="none"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="600" height="600" fill="#e2e8f0" />
                  <g fill="#3b82f6" fillOpacity="0.4">
                    <path d="M0 0h100v100H0z" />
                    <path d="M100 100h100v100H100z" />
                    <path d="M300 100h100v100H300z" />
                    <path d="M500 100h100v100H500z" />
                    <path d="M200 200h100v100H200z" />
                    <path d="M400 200h100v100H400z" />
                    <path d="M100 300h100v100H100z" />
                    <path d="M300 300h100v100H300z" />
                    <path d="M500 300h100v100H500z" />
                    <path d="M0 400h100v100H0z" />
                    <path d="M200 400h100v100H200z" />
                    <path d="M400 400h100v100H400z" />
                    <path d="M100 500h100v100H100z" />
                    <path d="M300 500h100v100H300z" />
                    <path d="M500 500h100v100H500z" />
                  </g>
                  <g
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                    strokeDasharray="10,10"
                  >
                    <path d="M50 0v600" />
                    <path d="M150 0v600" />
                    <path d="M250 0v600" />
                    <path d="M350 0v600" />
                    <path d="M450 0v600" />
                    <path d="M550 0v600" />
                    <path d="M0 50h600" />
                    <path d="M0 150h600" />
                    <path d="M0 250h600" />
                    <path d="M0 350h600" />
                    <path d="M0 450h600" />
                    <path d="M0 550h600" />
                  </g>
                  <rect
                    x="150"
                    y="150"
                    width="300"
                    height="300"
                    fill="#3b82f6"
                    fillOpacity="0.8"
                  />
                  <text
                    x="300"
                    y="300"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="monospace"
                    fontSize="24"
                    fill="white"
                  >
                    {'<CodeNova />'}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="text-gray-50 fill-current">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Codenova offers professional website and app development at just $10/hour. 
              Our expertise allows us to deliver high-quality results without the premium price tag.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-500 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Website Development</h3>
              <p className="text-gray-600">
                Custom websites built from scratch or using popular platforms like WordPress, Shopify, or Wix.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-bold text-primary">$10<span className="text-sm font-normal text-gray-500">/hour</span></p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-500 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-gray-600">
                Mobile and web applications built with modern frameworks like React, React Native, or Flutter.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-bold text-primary">$10<span className="text-sm font-normal text-gray-500">/hour</span></p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-500 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Coding</h3>
              <p className="text-gray-600">
                Help with coding tasks, bug fixes, feature implementation, or technical consultations.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-bold text-primary">$10<span className="text-sm font-normal text-gray-500">/hour</span></p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services">
              <Button size="lg" className="bg-primary text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8">
                Book your session now at just $10/hour and get professional coding services.
              </p>
              <Link href="/booking">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Book Your Session Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
