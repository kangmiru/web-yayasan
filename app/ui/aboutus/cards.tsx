import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdHandshake } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";

const values = [
    {
        logo: MdHandshake,
        title: 'integritas',
    },
    {
        logo: FaHeart,
        title: 'kepedulian',
    },
    {
        logo: PiPlantFill ,
        title: 'keberlanjutan',
    },
    {
        logo: FaPeopleGroup,
        title: 'kolaborasi',
    },
]

interface VisiMisiProps {
    logo: string
    title: string
    text: string
}

export function VisiMisi({logo, title, text}:VisiMisiProps){
    return(
        <div className="justify-center items-center mx-10">
            <Image
                src={logo}
                alt=""
                height={300}
                width={300} 
                className="mx-auto"
            />
            <h3 className="capitalize text-lg font-extrabold">
                {title}
            </h3>
            <p className="">
                {text}
            </p>
        </div>
    )
}

export function Values(){
    return (
        <div className="grid grid-cols-4 mx-10">
            {values.map((value, index) => {
                const Icon = value.logo
                return (
                    <div
                        key={index}
                        className="flex justify-center"
                    >
                        <div className="grid grid-rows-2">
                            <Icon 
                                size={75}
                                className="m-5 flex justify-center items-center"
                            />

                            <h3 className="uppercase text-lg font-semibold">
                                {value.title}
                            </h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}