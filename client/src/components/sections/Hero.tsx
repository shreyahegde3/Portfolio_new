import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Name.
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-md"
              onClick={() => scrollToElement("projects")}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-blue-50 dark:hover:bg-blue-900"
              onClick={() => scrollToElement("contact")}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
