import Flag from "react-flagkit";

export type Language = {
  name: string;
  country: string;
  level: string;
};

export type LanguagesProps = {
  languages: Language[];
  className?: string;
};

export function Languages({ languages }: LanguagesProps) {
  return languages.map((language, index) => (
    <div key={index} className="flex items-center gap-2 text-white">
      <Flag country={language.country} />
      <span>{language.name}</span> - <span>{language.level}</span>
    </div>
  ));
}
