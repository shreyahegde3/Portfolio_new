export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "design";
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  detailDescription?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "YouTube video summarizer",
    description: "Enhanced RAG & Agent Q&A System",
    image: "/images/rag.png",
    category: "web",
    technologies: ["Python", "gradio","pinecode"],
    githubLink: "https://github.com/shreyahegde3/YouTube-video-summarizer",
    liveLink: "https://huggingface.co/spaces/ShreyaMHegde/AIPoweredChatBot",
    detailDescription: "An advanced question-answering system that combines Retrieval-Augmented Generation (RAG) and Agent-based reasoning with YouTube video integration for comprehensive educational responses.",
    features: [
      "Dual Operational Modes:RAG Mode,Agent Mode",
      "Multiple Prompting Techniques",
      "Dynamic Knowledge Base",
      "Smart Video Integration"

    ]
  },
  {
    id: "fitness-tracker",
    title: "BD_project_EmoStream",
    description: "EmoStream: Concurrent Emoji Broadcast over Event-Driven Architecture",
    image: "/images/BD.png",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux"],
    githubLink: "https://github.com/shreyahegde3/BD_project_EmoStream",
    liveLink: "https://fitness-tracker.vercel.app",
    detailDescription: "creating a horizontally scalable architecture using frameworks such as Kafka for data streaming and Spark for real-time data processing. The system will enable high concurrency and low latency, ensuring user interactions are seamless.",
    features: [
      "Personalized workout plans",
      "Nutrition tracking and meal planning",
      "Progress visualization with charts",
      "Goal setting and achievement tracking",
      "Integration with health devices",
      "Social sharing capabilities"
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") {
    return projects;
  }
  return projects.filter(project => project.category === category);
}
