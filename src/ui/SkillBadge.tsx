export type SkillBadgeProps = {
  skillName: string;
};

export function SkillBadge({ skillName }: SkillBadgeProps) {
  return (
    <span className="inline-block rounded  px-3 py-1 text-sm font-medium text-gray-100 bg-skill-badge">
      {skillName}
    </span>
  );
}
