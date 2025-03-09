import { ReactTagBlock } from "../ui/ReactTagBlock";

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

  return <ReactTagBlock as="h3" name="Degree" properties={properties} />;
}
