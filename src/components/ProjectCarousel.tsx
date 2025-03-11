import ProjectCard, { Project } from "../ui/ProjectCard";
import ReactTag from "../ui/ReactTag";
import { useSwipe } from "../lib/hooks";

export type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const containerRef = useSwipe();

  return (
    <div className="carousel relative w-full">
      <ReactTag size="2xl" name="Projects" selfClosing />
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          overflow: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {projects.map((project, index) => (
          <div key={index} className="w-5/12 flex-none">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
