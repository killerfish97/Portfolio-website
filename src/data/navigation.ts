export interface NavIconItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export const ICON_NAV: NavIconItem[] = [
  { id: "home", label: "Home", href: "#home", icon: "home" },
  { id: "services", label: "Services", href: "#services", icon: "briefcase" },
  { id: "projects", label: "Projects", href: "#projects", icon: "folder" },
  { id: "experience", label: "Experience", href: "#experience", icon: "history" },
  { id: "education", label: "Education", href: "#education", icon: "graduation" },
  { id: "contact", label: "Contact", href: "#contact", icon: "mail" },
];
