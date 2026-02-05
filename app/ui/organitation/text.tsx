interface InformationTextProps {
    text: string
}

export function InformationText({text}:InformationTextProps){
    return(
        <p className="indent-5 text-justify mb-5">
            {text}
        </p>
    )
}