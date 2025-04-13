import { SiReact, SiJavascript, SiPython, SiNodedotjs, SiCplusplus, SiCss3, SiMysql } from "react-icons/si";
import { FaJava, FaDatabase, FaBrain, FaServer } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <SiPython className="h-8 w-8" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-8 w-8 text-yellow-400" /> },
    { name: "C/C++", icon: <SiCplusplus className="h-8 w-8" /> },
    { name: "MySQL", icon: <SiMysql className="h-8 w-8" /> },
    { name: "AI/ML", icon: <FaBrain className="h-8 w-8" /> },
    { name: "CSS", icon: <SiCss3 className="h-8 w-8 text-blue-500" /> },
    { name: "React", icon: <SiReact className="h-8 w-8 text-blue-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="h-8 w-8 text-green-500" /> },
    { name: "MERN Stack", icon: <FaServer className="h-8 w-8" /> },
    { name: "RAG", icon: <code className="h-8 w-8 text-xl">&lt;/&gt;</code> },
    { name: "Model Development", icon: <code className="h-8 w-8 text-xl">&lt;/&gt;</code> }
  ];
  
  // Add Education section data
  const education = [
    {
      institution: "PES University, Bengaluru",
      degree: "Bachelor of Technology in Computer Science",
      score: "CGPA: 8.47",
      period: "2022 - 2026"
    },
    {
      institution: "BASE Shahakar Nagar",
      degree: "2nd PUC",
      score: "94.5%, State Rank 18",
      period: "2020 - 2022"
    },
    {
      institution: "Kensri School, Bengaluru",
      degree: "CBSE",
      score: "92%",
      period: "2010 - 2020"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Education Section */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
        <h3 className="text-2xl font-bold mb-6">Education</h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-primary">
              <h4 className="text-lg font-medium text-white">{edu.institution}</h4>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-primary font-medium">{edu.score}</p>
              <p className="text-sm text-gray-500">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Skills Grid */}
      <div>
        <h3 className="text-2xl font-bold mb-6 md:hidden">My Skills</h3>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-primary transition-colors"
            >
              <div className="mb-2 text-primary">
                {skill.icon}
              </div>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}