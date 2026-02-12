'use client'

import Image from "next/image"
import { FaArrowRight, FaChalkboardTeacher } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdOutlineMuseum, MdOutlineWbSunny, MdOutlineExplore, MdOutlineCelebration, MdOutlineAssignment, MdAppRegistration, MdOutlineCloudUpload } from "react-icons/md"
import { PiStudent } from "react-icons/pi"
import { QuestionDropdown } from "../dropdown"

interface ProgramCardsProps{
    title:string
}

interface InformationProps {
    title: string
    label: string
}

interface RegistrationCardsProps {
    link: string
}

const informations = [
    {
        title: 'Lokasi',
        info: 'kp.ciburial 03/10, ds. alamendah',
        icon: FaLocationDot,
    },
    {
        title: 'jumlah guru',
        info: '20',
        icon: FaChalkboardTeacher ,
    },
    {
        title: 'jumlah siswa',
        info: '90',
        icon: PiStudent,
    },
]

const informations_mts = [
    {
        title: 'Lokasi',
        info: 'kp. ciburial 03/10, ds. alamendah',
        icon: FaLocationDot,
    },
    {
        title: 'jumlah guru',
        info: '34',
        icon: FaChalkboardTeacher ,
    },
    {
        title: 'jumlah siswa',
        info: '274',
        icon: PiStudent,
    },
]

const informations_mi = [
    {
        title: 'Lokasi',
        info: 'kp. ciburial 04/10, ds.alamendah',
        icon: FaLocationDot,
    },
    {
        title: 'jumlah guru',
        info: '9',
        icon: FaChalkboardTeacher ,
    },
    {
        title: 'jumlah siswa',
        info: '60',
        icon: PiStudent,
    },
]

const informations_ra = [
    {
        title: 'Lokasi',
        info: 'kp. ciburial 04/10, ds. alamendah',
        icon: FaLocationDot,
    },
    {
        title: 'jumlah guru',
        info: '4',
        icon: FaChalkboardTeacher ,
    },
    {
        title: 'jumlah siswa',
        info: '24',
        icon: PiStudent,
    },
]

const programs_ma = [
    {
        title: 'mulok',
        icon: MdOutlineMuseum ,
    },
    {
        title: 'sholat dhuha',
        icon: MdOutlineWbSunny ,
    },
    {
        title: 'PBL',
        icon: MdOutlineExplore ,
    },
    {
        title: 'Perayaan',
        icon: MdOutlineCelebration,
    },
]

const programs_mi_mts = [
    {
        title: 'mulok',
        icon: MdOutlineMuseum ,
    },
    {
        title: 'sholat dhuha',
        icon: MdOutlineWbSunny ,
    },
    {
        title: 'Perayaan',
        icon: MdOutlineCelebration,
    },
]

const cth_4_gambar = [
    {
        src:'/img/profile.jpg',
    },
    {
        src:'/img/profile.jpg',
    },
    {
        src:'/img/profile.jpg',
    },
    {
        src:'/img/profile.jpg',
    },
]

const flow_registration = [
    {
        icon: MdOutlineAssignment,
        caption: 'isi formulir pendaftaran',
    },
    {
        icon: MdOutlineCloudUpload,
        caption: 'unggah persyaratan',
    },
    {
        icon: MdAppRegistration,
        caption: 'isi formulir pendaftaran',
    },
]

export function Information({title, label}:InformationProps){
    const dataMap: Record<string, any[]> = {
        ma: informations,
        mts: informations_mts,
        mi: informations_mi,
        ra: informations_ra,
    }

    const selectedData =  dataMap[label] || []
    return(
        <div className="grid md:grid-cols-3">
            {selectedData.map((info, index) => {
                const Icon = info.icon
                return (
                    <div 
                        key={index}
                        className="mx-auto grid items-center justify-center gap-5"
                    >
                        <Icon 
                            size={30}
                            className="flex mx-auto mt-3" 
                        />
                        <div className="text-center mx-auto mb-3">
                            <h3 className="font-semibold capitalize">
                                {info.title}
                            </h3>
                            <p>
                                {info.info}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export function ProgramCards({title}:ProgramCardsProps){
    const isMA = title === 'MA'
    const programs = isMA
        ? programs_ma
        : title === 'MTs' || title === 'MI'
        ? programs_mi_mts
        : []

    return (
        <div className={`grid my-5 gap-3 ${isMA ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
            {title === 'MA' ?
            programs_ma.map((prg, index) => {
                const Icon = prg.icon
                return (
                    <div
                        key={index}
                        className="mx-auto my-5"
                    >
                        <Icon 
                            size={50}
                            className="mx-auto mb-5"
                        />
                        <h3 className="capitalize text-lg font-semibold text-center">
                            {prg.title}
                        </h3>
                    </div>
                )
            }) 
            
            : title === 'MTs' || 'MI'?
            programs_mi_mts.map((prg, index) => {
                const Icon = prg.icon
                return (
                    <div
                        key={index}
                        className="mx-auto my-5"
                    >
                        <Icon 
                            size={50}
                            className="mx-auto mb-5"
                        />
                        <h3 className="capitalize text-lg font-semibold text-center">
                            {prg.title}
                        </h3>
                    </div>
                )
            }) :
            ''}
        </div>
    )
}

export function GalleryCards(){
    return (
        <div className="grid md:grid-cols-4 mx-10 gap-2">
            {cth_4_gambar.map((img, index) => {
                return (
                    <div
                        key={index}
                        className="mx-auto my-5"
                    >
                        <Image
                            src={img.src}
                            alt=""
                            height={200}
                            width={200}
                            className="rounded-lg"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export function RegistrationCards({link}:RegistrationCardsProps){
    return (
        <div className="grid md:grid-cols-3">
            <div className="col-span-2">
                <div className="grid md:grid-cols-3 items-start">
                    {flow_registration.map((regis, index) => {
                        const Icon = regis.icon
                        const isLast = index === flow_registration.length - 1
                        return(
                            <div
                                key={index}
                                className="flex items-center justify-between mx-10 my-5"
                            >
                                {/* text + caption */}
                                <div className="text-center mt-5">
                                    <div className="w-15 h-15 mx-auto flex items-center justify-center rounded-md bg-sky-100">
                                        <Icon 
                                            size={50} 
                                        />
                                    </div>

                                    <p className="capitalize my-5 text-lg mx-6">
                                        {regis.caption}
                                    </p>
                                </div>

                                {/* arrow */}
                                {!isLast && (
                                    <FaArrowRight size={30}/>
                                )}
                            </div>

                        )
                    })}
                </div>
            </div>
                
                {/* dorpdown */}
                <QuestionDropdown link={link}/>

        </div>
    )
}