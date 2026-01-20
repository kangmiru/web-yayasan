import Image from "next/image";
import { ButtonA, ButtonB } from "./button";

export function HeroParts(){
    return(
        <section className=" w-full h-full -z-10 overflow-hidden absolute">

            {/* Hero Image */}
            <Image 
                src={'/img/hero.jpg'}
                alt=""
                fill
                className="object-cover"
            />

            {/* Gradasi overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-r from-blue-900 via-blue-900/90"></div>

            {/* Konten hero */}
            <div className="absolute z-20 flex h-full items-center ms-10">
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