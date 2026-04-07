'use client'

import Image from "next/image"
import { InstagramGrid, TiktoGrid, YoutubeGrid } from "./social-media"
import Link from "next/link"

const sekolah = [
    {
        madrasah: 'RA Alif Al-ittifaq',
        tingkat: 'Pendidikan setingkat TK',
        visi: 'dengan pendidikan yang islami mencetak siswa-siswi yang mandiri dan berbudi pekerti luhur',
        logo: '/img/logo2.png',
        link: '/organitation/ra',
        foto: '/img/sekolah/ra.png',
    },
    {
        madrasah: 'MI Alif Al-ittifaq',
        tingkat: 'Pendidikan setingkat SD',
        visi: 'dengan pendidikan yang islami mencetak siswa-siswi yang mandiri dan berbudi pekerti luhur',
        logo: '/img/logo2.png',
        link: '/organitation/mi',
        foto: '/img/sekolah/mi.png',
    },
    {
        madrasah: 'MTs Alif Al-ittifaq',
        tingkat: 'Pendidikan setingkat SMP',
        visi: 'Agamis Lingkungan Inofatif dan Futuristik',
        logo: '/img/logo2.png',
        link: '/organitation/mts',
        foto: '/img/sekolah/mi.png',
    },
    {
        madrasah: 'MA Alif Al-ittifaq',
        tingkat: 'Pendidikan setingkat SMA',
        visi: 'agamis lingkungan inovatif dan futuristik',
        logo: '/img/logo2.png',
        link: '/organitation/ma',
        foto: '/img/sekolah/mi.png',
    },
]

const social_media = [
    {
        media : 'instagram',
        api: 'https://www.instagram.com/madrasahalifofc/',
        logo: '/img/instagram.png',
    },
    {
        media : 'youtube',
        api: 'https://www.youtube.com/@alifboardingschool1126',
        logo: '/img/youtube.png',
    },
    {
        media : 'tiktok',
        api: 'https://www.tiktok.com/discover/madrasah-alif-al-ittifaq',
        logo: '/img/tiktok.png',
    },
]

export function OrganisationList(){
    return(
        <div className="grid md:grid-cols-3 mx-5 gap-5">
            {sekolah.map((skl,index) => {
                return(
                    <div 
                        key={index}
                        className={`bg-white border border-black/10 shadow-sm backdrop-blur-2xl rounded-md ${sekolah.length % 3 === 1 && index === sekolah.length - 1 
                            ? "md:col-start-2"
                            : ""
                        }`} 
                    >
                        <Image
                            src={skl.foto}
                            alt=""
                            width={300}
                            height={300}
                            className="items-center justify-center flex mx-auto my-3 rounded-md"
                        />
                        <h1 className="text-center lg:text-3xl font-bold md:text-xl">{skl.madrasah}</h1>

                        <div className="lg:m-5 md:mt-3">
                            <hr className="my-2"/>

                            <p className="text-center font-normal capitalize">
                                {skl.visi}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export function SocialMediaList(){
    return(
        <div className="grid lg:grid-cols-3 mx-5 gap-5 md:grid-cols-4">
            {social_media.map((media, index) =>{
                return(
                    <div
                        key={index} 
                        className={`bg-white border border-black/10 shadow-sm backdrop-blur-2xl rounded-md ${
                            social_media.length % 2 === 1 && index === social_media.length - 1
                            ? 'lg:col-span-1 md:col-span-2 md:col-start-2'
                            : 'lg:col-span-1 md:col-span-2'
                        }`}
                    >
                        <div className="flex my-4 items-center justify-center gap-5" >
                            <Image
                                src={media.logo}
                                alt=""
                                width={35}
                                height={35}
                            />
                            <Link href={media.api}>
                                <h2 className="lg:text-2xl font-semibold text-blue-900 capitalize md:text-xl hover:text-black hover:cursor-pointer">
                                    {media.media}
                                </h2>
                            </Link>
                        </div>
                        <hr className="my-5 mx-3"/>

                        {media.media === 'instagram'
                            ? <InstagramGrid/>
                            : media.media === 'youtube'
                            ? <YoutubeGrid/>
                            : <TiktoGrid/>
                        }

                    </div>
                )
            })}


        </div>
    )
}

export function SchoolList(){
    return (
        <div className="grid grid-cols-4 mx-5 gap-5 my-5">
            {sekolah.map((skl, index) => {
                return(
                    <div
                        key={index}
                        className="bg-white border border-black/10 shadow-sm backdrop-blur-2xl rounded-md"
                    >
                        <Image
                            src={skl.logo}
                            alt=""
                            height={450}
                            width={200}
                            className="mx-auto"
                        />

                        <h1 className="text-center capitalize mb-5 font-semibold text-lg">
                            {skl.madrasah}
                        </h1>

                        <div className="mb-5 mx-5 text-end">
                            <Link href={skl.link} className="underline text-blue-900 capitalize">
                                selengkapnya
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}