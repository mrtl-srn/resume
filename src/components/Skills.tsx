import React from "react";

interface Skill {
  name: string;
  level: number; // 0 to 100
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "TailwindCSS", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Git", level: 85 },
  ];

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
