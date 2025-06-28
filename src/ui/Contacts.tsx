import {
  GithubIcon,
  HouseIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

export const icons = {
  location: <HouseIcon className="w-4 h-4" />,
  email: <MailIcon className="w-4 h-4" />,
  phone: <PhoneIcon className="w-4 h-4" />,
  github: <GithubIcon className="w-4 h-4" />,
  linkedin: <LinkedinIcon className="w-4 h-4" />,
};

export function Contacts({
  contacts,
}: {
  contacts: Array<{ type: string; text: string; link?: string }>;
}) {
  return contacts.map((item, index) =>
    item.link ? (
      <a
        key={index}
        href={item.link}
        className="flex items-center gap-2 text-white hover:text-pink-500 transition-colors"
        target={item.link.startsWith("http") ? "_blank" : undefined}
        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {icons[item.type as keyof typeof icons] || (
          <MailIcon className="w-4 h-4" />
        )}
        <span>{item.text}</span>
      </a>
    ) : (
      <div key={index} className="flex items-center gap-2 text-gray-600">
        {icons[item.type as keyof typeof icons] || (
          <MailIcon className="w-4 h-4" />
        )}
        <span>{item.text}</span>
      </div>
    )
  );
}
