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
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Codenova offers professional website and app development at just $10/hour.
              Explore our range of services designed to meet your digital needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-blue-100 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-gray-600">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="font-bold text-primary">$10<span className="text-sm font-normal text-gray-500">/hour</span></div>
                  <Link href="/booking">
                    <Button variant="outline">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              All services are offered at a flat rate of $10 per hour with no hidden fees or minimum commitments.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 border-b text-center">
              <div className="inline-block rounded-full bg-blue-100 p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Hourly Rate</h3>
              <div className="mt-4 text-5xl font-bold text-primary">$10</div>
              <p className="mt-2 text-gray-500">per hour</p>
            </div>
            
            <div className="p-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">What's Included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All services at the same hourly rate</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct communication during booked sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Book as many or as few hours as needed</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No hidden fees or surcharges</span>
                </li>
              </ul>
              
              <div className="mt-8 text-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-primary text-white">
                    Book Your Session Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
