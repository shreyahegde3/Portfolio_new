import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { ArrowUp, Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { scrollToElement } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const [location] = useLocation();
  const { toggleTheme, theme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation links
  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  // Social links
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, url: "mailto:your.email@example.com", label: "Email" },
    { icon: <FileText className="h-5 w-5" />, url: "/resume.pdf", label: "Resume" }
  ];

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    if (location.includes("#")) {
      const sectionId = location.split("#")[1];
      setActiveSection(sectionId);
      
      if (window.innerWidth < 768) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [location]);

  // Handle scroll for mobile devices
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const sections = ["about", "skills", "projects", "contact"];
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && window.scrollY >= section.offsetTop - 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    if (window.innerWidth < 768) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-black z-50 px-4 py-3 flex justify-between items-center border-b border-gray-800">
        <Link href="/">
          <a className="text-xl font-bold text-primary">Alex Walker</a>
        </Link>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-black z-40 py-4 border-b border-gray-800 animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 border-l-2 pl-3 transition-colors ${
                  activeSection === link.id 
                    ? "border-primary text-primary font-medium" 
                    : "border-transparent hover:text-gray-300"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              variant="ghost" 
              className="justify-start pl-4" 
              onClick={toggleTheme}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </nav>
        </div>
      )}

      {/* Left Sidebar - Profile */}
      <aside className="hidden md:flex md:w-1/3 lg:w-1/4 flex-col bg-black border-r border-gray-800 p-8 h-screen sticky top-0 overflow-y-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-6 border-2 border-gray-800">
            <img 
              src="https://placehold.co/400x400/282828/a885d8/png?text=AW&font=montserrat" 
              alt="Alex Walker" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-1">Alex Walker</h1>
          <p className="text-gray-400 mb-4">Digital Designer & Illustrator</p>
          
          <div className="flex space-x-3 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <Button className="w-full mb-6">Let's Talk</Button>
        </div>
        
        <div className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Navigation</h2>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 border-l-2 pl-3 transition-colors ${
                  activeSection === link.id 
                    ? "border-primary text-primary font-medium" 
                    : "border-transparent hover:text-gray-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto">
          <p className="text-sm text-gray-500 mb-3">Based in San Francisco, CA</p>
          <p className="text-sm text-gray-500">© 2025 Alex Walker. All rights reserved.</p>
        </div>
      </aside>
      
      {/* Right Content Area */}
      <main className="flex-1 md:h-screen md:overflow-y-auto pb-20 md:pb-0 mt-14 md:mt-0">
        <div className="p-4 sm:p-8 md:p-10 lg:p-16 max-w-4xl">
          {/* About Section */}
          <section id="about" className="mb-20">
            <div className="mb-8">
              <span className="text-primary text-sm font-medium mb-2 block">Hello there</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                I'm Alex Walker
                <br />
                <span className="text-primary">Digital designer</span> and illustrator.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                A passionate digital designer with over 5 years of experience creating engaging and intuitive user interfaces. I specialize in crafting beautiful, functional designs that solve real problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Download CV</Button>
                <Button size="lg" variant="outline">
                  My Projects
                </Button>
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold mb-2">My Skills</h2>
            <div className="w-20 h-1 bg-primary mb-10"></div>
            <Skills />
          </section>
          
          {/* Projects Section */}
          <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-primary mb-10"></div>
            <Projects />
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mb-10"></div>
            <Contact />
          </section>
        </div>
      </main>
      
      {/* Back to Top Button - Mobile only */}
      <Button
        id="back-to-top"
        variant="default"
        size="icon"
        className="md:hidden fixed bottom-6 right-6 bg-primary text-white w-12 h-12 rounded-full shadow-lg z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
