'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: [string]
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
   
      <motion.span
      className="text-sky-100 bg-sky-500 text-sm py-1 px-3 rounded-lg m-1"
      {...props}
    >
      {name}
    </motion.span> 
                
            
   
  )
}