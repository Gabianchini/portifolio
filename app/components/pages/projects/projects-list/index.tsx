'use client'

import Link from "next/link"
import { ProjectCard } from "./project-card"


export const ProjectsList = () => {
    return(
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-4">
            <Link href="/projects/oceandex">
                <ProjectCard/>
            </Link>

        </section>
    )
}