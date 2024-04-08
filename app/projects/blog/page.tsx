'use client'

import { ProjectDetails } from "@/app/components/pages/projects/project-details";
import { TechBadge } from "@/app/components/tech-badge";
import {FaLink, FaGithub} from "react-icons/fa"
import { Button } from "@/app/components/button";


export default function Blog() {
    return(
        <ProjectDetails projectName="Gabe's Blog" techs={<><TechBadge name="Node.js"/> <TechBadge name="MongoDB"/><TechBadge name="Java Script"/><TechBadge name="EJS"/><TechBadge name="CSS"/><TechBadge name="Express"/><TechBadge name="JWT"/> <TechBadge name="Bcrypt"/></>} link="https://blog-bs3m.onrender.com/?page=1" button={<Button className="min-w-[180px]" aria-label="Online project"><FaLink></FaLink>Online Project</Button>} description="This is a simple blog project developed as a study project to learn and practice Node.js, Express, and several other technologies.The features are: Users can create an account, sign in, and log out securely. Admins have access to an admin panel where they can add, edit, and delete posts. A about me page dedicated page to provide information about the author or the blog. Posts are displayed with pagination for better user experience.">
        <a href="https://github.com/Gabianchini/Nodejs-blog" target="_blank">
        <Button aria-label="Github"><FaGithub></FaGithub>Code</Button></a>
        </ProjectDetails> 
    )
}
