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
    <nav className={`sticky top-0 z-50 w-full bg-black ${isScrolled ? 'shadow-md shadow-red-900/20 border-b border-red-900/30' : ''} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-2xl flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mr-3 shadow-lg shadow-red-900/30">
                <i className="fas fa-code text-white"></i>
              </div>
              <div>
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-extrabold">Code</span>
                <span className="text-white font-bold">nova</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => {
              const isActive = location === link.path || (location === '/' && link.path === '/');
              return (
                <Link 
                  key={link.name}
                  href={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-2 mx-1 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-red-600 shadow-md shadow-red-900/20' 
                      : 'text-gray-300 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {link.name === "Book Now" ? (
                    <span className="flex items-center">
                      <span className="relative inline-flex overflow-hidden rounded-full p-[1px] before:absolute before:inset-0 before:animate-spin before:bg-gradient-to-r before:from-red-500 before:via-red-600 before:to-red-700">
                        <span className="inline-flex items-center justify-center w-full h-full px-3 py-1 text-sm font-medium text-white bg-zinc-900 rounded-full backdrop-blur-3xl">
                          {link.name}
                        </span>
                      </span>
                    </span>
                  ) : (
                    link.name
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-red-900/20 focus:outline-none">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-zinc-800 bg-zinc-900">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="mb-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mr-3">
                      <i className="fas fa-code text-white"></i>
                    </div>
                    <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-bold text-xl">Code</span>
                    <span className="text-white font-bold text-xl">nova</span>
                  </div>
                  
                  {navLinks.map((link) => {
                    const isActive = location === link.path || (location === '/' && link.path === '/');
                    return (
                      <Link
                        key={link.name}
                        href={link.path}
                        onClick={() => handleNavClick(link.path)}
                        className={`px-4 py-3 text-base font-medium rounded-md ${
                          isActive
                            ? 'text-white bg-red-600 shadow-md shadow-red-900/20'
                            : 'text-gray-300 hover:text-white hover:bg-zinc-800'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
