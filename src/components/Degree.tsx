import ReactTitle from "../ui/ReactTag";
import ReactComment from "../ui/ReactComment";
import { ReactTagBlock } from "../ui/ReactTagBlock";
import { ReactCommentBlock } from "../ui/ReactCommentBlock";

export type DegreeDetails = {
  title: string;
  start: number;
  end?: number;
};

export type DegreeType = {
  school: string;
  location: string;
  title: string;
  start: number;
  end?: number;
};

export type DegreeProps = {
  degree: DegreeType;
};

export function Degree({ degree }: DegreeProps) {
  const { school, start, end, location, title } = degree;

  const properties: DegreeDetails = {
    title,
    start,
    end,
  };

  return (
    <ReactTagBlock as="h2" name="Degree" properties={properties}>
      <ReactTagBlock
        as="h3"
        name="School"
        properties={{ name: school, location }}
      />
    </ReactTagBlock>

    // <section className="relative">
    //   <ReactTitle as="h2" sticky name="Degree" properties={head} />

    //   <div className="space-y-12 border-l border-pink-200 dark:border-slate-700 pl-6">
    //     <div className="flex flex-col sm:items-start  text-gray-600 mb-4 ">
    //       <ReactComment start />

    //       <ReactComment className="contents">
    //         <span className="text-pink-500">@title</span>
    //         <span className="font-medium text-green-500">{title}</span>
    //       </ReactComment>

    //       <ReactComment />

    //       <ReactComment className="contents">
    //         <span className=" text-blue-500 text-left">{location}</span>
    //       </ReactComment>

    //       <ReactComment />

    //       <ReactComment end />
    //     </div>
    //   </div>

    //   <ReactTitle as="h2" name="Degree" closeTag />
    // </section>
  );
}
