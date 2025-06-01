export type SkillBadgeProps = {
  skillName: string;
};

export function SkillBadge({ skillName }: SkillBadgeProps) {
  return (
    <span
      className="inline-block rounded  px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-100"
      style={{
        background:
          "linear-gradient(135deg, rgba(246, 51, 154, 0.4), rgba(81, 162, 255, 0.4))",
      }}
    >
      {skillName}
    </span>
  );
}
