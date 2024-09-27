import { ReactNode } from "react"

type SkillProps = {
    
    tech:{
        icon: ReactNode
        name:string

    }
}



export const Skill = ({tech}:SkillProps) => {
    return(
        <div className="p-4 rounded-lg bg-gray-600/20 text-gray-300 flex flex-col hover:text-sky-500 hover:bg-gray-600/30 transition-all ">
            <div className="flex items-center justify-between">
                <p className="font-medium tracking-wide">{tech.name}</p>
                {tech.icon}
            </div>

        </div>

    )
}