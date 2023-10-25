import Image from "next/image"
import {BiChevronRight,BiChevronLeft} from "react-icons/bi"
import { TechBadge } from "@/app/components/tech-badge"

type ProjectCardProps = {
    src:string
    name:string
    description:string
    tech:[string]
    
}

export const ProjectCard = ({src,name,description,tech}:ProjectCardProps) => {
    return(
        <div className="flex gap-4 lg:gap-12 flex-col lg:flex-row ">
            <div className="w-full h-full">
                <Image width={420} height={304} src={src} className="w-full h-[200px] sm:h-[300px] lg:w-[400px] lg:min-h-full object-cover rounded-lg" alt={`Thumbnail do projeto ${name}`}/>

            </div>
            <div className="py-10 mb-10">
                <h3 className="flex items-center gap-3 font-medium text-lg">
                   <BiChevronLeft size={25}/>{name}<BiChevronRight size={25}/>
                </h3>
                <p className="text-sky-400 my-6">{description}</p>
                <TechBadge name={tech}/>
            </div>
        </div>
    )
}