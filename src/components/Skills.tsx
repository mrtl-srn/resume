import React from "react";
import { useWindowSize } from "../lib/hooks";
import ReactTag from "../ui/ReactTag";
import { CodeZone } from "../ui/CodeZone";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [width] = useWindowSize();

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "PHP", level: 70 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
      ],
    },
    {
      name: "Frameworks",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Laravel", level: 70 },
        { name: "TailwindCSS", level: 85 },
      ],
    },
    {
      name: "API",
      skills: [
        { name: "REST", level: 95 },
        { name: "GraphQL", level: 70 },
        { name: "OpenAPI", level: 85 },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MariaDB", level: 90 },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Linux", level: 80 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "K8S", level: 70 },
        { name: "CI/CD", level: 70 },
        { name: "Jest", level: 75 },
      ],
    },
  ];

  const getColorForLevel = (level: number): string => {
    if (level >= 90) return "bg-green-500 dark:bg-blue-600";
    if (level >= 80) return "bg-green-400 dark:bg-blue-700";
    if (level >= 70) return "bg-green-300 dark:bg-blue-800";
    if (level >= 60) return "bg-green-200 dark:bg-blue-900";
    return "bg-gray-200 dark:bg-gray-600";
  };

  const generateSquares = (level: number) => {
    const squares = [];

    const totalSquares = width < 1024 ? (width < 640 ? 20 : 25) : 50;

    const filledSquares = Math.floor((level / 100) * totalSquares);

    for (let i = 0; i < totalSquares; i++) {
      squares.push(
        <div
          key={i}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-xs ${
            i < filledSquares
              ? getColorForLevel(level)
              : "bg-gray-100 dark:bg-gray-700"
          }`}
        />
      );
    }
    return squares;
  };

  return (
    <div className="my-4">
      <ReactTag size="2xl" name="Skills" selfClosing />

      <CodeZone>
        <div className="space-y-4 sm:space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold dark:text-white ">
                {category.name}
              </h3>
              <div className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-x-2 sm:gap-x-4 gap-y-1"
                  >
                    <span className="font-normal min-w-20 sm:w-24 text-sm sm:text-base dark:text-white">
                      {skill.name}
                    </span>
                    <div className="flex-grow grid grid-flow-col gap-[2px] sm:gap-1">
                      {generateSquares(skill.level)}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 w-8 sm:w-12 text-right">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CodeZone>
    </div>
  );
};

export default Skills;
