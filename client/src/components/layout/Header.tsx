import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn, scrollToElement } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink = ({ href, label, isActive, onClick }: NavLinkProps) => {
  if (href.startsWith("#")) {
    return (
      <button 
        onClick={() => {
          scrollToElement(href.substring(1));
          onClick();
        }}
        className={cn(
          "nav-link relative font-medium hover:text-primary transition-colors",
          isActive ? "text-primary" : ""
        )}
      >
        {label}
        <span className={cn(
          "absolute bottom-[-2px] left-0 h-[2px] bg-primary transition-all duration-300",
          isActive ? "w-full" : "w-0"
        )}></span>
      </button>
    );
  }
  
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={cn(
          "nav-link relative font-medium hover:text-primary transition-colors",
          isActive ? "text-primary" : ""
        )}
      >
        {label}
        <span className={cn(
          "absolute bottom-[-2px] left-0 h-[2px] bg-primary transition-all duration-300",
          isActive ? "w-full" : "w-0"
        )}></span>
      </a>
    </Link>
  );
};

export default function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      // Set header background on scroll
      setScrolled(window.scrollY > 10);

      // Only track sections on homepage
      if (location !== "/") return;

      const sections = ["home", "about", "skills", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: location === "/" ? "#home" : "/", label: "Home" },
    { href: location === "/" ? "#about" : "/#about", label: "About" },
    { href: location === "/" ? "#projects" : "/#projects", label: "Projects" },
    { href: location === "/" ? "#skills" : "/#skills", label: "Skills" },
    { href: location === "/" ? "#contact" : "/#contact", label: "Contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-sm backdrop-blur-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a className="text-2xl font-bold text-primary">
              YourName
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={
                  link.href.includes("#") 
                    ? link.href === `#${activeSection}` || (link.href === "#home" && activeSection === "home")
                    : location === link.href
                }
                onClick={closeMenu}
              />
            ))}
          </nav>
          
          {/* Theme Toggle Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="hidden md:flex"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in pb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={
                    link.href.includes("#") 
                      ? link.href === `#${activeSection}` || (link.href === "#home" && activeSection === "home")
                      : location === link.href
                  }
                  onClick={closeMenu}
                />
              ))}
              <Button 
                variant="ghost" 
                className="flex items-center justify-start px-3 py-2"
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-5 w-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-5 w-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
