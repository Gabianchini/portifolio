import {FaHeart} from 'react-icons/fa'

export const Footer = () => {
    return(
        <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
            <span className='flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400'>
                Made by
                <FaHeart size={13} className='text-sky-400'/>
                <strong className='font-medium'>Gabriela Bianchini</strong>
            </span>
        </footer>
    )
}