export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export const EDUCATION: EducationItem[] = [
  {
    institution: "Vivekananda Institute of Technology",
    degree: "B.E in Computer Science",
    period: "2016 – 2020",
    description:
      "CGPA: 7.5. Studied core computer science fundamentals, programming, databases, and software engineering.",
  },
  {
    institution: "RNSIT PU College",
    degree: "PUC in Computer Science",
    period: "2014 – 2016",
    description: "Scored 77.6%. Foundation in computer science and mathematics.",
  },
  {
    institution: "St. Philomenas High School",
    degree: "10th Standard (Karnataka Board)",
    period: "2013 – 2014",
    description: "Scored 79.68%. Completed secondary education.",
  },
];
