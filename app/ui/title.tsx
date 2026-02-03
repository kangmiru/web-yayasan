interface TitleAboutUsProps {
    title: string
}

export function TitleAboutUs({title}:TitleAboutUsProps){
    return (
        <h2 className="capitalize text-2xl font-bold text-blue-900 mb-5 pt-10 mx-14">
            {title}
        </h2>
    )
}