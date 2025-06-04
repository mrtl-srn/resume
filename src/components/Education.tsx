import { Degree, DegreeType } from "./Degree";
import { CodeZone } from "../ui/CodeZone";
import IDECodeLine from "../ui/IDECodeLine";

export type EducationProps = {
  degrees: DegreeType[];
};

export function Education({ degrees }: EducationProps) {
  return (
    <section>
      <IDECodeLine size="2xl" tag="Education" selfClosing />

      <CodeZone showGradient>
        <IDECodeLine as="h1" tag="Degrees" indentSize={2}>
          {degrees.map((degree, index) => (
            <Degree key={index} degree={degree} />
          ))}
        </IDECodeLine>
      </CodeZone>
    </section>
  );
}
