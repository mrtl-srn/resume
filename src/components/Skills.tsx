import React from 'react';
import { CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = ['JavaScript', 'TypeScript', 'React', 'TailwindCSS', 'Node.js', 'Git'];

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="mr-2 text-green-500" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
