import IDECodeLine from "../ui/IDECodeLine";

export type DegreeDetails = {
  title: string;
  start: number;
  end?: number;
};

export type School = {
  name: string;
  location: string;
};

export type DegreeType = {
  school: School;
  title: string;
  start: number;
  end?: number;
};

export type DegreeProps = {
  degree: DegreeType;
};

export function Degree({ degree }: DegreeProps) {
  const { start, end, title } = degree;

  const properties: DegreeDetails = {
    title,
    start,
    end,
  };

  return (
    <IDECodeLine
      as="h2"
      tag="Degree"
      props={properties}
      className="max-md:stacked"
    >
      <IDECodeLine as="h3" tag="School" props={degree.school} selfClosing />
    </IDECodeLine>
  );
}
