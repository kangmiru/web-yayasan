'use client'

import { ButtonA, ButtonD } from "../button";
import { TitleTypeD } from "../title";
import { GalleryCards, Information, ProgramCards, RegistrationCards } from "./cards";
import { InformationText } from "./text";
import { motion } from "framer-motion"

interface AboutSchoolProps {
    madrasah:string
    link:string
    label:string
}

interface ProgramPartsProps{
    madrasah:string
}

interface RegistrationFlowPartsProps {
    link: string
}

const textRA = `RA Alif Al-ittifaq didirikan pada tahun 2008 dibangun dengan tujuan untuk membuat sebuah madrasah didalam lingkungan kampung Ciburial.

Keinginan dari sesepuh yayasan al-ittifaq yakni alm. KH. Fuad Affandi agar dapat menyediakan pendidikan bagi masyarakat dan santri disekitar desa Alamendah.`

const textMI = `MI Alif Al-ittifaq didirikan pada tahun 2008 dibangun dengan tujuan untuk membuat sebuah madrasah didalam lingkungan kampung Ciburial.

Keinginan dari sesepuh yayasan al-ittifaq yakni alm. KH. Fuad Affandi agar dapat menyediakan pendidikan bagi masyarakat dan santri disekitar desa Alamendah.`

const textMTs = `MI Alif Al-ittifaq didirikan pada tahun 2008 dibangun dengan tujuan untuk membuat sebuah madrasah didalam lingkungan kampung Ciburial.

Keinginan dari sesepuh yayasan al-ittifaq yakni alm. KH. Fuad Affandi agar dapat menyediakan pendidikan bagi masyarakat dan santri disekitar desa Alamendah.`

const textMA = `MI Alif Al-ittifaq didirikan pada tahun 2008 dibangun dengan tujuan untuk membuat sebuah madrasah didalam lingkungan kampung Ciburial.

Keinginan dari sesepuh yayasan al-ittifaq yakni alm. KH. Fuad Affandi agar dapat menyediakan pendidikan bagi masyarakat dan santri disekitar desa Alamendah.`


export function AboutSchool({madrasah, link, label}:AboutSchoolProps){
    return (
        <div className="bg-sky-100 p-10 rounded-sm">
            <TitleTypeD title={`tentang ${madrasah}`} />

            <div className="grid md:grid-cols-3 my-5 gap-3 md:gap-5 items-start">
                <div className="col-span-2">
                    {madrasah === 'MI alif al-ittifaq' ?
                        <InformationText 
                            text={textMI}
                        />
                        : madrasah === 'RA alif al-ittifaq' ?
                        <InformationText 
                            text={textRA}
                        />
                        : madrasah === 'MTs alif al-ittifaq' ?
                        <InformationText 
                            text={textMTs}
                        />
                        : madrasah === 'MA alif al-ittifaq' ?
                        <InformationText 
                            text={textMA}
                        />
                        : ''
                    }

                    <motion.div 
                        className="flex gap-3 items-center"
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.7}}
                        viewport={{once:true}}
                    >
                        <ButtonA title="Daftar sekarang" link={link}/>
                        <ButtonD title="unduh brosur" link={link} />
                    </motion.div>
                </div>

                

                <motion.div 
                    className="w-full rounded-sm bg-white border border-black/10 shadow-sm backdrop-blur-2xl"
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.8, ease:'easeOut'}}
                >
                    <Information title={madrasah} label={label}/>
                </motion.div>
            </div>

        </div>
    )
}

export function ProgramParts({madrasah}:ProgramPartsProps){
    return (
        <motion.div 
            className="px-10 py-5 rounded-sm"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <div className="text-center">
                <TitleTypeD title="program unggulan madrasah"/>
            </div>

            <ProgramCards
                title={madrasah}
            />

        </motion.div>
    )
}

export function GalleryParts(){
    return(
        <motion.div 
            className="px-10 py-5 bg-sky-100 rounded-sm"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <div className="text-center">
                <TitleTypeD title="galeri & aktivitas siswa" />
            </div>

            <GalleryCards/>

            <div className="mx-20 my-5 text-center">
                <ButtonA 
                    title="Selengkapnya"
                    link="https://www.instagram.com/madrasahalifofc/"
                />
            </div>
        </motion.div>
    )
}

export function RegistrationFlowParts({link}:RegistrationFlowPartsProps){
    return(
        <motion.div 
            className="px-10 py-5 rounded-sm"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <TitleTypeD title="alur pendaftaran siswa baru"/>

            <div className="mt-3">
                <RegistrationCards link={link} />
            </div>
        </motion.div>
    )
}