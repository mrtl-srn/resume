// filepath: /react-skills-chart/react-skills-chart/src/utils/chartHelpers.ts

export const calculateSkillPercentage = (level: number): number => {
  return Math.min(Math.max(level, 0), 100);
};

export const prepareChartData = (skills: { name: string; level: number }[]) => {
  return skills.map(skill => ({
    label: skill.name,
    value: calculateSkillPercentage(skill.level),
  }));
};