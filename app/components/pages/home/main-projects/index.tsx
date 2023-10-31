import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import { TechBadge } from "@/app/components/tech-badge"


export const MainProjects = () => {
    return(
        <>
        <section className="container py-16">
            <SectionTitle title="Projetos em destaque"/>
            <HorizontalDivider className="mb-16"/>
            <div>
            <ProjectCard name="Oceandex" src="/images/Oceandex.png" description="I'm very happy with the evolution of this project that started as a way to study technologies and turned into a beautiful website. Developed with an amazing team from Valtech, I can only express my gratitude for everyone's collaboration in making this possible.
            OceanDex aims to provide information about marine animals and interesting facts about the oceans. The inspiration for the name came from the concept"  link={`/projects/oceandex`} children= {<><TechBadge name={"React.js"}/> <TechBadge name={"React.js"}/></>}/>
            <HorizontalDivider/>
            <ProjectCard name="Oceandex" src="/images/Oceandex.png" description="I'm very happy with the evolution of this project that started as a way to study technologies and turned into a beautiful website. Developed with an amazing team from Valtech, I can only express my gratitude for everyone's collaboration in making this possible.
            OceanDex aims to provide information about marine animals and interesting facts about the oceans. The inspiration for the name came from the concept"  link={`/projects/oceandex`} children= {<><TechBadge name={"React.js"}/> <TechBadge name={"React.js"}/></>} />
            </div>
            <p className=" flex items-center gap-1.5"> 
            <span className=""> Se interessou?</span>
            <Link href="/projects" className="inline-flex">
             Ver todos <HiArrowNarrowRight/>
            </Link>
            </p>

        </section>
        </>
    )
}