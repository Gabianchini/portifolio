import Image from "next/image"
import { TechBadge } from "../../tech-badge"

type ExperienceItemProps = {
    image:string
    companyName:string
    role:string
    date:string
    jobDescription:string
    children:React.ReactNode
}

export const ExperienceItem = ({image,companyName,role,date, jobDescription,children}: ExperienceItemProps) => {
    return(
        <div className="grid grid-cols-[35px,1fr] gap-4 md:gap-6"> 
           <div className="flex flex-col items-center gap-4">
           <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={image}
            width={40}
            height={40}
            className="rounded-full"
            alt="logo"
          />
        </div>


            </div>

        <div>


            <div className="flex flex-col gap-1 text-sm sm:text-base"> 
                <a target="_blank" href="https://www.linkedin.com/company/valtech/" className="text-gray-500 hover:text-sky-500 transition-colors">
                    {companyName}
                </a>
                <h4>{role}</h4>
                <span className="text-gray-500">
                    {date} 
                </span>
                <p className="text-gray-400">
                	{jobDescription}
                </p>
            </div>
           
            <p className="text-gray-400 text-sm mb-3 mt-6"> Competências</p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                {children}
             </div>
            </div>
        </div>
    )
}