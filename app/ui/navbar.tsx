'use client'

import { useEffect, useState } from "react";
import { NavButton } from "./button";
import { usePathname } from "next/navigation";

const menunav = [
    {
        menu: 'beranda',
        link: '/',
    },
    {
        menu: 'tentang kami',
        link: '/about-us',
    },
    {
        menu: 'organisasi',
        link: '/organisation',
    },
    {
        menu: 'media sosial',
        link: '/medsos',
    },
]

export default function(){
    const [scrolled, setScrolled] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() : (() => void) => {
        const handleScroll = ():void => {
            setScrolled(window.scrollY > 60)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    }, [])

    return (
        <nav 
            className={`fixed h-24 w-full z-30 top-0 left-0 transition-all duration-300 rounded-b-sm ${
                scrolled || pathname !== '/'
                    ? "bg-blue-900 shadow-md backdrop-blur-md"
                    : "bg-linear-to-b from-blue-900 via-blue-900/90"
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 lg:px-8 h-full">
                <div className="flex h-full items-center justify-between">
                    
                    <div className="flex items-center">
                        <img 
                            src="img/logo1.png" 
                            alt=""
                            className="h-16 w-auto" 
                        />
                    </div>
                    <div className="flex items-center gap-4 ">
                        {menunav.map((menu,index) => {
                            return(
                                <div key={index}>
                                    <NavButton title={menu.menu} slug="" link={menu.link}/>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}