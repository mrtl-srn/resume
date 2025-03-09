import React, { JSX } from "react";
import { Mail, Linkedin, Phone, Github } from "lucide-react";
import photo from "../assets/photo_msn.png";
import ReactTag from "../ui/ReactTag";

interface ContactItem {
  icon: JSX.Element;
  text: string;
  link?: string;
}

const Header: React.FC = () => {
  const contactInfo: ContactItem[] = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "martial.seron@gmail.com",
      link: "mailto:martial.seron@gmail.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "06 75 86 11 30",
      link: "tel:+33675861130",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/martial-seron/",
    },
    {
      icon: <Github className="w-4 h-4" />,
      text: "GitHub",
      link: "https://github.com/mrtl-srn",
    },
  ];

  return (
    <header className="max-w-6xl mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="shrink-0">
          <img
            src={photo}
            alt="Martial Séron"
            className="w-48 h-48 rounded-full object-cover border-4 border-pink-500 dark:border-blue-400"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Martial Séron
          </h1>
          <h2 className="text-2xl text-pink-500 font-mono mb-6">
            <ReactTag as="h1" name="FullstackDeveloper" />
          </h2>

          <p className="text-gray-600 dark:text-white mb-6 max-w-2xl">
            Développeur Fullstack avec 18 ans d'expérience, passionné par
            l'optimisation des outils web et la résolution de problèmes
            complexes. Fort d'une grande autonomie et d'un excellent esprit
            d'équipe, je conçois et maintiens des solutions robustes en Node.js
            et React.js.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {contactInfo.map((item, index) =>
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
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              ) : (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
