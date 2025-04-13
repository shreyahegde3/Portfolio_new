import { useState } from "react";
import { projects, getProjectsByCategory } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mb-10"></div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "secondary"}
                onClick={() => setActiveCategory(category.value)}
                className={activeCategory === category.value ? "bg-primary" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="project-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Link href={`/project/${project.id}`}>
                        <a className="text-xl font-bold hover:text-primary transition-colors">
                          {project.title}
                        </a>
                      </Link>
                      <div className="flex gap-2">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                            aria-label="View code"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                            aria-label="View live site"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, techIndex) => {
                        // Determine badge color based on technology
                        let colorClass = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
                        if (tech.includes("Node") || tech.includes("Express") || tech.includes("Firebase")) {
                          colorClass = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
                        } else if (tech.includes("MongoDB") || tech.includes("Figma")) {
                          colorClass = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
                        } else if (tech.includes("Redux") || tech.includes("D3")) {
                          colorClass = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
                        } else if (tech.includes("Flutter") || tech.includes("Illustrator")) {
                          colorClass = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
                        }
                        
                        return (
                          <Badge 
                            key={techIndex} 
                            variant="outline"
                            className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}
                          >
                            {tech}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/yourusername"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
