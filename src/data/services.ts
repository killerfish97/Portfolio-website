export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: "Backend Development",
    description:
      "Scalable server-side applications using Python, Django, and Flask with clean architecture and high performance.",
    icon: "server",
  },
  {
    title: "REST API Development",
    description:
      "Robust RESTful APIs with Django REST Framework, authentication, and third-party integrations.",
    icon: "code",
  },
  {
    title: "Full Stack Web Apps",
    description:
      "End-to-end web applications combining Django backends with ReactJS frontends.",
    icon: "layers",
  },
  {
    title: "Database Optimization",
    description:
      "SQL query tuning, ORM optimization, and database design for large datasets (1M+ records).",
    icon: "database",
  },
  {
    title: "ERP Systems",
    description:
      "School ERP modules including attendance, timetable, examination results, and reporting.",
    icon: "globe",
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Complete ecommerce platforms with product management, payments, and admin dashboards.",
    icon: "cart",
  },
];
