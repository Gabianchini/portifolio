'use client'

import { ProjectDetails } from "@/app/components/pages/projects/project-details";
import { TechBadge } from "@/app/components/tech-badge";
import {FaLink} from "react-icons/fa"
import { Button } from "@/app/components/button";


export default function Project () {
    return(
        <>
        
        <ProjectDetails  projectName="Oceandex" techs={<><TechBadge name="React.js"/> <TechBadge name="Next.js"/><TechBadge name="Radix-UI"/><TechBadge name="Storybook"/><TechBadge name="Contentful"/> <TechBadge name="Zustand"/><TechBadge name="Sass"/> <TechBadge name="API"/></>} link="https://www.oceandex.com.br/" button={<Button className="min-w-[180px]"><FaLink></FaLink>Projeto Online</Button>} description="OceanDex aims to provide information about marine animals and interesting facts about the oceans. The inspiration for the name came from the concept of Pokedex, an index/encyclopedia that catalogs information about Pokemon. Here, we gather general information about marine animals, their diet, their position in the food chain, their habitat, among other curiosities."/>
       
        
        </>
    )
}