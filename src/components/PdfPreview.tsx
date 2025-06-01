import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { PdfResume } from "./PdfResume";
import { X } from "lucide-react";
import { SkillCategory } from "./Skills";
import { JobType } from "./Job";
import { DegreeType } from "./Degree";
import { Hobby } from "./Hobbies";
import { Project } from "../ui/ProjectCard";
import { Profile } from "./Header";
import HtmlResume from "../pages/HtmlResume";

export type PdfPreviewProps = {
  isOpen: boolean;
  onClose: () => void;
  skills: SkillCategory[];
  jobs: JobType[];
  degrees: DegreeType[];
  hobbies: Hobby[];
  projects: Project[];
  profile: Profile;
};

export function PdfPreview({
  isOpen,
  onClose,
  skills,
  jobs,
  degrees,
  hobbies,
  projects,
  profile,
}: PdfPreviewProps) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-neutral-900 rounded-lg p-4 w-[95vw] h-[95vh] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="h-[calc(100%-40px)]">
          <PDFViewer
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "0.5rem",
            }}
          >
            <HtmlResume
            // skills={skills}
            // jobs={jobs}
            // degrees={degrees}
            // hobbies={hobbies}
            // projects={projects}
            // profile={profile}
            />
          </PDFViewer>
        </div>

        <div className="mt-4 flex justify-end">
          <PDFDownloadLink
            document={
              <PdfResume
                skills={skills}
                jobs={jobs}
                degrees={degrees}
                hobbies={hobbies}
                projects={projects}
                profile={profile}
              />
            }
            fileName="cv-martial-seron.pdf"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {({ loading }) =>
              loading ? "Génération..." : "📄 Télécharger CV (PDF)"
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
}
