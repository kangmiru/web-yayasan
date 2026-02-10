import Image from "next/image"
import { FaChalkboardTeacher } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdOutlineMuseum, MdOutlineWbSunny, MdOutlineExplore, MdOutlineCelebration } from "react-icons/md"
import { PiStudent } from "react-icons/pi"

interface ProgramCardsProps{
    title:string
}

const informations = [
    {
        title: 'Lokasi',
        info: 'kab.bandung, jawa barat',
        icon: FaLocationDot,
    },
    {
        title: 'jumlah guru',
        info: '30',
        icon: FaChalkboardTeacher ,
    },
    {
        title: 'jumlah siswa',
        info: '600',
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

export function Information(){
    return(
        <div className="grid grid-cols-3">
            {informations.map((info, index) => {
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
        <div className={`grid my-5 gap-3 ${isMA ? 'grid-cols-4' : 'grid-cols-3'}`}>
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
        <div className="grid grid-cols-4 mx-10 gap-2">
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