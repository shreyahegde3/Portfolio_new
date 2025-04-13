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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mb-10"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {getSkillIcon(skill.icon)}
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
