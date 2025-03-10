import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import jobs from "./data/jobs.json";
import degrees from "./data/degrees.json";
import { Experience } from "./components/Experience";
import { CodeZone } from "./ui/CodeZone";

function App() {
  return (
    <MainLayout>
      <CodeZone showGradient>
        <Experience jobs={jobs} />
      </CodeZone>
      <CodeZone showGradient>
        <Education degrees={degrees} />
      </CodeZone>
      <CodeZone>
        <Skills />
      </CodeZone>
    </MainLayout>
  );
}

export default App;
