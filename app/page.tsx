"use client";
import HomeSection from "@/component/homesection";
import Project from "@/component/projectsection";
import Education from "@/component/educationsection";
import Skills from "@/component/skills";
import { useEffect, useState } from "react";
import Header from "@/component/header";

export default function Home() {
  // safe default for SSR; read persisted value on the client
  const [pagemode, setPagemode] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("pagemode");
      if (stored) setPagemode(stored);
    }
  }, []);

  // persist changes back to localStorage on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pagemode", pagemode);
    }
  }, [pagemode]);

  return (
    <div style={pagemode === "dark" ? { backgroundColor: "#141414", color: "#ededed" } :
      { backgroundColor: "#ffffff", color: "#171717" }}
      className={"flex justify-center border-0 flex-col"}>
      <div className="flex flex-col gap-30 border-0" >
        <Header pagemode={pagemode} setPagemode={setPagemode} />
        <HomeSection />
        <Project />
        <Education />
        <Skills pagemode={pagemode} setPagemode={setPagemode} />
      </div>
    </div>
  );
}
