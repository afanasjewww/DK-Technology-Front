export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  whatsapp: string;
  telegram: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
