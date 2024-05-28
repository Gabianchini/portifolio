'use client'

import { ProjectDetails } from "@/app/components/pages/projects/project-details";
import { TechBadge } from "@/app/components/tech-badge";
import {FaLink,FaGithub} from "react-icons/fa"
import { Button } from "@/app/components/button";


export default function Chat() {
    return(
        <ProjectDetails projectName="Chat" techs={<><TechBadge name="React.js"/><TechBadge name="Java Script"/><TechBadge name="Node.js"/><TechBadge name="MongoDB"/><TechBadge name="Express"/><TechBadge name="Socket.io"/><TechBadge name="TailwindCSS"/><TechBadge name="DaisyUI"/><TechBadge name="Bcrypt"/><TechBadge name="Zustand"/><TechBadge name="Mongoose"/></>} link="https://github.com/Gabianchini/chat-app" button={<Button className="min-w-[180px]"><FaLink></FaLink>Code</Button>}  description="Chat App is a real-time messaging application that allows users to create accounts, sign in, search for other users, and send/receive messages in real-time. It provides a seamless and interactive chatting experience.">
        <a href="https://github.com/Gabianchini/HangmanGame" target="_blank">
        <Button aria-label="Github"><FaGithub></FaGithub>Code</Button></a>
        </ProjectDetails>
    )
}