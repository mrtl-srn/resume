import { Degree, DegreeType } from "./Degree";
import { ReactTagBlock } from "../ui/ReactTagBlock";
import { groupBy } from "../lib/utils";

export type EducationProps = {
  degrees: DegreeType[];
};

export function Education({ degrees }: EducationProps) {
  const bySchool = groupBy(degrees, (degree) => degree.school.name);

  return (
    <ReactTagBlock as="h1" name="Education">
      {Object.entries(bySchool).map(([, degrees], index) => {
        const { location, name } = degrees[0].school;

        return (
          <ReactTagBlock
            as="h2"
            key={index}
            name="School"
            properties={{ name, location }}
          >
            {degrees.map((degree, index) => {
              return <Degree key={index} degree={degree} />;
            })}
          </ReactTagBlock>
        );
      })}
    </ReactTagBlock>
  );
}

export default Education;
