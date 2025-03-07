import { CheckCircle2 } from 'lucide-react';
import ReactTitle from '../ui/ReactTitle';

const Experience = () => {
  const experiences = [
    {
      company: "Alturing",
      location: "Angers",
      role: "Responsable Outils Support",
      start: 2007,
      isCurrentJob: true,
      responsibilities: [
        "Conception et administration des outils internes pour le Centre de Services",
        "Développement de solutions web sur mesure (Node.js, React.js, PHP)",
        "Automatisation des déploiements et maintenance des infrastructures sous Linux",
        "Formation et support technique aux équipes internes",
        "Documentation et optimisation des processus pour améliorer la productivité"
      ],
      projects: [
        "Migration d'un système legacy vers une architecture moderne en microservices",
        "Mise en place d'un pipeline CI/CD pour automatiser les déploiements",
        "Optimisation de la performance des outils internes, réduction du temps de réponse de 40%"
      ]
    }, {
      company: "Telintrans",
      location: "Angers",
      role: "Technicien Support Informatique",
      start: 2005,
      end: 2007,
      responsibilities: [
        "Conception et administration des outils internes pour le Centre de Services",
        "Développement de solutions web sur mesure (Node.js, React.js, PHP)",
        "Automatisation des déploiements et maintenance des infrastructures sous Linux",
        "Formation et support technique aux équipes internes",
        "Documentation et optimisation des processus pour améliorer la productivité"
      ],
      projects: [
        "Migration d'un système legacy vers une architecture moderne en microservices",
        "Mise en place d'un pipeline CI/CD pour automatiser les déploiements",
        "Optimisation de la performance des outils internes, réduction du temps de réponse de 40%"
      ]
    },
    {
      company: "ALPA",
      role: "Directeur de Centre de Loisirs, 'Le Bois de Pouillé'",
      location: "Angers",
      start: 2000,
      end: 2005,
      responsibilities: [
        "Gestion du personnel et coordination des activités pédagogiques",
        "Planification et mise en œuvre du projet éducatif",
        "Encadrement et gestion d'équipe"
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <ReactTitle as='h1' componentName="Experiences" sticky />

      <div className="space-y-12 border-l border-pink-200 pl-6">

        {experiences.map((exp, index) => {

          const properties = {
            company: exp.company,
            start: exp.start,
            ...(exp.isCurrentJob && { isCurrentJob: true }),
            ...(!exp.isCurrentJob && { end: exp.end })
          };

          return (<section key={index} className="relative">

            <ReactTitle as='h2' sticky componentName="Experience" properties={properties} />

            <div className="space-y-12 border-l border-pink-200 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mb-4 ">
                <span className="font-medium">{exp.role}</span>
                <span className="hidden sm:block">•</span>
                <span className="text-gray-500">{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{resp}</span>
                  </li>
                ))}
              </ul>

              {exp.projects && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-700 mb-3">🔍 Projets marquants :</h4>
                  <ul className="space-y-2 pl-4">
                    {exp.projects.map((project, idx) => (
                      <li key={idx} className="text-gray-600 list-disc">
                        <span className="font-medium">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <ReactTitle as='h2' componentName="Experience" closeTag />
          </section>)
        })}
      </div>



      <ReactTitle as='h1' componentName="Experiences" closeTag />
    </section>
  );
};

export default Experience;