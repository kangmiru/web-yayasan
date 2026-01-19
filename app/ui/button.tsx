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