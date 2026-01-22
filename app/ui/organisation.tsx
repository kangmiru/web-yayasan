'use client'

import Image from "next/image"

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