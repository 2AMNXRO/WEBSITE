import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Book Now", path: "/booking" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll event to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling for hash links
  const handleNavClick = (path: string) => {
    if (path.includes('#')) {
      setIsOpen(false);
      const element = document.getElementById(path.split('#')[1]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full bg-white ${isScrolled ? 'shadow-sm' : ''} transition-shadow duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-primary font-bold text-xl flex items-center">
              <i className="fas fa-code mr-2 text-purple-500"></i>
              Codenova
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-3 py-2 text-sm font-medium ${
                  location === link.path || (location === '/' && link.path === '/')
                    ? 'text-primary' 
                    : 'text-gray-800 hover:text-primary'
                } transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-3 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`px-3 py-2.5 text-base font-medium ${
                        location === link.path || (location === '/' && link.path === '/')
                          ? 'text-primary'
                          : 'text-gray-800 hover:text-primary'
                      }`}
                    >
                      {link.name}
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
