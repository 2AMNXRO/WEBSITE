import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Website Development",
    description: "Custom websites built from scratch or using popular platforms like WordPress, Shopify, or Wix.",
    price: "$10/hour"
  },
  {
    icon: "fas fa-mobile-alt",
    title: "App Development",
    description: "Mobile and web applications built with modern frameworks like React, React Native, or Flutter.",
    price: "$10/hour"
  },
  {
    icon: "fas fa-code",
    title: "Custom Coding",
    description: "Help with coding tasks, bug fixes, feature implementation, or technical consultations.",
    price: "$10/hour"
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
      <section id="home" className="bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Welcome to <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Codenova</span>
              </h1>
              <p className="text-xl md:text-2xl mt-4 font-light">
                Affordable Website & Coding Services at <span className="font-bold text-red-500">$10 per Hour</span>
              </p>
              <p className="mt-6 text-lg text-gray-300">
                Professional development services at a fraction of the cost. Get your project started today with expert guidance and implementation.
              </p>
              <div className="mt-8">
                <Link href="/booking">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6">
                    Book your session now and get started!
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Person coding on laptop" 
                className="rounded-lg shadow-2xl border-2 border-red-500/20" 
              />
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="text-background fill-current">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our <span className="text-red-500">Services</span></h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Codenova offers professional website and app development at just $10/hour. 
              Our expertise allows us to deliver high-quality results without the premium price tag.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-red-900/30">
                <div className="text-red-500 text-4xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="font-bold text-primary">{service.price.split('/')[0]}<span className="text-sm font-normal text-gray-400">/hour</span></p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Book a Service Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Chat Preview */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Live <span className="text-red-500">Chat</span> Preview</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              After booking, you'll have access to our live chat interface for direct communication about your project.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-800 rounded-xl shadow-xl overflow-hidden border border-red-900/30">
              {/* Chat Header */}
              <div className="bg-primary text-white p-4 flex items-center">
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
                <div className="flex justify-start mb-4">
                  <div className="bg-zinc-700 text-gray-200 rounded-lg py-2 px-4 max-w-[80%]">
                    <p className="text-sm">Hello! Welcome to Codenova support. How can I help with your project today?</p>
                    <p className="text-xs text-gray-400 mt-1">10:30 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-end mb-4">
                  <div className="bg-primary text-white rounded-lg py-2 px-4 max-w-[80%]">
                    <p className="text-sm">Hi there! I just booked a session for website development. I'm looking to create an e-commerce site for my small business.</p>
                    <p className="text-xs text-white/80 mt-1">10:32 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-start mb-4">
                  <div className="bg-zinc-700 text-gray-200 rounded-lg py-2 px-4 max-w-[80%]">
                    <p className="text-sm">That's great! I'd be happy to help you create an e-commerce site. Could you share more details about your business and what specific features you're looking for?</p>
                    <p className="text-xs text-gray-400 mt-1">10:34 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-lg py-2 px-4 max-w-[80%]">
                    <p className="text-sm">I sell handmade jewelry. I need product listings, a shopping cart, and payment processing. Would also like a simple blog section.</p>
                    <p className="text-xs text-white/80 mt-1">10:36 AM</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t border-zinc-700">
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 px-4 py-2 border border-zinc-600 bg-zinc-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                    disabled
                  />
                  <button 
                    className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition duration-300 disabled:opacity-75" 
                    disabled
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Chat access will be enabled after your booking is confirmed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
