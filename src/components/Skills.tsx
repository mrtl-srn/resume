import ReactTag from "../ui/ReactTag";
import { CodeZone } from "../ui/CodeZone";
import { SkillBadge } from "../ui/SkillBadege";

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
      <ReactTag size="2xl" name="Skills" selfClosing />

      <CodeZone>
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.label} className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold dark:text-white">
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
