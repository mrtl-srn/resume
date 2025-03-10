import React from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
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
    if (level >= 90) return "bg-green-500 dark:bg-green-600";
    if (level >= 80) return "bg-green-400 dark:bg-green-500";
    if (level >= 70) return "bg-green-300 dark:bg-green-400";
    if (level >= 60) return "bg-green-200 dark:bg-green-300";
    return "bg-gray-200 dark:bg-gray-600";
  };

  const generateSquares = (level: number) => {
    const squares = [];
    const totalSquares = 50; // Number of squares per skill
    const filledSquares = Math.floor((level / 100) * totalSquares);

    for (let i = 0; i < totalSquares; i++) {
      squares.push(
        <div
          key={i}
          className={`w-3 h-3 rounded-xs ${
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
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-2">
            <h3 className="text-lg font-semibold dark:text-white">
              {category.name}
            </h3>
            <div className="space-y-1">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-x-4 gap-y-1"
                >
                  <span className="font-normal w-24 dark:text-white">
                    {skill.name}
                  </span>
                  <div className="flex-grow grid grid-flow-col gap-1">
                    {generateSquares(skill.level)}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
