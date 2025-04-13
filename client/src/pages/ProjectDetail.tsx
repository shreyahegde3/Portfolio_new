import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { getProjectById } from "@/data/projectsData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import NotFound from "./not-found";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = projectId ? getProjectById(projectId) : undefined;

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/#projects">
              <a className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Back to Projects</span>
              </a>
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => {
                // Determine badge color based on technology (same logic as in Projects.tsx)
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
                    key={index} 
                    variant="outline"
                    className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}
                  >
                    {tech}
                  </Badge>
                );
              })}
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
              <h2>Project Overview</h2>
              <p>{project.detailDescription}</p>
              
              <h2>Key Features</h2>
              <ul>
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.githubLink && (
                <Button
                  as="a"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Source Code
                </Button>
              )}
              
              {project.liveLink && (
                <Button
                  variant="outline"
                  as="a"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-primary text-primary hover:bg-blue-50 dark:hover:bg-blue-900"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
