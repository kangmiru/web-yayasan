import Image from "next/image";

const cth_foto_ig = [
    'https://www.instagram.com/p/DUYIpilkumE/',
]

const post_tiktok =[
    'https://www.tiktok.com/@madrasahalifofc/video/7644801492662209810/',
]

export function InstagramGrid(){
    return (
        <div className="mx-3 my-5 flex flex-col gap-2 items-center justify-center">
            {cth_foto_ig.map((img, index) => {
                return(
                    <div
                        key={index}
                        className={`relative aspect-square overflow-hidden rounded-md ${
                            index === 2 ? 'md:hidden lg:block':''
                        }`}
                    >
                        <iframe
                            className="w-full"
                            title="postingan terbaru"
                            src={`${img}embed/`}
                            height={500}
                            style={{
                                aspectRatio: "9 / 16",
                            }}
                            allow="fullscreen"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export function YoutubeGrid(){
    return (
        <div className="mx-3 my-5 flex flex-col gap-2 items-center justify-center">
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
        <div className="mx-3 my-5 flex flex-col gap-2 items-center justify-center">
            {post_tiktok.map((img, index) => {
                return(
                    <div
                        key={index}
                        className={`relative aspect-square overflow-hidden rounded-md ${
                            index === 2 ? 'md:hidden lg:block':''
                        }`}
                    >
                        <iframe
                            className="w-full"
                            title="postingan terbaru"
                            src={`${img}embed/`}
                            height={500}
                            style={{
                                aspectRatio: "9 / 16",
                            }}
                            allow="fullscreen"
                        />
                    </div>
                )
            })}
        </div>
    )
}