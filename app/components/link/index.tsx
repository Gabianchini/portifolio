import NextLink from 'next/link';
import { ComponentProps } from 'react';
import {cn} from '@/app/lib/utils'

type LinkProps = ComponentProps<typeof NextLink>;

export const LinkComp = ({className, children, ...props}:LinkProps) => {
    return(
        <NextLink target="_blank" className={cn("flex items-center  gap-2 text-gray-300 text-md hover:text-sky-500 transition-colors", className)} {...props}>
            {children}
        </NextLink>
    )
}