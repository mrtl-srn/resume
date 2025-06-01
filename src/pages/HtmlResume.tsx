// HtmlResume.tsx
import React from "react";

import jobs from "../data/jobs.json";
import degrees from "../data/degrees.json";
import skills from "../data/skills.json";
import hobbies from "../data/hobbies.json";

type Props = {};

const HtmlResume: React.FC<Props> = () => {
  return (
    <div>
      <button onClick={() => window.print()} className="print-button">
        🖨️ Imprimer en PDF
      </button>

      <div className="container">
        <header className="header">
          <h1 className="name">Martial Séron</h1>
          <div className="title">&lt;Developer type="fullstack" /&gt;</div>
          <div className="contact">
            <div className="contact-item">
              <span>📧</span>
              <span>martial.seron@gmail.com</span>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <span>06 75 86 11 30</span>
            </div>
            <div className="contact-item">
              <span>💼</span>
              <span>LinkedIn</span>
            </div>
            <div className="contact-item">
              <span>⚡</span>
              <span>GitHub</span>
            </div>
          </div>
        </header>

        <div className="profile">
          Développeur Fullstack avec{" "}
          <span className="highlight">18 ans d'expérience</span>, passionné par
          l'optimisation des outils web et la résolution de problèmes complexes.
          Fort d'une grande autonomie et d'un excellent esprit d'équipe, je
          conçois et maintiens des solutions robustes en{" "}
          <span className="highlight">Node.js</span> et{" "}
          <span className="highlight">React.js</span>.
        </div>

        <div className="main-grid">
          <div className="left-column">
            <section className="section">
              <h2 className="section-title">Experience</h2>
              {jobs.map((exp, i) => (
                <div key={i} className="job">
                  <div className="job-header">
                    <div>
                      <div className="job-title">{exp.role}</div>
                      <div className="company">{exp.company}</div>
                    </div>
                    <div className="job-period">{exp.start}</div>
                  </div>
                  <ul className="job-actions">
                    {exp.responsibilities.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          <div className="right-column">
            <section className="section">
              <h2 className="section-title">Skills</h2>
              {skills.map((cat, i) => (
                <div key={i} className="skill-category">
                  <h4>{cat.label}</h4>
                  <div className="skills-list">
                    {cat.skills.map((s) => (
                      <span key={i} className="skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="section">
              <h2 className="section-title">Education</h2>
              {degrees.map((edu, i) => (
                <div key={i} className="education-item">
                  <div className="degree-title">{edu.title}</div>
                  <div className="school-info">{edu.school.name}</div>
                  <div className="education-period">{edu.start}</div>
                </div>
              ))}
            </section>

            <section className="section">
              <h2 className="section-title">Interests</h2>
              <div className="interests">
                {hobbies.map((hobby, i) => (
                  <span key={i} className="interest-tag">
                    {hobby.name}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlResume;
