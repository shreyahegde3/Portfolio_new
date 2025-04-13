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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with shopping cart, user authentication, and payment integration.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform.vercel.app",
    detailDescription: "An end-to-end e-commerce solution with advanced features like real-time inventory management, secure payment processing, and a responsive admin dashboard. This platform provides a seamless shopping experience across all devices.",
    features: [
      "User authentication and authorization",
      "Product catalog with categories and filters",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management"
    ]
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker App",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness goals.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux"],
    githubLink: "https://github.com/yourusername/fitness-tracker",
    liveLink: "https://fitness-tracker.vercel.app",
    detailDescription: "This fitness application helps users track their workout progress, set goals, and monitor nutrition intake. It features customizable workout plans and integrates with health devices for comprehensive fitness tracking.",
    features: [
      "Personalized workout plans",
      "Nutrition tracking and meal planning",
      "Progress visualization with charts",
      "Goal setting and achievement tracking",
      "Integration with health devices",
      "Social sharing capabilities"
    ]
  },
  {
    id: "restaurant-branding",
    title: "Restaurant Branding",
    description: "Complete branding and UI/UX design for a high-end restaurant, including website and mobile app.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "design",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    liveLink: "https://restaurant-branding.vercel.app",
    detailDescription: "A comprehensive branding project for a luxury restaurant chain, including logo design, brand guidelines, website design, and mobile application interface. The design emphasizes elegance, sophistication, and user experience.",
    features: [
      "Logo and brand identity design",
      "Website design with online reservation system",
      "Mobile app design for ordering and rewards",
      "Menu design and photography direction",
      "Social media assets and marketing materials",
      "Brand guidelines documentation"
    ]
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "A data visualization dashboard for business analytics with real-time updates and customizable reports.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "web",
    technologies: ["Vue.js", "D3.js", "Express"],
    githubLink: "https://github.com/yourusername/analytics-dashboard",
    liveLink: "https://analytics-dashboard.vercel.app",
    detailDescription: "An advanced analytics platform that transforms complex data into actionable insights through interactive visualizations. This dashboard provides real-time monitoring of key business metrics with customizable reports and alerts.",
    features: [
      "Real-time data visualization",
      "Customizable dashboard layouts",
      "Export and sharing capabilities",
      "Automated reporting",
      "Data source integration",
      "User role management"
    ]
  },
  {
    id: "travel-companion",
    title: "Travel Companion",
    description: "A travel planning app with itinerary management, location recommendations, and offline maps.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "mobile",
    technologies: ["Flutter", "Google Maps API", "Firebase"],
    githubLink: "https://github.com/yourusername/travel-companion",
    liveLink: "https://travel-companion.vercel.app",
    detailDescription: "A comprehensive travel companion application that helps users plan trips, discover attractions, and navigate new locations with ease. Features include itinerary management, offline maps, and personalized recommendations.",
    features: [
      "Trip planning and itinerary management",
      "Location-based recommendations",
      "Offline maps and navigation",
      "Travel journal and photo management",
      "Budget tracking",
      "Language translation assistance"
    ]
  },
  {
    id: "banking-app-redesign",
    title: "Banking App Redesign",
    description: "A comprehensive UI/UX redesign of a banking application to improve user experience and accessibility.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "design",
    technologies: ["Figma", "Prototyping", "User Testing"],
    liveLink: "https://banking-app-redesign.vercel.app",
    detailDescription: "A complete redesign of a banking application focusing on usability, accessibility, and security. The project included extensive user research, iterative design, and usability testing to create an intuitive and secure banking experience.",
    features: [
      "Simplified navigation and user flow",
      "Enhanced security features",
      "Accessibility improvements",
      "Personalized financial insights",
      "Bill payment and transfer enhancements",
      "Comprehensive design system"
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
