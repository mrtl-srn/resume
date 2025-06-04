import { CodeZone } from "../ui/CodeZone";
import IDECodeLine from "../ui/IDECodeLine";
import { Job, JobType } from "./Job";

export type ExperiencesProps = {
  jobs: JobType[];
};

export function Experience({ jobs }: ExperiencesProps) {
  return (
    <section>
      <IDECodeLine size="2xl" tag="Experience" selfClosing />

      <CodeZone showGradient>
        <IDECodeLine as="h1" tag="Jobs" indentSize={2}>
          {jobs.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
        </IDECodeLine>
      </CodeZone>
    </section>
  );
}
