import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import jobs from "./data/jobs.json";
import degrees from "./data/degrees.json";
import { Experience } from "./components/Experience";

function App() {
  return (
    <MainLayout>
      <Experience jobs={jobs} />
      <Education degrees={degrees} />
      <Skills />
      <Contact />
    </MainLayout>
  );
}

export default App;
