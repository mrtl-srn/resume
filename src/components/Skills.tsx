import { useWindowSize } from "../lib/hooks";
import ReactTag from "../ui/ReactTag";
import { CodeZone } from "../ui/CodeZone";

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type SkillsProps = {
  skillCategories: SkillCategory[];
};

export function Skills({ skillCategories }: SkillsProps) {
  const [width] = useWindowSize();

  function getColorForLevel(level: number): string {
    if (level >= 90) return "bg-green-500 dark:bg-green-600";
    if (level >= 80) return "bg-green-400 dark:bg-green-700";
    if (level >= 70) return "bg-green-300 dark:bg-green-800";
    if (level >= 60) return "bg-green-200 dark:bg-green-900";
    return "bg-gray-200 dark:bg-green-950";
  }

  function generateSquares(level: number) {
    const squares = [];

    const totalSquares = width < 1024 ? (width < 640 ? 20 : 25) : 50;

    const filledSquares = Math.floor((level / 100) * totalSquares);

    for (let i = 0; i < totalSquares; i += 1) {
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
  }

  return (
    <section>
      <ReactTag size="2xl" name="Skills" selfClosing />

      <CodeZone>
        <div className="space-y-4 sm:space-y-6">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold dark:text-white ">
                {category.name}
              </h3>
              <div className="space-y-1">
                {category.skills
                  .sort((a, b) => b.level - a.level)
                  .map((skill) => (
                    <div
                      key={skill.name}
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
    </section>
  );
}
