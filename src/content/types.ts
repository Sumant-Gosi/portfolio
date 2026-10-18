export type Locale = "en" | "de";

export type LocalizedText = Record<Locale, string>;

export type SectionId =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "training"
  | "languages"
  | "hobbies"
  | "licence"
  | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type Spec = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  details: string[];
};

export type CourseItem = {
  title: string;
  issuer?: string;
  status: string;
  inProgress?: boolean;
};

export type HobbyItem = {
  id: "boardgames" | "swimming" | "table-tennis" | "strength";
  name: string;
  detail?: string;
};

export type LanguageItem = {
  name: string;
  level: string;
  note?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  header: {
    homeLabel: string;
    navLabel: string;
    nav: NavItem[];
    languageSwitchLabel: string;
    themeToggleLabel: string;
  };
  hero: {
    name: string;
    initials: string;
    title: string;
    summary: string;
    availability: string;
    keywords: string[];
    downloadCv: string;
    viewProjects: string;
    cvFile: string;
    specsLabel: string;
    specs: Spec[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    hint: string;
    focus: {
      usedIn: string;
      roles: [string, string];
      projects: [string, string];
      show: string;
      clear: string;
    };
  };
  experience: {
    title: string;
    currentLabel: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    problemLabel: string;
    solutionLabel: string;
    githubLabel: string;
  };
  training: {
    title: string;
    educationTitle: string;
    coursesTitle: string;
    certificationsTitle: string;
    education: EducationItem[];
    courses: CourseItem[];
    certifications: CourseItem[];
  };
  languages: {
    title: string;
    items: LanguageItem[];
  };
  hobbies: {
    title: string;
    items: HobbyItem[];
  };
  licence: {
    title: string;
    value: string;
  };
  contact: {
    title: string;
    text: string;
    details: Spec[];
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: {
    builtWith: string;
  };
};

export type SkillGroup = {
  id: string;
  title: LocalizedText;
  items: string[];
};

export type Project = {
  id: string;
  title: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  tags: string[];
  githubUrl?: string;
  // Hidden from the page while true, e.g. until placeholder text is filled in.
  draft?: boolean;
};
