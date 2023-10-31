'use client'

import { cn } from "@/app/lib/utils"
import { motion } from 'framer-motion'

type SectionTitleProps = {
    title:string;
    className?:string;
}

export const SectionTitle = ({title, className}:SectionTitleProps) => {
    const animProps = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      }
    return(
        <div className={cn('flex flex-col gap-4', className)}> 
    
        <motion.h3   {...animProps} className="text-2xl font-medium font-semibold">{title} </motion.h3>

        </div>
    )
}