// PdfResume.tsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { JobType } from "./Job";
import { SkillCategory } from "./Skills";
import { DegreeType } from "./Degree";
import { Hobby } from "./Hobbies";
import { Project } from "../ui/ProjectCard";
import { Profile } from "./Header";

// Optionnel : définir une police personnalisée
Font.register({
  family: "Courier",
  src: "https://fonts.gstatic.com/s/courierprime/v6/u-4k0rCzjgs5J7oXnJcM_0kACGMt.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#2d3748",
    lineHeight: 1.4,
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    borderBottom: "2 solid #2563eb",
    paddingBottom: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "light",
    color: "#1e293b",
  },
  title: {
    fontSize: 12,
    fontFamily: "Courier",
    color: "#2563eb",
    marginTop: 4,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 5,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    borderBottom: "1 solid #e2e8f0",
    color: "#1e293b",
    fontFamily: "Courier",
    marginBottom: 6,
  },
  profile: {
    marginBottom: 15,
    textAlign: "justify",
    color: "#374151",
  },
  job: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e293b",
  },
  jobCompany: {
    fontSize: 10,
    color: "#2563eb",
    fontWeight: "medium",
  },
  jobPeriod: {
    fontSize: 9,
    color: "#6b7280",
  },
  jobActions: {
    marginLeft: 10,
    fontSize: 9,
    color: "#4b5563",
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillName: {
    flex: 1,
  },
  skillItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    marginBottom: 2,
  },
  educationItem: {
    marginBottom: 6,
  },
  interestTag: {
    backgroundColor: "#f1f5f9",
    color: "#475569",
    fontSize: 8,
    padding: 2,
    borderRadius: 4,
    marginRight: 4,
  },
});

type Props = {
  skills: SkillCategory[];
  jobs: JobType[];
  degrees: DegreeType[];
  hobbies: Hobby[];
  projects: Project[];
  profile: Profile;
};

const PdfResume: React.FC<Props> = ({
  jobs,
  skills,
  degrees,
  hobbies,
  profile,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.title}>&lt;Developer type="fullstack" /&gt;</Text>
        <View style={styles.contact}>
          {profile.contacts.map((contact, idx) => (
            <Text key={idx}>{contact.text}</Text>
          ))}
        </View>
      </View>

      <Text style={styles.profile}>
        Développeur Fullstack avec{" "}
        <Text style={{ color: "#2563eb" }}>18 ans d'expérience</Text>, passionné
        par l'optimisation des outils web et la résolution de problèmes
        complexes. Fort d'une grande autonomie et d'un excellent esprit
        d'équipe, je conçois et maintiens des solutions robustes en{" "}
        <Text style={{ color: "#2563eb" }}>Node.js</Text> et{" "}
        <Text style={{ color: "#2563eb" }}>React.js</Text>.
      </Text>

      {/* Expériences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>&lt;Experience /&gt;</Text>
        {jobs.map((job, idx) => (
          <View key={idx} style={styles.job}>
            <View style={styles.jobHeader}>
              <View>
                <Text style={styles.jobTitle}>{job.role}</Text>
                <Text style={styles.jobCompany}>{job.company}</Text>
              </View>
              <Text style={styles.jobPeriod}>
                {job.start} - {job.end}
              </Text>
            </View>
            <View style={styles.jobActions}>
              {job.responsibilities.map((action, i) => (
                <Text key={i}>▸ {action}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Compétences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>&lt;Skills /&gt;</Text>
        {skills.map((cat, idx) => (
          <View key={idx} style={styles.skillCategory}>
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#1e293b" }}
            >
              {cat.label}
            </Text>
            {/* {cat.skills.map((s, i) => (
              <View key={i} style={styles.skillItem}>
                <Text style={styles.skillName}>{s.name}</Text>
                <Text>{s.level}</Text>
              </View>
            ))} */}
          </View>
        ))}
      </View>

      {/* Formation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>&lt;Education /&gt;</Text>
        {degrees.map((edu, idx) => (
          <View key={idx} style={styles.educationItem}>
            <Text style={{ fontWeight: "bold", color: "#1e293b" }}>
              {edu.title}
            </Text>
            <Text style={{ fontSize: 9, color: "#6b7280" }}>
              {edu.school.name}
            </Text>
            <Text style={{ fontSize: 8, color: "#9ca3af" }}>
              {edu.start} - {edu.end}
            </Text>
          </View>
        ))}
      </View>

      {/* Intérêts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>&lt;Interests /&gt;</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {hobbies.map((hobby, idx) => (
            <Text key={idx} style={styles.interestTag}>
              {hobby.name}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export { PdfResume };
