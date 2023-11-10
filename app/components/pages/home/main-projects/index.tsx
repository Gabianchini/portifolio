import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { LinkComp } from "@/app/components/link"
import {  HiArrowNarrowRight } from "react-icons/hi"
import { TechBadge } from "@/app/components/tech-badge"



export const MainProjects = () => {
    return(
        <section className="container py-16">
            <SectionTitle title="Main Projects"/>
            <HorizontalDivider className="mb-16"/>
            <div>
            <ProjectCard
              name="Oceandex" src="/images/Oceandex.webp" description="I'm very happy with the evolution of this project that started as a way to study technologies and turned into a beautiful website. Developed with an amazing team from Valtech, I can only express my gratitude for everyone's collaboration in making this possible.
            OceanDex aims to provide information about marine animals and interesting facts about the oceans. The inspiration for the name came from the concept"  
            link={`/projects/oceandex`} 
            >
            <TechBadge name={"React.js"}/> <TechBadge name={"Next.js"}/> <TechBadge name={"Radix-ui"}/> <TechBadge name={"Storybook"}/> <TechBadge name={"Contentful"}/> <TechBadge name={"Sass"}/> <TechBadge name={"Zustand"}/> <TechBadge name={"API"}/>
            </ProjectCard>
            </div>
            <p className=" flex items-center gap-1.5"> 
            <span className=""> Are you interested?</span>
            <LinkComp href="/projects" className="inline-flex">
             See all projects <HiArrowNarrowRight aria-label="Arrow"/>
            </LinkComp>
            </p>
        </section>
    )
}