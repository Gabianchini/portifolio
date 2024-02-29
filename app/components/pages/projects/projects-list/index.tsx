'use client'

import Link from "next/link"
import { ProjectCard } from "./project-card"




export const ProjectsList = () => {
    return(
        <section
         className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-4">
        <Link href="/projects/oceandex" aria-label="Oceandex" role="button">
        <ProjectCard
         img="/images/Oceandex.webp"
         name="Oceandex"
         description="OceanDex aims to provide information about marine animals and interesting facts about the oceans. The inspiration for the name came from the concept of Pokedex, an index/encyclopedia that catalogs information about Pokemon. Here, we gather general information about marine animals, their diet, their position in the food chain, their habitat, among other curiosities."
         techs="Tools: React.Js, Next.Js, Radix-UI, Storybook, Contentful, Sass, Zustand, Api."/>
        </Link>
        <Link href="/projects/hangman" aria-label="Hangman" role="button">  
        <ProjectCard
         img="/images/Hangman.webp"
         name="Hangman"
         description="The Hangman Game project is a classic word puzzle game that challenges players to guess a hidden word one letter at a time. It's a web-based game created using HTML, JavaScript, and CSS, providing an interactive and entertaining experience for users."
         techs="Tools: Java script, Html, Css, Api"/>
         </Link>
         <Link href="/projects/tictactoe" aria-label="Tictactoe" role="button">
        <ProjectCard
         img="/images/tictactoe.webp"
         name="Tic-tac-Toe"
         description="The Tic-Tac-Toe project is an interactive implementation of the classic two-player strategy game. Players will compete to fill a 3x3 board with their symbols (X or O) and try to win by forming a row, column, or diagonal with their symbols."
         techs="Tools: Java script, Html, Css, Api"/>
         </Link>
         <Link href="/projects/Trend" aria-label="Trend" role="button">
        <ProjectCard
         img="/images/trend2.webp"
         name="Trend"
         description="A Ecommerce project, integrating PostgreSQL via Prisma ORM, and Stripe for secure transactions. Features user authentication, product management, and more."
         techs="Tools: Next.js, Type Script, TailwindCss, PostgreSQL, Prisma, NextAuth, Cloudinary, Stripe"/>
         </Link>
         
        </section>
    )
}