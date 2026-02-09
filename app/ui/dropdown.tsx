'use client'

import Link from "next/link"
import { useState } from "react"
import { NavButton } from "./button"

interface DropdownItem {
    label:string
    link:string
}

interface NavDropdownProps {
    title:string
    link:string
    items: DropdownItem[]
}

export function NavDropdown({title, link, items}:NavDropdownProps){
    const [open, setOpen] = useState(false)

    return (
        <div 
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Trigger */}
            <NavButton title={title} link={link} slug="" />

            {/* Dropdown */}
            <div
                className={`
                absolute left-0 mt-3 w-44 rounded-md bg-white shadow-lg
                transition-all duration-200
                ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}
                `}
            >
                {items.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-blue-100 hover:text-blue-900"
                >
                    {item.label}
                </Link>
                ))}
            </div>
        </div>
    )
}