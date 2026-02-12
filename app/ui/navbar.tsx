'use client'

import { useEffect, useState } from "react";
import { NavButton } from "./button";
import { usePathname } from "next/navigation";
import { MobileDropdown, NavDropdown } from "./dropdown";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

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
        link: '/organitation',
    },
]

const organitations = [
    {
        label: 'Raudhotul Athfal (RA)',
        link: '/organitation/ra',
    },
    {
        label: 'Madrasah Ibtidaiyah (MI)',
        link: '/organitation/mi',
    },
    {
        label: 'Madrasah Tsanawiyah (MTs)',
        link: '/organitation/mts',
    },
    {
        label: 'Madrasah Ibtidaiyah (MA)',
        link: '/organitation/ma',
    },
]

export default function Navbar(){
    const [scrolled, setScrolled] = useState<boolean>(false)
    const [mobileMode, setMobileMode] = useState(false)
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
            className={`fixed h-20 md:h-24 w-full z-30 top-0 left-0 transition-all duration-300 rounded-b-sm ${
                scrolled || pathname !== '/'
                    ? "bg-blue-900 shadow-md backdrop-blur-md"
                    : "bg-linear-to-b from-blue-900 via-blue-900/90"
            }`}
        >
            <div className="lg:mx-auto max-w-7xl px-4 lg:px-8 h-full md:mx-10">
                <div className="flex h-full items-center justify-between">
                    
                    <div className="flex items-center">
                        <Image
                            src={'/img/logo1.png'}
                            alt=""
                            height={120}
                            width={80}
                            className="w-24 md:w-34 h-auto"
                        />
                    </div>

                    {/* dekstop */}
                    <div className="hidden md:flex items-center gap-4">
                        {menunav.map((menu,index) => {
                            if (menu.menu === 'organisasi') {
                                return (
                                    <NavDropdown
                                        key={index}
                                        title={menu.menu}
                                        link={menu.link}
                                        items={organitations}
                                    />
                                )
                            }

                            return(
                                <div key={index}>
                                    <NavButton title={menu.menu} slug="" link={menu.link}/>
                                </div>
                            )
                        })}
                    </div>

                    {/* hamburger */}
                    <button
                        onClick={()=>setMobileMode(!mobileMode)}
                        className="md:hidden text-white text-2xl transition-all duration-300"
                    >
                        <div className={`transition-transform duration-300 ${mobileMode ? 'rotate-90' : ''}`}>
                            {mobileMode ? <ImCross/> : <GiHamburgerMenu/>}
                        </div>
                    </button>
                    
                </div>
                    {/* mobile */}
                    {mobileMode && (
                        <div className="md:hidden flex flex-col w-full bg-blue-900 px-6 pb-6 space-y-3 transition-all duration-300">
                            {menunav.map((menu, index) => {
                                if (menu.menu === 'organisasi') {
                                    return (
                                        <MobileDropdown
                                            key={index}
                                            title={menu.menu}
                                            link={menu.link}
                                            items={organitations}
                                        />
                                    )
                                }

                                return (
                                    <NavButton
                                        key={index}
                                        title={menu.menu}
                                        link={menu.link}
                                        slug=""                                    
                                    />
                                )
                            })}
                        </div>
                    )}
            </div>
        </nav>
    )
}