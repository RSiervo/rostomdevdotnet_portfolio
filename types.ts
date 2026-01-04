
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  videoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description: string;
  imageUrl: string;
  credentialLink?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
