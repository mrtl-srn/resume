import { CodeZone } from "../ui/CodeZone";
import ReactTag from "../ui/ReactTag";
import { ReactTagBlock } from "../ui/ReactTagBlock";
import { Job, JobType } from "./Job";

export type ExperiencesProps = {
  jobs: JobType[];
};

export function Experience({ jobs }: ExperiencesProps) {
  return (
    <section>
      <ReactTag size="2xl" name="Experience" selfClosing />

      <CodeZone showGradient>
        <ReactTagBlock as="h1" name="Jobs">
          {jobs.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
        </ReactTagBlock>
      </CodeZone>
    </section>
  );
}
