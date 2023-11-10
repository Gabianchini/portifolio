import { SectionTitle } from "@/app/components/section-title"
import React from "react"
import { LinkComp } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"


type ProjectDetailsProps = {
    projectName: string
    techs:React.ReactNode
    link:string
    button: React.ReactNode
    description:string
    projectSession?:React.ReactNode
    children?:React.ReactNode 
}

export const ProjectDetails = ({projectName,techs,link,button,projectSession,description,children}: ProjectDetailsProps) => {

 
  
    return(
        
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        
        <div className="absolute inset-0 z-[-1]"
        style={{background:`url(/images/hero-bg.png) no-repeat center/cover`}}/>
       <SectionTitle title={projectName} className="text-center items-center sm:[&>h3]:text-4xl"/>
       <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">{description}</p>
        <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
            {techs}
        </div>
        <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href={link} target="_blank" role="button" aria-label={`Access ${projectName}`}>
                {button}   
        </a>
        {children}
        </div>
        <div>
            {projectSession}
        </div>
        <LinkComp href="/projects">
            <HiArrowNarrowLeft size={20}/>
            Voltar para projetos
        </LinkComp>

        </section>
       
       
    )
}