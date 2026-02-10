'use client'

import Link from "next/link"
import { useState } from "react"
import { ButtonA, NavButton } from "./button"
import { TitleTypeD } from "./title"

interface DropdownItem {
    label:string
    link:string
}

interface NavDropdownProps {
    title:string
    link:string
    items: DropdownItem[]
}

const questions = [
    {
        ask:'Kapan pendaftaran dibuka?',
        caption:'Pendaftaran gelombang 1 dimulai pada tanggal 1 januari 2026',
    },
    {
        ask:'Berapa biaya pendaftaran?',
        caption:'Untuk detail biaya anda dapat menghubungi admin pada nomor 0811-1111-1111 untuk informasi lebih lanjut',
    },
    {
        ask:'Kapan registrasi ulang dimulai?',
        caption:'Registrasi ulang dimulai pada tanggal 1 Juni 2026',
    },
    {
        ask:'Bagamana cara melakukan pendaftarannya?',
        caption:'Pendaftaran dapat dilakukan secara online dengan mengisi form dan mendatangi langsung kantor madrasah di alamat Kp. Ciburial 04/10, Desa Alamendah, Kec. Rancabali, Kab. Bandung, Jawa Barat',
    },
]

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

export function QuestionDropdown(){
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index:number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return(
        <div className="mx-2">
            <div className="text-md">
                <TitleTypeD title="pertanyaan"/>

                <div className="mt-5">
                    {questions.map((q, index) => {
                        const isOpen = openIndex === index

                        return(
                            <div 
                                key={index}
                                className="bg-sky-100 rounded-sm my-4 overflow-hidden"
                            >
                                {/* questions */}
                                <button
                                    onClick={() => toggle(index)}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-200 hover:cursor-pointer hover:bg-sky-400 ${
                                        isOpen
                                            ? 'bg-sky-300 text-white'
                                            : 'hover:bg-sky-200 cursor-pointer'
                                    }`}
                                >
                                    <p className="font-semibold">
                                        {q.ask}
                                    </p>
                                </button>

                                {/* answer */}
                                <div className={`px-4 text-sm text-gray-700 transition-all duration-300 ${
                                    isOpen
                                        ? "max-h-40 py-3 opacity-100"
                                        : "max-h-0 opacity-0" 
                                }`}>
                                    {q.caption}
                                </div>

                            </div>
                        )
                    })}

                    <ButtonA
                        title="daftar sekarang"
                        link=""
                    />
                </div>

            </div>
        </div>
    )
}