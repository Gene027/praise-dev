export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    company: "Choplife Gaming",
    location: "Kigali City, Rwanda",
    period: "Apr 2025 – Present",
    highlights: [
      "Built an affiliate + referral growth system used across 5 regions (Uganda, Côte d'Ivoire, Sierra Leone, Gambia, Botswana)",
      "Designed the core referral lifecycle with idempotent processing to prevent duplicate rewards",
      "Implemented back-office/admin dashboard for KYC operations, casino/tournament management, and risk & compliance",
      "Worked in a microservices architecture (~25 services), improving reliability via clear API contracts",
    ],
    technologies: ["Node.js", "NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS"],
  },
  {
    id: 2,
    role: "Software Engineer (Mid-Level Full-Stack)",
    company: "Eze Wholesale",
    location: "San Francisco, CA, USA",
    period: "Aug 2023 – Mar 2025",
    highlights: [
      "Built automated data extraction and competitive pricing intelligence pipelines with Puppeteer.js",
      "Delivered internal wholesale/enterprise dashboards using React/Next.js with NestJS APIs",
      "Improved core shopping experience with enhanced product search and categorization",
      "Implemented lifecycle email marketing flows and integrated Crisp for support automation",
    ],
    technologies: ["React", "Next.js", "NestJS", "Puppeteer", "PostgreSQL", "Courier"],
  },
  {
    id: 3,
    role: "Software Engineer (Mid-Level Full-Stack)",
    company: "e-Limu World",
    location: "Nairobi, Kenya",
    period: "Nov 2021 – Jul 2023",
    highlights: [
      "Implemented Paystack payments for international transactions with secure checkout flows",
      "Instrumented product analytics with Mixpanel and optimized API/data-layer performance",
      "Built a scheduling subsystem for daily learning activities with resilient job execution",
    ],
    technologies: ["Node.js", "React", "Paystack", "Mixpanel", "PostgreSQL", "Redis"],
  },
  {
    id: 4,
    role: "Junior Full-Stack Engineer",
    company: "Cartolinks Solution Limited",
    location: "Lagos, Nigeria",
    period: "Jan 2019 – Nov 2021",
    highlights: [
      "Architected secure revenue generation/e-commerce solution using Medusa.js",
      "Built multi-currency crypto payment platform (BTC, LTC, ALGO, USDT, TRON, SOL)",
      "Implemented real-time notifications using WebSockets",
      "Containerized services with Docker and supported AWS deployments",
    ],
    technologies: ["Node.js", "Medusa.js", "WebSockets", "Docker", "AWS", "Blockchain"],
  },
];

export const projects: Project[] = [
  {
    id: 2,
    title: "TeamBoard",
    description: "Internal project planning app with projects, tasks, workflow stages, comments, role-based project users, and task assignment.",
    image: "/portfolio/teamboard.png",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "RBAC"],
    link: "https://team-board-rosy-seven.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "e-Limu Learning Platform",
    description: "EdTech platform with Paystack payments, scheduling subsystem, and product analytics integration.",
    image: "/portfolio/elimu.png",
    technologies: ["React", "Node.js", "Paystack", "Mixpanel"],
    link: "https://app.e-limu.org/",
    featured: true,
  },
  {
    id: 5,
    title: "Kidapay Cryptocurrency Platform",
    description: "Cryptocurrency payment platform supporting BTC, LTC, ALGO, USDT, TRON, SOL with automated reconciliation.",
    image: "/portfolio/crypto.png",
    technologies: ["Node.js", "WebSockets", "Blockchain", "PostgreSQL"],
    link: "https://www.kidapay.com/",
    featured: true,
  },
  {
    id: 1,
    title: "Ontop",
    description: "Mobile-first services marketplace with API-driven discovery, geo-location search, and microservices backend supporting payments and trust.",
    image: "/portfolio/ontop.png",
    technologies: ["React Native", "Expo", "NestJS", "AWS EC2", "PM2", "GitHub Actions"],
    featured: false,
  },
  {
    id: 3,
    title: "Choplife Gaming Platform",
    description: "Multi-region gaming platform with affiliate system, KYC operations, and tournament management across 5 African countries.",
    image: "/portfolio/choplife.png",
    technologies: ["NestJS", "React", "PostgreSQL", "RabbitMQ", "Redis"],
    link: "https://www.chopwin.gm/",
    featured: true,
  },
  {
    id: 4,
    title: "Eze Wholesale Dashboard",
    description: "Enterprise wholesale platform with competitive pricing intelligence, inventory management, and customer operations.",
    image: "/portfolio/eze.png",
    technologies: ["Next.js", "NestJS", "Puppeteer", "PostgreSQL"],
    link: "https://www.ezewholesale.com/",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "WebSockets", "Microservices", "TypeORM", "Swagger/OpenAPI"],
  },
  {
    id: 2,
    title: "Frontend",
    icon: "layout",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Query", "Redux"],
  },
  {
    id: 3,
    title: "Mobile",
    icon: "smartphone",
    skills: ["React Native", "Expo", "expo-router", "NativeWind", "Axios"],
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS (EC2, S3, IAM)", "Docker", "GitHub Actions", "CI/CD", "PM2", "Secrets Manager"],
  },
  {
    id: 5,
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "RabbitMQ/AMQP"],
  },
  {
    id: 6,
    title: "Security & Payments",
    icon: "shield",
    skills: ["JWT", "Passport", "RBAC", "Stripe", "Paystack", "Webhooks"],
  },
];

export const stats = [
  { label: "Years Experience", value: "7+" },
  { label: "Projects Delivered", value: "25+" },
  { label: "Companies Served", value: "10+" },
  { label: "Countries Reached", value: "8+" },
];
