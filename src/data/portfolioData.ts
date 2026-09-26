import { Project, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "KALKIDAN TADESSE",
  fullName: "Kalkidan Tadesse",
  title: "Full-Stack Developer & UI/UX Designer",
  tagline: "Designing, building structures, and turning ideas into simple, intuitive, and impactful digital experiences.",
  location: "Addis Ababa, Ethiopia · Open to Work",
  availability: "Available for select projects",
  email: "tadessekalkidan05@gmail.com",
  phone: "+251 900 000 000",
  website: "kalkidantadesse.dev",
  socials: [
    { name: "Telegram", url: "https://t.me/VERSPRECHIN", handle: "t.me/VERSPRECHIN" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kalkidan-tadesse-837a0b248?utm_source=share_via&utm_content=profile&utm_medium=member_android", handle: "kalkidan-tadesse" },
    { name: "Instagram", url: "https://instagram.com/kalkidan_.tadesse", handle: "kalkidan_.tadesse" },
    { name: "GitHub", url: "https://github.com/soplh", handle: "github.com/soplh" },
  ],
  bioParagraphs: [
    "Hi, I am Kalkidan Tadesse. I am a person who is interested in imagination and bringing the works I imagine in my mind to life. I am passionate about designing, building structures, getting things done, and staying organized. I focus on the little details that most people tend to overlook.",
    "I am driven to create from the heart and I am always ready to learn and continuously upgrade myself. I have worked as a full-stack developer with a stronger focus on the frontend, building user interfaces that are both functional and visually engaging, and I am also passionate about UI/UX design and graphic design.",
    "I prioritize clear communication and strive to effectively transfer the intended message to the audience through the work I create. My goal is to turn ideas into meaningful digital experiences that are simple, intuitive, and impactful."
  ],
  stats: [
    { label: "Core Roles", value: "Full-Stack" },
    { label: "Primary Focus", value: "Frontend" },
    { label: "Design Discipline", value: "UI/UX" },
    { label: "System Design", value: "Architecture" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Product & Interface Design",
    items: [
      "User Experience Strategy",
      "Interactive Prototyping",
      "Design Systems & Tokens",
      "Information Architecture",
      "Typography & Micro-interactions",
      "Responsive Layout Systems"
    ]
  },
  {
    category: "Frontend Engineering",
    items: [
      "React 19 & TypeScript",
      "Tailwind CSS Architecture",
      "Next.js & Vite Tooling",
      "State Machines & Performance",
      "Web Accessibility (WCAG AA)",
      "Motion & Compositor Animation"
    ]
  },
  {
    category: "Methods & Tooling",
    items: [
      "Figma & Tokens Studio",
      "Git / CI/CD Workflows",
      "Component Testing",
      "User Testing & Analytics",
      "Design-to-Code Translation",
      "Performance Auditing"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cims-eiar",
    title: "Chemical Inventory Management System (CIMS)",
    category: "Fullstack Dev",
    client: "Ethiopian Institute of Agricultural Research (EIAR) via Kukunet Digital",
    year: "2026",
    shortDesc: "A full-stack web application developed for the Agricultural Quality Research Laboratory to replace a manual, paper-based tracking process with automated alerts and real-time inventory tracking.",
    fullDesc: "CIMS is a full-stack web application developed during my internship at Kukunet Digital for the Agricultural Quality Research Laboratory of the Ethiopian Institute of Agricultural Research (EIAR). The system was designed to replace a manual, paper-based chemical tracking process that previously led to poor traceability, duplicate purchases, and unmanaged expired inventory. The platform enables efficient laboratory chemical management through features such as role-based access control, secure authentication using JWT, real-time inventory tracking, stock-in/stock-out operations, search and filtering capabilities, and automated expiry and low-stock alerts.",
    challenge: "Manual paper-based chemical recording caused severe lack of traceability, duplicate chemical orders, safety risks, and untracked expiration dates across laboratory store rooms.",
    outcome: "Built using React (frontend), Express.js (backend), and MySQL (database), following a structured three-tier architecture with modular design, API-driven communication, and secure role-based data handling.",
    tags: ["React", "Express.js", "MySQL", "JWT Auth", "RBAC", "Full-Stack"],
    metrics: "Real-time stock tracking · Automated expiry & low-stock alerts",
    themeColor: "#5C3A28",
    stripType: "places",
    imageUrl: "/Screenshot (252).png",
    videoUrl: "/cims.mp4"
  },
  {
    id: "habesha-market",
    title: "Habesha Market — Mobile UI/UX Design",
    category: "Product Design",
    client: "Ayrese 6-Skill Tech Accelerator Bootcamp 2026",
    year: "2026",
    shortDesc: "A mobile-first e-commerce experience tailored to the Ethiopian market, bridging traditional Ethiopian commerce with a seamless and intuitive digital shopping experience.",
    fullDesc: "This project was developed during a 6-week online program under the Ayrese 6-Skill Tech Accelerator Bootcamp 2026, where I completed the UI/UX & Product Design track. As part of the program, I designed a mobile-first e-commerce experience tailored to the Ethiopian market.\n\nHabesha Market is a modern, premium mobile application concept created to bridge traditional Ethiopian commerce with a seamless and intuitive digital shopping experience.",
    overview: "The goal of this project was to design a culturally grounded yet modern e-commerce platform that serves both local Ethiopian users and the global diaspora. The design focuses on usability, trust, and accessibility while maintaining a strong visual identity inspired by Ethiopian heritage.",
    challenge: "Traditional Ethiopian markets and artisanal producers lacked an accessible, high-trust digital platform tailored to both local mobile wallets (Telebirr/CBE Birr) and diaspora customers looking for authentic cultural products.",
    outcome: "This project strengthened my ability to design complete mobile user flows from concept to high-fidelity screens, apply design systems, typography, and color theory in a real-world context, solve user experience challenges specific to a local market, and create a product that balances cultural identity with modern usability standards.",
    outcomePoints: [
      "Design complete mobile user flows from concept to high-fidelity screens",
      "Apply design systems, typography, and color theory in a real-world context",
      "Solve user experience challenges specific to a local market",
      "Create a product that balances cultural identity with modern usability standards"
    ],
    toolsUsed: [
      "Figma",
      "Design Systems",
      "Prototyping",
      "User Flow Mapping",
      "Mobile UI Design"
    ],
    tags: ["Mobile UI/UX", "E-Commerce", "Emerald & Warm Gold", "Telebirr & CBE Birr", "20+ Screens", "User Flows"],
    metrics: "20+ Mobile Screens · Telebirr & CBE Birr Checkout",
    themeColor: "#0E9F6E",
    stripType: "clock",
    imageUrl: "/Screenshot (267).png",
    previewUrl: "https://stitch.withgoogle.com/preview/12000356532875956020?node-id=4b00df54a7a645d1b5826ce6317e5dc1",
    highlights: {
      brandIdentity: [
        "A clean, minimalist interface influenced by Scandinavian design principles, combined with authentic Ethiopian cultural elements",
        "Color palette centered around forest/emerald green (#0e9f6e), warm gold accents, and soft neutral tones",
        "Typography designed to communicate clarity, trust, and cultural warmth",
        "Brand direction expressed through themes like “Modern Heritage” and “The Heart of Ethiopia”"
      ],
      targetAudience: [
        "Designed for Ethiopian consumers and the diaspora seeking access to authentic local products",
        "Covers a wide range of goods including coffee, traditional clothing, handcrafted items, electronics, and beauty products",
        "Addresses local challenges by integrating familiar and trusted payment systems such as Telebirr and CBE Birr, along with localized delivery flows"
      ],
      keyUserFlows: [
        {
          title: "Onboarding & Authentication",
          desc: "Splash screens with cultural identity, onboarding flow highlighting key values (fast delivery, secure payments), login and sign-up"
        },
        {
          title: "Product Discovery & Browsing",
          desc: "Home screen with featured collections, category navigation, search functionality with filtering, and product listing views"
        },
        {
          title: "Shopping Experience",
          desc: "Detailed product pages, wishlist functionality, user reviews, and shopping cart management"
        },
        {
          title: "Checkout & Order Fulfillment",
          desc: "Address selection, localized payment options (Telebirr / CBE Birr), order confirmation, and live order tracking"
        },
        {
          title: "User Account & Management",
          desc: "Profile management, order history, notifications, and support settings"
        }
      ]
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-kukunet",
    role: "Front-End Developer & UI/UX Design Intern",
    company: "Kukunet Digital — Agricultural Quality Research Laboratory (EIAR Project)",
    period: "July 2026 – September 2026",
    location: "Addis Ababa, Ethiopia",
    type: "Internship",
    description: "Worked as part of a four-member development team (Vita Code Innovators) on a real-world client project: the Chemical Inventory Management System (CIMS) for the Ethiopian Institute of Agricultural Research (EIAR). The system replaced a fully manual, paper-based chemical tracking process that previously caused issues with traceability, duplicate purchasing, and unmanaged expired inventory. Primarily responsible for front-end development and UI/UX design, working closely with backend developers to deliver a fully integrated full-stack system.",
    achievements: [
      "Designing and developing the React-based user interface using a modular component structure (Pages, Components, Services, Routes).",
      "Implementing core application screens such as Login, Dashboard, Chemical Registry, User Management, and Reports.",
      "Building search, filter, and CRUD interfaces for chemical inventory management.",
      "Integrating the frontend with a RESTful backend API secured using JWT authentication.",
      "Implementing role-based access control (RBAC) to ensure secure and restricted user experiences per role (Administrator, Storekeeper, Researcher).",
      "Designing user experience flows for chemical stock-in, stock-out, expiry tracking, and inventory alerts.",
      "Collaborating with backend developers to align API contracts and database schema structure (MySQL).",
      "Participating in requirements gathering, site visits, and UI validation sessions with laboratory staff and supervisors."
    ],
    technologies: ["React", "Express.js", "MySQL", "JWT Authentication", "Role-Based Access Control (RBAC)", "Git/GitHub", "UI/UX Design", "REST APIs"]
  }
];

export const SECTIONS_CONFIG = [
  { id: "hero", label: "Cover", title: "PORTFOLIO", sub: "Creative Direction & Engineering" },
  { id: "strips", label: "Overview", title: "STRIPS", sub: "Visual Section Directory" },
  { id: "about", label: "About", title: "ABOUT", sub: "Bio, Philosophy & Skills" },
  { id: "projects", label: "Projects", title: "PROJECTS", sub: "Selected Work & Case Studies" },
  { id: "experience", label: "Experience", title: "EXPERIENCE", sub: "Timeline & Career History" },
  { id: "contact", label: "Contact", title: "CONTACT", sub: "Inquiries & Social Connections" }
];

// Web3Forms Configuration:
// To receive messages directly in your inbox, paste your free access key below
// or define VITE_WEB3FORMS_ACCESS_KEY in your .env file.
export const WEB3FORMS_CONFIG = {
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "89e1da99-55be-4cd1-8b2c-07c7d7494465",
  targetEmail: "tadessekalkidan05@gmail.com"
};

