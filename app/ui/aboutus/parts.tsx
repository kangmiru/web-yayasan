import Image from "next/image"
import { TeamCards, Values, VisiMisi } from "./cards"
import { TitleAboutUs } from "../title"

const timelineData = [
    {
        year:'1990',
        title:'pendirian yayasan',
        description:'organisasi didirikan dengan tujuan tertentu',
        icon:'',
        color:'',
    },
    {
        year:'1990',
        title:'pendirian yayasan',
        description:'organisasi didirikan dengan tujuan tertentu',
        icon:'',
        color:'',
    },
    {
        year:'1990',
        title:'pendirian yayasan',
        description:'organisasi didirikan dengan tujuan tertentu',
        icon:'',
        color:'',
    },
    {
        year:'1990',
        title:'pendirian yayasan',
        description:'organisasi didirikan dengan tujuan tertentu',
        icon:'',
        color:'',
    },
]

const visiMisi = [
    {
        logo:'/img/visi.png',
        title: 'visi kami',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint, saepe voluptatibus repudiandae rerum odio?',
    },
    {
        logo:'/img/misi.png',
        title: 'misi kami',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint, saepe voluptatibus repudiandae rerum odio?',
    },
]

export function DraftAboutUs(){
    return(
        <div className="w-full">
            <TitleAboutUs title="siapa kami" />
            <div className="flex flex-cols-2 ">
                <div className="mx-10 rounded-md indent-4 text-justify justify-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio asperiores a suscipit sapiente temporibus sed doloremque, in modi accusantium illo veniam, quod assumenda quidem perferendis illum provident, porro sint non maiores aliquid nemo delectus optio veritatis. Repudiandae vel, iure nam accusamus quasi vitae ratione eum exercitationem minus nesciunt placeat!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio asperiores a suscipit sapiente temporibus sed doloremque, in modi accusantium illo veniam, quod assumenda quidem perferendis illum provident, porro sint non maiores aliquid nemo delectus optio veritatis. Repudiandae vel, iure nam accusamus quasi vitae ratione eum exercitationem minus nesciunt placeat!
                    </p>
                    <VisiMisiParts /> 
                </div>
                <div className="mx-5 w-full justify-center mb-5">
                    <TimelineParts/>
                </div>
            </div>
        </div>
    )
}

export function TimelineParts(){
    return (
        <div className="relative border-l-2 border-blue-900">
            {timelineData.map((timeline,index) => {
                return(
                    <div key={index} className="mb-12 -top-5 relative">
                        {/* dot */}
                        <span className="absolute left-0 top-1 -translate-x-1/2 w-6 h-6 bg-blue-900 rounded-full border-4 border-blue-500"/>

                        {/* content */}
                        <div className="ms-5">
                            <h3 className="text-xl font-bold text-gray-900">
                                {timeline.year}
                            </h3>
                            <p className="mt-2 leading-relaxed">
                                {timeline.description}
                            </p>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export function VisiMisiParts(){
    return(
        <div className="grid grid-cols-2 justify-center items-center text-center my-5">
            {visiMisi.map((vm, index) =>{
                return (
                    <VisiMisi 
                        key={index}
                        logo={vm.logo}
                        title={vm.title}
                        text={vm.text}
                    />
                )
            })}
        </div>
    )
}

export function OurValuesParts(){
    return (
        <div className="m-5">
            <TitleAboutUs 
                title="nilai-nilai kami"
            />

            <Values/>
        </div>
    )
}

export function FounderTeamParts(){
    return (
        <div className="mx-5 mt-5 mb-10">
            <TitleAboutUs title="pendiri & tim inti" />

            <TeamCards/>
        </div>
    )
}