import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Website Development",
    description: "Custom websites built from scratch or using popular platforms like WordPress, Shopify, or Wix.",
    price: "$25",
    bgColor: "from-red-900/30 to-zinc-900",
    features: ["Responsive Design", "SEO Optimization", "Content Management"]
  },
  {
    icon: "fas fa-mobile-alt",
    title: "App Development",
    description: "Mobile and web applications built with modern frameworks like React, React Native, or Flutter.",
    price: "$35",
    bgColor: "from-red-800/40 to-zinc-900",
    badge: "POPULAR",
    features: ["Cross-platform", "User Authentication", "API Integration"]
  },
  {
    icon: "fas fa-code",
    title: "Custom Coding",
    description: "Help with coding tasks, bug fixes, feature implementation, or technical consultations.",
    price: "$45",
    bgColor: "from-red-900/30 to-zinc-900",
    features: ["Bug Fixing", "Feature Development", "Technical Consultation"]
  }
];

export default function Home() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts
    if (location.includes('#')) {
      const id = location.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-black text-white">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-950/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.15),transparent_25%),radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.1),transparent_25%)]"></div>
        <div className="absolute right-0 top-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-red-950/90 rounded-full text-red-400 text-sm font-medium border border-red-900/40">
                Professional Development Services
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                Welcome to <span className="relative">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Codenova</span>
                  <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-500 rounded opacity-70"></span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl mt-6 font-light text-gray-300">
                Affordable Website & App Development with <span className="font-bold text-red-500">Tiered Pricing</span>
              </p>
              <p className="mt-6 text-lg text-gray-400">
                Professional development services with transparent pricing. Get your project started today with expert guidance and implementation.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link href="/booking">
                  <Button size="lg" className="relative overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative px-8 py-3 font-semibold">Book your session now</span>
                  </Button>
                </Link>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                  View our services →
                </Link>
              </div>
              
              <div className="mt-12 py-4 flex items-center space-x-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">$25</span>
                  <span className="text-sm text-gray-400">Website Dev</span>
                </div>
                <div className="h-10 w-px bg-zinc-800"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">$35</span>
                  <span className="text-sm text-gray-400">App Dev</span>
                </div>
                <div className="h-10 w-px bg-zinc-800"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">$45</span>
                  <span className="text-sm text-gray-400">Custom Dev</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700 opacity-20 blur-sm"></div>
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gray-900 via-red-900/30 to-gray-900 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Person coding on laptop" 
                className="relative rounded-lg shadow-2xl border border-zinc-800 z-10" 
              />
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/30 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600/20 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-zinc-950">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(220,38,38,0.05),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.05),transparent_25%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-px w-8 bg-red-800"></span>
              <span className="mx-3 text-sm font-semibold text-red-500 uppercase tracking-wider">Our offerings</span>
              <span className="h-px w-8 bg-red-800"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional <span className="text-red-500">Services</span></h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Codenova offers professional website and app development with transparent tiered pricing. 
              Our expertise allows us to deliver high-quality results at competitive rates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mt-20">
            {services.map((service, index) => (
              <div key={index} className={`relative rounded-xl overflow-hidden group transition-all duration-300 hover:translate-y-[-5px]`}>
                {/* Card background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.bgColor}`}></div>
                
                {/* Popular badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                    {service.badge}
                  </div>
                )}
                
                {/* Card content */}
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-red-900/30 text-red-500 rounded-lg mb-6 flex items-center justify-center text-3xl">
                    <i className={service.icon}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  
                  <p className="text-gray-400 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="text-red-500 mr-3 mt-1">
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-zinc-800/70 flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold text-red-500">{service.price}</p>
                      <p className="text-sm text-gray-500">per service</p>
                    </div>
                    
                    <Link href="/booking">
                      <Button variant="outline" className="border-red-900/60 hover:bg-red-900/20 text-gray-300 hover:text-white">
                        Select
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-block bg-zinc-900 p-10 rounded-2xl border border-zinc-800 max-w-3xl shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Ready to get started with your project?</h3>
              <p className="text-gray-400 mb-8">
                Book a service today and experience professional development with transparent pricing.
              </p>
              <Link href="/booking">
                <Button size="lg" className="relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative px-8 py-3 font-semibold">Book a Service Now</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Preview */}
      <section className="py-24 bg-black relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.08),transparent_25%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-px w-8 bg-red-800"></span>
                <span className="mx-3 text-sm font-semibold text-red-500 uppercase tracking-wider">Live support</span>
                <span className="h-px w-8 bg-red-800"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Direct <span className="text-red-500">Communication</span> With Your Developer</h2>
              
              <p className="text-gray-400 text-lg mb-8">
                After your booking is confirmed, you'll gain access to our dedicated live chat interface. Connect directly with your developer to discuss project requirements, share ideas, and receive updates.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-900/20 p-3 rounded-lg text-red-500 mr-4">
                    <i className="fas fa-comments text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Real-time Messaging</h3>
                    <p className="text-gray-400">Communicate instantly with your developer during project development.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-900/20 p-3 rounded-lg text-red-500 mr-4">
                    <i className="fas fa-file-upload text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">File Sharing</h3>
                    <p className="text-gray-400">Share documents, images, and requirements directly through the chat.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-900/20 p-3 rounded-lg text-red-500 mr-4">
                    <i className="fas fa-history text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Conversation History</h3>
                    <p className="text-gray-400">All messages are saved so you can refer back to previous discussions.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/booking">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2">
                    Book to unlock chat access
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-900/20 to-zinc-900/20 rounded-xl blur-md"></div>
              <div className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-zinc-800 relative">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-red-800 to-red-600 text-white p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Codenova Support</h3>
                    <p className="text-xs text-white/80">Online - Typically replies within minutes</p>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="p-4 h-80 overflow-y-auto bg-black/40">
                  <div className="flex items-start gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-red-500">
                      <i className="fas fa-code text-xs"></i>
                    </div>
                    <div>
                      <div className="bg-zinc-800 text-gray-200 rounded-lg py-2 px-4 max-w-[80%]">
                        <p className="text-sm">Hello! Welcome to Codenova support. How can I help with your project today?</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-2">10:30 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-6">
                    <div className="flex flex-col items-end">
                      <div className="bg-red-600 text-white rounded-lg py-2 px-4">
                        <p className="text-sm">Hi there! I just booked a session for website development. I'm looking to create an e-commerce site for my small business.</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 mr-2">10:32 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-red-500">
                      <i className="fas fa-code text-xs"></i>
                    </div>
                    <div>
                      <div className="bg-zinc-800 text-gray-200 rounded-lg py-2 px-4 max-w-[80%]">
                        <p className="text-sm">That's great! I'd be happy to help you create an e-commerce site. Could you share more details about your business and what specific features you're looking for?</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-2">10:34 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="flex flex-col items-end">
                      <div className="bg-red-600 text-white rounded-lg py-2 px-4">
                        <p className="text-sm">I sell handmade jewelry. I need product listings, a shopping cart, and payment processing. Would also like a simple blog section.</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 mr-2">10:36 AM</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat Input */}
                <div className="p-4 border-t border-zinc-800">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-red-500 bg-zinc-800 rounded-full">
                      <i className="fas fa-paperclip"></i>
                    </button>
                    <div className="flex-1 relative">
                      <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                        disabled
                      />
                    </div>
                    <button 
                      className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 disabled:opacity-70" 
                      disabled
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center italic">
                    Chat access will be enabled after your booking is confirmed
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-red-600/10 rounded-full blur-xl"></div>
              <div className="absolute -top-5 -left-5 w-28 h-28 bg-red-600/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
