'use client'
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandSass, TbBrandTypescript,TbBrandSvelte, TbBrandTailwind, TbBrandGit, TbBrandFigma, TbBrandFirebase } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa";
import { SectionTitle } from "../section-title"
import { Skill } from "./skill"
import {RiReactjsLine} from "react-icons/ri"
import  {BsFiletypeSql} from "react-icons/bs"
import {SiStyledcomponents, SiExpress, SiMongodb, SiPrisma} from "react-icons/si"
import { MdOutlineHttp } from "react-icons/md";
import { HorizontalDivider } from "../divider/horizontal"
import React from "react"


export const Skills =() => {
    return(
        <section className="container py-16">
            <SectionTitle title="Skills"/> 
            <HorizontalDivider/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3 mt-[60px]">
                <Skill tech={{icon:<RiReactjsLine size={30}/>,
                name:'React.Js'}}/>
                <Skill tech={{icon:<TbBrandNextjs size={30}/>,
                name:'Next.Js'}}/>
                <Skill tech={{icon:<TbBrandSvelte size={30}/>,
                name:'Svelte'}}/>
                <Skill tech={{icon:<TbBrandJavascript size={30}/>,
                name:'Java Script'}}/>
                <Skill tech={{icon:<TbBrandTypescript size={30}/>,
                name:'Type Script'}}/>
                <Skill tech={{icon:<SiPrisma size={30}/>,
                name:'Prisma'}}/>
                <Skill tech={{icon:<FaNodeJs size={30}/>,
                name:'Node.js'}}/>
                <Skill tech={{icon:<SiMongodb size={30}/>,
                name:'MongoDB'}}/>
                <Skill tech={{icon:<TbBrandFirebase size={30}/>,
                name:'Firebase'}}/>
                <Skill tech={{icon:< SiExpress size={30}/>,
                name:'Express'}}/>
                 <Skill tech={{icon:<MdOutlineHttp size={30}/>,
                name:'HTTP'}}/>
                <Skill tech={{icon:<TbBrandHtml5 size={30}/>,
                name:'HTML'}}/>
                <Skill tech={{icon:<TbBrandCss3 size={30}/>,
                name:'CSS'}}/>
                <Skill tech={{icon:<TbBrandSass size={30}/>,
                name:'SASS'}}/>
                <Skill tech={{icon:<TbBrandTailwind size={30}/>,
                name:'TailwindCSS'}}/>
                 <Skill tech={{icon:<SiStyledcomponents size={30}/>,
                name:'Styled Components'}}/>
                <Skill tech={{icon:<BsFiletypeSql size={30}/>,
                name:'SQL'}}/>
                <Skill tech={{icon:<TbBrandGit size={30}/>,
                name:'Git'}}/>
                <Skill tech={{icon:<TbBrandFigma size={30}/>,
                name:'Figma'}}/>
            </div>   
         </section>
    )
}