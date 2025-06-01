import * as LucideIcons from "lucide-react";
import ReactTag from "../ui/ReactTag";

export type Hobby = {
  name: string;
  icon: string;
};

export type HobbiesProps = {
  hobbies: Hobby[];
};

export function Hobbies({ hobbies }: HobbiesProps) {
  return (
    <section>
      <ReactTag size="2xl" name="Interests" selfClosing />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hobbies.map((hobby) => {
          const Icon = LucideIcons[
            hobby.icon as keyof typeof LucideIcons
          ] as React.FunctionComponent<any>;

          return (
            <li
              key={hobby.name}
              className="group/hobby flex items-center gap-4 p-4 dark:bg-slate-900 rounded-lg"
              aria-label={`Hobby: ${hobby.name}`}
            >
              <div className="text-blue-400 text-3xl flex-shrink-0 group-hover/hobby:text-pink-500 transition-colors">
                {Icon ? <Icon /> : <LucideIcons.GitBranchIcon />}
              </div>

              <span className="text-lg font-medium text-neutral-100 capitalize">
                {hobby.name}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
