'use client'

import { ProjectDetails } from "@/app/components/pages/projects/project-details";
import { TechBadge } from "@/app/components/tech-badge";
import {FaLink,FaGithub} from "react-icons/fa"
import { Button } from "@/app/components/button";


export default function Hangman() {
    return(
        <ProjectDetails projectName="Hangman" techs={<><TechBadge name="Html"/> <TechBadge name="Css"/><TechBadge name="Java Script"/><TechBadge name="API"/></>} link="https://gabianchini.github.io/HangmanGame/" button={<Button className="min-w-[180px]" aria-label="Online project"><FaLink></FaLink>Online Project</Button>} description="The Hangman Game project is a classic word puzzle game that challenges players to guess a hidden word one letter at a time. It's a web-based game created using HTML, JavaScript, and CSS, providing an interactive and entertaining experience for users.">
        <a href="https://github.com/Gabianchini/HangmanGame" target="_blank">
        <Button aria-label="Github"><FaGithub></FaGithub>Code</Button></a>
        </ProjectDetails>
    )
}