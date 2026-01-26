'use client'

import Image from "next/image"
import { InstagramGrid, TiktoGrid, YoutubeGrid } from "./social-media"

const sekolah = [
    {
        madrasah: 'RA Alif Al-ittifaq',
        tingkat: 'Pendidikan setingkat SD/MI',
        visi: 'dengan pendidikan yang islami mencetak siswa-siswi yang mandiri dan berbudi pekerti luhur',
        logo: '/img/logo2.png',
    },
    {
        madrasah: 'MI Alif Al-ittifaq',
        tingkat: 'Pendidikan setingkat SD/MI',
        visi: 'dengan pendidikan yang islami mencetak siswa-siswi yang mandiri dan berbudi pekerti luhur',
        logo: '/img/logo2.png',
    },
    {
        madrasah: 'MTs Alif Al-ittifaq',
        tingkat: 'Pendidikan setingkat SD/MI',
        visi: 'dengan pendidikan yang islami mencetak siswa-siswi yang mandiri dan berbudi pekerti luhur',
        logo: '/img/logo2.png',
    },
    {
        madrasah: 'MA Alif Al-ittifaq',
        tingkat: 'Pendidikan setingkat SD/MI',
        visi: 'dengan pendidikan yang islami mencetak siswa-siswi yang mandiri dan berbudi pekerti luhur',
        logo: '/img/logo2.png',
    },
]

const social_media = [
    {
        media : 'instagram',
        api: '',
        logo: '/img/instagram.png',
    },
    {
        media : 'youtube',
        api: '',
        logo: '/img/youtube.png',
    },
    {
        media : 'tiktok',
        api: '',
        logo: '/img/tiktok.png',
    },
]

export function OrganisationList(){
    return(
        <div className="grid grid-cols-3 mx-5 gap-5">
            {sekolah.map((skl,index) => {
                return(
                    <div 
                        key={index}
                        className={`bg-white border border-black/10 shadow-sm backdrop-blur-2xl rounded-md ${sekolah.length % 3 === 1 && index === sekolah.length - 1 
                            ? "col-start-2"
                            : ""
                        }`} 
                    >
                        <Image
                            src={skl.logo}
                            alt=""
                            width={150}
                            height={150}
                            className="items-center justify-center flex mx-auto"
                        />
                        <h1 className="text-center text-3xl font-bold">{skl.madrasah}</h1>

                        <div className="m-5">
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
        <div className="grid grid-cols-3 mx-5 gap-5">
            {social_media.map((media, index) =>{
                return(
                    <div
                        key={index} 
                        className={`bg-white border border-black/10 shadow-sm backdrop-blur-2xl rounded-md`}
                    >
                        <div className="flex my-4 items-center justify-center gap-5" >
                            <Image
                                src={media.logo}
                                alt=""
                                width={35}
                                height={35}
                            />
                            <h2 className="text-2xl font-semibold text-blue-900 capitalize">
                                {media.media}
                            </h2>
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