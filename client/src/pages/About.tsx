import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Codenova</h2>
            
            <p className="text-lg text-foreground mb-4">
              I'm Boston, the developer behind Codenova, offering affordable and professional coding services.
            </p>
            
            <p className="text-muted-foreground mb-4">
              With a passion for creating efficient, elegant code and user-friendly websites, I founded Codenova to make professional development services accessible to everyone. I believe that quality work doesn't have to come with a premium price tag.
            </p>
            
            <p className="text-muted-foreground mb-6">
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
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=750&q=80" 
              alt="Professional developer" 
              className="rounded-lg shadow-xl mx-auto md:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
