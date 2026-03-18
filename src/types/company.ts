export type ServiceIconKey =
  | "code"
  | "workflow"
  | "layout"
  | "chart"
  | "plug"
  | "refresh"
  | "sparkles"
  | "shield";

export interface CompanyHighlight {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconKey;
}

export interface ContactPoint {
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface UpcomingSystem {
  id: string;
  name: string;
  category: string;
  status: string;
  description: string;
}

export interface CompanyData {
  name: string;
  legalName: string;
  slogan: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  highlights: CompanyHighlight[];
  services: ServiceItem[];
  contactPoints: ContactPoint[];
  socialLinks: SocialLink[];
  upcomingSystems: UpcomingSystem[];
}
