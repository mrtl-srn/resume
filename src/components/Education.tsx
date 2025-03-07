import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center gap-2 mb-8">
        <GraduationCap className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-mono text-indigo-600">&lt;Education /&gt;</h2>
      </div>

      <div className="space-y-6">
        <div className="border-l-2 border-indigo-200 pl-4">
          <h3 className="font-bold text-lg">BTS IRIS</h3>
          <p className="text-gray-600">LTP La Baronnerie, Saint Sylvain d'Anjou</p>
          <p className="text-gray-500 text-sm">2001 - 2003</p>
        </div>

        <div className="border-l-2 border-indigo-200 pl-4">
          <h3 className="font-bold text-lg">BAC Génie Électronique</h3>
          <p className="text-gray-600">LTP La Baronnerie</p>
          <p className="text-gray-500 text-sm">1999 - 2001</p>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-lg mb-4">Certifications & Formations</h3>
          <ul className="space-y-3 list-none">
            {[
              { title: 'Audit de site web', org: 'Sysdream', year: '2021' },
              { title: 'Docker', org: 'ORSYS', year: '2020' },
              { title: 'Angular', org: 'ORSYS', year: '2018' },
              { title: 'Sécurité des applications web', org: 'ORSYS', year: '2016' },
              { title: 'Gestion de projets', org: 'CEGOS', year: '2015' },
            ].map((cert, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                <div>
                  <span className="font-medium">{cert.title}</span>
                  <span className="text-gray-500"> - {cert.org}</span>
                  <span className="text-gray-400 text-sm ml-2">({cert.year})</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;