'use client'
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandSass, TbBrandTypescript, TbBrandTailwind, TbBrandGit, TbBrandFigma } from "react-icons/tb"
import { SectionTitle } from "../section-title"
import { Skill } from "./skill"
import {RiReactjsLine} from "react-icons/ri"
import  {BsFiletypeSql} from "react-icons/bs"
import {SiStyledcomponents} from "react-icons/si"
import { HorizontalDivider } from "../divider/horizontal"
import {motion} from "framer-motion"
import { TechBadge } from "../tech-badge"
import React from "react"


export const Skills =() => {
    return(
        <section className="container py-16">
            <SectionTitle title="Conhecimentos"/> 
            <HorizontalDivider/>
            <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3 mt-[60px]"
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -100 }}
             transition={{ duration: 0.15, delay:0.5}}>
                <Skill tech={{icon:<RiReactjsLine size={30}/>,
                name:'React.Js'}}/>
                <Skill tech={{icon:<TbBrandNextjs size={30}/>,
                name:'Next.Js'}}/>
                <Skill tech={{icon:<TbBrandJavascript size={30}/>,
                name:'Java Script'}}/>
                <Skill tech={{icon:<TbBrandTypescript size={30}/>,
                name:'Type Script'}}/>
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


            </motion.div>   
         </section>
    )
}