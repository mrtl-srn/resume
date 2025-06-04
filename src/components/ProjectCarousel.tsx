import ProjectCard, { Project } from "../ui/ProjectCard";
import { useSwipe } from "../lib/hooks";
import IDECodeLine from "../ui/IDECodeLine";

export type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const containerRef = useSwipe();

  return (
    <section>
      <IDECodeLine size="2xl" tag="Projects" selfClosing />

      <div className="carousel relative w-full">
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
    </section>
  );
}
