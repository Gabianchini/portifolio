import { HeroSection } from "./components/pages/home";
import { MainProjects } from "./components/pages/home/main-projects";
import { WorkExperience } from "./components/pages/work-experience";
import { Skills } from "./components/skills";

export default async function Home() {
  return (
    <>
      <HeroSection/>
      <Skills/>
      <MainProjects/>
      <WorkExperience/>
    </>
  )
}
