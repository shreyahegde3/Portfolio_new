import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { getProjectById } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Calendar, User } from "lucide-react";
import NotFound from "./not-found";
import { useTheme } from "@/context/ThemeContext";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = projectId ? getProjectById(projectId) : undefined;
  const { theme } = useTheme();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Apply black background to the entire app
    document.body.style.backgroundColor = "#000000";
    
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-40 px-6 py-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-xl font-bold text-primary">Shreya Hegde</a>
          </Link>
          <Link href="/#projects">
            <a className="inline-flex items-center text-white hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Projects</span>
            </a>
          </Link>
        </div>
      </header>
      
      <main className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Project Hero */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 mb-10">
            <div className="relative h-72 sm:h-96 md:h-[500px] overflow-hidden">
              <img 
                src={project.image || "https://placehold.co/1200x600/282828/70c1e7/png?text=Project+Image&font=montserrat"} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{project.title}</h1>
                <p className="text-lg text-gray-300 max-w-3xl mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index}
                      className="bg-black/50 backdrop-blur-sm border-gray-700 text-white hover:bg-black/70"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>April 2025</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <User className="h-4 w-4 mr-2" />
                    <span>Solo Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300">{project.detailDescription || project.description}</p>
                </div>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
                <ul className="space-y-4">
                  {(project.features || ["Responsive Design", "Modern UI/UX", "Optimized Performance"]).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-white">Project Links</h3>
                <div className="space-y-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-black rounded-lg border border-gray-800 hover:border-primary transition-colors"
                    >
                      <Github className="mr-3 h-5 w-5 text-primary" />
                      <span>View Source Code</span>
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-black rounded-lg border border-gray-800 hover:border-primary transition-colors"
                    >
                      <ExternalLink className="mr-3 h-5 w-5 text-primary" />
                      <span>View Live Demo</span>
                    </a>
                  )}
                  
                  <Button
                    onClick={() => window.history.back()}
                    className="w-full mt-4"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">© 2025 Alex Walker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
