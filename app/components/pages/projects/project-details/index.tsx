import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { url } from "inspector"
import {FaLink} from "react-icons/fa"
import React from "react"
import { Button } from "@/app/components/button"
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

type ProjectDetailsProps = {
    projectName: string
    techs:React.ReactNode
    link:string
    button: React.ReactNode
    projectSession?:React.ReactNode
}

export const ProjectDetails = ({projectName,techs,link,button,projectSession}: ProjectDetailsProps) => {
    return(
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        
        <div className="absolute inset-0 z-[-1]"
        style={{background:"url(/images/hero-bg.png) no-repeat center/cover, url(/images/oceandex2.jpeg) no-repeat center/cover"}}/>
<SectionTitle title={projectName} className="text-center items-center sm:[&>h3]:text-4xl"/>
<p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">I'm very happy with the evolution of this project that started as a way to study technologies and turned into a beautiful website. Developed with an amazing team from Valtech, I can only express my gratitude for everyone's collaboration in making this possible. OceanDex aims to provide information about marine animals and interesting facts about the oceans. The inspiration for the name came from the concept</p>
        <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
            {techs}
        </div>
        <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href={link} target="_blank">
                {button}   
            </a>
        </div>
        <div>
            {projectSession}
        </div>
        <Link href="/projects">
            <HiArrowNarrowLeft size={20}/>
            Voltar para projetos
        </Link>

        </section>
    )
}