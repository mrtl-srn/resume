import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Education from "./components/Education";
import Skills from "./components/Skills";

import jobs from "./data/jobs.json";
import degrees from "./data/degrees.json";
import projects from "./data/projects.json";
import { Experience } from "./components/Experience";
import ProjectCarousel from "./components/ProjectCarousel";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <MainLayout>
      <Experience jobs={jobs} />
      <Education degrees={degrees} />
      <ProjectCarousel projects={projects} />
      <Skills />
      <Hobbies />
    </MainLayout>
  );
}

export default App;
