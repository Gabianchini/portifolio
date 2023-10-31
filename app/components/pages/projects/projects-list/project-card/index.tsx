import Image from "next/image"
import {motion} from "framer-motion"

export const ProjectCard = () => {
    return(
        <>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
       className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-sky-500 opacity-70 hover:opacity-100 transition-all group">
            <motion.div 
             initial={{ opacity: 0, y: 100, scale: 0.5 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: 100, scale: 0.5 }}
             transition={{ duration: 0.3, delay: 0.3 }}
             className="w-full h-48 overflow-hidden">
                <a href="projects/oceandex"><Image
                 src="/images/Oceandex.png"
                 alt="Oceandex thumbnail" 
                 unoptimized
                 width={380}
                 height={200}
                 className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                 />
                 </a>
                 
        </motion.div>
            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-sky-500 transition-all">Oceandex</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">I'm very happy with the evolution of this project that started as a way to study technologies and turned into a beautiful website. Developed with an amazing team from Valtech, I can only express my gratitude for everyone's collaboration in making this possible. OceanDex aims to provide information about marine animals and interesting facts about the oceans. The inspiration for the name came from the concept</p>
                <span className="text-gray-300 text-sm font-medium block mt-auto ">Next.js, Next Auth, Stitches, Prisma</span>
            </div>
            </motion.div>
        
        </>
        
    )
}