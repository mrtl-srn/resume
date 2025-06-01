import MainLayout from "../layouts/MainLayout";

import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { Skills } from "../components/Skills";
import { Hobbies } from "../components/Hobbies";

import jobs from "../data/jobs.json";
import degrees from "../data/degrees.json";
import projects from "../data/projects.json";
import skills from "../data/skills.json";
import hobbies from "../data/hobbies.json";

export default function Resume() {
  return (
    <MainLayout>
      <Skills skillCategories={skills} />
      <Experience jobs={jobs} />
      <ProjectCarousel projects={projects} />
      <Education degrees={degrees} />
      <Hobbies hobbies={hobbies} />
    </MainLayout>
  );
}
