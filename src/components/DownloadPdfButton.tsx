import { useState } from "react";
import { PdfPreview } from "./PdfPreview";
import skills from "../data/skills.json";
import jobs from "../data/jobs.json";
import degrees from "../data/degrees.json";
import hobbies from "../data/hobbies.json";
import projects from "../data/projects.json";
import profile from "../data/profile.json";
import { Eye } from "lucide-react";

export function DownloadPdfButton() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => setIsPreviewOpen(true)}
      >
        <Eye className="w-4 h-4" />
        Prévisualiser CV (PDF)
      </button>

      <PdfPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        skills={skills}
        jobs={jobs}
        degrees={degrees}
        hobbies={hobbies}
        projects={projects}
        profile={profile}
      />
    </>
  );
}
