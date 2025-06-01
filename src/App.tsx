import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HtmlResume from "./pages/HtmlResume";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter basename="/resume">
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="html" element={<HtmlResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
