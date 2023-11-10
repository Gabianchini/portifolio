import Image from "next/image";

type ProjectCardProps = {
  img: string
  name:string
  description:string
  techs:string 
}

export const ProjectCard = ({img,name,description,techs}:ProjectCardProps) => {
  return (
    <>
      <section className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-sky-500 opacity-70 hover:opacity-100 transition-all group" 
      >
        <div className="w-full h-48 overflow-hidden" >       
            <Image
              src={img}
              alt={` ${name}thumbnail `}
              unoptimized
              width={380}
              height={200}
              className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
              
            />
        </div>
        <div className="flex-1 flex flex-col p-8">
          <strong className="font-medium text-gray-50/90 group-hover:text-sky-500 transition-all">
            {name}
          </strong>
          <p className="mt-2 text-gray-400 line-clamp-4">
           {description}
          </p>
          <span className="text-gray-300 text-sm font-medium block mt-auto ">
            {techs}
          </span>
        </div>
      </section>
    </>
  );
};
