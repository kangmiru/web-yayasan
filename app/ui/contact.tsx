import Image from "next/image"
import { BsTelephone } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"
import { ButtonC } from "./button"

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

export function SendMessage(){
    return (
        <div className="bg-sky-100 mx-2 p-3 rounded-md">
            <h1 className="capitalize text-xl font-semibold text-blue-900">
                kirim pesan
            </h1>

            <div className="my-2">
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input
                            id="nama"
                            name="nama"
                            type="text"
                            placeholder="Nama"
                            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input
                            id="email"
                            name="nama"
                            type="text"
                            placeholder="Email"
                            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input
                            id="pesan"
                            name="pesan"
                            type="text"
                            placeholder="Pesan"
                            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="mt-2">
                    <ButtonC/>
                </div>
            </div>
        </div>
    )
}