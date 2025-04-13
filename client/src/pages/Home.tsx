import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { scrollToElement } from "@/lib/utils";

export default function Home() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    if (location.includes("#")) {
      const sectionId = location.split("#")[1];
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    } else {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById("back-to-top");
      if (backToTopButton) {
        if (window.scrollY > 500) {
          backToTopButton.classList.remove("opacity-0", "invisible");
          backToTopButton.classList.add("opacity-100", "visible");
        } else {
          backToTopButton.classList.remove("opacity-100", "visible");
          backToTopButton.classList.add("opacity-0", "invisible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Back to Top Button */}
      <Button
        id="back-to-top"
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 bg-primary text-white w-12 h-12 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-blue-600 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </>
  );
}
