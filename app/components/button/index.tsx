import { ButtonHTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({children, className, ... props}:ButtonProps) => {
    return(
        <button 
        className={cn(
            'bg-gray-800 border-2 border-gray py-3 px-4 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:bg-skyf-500 transition-all disabled',
            className
        )}
        {...props}>
            {children}
        </button>
    )
}
