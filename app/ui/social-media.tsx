import Image from "next/image";

const cth_foto_ig = [
    {
        src:'/img/aboutus.jpg',
    },
    {
        src:'/img/aboutus.jpg',
    },
    {
        src:'/img/aboutus.jpg',
    },
]

export function InstagramGrid(){
    return (
        <div className="mx-3 my-5 flex flex-cols gap-2 items-center justify-center">
            {cth_foto_ig.map((img, index) => {
                return(
                    <div
                        key={index}
                        className={`${
                            index === 2 ? 'md:hidden lg:block':''
                        }`}
                    >
                        <Image
                            src={img.src}
                            alt=""
                            width={130}
                            height={130}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export function YoutubeGrid(){
    return (
        <div className="mx-3 my-5 flex flex-cols-2 gap-2 items-center justify-center">
            <Image 
                src={'/img/hero.jpg'}
                alt=""
                width={390}
                height={100}
            />
        </div>
    )
}

export function TiktoGrid(){
    return(
        <div className="mx-3 my-5 flex flex-rows gap-2 items-center justify-center">
            <Image
                src={'/img/aboutus.jpg'}
                alt=""
                width={100}
                height={200}
            />
            <Image
                src={'/img/aboutus.jpg'}
                alt=""
                width={100}
                height={200}
            />
        </div>
    )
}