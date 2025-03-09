import { ReactTagBlock } from "../ui/ReactTagBlock";
import { Job, JobType } from "./Job";

export type ExperiencesProps = {
  jobs: JobType[];
};

export function Experience({ jobs }: ExperiencesProps) {
  return (
    <ReactTagBlock as="h1" name="Experience">
      {jobs.map((job, index) => {
        return <Job key={index} job={job} />;
      })}
    </ReactTagBlock>
  );
}
