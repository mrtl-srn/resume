import ReactTag from "../ui/ReactTag";
import {
  GithubIcon,
  HouseIcon,
  LinkedinIcon,
  Mail,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import avatar from "../assets/photo_msn.png";
import MarkdownRenderer from "./MarkdownRenderer";

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
};

export type ContactItem = {
  type: string;
  text: string;
  link?: string;
};

export type HeaderProps = {
  profile: Profile;
};

const icons = {
  location: <HouseIcon className="w-4 h-4" />,
  email: <MailIcon className="w-4 h-4" />,
  phone: <PhoneIcon className="w-4 h-4" />,
  github: <GithubIcon className="w-4 h-4" />,
  linkedin: <LinkedinIcon className="w-4 h-4" />,
};

export function Header({ profile }: HeaderProps) {
  const { fullName, title, description, contacts } = profile;
  const { role, type } = title;

  return (
    <header className="max-w-6xl mx-auto pt-12 px-4">
      <div className="flex-grow container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col items-center">
              <div className="shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 p-1">
                <img
                  src={avatar}
                  alt={fullName}
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>

              <h1 className="text-4xl font-medium text-gray-800 dark:text-blue-400 mt-4 text-center md:text-left">
                {fullName}
              </h1>
            </div>

            <div className="flex flex-col items-start gap-2">
              {contacts.map((item, index) =>
                item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-2 text-gray-600 dark:text-white hover:text-pink-500 transition-colors"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {icons[item.type as keyof typeof icons] || (
                      <Mail className="w-4 h-4" />
                    )}
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    {icons[item.type as keyof typeof icons] || (
                      <Mail className="w-4 h-4" />
                    )}
                    <span>{item.text}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <ReactTag
              as="h1"
              size="5xl"
              name={role}
              selfClosing
              className="justify-center md:justify-start"
              properties={{ type }}
            />

            <div className="text-gray-600 dark:text-white mb-6 max-w-2xl">
              <MarkdownRenderer>{description}</MarkdownRenderer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
