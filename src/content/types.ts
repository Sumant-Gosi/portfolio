export type Locale = "en" | "de";

export type LocalizedText = Record<Locale, string>;

export type SectionId =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "training"
  | "languages"
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
    downloadCv: string;
    contact: string;
    cvFile: string;
    specsLabel: string;
    specs: Spec[];
    // ASCII text, max 8 characters: encoded as the CAN frame in the hero trace.
    scopeMessage: string;
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
    licenseLabel: string;
    license: string;
  };
  contact: {
    title: string;
    text: string;
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
