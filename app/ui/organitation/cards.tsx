import { FaChalkboardTeacher } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
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