import { ReactTagBlock } from "../ui/ReactTagBlock";
import ReactTag from "../ui/ReactTag";

export type JobDetails = {
  company: string;
  start: number;
  end?: number;
  isCurrentJob?: boolean;
};

export type JobType = {
  company: string;
  location: string;
  role: string;
  start: number;
  end?: number;
  description?: string;
  isCurrentJob?: boolean;
  responsibilities: string[];
  projects?: string[];
};

export type JobProps = {
  job: JobType;
};

export function Job({ job }: JobProps) {
  const {
    description,
    company,
    start,
    end,
    isCurrentJob,
    role,
    responsibilities,
    projects,
  } = job;

  const properties: JobDetails = {
    company,
    start,
    ...(isCurrentJob && { isCurrentJob: true }),
    ...(!isCurrentJob && { end }),
  };

  return (
    <ReactTagBlock
      as="h2"
      name="Job"
      properties={{ name: role, ...properties }}
    >
      {description && (
        <ReactTagBlock as="h3" name="Description">
          {description}
        </ReactTagBlock>
      )}

      {projects && (
        <ReactTagBlock as="h3" name="LastProjects">
          {projects?.map((project, idx) => (
            <ReactTag
              as="h4"
              selfClosing
              key={idx}
              name="Project"
              properties={{ description: project }}
            />
          ))}
        </ReactTagBlock>
      )}

      {responsibilities && (
        <ReactTagBlock as="h3" name="Roles">
          {responsibilities.map((resp, idx) => (
            <ReactTag
              as="h4"
              selfClosing
              key={idx}
              name="Role"
              properties={{ name: resp }}
            />
          ))}
        </ReactTagBlock>
      )}
    </ReactTagBlock>
  );
}
