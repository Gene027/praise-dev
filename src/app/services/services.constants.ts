export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  id: number;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Backend Development",
    shortDescription: "Scalable APIs & microservices architecture",
    description:
      "I build robust, secure, and scalable backend systems that power your applications. From RESTful APIs to complex microservices architectures, I deliver solutions that handle high traffic and grow with your business.",
    image: "/services/service-backend.png",
    features: [
      "RESTful & GraphQL API design",
      "Microservices architecture",
      "Database design & optimization",
      "Real-time WebSocket systems",
      "Authentication & authorization",
      "Message queues & event-driven systems",
    ],
    technologies: ["Node.js", "NestJS", "Express", "PostgreSQL", "Redis", "RabbitMQ"],
    icon: "server",
  },
  {
    id: 2,
    title: "Frontend Development",
    shortDescription: "Modern, responsive web applications",
    description:
      "I create beautiful, performant, and user-friendly web applications using modern frameworks. Every interface is crafted with attention to UX, accessibility, and responsiveness across all devices.",
    image: "/services/service-frontend.png",
    features: [
      "React & Next.js applications",
      "Responsive design systems",
      "State management solutions",
      "Performance optimization",
      "SEO-friendly architecture",
      "Admin dashboards & portals",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Query"],
    icon: "layout",
  },
  {
    id: 3,
    title: "Mobile App Development",
    shortDescription: "Cross-platform iOS & Android apps",
    description:
      "I develop high-quality mobile applications that work seamlessly on both iOS and Android. Using React Native and Expo, I deliver native-like experiences with efficient development cycles.",
    image: "/services/service-mobile.png",
    features: [
      "Cross-platform development",
      "Native-like performance",
      "Offline-first capabilities",
      "Push notifications",
      "App store deployment",
      "Deep linking & navigation",
    ],
    technologies: ["React Native", "Expo", "NativeWind", "React Navigation", "Axios"],
    icon: "smartphone",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    shortDescription: "AWS infrastructure & CI/CD pipelines",
    description:
      "I design and implement cloud infrastructure that's secure, scalable, and cost-effective. From containerization to automated deployments, I ensure your applications run smoothly in production.",
    image: "/services/service-cloud.png",
    features: [
      "AWS infrastructure setup",
      "Docker containerization",
      "CI/CD pipeline automation",
      "Server monitoring & logging",
      "Security best practices",
      "Performance optimization",
    ],
    technologies: ["AWS", "Docker", "GitHub Actions", "PM2", "Nginx", "Linux"],
    icon: "cloud",
  },
  {
    id: 5,
    title: "Payment Integration",
    shortDescription: "Secure payment processing systems",
    description:
      "I integrate robust payment solutions that handle transactions securely and reliably. From local African payment providers to global platforms, I ensure smooth checkout experiences.",
    image: "/services/service-payments.png",
    features: [
      "Stripe & Paystack integration",
      "Subscription billing systems",
      "Webhook handling",
      "Multi-currency support",
      "Payment reconciliation",
      "Fraud prevention measures",
    ],
    technologies: ["Stripe", "Paystack", "Webhooks", "Node.js", "PostgreSQL"],
    icon: "creditCard",
  },
  {
    id: 6,
    title: "API & System Integration",
    shortDescription: "Connect systems & third-party services",
    description:
      "I design and build APIs that integrate seamlessly with external services and internal systems. Whether it's connecting microservices or integrating third-party APIs, I ensure reliable data flow.",
    image: "/services/service-api.png",
    features: [
      "API design & documentation",
      "Third-party API integration",
      "Microservices communication",
      "Data synchronization",
      "Webhook implementations",
      "Rate limiting & security",
    ],
    technologies: ["REST", "GraphQL", "Swagger", "RabbitMQ", "WebSockets"],
    icon: "link",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We start with understanding your business goals, technical requirements, and user needs through detailed discussions.",
    icon: "search",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "I create a detailed technical roadmap, architecture design, and project timeline tailored to your requirements.",
    icon: "clipboard",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Building your solution with clean, maintainable code following best practices and regular progress updates.",
    icon: "code",
  },
  {
    id: 4,
    title: "Testing",
    description:
      "Rigorous testing to ensure reliability, security, and performance before deployment.",
    icon: "checkCircle",
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "Smooth deployment to production with proper CI/CD pipelines and monitoring setup.",
    icon: "rocket",
  },
  {
    id: 6,
    title: "Support",
    description:
      "Ongoing maintenance, updates, and support to keep your application running optimally.",
    icon: "headphones",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Consultation",
    description: "Perfect for getting expert advice on your project",
    features: [
      "1-hour video consultation",
      "Technical assessment",
      "Architecture recommendations",
      "Technology stack advice",
      "Written summary report",
    ],
  },
  {
    id: 2,
    name: "Project-Based",
    description: "Ideal for defined projects with clear scope",
    features: [
      "Full project development",
      "Custom architecture design",
      "Source code ownership",
      "Documentation included",
      "30-day post-launch support",
      "Regular progress updates",
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Retainer",
    description: "Best for ongoing development needs",
    features: [
      "Dedicated monthly hours",
      "Priority support",
      "Flexible task allocation",
      "Regular check-ins",
      "Discounted hourly rate",
      "Long-term partnership",
    ],
  },
];

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
  { value: "7+", label: "Years Experience" },
];
