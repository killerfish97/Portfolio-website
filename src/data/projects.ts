import type { Project } from "@/types";
import { SITE_CONFIG } from "./site";

export const PROJECTS: Project[] = [
  {
    id: "school-erp",
    title: "School ERP System",
    shortDescription:
      "Full-stack school management platform for attendance, exams, and reporting.",
    description:
      "Built a comprehensive School ERP system using Django, ReactJS, PHP, MySQL, and REST APIs. Developed modules for attendance tracking, timetable management, examination results, fee records, and admin reporting. Optimized database queries and APIs to support 50,000+ daily users with reliable performance across multiple school departments.",
    image: "/projects/school-erp.svg",
    techStack: ["Django", "ReactJS", "PHP", "MySQL", "REST APIs"],
    liveUrl: "#",
    githubUrl: SITE_CONFIG.github,
  },
  {
    id: "event-management",
    title: "Event Management System",
    shortDescription:
      "Event scheduling and registration system with Django REST APIs.",
    description:
      "Developed an Event Management System with Django, Django REST Framework, MySQL, and REST APIs. Implemented event creation, participant registration, venue allocation, schedule management, and admin dashboards. Designed secure API endpoints for mobile and web clients to manage events in real time.",
    image: "/projects/event-management.svg",
    techStack: ["Django", "REST API", "Django REST Framework", "MySQL"],
    liveUrl: "#",
    githubUrl: SITE_CONFIG.github,
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    shortDescription:
      "ReactJS chatbot integrated with REST APIs for smart user assistance.",
    description:
      "Created an AI-powered chatbot using ReactJS and REST APIs. Built an interactive chat interface with real-time messaging, conversation history, and backend API integration for automated responses. Focused on clean UI, fast response handling, and easy integration with existing web applications.",
    image: "/projects/ai-chatbot.svg",
    techStack: ["ReactJS", "REST API"],
    liveUrl: "#",
    githubUrl: SITE_CONFIG.github,
  },
  {
    id: "clinic-management",
    title: "Clinic Management System",
    shortDescription:
      "Healthcare platform for appointments, patients, and clinic operations.",
    description:
      "Designed a Clinic Management System using Python, REST APIs, and PostgreSQL. Built features for appointment booking, patient record management, billing, staff scheduling, and medical history tracking. Ensured secure data handling and scalable API architecture for clinic workflows.",
    image: "/projects/clinic-management.svg",
    techStack: ["Python", "REST APIs", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: SITE_CONFIG.github,
  },
  {
    id: "assessment-management",
    title: "Assessment Management System",
    shortDescription:
      "Online exam platform with PHP, MySQL, and Smarty templating.",
    description:
      "Built an Assessment Management System using PHP, MySQL, and Smarty. Developed question bank management, online test creation, automated grading, student result generation, and performance reporting. Improved exam delivery speed and simplified admin control over assessments.",
    image: "/projects/assessment.svg",
    techStack: ["PHP", "MySQL", "Smarty"],
    liveUrl: "#",
    githubUrl: SITE_CONFIG.github,
  },
  {
    id: "supplier-tracker",
    title: "Goods & Carry Supplier Tracker",
    shortDescription:
      "Supplier and inventory tracking system with Django and Pandas analytics.",
    description:
      "Developed a Goods & Carry Supplier Tracker using Django, REST APIs, MySQL, and Pandas. Implemented supplier registration, goods movement tracking, stock updates, delivery monitoring, and data analysis dashboards. Used Pandas for reporting insights and optimized backend workflows for supply chain visibility.",
    image: "/projects/supplier-tracker.svg",
    techStack: ["Django", "REST APIs", "MySQL", "Pandas"],
    liveUrl: "#",
    githubUrl: SITE_CONFIG.github,
  },
];
