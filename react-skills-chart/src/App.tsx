// filepath: /react-skills-chart/react-skills-chart/src/App.tsx
import React from 'react';
import SkillsChart from './components/SkillsChart';
import { Skill } from './types';

const App: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "TailwindCSS", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Git", level: 85 },
  ];

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Skills Chart</h1>
      <SkillsChart skills={skills} />
    </div>
  );
};

export default App;