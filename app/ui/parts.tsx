'use client'

import Image from "next/image";
import { ButtonA, ButtonB, ButtonC, ButtonD } from "./button";
import { OrganisationList, SocialMediaList } from "./cards";
import { ContactUs, SendMessage } from "./contact";
import { TitleTypeA, TitleTypeB } from "./title";
import React, { useState } from "react";
import { easeOut, motion } from "framer-motion";

const aboutUs =`
Yayasan Al-Ittifaq Bandung merupakan lembaga yang berfokus pada pengelolaan dan pengembangan pendidikan, dengan akar sejarah yang panjang sejak tahun 1934

Seiring perkembangan zaman, berbagai unit seperti agribisnis, koperasi, dan pesantren telah berkembang secara mandiri di bawah yayasan yang berbeda. Hal ini menjadi bagian dari transformasi kelembagaan untuk menciptakan pengelolaan yang lebih fokus dan profesional.

Saat ini, Yayasan Al-Ittifaq Bandung berkomitmen menghadirkan pendidikan yang berkualitas, berkarakter, dan berbasis nilai keislaman, guna mencetak generasi yang berilmu, berakhlak, dan mandiri.
`

export function HeroParts(){
    return(
        <section className="max-w-screen h-screen overflow-hidden relative rounded-sm pt-20 md:pt-24">

            {/* Hero Image */}
            <Image 
                src={'/img/aktivitas.png'}
                alt=""
                fill
                className="object-cover"
                loading="lazy"
            />

            {/* Gradasi overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-900/90"></div>

            {/* Konten hero */}
            <div className="relative z-10 flex h-full items-center md:ms-10 sm:mx-10 md:mt-0 sm:mt-24">
                <motion.div 
                    className="md:max-w-7xl mx-auto px-6 text-white"
                    initial={{opacity:0, x:-100}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.8, ease:'easeOut'}}
                >
                    <h1 className="capitalize text-3xl font-bold leading-9 md:my-4">
                        kun kal kawung wa la takun kal maung
                    </h1>
                    <p className="md:grid md:grid-cols-2 text-xl tracking-wider leading-relaxed my-4">
                        Jadilah seperti kawung yang semua bagiannya dapat dimanfaatkan dan janganlah seperti macan yang hanya ditakuti dan tidak memberikan manfaat apapun
                    </p>
                    <div className="my-4 flex flex-col-2 gap-5">
                        <ButtonA title="donasi sekarang" link="/maintenance"/>
                        <ButtonB title="pelajari lebih lanjut" link="/about-us"/>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export function AboutUsParts(){
    return(
        <section className="my-10 w-full rounded-sm bg-white border border-black/10 shadow-sm backdrop-blur-2xl">
            <div className="grid lg:grid-cols-6 gap-2 my-4 md:grid-cols-4">

                <motion.div 
                    className="lg:col-start-1 lg:col-span-4 md:mx-20 mx-5 md:col-span-3"
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.7}}
                    viewport={{once:true}}
                >
                    <TitleTypeA title="tentang kami"/>

                    <p className="tracking-wide text-md whitespace-pre-line">
                        {aboutUs}
                    </p>

                    <div className="my-3 text-center">
                        <ButtonA title="selengkapnya" link="/about-us"/>
                    </div>
                    
                </motion.div>
               
                <motion.div 
                    className="lg:col-start-5 lg:col-span-2 md:col-auto md:mx-5 mx-auto"
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.7}}
                    viewport={{once:true}}
                >
                    <Image
                        src={'/img/pendiri/kh_fuad.png'}
                        alt=""
                        width={300}
                        height={400}
                        className="rounded-sm"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export function OrganitationParts(){
    return(
        <section className="my-10 max-w-screen rounded-sm bg-gray-100/50 border border-black/10 shadow-sm backdrop-blur-2xl">
            <motion.div 
                className="w-full mt-5"
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.7}}
                viewport={{once:true}}
            >
                <div className="mx-2">
                    <TitleTypeB title="sekolah/organisasi di bawah naungan kami"/>
                </div>
                
                <p className="my-5 text-md text-center font-medium">
                    Ini adalah organisasi yang bergerak bersama kami.
                </p>
            </motion.div>

            <motion.div 
                className="mb-5"
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.7}}
                viewport={{once:true}}
            >
                <OrganisationList/>
            </motion.div>
        </section>
    )
}

export function SocialMediaParts(){
    return(
        <section className="mt-10 max-w-screen rounded-sm bg-white border border-black/10 shadow-sm backdrop-blur-2xl">
            <motion.div 
                className="m-5"
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.7}}
                viewport={{once:true}}
            >
                <SocialMediaList/>
            </motion.div>
        </section>
    )
}

export function FooterParts(){
    const [form, setForm] = useState({
        nama:"",
        email:"",
        pesan:""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

    }

    return (
        <section className="max-w-screen rounded-sm bg-blue-900 border border-black/10 shadow-sm backdrop-blur-2xl">
            <div className="grid md:grid-cols-3 m-5 gap-3">
                <div className="mx-3">
                    <Image
                        src={'/img/logo1.png'}
                        alt=""
                        width={200}
                        height={100}
                        className="flex items-center justify-center mx-auto"
                    />

                    <hr className="text-white my-3"/>

                    <p className="text-white mx-3 capitalize">
                        Kp. Ciburial 02/10, Desa Alamendah, Kec. Rancabali, Kab. Bandung, Jawa Barat, kode pos: 40973
                    </p>
                </div>

                {/* kontak */}
                <ContactUs/>

                {/* Message */}
                <SendMessage/>

            </div>
        </section>
    )
}