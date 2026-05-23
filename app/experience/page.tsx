"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { FiArrowLeft, FiBriefcase, FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { BsFire } from "react-icons/bs";
import { fadeUp, stagger } from "@/lib/variants";
import { useTheme } from "@/component/ThemeProvider";

const EXPERIENCES = [
  {
    role: "App Developer & Website Developer",
    company: "Comet Digital Agency",
    period: "Jan 2026 – Present",
    type: "Part-time",
    link: "https://comet.la/",
    images: [
      "/experience-images/comet-digital/image0.jpg",
      "/experience-images/comet-digital/image1.jpg",
      "/experience-images/comet-digital/image2.jpg",
    ],
    description:
      "Developing mobile applications using Flutter and building websites with TypeScript. Working on various projects for clients including task management apps, productivity tools, and custom web solutions.",
    tags: ["Flutter", "Dart", "TypeScript", "React", "Next.js"],
  },
  {
    role: "Customer Service & Delivery Staff",
    company: "Sokthavy Supermarket",
    period: "Oct 2024 – Jul 2025",
    type: "Part-time",
    link: "https://share.google/vijV4IbUcI0CkAQrT",
    images: ["/experience-images/supermarket/image0.jpg"],
    description:
      "Handled customer service, stock management, and daily store operations. Developed strong communication and time management skills in a fast-paced retail environment.",
    tags: ["Customer Service", "Stock Management", "Communication"],
  },
  {
    role: "Rugby Coach",
    company: "Lao Rugby Federation",
    period: "Feb 2023 – Jul 2024",
    type: "Volunteer",
    link: "https://www.laorugby.com/",
    images: [
      "/experience-images/rugby-coach/image0.jpg",
      "/experience-images/rugby-coach/image1.jpg",
    ],
    description:
      "Coaching rugby players and helping develop team skills, strategy, and sportsmanship. Leading training sessions and supporting player growth and discipline on and off the field.",
    tags: ["Coaching", "Leadership", "Team Management", "Sports"],
  },
];

const typeBadge: Record<string, string> = {
  "Part-time": "bg-accent-violet/20 text-blue-400",
  Volunteer: "bg-orange-500/15 text-orange-400",
};

function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const next = () => setCurrent((p) => (p + 1) % images.length);

  return (
    <div className="relative w-full rounded-xl mb-5 overflow-hidden bg-gray-100 dark:bg-gray-800">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Work photo ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="block w-full h-auto"
          style={{ maxHeight: "520px", objectFit: "contain" }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <FiChevronLeft size={15} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <FiChevronRight size={15} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ExperiencePage() {
  const { pagemode, setPagemode } = useTheme();
  const dark = pagemode === "dark";

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-black dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-10 h-[60px] flex items-center justify-between px-6 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-black dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FiArrowLeft size={16} />
            Back
          </Link>
          <BsFire size={32} className="text-accent" />
        </div>
        <h1 className="font-bold text-base tracking-wide">Experience Work</h1>
        <motion.button
          onClick={() => setPagemode(dark ? "light" : "dark")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle dark mode"
          className="p-2 rounded-full text-gray-500 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {dark ? <MdDarkMode size={22} /> : <MdOutlineDarkMode size={22} />}
        </motion.button>
      </header>

      {/* Hero title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center pt-16 pb-10 px-4"
      >
        <h2 className="text-4xl font-bold">Work Experience</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent to-accent-violet" />
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 pb-24 relative"
      >
        {/* vertical line */}
        <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />

        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative flex gap-6 mb-10"
          >
            {/* dot */}
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-white dark:ring-[#0d0d0d] mt-1 shrink-0" />
            </div>

            {/* card */}
            <div className="flex-1 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow px-6 py-5">
              {/* role title — above image */}
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">{exp.role}</h3>

              {/* image slider */}
              <ImageSlider images={exp.images} />

              {/* company / badge / period row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <p className="text-base text-gray-500 dark:text-gray-400">{exp.company}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold px-3 py-0.5 rounded-full ${typeBadge[exp.type]}`}>
                    {exp.type}
                  </span>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
              </div>

              {/* description */}
              <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* reference link */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-base font-medium text-accent hover:underline"
                >
                  <FiExternalLink size={16} />
                  {exp.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
