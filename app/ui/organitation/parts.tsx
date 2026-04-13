'use client'

import { FormattedText } from "../animated";
import { ButtonA, ButtonD } from "../button";
import { TitleTypeD } from "../title";
import { GalleryCards, Information, ProgramCards, RegistrationCards } from "./cards";
import { InformationText } from "./text";
import { motion } from "framer-motion"

interface AboutSchoolProps {
    madrasah:string
    link:string
    label:string
}

interface ProgramPartsProps{
    madrasah:string
}

interface RegistrationFlowPartsProps {
    link: string
}

const textRA = `
RA Alif Al-Ittifaq adalah lembaga pendidikan anak usia dini yang berkomitmen dalam menciptakan lingkungan belajar yang aman, menyenangkan, dan penuh kasih sayang. Kami membantu anak-anak tumbuh dan berkembang secara optimal melalui pendekatan belajar sambil bermain.

Didirikan pada tahun 2007, RA Alif Al-Ittifaq hadir sebagai bentuk kepedulian terhadap pentingnya pendidikan usia dini yang berkualitas. Sejak awal, kami berfokus pada pembentukan karakter, kemandirian, serta nilai-nilai moral dan spiritual anak.

Kami menghadirkan berbagai program unggulan seperti pembelajaran berbasis bermain, pengembangan motorik halus dan kasar, pengenalan nilai-nilai keagamaan, serta kegiatan kreatif yang dirancang untuk merangsang imajinasi dan kepercayaan diri anak.

Untuk mendukung perkembangan sosial dan emosional anak, kami rutin mengadakan berbagai kegiatan seperti outing class, perayaan hari besar nasional dan keagamaan, pentas seni, serta kegiatan parenting bersama orang tua.

Lingkungan belajar kami dirancang ramah anak, aman, dan nyaman, dilengkapi dengan fasilitas bermain edukatif serta tenaga pendidik yang berpengalaman dan penuh kasih.

Lulusan RA Alif Al-Ittifaq telah berhasil melanjutkan pendidikan ke berbagai sekolah dasar unggulan dengan bekal kemandirian, kepercayaan diri, serta kemampuan dasar yang baik.

Mari bergabung bersama kami dalam membentuk generasi masa depan yang cerdas, berakhlak mulia, dan percaya diri.
`

const textMI = `
MI Alif Al-Ittifaq adalah lembaga pendidikan tingkat dasar yang berkomitmen dalam membentuk generasi yang cerdas, berakhlak mulia, dan berlandaskan nilai-nilai Islam. Dengan pendekatan pembelajaran yang aktif dan islami, kami menghadirkan lingkungan belajar yang nyaman, aman, dan penuh keberkahan bagi setiap peserta didik.

Didirikan pada tahun 2008, MI Alif Al-Ittifaq hadir sebagai upaya untuk memberikan pendidikan dasar yang mengintegrasikan ilmu pengetahuan umum dengan pendidikan agama Islam. Sejak awal berdirinya, madrasah ini berkomitmen untuk mencetak generasi yang tidak hanya unggul dalam akademik, tetapi juga memiliki keimanan dan akhlak yang baik.

Dalam rangka mengembangkan potensi siswa secara menyeluruh, MI Alif Al-Ittifaq menghadirkan berbagai program unggulan, di antaranya:
- Pembiasaan ibadah harian (shalat dhuha, shalat berjamaah, ziarah)
- Pembelajaran terpadu antara kurikulum umum dan keislaman
- Penguatan karakter islami (akhlakul karimah)
- Ekstrakurikuler seperti pramuka dan beladiri
Program-program ini dirancang untuk membentuk siswa yang seimbang antara kecerdasan intelektual, emosional, dan spiritual.

MI Alif Al-Ittifaq secara rutin menyelenggarakan berbagai kegiatan yang mendukung perkembangan siswa, baik secara akademik maupun spiritual. Kegiatan tersebut meliputi peringatan hari besar Islam, pesantren kilat, lomba keagamaan, pentas seni islami, serta kegiatan sosial seperti bakti sosial dan santunan. Selain itu, kegiatan outing class dan study tour juga dilaksanakan untuk memberikan pengalaman belajar yang lebih luas.

Lingkungan belajar di MI Alif Al-Ittifaq dirancang untuk mendukung kenyamanan dan keamanan siswa, dengan suasana yang islami dan kondusif. Fasilitas yang tersedia meliputi ruang kelas yang nyaman, area bermain, perpustakaan, serta sarana pendukung lainnya. Didukung oleh tenaga pendidik yang profesional dan berakhlak, kami berupaya memberikan pendidikan terbaik bagi setiap siswa.

Lulusan MI Alif Al-Ittifaq telah melanjutkan pendidikan ke berbagai jenjang yang lebih tinggi, baik di sekolah umum maupun madrasah. Dengan bekal ilmu pengetahuan, hafalan Al-Quran, serta akhlak yang baik, para alumni mampu menjadi pribadi yang percaya diri dan berdaya saing.

Mari bergabung bersama MI Alif Al-Ittifaq dalam mencetak generasi yang berilmu, beriman, dan berakhlakul karimah untuk masa depan yang lebih baik.
`

const textMTs = `
MTs Alif Al-Itifaq Boarding School merupakan lembaga pendidikan tingkat menengah pertama yang mengintegrasikan ilmu pengetahuan umum dengan nilai-nilai keislaman dalam setiap aspek pembelajaran dan kehidupan siswa. Sejak awal berdirinya, madrasah ini berkomitmen untuk mencetak generasi yang tidak hanya unggul secara akademik, tetapi juga memiliki akhlakul karimah, kemandirian, serta tanggung jawab sebagai seorang muslim.

Didirikan pada tahun 2003, MTs Alif Al-Ittifaq memulai perjalanannya sebagai Madrasah Tsanawiyah yang berfokus pada pendidikan dasar keislaman dan akademik. Dalam perjalanannya, madrasah terus berkembang dengan berbagai inovasi dalam metode pembelajaran, peningkatan kualitas tenaga pendidik, serta penyempurnaan fasilitas guna memberikan lingkungan belajar yang lebih baik bagi peserta didik.

Seiring dengan perkembangan zaman dan meningkatnya kebutuhan akan pendidikan yang lebih terarah dan menyeluruh, pada tahun 2021 MTs Alif Al-Ittifaq melakukan transformasi menjadi boarding school dengan menyediakan fasilitas asrama bagi siswa. Transformasi ini menjadi langkah strategis dalam meningkatkan kualitas pendidikan, di mana proses pembinaan tidak hanya berlangsung di dalam kelas, tetapi juga dalam kehidupan sehari-hari siswa di lingkungan madrasah.

Melalui sistem boarding school, siswa mendapatkan pendampingan yang lebih intensif, baik dalam bidang akademik, pembentukan karakter, maupun pembiasaan nilai-nilai keislaman. Kegiatan harian siswa dirancang secara terstruktur, mencakup pembelajaran di kelas, kegiatan ibadah, pembinaan akhlak, serta pengembangan minat dan bakat. Lingkungan yang kondusif dan islami ini memungkinkan siswa untuk tumbuh menjadi pribadi yang disiplin, mandiri, serta memiliki kepedulian sosial yang tinggi.

Dalam proses pembelajaran, MTs Alif Al-Ittifaq Boarding School menggabungkan kurikulum nasional dengan kurikulum keagamaan secara seimbang. Pendekatan pembelajaran yang digunakan bersifat aktif, kreatif, dan inovatif, sehingga mampu mendorong siswa untuk berpikir kritis, berprestasi, serta memiliki semangat belajar yang tinggi. Selain itu, berbagai kegiatan ekstrakurikuler dan program pengembangan diri juga disediakan sebagai wadah untuk menggali potensi siswa secara optimal.

Didukung oleh tenaga pendidik yang profesional, berpengalaman, dan berdedikasi, MTs Alif Al-Ittifaq Boarding School senantiasa berupaya memberikan pendidikan yang berkualitas serta pelayanan terbaik bagi siswa dan orang tua. Kami percaya bahwa setiap anak memiliki potensi yang unik, sehingga perlu dibimbing dengan pendekatan yang tepat agar mampu berkembang secara maksimal.

Hingga saat ini, MTs Alif Al-ittifaq Boarding School terus berkomitmen untuk menjadi lembaga pendidikan yang unggul, adaptif, dan berdaya saing, serta mampu mencetak generasi yang berilmu, beriman, dan berakhlakul karimah. Dengan semangat perubahan dan inovasi, kami siap menjadi bagian dalam membentuk masa depan generasi penerus bangsa yang lebih baik.
`

const textMA = `
MA Alif Al-Ittifaq merupakan lembaga pendidikan tingkat menengah atas yang berkomitmen dalam mencetak generasi unggul yang berilmu, beriman, dan berakhlakul karimah. Dengan mengintegrasikan pendidikan akademik dan nilai-nilai keislaman, kami menghadirkan sistem pembelajaran yang tidak hanya berorientasi pada prestasi, tetapi juga pada pembentukan karakter dan kesiapan masa depan siswa.

Sebagai bagian dari pengembangan pendidikan yang berkelanjutan, MA Alif Al-Ittifaq hadir untuk melanjutkan proses pembinaan peserta didik ke jenjang yang lebih tinggi, dengan fokus pada pendalaman ilmu pengetahuan, penguatan spiritual, serta pengembangan potensi diri secara optimal. Kami percaya bahwa masa Madrasah Aliyah merupakan fase penting dalam menentukan arah masa depan, baik dalam melanjutkan pendidikan ke perguruan tinggi maupun dalam kehidupan bermasyarakat.

Sejalan dengan perkembangan sistem pendidikan, MA Alif Al-Ittifaq juga mengadopsi konsep boarding school yang memungkinkan pembinaan siswa dilakukan secara lebih intensif dan menyeluruh. Dengan adanya fasilitas asrama, siswa tidak hanya mendapatkan pembelajaran di dalam kelas, tetapi juga pembinaan dalam kehidupan sehari-hari yang menanamkan nilai kedisiplinan, kemandirian, tanggung jawab, serta kebiasaan ibadah yang konsisten.

Proses pembelajaran di MA Alif Al-Ittifaq Boarding School menggabungkan kurikulum nasional dengan kurikulum keislaman yang dirancang secara seimbang. Pendekatan yang digunakan bersifat aktif, kritis, dan aplikatif, sehingga siswa mampu memahami materi secara mendalam serta mengembangkan kemampuan berpikir analitis dan problem solving. Selain itu, program pengembangan diri seperti organisasi siswa, kegiatan kepemimpinan, serta berbagai ekstrakurikuler menjadi sarana dalam membentuk jiwa kepemimpinan dan keterampilan sosial siswa.

Dalam upaya mempersiapkan siswa menghadapi jenjang pendidikan yang lebih tinggi, MA Alif Al-Ittifaq Boarding School juga memberikan pembinaan akademik yang terarah, termasuk bimbingan masuk perguruan tinggi, penguatan literasi, serta pengembangan minat sesuai dengan potensi masing-masing siswa. Dengan demikian, lulusan diharapkan mampu bersaing dan beradaptasi di lingkungan yang lebih luas.

Didukung oleh tenaga pendidik yang profesional dan berpengalaman, serta lingkungan belajar yang kondusif dan islami, MA Alif Al-Ittifaq Boarding School terus berkomitmen untuk memberikan pendidikan terbaik. Kami berupaya menciptakan generasi muda yang tidak hanya cerdas secara intelektual, tetapi juga memiliki integritas, keimanan, dan kesiapan dalam menghadapi tantangan global.

Dengan semangat inovasi dan pengembangan berkelanjutan, MA Alif Al-Ittifaq Boarding School hadir sebagai pilihan tepat bagi orang tua dan siswa yang menginginkan pendidikan menengah atas yang berkualitas, berlandaskan nilai-nilai Islam, serta berorientasi pada masa depan.
`

export function AboutSchool({madrasah, link, label}:AboutSchoolProps){
    return (
        <div className="bg-sky-100 p-10 rounded-sm">
            <TitleTypeD title={`tentang ${madrasah}`} />

            <div className="grid md:grid-cols-3 my-5 gap-3 md:gap-5 items-start">
                <div className="col-span-2 text-justify">
                    {madrasah === 'MI alif al-ittifaq' ?
                        <FormattedText
                            text={textMI}
                        />
                        : madrasah === 'RA alif al-ittifaq' ?
                        <InformationText 
                            text={textRA}
                        />
                        : madrasah === 'MTs alif al-ittifaq' ?
                        <FormattedText 
                            text={textMTs}
                        />
                        : madrasah === 'MA alif al-ittifaq' ?
                        <InformationText 
                            text={textMA}
                        />
                        : ''
                    }

                    <motion.div 
                        className="flex gap-3 items-center"
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.7}}
                        viewport={{once:true}}
                    >
                        <ButtonA title="Daftar sekarang" link={link}/>
                        <ButtonD title="unduh brosur" link={link} />
                    </motion.div>
                </div>

                

                <motion.div 
                    className="w-full rounded-sm bg-white border border-black/10 shadow-sm backdrop-blur-2xl"
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.8, ease:'easeOut'}}
                >
                    <Information title={madrasah} label={label}/>
                </motion.div>
            </div>

        </div>
    )
}

export function ProgramParts({madrasah}:ProgramPartsProps){
    return (
        <motion.div 
            className="px-10 py-5 rounded-sm"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <div className="text-center">
                <TitleTypeD title="program unggulan madrasah"/>
            </div>

            <ProgramCards
                title={madrasah}
            />

        </motion.div>
    )
}

export function GalleryParts(){
    return(
        <motion.div 
            className="px-10 py-5 bg-sky-100 rounded-sm"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <div className="text-center">
                <TitleTypeD title="galeri & aktivitas siswa" />
            </div>

            <GalleryCards/>

            <div className="mx-20 my-5 text-center">
                <ButtonA 
                    title="Selengkapnya"
                    link="https://www.instagram.com/madrasahalifofc/"
                />
            </div>
        </motion.div>
    )
}

export function RegistrationFlowParts({link}:RegistrationFlowPartsProps){
    return(
        <motion.div 
            className="px-10 py-5 rounded-sm"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            <TitleTypeD title="alur pendaftaran siswa baru"/>

            <div className="mt-3">
                <RegistrationCards link={link} />
            </div>
        </motion.div>
    )
}