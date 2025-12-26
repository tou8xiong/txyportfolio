"use client";
import HomeSection from "@/component/homesection";
import Project from "@/component/projectsection";
import Education from "@/component/educationsection";
import Skills from "@/component/skills";
import { useState } from "react";
import Header from "@/component/header";

export default function Home() {
  const [pagemode, setPagemode] = useState(localStorage.getItem("pagemode") || "light");
  console.log(pagemode);
  localStorage.setItem("pagemode", pagemode);

  return (
    <div style={pagemode === "dark" ? { backgroundColor: "#141414", color: "#ededed" } :
      { backgroundColor: "#ffffff", color: "#171717" }}
      className={"flex justify-center border-0 flex-col"}>
      <div className="flex flex-col gap-30 border-0" >
        <Header pagemode={pagemode} setPagemode={setPagemode} />
        <HomeSection />
        <Project />
        <Education />
        <Skills />
      </div>
    </div>
  );
}
