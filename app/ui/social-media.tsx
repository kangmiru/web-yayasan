import Image from "next/image";

export function InstagramGrid(){
    return (
        <div className="mx-3 my-5 flex flex-cols-3 gap-2 items-center justify-center">
            <Image
                src={'/img/aboutus.jpg'}
                alt=""
                width={130}
                height={130}
            />
            <Image
                src={'/img/aboutus.jpg'}
                alt=""
                width={130}
                height={130}
            />
            <Image
                src={'/img/aboutus.jpg'}
                alt=""
                width={130}
                height={130}
            />
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