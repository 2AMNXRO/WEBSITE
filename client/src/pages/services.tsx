import { Link } from "wouter";
import { 
  Monitor, 
  Smartphone, 
  Code, 
  ShoppingCart, 
  BarChart, 
  Database 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description: "Custom websites built from scratch or using popular platforms like WordPress, Shopify, or Wix. Responsive design, SEO optimized, and user-friendly interfaces.",
    features: ["Responsive Design", "SEO Optimization", "Content Management", "Custom Functionality"]
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Mobile and web applications built with modern frameworks like React, React Native, or Flutter. Create cross-platform solutions for your business needs.",
    features: ["Cross-platform", "User Authentication", "API Integration", "Offline Functionality"]
  },
  {
    icon: Code,
    title: "Custom Coding",
    description: "Help with coding tasks, bug fixes, feature implementation, or technical consultations. Get assistance with JavaScript, Python, PHP, and more.",
    features: ["Bug Fixing", "Feature Development", "Code Review", "Technical Consultation"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Set up online stores with product catalogs, shopping carts, and secure payment gateways. Integrate with shipping and inventory management systems.",
    features: ["Product Management", "Payment Processing", "Inventory Tracking", "Order Management"]
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Implement tracking solutions and create custom dashboards to monitor your website performance and user behavior.",
    features: ["Custom Dashboards", "Conversion Tracking", "User Behavior Analysis", "Performance Optimization"]
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Design and implement efficient database structures for web applications. Optimize queries and ensure data integrity.",
    features: ["Schema Design", "Query Optimization", "Data Migration", "Backup Solutions"]
  }
];

export default function Services() {
  return (
    <>
      {/* Services Hero */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Our <span className="text-red-500">Services</span></h1>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Codenova offers professional website and app development services with transparent pricing.
              Explore our range of services designed to meet your digital needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const servicePrice = service.title.includes("Website") ? "$25" : 
                                   service.title.includes("App") ? "$35" :
                                   "$45";
                                   
              return (
                <Card key={index} className="bg-black border-zinc-800 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-red-900/20 text-red-500">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-white">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-gray-400">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t border-zinc-800 pt-4">
                    <div className="font-bold text-red-500">{servicePrice}</div>
                    <Link href="/booking">
                      <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">Book Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Simple, <span className="text-red-500">Transparent</span> Pricing</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Choose the service tier that fits your project needs with our clear pricing structure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Website Development */}
            <div className="bg-zinc-900 rounded-xl shadow-xl overflow-hidden border border-zinc-800">
              <div className="p-8 border-b border-zinc-800 text-center">
                <div className="inline-block rounded-full bg-red-900/20 p-3 mb-4">
                  <Monitor className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Website Development</h3>
                <div className="mt-4 text-5xl font-bold text-red-500">$25</div>
                <p className="mt-2 text-gray-400">per service</p>
              </div>
              
              <div className="p-8">
                <h4 className="text-lg font-semibold mb-4 text-white">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Responsive web design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Content management system</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Direct communication support</span>
                  </li>
                </ul>
                
                <div className="mt-8 text-center">
                  <Link href="/booking">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="bg-zinc-900 rounded-xl shadow-xl overflow-hidden border border-zinc-800 transform scale-105 relative">
              <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold py-1 text-center">
                MOST POPULAR
              </div>
              <div className="p-8 border-b border-zinc-800 text-center pt-10">
                <div className="inline-block rounded-full bg-red-900/20 p-3 mb-4">
                  <Smartphone className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">App Development</h3>
                <div className="mt-4 text-5xl font-bold text-red-500">$35</div>
                <p className="mt-2 text-gray-400">per service</p>
              </div>
              
              <div className="p-8">
                <h4 className="text-lg font-semibold mb-4 text-white">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Cross-platform functionality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">User authentication</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">API integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Priority support</span>
                  </li>
                </ul>
                
                <div className="mt-8 text-center">
                  <Link href="/booking">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Custom Development */}
            <div className="bg-zinc-900 rounded-xl shadow-xl overflow-hidden border border-zinc-800">
              <div className="p-8 border-b border-zinc-800 text-center">
                <div className="inline-block rounded-full bg-red-900/20 p-3 mb-4">
                  <Code className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Custom Development</h3>
                <div className="mt-4 text-5xl font-bold text-red-500">$45</div>
                <p className="mt-2 text-gray-400">per service</p>
              </div>
              
              <div className="p-8">
                <h4 className="text-lg font-semibold mb-4 text-white">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Complex functionality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Database design and integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Third-party APIs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Premium dedicated support</span>
                  </li>
                </ul>
                
                <div className="mt-8 text-center">
                  <Link href="/booking">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
