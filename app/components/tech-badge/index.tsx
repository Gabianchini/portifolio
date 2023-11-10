'use client'


type TechBadgeProps =  {
  name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
   
      <span
      className="text-sky-100  bg-sky-900 text-sm py-1 px-3 rounded-lg m-1 inline-flex">
      {name}
    </span> 
                
            
   
  )
}