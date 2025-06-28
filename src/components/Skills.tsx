import { CodeZone } from "../ui/CodeZone";
import { SkillBadge } from "../ui/SkillBadge";
import IDECodeLine from "../ui/IDECodeLine";

export type Skill = string;

export type SkillCategory = {
  label: string;
  skills: Skill[];
};

export type SkillsProps = {
  skillCategories: SkillCategory[];
};

export function Skills({ skillCategories }: SkillsProps) {
  return (
    <section>
      <IDECodeLine size="2xl" tag="Skills" selfClosing className="mb-4" />

      <CodeZone>
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.label} className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} skillName={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CodeZone>
    </section>
  );
}
