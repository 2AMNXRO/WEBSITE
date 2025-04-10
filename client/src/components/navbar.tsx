import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Code } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Book Now" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMobileNavigation = (path: string) => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-primary font-bold text-xl flex items-center">
              <Code className="h-6 w-6 mr-2 text-accent" />
              Codenova
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium ${
                  location === link.href ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => handleMobileNavigation(link.href)}
                      className={`px-3 py-2 text-base font-medium ${
                        location === link.href ? "text-primary" : "text-gray-700 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
