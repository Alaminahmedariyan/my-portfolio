import { Project, Skill, Education, Experience, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Alamin Ahmed',
  title: 'Full Stack Developer & AI Automation Engineer',

  description:
    'I build modern, scalable web applications and AI-powered automation systems using Next.js, Node.js, TypeScript, Prisma, PostgreSQL, and n8n.',

  url: 'https://alaminahmed.dev',
  ogImage: '/images/og.png',

  profileImage: '/profile.png',
  profileImage2: '/profile2.png',
  resume: '/resume.pdf',

  location: 'Sherpur, Mymensingh, Bangladesh',
  availability: 'Available for Freelance',

  links: {
    github: 'https://github.com/Alaminahmedariyan',
    linkedin: 'https://www.linkedin.com/in/alamin-ahmed-536463382',
    email: 'alaminahmedariyan2022@gmail.com',
  },

  heroStats: [
    {
      value: '4+',
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
  { name: 'JavaScript', iconName: 'javascript', category: 'Frontend' },
  { name: 'TypeScript', iconName: 'typescript', category: 'Frontend' },
  { name: 'React', iconName: 'react', category: 'Frontend' },
  { name: 'Next.js', iconName: 'nextjs', category: 'Frontend' },
  { name: 'Tailwind CSS', iconName: 'tailwind', category: 'Frontend' },
  { name: 'Redux', iconName: 'redux', category: 'Frontend' },
  { name: 'TanStack Query', iconName: 'query', category: 'Frontend' },

  // Backend
  { name: 'Node.js', iconName: 'nodejs', category: 'Backend' },
  { name: 'Express.js', iconName: 'express', category: 'Backend' },
  { name: 'Prisma ORM', iconName: 'prisma', category: 'Backend' },
  { name: 'Socket.io', iconName: 'socket', category: 'Backend' },

  // Database
  { name: 'PostgreSQL', iconName: 'postgresql', category: 'Database' },
  { name: 'MongoDB', iconName: 'mongodb', category: 'Database' },

  // AI
  { name: 'OpenAI', iconName: 'openai', category: 'AI' },
  { name: 'LangChain', iconName: 'langchain', category: 'AI' },
  { name: 'LangFlow', iconName: 'langflow', category: 'AI' },
  { name: 'n8n', iconName: 'n8n', category: 'AI' },
  { name: 'Prompt Engineering', iconName: 'prompt', category: 'AI' },

  // DevOps
  { name: 'Docker', iconName: 'docker', category: 'DevOps' },
  { name: 'Git', iconName: 'git', category: 'DevOps' },
  { name: 'GitHub', iconName: 'github', category: 'DevOps' },
  { name: 'Linux', iconName: 'linux', category: 'DevOps' },
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
  // ───────────────────────── 1. EVALORA ─────────────────────────
  {
    slug: 'evalora',

    title: 'Evalora',

    subtitle: 'Developer Assessment & Hiring Platform',

    category: 'Full Stack SaaS',

    description:
      'A full-featured developer assessment platform where recruiters build coding assessments, invite candidates, and review results, ranks and proctoring signals in one place.',

    longDescription:
      'Evalora is a multi-tenant SaaS for technical hiring. Recruiters create assessments from a problem bank of MCQ, coding and written questions, invite candidates by email, and review results through a grading queue, a live leaderboard and proctoring timelines. Candidates take timed attempts with autosave, and the platform covers plans with Stripe checkout, two-factor auth, Google/GitHub sign-in, an admin panel and a public marketing site with a Markdown blog.',

    purpose:
      'Help companies hire developers faster by running, grading and ranking technical assessments in one platform.',

    problemsSolved: [
      {
        problem: 'Recruiters waste time manually screening and comparing candidates.',
        solution:
          'Auto-graded MCQs, a grading queue for coding/written answers, and a live leaderboard with one-click rank computation.',
      },
      {
        problem: 'Remote assessments are hard to trust.',
        solution:
          'Proctoring signals (tab switches, focus loss, full-screen exits, copy/paste) are recorded and shown on a timeline for human review.',
      },
      {
        problem: "One company must never see another company's data.",
        solution:
          "Multi-tenant design: every recruiter query is scoped to the company, and other companies' data returns 404.",
      },
      {
        problem: 'Double clicks or retries can create duplicate invitations, attempts or payments.',
        solution: 'Idempotency keys protect invitations, attempt start/submit and checkout.',
      },
      {
        problem: 'Running candidate code is a security risk.',
        solution:
          'Coding answers are never executed; reviewers read the code next to the sample test cases.',
      },
      {
        problem: 'Candidates lose progress on connection or tab issues.',
        solution:
          'Timed attempts with autosave, auto-submit on expiry, optional shuffling and forward-only review.',
      },
    ],

    highlights: [
      'Separate Next.js frontend and Express API with 15 backend modules',
      'Role-based access for Admin, Recruiter and Candidate',
      'Stripe checkout with Free / Pro / Enterprise plan limits',
      'Two-factor auth, email OTP, Google and GitHub sign-in',
      'Candidate controls: profile visibility, data export, account deletion',
      'Admin tools: users, companies, payments, audit logs, blog, contact messages',
    ],

    role: 'Full Stack Developer',

    duration: '6+ Weeks',

    team: 'Solo',

    status: 'Completed',

    featured: true,

    thumbnail: '/images/projects/evalora1.png',

    gallery: [
      '/images/projects/evalora2.png',
      '/images/projects/evalora3.png',
      '/images/projects/evalora4.png',
      '/images/projects/evalora5.png',
    ],

    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Better Auth',
      'Zod',
      'shadcn/ui',
      'Express.js',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Stripe',
      'Cloudinary',
    ],

    features: [
      'Problem Bank (MCQ, Coding, Written)',
      'Assessment Builder with Versioning',
      'Email Invitations',
      'Timed Attempts with Autosave',
      'Grading Queue & Auto-graded MCQs',
      'Live Leaderboard & Ranking',
      'Proctoring Timeline',
      'Stripe Plans & Billing',
      'Admin Dashboard & Audit Logs',
      'Markdown Blog with RSS & Sitemap',
    ],

    challenges: [
      'Designing a secure multi-tenant data model',
      'Preventing duplicate actions with idempotency keys',
      'Keeping the session cookie first-party across frontend and API (Next.js rewrites)',
      'Consistent attempt timing, auto-submit and proctoring counts',
    ],

    futureImprovements: [
      'Sandboxed code execution with automated test cases',
      'Automatic subscription renewal',
      'Webcam-based proctoring',
      'AI-assisted grading for written answers',
    ],

    problemStatement:
      'Hiring developers is slow because screening, grading and trusting remote assessments all happen manually across scattered tools.',

    businessGoal:
      'Give recruiters one platform to create assessments, evaluate candidates fairly and rank them quickly.',

    architectureDiagram:
      'Next.js (App Router) → Rewrites /api/v1 → Express API → Prisma → PostgreSQL (+ Redis, Stripe, Cloudinary)',

    coreFeatures: ['Authentication', 'Assessments', 'Attempts', 'Grading', 'Leaderboard', 'Billing'],

    lessonsLearned: [
      'Multi-tenant authorization and data scoping',
      'Idempotent API design',
      'Better Auth with 2FA and OAuth',
      'Stripe checkout and webhook handling',
    ],

    liveUrl: 'https://evalora-client.vercel.app',

    githubUrl: 'https://github.com/yourrepo',
  },

  // ───────────────────────── 2. NEXIVO AI ─────────────────────────
  {
    slug: 'nexivo-ai',

    title: 'Nexivo AI',

    subtitle: 'AI-Powered Agency Management Platform',

    category: 'AI SaaS / Full Stack',

    description:
      'A full-stack SaaS that runs a digital agency end to end: leads, clients, projects, AI proposals, invoices and Stripe payments in one platform.',

    longDescription:
      'Nexivo AI combines CRM, project management, AI workflows, proposals, invoicing and payments into a single agency platform. A Next.js 16 frontend with role-based dashboards (Admin, Team, Client) talks to a modular Express 5 + Prisma + PostgreSQL backend with Better Auth, Stripe checkout and webhooks, Cloudinary file storage and Resend emails. AI conversations and AI proposal generation are first-class modules.',

    purpose:
      'Give digital agencies one platform to take a lead all the way to a paid invoice, with AI helping write proposals and automate work.',

    problemsSolved: [
      {
        problem: 'Agencies juggle separate tools for leads, projects, proposals and invoices.',
        solution:
          'One platform with a connected flow: Lead → Client → Project → Proposal → Invoice → Payment.',
      },
      {
        problem: 'Writing proposals and quotes by hand is slow.',
        solution:
          'AI conversations and AI proposal generation, with a review, edit and accept workflow.',
      },
      {
        problem: 'Clients keep asking for project updates.',
        solution:
          'A client portal showing project progress, milestones, timelines, files, invoices and notifications.',
      },
      {
        problem: 'Payment webhooks can be processed twice and corrupt invoice status.',
        solution:
          'A dedicated Stripe webhook event table with signature verification prevents duplicate processing.',
      },
      {
        problem: 'Different people need different access to sensitive agency data.',
        solution:
          'Role-based access control (Super Admin, Admin, Team Member, Client, User) with activity and audit logs.',
      },
    ],

    highlights: [
      'Frontend and backend built separately, with 18 backend modules covered by a Postman suite',
      'Controller → Service → Prisma architecture with Zod validation on every request',
      'Lead lifecycle: New → Contacted → Quoted → Meeting → Negotiation → Won/Lost',
      'Stripe checkout with verified webhooks',
      'Hashed API keys for service-to-service integrations',
      'Helmet, CORS, rate limiting and soft delete for security',
    ],

    role: 'Full Stack Developer',

    duration: '8+ Weeks',

    team: 'Solo',

    status: 'Completed',

    featured: true,

    thumbnail: '/images/projects/nexivo1.png',

    gallery: [
      '/images/projects/nexivo2.png',
      '/images/projects/nexivo3.png',
      '/images/projects/nexivo4.png',
    ],

    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'TanStack Query',
      'TanStack Table',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Framer Motion',
      'Express.js',
      'Prisma',
      'PostgreSQL',
      'Better Auth',
      'Stripe',
      'Cloudinary',
      'Resend',
    ],

    features: [
      'Lead & CRM Management',
      'Client & Project Management',
      'Milestones, Timelines & Project Files',
      'AI Conversations',
      'AI Proposal Generator',
      'Invoices & Stripe Payments',
      'Notification Center',
      'Activity & Audit Logs',
      'API Key Management',
      'Dark / Light Theme',
    ],

    challenges: [
      'Designing a modular backend with clean Controller → Service → Prisma layers',
      'Handling Stripe webhooks safely without duplicate processing',
      'Role-based UI and permissions across Admin, Team and Client areas',
      'Keeping server state and client state cleanly separated (TanStack Query + Zustand)',
    ],

    futureImprovements: [
      'Real-time notifications',
      'More AI workflow automations',
      'Calendar integration for meetings',
      'Advanced analytics dashboard',
    ],

    problemStatement:
      'Digital agencies lose time and revenue because leads, projects, proposals and invoices live in disconnected tools.',

    businessGoal:
      'Create one AI-powered operating platform for agencies, from the first lead to the final payment.',

    architectureDiagram:
      'Next.js → API Client → Express API (Controller → Service) → Prisma → PostgreSQL (+ Stripe, Cloudinary, Resend, Better Auth)',

    coreFeatures: ['Authentication', 'Leads', 'Projects', 'AI Proposals', 'Invoices', 'Payments'],

    lessonsLearned: [
      'Designing a modular, scalable REST API',
      'Stripe checkout and webhook idempotency',
      'Role-based authorization end to end',
      'Structuring a large Next.js app with hooks, query and API layers',
    ],

    liveUrl: 'https://nexivo-ai-frontend.vercel.app',

    githubUrl: 'https://github.com/Alaminahmedariyan/nexivo-ai-frontend',
  },

  // ───────────────────────── 3. GEARUP ─────────────────────────
  {
    slug: 'gearup',

    title: 'GearUp',

    subtitle: 'Gear Rental Marketplace',

    category: 'Marketplace / Full Stack',

    description:
      'A gear and equipment rental marketplace where customers rent gear, providers manage inventory, and admins moderate the platform.',

    longDescription:
      'GearUp is a full-stack rental marketplace built with Next.js 16 (App Router). Customers browse and filter gear, place rental orders, pay online and leave reviews. Providers list and manage their gear and handle rental requests. Admins manage users, categories, gear moderation, rentals and payments. It supports JWT authentication with refresh tokens, Google OAuth, and payments through Stripe and SSLCommerz.',

    purpose:
      'Let people rent gear instead of buying it, while giving providers a simple way to earn from their equipment.',

    problemsSolved: [
      {
        problem: 'Buying expensive gear for a short-term need is wasteful.',
        solution: 'A marketplace to browse, filter and rent gear with a clear booking flow.',
      },
      {
        problem: 'Gear owners have no easy way to list and manage their inventory.',
        solution:
          'A provider dashboard to add, edit and manage gear listings and fulfil rental requests.',
      },
      {
        problem: 'Marketplaces need quality control.',
        solution: 'Admin tools to moderate gear, manage categories and users, and review all payments.',
      },
      {
        problem: 'Users in different regions prefer different payment methods.',
        solution: 'Both Stripe and SSLCommerz payment options.',
      },
    ],

    highlights: [
      'Three roles with separate dashboards: Customer, Provider and Admin',
      'JWT access and refresh tokens with Google OAuth',
      'Stripe and SSLCommerz payments with success and cancel flows',
      'Gear browsing with filters, detail pages and reviews',
      'Light and dark theme with Tailwind CSS 4 and shadcn/ui',
    ],

    role: 'Full Stack Developer',

    duration: '4+ Weeks',

    team: 'Solo',

    status: 'Completed',

    featured: true,

    thumbnail: '/images/projects/gearup1.png',

    gallery: [
      '/images/projects/gearup2.png',
      '/images/projects/gearup3.png',
      '/images/projects/gearup4.png',
    ],

    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'JWT',
      'Google OAuth',
      'Stripe',
      'SSLCommerz',
    ],

    features: [
      'Gear Browsing with Filters',
      'Gear Details & Booking',
      'Rental Orders',
      'Online Payments (Stripe & SSLCommerz)',
      'Reviews & Ratings',
      'Provider Gear Management',
      'Admin Moderation & Categories',
      'Role-based Dashboards',
      'Google Sign-in',
      'Profile & Theme Settings',
    ],

    challenges: [
      'Building three role-based dashboards in one app',
      'Integrating two payment gateways with success and cancel flows',
      'Handling JWT access and refresh token authentication',
      'Fixing login, registration and password-reset flow bugs across frontend and backend',
    ],

    futureImprovements: [
      'Real-time availability calendar',
      'Chat between customer and provider',
      'Gear damage and deposit management',
      'Mobile application',
    ],

    problemStatement:
      'People need gear only occasionally, and owners have no simple, trusted way to rent it out.',

    businessGoal:
      'Build a rental marketplace that connects gear owners with renters and handles orders, payments and reviews.',

    architectureDiagram:
      'Next.js (App Router) → REST API → Database (+ Stripe, SSLCommerz, Google OAuth)',

    coreFeatures: ['Authentication', 'Gear Listings', 'Rentals', 'Payments', 'Reviews', 'Admin Panel'],

    lessonsLearned: [
      'Role-based routing and dashboards',
      'Integrating multiple payment gateways',
      'JWT refresh token flow',
      'Structuring a large App Router project',
    ],

    liveUrl: 'https://b-assignment-5-client.vercel.app',

    githubUrl: 'https://github.com/Alaminahmedariyan/b-assignment-5-client',
  },

  // ───────────────────────── 4. SAS MARKETING SOLUTIONS ─────────────────────────
  {
    slug: 'sas-marketing-solutions',

    title: 'SAS Marketing Solutions',

    subtitle: 'Marketing Agency Website',

    category: 'Business Website',

    description:
      'A modern, responsive marketing agency website built with Next.js, focused on presenting services and generating client enquiries.',

    longDescription:
      'SAS Marketing Solutions is a responsive business website built with Next.js, React, TypeScript, Tailwind CSS and shadcn/ui. It presents the agency, its services and its work in a clean, fast-loading interface designed to turn visitors into enquiries.',

    purpose:
      'Give a marketing agency a professional online presence that builds trust and brings in client enquiries.',

    problemsSolved: [
      {
        problem: 'Small agencies lose clients without a credible online presence.',
        solution: 'A clean, fast and fully responsive website that presents services clearly.',
      },
      {
        problem: 'Visitors leave if the site is slow or hard to use on mobile.',
        solution: 'Next.js App Router and Tailwind CSS give fast loads and a mobile-first layout.',
      },
    ],

    highlights: [
      'Built with Next.js, React and TypeScript',
      'Responsive design with Tailwind CSS and shadcn/ui',
      'Deployed on Vercel',
    ],

    role: 'Full Stack Developer',

    duration: '2 Weeks',

    team: 'Solo',

    status: 'Completed',

    featured: false,

    thumbnail: '/images/projects/sas1.png',

    gallery: [
      '/images/projects/sas2.png',
      '/images/projects/sas3.png',
    ],

    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],

    features: [
      'Responsive Layout',
      'Services Showcase',
      'Contact / Enquiry Section',
      'SEO Friendly Pages',
    ],

    challenges: [
      'Designing a clean layout that works from mobile to desktop',
      'Keeping pages fast with the Next.js App Router',
    ],

    futureImprovements: [
      'Blog and case studies',
      'CMS integration',
      'Analytics and lead tracking',
    ],

    problemStatement:
      'Marketing businesses need a credible, fast website to win clients online.',

    businessGoal:
      'Deliver a professional website that presents the agency well and drives enquiries.',

    architectureDiagram: 'Next.js (App Router) → Tailwind CSS + shadcn/ui → Vercel',

    coreFeatures: ['Landing Page', 'Services', 'Contact', 'Responsive UI'],

    lessonsLearned: [
      'Building clean marketing layouts with Tailwind CSS 4',
      'Deploying and tuning a Next.js site on Vercel',
    ],

    liveUrl: 'https://sas-marketing-solutions.vercel.app',

    githubUrl: 'https://github.com/yourrepo',
  },
];