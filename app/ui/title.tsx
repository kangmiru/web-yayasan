interface TitleProps {
    title: string
}

export function TitleTypeA({title}:TitleProps){
    return (
        <h2 className="capitalize text-start text-2xl font-semibold text-blue-900 my-4 underline underline-offset-8">
            {title}
        </h2>
    )
}

export function TitleTypeB({title}:TitleProps){
    return (
        <h2 className="capitalize text-2xl text-center font-semibold text-blue-900 underline underline-offset-8 decoration-green-700">
            {title}
        </h2>
    )
}

export function TitleTypeC({title}:TitleProps){
    return (
        <h2 className="capitalize text-2xl font-bold text-blue-900 mb-5 pt-10 mx-14">
            {title}
        </h2>
    )
}

export function TitleTypeD({title}:TitleProps){
    return (
        <h1 className=" capitalize text-3xl pt-10 font-semibold tracking-wide">
            {title}
        </h1>
    )
}