export const NAV_LINKS = [
  { label: "Home", targetId: "homesection" },
  { label: "Projects", targetId: "projectsection" },
  { label: "Education", targetId: "education" },
  { label: "Skills", targetId: "skills" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/share/1Fmimk9RSG/",
    label: "Facebook",
    icon: "facebook" as const,
  },
  {
    href: "https://github.com/tou8xiong",
    label: "GitHub",
    icon: "github" as const,
  },
];

export const SKILLS_DATA = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Flutter", "Dart"],
  },
  {
    title: "Technical Skills",
    items: ["App Development", "Website Development", "Graphic Design", "UX-UI Design"],
  },
  {
    title: "Tools",
    items: ["VS Code", "GitHub", "Firebase", "Expo", "Supabase", "Redis"],
  },
  {
    title: "Databases",
    items: ["Firebase Database", "MySQL", "Supabase"],
  },
  {
    title: "Soft Skills",
    items: ["Time Management", "Communication", "Team Work"],
  },
];

export const EDUCATION_DATA = [
  {
    degree: "Diploma Degree — IT & Economics",
    school: "Comcenter College, Vientiane Capital",
    period: "Currently Studying · Expected 2027",
    current: true,
  },
  {
    degree: "High School Certificate",
    school: "Lad Huang High School, Xiengkhuang Province",
    period: "2013 – 2024",
    current: false,
  },
];

export const PROJECT_IMAGES = [
  "/image8/image0.png",
  "/image8/image1.png",
  "/image8/image2.png",
  "/image8/image3.png",
  "/image8/image4.png",
  "/image8/image5.png",
  "/image8/image6.png",
  "/image8/image7.png",
  "/image8/image8.png",
  "/image8/image9.png",
];

export const PROJECT_FEATURES = [
  "Task Management - Create, view, and manage tasks with priority, type, deadline",
  "AI Productivity Assistant - Personal AI chat for task help and suggestions",
  "Productivity Dashboard - Study stats, Pomodoro timer, weekly progress",
  "Notes & Ideas - Idea capture and rich text editor",
  "PDF Tools - In-browser PDF annotation and image background removal",
  "Firebase Authentication - Login and signup flows",
];

export const PROJECT_TECH = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Firebase Auth",
  "Supabase",
  "Redis",
];

export const DESIGN_IMAGES = [
  "/design-skill-iamge/image0.png",
  "/design-skill-iamge/image1.png",
  "/design-skill-iamge/image2.png",
  "/design-skill-iamge/image3.png",
  "/design-skill-iamge/image4.jpg",
];
