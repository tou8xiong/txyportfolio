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
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Tailwind CSS"],
  },
  {
    title: "Technical Skills",
    items: ["Graphic Design", "App & Website Dev", "UX-UI Design"],
  },
  {
    title: "Tools",
    items: ["VS Code", "GitHub", "Firebase", "Expo"],
  },
  {
    title: "Databases",
    items: ["Firebase Database", "MySQL"],
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
  "/image8/todolifeproject-iamge (1).png",
  "/image8/todolifeproject-iamge (2).png",
  "/image8/todolifeproject-iamge (3).png",
  "/image8/todolifeproject-iamge (4).png",
  "/image8/todolifeproject-iamge (5).png",
  "/image8/todolifeproject-iamge (6).png",
  "/image8/todolifeproject-iamge (7).png",
  "/image8/todolifeproject-iamge (8).png",
  "/image8/todolifeproject-iamge (9).png",
  "/image8/todolifeproject-iamge (10).png",
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

export const DESIGN_IMAGES = ["/dsimg1.png", "/designimg2.png"];
