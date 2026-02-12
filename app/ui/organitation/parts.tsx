import { ButtonA, ButtonB, ButtonC, ButtonD } from "../button";
import { TitleTypeD } from "../title";
import { GalleryCards, Information, ProgramCards, RegistrationCards } from "./cards";
import { InformationText } from "./text";

interface AboutSchoolProps {
    madrasah:string
    link:string
    label:string
}

interface ProgramPartsProps{
    madrasah:string
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

                    <div className="flex gap-3 items-center">
                        <ButtonA title="Daftar sekarang" link={link}/>
                        <ButtonD title="unduh brosur" link={link} />
                    </div>
                </div>

                

                <div className="w-full rounded-sm bg-white border border-black/10 shadow-sm backdrop-blur-2xl">
                    <Information title={madrasah} label={label}/>
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

export function RegistrationFlowParts(){
    return(
        <div className="px-10 py-5 rounded-sm">
            <TitleTypeD title="alur pendaftaran siswa baru"/>

            <div className="mt-3">
                <RegistrationCards/>
            </div>
        </div>
    )
}