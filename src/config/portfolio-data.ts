import { Project, Skill, Education, Experience, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Alamin Ahmed',
  title: 'Full Stack Developer & AI Automation Engineer',

  description:
    'I build modern, scalable web applications and AI-powered automation systems using Next.js, Node.js, TypeScript, Prisma, PostgreSQL, and n8n.',

  url: 'https://alaminahmed.dev',
  ogImage: '/images/og.png',

  profileImage: '/profile.jpg',
  profileImage2: '/profile2.png',
  resume: '/alamin-ahmed-resume.pdf',

  location: 'Sherpur, Mymensingh, Bangladesh',
  availability: 'Available for Freelance',

  links: {
    github: 'https://github.com/Alaminahmedariyan',
    linkedin: 'https://www.linkedin.com/in/alamin-ahmed-536463382',
    email: 'alaminahmedariyan2022@gmail.com',
  },

  heroStats: [
    {
      value: '6+',
      label: 'Projects',
    },
    {
      value: '20+',
      label: 'Technologies',
    },
    {
      value: '2+',
      label: 'Years Learning',
    },
    {
      value: '24/7',
      label: 'Support',
    },
  ],
};

export const skills: readonly Skill[] = [
  // Frontend
  { name: 'JavaScript', iconName: 'javascript', percentage: 92, category: 'Frontend' },
  { name: 'TypeScript', iconName: 'typescript', percentage: 90, category: 'Frontend' },
  { name: 'React', iconName: 'react', percentage: 95, category: 'Frontend' },
  { name: 'Next.js', iconName: 'nextjs', percentage: 94, category: 'Frontend' },
  { name: 'Tailwind CSS', iconName: 'tailwind', percentage: 96, category: 'Frontend' },
  { name: 'Redux', iconName: 'redux', percentage: 85, category: 'Frontend' },
  { name: 'TanStack Query', iconName: 'query', percentage: 84, category: 'Frontend' },

  // Backend
  { name: 'Node.js', iconName: 'nodejs', percentage: 92, category: 'Backend' },
  { name: 'Express.js', iconName: 'express', percentage: 91, category: 'Backend' },
  { name: 'Prisma ORM', iconName: 'prisma', percentage: 90, category: 'Backend' },
  { name: 'Socket.io', iconName: 'socket', percentage: 82, category: 'Backend' },

  // Database
  { name: 'PostgreSQL', iconName: 'postgresql', percentage: 90, category: 'Database' },
  { name: 'MongoDB', iconName: 'mongodb', percentage: 88, category: 'Database' },

  // AI
  { name: 'OpenAI', iconName: 'openai', percentage: 90, category: 'AI' },
  { name: 'LangChain', iconName: 'langchain', percentage: 82, category: 'AI' },
  { name: 'LangFlow', iconName: 'langflow', percentage: 80, category: 'AI' },
  { name: 'n8n', iconName: 'n8n', percentage: 92, category: 'AI' },
  { name: 'Prompt Engineering', iconName: 'prompt', percentage: 91, category: 'AI' },

  // DevOps
  { name: 'Docker', iconName: 'docker', percentage: 82, category: 'DevOps' },
  { name: 'Git', iconName: 'git', percentage: 94, category: 'DevOps' },
  { name: 'GitHub', iconName: 'github', percentage: 95, category: 'DevOps' },
  { name: 'Linux', iconName: 'linux', percentage: 84, category: 'DevOps' },
];

export const educationList: readonly Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science',
    institution: 'Sherpur Government College',
    major: 'Mathematics',
    duration: '2020 - 2024',
    description:
      'Specialized in Pure Mathematics, Mathematical Modeling, and Computational Logic. Applied complex algorithms, linear algebra, and discrete structures directly to software engineering practices.',
  },
];

export const experienceList: readonly Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack & Automation Engineer',
    company: 'Personal Projects',
    duration: '2024 - Present',
    responsibilities: [
      'Architected and implemented enterprise-level web applications using Next.js 15, React 19, and PostgreSQL, increasing load speeds by 40%.',
      'Designed complex workflow automation pipelines using n8n and LangChain, saving clients over 15 hours of manual work per week.',
      'Configured Prisma ORM database layers with optimized indexing, reducing database query latencies by 30%.',
      'Collaborated closely with stakeholders to align technical specifications with core business objectives.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Prisma ORM', 'n8n', 'PostgreSQL'],
  },
  {
    id: 'exp-2',
    role: 'Software Engineer Intern',
    company: 'WebFlow Systems',
    duration: '2023 - 2024',
    responsibilities: [
      'Developed responsive UI elements using React and Tailwind CSS, improving overall mobile usability metrics.',
      'Constructed backend REST API endpoints using Node.js and Express, validated with Zod schemas.',
      'Contributed to code reviews, maintaining strict code standards and zero-error git branch integrations.',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'Git'],
  },
];

export const projectsList: readonly Project[] = [
  {
    slug: 'launch-hunt',

    title: 'Launch Hunt',

    subtitle: 'Premium Product Launch Platform',

    category: 'Full Stack',

    description: 'A premium product launch platform connecting founders and early adopters.',

    longDescription:
      'Launch Hunt is a modern Product Hunt clone where users can launch products, receive votes, rank organically, and gain visibility through an optimized ranking algorithm.',

    role: 'Full Stack Developer',

    duration: '3 Weeks',

    team: 'Solo',

    status: 'Completed',

    featured: true,

    thumbnail: '/images/projects/launch1.png',

    gallery: [
      '/images/projects/launch2.png',
      '/images/projects/launch3.png',
      '/images/projects/launch4.png',
      '/images/projects/launch5.png',
    ],

    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],

    features: [
      'Real-time Upvoting',
      'Trending Ranking',
      'Authentication',
      'Product Submission',
      'SEO Optimized',
    ],

    challenges: ['Ranking Algorithm', 'Performance Optimization', 'Database Query Optimization'],

    futureImprovements: ['Notifications', 'Comments', 'Product Reviews'],

    problemStatement:
      'Founders need a platform where they can launch products and receive real community feedback.',

    businessGoal: 'Build a Product Hunt alternative focused on startups.',

    architectureDiagram: 'Next.js → API → Prisma → PostgreSQL',

    coreFeatures: ['Authentication', 'Voting', 'Ranking', 'Dashboard'],

    lessonsLearned: ['Server Components', 'Prisma Optimization', 'Caching'],

    liveUrl: 'https://your-demo.com',

    githubUrl: 'https://github.com/yourrepo',
  },
{
  slug: 'leadpulse',

  title: 'LeadPulse',

  subtitle: 'AI Lead Generation & Sales Automation Platform',

  category: 'AI Automation / Backend',

  description:
    'An AI-powered lead generation and outbound sales automation platform that discovers prospects, researches companies, and generates personalized outreach emails.',

  longDescription:
    'LeadPulse is a modern AI-powered sales automation platform designed to simplify outbound prospecting. It automatically researches companies, gathers lead information, generates personalized email campaigns using AI, and manages outreach workflows through an intuitive dashboard. The platform integrates multiple AI agents and automation tools to reduce manual work and improve sales productivity.',

  role: 'Full Stack AI Developer',

  duration: '4 Weeks',

  team: 'Solo',

  status: 'Completed',

  featured: true,

  thumbnail: '/images/projects/leadpulse1.png',

  gallery: [
    '/images/projects/leadpulse2.png',
    '/images/projects/leadpulse3.png',
    '/images/projects/leadpulse4.png',
    '/images/projects/leadpulse5.png',
  ],

  techStack: [
    'Next.js',
    'TypeScript',
    'Node.js',
    'Prisma ORM',
    'PostgreSQL',
    'OpenAI API',
    'LangChain',
    'n8n',
  ],

  features: [
    'AI Lead Discovery',
    'Company Research Automation',
    'Personalized Email Generation',
    'Workflow Automation',
    'CRM Ready Dashboard',
  ],

  challenges: [
    'Handling OpenAI API rate limits.',
    'Managing multi-agent workflow execution.',
    'Building reliable web scraping pipelines.',
  ],

  futureImprovements: [
    'HubSpot Integration',
    'Salesforce Integration',
    'Reply Sentiment Analysis',
    'Campaign Analytics',
  ],

  problemStatement:
    'Sales teams spend countless hours manually researching prospects and writing repetitive cold emails, reducing productivity and conversion rates.',

  businessGoal:
    'Automate lead research and outbound sales processes using AI to increase productivity, improve response rates, and reduce manual effort.',

  architectureDiagram:
    'Next.js → API Routes → LangChain → OpenAI → Prisma ORM → PostgreSQL → n8n',

  coreFeatures: [
    'Authentication',
    'AI Lead Research',
    'Email Generation',
    'Automation Workflow',
    'Dashboard',
  ],

  lessonsLearned: [
    'Building AI workflow orchestration with LangChain.',
    'Prompt engineering for consistent AI responses.',
    'Database optimization using Prisma ORM.',
  ],

  liveUrl: 'https://your-demo.com',

  githubUrl: 'https://github.com/yourrepo',
},
{
  slug: 'resuai',

  title: 'ResuAI',

  subtitle: 'AI Resume Builder & ATS Optimization Platform',

  category: 'AI Web Service',

  description:
    'An AI-powered resume builder that analyzes resumes, improves ATS compatibility, and generates recruiter-friendly content.',

  longDescription:
    'ResuAI is a premium AI-powered resume optimization platform designed to help job seekers build professional resumes that perform better in Applicant Tracking Systems (ATS). Users can upload their resumes, compare them against job descriptions, identify missing skills, receive AI-generated suggestions, and export polished resumes ready for recruiters.',

  role: 'Full Stack Developer',

  duration: '3 Weeks',

  team: 'Solo',

  status: 'Completed',

  featured: true,

  thumbnail: '/images/projects/resuai1.png',

  gallery: [
    '/images/projects/resuai2.png',
    '/images/projects/resuai3.png',
    '/images/projects/resuai4.png',
    '/images/projects/resuai5.png',
  ],

  techStack: [
    'Next.js',
    'TypeScript',
    'OpenAI API',
    'Prisma ORM',
    'PostgreSQL',
    'Tailwind CSS',
    'Zod',
  ],

  features: [
    'AI Resume Builder',
    'ATS Score Analysis',
    'Job Description Matching',
    'AI Content Suggestions',
    'PDF Resume Export',
  ],

  challenges: [
    'Extracting clean text from complex PDF resumes.',
    'Reducing AI response latency.',
    'Generating consistent ATS scoring.',
  ],

  futureImprovements: [
    'LinkedIn Profile Optimization',
    'Cover Letter Generator',
    'Interview Question Generator',
    'Multiple Resume Templates',
  ],

  problemStatement:
    'Most job seekers submit resumes that fail Applicant Tracking Systems because they are not optimized for specific job descriptions.',

  businessGoal:
    'Provide an AI-powered platform that improves resume quality, increases ATS compatibility, and helps candidates secure more interviews.',

  architectureDiagram:
    'Next.js → Server Actions → OpenAI API → Prisma ORM → PostgreSQL',

  coreFeatures: [
    'Authentication',
    'Resume Upload',
    'ATS Analysis',
    'AI Optimization',
    'Dashboard',
  ],

  lessonsLearned: [
    'Working with OpenAI structured outputs.',
    'Optimizing PDF parsing workflows.',
    'Building scalable AI-powered applications.',
  ],

  liveUrl: 'https://your-demo.com',

  githubUrl: 'https://github.com/yourrepo',
},
{
  slug: 'ecospark-hub',

  title: 'EcoSpark Hub',

  subtitle: 'Smart Community Sustainability Platform',

  category: 'Community Platform',

  description:
    'A modern sustainability platform that encourages eco-friendly habits through carbon tracking, recycling guides, and community challenges.',

  longDescription:
    'EcoSpark Hub is a community-driven sustainability platform designed to help individuals build environmentally friendly habits. Users can calculate their carbon footprint, participate in green challenges, discover nearby recycling centers, earn achievement badges, and compete with friends through interactive leaderboards. The platform promotes environmental awareness using modern web technologies and engaging user experiences.',

  role: 'Full Stack Developer',

  duration: '3 Weeks',

  team: 'Solo',

  status: 'Completed',

  featured: false,

  thumbnail: '/images/projects/ecospark1.png',

  gallery: [
    '/images/projects/ecospark2.png',
    '/images/projects/ecospark3.png',
    '/images/projects/ecospark4.png',
    '/images/projects/ecospark5.png',
  ],

  techStack: [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Tailwind CSS',
    'JWT',
  ],

  features: [
    'Carbon Footprint Calculator',
    'Community Challenges',
    'Interactive Leaderboard',
    'Recycling Center Finder',
    'Achievement Badge System',
  ],

  challenges: [
    'Designing an accurate carbon footprint calculation system.',
    'Building a scalable leaderboard with MongoDB aggregation.',
    'Optimizing dashboard performance with large datasets.',
  ],

  futureImprovements: [
    'Mobile Application',
    'AI Sustainability Assistant',
    'Google Maps Integration',
    'Organization Dashboard',
  ],

  problemStatement:
    'Many people want to live sustainably but lack practical tools to measure and improve their environmental impact.',

  businessGoal:
    'Create an engaging platform that motivates users to adopt eco-friendly habits while building an active sustainability community.',

  architectureDiagram:
    'React → Express API → MongoDB → JWT Authentication',

  coreFeatures: [
    'Authentication',
    'Carbon Tracking',
    'Community Dashboard',
    'Leaderboard',
    'Challenges',
  ],

  lessonsLearned: [
    'MongoDB aggregation pipelines.',
    'Designing scalable REST APIs.',
    'Performance optimization in React applications.',
  ],

  liveUrl: 'https://your-demo.com',

  githubUrl: 'https://github.com/yourrepo',
},
{
  slug: 'ratemytutor',

  title: 'RateMyTutor',

  subtitle: 'Smart Tutor Booking & Learning Platform',

  category: 'Educational Platform',

  description:
    'A modern tutor marketplace where students can discover, book, review, and learn from verified tutors.',

  longDescription:
    'RateMyTutor is a full-stack educational platform that connects students with qualified tutors. Students can browse tutor profiles, compare ratings, book sessions, make secure online payments, and leave reviews after each class. Tutors can manage their schedules, monitor bookings, and communicate with students through an intuitive dashboard.',

  role: 'Full Stack Developer',

  duration: '3 Weeks',

  team: 'Solo',

  status: 'Completed',

  featured: false,

  thumbnail: '/images/projects/project2.png',

  gallery: [
    '/images/projects/project1.png',
    '/images/projects/project2.png',
    '/images/projects/project3.png',
  ],

  techStack: [
    'Next.js',
    'TypeScript',
    'Prisma ORM',
    'PostgreSQL',
    'Stripe',
    'Tailwind CSS',
    'NextAuth',
  ],

  features: [
    'Tutor Discovery',
    'Advanced Search & Filters',
    'Booking Management',
    'Online Payment',
    'Ratings & Reviews',
  ],

  challenges: [
    'Managing tutor availability and booking conflicts.',
    'Integrating secure online payments.',
    'Designing a scalable review and rating system.',
  ],

  futureImprovements: [
    'Live Video Classes',
    'AI Tutor Recommendation',
    'Assignment Management',
    'Student Progress Tracking',
  ],

  problemStatement:
    'Students often struggle to find trustworthy tutors and manage bookings efficiently through traditional methods.',

  businessGoal:
    'Build a reliable online tutoring marketplace that simplifies tutor discovery, scheduling, and secure payments.',

  architectureDiagram:
    'Next.js → API Routes → Prisma ORM → PostgreSQL → Stripe',

  coreFeatures: [
    'Authentication',
    'Tutor Profiles',
    'Booking System',
    'Payment Gateway',
    'Student Dashboard',
  ],

  lessonsLearned: [
    'Building scalable booking systems.',
    'Integrating Stripe payment workflows.',
    'Optimizing relational database queries with Prisma.',
  ],

  liveUrl: 'https://your-demo.com',

  githubUrl: 'https://github.com/yourrepo',
},
{
  slug: 'invoicesync',

  title: 'InvoiceSync',

  subtitle: 'Smart Invoice & Business Management Platform',

  category: 'SaaS / Financial Utility',

  description:
    'A modern SaaS platform that helps freelancers and businesses create invoices, track payments, manage clients, and automate billing workflows.',

  longDescription:
    'InvoiceSync is a comprehensive invoice and client management platform built for freelancers, agencies, and small businesses. Users can generate professional invoices, manage customers, track payment statuses, receive automated payment reminders, analyze revenue through interactive dashboards, and simplify financial workflows using automation. The platform focuses on improving productivity while reducing manual accounting tasks.',

  role: 'Full Stack Developer',

  duration: '3 Weeks',

  team: 'Solo',

  status: 'Completed',

  featured: false,

  thumbnail: '/images/projects/project4.png',

  gallery: [
    '/images/projects/project1.png',
    '/images/projects/project2.png',
    '/images/projects/project3.png',
  ],

  techStack: [
    'Next.js',
    'TypeScript',
    'Prisma ORM',
    'PostgreSQL',
    'Tailwind CSS',
    'Stripe',
    'Zod',
  ],

  features: [
    'Invoice Generator',
    'Client Management',
    'Payment Tracking',
    'Automated Email Reminders',
    'Revenue Dashboard',
  ],

  challenges: [
    'Designing a scalable invoice numbering system.',
    'Building recurring invoice automation.',
    'Managing secure payment workflows.',
  ],

  futureImprovements: [
    'Multi-Currency Support',
    'Subscription Billing',
    'Mobile Application',
    'Accounting Software Integration',
  ],

  problemStatement:
    'Freelancers and small businesses often rely on spreadsheets and manual processes to manage invoices, making payment tracking inefficient and error-prone.',

  businessGoal:
    'Develop a modern SaaS platform that simplifies invoicing, automates payment reminders, and provides businesses with better financial visibility.',

  architectureDiagram:
    'Next.js → API Routes → Prisma ORM → PostgreSQL → Stripe',

  coreFeatures: [
    'Authentication',
    'Invoice Management',
    'Client Dashboard',
    'Payment Processing',
    'Business Analytics',
  ],

  lessonsLearned: [
    'Designing scalable financial database models.',
    'Integrating secure payment gateways.',
    'Building reusable dashboard components.',
  ],

  liveUrl: 'https://your-demo.com',

  githubUrl: 'https://github.com/yourrepo',
},
];
