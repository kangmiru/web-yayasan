interface InformationTextProps {
    text: string
}

export function InformationText({text}:InformationTextProps){
    return(
        <div className="text-justify mb-5">
            {text.split('\n\n').map((paragraph, index) => (
                <p 
                    key={index}
                className="indent-5 mb-4">
                    {paragraph}
                </p>
            ))}
        </div>
    )
}