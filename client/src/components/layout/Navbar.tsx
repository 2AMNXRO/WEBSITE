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
    <nav className={`sticky top-0 z-50 w-full bg-black ${isScrolled ? 'shadow-md shadow-red-900/20' : ''} transition-shadow duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl flex items-center">
              <i className="fas fa-code mr-2 text-red-500"></i>
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Code</span>
              <span className="text-white">nova</span>
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
                    ? 'text-red-500' 
                    : 'text-gray-300 hover:text-red-400'
                } transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-red-900/20">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-zinc-800 bg-zinc-900">
                <div className="flex flex-col space-y-3 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`px-3 py-2.5 text-base font-medium ${
                        location === link.path || (location === '/' && link.path === '/')
                          ? 'text-red-500'
                          : 'text-gray-300 hover:text-red-400'
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
