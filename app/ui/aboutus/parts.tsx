'use client'

import { GraduateCards, TeamCards, Values, VisiMisi } from "./cards"
import { TitleTypeC } from "../title"
import { FormattedText } from "../animated"
import { motion } from "framer-motion";

const timelineData = [
    {
        year:'1934',
        title:'perkembangan yayasan',
        description:'Awal berkembangnya yayasan',
        icon:'',
        color:'',
    },
    {
        year:'1997',
        title:'berdirinya yayasan',
        description:'Resminya yayasan Al-Ittifaq berdiri',
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
Yayasan Al-Ittifaq Bandung merupakan perjalanan panjang lembaga pendidikan yang telah tumbuh dan berkembang sejak tahun 1934 di wilayah Ciwidey, Kabupaten Bandung. Yang resmi berdiri pada tahun 1997 didirikan oleh KH. Fuad Affandi.

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

export function DraftAboutUs(){
    return(
        <div className="w-full">
            <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
            >
                <TitleTypeC title="siapa kami" />
            </motion.div>
            
            <div className="grid md:grid-cols-3">
                <motion.div 
                    className="mx-10 rounded-md text-justify justify-center col-span-2"
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.7}}
                    viewport={{once:true}}
                >
                    <FormattedText text={aboutUs} />
                    <VisiMisiParts /> 
                </motion.div>

                <div className="w-full justify-center mb-5">
                    <TimelineParts/>
                </div>
            </div>
        </div>
    )
}

export function TimelineParts(){
    return (
        <div className="relative border-l-2 border-blue-900 left-6 md:left-0">
            {timelineData.map((timeline,index) => {
                return(
                    <div key={index} className="mb-12 -top-5 relative">
                        {/* dot */}
                        <motion.div
                            initial={{opacity:0, y:50}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.7}}
                            viewport={{once:true}}
                        >
                            <span className="absolute left-0 top-1 -translate-x-1/2 w-6 h-6 bg-blue-900 rounded-full border-4 border-blue-500"/>
                        </motion.div>

                        {/* content */}
                        <motion.div 
                            className="ms-5"
                            initial={{opacity:0, x:100}}
                            animate={{opacity:1, x:0}}
                            transition={{duration:0.8, ease:'easeOut'}}
                        >
                            <h3 className="text-xl font-bold text-gray-900">
                                {timeline.year}
                            </h3>
                            <p className="mt-2 leading-relaxed">
                                {timeline.description}
                            </p>
                        </motion.div>

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
        <motion.div 
            className="m-5"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <TitleTypeC
                title="nilai-nilai kami"
            />

            <Values/>
        </motion.div>
    )
}

export function FounderTeamParts(){
    return (
        <motion.div 
            className="mx-5 mt-5 mb-10"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <TitleTypeC title="pendiri & tim inti" />

            <TeamCards/>
        </motion.div>
    )
}

export function GraduationsParts(){
    return (
        <motion.div 
            className="mx-5 mt-5 mb-10"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <TitleTypeC title="lulusan madrasah kami" />

            <GraduateCards />
        </motion.div>
    )
}