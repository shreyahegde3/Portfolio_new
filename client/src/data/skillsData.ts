export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 0-100
  category: "frontend" | "backend" | "design" | "other";
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    proficiency: 90,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "js",
    proficiency: 95,
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: "node-js",
    proficiency: 85,
    category: "backend",
  },
  {
    name: "HTML5",
    icon: "html5",
    proficiency: 100,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: "css3-alt",
    proficiency: 90,
    category: "frontend",
  },
  {
    name: "Git",
    icon: "git-alt",
    proficiency: 85,
    category: "other",
  },
  {
    name: "MongoDB",
    icon: "database",
    proficiency: 80,
    category: "backend",
  },
  {
    name: "AWS",
    icon: "aws",
    proficiency: 75,
    category: "backend",
  }
];
