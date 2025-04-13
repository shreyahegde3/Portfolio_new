import { useState } from "react";
import { projects, getProjectsByCategory } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Project category filter buttons
const categories = [
  { value: "all", label: "All" },
  { value: "web", label: "Web Apps" },
  { value: "mobile", label: "Mobile" },
  { value: "design", label: "UI/UX Design" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div>
      {/* Project Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={activeCategory === category.value ? "default" : "outline"}
            onClick={() => setActiveCategory(category.value)}
            className={`${
              activeCategory === category.value 
                ? "bg-primary hover:bg-primary/90" 
                : "border-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {category.label}
          </Button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-56 md:h-auto relative overflow-hidden">
                <img 
                  src={project.image || "https://placehold.co/400x400/282828/a885d8/png?text=Project&font=montserrat"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="w-full md:w-3/5 p-6 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Link href={`/project/${project.id}`}>
                    <a className="text-xl font-bold text-white hover:text-primary transition-colors">
                      {project.title}
                    </a>
                  </Link>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        aria-label="View code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-none"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge className="bg-gray-800 text-gray-400">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                
                <Link href={`/project/${project.id}`}>
                  <a className="text-primary hover:text-primary/80 inline-flex items-center mt-auto text-sm font-medium">
                    View project details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <a 
          href="https://github.com/yourusername"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-gray-800 text-white hover:bg-gray-800 rounded-xl transition-colors"
        >
          <Github className="mr-2 h-5 w-5" />
          <span>View More on GitHub</span>
        </a>
      </div>
    </div>
  );
}
