import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { url } from "inspector"
import {FaLink} from "react-icons/fa"
import React from "react"
import { Button } from "@/app/components/button"
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"
import {motion} from "framer-motion"

type ProjectDetailsProps = {
    projectName: string
    techs:React.ReactNode
    link:string
    button: React.ReactNode
    description:string
    projectSession?:React.ReactNode
}

export const ProjectDetails = ({projectName,techs,link,button,projectSession,description}: ProjectDetailsProps) => {
     const fadeUpAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
      }

    const techBadgeAnimation = {
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
      }
  
    return(
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        
        <div className="absolute inset-0 z-[-1]"
        style={{background:"url(/images/hero-bg.png) no-repeat center/cover, url(/images/oceandex2.jpeg) no-repeat center/cover"}}/>
<SectionTitle title={projectName} className="text-center items-center sm:[&>h3]:text-4xl"/>
<motion.p {...fadeUpAnimation} className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">{description}</motion.p>
        <motion.div {...techBadgeAnimation} className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
            {techs}
        </motion.div>
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