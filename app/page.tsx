import HomeSection from "@/component/homesection";
import Project from "@/component/projectsection";
import Education from "@/component/educationsection";
import Skills from "@/component/skills";

export default function Home() {
  return (
    <div className="flex  justify-center border-0  flex-col bg-linear-to-bl from-sky-600 to-orange-300 font-sans ">
      <div className="flex flex-col gap-30 border-0">
      <HomeSection />
      <Project />
      <Education />
      <Skills />
      </div>
      </div>
  );
}
