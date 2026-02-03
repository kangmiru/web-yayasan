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

const teams =[
    {
        foto:'/img/profile.jpg',
        name: 'Lorem, ipsum.',
        position: 'pendiri'
    },
    {
        foto:'/img/profile.jpg',
        name: 'Lorem, ipsum.',
        position: 'pendiri'
    },
    {
        foto:'/img/profile.jpg',
        name: 'Lorem, ipsum.',
        position: 'pendiri'
    },
    {
        foto:'/img/profile.jpg',
        name: 'Lorem, ipsum.',
        position: 'pendiri'
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
                        className="flex justify-center my-5"
                    >
                        <div className="grid grid-rows-2 gap-5">
                            <Icon 
                                size={75}
                                className="mx-auto"
                            />

                            <h3 className="uppercase text-lg font-semibold text-center">
                                {value.title}
                            </h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export function TeamCards(){
    return (
        <div className="grid grid-cols-4 mx-10">
            {teams.map((team,index)=> {
                return(
                    <div
                        key={index}
                        className="grid"
                    >
                        <Image
                            src={team.foto}
                            alt=""
                            height={200}
                            width={200}
                            className="rounded-full mx-auto my-5"
                        />

                        <div className="mt-5 text-center">
                            <h3 className="uppercase text-lg font-semibold">
                                {team.name}
                            </h3>
                            
                            <p className="mt-3 capitalize font-medium text-gray-500">
                                {team.position}
                            </p>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}