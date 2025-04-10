import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Codenova</h1>
            
            <p className="text-lg text-gray-600 mb-4">
              I'm Boston, the developer behind Codenova, offering affordable and professional coding services.
            </p>
            
            <p className="text-gray-600 mb-4">
              With a passion for creating efficient, elegant code and user-friendly websites, I founded Codenova to make professional development services accessible to everyone. I believe that quality work doesn't have to come with a premium price tag.
            </p>
            
            <p className="text-gray-600 mb-6">
              My expertise spans across web development, mobile applications, and custom coding solutions. Whether you need a simple website, a complex web application, or help with a specific coding task, I'm here to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/booking">
                <Button variant="outline" className="w-full sm:w-auto">
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg shadow-xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400 h-96">
              <div className="absolute inset-0 bg-white opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h25v25H0zM25 25h25v25H25zM75 25h25v25H75zM50 50h25v25H50zM25 75h25v25H25z" fill="currentColor" />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6 z-10">
                  <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-4xl font-bold">B</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Boston</h3>
                  <p className="text-white/80 text-sm mb-4">Full Stack Developer & Founder</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-white/80 hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white/80 hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white/80 hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">My Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Frontend Development</h3>
              <p className="text-gray-600 text-sm">HTML, CSS, JavaScript, React, Vue, Angular, Responsive Design</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Backend Development</h3>
              <p className="text-gray-600 text-sm">Node.js, Express, Python, Django, PHP, Laravel, API Development</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile Development</h3>
              <p className="text-gray-600 text-sm">React Native, Flutter, Progressive Web Apps, Cross-platform Solutions</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Database Management</h3>
              <p className="text-gray-600 text-sm">MySQL, PostgreSQL, MongoDB, Firebase, SQL, NoSQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
