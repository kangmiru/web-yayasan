'use client'

interface NavButtonProps {
    title: string
    link: string
    slug: string
}

export function NavButton({title, link, slug}:NavButtonProps){
    return (
        <button className="text-white capitalize hover:bg-blue-700 rounded-md font-semibold">
            <div className="m-3">{title}</div>
        </button>
    )
}

export function ButtonA(){
    return(
        <button className="text-white capitalize bg-blue-800 rounded-md filter drop-shadow-2xl hover:bg-transparent hover:border hover:border-b-2 hover:border-white">
            <div className="m-3">
                <p className="font-semibold tracking-wide">donasi sekarang</p>
            </div>
        </button>
    )
}

export function ButtonB(){
    return(
        <button className="text-white capitalize bg-transparent rounded-md border border-b-2 border-white hover:bg-blue-800 hover:rounded-md hover:filter hover:drop-shadow-2xl hover:border-none">
            <div className="m-3">
                <p className="font-semibold tracking-wide">pelajari lebih lanjut</p>
            </div>
        </button>
    )
}