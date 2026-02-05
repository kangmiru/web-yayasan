import { FaChalkboardTeacher } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdOutlineMuseum, MdOutlineWbSunny, MdOutlineExplore, MdOutlineCelebration } from "react-icons/md"
import { PiStudent } from "react-icons/pi"

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

const programs = [
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

export function ProgramCards(){
    return (
        <div className="grid grid-cols-4 my-5 gap-3">
            {programs.map((prg, index) => {
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
            })}
        </div>
    )
}