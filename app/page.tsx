import { ContactForm } from "./components/contact-form";
import { HeroSection } from "./components/pages/home/hero-section";
import { MainProjects } from "./components/pages/home/main-projects";
import { WorkExperience } from "./components/pages/work-experience";
import { Skills } from "./components/skills";
import { Footer } from "./components/footer";


export default async function Home() {
  return (
    <>
      <HeroSection/>
      <Skills/>
      <MainProjects/>
      <WorkExperience/>
      <ContactForm/>
      <Footer/>
    </>
  )
}
