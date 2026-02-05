import Link from "next/link";
import { ButtonA, ButtonD } from "../button";
import { TitleTypeD } from "../title";
import { Information, ProgramCards } from "./cards";
import { InformationText } from "./text";

export function AboutSchool(){
    return (
        <div className="bg-white mt-10 mx-10">
            <TitleTypeD title="tentang madrasah" />

            <div className="grid grid-cols-3 my-5 gap-5 items-start">
                <div className="col-span-2">
                    <InformationText 
                        text="yayasan kami menyediakan 4 jenjang pendidikan dimulai dari tingkat RA setingkat TK, MI setingkat SD, MTs setingkat SMP, dan MA setingkat SMA. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, explicabo?"
                    />
                    <InformationText 
                        text="Madrasah kami juga mendapatkan akreditasi B untuk tingkat RA, akreditasi B untuk tingkat RA, akreditasi A untuk tingkat MTs, dan akreditasi A untuk tingkat MA. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae fugit provident consectetur sunt vero ut libero nam, sequi nihil temporibus dolores necessitatibus porro incidunt saepe nisi veniam similique dolorum iure! Quo voluptas vero facere sint quis delectus molestias nesciunt, nostrum deserunt provident, hic sed sapiente deleniti accusamus temporibus aut?"
                    />

                    <div className="flex gap-3 items-center">
                        <ButtonA title="Daftar sekarang" link=""/>
                        <ButtonD title="unduh brosur" link="" />
                    </div>
                </div>

                

                <div className="max-w-screen rounded-sm bg-white border border-black/10 shadow-sm backdrop-blur-2xl">
                    <Information/>
                </div>
            </div>

        </div>
    )
}

export function ProgramParts(){
    return (
        <div className="m-10">
            <div className="text-center">
                <TitleTypeD title="program unggulan madrasah"/>
            </div>

            <ProgramCards/>

        </div>
    )
}