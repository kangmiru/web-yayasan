import Image from "next/image"
import { BsTelephone } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"

const contacts = [
    {
        label:'Whatsapp',
        nilai:'0811-1111-1111',
        icon: FaWhatsapp,
    },
    {
        label:'Telepon',
        nilai:'0221-1111-1111',
        icon: BsTelephone,
    },
    {
        label:'Email',
        nilai:'madrasahalifofc@gmail.com',
        icon: TfiEmail,
    },
]

export function ContactUs(){
    return(
        <div className="text-white mx-5">
            <h1 className="capitalize text-xl font-semibold">
                Hubungi Kami
            </h1>

            <hr className="white my-3"/>

            {contacts.map((contact,index)=>{
                const Icon = contact.icon
                return(
                    <div
                        key={index} 
                        className="flex items-center"
                    >
                        <Icon className="h-10"/>
                        <p className=" mx-5">
                            {contact.nilai}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}