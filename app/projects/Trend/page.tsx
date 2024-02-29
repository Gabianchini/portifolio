'use client'

import { ProjectDetails } from "@/app/components/pages/projects/project-details";
import { TechBadge } from "@/app/components/tech-badge";
import {FaLink} from "react-icons/fa"
import { Button } from "@/app/components/button";


export default function Trend() {
    return(
        <>
        <ProjectDetails  projectName="Trend" techs={<><TechBadge name="Next.js"/> <TechBadge name="Type Script"/><TechBadge name="TailwindCss"/><TechBadge name="PostregreSQL"/><TechBadge name="Prisma"/> <TechBadge name="NextAuth"/><TechBadge name="Stripe"/> <TechBadge name="Cloudinary"/></>} link="https://github.com/Gabianchini/ecommerce-fashion" button={<Button className="min-w-[180px]"><FaLink></FaLink>Code</Button>} description="A fictional Ecommerce made with TypeScript, integrating PostgreSQL via Prisma ORM, and Stripe for secure transactions. Features user authentication, product management, and more."/>
        </>
    )
}