import Image from "next/image";

const cth_foto_ig = [
    {
        src:'/img/profile.jpg',
    },
    {
        src:'/img/profile.jpg',
    },
]

export function InstagramGrid(){
    return (
        <div className="mx-3 my-5 grid grid-cols-2 gap-2 items-center justify-center">
            {cth_foto_ig.map((img, index) => {
                return(
                    <div
                        key={index}
                        className={`relative aspect-square overflow-hidden rounded-md ${
                            index === 2 ? 'md:hidden lg:block':''
                        }`}
                    >
                        <Image
                            src={img.src}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export function YoutubeGrid(){
    return (
        <div className="mx-3 my-5 flex gap-2 items-center justify-center">
            <div className="relative w-full max-w-xl aspect-video overflow-hidden rounded-md">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/cqgsPUD-BwA"
                    title="video terbaru"
                    allow="accelerometer; autoplay; clopboard-white; encrypted-media; gyroscope; picture-to-picture"
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export function TiktoGrid(){
    return(
        <div className="mx-3 my-5 grid grid-cols-2 gap-2 items-center justify-center">
            {cth_foto_ig.map((img, index) => {
                return(
                    <div
                        key={index}
                        className={`relative aspect-square overflow-hidden rounded-md ${
                            index === 2 ? 'md:hidden lg:block':''
                        }`}
                    >
                        <Image
                            src={img.src}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                )
            })}
        </div>
    )
}