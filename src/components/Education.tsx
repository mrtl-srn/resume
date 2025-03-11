import { Degree, DegreeType } from "./Degree";
import { ReactTagBlock } from "../ui/ReactTagBlock";
import ReactTag from "../ui/ReactTag";
import { CodeZone } from "../ui/CodeZone";

export type EducationProps = {
  degrees: DegreeType[];
};

export function Education({ degrees }: EducationProps) {
  return (
    <div className="relative">
      <ReactTag size="2xl" name="Education" selfClosing />

      <CodeZone showGradient>
        <ReactTagBlock as="h1" name="Degrees">
          {degrees.map((degree, index) => {
            return <Degree key={index} degree={degree} />;
          })}
        </ReactTagBlock>
      </CodeZone>
    </div>
  );
}

export default Education;
