export const profile = {
  name: 'Muhammad Hassan Khan',
  shortName: 'Hassan Khan',
  role: 'Software Engineer',
  location: 'Karachi, Pakistan',
  email: 'hassankpisces@gmail.com',
  phone: '+92 321 8147330',
  github: 'https://github.com/Hassan-Khan16',
  linkedin: 'https://linkedin.com/in/hassan-khan-81b832193',
  summary:
    'Software Engineer with 2+ years of experience building thoughtful, production-ready full-stack web applications with Laravel, Next.js, React, NestJS, and modern relational databases.',
}

export const navItems = ['about', 'skills', 'experience', 'projects', 'contact'] as const

export const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '5', label: 'Production platforms' },
  { value: '28', label: 'Public repositories' },
]

export const skillGroups = [
  { title: 'Languages', items: ['PHP', 'JavaScript', 'TypeScript', 'C#', 'Python', 'SQL'] },
  { title: 'Frameworks', items: ['Laravel', 'Next.js', 'React', 'NestJS', 'ASP.NET MVC', 'Inertia.js'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQL Server'] },
  { title: 'Tools & Platforms', items: ['Git', 'Stripe', 'REST APIs', 'Jira', 'Spatie Permission', 'Tiptap Editor'] },
]

export const experience = [
  {
    company: 'V2F Solutions',
    role: 'Software Engineer',
    period: 'Jul 2024 — Present',
    description:
      'Developing full-stack production applications across Laravel, Next.js, React, and MySQL.',
    highlights: [
      'Build reliable REST APIs, Stripe integrations, and role-based product features.',
      'Deliver end-to-end functionality across frontend, backend, and database layers.',
      'Ship nutrition, education, accreditation, and operations platforms used in production.',
    ],
  },
  {
    company: 'SoftFit Technologies',
    role: 'ASP.NET Intern',
    period: 'Aug 2023 — Oct 2023',
    description:
      'Developed ASP.NET MVC applications and strengthened existing product experiences.',
    highlights: [
      'Implemented CRUD workflows and database-backed functionality.',
      'Resolved bugs and improved interface consistency across applications.',
    ],
  },
]

export type Project = {
  slug: string
  name: string
  type: string
  description: string
  tags: string[]
  url?: string
  featured: boolean
  role: string
  company: string
  overview: string
  contributions: string[]
}

export const projects: Project[] = [
  {
    slug: 'wellsnax',
    name: 'Wellsnax',
    type: 'Nutrition platform',
    description:
      'A role-based nutrition platform with meal planning, dashboards, curriculum management, and secure subscription flows.',
    tags: ['Laravel', 'Next.js', 'React', 'MySQL', 'Stripe'],
    url: 'https://wellsnax.vercel.app',
    featured: true,
    role: 'Software Engineer',
    company: 'V2F Solutions',
    overview:
      'Wellsnax is a production nutrition product where coaches, learners, and administrators work in one role-based system. My work sat across Laravel APIs, Next.js/React surfaces, MySQL data, and Stripe billing.',
    contributions: [
      'Implemented meal planning, dashboards, and curriculum management for day-to-day program delivery.',
      'Built secure role-based access so each user type only sees the workflows they need.',
      'Integrated Stripe for subscription and payment flows in production.',
      'Shipped REST APIs and frontend features that keep planning, content, and billing in sync.',
    ],
  },
  {
    slug: 'adapt',
    name: 'Adapt',
    type: 'Accreditation platform',
    description:
      'A national accreditation platform powered by structured REST APIs and secure role-based experiences.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'REST APIs'],
    url: 'https://adapt.naymatcollateral.com',
    featured: true,
    role: 'Software Engineer',
    company: 'V2F Solutions',
    overview:
      'Adapt supports national accreditation workflows with structured APIs and role-aware product surfaces. I contributed backend services in NestJS and frontend work in Next.js on PostgreSQL.',
    contributions: [
      'Developed REST APIs that model accreditation processes and institutional workflows.',
      'Implemented role-based features so reviewers, institutions, and admins can work from one platform.',
      'Helped shape secure, production-ready flows on a live national product.',
    ],
  },
  {
    slug: 'elevare',
    name: 'Elevare',
    type: 'Education platform',
    description:
      'A multi-tenant education platform featuring RBAC, workflow automation, and a scalable API architecture.',
    tags: ['Laravel', 'Next.js', 'MySQL', 'REST APIs'],
    url: 'https://elevare.tuscanpartners.com',
    featured: true,
    role: 'Software Engineer',
    company: 'V2F Solutions',
    overview:
      'Elevare is a multi-tenant education platform. I worked on REST APIs, RBAC, and workflow automation so institutions can operate independently inside one Laravel and Next.js system.',
    contributions: [
      'Developed REST APIs that support tenant-aware education workflows.',
      'Implemented RBAC so permissions stay consistent across tenants and roles.',
      'Built workflow automation that reduces manual coordination in the product.',
    ],
  },
  {
    slug: 'project-tracker',
    name: 'Project Tracker',
    type: 'Project operations',
    description:
      'An integrated management product bringing CRM, sprint planning, finance, and reporting into one workspace.',
    tags: ['Laravel', 'Next.js', 'CRM'],
    url: 'https://skysync.productsdemo.co',
    featured: false,
    role: 'Software Engineer',
    company: 'V2F Solutions',
    overview:
      'Project Tracker (SkySync) is a project operations platform. I am contributing CRM, sprint, finance, and reporting modules so delivery, clients, and numbers live in one Laravel and Next.js workspace.',
    contributions: [
      'Implementing CRM modules for client and pipeline tracking.',
      'Building sprint and delivery workflows for ongoing project work.',
      'Adding finance and reporting surfaces that turn operational data into usable insight.',
    ],
  },
  {
    slug: 'rich',
    name: 'RICH',
    type: 'Accident reporting',
    description:
      'A configurable accident reporting platform with map-based questionnaires and admin-managed workflows.',
    tags: ['Laravel', 'MySQL', 'JavaScript', 'Maps'],
    featured: false,
    role: 'Software Engineer',
    company: 'V2F Solutions',
    overview:
      'RICH is an accident reporting platform. I contributed Laravel, MySQL, and JavaScript work around map-based questionnaires and admin-managed configurable workflows.',
    contributions: [
      'Implemented map-based dynamic questionnaires so reports adapt to location and context.',
      'Built admin-managed configurable workflows instead of hard-coded report paths.',
      'Helped shape a production reporting experience that non-technical admins can evolve.',
    ],
  },
]

export const passionProjects = [
  {
    name: 'KJobs Frontend',
    description: 'The client for a job-discovery product I am building as a passion project.',
    language: 'Frontend',
    url: 'https://github.com/Hassan-Khan16/kjobs-frontend',
  },
  {
    name: 'KJobs Backend',
    description: 'API and server for KJobs, pairing with the frontend to power listings and workflows.',
    language: 'Backend',
    url: 'https://github.com/Hassan-Khan16/kjobs-backend',
  },
  {
    name: 'Smart Farm Water Irrigation AI Model and Server on Python',
    description: 'Final-year project module for PEC: an AI model and Python server for smart farm water irrigation.',
    language: 'Python · FYP',
    url: 'https://github.com/Hassan-Khan16/python-farm-app-v2',
  },
  {
    name: 'React Tenzies',
    description: 'A polished browser implementation of the classic dice game.',
    language: 'React',
    url: 'https://github.com/Hassan-Khan16/react-app-tenzies',
  },
  {
    name: 'Meme Generator',
    description: 'An interactive React app for creating shareable custom memes.',
    language: 'React',
    url: 'https://github.com/Hassan-Khan16/react-app-meme-generator',
  },
]

export const education = {
  degree: 'Bachelor of Software Engineering',
  institution: 'Bahria University Karachi',
  period: '2020 — 2024',
}

export const certifications = [
  {
    name: 'Get the most out of Jira',
    issuer: 'Atlassian',
    date: 'Credential ID 351923122',
    skills: 'Jira',
  },
  {
    name: 'Build a Full Website using WordPress',
    issuer: 'Coursera Project Network',
    date: 'September 2023',
    skills: 'WordPress',
    url: 'https://www.coursera.org/account/accomplishments/verify/VCLHWFUCZDXX',
  },
  {
    name: 'HTML, CSS, and JavaScript for Web Developers',
    issuer: 'Coursera',
    date: 'September 2023',
    skills: 'JavaScript, HTML, CSS',
    url: 'https://www.coursera.org/account/accomplishments/verify/5MV3QPRZU98J',
  },
  {
    name: 'Introduction to C# Programming and Unity',
    issuer: 'Coursera',
    date: 'October 2022',
    skills: 'C#, Unity',
    url: 'https://www.coursera.org/account/accomplishments/verify/QVH2SSLWY4C9',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
