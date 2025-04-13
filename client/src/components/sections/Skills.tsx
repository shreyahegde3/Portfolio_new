import { skills } from "@/data/skillsData";
import { 
  SiReact, SiJavascript, SiNodedotjs, SiHtml5, 
  SiCss3, SiGit, SiMongodb
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function Skills() {
  // Map skill names to icons
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "react": return <SiReact className="text-3xl text-primary mr-3" />;
      case "js": return <SiJavascript className="text-3xl text-primary mr-3" />;
      case "node-js": return <SiNodedotjs className="text-3xl text-primary mr-3" />;
      case "html5": return <SiHtml5 className="text-3xl text-primary mr-3" />;
      case "css3-alt": return <SiCss3 className="text-3xl text-primary mr-3" />;
      case "git-alt": return <SiGit className="text-3xl text-primary mr-3" />;
      case "database": return <SiMongodb className="text-3xl text-primary mr-3" />;
      case "aws": return <FaAws className="text-3xl text-primary mr-3" />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div 
          key={index}
          className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700 transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            {getSkillIcon(skill.icon)}
            <h3 className="font-medium text-white">{skill.name}</h3>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary" 
              style={{ width: `${skill.proficiency}%` }}
            ></div>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-xs text-gray-500">Beginner</span>
            <span className="text-xs text-gray-500">Advanced</span>
          </div>
        </div>
      ))}
    </div>
  );
}
