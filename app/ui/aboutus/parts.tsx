import Image from "next/image"
import { GraduateCards, TeamCards, Values, VisiMisi } from "./cards"
import { TitleTypeC } from "../title"
import React, { JSX } from "react"

const timelineData = [
    {
        year:'1934',
        title:'pendirian yayasan',
        description:'Awal berdirinya yayasan',
        icon:'',
        color:'',
    },
    {
        year:'2003',
        title:'berdirinya sekolah formal',
        description:'Berdirinya sekolah formal tingkat MTS/SMP',
        icon:'',
        color:'',
    },
    {
        year:'2006',
        title:'berdirinya sekolah formal',
        description:'Berdirinya sekolah formal tingkat MA/SMA',
        icon:'',
        color:'',
    },
    {
        year:'2007',
        title:'Berdirinya sekolah formal',
        description:'Berdirinya sekolah formal tingkat PAUD/RA/TK',
        icon:'',
        color:'',
    },
    {
        year:'2008',
        title:'Berdirinya sekolah formal',
        description:'Berdirinya sekolah formal tingkat MI/SD',
        icon:'',
        color:'',
    },
    {
        year:'2023',
        title:'Berkembangnya sekolah menjadi sekolah berasrama',
        description:'Dibukanya asrama sekolah untuk tingkat MTs dan MA',
        icon:'',
        color:'',
    },
]

const visiMisi = [
    {
        logo:'/img/visi.png',
        title: 'visi kami',
        text: 'Menjadi lembaga pendidikan yang unggul dalam membentuk generasi yang berilmu, berakhlak, dan mandiri',
    },
    {
        logo:'/img/misi.png',
        title: 'misi kami',
        text: `
        - Menyelenggarakan pendidikan yang berkualitas dan berorientasi masa depan 
        - Mengintegrasikan ilmu pengetahuan dengan nilai-nilai keislaman 
        - Mengembangkan potensi peserta didik secara optimal 
        - Membangun budaya belajar yang inovatif dan berkelanjutan
        `,
    },
]

const aboutUs = `
Yayasan Al-Ittifaq Bandung merupakan perjalanan panjang lembaga pendidikan yang telah tumbuh dan berkembang sejak tahun 1934 di wilayah Ciwidey, Kabupaten Bandung.

Seiring berjalannya waktu, lembaga ini mengalami beberapa fase perkembangan yang dinamis, mengikuti kebutuhan masyarakat dan tantangan zaman. Transformasi tersebut menjadi pondasi kuat dalam membangun sistem pendidikan yang adaptif, berkelanjutan, dan berorientasi pada kualitas.

Dalam perjalanannya, beberapa unit yang sebelumnya berada dalam satu naungan telah berkembang dan berdiri secara mandiri, termasuk bidang Agribisnis, Koperasi, dan Pesantren.

Sebagai bagian dari proses pematangan organisasi, dilakukan penataan kelembagaan agar setiap bidang dapat berkembang lebih fokus dan profesional.

Saat ini, Yayasan Al-Ittifaq Bandung secara khusus berfokus pada "pengelolaan dan pengembangan sektor pendidikan". Langkah ini diambil untuk memastikan kualitas pendidikan yang lebih terarah, sistematis, dan berkelanjutan.

Sebagai yayasan yang berorientasi pada pendidikan, Yayasan Al-Ittifaq Bandung berkomitmen untuk:
- Menyelenggarakan pedidikan yang berkualitas dan berkarakter
- Mengintegrasikan nilai keislaman, moral, dan keilmuan
- Menciptakan lingkungan belajar yang inovatif dan adaptif terhadap perkembangan zaman
- menghasilkan lulusan yang kompeten, berakhlak, dan siap menghadapi tantangan global

Dalam menjalankan misinya, yayasan menaungi berbagai lembaga pendidikan, antara lain:
- Pendidikan Anak Usia Dini (RA/TK)
- Pendidikan Dasar (MI/SD)
- Pendidikan Menengah (MTs/SMP & MA/SMA)
- Pendidikan Keagamaan
- Program Pengembangan Kompetensi Siswa
Setiap unit dirancang untuk saling berintegrasi dalam menciptakan ekosistem pendidikan yang holistik.

Meskipun saat ini berfokus pada pendidikan, Yayasan Al-Ittifaq Bandung tetap membawa nilai-nlai kuat dari sejarah panjangnya, yaitu:
- Kemandirian
- Kedisiplinan dan kerja keras
- kepedulian sosial terhadap masyarakat
- semangat inovasi dan adaptasi
Nilai-nilai ini menjadi ciri khas yang membedakan sistem pendidikan di lingkungan yayasan.

Dengan pengalaman panjang dan fondasi nilai yang kuat, Yayasan Al-Ittifaq Bandung terus berkomitmen untuk menjadi bagian penting dalam mencetak generasi yang tidak hanya cerdas secara intelektual, tetapi juga memiliki integritas dan kepedulian sosial yang tinggi.
`;

export const formattedText = (text:string): React.ReactNode => {
    const lines = text.split('\n').map(line => line.trim());
    const elements: JSX.Element[] = []
    let currentList: string[] = []

    lines.forEach((line, index) => {
        if(line.startsWith('- ')) {
            currentList.push(line.replace('- ', ''))
        } else {
            if (currentList.length > 0) {
                elements.push(
                    <ul key={`ul-${index}`} className="list-disc pl-8 mb-4 space-y-1">
                        {currentList.map((item, i) => (
                            <li key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )
                currentList = []
            }

            if (line !== '') {
                elements.push(
                    <p key={`p${index}`} className="indent-8 mb-4">
                        {line}
                    </p>
                )
            }
        }
    })

    if (currentList.length > 0) {
        elements.push(
            <ul key={'ul-last'} className="list-disc pl-8 mb-4 space-y-1">
                {currentList.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        )
    }
    return elements
}

export function DraftAboutUs(){
    return(
        <div className="w-full">
            <TitleTypeC title="siapa kami" />
            
            <div className="grid md:grid-cols-3">
                <div className="mx-10 rounded-md text-justify justify-center col-span-2">
                    {formattedText(aboutUs)}
                    <VisiMisiParts /> 
                </div>
                <div className="w-full justify-center mb-5">
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
        <div className="grid md:grid-cols-2 justify-center items-center text-center mt-5 mb-10">
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
            <TitleTypeC
                title="nilai-nilai kami"
            />

            <Values/>
        </div>
    )
}

export function FounderTeamParts(){
    return (
        <div className="mx-5 mt-5 mb-10">
            <TitleTypeC title="pendiri & tim inti" />

            <TeamCards/>
        </div>
    )
}

export function GraduationsParts(){
    return (
        <div className="mx-5 mt-5 mb-10">
            <TitleTypeC title="lulusan madrasah kami" />

            <GraduateCards />
        </div>
    )
}