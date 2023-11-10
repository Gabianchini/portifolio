'use client'

import { ProjectDetails } from "@/app/components/pages/projects/project-details";
import { TechBadge } from "@/app/components/tech-badge";
import {FaGithub, FaLink} from "react-icons/fa"
import { Button } from "@/app/components/button";


export default function Tictactoe () {
    return(
        <ProjectDetails 
        projectName="Tic-Tac-Toe"
        techs={<><TechBadge name="Java Script"/> <TechBadge name="HTML"/><TechBadge name="CSS"/> </>} 
        link="https://gabianchini.github.io/JogoDaVelha/"
        button={<Button className="min-w-[180px]"><FaLink></FaLink>Projeto Online</Button>} 
        description="The Tic-Tac-Toe project is an interactive implementation of the classic two-player strategy game. Players will compete to fill a 3x3 board with their symbols (X or O) and try to win by forming a row, column, or diagonal with their symbols."> 
        <a href="https://github.com/Gabianchini/JogoDaVelha" target="_blank"><Button><FaGithub></FaGithub>Ver Código</Button></a>
        </ProjectDetails>

        )
}