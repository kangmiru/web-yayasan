'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavButtonProps {
    title: string
    link: string
    slug: string
}

interface ButtonProps {
    title:string
    link:string
}

export function NavButton({title, link, slug}:NavButtonProps){
    const pathname = usePathname()
    return (
        <Link href={link}>
            <button className={`text-white capitalize hover:bg-blue-700 rounded-md font-semibold ${pathname === link
                ? 'bg-blue-700/70 border border-blue-600'
                : ''
            }`}>
                <p className="m-3">{title}</p>
            </button>
        </Link>
    )
}

export function ButtonA({title, link}: ButtonProps){
    return(
        <Link href={link}>
            <button className="text-white capitalize bg-blue-800 rounded-md border border-transparent shadow-lg transition-all duration-200 ease-in-out hover:bg-transparent hover:border-white hover:text-sky-500 hover:shadow-inner hover:translate-y-px active:translate-y-0.5 active:shadow-inner">
                <div className="m-3">
                    <p className="font-semibold tracking-wide">{title}</p>
                </div>
            </button>
        </Link>
    )
}

export function ButtonB({title, link}:ButtonProps){
    return(
        <Link href={link}>
            <button className="text-white capitalize bg-transparent rounded-md border border-b-2 border-white hover:bg-blue-800 hover:rounded-md hover:filter hover:drop-shadow-2xl hover:border-none">
                <div className="m-3">
                    <p className="font-semibold tracking-wide">
                        {title}
                    </p>
                </div>
            </button>
        </Link>
    )
}

export function ButtonC(){
    return(
        <button className= "bg-linear-to-t from-green-700/70 to-green-500 w-full rounded-md hover:bg-green-600 hover:cursor-pointer">
            <p className="text-white font-bold capitalize m-3">
                Kirim pesan ke admin
            </p>
        </button>
    )
}

export function ButtonD({title, link}:ButtonProps){
    return(
        <Link href={link}>
            <button className="rounded-md bg-white border border-black/10 shadow-sm backdrop-blur-2xl transition-all duration-150 ease-in-out hover:shadow-inner hover:translate-y-px active:translate-y-0.5 active:shadow-inner">
                <div className="m-3">
                    <p className="font-semibold tracking-wide capitalize">
                        {title}
                    </p>
                </div>
            </button>
        </Link>
    )
}