import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-10"></div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Hello! I'm a passionate web developer with a background in computer science. 
                My journey  started at PES  university where I discovered my passion for development, ai...
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Since then, I've worked on a variety of projects, ranging from small business websites to complex web applications.
                I enjoy the challenge of solving problems and creating intuitive user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities to recharge my creativity.
              </p>
              
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View my resume</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" 
                  alt="Profile picture" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
