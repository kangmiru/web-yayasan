'use client'

import Image from "next/image";
import { ButtonA, ButtonB } from "./button";
import { OrganisationList } from "./organisation";

export function HeroParts(){
    return(
        <section className="w-full h-screen overflow-hidden relative rounded-sm">

            {/* Hero Image */}
            <Image 
                src={'/img/hero.jpg'}
                alt=""
                fill
                className="object-cover"
                loading="lazy"
            />

            {/* Gradasi overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-900/90"></div>

            {/* Konten hero */}
            <div className="relative z-10 flex h-full items-center ms-10">
                <div className="max-w-7xl mx-auto px-6 text-white">
                    <h1 className="capitalize text-3xl font-bold leading-9 my-4">
                        kun kal kawung wa la takun kal maung
                    </h1>
                    <p className="grid grid-cols-2 text-xl tracking-wider leading-relaxed my-4">
                        Jadilah seperti kawung yang semua bagiannya dapat dimanfaatkan dan janganlah seperti macan yang hanya ditakuti dan tidak memberikan manfaat apapun
                    </p>
                    <div className="my-4 flex flex-col-2 gap-5">
                        <ButtonA/>
                        <ButtonB/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function AboutUsParts(){
    return(
        <section className="my-10 max-w-screen rounded-sm bg-white border border-black/10 shadow-sm backdrop-blur-2xl">
            <div className="grid grid-cols-6 gap-2 my-4">
                <div className="col-start-1 col-end-4 mx-20">
                    <h2 className="capitalize text-start text-2xl font-semibold text-blue-900 my-4 underline underline-offset-8">
                        tentang kami
                    </h2>
                    <p className="tracking-wide text-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aspernatur id nam autem repudiandae, quasi provident ipsa animi eaque ullam sed, ab ad cumque! Rem in asperiores id veritatis laboriosam!
                    </p>
                    <p className="tracking-wide mx-4 mt-4 text-md">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </p>
                </div>
               
               <div className="col-start-5 col-end-6">
                    <Image
                        src={'/img/aboutus.jpg'}
                        alt=""
                        width={300}
                        height={400}
                        className="rounded-sm"
                    />
               </div>
            </div>
        </section>
    )
}

export function OrganitationParts(){
    return(
        <section className="my-10 max-w-screen rounded-sm bg-gray-100/10 border border-black/10 shadow-sm backdrop-blur-2xl">
            <div className="w-screen mt-5">
                <h2 className="capitalize text-2xl text-center font-semibold text-blue-900 underline underline-offset-8 decoration-green-700">
                    sekolah/organisasi di bawah naungan kami
                </h2>
                <p className="my-5 text-md text-center font-medium">
                    Ini adalah organisasi yang bergerak bersama kami.
                </p>
            </div>

            <div className="mb-5">
                <OrganisationList/>
            </div>
        </section>
    )
}