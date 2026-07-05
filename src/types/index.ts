export interface Project {
  slug: string;
  title: string;
  subtitle?: string;

  category: string;

  description: string;
  longDescription?: string;

  role?: string;
  duration?: string;
  team?: string;

  status: string;
  featured: boolean;

  thumbnail: string;
  gallery?: string[];

  techStack?: string[];
  technologies?: string[];

  features?: string[];
  challenges?: string[];
  futureImprovements?: string[];

  problemStatement?: string;
  businessGoal?: string;
  architectureDiagram?: string;

  coreFeatures?: string[];
  lessonsLearned?: string[];

  /* ===== NEW ===== */

  overview?: string;

  problem?: string;
  solution?: string;

  architecture?: string[];

  responsibilities?: string[];

  results?: string[];

  metrics?: {
    label: string;
    value: string;
  }[];

  screenshots?: string[];

  testimonials?: {
    name: string;
    role: string;
    message: string;
  }[];

  timeline?: {
    title: string;
    description: string;
  }[];

  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  readonly name: string;
  readonly iconName: string;
  readonly percentage: number;
  readonly category: 'Frontend' | 'Backend' | 'Database' | 'AI' | 'DevOps';
}

export interface Education {
  readonly id: string;
  readonly degree: string;
  readonly institution: string;
  readonly major: string;
  readonly duration: string;
  readonly description: string;
}

export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly duration: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
}

export interface HeroStats {
  readonly label: string;
  readonly value: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly title: string;
  readonly description: string;

  readonly url: string;
  readonly ogImage: string;

  readonly profileImage: string;
  readonly profileImage2: string;
  readonly resume: string;

  readonly location: string;
  readonly availability: string;

  readonly links: {
    readonly github: string;
    readonly linkedin: string;
    readonly email: string;
  };

  readonly heroStats: readonly HeroStats[];
}