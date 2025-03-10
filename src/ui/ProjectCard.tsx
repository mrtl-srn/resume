export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project bg-white shadow-md rounded-lg overflow-hidden h-full bg-gradient-to-tl from-slate-800 to-slate-900">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-200 mb-4">{project.description}</p>
        <a
          href={project.link}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
