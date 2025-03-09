import { ReactTagBlock } from "../ui/ReactTagBlock";
import { ReactCommentBlock } from "../ui/ReactCommentBlock";
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
  isCurrentJob?: boolean;
  responsibilities: string[];
  projects?: string[];
};

export type JobProps = {
  job: JobType;
};

export function Job({ job }: JobProps) {
  const { company, start, end, isCurrentJob, role, responsibilities } = job;

  const properties: JobDetails = {
    company,
    start,
    ...(isCurrentJob && { isCurrentJob: true }),
    ...(!isCurrentJob && { end }),
  };

  return (
    <ReactTagBlock as="h2" name="Job" properties={properties}>
      <ReactTagBlock as="h3" name="Role" properties={{ name: role }}>
        {responsibilities.map((resp, idx) => (
          <ReactTag
            as="h4"
            selfClosing
            key={idx}
            name="Action"
            properties={{ name: resp }}
          />
        ))}
      </ReactTagBlock>

      {/* <ReactCommentBlock>
        {responsibilities.map((resp, idx) => (
          <div key={idx} className="flex flex-row items-start gap-2">
            <span className="text-blue-500 dark:text-pink-100 text-left">
              {resp}
            </span>
          </div>
        ))}
      </ReactCommentBlock> */}
    </ReactTagBlock>
  );
}
