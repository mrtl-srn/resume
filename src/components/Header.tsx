import avatar from "../assets/photo_msn.jpg";
import MarkdownRenderer from "./MarkdownRenderer";
import { Avatar } from "../ui/Avatar";
import { FullName } from "../ui/FullName";
import { Contacts } from "../ui/Contacts";
import IDECodeLine from "../ui/IDECodeLine";
import { CodeZone } from "../ui/CodeZone";
import { Language, Languages } from "./Languages";

export type Profile = {
  fullName: string;
  title: {
    role: string;
    type: string;
  };
  photo: string;
  description: string;
  location: string;
  contacts: ContactItem[];
  languages: Language[];
};

export type ContactItem = {
  type: string;
  text: string;
  link?: string;
};

export type HeaderProps = {
  profile: Profile;
};

export function Header({ profile }: HeaderProps) {
  const { fullName, title, description, contacts, languages } = profile;
  const { role, type } = title;

  return (
    <header className="max-w-6xl mx-auto pt-12 ">
      <div className="flex-grow container mx-auto">
        <div className="w-full mb-8 sm:text-center">
          <IDECodeLine
            tag={role}
            props={{ type }}
            indentSize={2}
            selfClosing
            as="h1"
            size="4xl"
            className="justify-center md:justify-start hidden md:block "
          />
          <CodeZone className="md:hidden">
            <IDECodeLine
              tag={role}
              props={{ type }}
              indentSize={2}
              selfClosing
              as="h1"
              size="3xl"
              className="justify-center  stacked"
            />
          </CodeZone>
        </div>

        <div className="flex-col md:flex-row gap-8 md:items-start hidden md:flex">
          <div className="flex md:flex-col items-center justify-around md:gap-2">
            <Avatar src={avatar} alt={fullName} />

            <div className="flex flex-col items-start gap-2">
              <FullName fullName={fullName} />

              <Contacts contacts={contacts} />
              <Languages languages={languages} />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <div className="text-white mb-6 max-w-2xl">
              <MarkdownRenderer>{description}</MarkdownRenderer>
            </div>
          </div>
        </div>

        <div className="flex-col md:flex-row gap-8 md:items-start flex md:hidden">
          <div className="flex flex-col items-center justify-around md:gap-2">
            <Avatar src={avatar} alt={fullName} />

            <div className="flex flex-col items-start gap-2">
              <FullName fullName={fullName} />

              <Contacts contacts={contacts} />
              <Languages languages={languages} />
            </div>
          </div>

          <div className="text-white text-left mb-6 ">
            <MarkdownRenderer>{description}</MarkdownRenderer>
          </div>
        </div>
      </div>
    </header>
  );
}
