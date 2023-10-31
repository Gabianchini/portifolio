import { ProjectDetails } from "@/app/components/pages/projects/project-details";
import { TechBadge } from "@/app/components/tech-badge";
import {FaLink} from "react-icons/fa"
import { Button } from "@/app/components/button";

export default function Project () {
    return(
        <>
        <ProjectDetails projectName="Oceandex" techs={<TechBadge name="React.js"/>} link="https://www.oceandex.com.br/" button={<Button className="min-w-[180px]"><FaLink></FaLink>Projeto Online</Button>}/>
        
        </>
    )
}