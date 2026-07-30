export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social?: Socials;
  aboutMe: string;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  licenses: License[];
}

export interface Socials {
  email?: string;
  github?: string;
  qiita?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Project {
  name?: string;
  link?: string;
  description?: string;
  skills?: string[];
}

export interface Experience {
  company?: string;
  title?: string;
  dateRange?: string;
  bullets: string[];
}

export interface License {
  name?: string;
  dateRange?: string;
}

export interface Skills {
  proficient: string[];
  familiar: string[];
}
