import Link from "next/link";
import { ButtonA, ButtonB, ButtonC, ButtonD } from "../button";
import { TitleTypeD } from "../title";
import { GalleryCards, Information, ProgramCards } from "./cards";
import { InformationText } from "./text";

interface AboutSchoolProps {
    madrasah:string
    link:string
}

interface ProgramPartsProps{
    madrasah:string
}

const textMI = `MI Alif Al-ittifaq didirikan pada tahun 2008 dibangun dengan tujuan untuk membuat sebuah madrasah didalam lingkungan kampung Ciburial.

Keinginan dari sesepuh yayasan al-ittifaq yakni alm. KH. Fuad Affandi agar dapat menyediakan pendidikan bagi masyarakat dan santri disekitar desa Alamendah.`


export function AboutSchool({madrasah, link}:AboutSchoolProps){
    return (
        <div className="bg-sky-100 p-10 rounded-sm">
            <TitleTypeD title={`tentang ${madrasah}`} />

            <div className="grid grid-cols-3 my-5 gap-5 items-start">
                <div className="col-span-2">
                    {madrasah === 'MI alif al-ittifaq' ?
                        <InformationText 
                            text={textMI}
                        />
                        : ''
                    }

                    <div className="flex gap-3 items-center">
                        <ButtonA title="Daftar sekarang" link={link}/>
                        <ButtonD title="unduh brosur" link={link} />
                    </div>
                </div>

                

                <div className="max-w-screen rounded-sm bg-white border border-black/10 shadow-sm backdrop-blur-2xl">
                    <Information/>
                </div>
            </div>

        </div>
    )
}

export function ProgramParts({madrasah}:ProgramPartsProps){
    return (
        <div className="px-10 py-5 rounded-sm">
            <div className="text-center">
                <TitleTypeD title="program unggulan madrasah"/>
            </div>

            <ProgramCards
                title={madrasah}
            />

        </div>
    )
}

export function GalleryParts(){
    return(
        <div className="px-10 py-5 bg-sky-100 rounded-sm">
            <div className="text-center">
                <TitleTypeD title="galeri & aktivitas siswa" />
            </div>

            <GalleryCards/>

            <div className="mx-20 my-5 text-center">
                <ButtonA 
                    title="Selengkapnya"
                    link=""
                />
            </div>
        </div>
    )
}