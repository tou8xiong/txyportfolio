"use client";
import Image from "next/image";
import Myimage from "@/public/mypicture.png";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import SectionDivider from "@/component/ui/SectionDivider";
import { fadeLeft, fadeRight, scaleIn, stagger } from "@/lib/variants";
import { SOCIAL_LINKS } from "@/lib/data";
import { useTheme } from "@/component/ThemeProvider";

const iconMap = {
  facebook: IoLogoFacebook,
  github:   FaSquareGithub,
};

export default function HomeSection() {
  const { pagemode } = useTheme();
  const dark = pagemode === "dark";

  return (
    <section
      id="homesection"
      className={`relative flex flex-col justify-center min-h-[calc(100vh-60px)] pb-0 overflow-hidden ${
        dark ? "bg-[#0d0d0d]" : "bg-white"
      }`}
    >
      {/* ── Subtle radial glow ───────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(99, 102, 241, 0.06) 0%, transparent 60%)"
            : "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(251, 191, 36, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* ── Animated floating particles ─────────────────────────────────── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${dark ? "bg-accent/30" : "bg-accent/20"}`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* ── Hero content ──────────────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col md:flex-row justify-around items-center px-4 sm:px-8 gap-10 md:gap-12 max-w-6xl mx-auto w-full py-12 md:py-0"
      >
        {/* Left — name & socials */}
        <motion.div
          variants={fadeLeft}
          className="text-center md:text-left space-y-5"
        >
          <div>
            <motion.p
              className={`text-sm md:text-base tracking-widest uppercase ${dark ? "text-gray-400" : "text-gray-500"}`}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Welcome, I&apos;m
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold bg-linear-to-r from-accent via-accent-violet to-accent-light bg-clip-text text-transparent leading-tight"
              animate={{
                textShadow: [
                  "0 0 32px rgba(255, 180, 60, 0.35)",
                  "0 0 48px rgba(255, 180, 60, 0.5)",
                  "0 0 32px rgba(255, 180, 60, 0.35)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              TouXiong
            </motion.h1>
          </div>

          <div>
            <p className={`text-base ${dark ? "text-gray-400" : "text-gray-500"} mb-2`}>My socials</p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {SOCIAL_LINKS.map(({ href, label, icon }, index) => {
                const Icon = iconMap[icon];
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    aria-label={label}
                    className={`p-3 rounded-xl backdrop-blur-sm border transition-colors ${
                      dark
                        ? "bg-white/5 border-white/10 hover:bg-accent/15 hover:border-accent/30"
                        : "bg-black/5 border-black/10 hover:bg-accent/15 hover:border-accent/30"
                    }`}
                  >
                    <Icon size={28} className={icon === "facebook" ? (dark ? "text-blue-400" : "text-blue-600") : (dark ? "text-gray-200" : "text-gray-800")} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Center — profile photo */}
        <motion.div
          variants={scaleIn}
          className="relative shrink-0 order-first md:order-none -mt-6 md:-mt-14"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(255, 180, 60, 0.2), 0 0 60px rgba(140, 80, 255, 0.1)",
                  "0 0 40px rgba(255, 180, 60, 0.35), 0 0 80px rgba(140, 80, 255, 0.2)",
                  "0 0 30px rgba(255, 180, 60, 0.2), 0 0 60px rgba(140, 80, 255, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl"
            />
            <Image
              src={Myimage}
              alt="TouXiong profile photo"
              className="relative w-52 sm:w-64 md:w-72 rounded-3xl shadow-2xl object-cover ring-2 ring-accent/40"
              priority
            />
          </div>
        </motion.div>

        {/* Right — bio card */}
        <motion.div
          variants={fadeRight}
          className={`max-w-sm w-full text-center md:text-left space-y-4 rounded-2xl px-6 py-6 border backdrop-blur-md shadow-lg transition-colors duration-300 ${
            dark
              ? "border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/5 text-gray-200"
              : "border-black/10 bg-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] ring-1 ring-inset ring-black/5 text-gray-700"
          }`}
        >
          <div>
            <p className={`text-sm md:text-base tracking-widest uppercase ${dark ? "text-gray-400" : "text-gray-500"}`}>
              Aspiring
            </p>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-accent"
              animate={{
                textShadow: [
                  "0 0 14px rgba(255, 180, 60, 0.3)",
                  "0 0 20px rgba(255, 180, 60, 0.5)",
                  "0 0 14px rgba(255, 180, 60, 0.3)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Full-Stack Developer
            </motion.h2>
          </div>
          <p className={`text-base md:text-lg leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
            I am a student aspiring to become a full-stack developer, building skills in both
            front-end and back-end. I enjoy creating projects that connect design, logic, and
            real-world problem solving. My goal is to grow into a developer who delivers complete
            and impactful solutions.
          </p>
          <motion.p
            className="text-base font-semibold text-accent/90"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Tech is my passion · Building is my drive · Growth is my goal.
          </motion.p>
        </motion.div>
      </motion.div>

      <SectionDivider />
    </section>
  );
}
