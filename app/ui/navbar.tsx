'use client'

import { useEffect, useState } from "react";
import { NavButton } from "./button";

const menunav = ['menu', 'tentang kami', 'organisasi', 'media sosial']

export default function(){
    const [scrolled, setScrolled] = useState<boolean>(false)

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
                scrolled
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
                                    <NavButton title={menu} slug="" link=""/>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}