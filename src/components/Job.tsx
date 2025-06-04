import IDECodeLine from "../ui/IDECodeLine";

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
    <IDECodeLine
      as="h2"
      tag="Job"
      props={{ name: role, ...properties }}
      className="max-lg:stacked"
    >
      {description && (
        <IDECodeLine as="h3" tag="Description">
          {description}
        </IDECodeLine>
      )}

      {projects && (
        <IDECodeLine as="h3" tag="LastProjects">
          {projects?.map((project, idx) => (
            <IDECodeLine
              as="h4"
              selfClosing
              key={idx}
              tag="Project"
              props={{ description: project }}
            />
          ))}
        </IDECodeLine>
      )}

      {responsibilities && (
        <IDECodeLine as="h3" tag="Roles">
          {responsibilities.map((resp, idx) => (
            <IDECodeLine
              as="h4"
              selfClosing
              key={idx}
              tag="Role"
              props={{ name: resp }}
            />
          ))}
        </IDECodeLine>
      )}
    </IDECodeLine>
  );
}
