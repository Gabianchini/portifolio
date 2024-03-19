import Image from "next/image"



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
        <div className="grid grid-cols-[35px,2fr] gap-4 md:gap-6"> 
           <div className="flex flex-col items-center gap-4">
           <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={image}
            width={40}
            height={40}
            className="rounded-full"
            alt={companyName}
            
          />
        </div>


            </div>

        <div>


            <section className="flex flex-col gap-1 text-sm sm:text-base"> 
            <div>
                <span className="text-gray-300 transition-colors font-semibold">
                    {companyName}
                </span>
                </div>
                <h4>{role}</h4>
                <span className="text-gray-400">
                    {date} 
                </span>
                <p className="text-gray-300">
                	{jobDescription}
                </p>
            </section>
           
            <p className="text-gray-300 text-sm mb-3 mt-6"> Tools and Technologies utilized:</p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[700px] mb-8">
                {children}
             </div>
            </div>
        </div>
    )
}