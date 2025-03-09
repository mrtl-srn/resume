import { Degree, DegreeType } from "./Degree";
import { ReactTagBlock } from "../ui/ReactTagBlock";

export type EducationProps = {
  degrees: DegreeType[];
};

export function Education({ degrees }: EducationProps) {
  return (
    <ReactTagBlock as="h1" name="Education">
      {degrees.map((degree, index) => {
        return <Degree key={index} degree={degree} />;
      })}
    </ReactTagBlock>
  );
}

export default Education;
