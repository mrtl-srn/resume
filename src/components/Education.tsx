import { Degree, DegreeType } from "./Degree";
import { ReactTagBlock } from "../ui/ReactTagBlock";
import ReactTag from "../ui/ReactTag";
import { CodeZone } from "../ui/CodeZone";

export type EducationProps = {
  degrees: DegreeType[];
};

export function Education({ degrees }: EducationProps) {
  return (
    <section>
      <ReactTag size="2xl" name="Education" selfClosing />

      <CodeZone showGradient>
        <ReactTagBlock as="h1" name="Degrees">
          {degrees.map((degree, index) => (
            <Degree key={index} degree={degree} />
          ))}
        </ReactTagBlock>
      </CodeZone>
    </section>
  );
}
