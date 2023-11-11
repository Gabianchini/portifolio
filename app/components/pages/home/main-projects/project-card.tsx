import Image from "next/image"
import {BiChevronRight,BiChevronLeft} from "react-icons/bi"
import { LinkComp } from "@/app/components/link"


type ProjectCardProps = {
    src:string
    name:string
    description:string
    children:React.ReactNode
    link:string
}

export const ProjectCard = ({src,name,description,children,link}:ProjectCardProps) => {
    return(
        
        <div className="flex gap-4 lg:gap-10 flex-col lg:flex-row py-2">
            <div className="w-full h-full">
            <a href={link} aria-label={name}>
            <div className="flex justify-center">
             <Image width={300} height={200} src={src}  className="w-[800px] h-[200px]  sm:h-[300px] lg:w-[400px] lg:min-h-full object-cover rounded-lg " alt={`Thumbnail do projeto ${name}`} />
             </div>
            </a>
            </div>

            <div className="py-5">
                <h3 className="flex items-center gap-1 font-medium text-lg justify-center hover:text-sky-500">
                  <LinkComp href={link}> <BiChevronLeft size={25}/>{name}<BiChevronRight size={25}/></LinkComp>
                </h3>
                <p className="text-gray-300 my-6">{description}</p>
                {children}
                <LinkComp href={link} className="my-6 justify-center" >
                   <BiChevronLeft/>Find out more about the project <BiChevronRight/>
                </LinkComp>
            </div>
        </div>
    )
}